/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function get() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/Type/MetaFunction.js":
/*!**********************************!*\
  !*** ./src/Type/MetaFunction.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//logic\nvar _Type = __webpack_require__(/*! ./type.js */ \"./src/Type/type.js\");\nvar Enum = __webpack_require__(/*! ./enum.js */ \"./src/Type/enum.js\");\nfunction isClass(v) {\n\tvar toString = Function.prototype.toString;\n\tfunction fnBody(fn) {\n\t\treturn toString.call(fn).replace(/^[^{]*{\\s*/, '').replace(/\\s*}[^}]*$/, '');\n\t}\n\treturn typeof fn === 'function' && (/^class\\s/.test(toString.call(fn)) || /^.*classCallCheck\\(/.test(fnBody(fn))) // babel.js\n\t;\n}\n\nvar _MetaBoundStruct = function () {\n\tfunction _MetaBoundStruct(func) {\n\t\t_classCallCheck(this, _MetaBoundStruct);\n\n\t\tif (typeof func === \"function\") {\n\t\t\tthis.func = func;\n\t\t\tthis.argument = [];\n\t\t\tthis.scope = null;\n\t\t} else {\n\t\t\tthrow new TypeError('_MetaBoundStruct->constructor first arguments needs function(constructor)');\n\t\t}\n\t}\n\n\t_createClass(_MetaBoundStruct, [{\n\t\tkey: 'set',\n\t\tvalue: function set(scope, argument) {\n\t\t\tif (!Array.isArray(argument)) {\n\t\t\t\tthrow new TypeError('argument is must Array');\n\t\t\t}\n\t\t\tthis.scope = scope;\n\t\t\tthis.argument = argument;\n\t\t}\n\t}]);\n\n\treturn _MetaBoundStruct;\n}();\n\n;\n\n/*\r\n *\t__Spread 및 __MultiType 처리시 타입에 대하여 필터링을 해야 하는가?\r\n * \t하게된다면 _MetaFunction에서 진행하게 될탠데 합당한가?\r\n */\n\nvar _Spread = function () {\n\t_createClass(__Spread, [{\n\t\tkey: '__name',\n\t\tget: function get() {\n\t\t\treturn \"__Spread\";\n\t\t}\n\t}]);\n\n\tfunction __Spread(type, length) {\n\t\t_classCallCheck(this, __Spread);\n\n\t\tif (typeof type !== \"function\") {}\n\t\tthis.type = type;\n\t\tthis.length = Number.isInteger(length) ? length : Infinity;\n\t}\n\n\treturn __Spread;\n}();\n\n;\n\nvar _Types = function (_Enum) {\n\t_inherits(__Types, _Enum);\n\n\t_createClass(__Types, [{\n\t\tkey: '__name',\n\t\tget: function get() {\n\t\t\treturn \"__Types\";\n\t\t}\n\t}]);\n\n\tfunction __Types() {\n\t\tvar _ref;\n\n\t\t_classCallCheck(this, __Types);\n\n\t\tfor (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\ttypes[_key] = arguments[_key];\n\t\t}\n\n\t\treturn _possibleConstructorReturn(this, (_ref = __Types.__proto__ || Object.getPrototypeOf(__Types)).call.apply(_ref, [this].concat(types)));\n\t}\n\n\treturn __Types;\n}(Enum);\n\n;\n\n/**\r\n * @class _MetaFunction\r\n * @description Fixed Type Function\r\n * @example\r\n *  //nomral call\r\n \tnew _MetaFunction(\r\n\t\t[\"\"],\r\n\t\tfunction(str) {\r\n\t\t\tconsole.log(str);\r\n\t\t}\r\n\t)(\"nomral\")\r\n\t\r\n\t//with spread\r\n\tnew _MetaFunction(\r\n\t\t[\"\",_MetaFunction.__Spread(\"\")],\r\n\t\tfunction(str) {\r\n\r\n\t\t}\r\n\t)(\"types\",\"t\",\"y\",\"p\",\"e\",\"d\")\r\n\t\r\n\t//with spread range\r\n\tnew _MetaFunction(\r\n\t\t[\"\",_MetaFunction.__Spread(\"\",3)],\r\n\t\tfunction(str) {\r\n\r\n\t\t}\r\n\t)(\"types\",\"y\",\"e\",\"p\")\r\n\t\r\n\t//with class constructor\r\n\tnew(new _MetaFunction(\r\n\t\t[\"\"],\r\n\t\tclass{\r\n\t\t\tconstructor(str){\r\n\t\t\t\tthis.val = str;\r\n\t\t\t}\r\n\t\t\t//example to function inner meta function\r\n\t\t\tget setVal(){\r\n\t\t\t\treturn new _MetaFunction(\r\n\t\t\t\t\t[\"\"],\r\n\t\t\t\t\t(value) => {\r\n\t\t\t\t\t\tthis.value = value;\r\n\t\t\t\t\t}\r\n\t\t\t\t);\r\n\t\t\t}\r\n\t\t}\r\n\t))(\"types\")\r\n\t\r\n */\n\n//TODO : _MetaFunction.__Spread의 인자에 ((rest)types,range) 방식 지원\nvar _MetaFunction = function (_Type2) {\n\t_inherits(_MetaFunction, _Type2);\n\n\t_createClass(_MetaFunction, [{\n\t\tkey: '__name',\n\t\tget: function get() {\n\t\t\treturn \"_MetaFunction\";\n\t\t}\n\t}], [{\n\t\tkey: '__Spread',\n\t\tvalue: function __Spread(type, range) {\n\t\t\treturn new _Spread(type, range);\n\t\t}\n\t}, {\n\t\tkey: '__Types',\n\t\tvalue: function __Types() {\n\t\t\tfor (var _len2 = arguments.length, type = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n\t\t\t\ttype[_key2] = arguments[_key2];\n\t\t\t}\n\n\t\t\treturn new (Function.prototype.bind.apply(_Types, [null].concat(type)))();\n\t\t}\n\t}, {\n\t\tkey: '__argumentCheck__',\n\t\tvalue: function __argumentCheck__(argument, struct) {\n\t\t\tvar index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\t\t\tvar len = arguments[3];\n\n\t\t\tvar selectedStruct = {};\n\t\t\tvar selectedObj = {};\n\t\t\tif (Array.isArray(argument) && Array.isArray(struct)) {\n\n\t\t\t\tlen = len === undefined ? struct.length - 1 : len;\n\t\t\t\tif (index > len) {\n\t\t\t\t\treturn argument;\n\t\t\t\t} else {\n\t\t\t\t\tselectedStruct = struct[index];\n\t\t\t\t\tselectedObj = argument[index];\n\t\t\t\t\t//내부 class이기에 상속은 베제\n\t\t\t\t\tswitch (selectedStruct.constructor) {\n\t\t\t\t\t\tcase _Spread:\n\t\t\t\t\t\t\tvar __spreadArray = new Array(selectedStruct.length === Infinity ? argument.length - index : selectedStruct.length).fill(selectedStruct.type);\n\t\t\t\t\t\t\tlen += __spreadArray.length - 1; //spread object가 빠지는거 고려해서 1씩 처리됨 \n\t\t\t\t\t\t\tif (len > argument.length - 1) {\n\t\t\t\t\t\t\t\t//배열 인댁스 관련 빼기\n\t\t\t\t\t\t\t\tthrow new TypeError(\"wrong spreadObj length matching\");\n\t\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\t\tstruct.splice.apply(struct, [index, 1].concat(_toConsumableArray(__spreadArray))); //spread 오브젝트빠짐 \n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tcase _Types:\n\t\t\t\t\t\t\tvar __structArray = Array.from(selectedStruct);\n\t\t\t\t\t\t\tvar __selectedType = __structArray.find(function (value) {\n\t\t\t\t\t\t\t\ttry {\n\t\t\t\t\t\t\t\t\tif (_Type.__typeCheck__(selectedObj, value)) {\n\t\t\t\t\t\t\t\t\t\treturn value;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t\tif (__selectedType === undefined) {\n\t\t\t\t\t\t\t\tthrow new TypeError('non matched Types at [' + __structArray.join(\",\") + '] value : ' + selectedObj);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tstruct.splice(index, 1, __selectedType);\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\tdefault:\n\t\t\t\t\t\t\targument[index] = _Type.__equalType__(argument[index], struct[index]);\n\t\t\t\t\t\t\tindex++;\n\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn _MetaFunction.__argumentCheck__(argument, struct, index, len);\n\t\t\t} else {\n\t\t\t\tthrow new TypeError(\"argument and struct must Array\");\n\t\t\t}\n\t\t}\n\t}]);\n\n\tfunction _MetaFunction(_argumentStruct, _func) {\n\t\t_classCallCheck(this, _MetaFunction);\n\n\t\t//함수의 인수 Bound처리\n\t\tif (_argumentStruct instanceof Array && _func instanceof Function) {\n\t\t\tvar _ret;\n\n\t\t\tvar generatedMeta = function generatedMeta() {\n\t\t\t\tvar argument = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);\n\t\t\t\tif (this instanceof _MetaFunction) {\n\t\t\t\t\t//is nomral bind\n\t\t\t\t\treturn __instance__.apply(this, argument);\n\t\t\t\t} else {\n\t\t\t\t\treturn new (Function.prototype.bind.apply(_func, [null].concat(_toConsumableArray(argument))))();\n\t\t\t\t}\n\t\t\t};\n\n\t\t\t//public\n\t\t\tvar _this2 = _possibleConstructorReturn(this, (_MetaFunction.__proto__ || Object.getPrototypeOf(_MetaFunction)).call(this, _func));\n\t\t\t//super\n\n\n\t\t\t_this2.struct = _argumentStruct;\n\t\t\t_this2.length = _func.length;\n\t\t\t_this2.name = _func.name;\n\t\t\t//bound define\n\t\t\t_this2.__bound__ = new _MetaBoundStruct(_func);\n\n\t\t\t//define dummy\n\t\t\tvar __instance__ = _this2;\n\n\t\t\tgeneratedMeta = generatedMeta.bind(_this2);\n\t\t\tvar descriptors = Object.getOwnPropertyDescriptors(_func);\n\t\t\t//dummy override\n\t\t\tgeneratedMeta.call = _this2.call.bind(_this2);\n\t\t\tgeneratedMeta.bind = _this2.bind.bind(_this2);\n\t\t\tgeneratedMeta.apply = _this2.apply.bind(_this2);\n\t\t\tgeneratedMeta.valueOf = _this2.valueOf.bind(_this2);\n\t\t\tgeneratedMeta.toString = _this2.toString.bind(_this2);\n\t\t\t//class static or prototype static override\n\t\t\tvar _iteratorNormalCompletion = true;\n\t\t\tvar _didIteratorError = false;\n\t\t\tvar _iteratorError = undefined;\n\n\t\t\ttry {\n\t\t\t\tfor (var _iterator = Object.getOwnPropertyNames(_func)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n\t\t\t\t\tvar k = _step.value;\n\n\t\t\t\t\tif (descriptors[k].configurable != false && descriptors[k].writable != false) {\n\t\t\t\t\t\tObject.defineProperty(generatedMeta, k, descriptors[k]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t//name\n\t\t\t} catch (err) {\n\t\t\t\t_didIteratorError = true;\n\t\t\t\t_iteratorError = err;\n\t\t\t} finally {\n\t\t\t\ttry {\n\t\t\t\t\tif (!_iteratorNormalCompletion && _iterator.return) {\n\t\t\t\t\t\t_iterator.return();\n\t\t\t\t\t}\n\t\t\t\t} finally {\n\t\t\t\t\tif (_didIteratorError) {\n\t\t\t\t\t\tthrow _iteratorError;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tObject.defineProperty(generatedMeta, \"name\", {\n\t\t\t\twritable: false,\n\t\t\t\tenumerable: false,\n\t\t\t\tconfigurable: true,\n\t\t\t\tvalue: _func.name || generatedMeta.name || '@generatedMeta<' + Math.floor(Math.random() * 999999) + '>'\n\t\t\t});\n\t\t\treturn _ret = generatedMeta, _possibleConstructorReturn(_this2, _ret);\n\t\t} else {\n\t\t\tthrow new TypeError(\"Arguments only : [Array,Function]\");\n\t\t}\n\t\treturn _possibleConstructorReturn(_this2);\n\t}\n\n\t_createClass(_MetaFunction, [{\n\t\tkey: 'vaild',\n\t\tvalue: function vaild(obj) {\n\t\t\treturn obj instanceof _MetaFunction;\n\t\t}\n\t}, {\n\t\tkey: 'apply',\n\t\tvalue: function apply(thisArg, argsApply) {\n\t\t\tif (Array.isArray(argsApply)) {\n\t\t\t\treturn this.call.apply(this, _toConsumableArray([thisArg].concat(argsApply)));\n\t\t\t} else {\n\t\t\t\tthrow new TypeError(\"arguments is Must Array\");\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'bind',\n\t\tvalue: function bind(thisArg) {\n\t\t\tfor (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {\n\t\t\t\targs[_key3 - 1] = arguments[_key3];\n\t\t\t}\n\n\t\t\tif (this.struct.length < args.length) {\n\t\t\t\tthrow new TypeError(\"wrong argument length matching\");\n\t\t\t}\n\t\t\t_MetaFunction.__argumentCheck__(args, this.struct);\n\t\t\tthis.__bound__.set(thisArg, args);\n\t\t\treturn this.__bound__.func;\n\t\t}\n\t}, {\n\t\tkey: 'call',\n\t\tvalue: function call(thisArg) {\n\t\t\tfor (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {\n\t\t\t\targs[_key4 - 1] = arguments[_key4];\n\t\t\t}\n\n\t\t\tvar returnValue = {};\n\t\t\targs = [].concat(this.__bound__.argument, args);\n\t\t\tthisArg = _typeof(this.__bound__.scope) === 'object' && this.__bound__.scope !== null ? this : this.__bound__.scope;\n\t\t\tif (this.struct.length > args.length) {\n\t\t\t\tthrow new TypeError(\"wrong argument length matching\");\n\t\t\t} else if (isClass(this._)) {\n\t\t\t\tvar _ref2;\n\n\t\t\t\t_MetaFunction.__argumentCheck__(args, this.struct);\n\t\t\t\treturnValue = (_ref2 = this._).bind.apply(_ref2, [thisArg].concat(_toConsumableArray(args)));\n\t\t\t} else {\n\t\t\t\t_MetaFunction.__argumentCheck__(args, this.struct);\n\t\t\t\treturnValue = this._.apply(thisArg, args);\n\t\t\t}\n\t\t\treturn returnValue;\n\t\t}\n\t}, {\n\t\tkey: 'toSource',\n\t\tvalue: function toSource() {\n\t\t\tthis._.toSource();\n\t\t}\n\t}]);\n\n\treturn _MetaFunction;\n}(_Type);\nmodule.exports = _MetaFunction;\n\n//# sourceURL=webpack:///./src/Type/MetaFunction.js?");

