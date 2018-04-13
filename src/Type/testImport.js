//babel
//require("babel-polyfill");

//logic
const _MetaFunction = require("./MetaFunction.js");
const _Type = require("./type.js");
const _Struct = require("./struct.js");
const TypedArray = require("./TypedArray.js");

//testClass
class Block extends _Type{
	get __name(){
		return "Block";
	}
	constructor(value){
		super(value);
	}
	vaild(object){
		return (object instanceof this.constructor);
	}
	conversion(object){
		return false;
	}
}

/*
	//test case 1 ==> thrown Error
	var T = new Block();
	var TT = new Block("T");
	T._ = TT;

	//testcase2 ==> thrown Error
	var Temp_IN_Template_BLOCK = new Block(new Block);
	var Temp_IN_Template_BLOCK2 = new Block(new Block(new Block));
	Temp_IN_Template_BLOCK._ = Temp_IN_Template_BLOCK2;

	*/
	//test case 3

	/*
	var T_Array1 = new Block([new Block("1"),new Block("2"),new Block("3"),new Block("4"),new Block("5")])

	var T_Array2 = new Block([new Block("1"),new Block("2"),new Block("3")]);
	T_Array1._ = T_Array2;

	var TDeepArray = new Block([new Block("1"),new Block("2"),new Block(new Block("T"))]);
	console.warn(TDeepArray.toString());


	var TDeepObj   = new Block([new Block("1"),new Block("2"),new Block(new Block({}))]);
	console.warn(TDeepObj.toString());


	//TDeepArray._ = TDeepObj;

	//test case for MetaFunction
	var lambda = new _MetaFunction(
		[new Block([new Block(""),new Block(""),new Block("")])],
		function(blocks){
			for (var entities of blocks) {
				console.log(entities);
			}
		}
	);

	console.log(
		lambda( 
			new Block([new Block('A'),new Block('B'),new Block("C")])
		)
	);
	lambda.call(null,new Block([new Block('A'),new Block('B'),new Block("C")])) //ABC
	lambda.apply(null,[new Block([new Block('A'),new Block('B'),new Block("C")])])
	var bindLambda = new _MetaFunction(
		[new Block(""),new Block("")],
		function(block1,block2) {
			console.log(block1+"////"+block2);
		}
	)
	bindLambda.bind(null,new Block("binded_Str"));
	bindLambda.call(null,new Block("calledString"));

	var TDeepArray = new Block([new Block("1"),new Block("2"),new Block(new Block("T"))]);
	var testCase = new _Struct(TDeepArray);
	const metaBlock = testCase.toClass(
		function(type,...args) {

			if (args.length > 3) {
				throw new Error("MetaBlock's max size is 3")
			}
			type.name = "metaBlock";
			type._._[0]._ = args[0];
			type._._[1]._ = args[1];
			type._._[2]._._ = args[2];
		}
	);
	let metaObject = new metaBlock("strValue","strValue","strValue");

	console.log(metaObject.toString());

	//MetaType => Meta Clas
	//
	//MetaType<[Meta<String>,Meta<String>]>
*/

//var TDeepArray = new Block([new Block("1"),new Block("2"),new Block(new Block("T"))]);
//console.log(TDeepArray.toString())
//const BlockArray = new TypedArray(Block,new Block("1"),new Block("2"),new Block("3"));
//console.log(BlockArray);

//testcase at Functionbody at class

const conf = new _MetaFunction(
	[Function],
	class{
		static get _(){
			return "valueObj";
		}
	}
);
console.log(conf._)
/*
console.log(
	new conf(
		class{
			constructor(){
				
			}
		},
		class{
			constructor(){

			}
		},
		class{
			constructor(){

			}
		}
	)
);

new _MetaFunction(
	["",_MetaFunction.__Spread("",2)],
	function(str) {
		console.log(arguments)
	}
)("types","y","e","s")

new _MetaFunction(
	[_MetaFunction.__Spread(Block)],
	function(str) {
		console.log(arguments)
	}
)(new Block("String"))

*/