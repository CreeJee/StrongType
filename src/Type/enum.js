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
		const nameGetter = () => {
			return `${this[Symbol.toStringTag]}<${Array.from(this).toString()}>`
		};
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
		Object.defineProperties(this, {
			'length' : {
				configurable : true,
				enumerable : false,
				writable : true,
				value : 0
			},
			'__keys__' : {
				configurable : false,
				enumerable : false,
				writable : false,
				value : []
			},
			[Symbol.toStringTag] : {
				writable: false,
				enumerable: false,
				configurable: true,
				get : nameGetter
			},
			'name' : {
				writable: false,
				enumerable: false,
				configurable: true,
				get: nameGetter
			}
		})
	}
}
module.exports = Enum;