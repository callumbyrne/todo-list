/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Raleway/Raleway-VariableFont_wght.ttf */ "./src/Raleway/Raleway-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Raleway';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n    background-color: #212121;\r\n    font-family: 'Raleway', sans-serif;\r\n    color: #dedede;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n#content {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.nav {\r\n    flex: 0 1 auto;\r\n    background-color: #121212;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nh1 {\r\n    margin: 10px auto;\r\n    display: inline;\r\n}\r\n\r\n#todosTitle {\r\n    border-bottom: 1px solid #aaaaaa;\r\n    margin: 0px;\r\n    padding: 15px 0px;\r\n}\r\n\r\n#check {\r\n    color: #bb86fc;\r\n}\r\n\r\n.body {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #2e2e2e;\r\n    flex: 0 1 15%;\r\n    box-shadow: 0 1px 10px rgb(15, 15, 15);\r\n    padding: 20px;\r\n}\r\n\r\n#projects {\r\n    margin-left: 10px;\r\n}\r\n\r\n.project {\r\n    padding: 7px 10px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.project:hover {\r\n    background-color: #3d3d3d;\r\n    cursor: pointer;\r\n}\r\n\r\n.projectBody {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.projectDelete {\r\n    height: 21px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.projectDelete:hover {\r\n    color: #cf3e40;\r\n}\r\n\r\n.projectForm {\r\n    margin-top: 40px;\r\n}\r\n\r\n.projectForm form{\r\n    display: flex;\r\n}\r\n\r\n#newProject {\r\n    flex: 1 1 auto;\r\n    height: 1.7rem;\r\n    border: none;\r\n    padding: 0px;\r\n    border-radius: 3px;\r\n    text-indent: 10px;\r\n}\r\n\r\n#newProjectBtn {\r\n    flex: 0 1 auto;\r\n    background-color: #bb86fc;\r\n    border: none;\r\n    border-radius: 3px;\r\n    height: 1.7rem;\r\n    width: 1.7rem;\r\n    font-weight: 600;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n#newProjectBtn:active {\r\n    transform: translateX(1px) translateY(1px);\r\n}\r\n\r\n.main {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    padding: 50px 10%;\r\n}\r\n\r\n.display {\r\n    flex: 1 1 auto;\r\n    background-color: #2e2e2e;\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n}\r\n\r\n#todos {\r\n    margin: 10px 0px 50px 30px;\r\n}\r\n\r\n.newTodo {\r\n    display: block;\r\n    width: fit-content;\r\n    cursor: pointer;\r\n}\r\n\r\n.newTodo:hover {\r\n    color: white;\r\n}\r\n\r\n.form-body {\r\n    display: none;\r\n    background-color: #d3d3d3;\r\n    border-radius: 10px;\r\n    color: #212121;\r\n    padding: 20px;\r\n}\r\n\r\n.form-box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-box label {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-box input {\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    height: 1.7em;\r\n}\r\n\r\n.form-box select {\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  height: 2em;\r\n}\r\n\r\n#date {\r\n    width: fit-content;\r\n}\r\n\r\n#priority {\r\n    width: fit-content;\r\n}\r\n\r\n#submitBtn {\r\n    padding: 10px;\r\n    background-color: #47cfcf;\r\n    border: none;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16), 0 1px 5px rgba(0, 0, 0, 0.26); \r\n    transition: 0.2s ease-out;\r\n    border-radius: 10px;\r\n    color: black;\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n}\r\n\r\n#submitBtn:active {\r\n  transform: translateX(1.5px) translateY(1.5px);\r\n}\r\n\r\n#cancel {\r\n    padding: 10px;\r\n    background-color: #eb6e6e;\r\n    border: none;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16), 0 1px 5px rgba(0, 0, 0, 0.26); \r\n    transition: 0.2s ease-out;\r\n    border-radius: 10px;\r\n    color: black;\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n}\r\n\r\n#cancel:active {\r\n  transform: translateX(1.5px) translateY(1.5px);\r\n}\r\n\r\n.todo {\r\n    /* margin: 10px auto; */\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    /* border-bottom: 1px solid #aaaaaa; */\r\n    font-weight: 700;\r\n    padding: 15px 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.todo:hover {\r\n    background-color: #3d3d3d;\r\n}\r\n\r\n.todo div:nth-child(2) {\r\n    flex: 0 1 auto;\r\n    margin-right: 30px;\r\n}\r\n\r\n.todo div:nth-child(3) {\r\n    flex: 1 0 auto;\r\n    font-weight: 400;\r\n}\r\n\r\n.todo div:nth-child(4),\r\n.todo div:nth-child(5) {\r\n    text-align: right;\r\n    width: fit-content;\r\n    margin-left: 30px;\r\n}\r\n\r\n.todo div:nth-child(6) {\r\n    margin-left: 30px;\r\n}\r\n\r\n.todo div:nth-child(1) {\r\n    margin-right: 20px;\r\n}\r\n\r\n.fa-square:hover {\r\n    cursor: pointer;\r\n    color: #bb86fc;\r\n}\r\n\r\n.fa-check-square {\r\n    cursor: pointer;\r\n    color: #bb86fc;\r\n}\r\n\r\n.fa-trash-alt:hover {\r\n    cursor: pointer;\r\n    color: #cf3e40;\r\n}\r\n\r\n#footer {\r\n    flex: 0 1 40px;\r\n    background-color: #121212;\r\n    color: #bb86fc;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Raleway';\r\n    src: url(./Raleway/Raleway-VariableFont_wght.ttf);\r\n}\r\n\r\nhtml {\r\n    box-sizing: border-box;\r\n    background-color: #212121;\r\n    font-family: 'Raleway', sans-serif;\r\n    color: #dedede;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    letter-spacing: 1px;\r\n}\r\n\r\nbody {\r\n    height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n#content {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.nav {\r\n    flex: 0 1 auto;\r\n    background-color: #121212;\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nh1 {\r\n    margin: 10px auto;\r\n    display: inline;\r\n}\r\n\r\n#todosTitle {\r\n    border-bottom: 1px solid #aaaaaa;\r\n    margin: 0px;\r\n    padding: 15px 0px;\r\n}\r\n\r\n#check {\r\n    color: #bb86fc;\r\n}\r\n\r\n.body {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n}\r\n\r\n.sidebar {\r\n    background-color: #2e2e2e;\r\n    flex: 0 1 15%;\r\n    box-shadow: 0 1px 10px rgb(15, 15, 15);\r\n    padding: 20px;\r\n}\r\n\r\n#projects {\r\n    margin-left: 10px;\r\n}\r\n\r\n.project {\r\n    padding: 7px 10px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.project:hover {\r\n    background-color: #3d3d3d;\r\n    cursor: pointer;\r\n}\r\n\r\n.projectBody {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.projectDelete {\r\n    height: 21px;\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.projectDelete:hover {\r\n    color: #cf3e40;\r\n}\r\n\r\n.projectForm {\r\n    margin-top: 40px;\r\n}\r\n\r\n.projectForm form{\r\n    display: flex;\r\n}\r\n\r\n#newProject {\r\n    flex: 1 1 auto;\r\n    height: 1.7rem;\r\n    border: none;\r\n    padding: 0px;\r\n    border-radius: 3px;\r\n    text-indent: 10px;\r\n}\r\n\r\n#newProjectBtn {\r\n    flex: 0 1 auto;\r\n    background-color: #bb86fc;\r\n    border: none;\r\n    border-radius: 3px;\r\n    height: 1.7rem;\r\n    width: 1.7rem;\r\n    font-weight: 600;\r\n    margin-left: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n#newProjectBtn:active {\r\n    transform: translateX(1px) translateY(1px);\r\n}\r\n\r\n.main {\r\n    flex: 1 1 auto;\r\n    display: flex;\r\n    padding: 50px 10%;\r\n}\r\n\r\n.display {\r\n    flex: 1 1 auto;\r\n    background-color: #2e2e2e;\r\n    border-radius: 10px;\r\n    padding: 30px;\r\n}\r\n\r\n#todos {\r\n    margin: 10px 0px 50px 30px;\r\n}\r\n\r\n.newTodo {\r\n    display: block;\r\n    width: fit-content;\r\n    cursor: pointer;\r\n}\r\n\r\n.newTodo:hover {\r\n    color: white;\r\n}\r\n\r\n.form-body {\r\n    display: none;\r\n    background-color: #d3d3d3;\r\n    border-radius: 10px;\r\n    color: #212121;\r\n    padding: 20px;\r\n}\r\n\r\n.form-box {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.form-box label {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.form-box input {\r\n    border-radius: 5px;\r\n    border: 1px solid black;\r\n    height: 1.7em;\r\n}\r\n\r\n.form-box select {\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  height: 2em;\r\n}\r\n\r\n#date {\r\n    width: fit-content;\r\n}\r\n\r\n#priority {\r\n    width: fit-content;\r\n}\r\n\r\n#submitBtn {\r\n    padding: 10px;\r\n    background-color: #47cfcf;\r\n    border: none;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16), 0 1px 5px rgba(0, 0, 0, 0.26); \r\n    transition: 0.2s ease-out;\r\n    border-radius: 10px;\r\n    color: black;\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n}\r\n\r\n#submitBtn:active {\r\n  transform: translateX(1.5px) translateY(1.5px);\r\n}\r\n\r\n#cancel {\r\n    padding: 10px;\r\n    background-color: #eb6e6e;\r\n    border: none;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16), 0 1px 5px rgba(0, 0, 0, 0.26); \r\n    transition: 0.2s ease-out;\r\n    border-radius: 10px;\r\n    color: black;\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n}\r\n\r\n#cancel:active {\r\n  transform: translateX(1.5px) translateY(1.5px);\r\n}\r\n\r\n.todo {\r\n    /* margin: 10px auto; */\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    /* border-bottom: 1px solid #aaaaaa; */\r\n    font-weight: 700;\r\n    padding: 15px 10px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.todo:hover {\r\n    background-color: #3d3d3d;\r\n}\r\n\r\n.todo div:nth-child(2) {\r\n    flex: 0 1 auto;\r\n    margin-right: 30px;\r\n}\r\n\r\n.todo div:nth-child(3) {\r\n    flex: 1 0 auto;\r\n    font-weight: 400;\r\n}\r\n\r\n.todo div:nth-child(4),\r\n.todo div:nth-child(5) {\r\n    text-align: right;\r\n    width: fit-content;\r\n    margin-left: 30px;\r\n}\r\n\r\n.todo div:nth-child(6) {\r\n    margin-left: 30px;\r\n}\r\n\r\n.todo div:nth-child(1) {\r\n    margin-right: 20px;\r\n}\r\n\r\n.fa-square:hover {\r\n    cursor: pointer;\r\n    color: #bb86fc;\r\n}\r\n\r\n.fa-check-square {\r\n    cursor: pointer;\r\n    color: #bb86fc;\r\n}\r\n\r\n.fa-trash-alt:hover {\r\n    cursor: pointer;\r\n    color: #cf3e40;\r\n}\r\n\r\n#footer {\r\n    flex: 0 1 40px;\r\n    background-color: #121212;\r\n    color: #bb86fc;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n    font-weight: 600;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
// Todo factory function
const Todo = (status, title, description, date, priority) => {
    return { status, title, description, date, priority };
};



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject),
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "switchProject": () => (/* binding */ switchProject),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "removeAllProjects": () => (/* binding */ removeAllProjects),
/* harmony export */   "renderAllProjects": () => (/* binding */ renderAllProjects)
/* harmony export */ });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/todos.js");



