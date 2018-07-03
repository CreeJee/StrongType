//babel
// /require("babel-polyfill");

//logic
class _Type {
	//constructor
	constructor(value) {
		this.value = value;
	}
	//inner setting
	vaild(object) {
		return true; //when Type is Any
	}
	conversion(value){
		return null; //default conversion is false
	}
	get [Symbol.toStringTag](){
			return "_Type";
	}
	static __getName__(obj){
		return obj[Symbol.toStringTag] !== undefined ? obj[Symbol.toStringTag] : obj.constructor.name;
	}
	__getName__(){
		return _Type.__getName__(this);
	}
	static __generateInstance__(value){
		if(value === undefined || value === null){
			return value;
		}
		else if(Array.isArray(value)){
			let temp = [];
			for (let i = 0; i < value.length; i++) {
				temp[i] = _Type.__generateInstance__(value[i]);
			}
			return temp;
		}
		else if(value instanceof _Type){
			return ( new value.constructor( _Type.__generateInstance__(value._) ) );
		}
		else if(typeof value.constructor === "function"){
			return (new value.constructor());
		}
	}
	clone(){
		return _Type.__generateInstance__(this);
	}
	/**{}
	 * __typeCheck__
	 * @private
	 * @description type checker 
	 * ref is instanceof type 	  : check conversion and vaild
	 * ref is not instanceof type : check same type for two argument 
	 * @param  {Object : Any} object [description]
	 * @param  {ref : Type} ref    [description]
	 * @return {Any}        [description]
	 */
	static __typeCheck__(object,ref){
		let conversionValue = {};
		let vaildValue = {}
		if (ref instanceof _Type) {
			conversionValue = ref.conversion(object);
			vaildValue = ref.vaild(object);
			if(vaildValue){
				return conversionValue || object;
			}
			else if(conversionValue instanceof _Type){
				return conversionValue;
			}
		}
		//each case
		//1. it is same object
		//2. ref is constructor but,object is Instance
		//3. just same type for constructor
		//4. 
		else if(Object.is(ref,object) || ref === object.constructor || ref.constructor === object.constructor || (ref[Symbol.toStringTag] !== undefined && object[Symbol.toStringTag] !== undefined && ref[Symbol.toStringTag] === object[Symbol.toStringTag]) ){
			return object;
		}
		throw new TypeError(`{need : [${_Type.__getName__(ref)} or ${ref.name}],value : ${_Type.__getName__(object)}} in {${ref.toString()}}`)
	}
	__typeCheck__(object){
		return _Type.__typeCheck__(object,this);
	}
	/**
	 * __equalType__
	 * @private
	 * @param  {Object : Any} object   check object value(rValue)
	 * @param  {Object : Type} refValue (lvalue)
	 * @return {Object : Any}           (lvalue)
	 */
	static __equalType__(object,refValue){
		let tempArray = [];
		let stackValue = {};
		if(object instanceof _Type && refValue instanceof _Type){
			//정책상 기본 Array = {Array : Any} 로 가정 
			stackValue = _Type.__equalType__(object.value,refValue.value);
		}
		else{
			stackValue = _Type.__typeCheck__(object,refValue);
		}
		return stackValue;
	}
	__equalType__(object){
		return _Type.__equalType__(object,this);
	}
	//type check setter
	set _(object){
		return this.value = _Type.__equalType__( ((object instanceof _Type) ? this : this.value),object );
	}
	//type getter
	get _(){
		return this.value;
	}
	//symbol override
	*[Symbol.iterator](){
		yield* (typeof this.value[Symbol.iterator] === "function") ? this.value : [this.value];
	}
	//methods
	/**
	 * override function
	 * @return {String} return generic Struct string
	 */
	toString(){
		let tempArray = [];
		let _type = {};
		let stackValue = "";
		if(this.value instanceof _Type){
			stackValue = this.value.toString();
		}
		else if(Array.isArray(this.value)) {
			stackValue = this.value.reduce((accr,value,index,array)=>{
				return `${accr}${(index > 0) ? ',' : ''}${_Type.__getName__(value)}`;
			},"")
			stackValue = `[${stackValue}]`;
		}
		/*else if(this.value.constructor === Object){
			stackValue = JSON.stringify(this.value);
		}*/
		else if(this.value !== undefined && this.value !== null){
			stackValue = _Type.__getName__(this.value);
		}
		return `${this.__getName__()}<${stackValue}>`
	}
	valueOf(){
		return this.value;
	}
};
module.exports = _Type;
