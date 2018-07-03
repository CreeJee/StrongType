//logic
const _Type = require('./type.js');
const Enum = require('./enum.js');
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

/*
 *	__Spread 및 __MultiType 처리시 타입에 대하여 필터링을 해야 하는가?
 * 	하게된다면 _MetaFunction에서 진행하게 될탠데 합당한가?
 */
class __Spread{
	get [Symbol.toStringTag](){
		return "__Spread";
	}
	constructor(type,length){
		if (typeof type !== "function") {

		}
		this.type = type;
		this.length = (Number.isInteger(length)) ? length : Infinity;
	}
};
class __Types extends Enum{
	get [Symbol.toStringTag](){
		return "__Types";
	}
	constructor(...types){
		super(...types);
	}
};

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
const _MetaFunction = class _MetaFunction extends _Type{
	get __name(){
		return "_MetaFunction";
	}
	static __Spread(type,range){
		return new __Spread(type,range);
	}
	static __Types(...type){
		return new __Types(...type);
	}
	static __argumentCheck__(argument,struct,index = 0,len){
		let selectedStruct = {};
		let selectedObj = {};
		if (Array.isArray(argument) && Array.isArray(struct)) {

			len = (len === undefined) ? struct.length-1 : len;
			if(index > len){
				return argument;
			}
			else{
				selectedStruct = struct[index];
				selectedObj = argument[index];
				//내부 class이기에 상속은 베제
				switch(selectedStruct.constructor){
					case __Spread :
						let __spreadArray = new Array(selectedStruct.length === Infinity ? (argument.length - index) : selectedStruct.length).fill(selectedStruct.type);
						len += __spreadArray.length-1;//spread object가 빠지는거 고려해서 1씩 처리됨 
						if(len > argument.length-1){//배열 인댁스 관련 빼기
							throw new TypeError("wrong spreadObj length matching");
						}
						else{
							struct.splice(index,1,...__spreadArray); //spread 오브젝트빠짐 
						}
						break;
					case __Types :
						let __structArray = Array.from(selectedStruct);
						let __selectedType = __structArray.find((value) => {
							try{
								if(_Type.__typeCheck__(selectedObj,value)){
									return value;
								}
							}
							catch(e){
								return false;
							}
						});
						if(__selectedType === undefined){
							throw new TypeError(`non matched Types at [${__structArray.join(",")}] value : ${selectedObj}`);
						}
						struct.splice(index,1,__selectedType);
						break;
					default : 
						argument[index] = _Type.__equalType__(argument[index],struct[index]);
						index++;
						break;
				}
			}
			return _MetaFunction.__argumentCheck__(argument,struct,index,len);	
		}
		else{
			throw new TypeError("argument and struct must Array");
		}
	}
	static getFunc(...types){
		return new _MetaFunction(types);
	}
	constructor(_argumentStruct,_func) {
		//함수의 인수 Bound처리
		if (_argumentStruct instanceof Array) {
			_func  = (_func instanceof Function) ? _func : function() {};
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
				if (this instanceof generatedMeta) {
					return new _func(...argument);
				}
				else{
					//is nomral bind
					return __instance__.apply(this,argument);
				}
			}
			//generatedMeta = generatedMeta.bind(this);
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
			let reduceArgument = _argumentStruct.reduce((accr,value,index)=>{
				let ret = `${accr}${(index > 0) ? ',' : ''}${_Type.__getName__(value)}`;
				return ret;
			},"");
			Object.defineProperty(generatedMeta,Symbol.toStringTag,{
				writable: false,
				enumerable: false,
				configurable: true,
				value: _func.name || `@_MetaFunction<${reduceArgument}>`
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
			returnValue = new this._(...args);
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