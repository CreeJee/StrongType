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
	constructor(type,...items){
		type = new ((type instanceof Function) ? type : type.constructor)(); // type to object (for constructor name)
		_TypedArray.__TypeCheck__(type,...items);
		super(...items);
		this.type = type;
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