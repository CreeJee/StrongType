const _Type = require('./type.js');

class Enum{
	get [Symbol.toStringTag](){
		return "Enum";
	}
	add(element){
		let index = this.length;
		Object.defineProperties(this, {
			[element] : {
				configurable : false,
				enumerable : false,
				writable : false,
				value : index,
			},
			[index] : {
				configurable : false,
				enumerable : true,
				writable : false,
				value : element,
			}
		})
		this.length++;
	}
	[Symbol.toPrimitive](hint){
		return Array.from(this);
	}
	*[Symbol.iterator](){
		for (let i = 0; i < this.length; i++) {
			yield this[i];
		}
	}
	constructor(...enums){
		Object.defineProperty(this,'length',{
			configurable : true,
			enumerable : false,
			writable : true,
			value : 0
		});
		Object.defineProperty(this,'__keys__',{
			configurable : false,
			enumerable : false,
			writable : false,
			value : []
		});
		enums.map((element,index) => {
			if(isNaN(parseInt(element))){
				if(this[element] !== undefined){
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
	}
}
module.exports = Enum;