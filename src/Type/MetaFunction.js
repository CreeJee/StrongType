//logic
const _Type = require('./type.js');
function isClass(v) {
  	var toString = Function.prototype.toString;
	function fnBody(fn) {
		return toString.call(fn).replace(/^[^{]*{\s*/,'').replace(/\s*}[^}]*$/,'');
	}
	return (typeof fn === 'function' &&
	        (/^class\s/.test(toString.call(fn)) ||
	          (/^.*classCallCheck\(/.test(fnBody(fn)))) // babel.js
	);
}
class _MetaBoundStruct{
	constructor(func){
		if (typeof func === "function") {
			this.func = func;
			this.argument = [];
			this.scope = null;
		}
		else{
			throw new TypeError('_MetaBoundStruct->constructor first arguments needs function(constructor)')
		}
	}
	set(scope,argument){
		if (!Array.isArray(argument)) {
			throw new TypeError('argument is must Array');
		}
		this.scope = scope;
		this.argument = argument;
	}
};
class __Spread{
	get __name(){
		return "__Spread";
	}
	constructor(type,length){
		this.type = type;
		this.length = (Number.isInteger(length)) ? length : Infinity;
	}
	fill(){

	}
}
/**
 * @class _MetaFunction
 * @description Fixed Type Function
 * @example
 *  //nomral call
 	new _MetaFunction(
		[""],
		function(str) {
			console.log(str);
		}
	)("nomral")
	
	//with spread
	new _MetaFunction(
		["",_MetaFunction.__Spread("")],
		function(str) {

		}
	)("types","t","y","p","e","d")
	
	//with spread range
	new _MetaFunction(
		["",_MetaFunction.__Spread("",3)],
		function(str) {

		}
	)("types","y","e","p")
	
	//with class constructor
	new(new _MetaFunction(
		[""],
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
	))("types")
	
 */

//TODO : _MetaFunction.__Spread의 인자에 ((rest)types,range) 방식 지원
const _MetaFunction = class _MetaFunction extends _Type{
	get __name(){
		return "_MetaFunction";
	}
	static __Spread(type,range){
		return new __Spread(type,range);
	}
	static __argumentCheck__(argument,struct,index = 0,len){
		let __spreadObj = {};
		let __spreadArray = null;
		if (Array.isArray(argument) && Array.isArray(struct)) {

			len = (len === undefined) ? struct.length-1 : len;
			if(index > len){
				return argument;
			}
			else if (struct[index] instanceof __Spread) {
				__spreadObj = struct[index];
				__spreadArray = new Array(__spreadObj.length === Infinity ? (argument.length - index) : __spreadObj.length).fill(__spreadObj.type);
				len += __spreadArray.length-1;//spread object가 빠지는거 고려해서 1씩 처리됨 
				if(len > argument.length-1){//배열 인댁스 관련 빼기
					throw new TypeError("wrong spreadObj length matching");
				}
				else{
					struct.splice(index,1,...__spreadArray); //spread 오브젝트빠짐 
				}
			}
			else{
				argument[index] = _Type.__equalType__(argument[index],struct[index]);
				index++;
			}
			return _MetaFunction.__argumentCheck__(argument,struct,index,len);	
		}
		else{
			throw new TypeError("argument and struct must Array");
		}
	}
	constructor(_argumentStruct,_func) {
		//함수의 인수 Bound처리
		if (_argumentStruct instanceof Array && _func instanceof Function) {
			//super
			super(_func);
			
			//public
			this.struct = _argumentStruct;
			this.length = _func.length;
			this.name = _func.name;
			//bound define
			this.__bound__ = new _MetaBoundStruct(_func);

			//define dummy
			const __instance__ = this;
			function generatedMeta() {
				const argument = (arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments));
				if (this instanceof _MetaFunction) {
					//is nomral bind
					return __instance__.apply(this,argument);
				}
				else{
					return new _func(...argument);
				}
			}
			generatedMeta = generatedMeta.bind(this);
			const descriptors = Object.getOwnPropertyDescriptors(_func);
			//dummy override
			generatedMeta.call = this.call.bind(this);
			generatedMeta.bind = this.bind.bind(this);
			generatedMeta.apply = this.apply.bind(this);
			generatedMeta.valueOf = this.valueOf.bind(this);
			generatedMeta.toString = this.toString.bind(this);
			//class static or prototype static override
			for(let k of Object.getOwnPropertyNames(_func)){
				if (descriptors[k].configurable != false && descriptors[k].writable != false) {
					Object.defineProperty(generatedMeta,k,descriptors[k]);
				}
			}
			//name
			Object.defineProperty(generatedMeta,"name",{
				writable: false,
				enumerable: false,
				configurable: true,
				value: _func.name || generatedMeta.name || `@generatedMeta<${Math.floor(Math.random()*999999)}>`
			})
			return generatedMeta;
		}
		else{
			throw new TypeError("Arguments only : [Array,Function]");
		}
	}
	vaild(obj){
		return obj instanceof _MetaFunction;
	}
	apply(thisArg,argsApply){
		if (Array.isArray(argsApply)) {
			return this.call(...[thisArg].concat(argsApply));
		}
		else{
			throw new TypeError("arguments is Must Array");
		}
	}
	bind(thisArg,...args){
		if (this.struct.length < args.length) {
			throw new TypeError("wrong argument length matching");
		}
		_MetaFunction.__argumentCheck__(args,this.struct);
		this.__bound__.set(thisArg,args);	
		return this.__bound__.func;
	}
	call(thisArg,...args){
		let returnValue = {};
		args = [].concat(this.__bound__.argument,args);
		thisArg = (typeof this.__bound__.scope === 'object' && this.__bound__.scope !== null) ? this : this.__bound__.scope;
		if(this.struct.length > args.length){
			throw new TypeError("wrong argument length matching");
		}
		else if(isClass(this._)){
			_MetaFunction.__argumentCheck__(args,this.struct);
			returnValue = this._.bind(thisArg,...args);
		}
		else{
			_MetaFunction.__argumentCheck__(args,this.struct);
			returnValue = this._.apply(thisArg,args);
		}
		return returnValue;
	}
	toSource(){
		this._.toSource();
	}
}
module.exports = _MetaFunction;