/***/ }),

/***/ "./src/Type/TypedArray.js":
/*!********************************!*\
  !*** ./src/Type/TypedArray.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _Type = __webpack_require__(/*! ./type.js */ \"./src/Type/type.js\");\nvar argumentArray = function argumentArray(arg) {\n\tif (!Array.isArray(arg)) {\n\t\treturn [];\n\t}\n\treturn arg.length === 1 ? [arg[0]] : Array.apply(null, arg);\n};\n\nvar _TypedArray = function (_Array) {\n\t_inherits(_TypedArray, _Array);\n\n\t_createClass(_TypedArray, [{\n\t\tkey: \"__name\",\n\t\tget: function get() {\n\t\t\treturn \"_TypedArray\";\n\t\t}\n\t}], [{\n\t\tkey: \"__TypeCheck__\",\n\t\tvalue: function __TypeCheck__(type) {\n\t\t\tfor (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n\t\t\t\titems[_key - 1] = arguments[_key];\n\t\t\t}\n\n\t\t\tfor (var k in items) {\n\t\t\t\titems[k] = _Type.__typeCheck__(items[k], type);\n\t\t\t}\n\t\t}\n\t}]);\n\n\tfunction _TypedArray(type) {\n\t\tvar _ref;\n\n\t\t_classCallCheck(this, _TypedArray);\n\n\t\ttype = new (type instanceof Function ? type : type.constructor)(); // type to object (for constructor name)\n\n\t\tfor (var _len2 = arguments.length, items = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n\t\t\titems[_key2 - 1] = arguments[_key2];\n\t\t}\n\n\t\t_TypedArray.__TypeCheck__.apply(_TypedArray, [type].concat(items));\n\n\t\tvar _this = _possibleConstructorReturn(this, (_ref = _TypedArray.__proto__ || Object.getPrototypeOf(_TypedArray)).call.apply(_ref, [this].concat(items)));\n\n\t\tObject.defineProperty(_this, \"type\", {\n\t\t\tenumerable: false,\n\t\t\tconfigurable: true,\n\t\t\twritable: false,\n\t\t\tvalue: type\n\t\t});\n\t\treturn _this;\n\t}\n\n\t_createClass(_TypedArray, [{\n\t\tkey: \"push\",\n\t\tvalue: function push() {\n\t\t\tvar arg = argumentArray(arguments);\n\t\t\t_TypedArray.__TypeCheck__.apply(_TypedArray, [this.type].concat(_toConsumableArray(arg)));\n\t\t\treturn this.push(arg);\n\t\t}\n\t}, {\n\t\tkey: \"concat\",\n\t\tvalue: function concat() {\n\t\t\tvar arg = argumentArray(arguments);\n\t\t\t_TypedArray.__TypeCheck__.apply(_TypedArray, [this.type].concat(_toConsumableArray(arg)));\n\t\t\treturn this.concat.apply(this, _toConsumableArray(arg));\n\t\t}\n\t}, {\n\t\tkey: \"toString\",\n\t\tvalue: function toString() {\n\t\t\treturn this.toString();\n\t\t}\n\t}]);\n\n\treturn _TypedArray;\n}(Array);\n\nmodule.exports = _TypedArray;\n\n//# sourceURL=webpack:///./src/Type/TypedArray.js?");