let projectsArray = JSON.parse(localStorage.getItem('projectsArray')) || [['Default']];
const newTodo = document.querySelector('.newTodo');

if (JSON.parse(localStorage.getItem('projectsArray')) == '') {
    projectsArray = [['Default']];
    console.log(projectsArray);
}

let currentProject = projectsArray[0];

const newProject = (e) => {
    e.preventDefault();

    const projectName = document.getElementById('newProject').value;

    if (projectName.length > 17) {
        alert('Project name is too long!');
        document.querySelector('.projectForm').reset();
        return;
    };

    const newArray = [projectName];
    projectsArray.push(newArray);
    document.getElementById('projectForm').reset();

    // saving to local storage
    localStorage.setItem('projectsArray', JSON.stringify(projectsArray));

    renderProject(projectName);
};

const renderProject = (projectName, index = projectsArray.length - 1) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.setAttribute('data-project', (index));
    const projectBody = document.createElement('div')
    projectBody.innerHTML = `&#129312;&ensp; ${projectName}`;
    projectBody.classList.add('projectBody')
    const projectDelete = document.createElement('div');
    projectDelete.innerHTML = '<i class="fas fa-times"></i>';
    projectDelete.classList.add('projectDelete');

    project.append(projectBody, projectDelete);
    projects.appendChild(project);

    projectBody.addEventListener('click', (e) => {
        switchProject(e);
        (0,_todos__WEBPACK_IMPORTED_MODULE_0__.removeAllTodos)();
        (0,_todos__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)(currentProject);
    });

    projectDelete.addEventListener('click', deleteProject);
};

