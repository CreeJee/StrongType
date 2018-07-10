const _Type = require('./type.js');
const argumentArray = (arg) => {
	if (!Array.isArray(arg)) {
		return [];
	}
	return arg.length === 1 ? [arg[0]] : Array.apply(null, arg);
}
const toStringTag = '_TypedArray';

class _TypedArray extends Array{
	static __TypeCheck__(type,...items){
		for(let k in items){
			items[k] = _Type.__typeCheck__(items[k],type);
		}
	}
	static from(type,items = []){
		if (!Array.isArray(items)) {
			throw new Error('Argument : [Type:Function,items:Array or undefined (it acts empty array)]');
		}
		return new _TypedArray(type,...Array.from(items));
	}
	/*static [Symbol.hasInstance](instance){
		return this === instance.constructor; // TODO : 좋은 방향으로 수정하기
	}*/
	get [Symbol.toStringTag]() {
		return toStringTag;
	}	
	constructor(type,...items){
		const __type = new ((type instanceof Function) ? type : type.constructor)(); // type to object (for constructor name)
		_TypedArray.__TypeCheck__(type,...items);
		super(...items);
		Object.defineProperties(this,{
			"type" : {
				enumerable: false,
				configurable: true,
				writable: false,
				value: __type
			},
			[Symbol.toStringTag] : {
				enumerable: false,
				configurable: true,
				writable: false,
				value: `${toStringTag}<${__type[Symbol.toStringTag] || type.name}>`
			}
		})
	}
	push(){
		let arg = argumentArray(arguments);
		_TypedArray.__TypeCheck__(this.type,...arg);
		return this.push(arg);
	}
	concat(){
		let arg = argumentArray(arguments);
		_TypedArray.__TypeCheck__(this.type,...arg);
		return this.concat(...arg)
	}
	toString(){
		return this.toString();
	}

}
module.exports = _TypedArray;