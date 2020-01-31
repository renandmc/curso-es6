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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: somaZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"somaZ\", function() { return somaZ; });\nfunction somaZ(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar List =\n/*#__PURE__*/\nfunction () {\n  function List() {\n    _classCallCheck(this, List);\n\n    this.data = [];\n  }\n\n  _createClass(List, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n      console.log(this.data);\n    }\n  }]);\n\n  return List;\n}();\n\nvar TodoList =\n/*#__PURE__*/\nfunction (_List) {\n  _inherits(TodoList, _List);\n\n  function TodoList() {\n    var _this;\n\n    _classCallCheck(this, TodoList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));\n    _this.usuario = 'Renan';\n    return _this;\n  }\n\n  _createClass(TodoList, [{\n    key: \"mostraUsuario\",\n    value: function mostraUsuario() {\n      console.log(this.usuario);\n    }\n  }]);\n\n  return TodoList;\n}(List);\n\nvar MinhaLista = new TodoList();\n\ndocument.getElementById('novotodo').onclick = function () {\n  MinhaLista.add('Novo todo');\n};\n\nMinhaLista.mostraUsuario();\n\nvar Matematica =\n/*#__PURE__*/\nfunction () {\n  function Matematica() {\n    _classCallCheck(this, Matematica);\n  }\n\n  _createClass(Matematica, null, [{\n    key: \"soma\",\n    value: function soma(a, b) {\n      return a + b;\n    }\n  }]);\n\n  return Matematica;\n}();\n\nconsole.log(Matematica.soma(1, 2)); // constante - não pode ter valor reatribuido, mas pode ser mutado\n\nvar a = 1; //a = 3; // erro a read-only\n\nconsole.log(a);\nvar usuario = {\n  nome: 'Diego'\n};\nusuario.nome = 'Renan';\nconsole.log(usuario);\n\nfunction teste(x) {\n  var y = 2;\n\n  if (x > 5) {\n    var _y = 4;\n    console.log(x, _y);\n  }\n} // console.log(y); // erro, fora escopo\n\n\nteste(10); // arrays\n\nvar arr = [1, 3, 4, 5, 8, 9];\nvar newArr = arr.map(function (item, index) {\n  return item + index;\n});\nconsole.log(newArr);\nvar sum = arr.reduce(function (total, next) {\n  return total + next;\n});\nconsole.log(sum);\nvar filter = arr.filter(function (item) {\n  return item % 2 === 0;\n});\nconsole.log(filter);\nvar find = arr.find(function (item) {\n  return item === 4;\n});\nconsole.log(find); // arrow functions\n\nvar arr2 = [1, 3, 4, 5, 6];\nvar newArr2 = arr2.map(function (item) {\n  return item * 2;\n});\nconsole.log(arr2);\nconsole.log(newArr2);\n\nvar teste2 = function teste2() {\n  return {\n    nome: 'Renan'\n  };\n};\n\nconsole.log(teste2()); // valores padrão\n\nfunction soma() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;\n  return a + b;\n}\n\nconsole.log(soma(1));\nconsole.log(soma());\n\nvar soma2 = function soma2() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;\n  return a + b;\n};\n\nconsole.log(soma2(1));\nconsole.log(soma2()); // desestruturação\n\nvar usuario2 = {\n  nome: 'Renan',\n  idade: 26,\n  endereco: {\n    cidade: 'Ourinhos',\n    estado: 'SP'\n  }\n};\nconsole.log(usuario2);\nvar nome = usuario2.nome,\n    idade = usuario2.idade,\n    cidade = usuario2.endereco.cidade;\nconsole.log(nome);\nconsole.log(idade);\nconsole.log(cidade);\n\nfunction mostraNome(_ref) {\n  var nome = _ref.nome,\n      idade = _ref.idade;\n  console.log(nome, idade);\n}\n\nmostraNome(usuario2); // rest - resto\n\nvar usuario3 = {\n  nome2: 'Renan',\n  idade: 26,\n  empresa: 'L4E'\n};\n\nvar nome2 = usuario3.nome2,\n    resto = _objectWithoutProperties(usuario3, [\"nome2\"]);\n\nconsole.log(nome2);\nconsole.log(resto);\nvar arr3 = [1, 2, 3, 4];\nvar x = arr3[0],\n    y = arr3[1],\n    z = arr3.slice(2);\nconsole.log(x, y, z);\n\nfunction soma3() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log(soma3(1, 3, 4)); // spread\n\nvar arrA = [1, 2, 3];\nvar arrB = [4, 5, 6];\nvar arrC = [].concat(arrA, arrB);\nconsole.log(arrC);\nvar usuarioA = {\n  nome: 'Renan',\n  idade: 26,\n  empresa: 'L4E'\n};\n\nvar usuarioB = _objectSpread({}, usuarioA, {\n  nome: 'João'\n});\n\nconsole.log(usuarioA);\nconsole.log(usuarioB); // template literals\n\nvar nomeA = 'Renan';\nvar idadeA = 26; //console.log('Meu nome é ' + nomeA + ' e tenho ' + idadeA + ' anos');\n\nconsole.log(\"Meu nome \\xE9 \".concat(nomeA, \" e tenho \").concat(idadeA, \" anos\")); // object short syntax\n\nvar name = 'Renan';\nvar age = 26;\nvar user = {\n  name: name,\n  age: age,\n  empresa: 'L4E'\n};\nconsole.log(user); // aula webpack\n\n\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_0__[\"somaZ\"])(1, 3));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });