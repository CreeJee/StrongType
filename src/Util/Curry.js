const _MetaFunction = require('../Type/MetaFunction.js');

module.exports = new _MetaFunction(
	[Function],
	(fn,scope = {}) => {
		const maxLen = fn.length;
		const arg = arg;
		return (function resolver(){
			const memory = Array.from(arguments);
			return function(){
				const local = memory.slice();
				local.push(...arguments);
				//TODO : _T._MetaFunction.__Spread 에 대한 대책이 필요함
				let next = local.length >= maxLen ? fn : resolver; 
				if (next instanceof _MetaFunction) {
					_MetaFunction.__argumentCheck__(local,next.struct,memory.length,arguments.length);
				}
				return next.apply( scope, local );
			}
		})();
	}
)

