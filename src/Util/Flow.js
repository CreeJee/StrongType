const _MetaFunction = require('../Type/MetaFunction.js');
//
class Flow{
	get add(){
		return new _MetaFunction(
			[Boolean,_MetaFunction.getFunc(Boolean)],
			function(cond,callback) {

			}
		)
	}
}