const switchProject = (e) => {
    const projectIndex = e.path[1].dataset.project;
    if (!projectIndex) {
        return;
    } else {
        currentProject = projectsArray[projectIndex];
        const todosTitle = document.getElementById('todosTitle');
        todosTitle.innerText = projectsArray[projectIndex][0];
        if (newTodo.style.display == 'none') {
            newTodo.style.display = 'block';
        };
    };
};

const deleteProject = (e) => {
    const selectedProjectIndex = e.path[2].dataset.project;
    const previousIndex = selectedProjectIndex - 1;
    const nextIndex = parseInt(selectedProjectIndex) + 1;
    const todosTitle = document.getElementById('todosTitle');
    if (currentProject === projectsArray[selectedProjectIndex]) {
        if (previousIndex > -1) {
            currentProject = projectsArray[previousIndex];
            todosTitle.innerText = projectsArray[previousIndex][0];
            (0,_todos__WEBPACK_IMPORTED_MODULE_0__.removeAllTodos)();
            (0,_todos__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)(currentProject);
        } else if (nextIndex < projectsArray.length) {
            currentProject = projectsArray[nextIndex];
            todosTitle.innerText = projectsArray[nextIndex][0];
            (0,_todos__WEBPACK_IMPORTED_MODULE_0__.removeAllTodos)();
            (0,_todos__WEBPACK_IMPORTED_MODULE_0__.renderAllTodos)(currentProject);
        } else {
            todosTitle.innerText = '';
            (0,_todos__WEBPACK_IMPORTED_MODULE_0__.removeAllTodos)();
            newTodo.style.display = 'none';
        };
    };

    projectsArray.splice(selectedProjectIndex, 1);
    localStorage.setItem('projectsArray', JSON.stringify(projectsArray));
    removeAllProjects();
    renderAllProjects();
}

