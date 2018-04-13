
//logic
const _Type = require('./type.js');
const _Struct = class _Struct extends _Type{
	constructor(value,parent){
		super(_Type.__generateInstance__(value));
		this.parent = (parent === undefined) ? null : parent;
		this.childs = [];
		let values = Array.isArray(value) ? value : [value];
		values.map((value,index) =>{
			if (value instanceof _Type) {
				this.childs.push(new _Struct(value._,this));
			}
		})
	}
	get __name(){
		return "_Struct";
	}
	toType(){
		return this._;
	}
	toClass(construct){
		const refType = _Type.__generateInstance__(this._);
		const objType = _Type.__generateInstance__(this._);
		return class extends _Type{
			static get name(){
				return refType.__getName__();
			}
			get name(){
				return this.constructor.name;
			}
			constructor(){
				let constructorValue = construct(objType,...arguments);
				if (constructorValue === undefined){
					constructorValue = objType;
				}
				super(_Type.__equalType__(objType,refType));
				Object.defineProperty(this.constructor,'name',{
					enumerable: false,
					writable: false,
					configurable: true,
					value: objType.name || this.constructor.name+"@generated"
				})
			}
			vaild(object) {
				return obj instanceof this.constructor;
			}
			conversion(value){
				return null; //default conversion is false
			}
		}
	}
}
module.exports = _Struct;