const _Type = require('./type.js');

const EnumSymbol = Symbol("MetaEnum");
const EnumHandler = { 
	get : function(target,name,receiver) {
		for(let key of target.keys){
			if(key.valueOf().toString() === name){
				return target[EnumSymbol][key];
			}
		};
		return undefined;
	}
};
class Enum{
	get __name(){
		return "Enum";
	}
	get data(){
		return this[EnumSymbol];
	}
	add(element){
		let index = this.length;
		Object.defineProperties(this[EnumSymbol], {
			[element] : {
				configurable : true,
				enumerable : false,
				writable : false,
				value : index,
			},
			[index] : {
				configurable : true,
				enumerable : true,
				writable : false,
				value : element,
			}
		})
		this.length++;
	}
	[Symbol.toPrimitive](hint){
		return this.get;
	}
	constructor(...enums){
		this.length = 0;
		this.keys = [];
		this[EnumSymbol] = [];
		enums.map((element,index) => {
			this.keys.push(element,index);
			if(isNaN(parseInt(element))){
				if(this[EnumSymbol][element] !== undefined){
					throw new Error(`Duplicate identifier at ${element}`);
				}
				else{
					this.add(element);
				}
			}
			else{
				throw new Error('An enum member cannot have a numeric name.')
			}
		
		});
		return new Proxy(this,EnumHandler);
	}
}
module.exports = Enum;