/***/ }),

/***/ "./src/Type/_test.js":
/*!***************************!*\
  !*** ./src/Type/_test.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var _MetaFunction = __webpack_require__(/*! ./MetaFunction.js */ \"./src/Type/MetaFunction.js\");\nvar _Type = __webpack_require__(/*! ./type.js */ \"./src/Type/type.js\");\nvar _Struct = __webpack_require__(/*! ./struct.js */ \"./src/Type/struct.js\");\nvar TypedArray = __webpack_require__(/*! ./TypedArray.js */ \"./src/Type/TypedArray.js\");\nvar _module = {\n\tTypedArray: TypedArray,\n\t_MetaFunction: _MetaFunction,\n\t_Type: _Type,\n\t_Struct: _Struct\n};\nmodule.exports = _module;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_module);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/Type/_test.js?");

/***/ }),

/***/ "./src/Type/enum.js":
/*!**************************!*\
  !*** ./src/Type/enum.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _Type = __webpack_require__(/*! ./type.js */ \"./src/Type/type.js\");\n\nvar Enum = function () {\n\t_createClass(Enum, [{\n\t\tkey: 'add',\n\t\tvalue: function add(element) {\n\t\t\tvar _Object$definePropert;\n\n\t\t\tvar index = this.length;\n\t\t\tObject.defineProperties(this, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, element, {\n\t\t\t\tconfigurable: false,\n\t\t\t\tenumerable: false,\n\t\t\t\twritable: false,\n\t\t\t\tvalue: index\n\t\t\t}), _defineProperty(_Object$definePropert, index, {\n\t\t\t\tconfigurable: false,\n\t\t\t\tenumerable: true,\n\t\t\t\twritable: false,\n\t\t\t\tvalue: element\n\t\t\t}), _Object$definePropert));\n\t\t\tthis.length++;\n\t\t}\n\t}, {\n\t\tkey: Symbol.toPrimitive,\n\t\tvalue: function value(hint) {\n\t\t\treturn Array.from(this);\n\t\t}\n\t}, {\n\t\tkey: Symbol.iterator,\n\t\tvalue: /*#__PURE__*/regeneratorRuntime.mark(function value() {\n\t\t\tvar i;\n\t\t\treturn regeneratorRuntime.wrap(function value$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\ti = 0;\n\n\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\t\tif (!(i < this.length)) {\n\t\t\t\t\t\t\t\t_context.next = 7;\n\t\t\t\t\t\t\t\tbreak;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t_context.next = 4;\n\t\t\t\t\t\t\treturn this[i];\n\n\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\t\ti++;\n\t\t\t\t\t\t\t_context.next = 1;\n\t\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t\tcase 7:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, value, this);\n\t\t})\n\t}, {\n\t\tkey: '__name',\n\t\tget: function get() {\n\t\t\treturn \"Enum\";\n\t\t}\n\t}]);\n\n\tfunction Enum() {\n\t\tvar _this = this;\n\n\t\t_classCallCheck(this, Enum);\n\n\t\tObject.defineProperty(this, 'length', {\n\t\t\tconfigurable: true,\n\t\t\tenumerable: false,\n\t\t\twritable: true,\n\t\t\tvalue: 0\n\t\t});\n\t\tObject.defineProperty(this, '__keys__', {\n\t\t\tconfigurable: false,\n\t\t\tenumerable: false,\n\t\t\twritable: false,\n\t\t\tvalue: []\n\t\t});\n\n\t\tfor (var _len = arguments.length, enums = Array(_len), _key = 0; _key < _len; _key++) {\n\t\t\tenums[_key] = arguments[_key];\n\t\t}\n\n\t\tenums.map(function (element, index) {\n\t\t\tif (isNaN(parseInt(element))) {\n\t\t\t\tif (_this[element] !== undefined) {\n\t\t\t\t\tthrow new Error('Duplicate identifier at ' + element);\n\t\t\t\t} else {\n\t\t\t\t\t_this.add(element);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tthrow new Error('An enum member cannot have a numeric name.');\n\t\t\t}\n\t\t});\n\t}\n\n\treturn Enum;\n}();\n\nmodule.exports = Enum;\n\n//# sourceURL=webpack:///./src/Type/enum.js?");

