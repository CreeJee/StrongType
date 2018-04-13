const _MetaFunction = require("./MetaFunction.js");
const _Type = require("./type.js");
const _Struct = require("./struct.js");
const TypedArray = require("./TypedArray.js");
const _module = {
	TypedArray : TypedArray,
	_MetaFunction : _MetaFunction,
	_Type : _Type,
	_Struct : _Struct,
};
module.exports = _module;
export default _module;