const removeAllProjects = () => {
    const projects = document.getElementsByClassName('project');
    while (projects[0]) {
        projects[0].parentNode.removeChild(projects[0]);
    };
};

const renderAllProjects = () => {
    if (projectsArray.length > 0) {
        for (let i = 0; i < projectsArray.length; i++) {
            renderProject(projectsArray[i][0], i);
        };
    } else {
        return;
    };
};





/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newTodo": () => (/* binding */ newTodo),
/* harmony export */   "openForm": () => (/* binding */ openForm),
/* harmony export */   "closeForm": () => (/* binding */ closeForm),
/* harmony export */   "removeAllTodos": () => (/* binding */ removeAllTodos),
/* harmony export */   "renderTodo": () => (/* binding */ renderTodo),
/* harmony export */   "renderAllTodos": () => (/* binding */ renderAllTodos)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ "./src/factory.js");



const todoList = document.querySelector('#todos');

const newTodo = (e) => {
    e.preventDefault();

    const status = 0;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const todo = (0,_factory__WEBPACK_IMPORTED_MODULE_1__.Todo)(status, title, description, date, priority);
    //pushes the todo to the current project selected from the projects js
    _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.push(todo);
    localStorage.setItem('projectsArray', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray));

    document.querySelector('#todoForm').reset();
    renderTodo(todo);
    closeForm(e);
};

const renderTodo = (todo, index = _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.length - 1) => {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo');
    todoContainer.setAttribute('data-todo', index);
    const todoStatus = document.createElement('div');
    todoStatus.setAttribute('id', `status-${index}`);
    todoStatus.innerHTML = (todo.status === 0) ? '<i class="far fa-square"></i>' : '<i class="far fa-check-square"></i>';
    const todoTitle = document.createElement('div');
    todoTitle.innerText = todo.title;
    const todoDescription = document.createElement('div');
    todoDescription.innerText = todo.description;
    const todoDate = document.createElement('div');
    todoDate.innerText = todo.date || 'No Date';
    const todoPriority = document.createElement('div');
    todoPriority.innerText = todo.priority;
    const todoDelete = document.createElement('div');
    todoDelete.setAttribute('id', `delete-${index}`)
    todoDelete.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    todoContainer.append(todoStatus, todoTitle, todoDescription, todoDate, todoPriority, todoDelete);
    todoList.append(todoContainer);

    document.getElementById(`delete-${index}`).addEventListener('click', deleteTodo);
    document.getElementById(`status-${index}`).addEventListener('click', changeStatus);
};