/***/ }),

/***/ "./src/Type/struct.js":
/*!****************************!*\
  !*** ./src/Type/struct.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n//logic\nvar _Type = __webpack_require__(/*! ./type.js */ \"./src/Type/type.js\");\nvar _Struct = function (_Type2) {\n\t_inherits(_Struct, _Type2);\n\n\tfunction _Struct(value, parent) {\n\t\t_classCallCheck(this, _Struct);\n\n\t\tvar _this = _possibleConstructorReturn(this, (_Struct.__proto__ || Object.getPrototypeOf(_Struct)).call(this, _Type.__generateInstance__(value)));\n\n\t\t_this.parent = parent === undefined ? null : parent;\n\t\t_this.childs = [];\n\t\tvar values = Array.isArray(value) ? value : [value];\n\t\tvalues.map(function (value, index) {\n\t\t\tif (value instanceof _Type) {\n\t\t\t\t_this.childs.push(new _Struct(value._, _this));\n\t\t\t}\n\t\t});\n\t\treturn _this;\n\t}\n\n\t_createClass(_Struct, [{\n\t\tkey: 'toType',\n\t\tvalue: function toType() {\n\t\t\treturn this._;\n\t\t}\n\t}, {\n\t\tkey: 'toClass',\n\t\tvalue: function toClass(construct) {\n\t\t\tvar refType = _Type.__generateInstance__(this._);\n\t\t\tvar objType = _Type.__generateInstance__(this._);\n\t\t\treturn function (_Type3) {\n\t\t\t\t_inherits(_class, _Type3);\n\n\t\t\t\t_createClass(_class, [{\n\t\t\t\t\tkey: 'name',\n\t\t\t\t\tget: function get() {\n\t\t\t\t\t\treturn this.constructor.name;\n\t\t\t\t\t}\n\t\t\t\t}], [{\n\t\t\t\t\tkey: 'name',\n\t\t\t\t\tget: function get() {\n\t\t\t\t\t\treturn refType.__getName__();\n\t\t\t\t\t}\n\t\t\t\t}]);\n\n\t\t\t\tfunction _class() {\n\t\t\t\t\t_classCallCheck(this, _class);\n\n\t\t\t\t\tvar constructorValue = construct.apply(undefined, [objType].concat(Array.prototype.slice.call(arguments)));\n\t\t\t\t\tif (constructorValue === undefined) {\n\t\t\t\t\t\tconstructorValue = objType;\n\t\t\t\t\t}\n\n\t\t\t\t\tvar _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, _Type.__equalType__(objType, refType)));\n\n\t\t\t\t\tObject.defineProperty(_this2.constructor, 'name', {\n\t\t\t\t\t\tenumerable: false,\n\t\t\t\t\t\twritable: false,\n\t\t\t\t\t\tconfigurable: true,\n\t\t\t\t\t\tvalue: objType.name || _this2.constructor.name + \"@generated\"\n\t\t\t\t\t});\n\t\t\t\t\treturn _this2;\n\t\t\t\t}\n\n\t\t\t\t_createClass(_class, [{\n\t\t\t\t\tkey: 'vaild',\n\t\t\t\t\tvalue: function vaild(object) {\n\t\t\t\t\t\treturn obj instanceof this.constructor;\n\t\t\t\t\t}\n\t\t\t\t}, {\n\t\t\t\t\tkey: 'conversion',\n\t\t\t\t\tvalue: function conversion(value) {\n\t\t\t\t\t\treturn null; //default conversion is false\n\t\t\t\t\t}\n\t\t\t\t}]);\n\n\t\t\t\treturn _class;\n\t\t\t}(_Type);\n\t\t}\n\t}, {\n\t\tkey: '__name',\n\t\tget: function get() {\n\t\t\treturn \"_Struct\";\n\t\t}\n\t}]);\n\n\treturn _Struct;\n}(_Type);\nmodule.exports = _Struct;\n\n//# sourceURL=webpack:///./src/Type/struct.js?");

