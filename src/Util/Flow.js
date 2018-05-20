const _MetaFunction = require('../Type/MetaFunction.js');
//
class Flow{
	get __name(){
		return "Flow";
	}
	get add(){
		return new _MetaFunction(
			[Boolean,_MetaFunction.getFunc(Boolean)],
			(cond,callback) => {
				debugger;
				console.log(cond,callback.toString());
			}
		)
	}
	exec(){
		//
		debugger;
	}
}
module.exports = Flow;