const openForm = () => {
    const newTodo = document.querySelector('.newTodo');
    newTodo.style.display = 'none';
    const formBody = document.querySelector('.form-body');
    formBody.style.display = 'block';
};

const closeForm = (e) => {
    e.preventDefault();
    const formBody = document.querySelector('.form-body');
    formBody.style.display = 'none';
    const newTodo = document.querySelector('.newTodo');
    newTodo.style.display = 'block';
};

const deleteTodo = (e) => {
    const todoIndex = e.path[2].dataset.todo;
    // const todo = document.querySelector(`[data-todo='${todoIndex}']`);
    // todoList.removeChild(todo);
    _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject.splice(todoIndex, 1);
    localStorage.setItem('projectsArray', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray));
    removeAllTodos();
    renderAllTodos(_projects__WEBPACK_IMPORTED_MODULE_0__.currentProject);
}

const changeStatus = (e) => {
    const todoIndex = e.path[2].dataset.todo;
    const targetedTodo = document.getElementById(`status-${todoIndex}`);
    if (targetedTodo.innerHTML == '<i class="far fa-square" aria-hidden="true"></i>') {
        _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject[todoIndex].status = 1;
        targetedTodo.innerHTML = '<i class="far fa-check-square"></i>';
    } else {
        _projects__WEBPACK_IMPORTED_MODULE_0__.currentProject[todoIndex].status = 0;
        targetedTodo.innerHTML = '<i class="far fa-square"></i>';
    };
    localStorage.setItem('projectsArray', JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_0__.projectsArray));
};

const removeAllTodos = () => {
    const todos = document.getElementsByClassName('todo');
    while (todos[0]) {
        todos[0].parentNode.removeChild(todos[0]);
    };
};

const renderAllTodos = (currentProject) => {
    if (currentProject.length > 1) {
        for (let i = 1; i < currentProject.length; i++) {
            renderTodo(currentProject[i], i);
        };
    } else {
        return;
    };
};



/***/ }),

/***/ "./src/Raleway/Raleway-VariableFont_wght.ttf":
/*!***************************************************!*\
  !*** ./src/Raleway/Raleway-VariableFont_wght.ttf ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3fefe681f4c62116679b.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ "./src/todos.js");




document.addEventListener('DOMContentLoaded', () => {
    //create new project
    document.getElementById('newProjectBtn').addEventListener('click', (e) => (0,_projects__WEBPACK_IMPORTED_MODULE_1__.newProject)(e));
    //open add new todo form
    document.querySelector('.newTodo').addEventListener('click', _todos__WEBPACK_IMPORTED_MODULE_2__.openForm);
    //close add new todo form
    document.getElementById('cancel').addEventListener('click', (e) => (0,_todos__WEBPACK_IMPORTED_MODULE_2__.closeForm)(e));
    //submit new todo
    document.getElementById('submitBtn').addEventListener('click', (e) => (0,_todos__WEBPACK_IMPORTED_MODULE_2__.newTodo)(e));
    //delete default project
    // document.querySelector('.projectDelete').addEventListener('click', deleteProject);
});


if (_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[0][0] === 'Default' && _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length == 1 && _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[0].length == 1) {
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.removeAllProjects)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.renderAllProjects)();
} else {
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.removeAllProjects)();
    (0,_projects__WEBPACK_IMPORTED_MODULE_1__.renderAllProjects)();
    const todosTitle = document.getElementById('todosTitle');
    todosTitle.innerText = _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray[0][0];
    (0,_todos__WEBPACK_IMPORTED_MODULE_2__.renderAllTodos)(_projects__WEBPACK_IMPORTED_MODULE_1__.currentProject);
};
})();

/******/ })()
;
//# sourceMappingURL=main.js.map