/***/ }),

/***/ "./src/Type/type.js":
/*!**************************!*\
  !*** ./src/Type/type.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//babel\n// /require(\"babel-polyfill\");\n\n//logic\nvar _Type = function () {\n\t//constructor\n\tfunction _Type(value) {\n\t\t_classCallCheck(this, _Type);\n\n\t\tthis.value = value;\n\t}\n\t//inner setting\n\n\n\t_createClass(_Type, [{\n\t\tkey: \"vaild\",\n\t\tvalue: function vaild(object) {\n\t\t\treturn true; //when Type is Any\n\t\t}\n\t}, {\n\t\tkey: \"conversion\",\n\t\tvalue: function conversion(value) {\n\t\t\treturn null; //default conversion is false\n\t\t}\n\t}, {\n\t\tkey: \"__getName__\",\n\t\tvalue: function __getName__() {\n\t\t\treturn _Type.__getName__(this);\n\t\t}\n\t}, {\n\t\tkey: \"clone\",\n\t\tvalue: function clone() {\n\t\t\treturn _Type.__generateInstance__(this);\n\t\t}\n\t\t/**{}\r\n   * __typeCheck__\r\n   * @private\r\n   * @description type checker \r\n   * ref is instanceof type \t  : check conversion and vaild\r\n   * ref is not instanceof type : check same type for two argument \r\n   * @param  {Object : Any} object [description]\r\n   * @param  {ref : Type} ref    [description]\r\n   * @return {Any}        [description]\r\n   */\n\n\t}, {\n\t\tkey: \"__typeCheck__\",\n\t\tvalue: function __typeCheck__(object) {\n\t\t\treturn _Type.__typeCheck__(object, this);\n\t\t}\n\t\t/**\r\n   * __equalType__\r\n   * @private\r\n   * @param  {Object : Any} object   check object value(rValue)\r\n   * @param  {Object : Type} refValue (lvalue)\r\n   * @return {Object : Any}           (lvalue)\r\n   */\n\n\t}, {\n\t\tkey: \"__equalType__\",\n\t\tvalue: function __equalType__(object) {\n\t\t\treturn _Type.__equalType__(object, this);\n\t\t}\n\t\t//type check setter\n\n\t}, {\n\t\tkey: Symbol.iterator,\n\n\t\t//symbol override\n\t\tvalue: /*#__PURE__*/regeneratorRuntime.mark(function value() {\n\t\t\treturn regeneratorRuntime.wrap(function value$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\treturn _context.delegateYield(typeof this.value[Symbol.iterator] === \"function\" ? this.value : [this.value], \"t0\", 1);\n\n\t\t\t\t\t\tcase 1:\n\t\t\t\t\t\tcase \"end\":\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, value, this);\n\t\t})\n\t\t//methods\n\t\t/**\r\n   * override function\r\n   * @return {String} return generic Struct string\r\n   */\n\n\t}, {\n\t\tkey: \"toString\",\n\t\tvalue: function toString() {\n\t\t\tvar tempArray = [];\n\t\t\tvar _type = {};\n\t\t\tvar stackValue = \"\";\n\t\t\tif (this.value instanceof _Type) {\n\t\t\t\tstackValue = this.value.toString();\n\t\t\t} else if (Array.isArray(this.value)) {\n\t\t\t\tvar _iteratorNormalCompletion = true;\n\t\t\t\tvar _didIteratorError = false;\n\t\t\t\tvar _iteratorError = undefined;\n\n\t\t\t\ttry {\n\t\t\t\t\tfor (var _iterator = this.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n\t\t\t\t\t\tvar entities = _step.value;\n\n\t\t\t\t\t\ttempArray.push(entities.toString());\n\t\t\t\t\t}\n\t\t\t\t} catch (err) {\n\t\t\t\t\t_didIteratorError = true;\n\t\t\t\t\t_iteratorError = err;\n\t\t\t\t} finally {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tif (!_iteratorNormalCompletion && _iterator.return) {\n\t\t\t\t\t\t\t_iterator.return();\n\t\t\t\t\t\t}\n\t\t\t\t\t} finally {\n\t\t\t\t\t\tif (_didIteratorError) {\n\t\t\t\t\t\t\tthrow _iteratorError;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tstackValue = \"[\" + tempArray.join(',') + \"]\";\n\t\t\t}\n\t\t\t/*else if(this.value.constructor === Object){\r\n   \tstackValue = JSON.stringify(this.value);\r\n   }*/\n\t\t\telse if (this.value !== undefined && this.value !== null) {\n\t\t\t\t\tstackValue = _Type.__getName__(this.value);\n\t\t\t\t}\n\t\t\treturn this.__getName__() + \"<\" + stackValue + \">\";\n\t\t}\n\t}, {\n\t\tkey: \"valueOf\",\n\t\tvalue: function valueOf() {\n\t\t\treturn this.value;\n\t\t}\n\t}, {\n\t\tkey: \"__name\",\n\t\tget: function get() {\n\t\t\tif (this.constructor === _Type) {\n\t\t\t\treturn \"_Type\";\n\t\t\t} else {\n\t\t\t\treturn this.constructor.name;\n\t\t\t}\n\t\t}\n\t\t//static system(it will be change..?)\n\n\t}, {\n\t\tkey: \"_\",\n\t\tset: function set(object) {\n\t\t\treturn this.value = _Type.__equalType__(object instanceof _Type ? this : this.value, object);\n\t\t}\n\t\t//type getter\n\t\t,\n\t\tget: function get() {\n\t\t\treturn this.value;\n\t\t}\n\t}], [{\n\t\tkey: \"__getName__\",\n\t\tvalue: function __getName__(obj) {\n\t\t\treturn (obj.__name || \"\").toString().length > 0 ? obj.__name : obj.constructor.name;\n\t\t}\n\t}, {\n\t\tkey: \"__generateInstance__\",\n\t\tvalue: function __generateInstance__(value) {\n\t\t\tif (value === undefined || value === null) {\n\t\t\t\treturn value;\n\t\t\t} else if (Array.isArray(value)) {\n\t\t\t\tvar temp = [];\n\t\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\t\ttemp[i] = _Type.__generateInstance__(value[i]);\n\t\t\t\t}\n\t\t\t\treturn temp;\n\t\t\t} else if (value instanceof _Type) {\n\t\t\t\treturn new value.constructor(_Type.__generateInstance__(value._));\n\t\t\t} else if (typeof value.constructor === \"function\") {\n\t\t\t\treturn new value.constructor();\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \"__typeCheck__\",\n\t\tvalue: function __typeCheck__(object, ref) {\n\t\t\tvar conversionValue = {};\n\t\t\tvar vaildValue = {};\n\t\t\tif (ref instanceof _Type) {\n\t\t\t\tconversionValue = ref.conversion(object);\n\t\t\t\tvaildValue = ref.vaild(object);\n\t\t\t\tif (vaildValue) {\n\t\t\t\t\treturn conversionValue || object;\n\t\t\t\t} else if (conversionValue instanceof _Type) {\n\t\t\t\t\treturn conversionValue;\n\t\t\t\t}\n\t\t\t}\n\t\t\t//each case\n\t\t\t//1. it is same object\n\t\t\t//2. ref is constructor but,object is Instance\n\t\t\t//3. just same type for constructor\n\t\t\telse if (Object.is(ref, object) || ref === object.constructor || ref.constructor === object.constructor) {\n\t\t\t\t\treturn object;\n\t\t\t\t}\n\t\t\tthrow new TypeError(\"{need : [\" + _Type.__getName__(ref) + \" or \" + ref.name + \"],value : \" + _Type.__getName__(object) + \"} in {\" + this.toString() + \"}\");\n\t\t}\n\t}, {\n\t\tkey: \"__equalType__\",\n\t\tvalue: function __equalType__(object, refValue) {\n\t\t\tvar tempArray = [];\n\t\t\tvar stackValue = {};\n\t\t\tif (object instanceof _Type && refValue instanceof _Type) {\n\t\t\t\t//정책상 기본 Array = {Array : Any} 로 가정 \n\t\t\t\tstackValue = _Type.__equalType__(object.value, refValue.value);\n\t\t\t} else {\n\t\t\t\tstackValue = _Type.__typeCheck__(object, refValue);\n\t\t\t}\n\t\t\treturn stackValue;\n\t\t}\n\t}]);\n\n\treturn _Type;\n}();\n\n;\nmodule.exports = _Type;\n\n//# sourceURL=webpack:///./src/Type/type.js?");

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./src/Type/_test.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/Type/_test.js */\"./src/Type/_test.js\");\n\n\n//# sourceURL=webpack:///multi_./src/Type/_test.js?");

/***/ })

/******/ });