
# [._] StrongType
Meta 가득한 **Meta Type** 라이브러리
>현재 두 가지 형태의 라이브러리가 제작중에 있습니다.
>하나는 mater 브랜치에, 하나는 feature/Type 브랜치에 존재합니다.
>이 문서에서 다루는 typedscript.js는 \#\#\#(CreeJee)가 작업한 라이브러리를 의미합니다.
>(주로 실험적인 기능 및 설정이 올라갈 확률이 높음)
>
>**기타 공지**
>\_\_{FunctionName}\_\_ 와 유사한 함수명들은 내부의 특수한 목적으로 사용되며 동작은 보장하지 않습니다.
## 설치
webpack4,babel을 이용한 변환은 현재 배타입니다.
(Conversion using webpack is currently being tested.(beta))
## Global
## _T._Type
가장 기본이 되는  타입을 의미 합니다.
### 사용
```javascript
const foo = new _T._Type({value : Any});
```
### 타입 채크 대입 
```javascript
const foo = new _T._Type("foo");
const bar = new _T._Type("bar");
const buzz = new _T._Type(30);

foo._ = bar;  //foo will be "bar"
bar._ = buzz  //it will thrown error
```
### method
-  public
	- \_\_getName\_\_()
		- static method의 설탕 
	- \_\_typeCheck\_\_({value : Any})
		- static method의 설탕
	- toString()
	- valueOf()
	- get _()
		- 내부값 리턴시 사용
	- set _({value : Any})
		- 타입을 확인후 에러 혹은 대입
-  static
	- \_\_getName\_\_({value : Any})
		-  대상의 생성자 이름을 리턴하는 설탕
	- \_\_generateInstance\_\_({value : Any})
		- > 정상적으로 사용하기 위하여 몇가지 전제를 필요로 합니다.
				1. _T._Type 을 상속하지 않을때,빈 생성자에 대하여 처리가 되는경우  
				2. _T._Type 을 상속할경우 생성자에 하나의 인자만 받을경우
				모두 맞으면 clone된 인스턴스를 반환
	- \_\_typeCheck\_\_({value : Any , value : Any})
		- >  정상적으로 사용하기 위하여 한가지 전제를 필요로 합니다.
				1. 생성자 이름이 같지않을경우
				모두 맞으면 생성자 비교후 오브젝트 리턴 혹은 그전에 에러 리턴
	- \_\_equalType\_\_({value : Any , value : Any})
		- \_\_typeCheck\_\_ 와 전제가 같음
- virtual
	- clone()
		- 참조를 끊기위한 사용 
	- vaild({value : Any})
	- conversion({value : Any}) 
	- get __name()
		- >	생성자 이름을 식별하기 위함
			(반드시 \_T.\_Type 를 상속하지 않아도 그 숙성을 생성자 이름으로 인식하지만 권장하진 않습니다.)
## _T._Struct (extends _Type)
### 사용
```javascript
const foo = new _T._Struct({value : Any});
```
###  빠른 가이드
```javascript
const foo = new _T._Type("foo");
const fooStruct = new _T._Struct(foo);
const barStruct = fooStruct.toClass((type,...args)=>{
	if (args.length != 1) {
		throw new Error("BarStruct's accept size is 1");
	}
	type.name = "bar"; //it will be type(constructor) name
	type._ = args[0];
});
//it will true
console.log(fooStruct.toType() === foo);
console.log(barStruct.construct.name === "bar");
console.log(new BarStruct("value").toString() === "bar<String>");
```
### method
-  public
	- toType()
	- toClass({constructor : Function})
## _MetaFunction (extends _Type)
### 사용
```javascript
const foo = new _T._MetaFunction({arguments: (Array or extends Array) instance,constructor : Function});
or
const foo = new _T._MetaFunction({arguments: (Array or extends Array) : Class});
```
###  빠른 가이드
```javascript
const _Type = _T._Type;
const foo = new _Type("foo");
const lambda = new _MetaFunction(
		[foo,foo],
		function(StringMeta1,StringMeta2){
			return `${StringMeta1._}/${StringMeta2._}`;
		}
	);
console.log(lambda( new _Type("foo"),new _Type("bar") )); 			    //"foo/bar"
console.log(lambda.call(null,new _Type("foo"),new _Type("bar")) )       //"foo/bar"
console.log(lambda.apply(null, [new _Type("foo"),new _Type("bar")] ))   //"foo/bar"

lambda.bind(null,new _Type("binded_Str")); //binded lambda 
console.log( lambda.call(null,new _Type("calledString")) ); 			//"binded_Str/calledString"
```
> 함수를 생성자 혹은 class 로 사용하는것을 가능하지만 권장하진 않습니다.
> (It is possible to use function or class as constructor, but it is not recommended.)
### method
-  public
	- apply({thisArg : Any , argsApply : Array})
	- bind({thisArg : Any , ...args : Any})
	- call({thisArg : Any , ...args : Any})
- virtual
	- vaild({value : Any})
	- conversion({value : Any})  
## _TypedArray (extends Array)
배열에서 확장한것입니다.
> 배타버전 이며 사용시의 책임은 없음을 미리 명시합니다.
### 사용
```javascript
const foo = new _T._TypedArray({type: Array , ...items : Any});
```
###  빠른 가이드
```javascript
const _Type = _T._Type;
const TypedArray = _T.TypedArray;

const foo = new _Type("foo");
const fooArray = new TypedArray(foo,new _Type("0"),new _Type("1")) //["0","1"]
const errArray = new TypedArray(foo,new _Type(0),new _Type(1))		// 초기에 추가하는 타입과 다르니 에러 

fooArray.push(2); // 타입과 다르니 에러
fooArray.push("2"); // 3
//그외에는 배열과 같음
```
### method
-  public
	- constructor({type : Any , ...items : Any})
		- 타입과 같아야함 
