const _Type = require('./type.js');
const argumentArray = (arg) => {
	if (!Array.isArray(arg)) {
		return [];
	}
	return arg.length === 1 ? [arg[0]] : Array.apply(null, arg);
}

class _TypedArray extends Array{
	get __name(){
		return "_TypedArray";
	}
	static __TypeCheck__(type,...items){
		for(let k in items){
			items[k] = _Type.__typeCheck__(items[k],type);
		}
	}
	static from(type,items){
		return new _TypedArray(type,...Array.from(items));
	}
	get [Symbol.toStringTag]() {
		return '_TypedArray';
	}
	constructor(type,...items){
		type = new ((type instanceof Function) ? type : type.constructor)(); // type to object (for constructor name)
		_TypedArray.__TypeCheck__(type,...items);
		super(...items);
		Object.defineProperty(this,"type",{
			enumerable: false,
			configurable: true,
			writable: false,
			value: type
		});
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