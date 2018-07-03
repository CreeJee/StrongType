# [._] StrongType
StrongType은 자바스크립트의 다른형태의 강타입 라이브러리 입니다.
##이 라이브러리는 이런사람에게 권합니다
1. 쓸대없이 함수의 인자에 전처리를 함으로서 로직이 늘어지는것을 싫어하는 사람. 
2. 모든 함수및 생성자에 극단적으로 인자를 고정시킴으로서 확실하게 개발하길 원하는사람
>\_\_{FunctionName}\_\_ 와 유사한 함수명들은 내부의 특수한 목적으로 사용되며 당신의 의도한 동작은 보장하지 않습니다.
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
	- \_\_typeCheck\_\_({object : Any , ref : Any})
		- >  비교조건 
				1. 서로 같은 오브젝트인 경우
				2. ref가 object.constructor과 같은경우
				3. ref.constructor 가 object.constructor 와 같은경우
				4. ref,object 둘다 Symbol.toStringTag 값이 undefined가 아니면서 둘다 Symbol.toStringTag 값이 같을경우 
				- 위 경우중 하나라도 일치하면 true
	- \_\_equalType\_\_({value : Any , value : Any})
		- \_\_typeCheck\_\_ 와 전제가 같음
	- get [Symbol.toStringTag]()
		- 주로 자신의 타입이 어떤지에 대한 사용
- virtual
	- clone()
		- 참조를 끊기위한 사용 
	- vaild({value : Any})
	- conversion({value : Any}) 
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

//with spread
const spreadLamdba = new _MetaFunction(
	["",_MetaFunction.__Spread("")],
	function(str,...spread) {
		console.log(`${spread.join("")} ${str}`);
	}
);
spreadLamdba("Type","s","p","r","e","a","d"); //spread Type

//with spread range
const spreadRangeLamdba = new _MetaFunction(
	["",_MetaFunction.__Spread("",3)],
	function(str,...spreadRange) {
		console.log(`${str} : ${spreadRange.join("")}`)
	}
);
spreadRangeLamdba("message","y","e","p"); //message : yep

//with Types
const TypedLamdba = new _MetaFunction(
	[_MetaFunction.__Types(String,Number)],
	function(maybeType) {
		console.log(typeof maybeType,"content : ",maybeType)
	}
);
TypedLamdba("String");//string content : String
TypedLamdba(0);//number content : 0
TypedLamdba(false);//throwen error

//with class constructor
const ClassLamdba = new _MetaFunction(
	[String],
	class{
		constructor(str){
			this.val = str;
		}
		//example to function inner meta function
		get setVal(){
			return new _MetaFunction(
				[""],
				(value) => {
					this.value = value;
				}
			);
		}
	}
);
const metaString = new ClassLamada("types"); //constructor instanced
const metaNumber = new ClassLamada(0); //throwen error
```
> 함수를 생성자 혹은 class 로 사용하는것을 가능하지만 권장하진 않습니다.
> (It is possible to use function or class as constructor, but it is not recommended.)
### method
-  public
	- \_\_Spread({type : Any,range : Number})
	- \_\_Types({...type : Any})
	- getFunc({type : Function})
		- 콜백함수에 인자를 강제화 시킬때 사용
	- apply({thisArg : Any , argsApply : Array})
	- bind({thisArg : Any , ...args : Any})
	- call({thisArg : Any , ...args : Any})
- virtual
	- vaild({value : Any})
	- conversion({value : Any})  
## _TypedArray (extends Array)
배열에서 확장됨
### 사용
```javascript
const foo = new _T.TypedArray({type: Any , ...items : Any});
```
###  빠른 가이드
```javascript
const _Type = _T._Type;
const TypedArray = _T.TypedArray;

const NumberArray = new TypedArray(Number,0,1);
const ErrorArray = new TypedArray(Number,"0","1");		// 초기에 추가하는 타입과 다르니 에러 

NumberArray.push(2); // 3
NumberArray.push("2"); // 타입과 다르니 에러
//그외에는 배열과 같음
```
### method
-  public
	- constructor({type : Function , ...items : Any})
		- items 값들은 타입과 같아야함 
	- from({type : Function, items : Array})
		- items 값들은 타입과 같아야함
## Enum
열거형 대이터 처리
> 배타버전 이며 사용시의 책임은 없음을 미리 명시합니다.
### 사용
```javascript
const foo = new _T.Enum({...items : Any});
```
###  빠른 가이드
```javascript
const Enum = _T.Enum;

const EnumData = new Enum(Number,String);
console.log(EnumData[0] === Number) //true
console.log(EnumData[Number] === 0) //true

```
### method
-  public
	- constructor({type : Any , ...items : Any})
		- 타입과 같아야함 
