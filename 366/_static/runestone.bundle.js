(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone"],{

/***/ 18555:
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/common/css/presenter_mode.css ***!
  \***************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hidden{\r\n  display: none;\r\n}\r\n\r\n.view-toggle{\r\n  padding: 0.85em;\r\n}\r\n\r\n.presentation-mode .section *{\r\n  display: none;\r\n}\r\n\r\n.presentation-mode .section .runestone, .presentation-mode .section .runestone *{\r\n  display: initial;\r\n}\r\n\r\n.present{\r\n    height: 100vh;\r\n}\r\n\r\n.full-height{\r\n    height: 100vh;\r\n}\r\n\r\n.bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n#codeDisplayDiv{\r\n  width: auto!important;\r\n}\r\n\r\ndiv.ExecutionVisualizer #dataViz{\r\n  margin: 0;  \r\n}\r\n\r\ndiv.ExecutionVisualizer div#stackHeader {\r\n  text-align: center;\r\n}\r\n\r\n#stackFrame{\r\n  display: block!important;\r\n}\r\n\r\n#stackHeapTable {\r\n  width: 100%;\r\n}\r\n\r\n#stackHeapTable tr {\r\n  justify-content: space-around;\r\n}\r\n\r\ndiv.ExecutionVisualizer td#stack_td, div.ExecutionVisualizer td#heap_td {\r\n  flex: 1;\r\n}\r\n\r\n.presentation-title {\r\n  display: none;\r\n}\r\n\r\n.present .presentation-title {\r\n  display: block;\r\n}\r\n\r\ndiv.ExecutionVisualizer div#heap {\r\n  float: none;\r\n  padding-left: 0;\r\n}\r\n\r\n#stack_td tr {\r\n  display: table-row;\r\n}\r\n\r\n#heap_td tr {\r\n  display: table-row;\r\n}\r\n\r\n#codeDisplayDiv{\r\n  margin: 0 auto;\r\n}\r\n\r\n/*  bnm -- comment this out for now as it breaks codelens indentation and arrows\r\n.visualizer tr{\r\n  display: flex;\r\n}\r\n*/\r\n\r\n#vizLayoutTd{\r\n  flex: 1;\r\n}\r\n\r\n#vizLayoutTdFirst {\r\n  flex: 2;\r\n}\r\n\r\n#vizLayoutTdSecond {\r\n  flex: 1;\r\n}\r\n\r\n#vizLayoutTdThird {\r\n  flex: 2;\r\n}\r\n\r\n#progOutputs {\r\n  display: block!important;\r\n  margin: 0 20px;\r\n  width: 60%;\r\n}\r\n\r\n#pyStdout {\r\n  width: 100%!important;\r\n}\r\n\r\ndiv.ExecutionVisualizer #pyStdout {\r\n  margin-bottom: 1em;\r\n}\r\n\r\ndiv.ExecutionVisualizer table.visualizer {\r\n  width: 100%;\r\n}\r\n\r\n.present #vizLayoutTdThird{\r\n  text-align: left;\r\n}\r\n\r\n.ac-block{\r\n  display: flex;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.row-mode .ac-block{\r\n  display: block;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.row-mode .ac_output, .row-mode .ac_code_div{\r\n  float: none;\r\n  display: block;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n\r\n.row-mode .ac_code_div{\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.ac_section>* {\r\n  max-width: 100%;\r\n}\r\n\r\n.ac_output{\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n.ac_output pre {\r\n  visibility: visible!important;\r\n  min-height: 60px;\r\n}\r\n\r\n.CodeMirror{\r\n  margin: 0;\r\n  max-width: 100%;\r\n  border-radius: 3px;\r\n  min-height: 60px;\r\n}\r\n\r\n.container .section > runestone:not(.ac_section){\r\n  max-width:none;\r\n  margin: 0;\r\n}\r\n\r\n.presentation-options {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.layout-btn {\r\n  background-color: #FBEED5;\r\n  border: 2px solid #DFD4BE;\r\n  border-radius: 2px;\r\n  padding: .25rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 .5rem;\r\n  transition: all .2s ease;\r\n}\r\n\r\n.layout-btn.active-layout, .layout-btn:focus {\r\n  border: 2px solid #979797;\r\n  outline: none;\r\n}\r\n\r\n.sketchpad-container {\r\n  min-width: 50%;\r\n  min-height: 300px;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-mode .sketchpad-container {\r\n  width: 50%;\r\n  margin: 0;\r\n  display: inline-block;\r\n  /*margin: 0 -15px;*/\r\n  vertical-align: top;\r\n}\r\n\r\n.row-mode .error {\r\n  margin: 20px 15px;\r\n}\r\n\r\n.card-mode .error {\r\n  margin: 28px 0 0;\r\n  width: 50%;\r\n  display: inline-block;\r\n  padding: 0 15px;\r\n  vertical-align: top;\r\n  margin-top: 28px;\r\n}\r\n\r\n.sketchpad {\r\n  background: white;\r\n  border: 2px solid grey;\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  min-height: 300px;\r\n  display: block;\r\n}\r\n\r\n.btn-presenter {\r\n  padding: .5rem 1rem;\r\n  border-radius: 3px;\r\n  font-weight: 500;\r\n  margin: 1.5rem 0 1.5rem 1.5rem;\r\n}\r\n\r\n.btn-grey-outline {\r\n  border: 2px solid grey;\r\n  color: grey;\r\n  background: white;\r\n}\r\n\r\n.btn-grey-solid {\r\n  border: 2px solid grey;\r\n  color: white;\r\n  background: grey;\r\n}\r\n\r\nbody.present .ac_section>* {\r\n  max-width: none;\r\n}\r\nbody.present iframe {\r\n  width: 100%;\r\n}\r\n\r\nbody.present {\r\n  /* font-size: 2.0em; */\r\n}\r\n\r\nbody.present #relations-prev, body.present #relations-next, body.present .navLinkBg {\r\n  display: none;\r\n}\r\n\r\nbody.present .btn-presenter {\r\n  position: absolute;\r\n}\r\nbody.present .btn-presenter.prev-exercise { left: 0px; }\r\nbody.present .btn-presenter.next-exercise { right: 0px; }\r\n\r\n/* .col-md-12 {\r\n  width: 58.333333333333336%;\r\n}\r\n\r\n.card-mode .col-md-7 {\r\n  width: 50%;\r\n} */\r\n", "",{"version":3,"sources":["webpack://./runestone/common/css/presenter_mode.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;AAChB;;AAEA;;;;CAIC;;AAED;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,qBAAqB;EACrB,eAAe;EACf,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;AACA,4CAA4C,SAAS,EAAE;AACvD,4CAA4C,UAAU,EAAE;;AAExD;;;;;;GAMG","sourcesContent":[".hidden{\r\n  display: none;\r\n}\r\n\r\n.view-toggle{\r\n  padding: 0.85em;\r\n}\r\n\r\n.presentation-mode .section *{\r\n  display: none;\r\n}\r\n\r\n.presentation-mode .section .runestone, .presentation-mode .section .runestone *{\r\n  display: initial;\r\n}\r\n\r\n.present{\r\n    height: 100vh;\r\n}\r\n\r\n.full-height{\r\n    height: 100vh;\r\n}\r\n\r\n.bottom{\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n\r\n#codeDisplayDiv{\r\n  width: auto!important;\r\n}\r\n\r\ndiv.ExecutionVisualizer #dataViz{\r\n  margin: 0;  \r\n}\r\n\r\ndiv.ExecutionVisualizer div#stackHeader {\r\n  text-align: center;\r\n}\r\n\r\n#stackFrame{\r\n  display: block!important;\r\n}\r\n\r\n#stackHeapTable {\r\n  width: 100%;\r\n}\r\n\r\n#stackHeapTable tr {\r\n  justify-content: space-around;\r\n}\r\n\r\ndiv.ExecutionVisualizer td#stack_td, div.ExecutionVisualizer td#heap_td {\r\n  flex: 1;\r\n}\r\n\r\n.presentation-title {\r\n  display: none;\r\n}\r\n\r\n.present .presentation-title {\r\n  display: block;\r\n}\r\n\r\ndiv.ExecutionVisualizer div#heap {\r\n  float: none;\r\n  padding-left: 0;\r\n}\r\n\r\n#stack_td tr {\r\n  display: table-row;\r\n}\r\n\r\n#heap_td tr {\r\n  display: table-row;\r\n}\r\n\r\n#codeDisplayDiv{\r\n  margin: 0 auto;\r\n}\r\n\r\n/*  bnm -- comment this out for now as it breaks codelens indentation and arrows\r\n.visualizer tr{\r\n  display: flex;\r\n}\r\n*/\r\n\r\n#vizLayoutTd{\r\n  flex: 1;\r\n}\r\n\r\n#vizLayoutTdFirst {\r\n  flex: 2;\r\n}\r\n\r\n#vizLayoutTdSecond {\r\n  flex: 1;\r\n}\r\n\r\n#vizLayoutTdThird {\r\n  flex: 2;\r\n}\r\n\r\n#progOutputs {\r\n  display: block!important;\r\n  margin: 0 20px;\r\n  width: 60%;\r\n}\r\n\r\n#pyStdout {\r\n  width: 100%!important;\r\n}\r\n\r\ndiv.ExecutionVisualizer #pyStdout {\r\n  margin-bottom: 1em;\r\n}\r\n\r\ndiv.ExecutionVisualizer table.visualizer {\r\n  width: 100%;\r\n}\r\n\r\n.present #vizLayoutTdThird{\r\n  text-align: left;\r\n}\r\n\r\n.ac-block{\r\n  display: flex;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.row-mode .ac-block{\r\n  display: block;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.row-mode .ac_output, .row-mode .ac_code_div{\r\n  float: none;\r\n  display: block;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n\r\n.row-mode .ac_code_div{\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.ac_section>* {\r\n  max-width: 100%;\r\n}\r\n\r\n.ac_output{\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n\r\n.ac_output pre {\r\n  visibility: visible!important;\r\n  min-height: 60px;\r\n}\r\n\r\n.CodeMirror{\r\n  margin: 0;\r\n  max-width: 100%;\r\n  border-radius: 3px;\r\n  min-height: 60px;\r\n}\r\n\r\n.container .section > runestone:not(.ac_section){\r\n  max-width:none;\r\n  margin: 0;\r\n}\r\n\r\n.presentation-options {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.layout-btn {\r\n  background-color: #FBEED5;\r\n  border: 2px solid #DFD4BE;\r\n  border-radius: 2px;\r\n  padding: .25rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin: 0 .5rem;\r\n  transition: all .2s ease;\r\n}\r\n\r\n.layout-btn.active-layout, .layout-btn:focus {\r\n  border: 2px solid #979797;\r\n  outline: none;\r\n}\r\n\r\n.sketchpad-container {\r\n  min-width: 50%;\r\n  min-height: 300px;\r\n  padding: 0 15px;\r\n}\r\n\r\n.card-mode .sketchpad-container {\r\n  width: 50%;\r\n  margin: 0;\r\n  display: inline-block;\r\n  /*margin: 0 -15px;*/\r\n  vertical-align: top;\r\n}\r\n\r\n.row-mode .error {\r\n  margin: 20px 15px;\r\n}\r\n\r\n.card-mode .error {\r\n  margin: 28px 0 0;\r\n  width: 50%;\r\n  display: inline-block;\r\n  padding: 0 15px;\r\n  vertical-align: top;\r\n  margin-top: 28px;\r\n}\r\n\r\n.sketchpad {\r\n  background: white;\r\n  border: 2px solid grey;\r\n  border-radius: 3px;\r\n  width: 100%;\r\n  min-height: 300px;\r\n  display: block;\r\n}\r\n\r\n.btn-presenter {\r\n  padding: .5rem 1rem;\r\n  border-radius: 3px;\r\n  font-weight: 500;\r\n  margin: 1.5rem 0 1.5rem 1.5rem;\r\n}\r\n\r\n.btn-grey-outline {\r\n  border: 2px solid grey;\r\n  color: grey;\r\n  background: white;\r\n}\r\n\r\n.btn-grey-solid {\r\n  border: 2px solid grey;\r\n  color: white;\r\n  background: grey;\r\n}\r\n\r\nbody.present .ac_section>* {\r\n  max-width: none;\r\n}\r\nbody.present iframe {\r\n  width: 100%;\r\n}\r\n\r\nbody.present {\r\n  /* font-size: 2.0em; */\r\n}\r\n\r\nbody.present #relations-prev, body.present #relations-next, body.present .navLinkBg {\r\n  display: none;\r\n}\r\n\r\nbody.present .btn-presenter {\r\n  position: absolute;\r\n}\r\nbody.present .btn-presenter.prev-exercise { left: 0px; }\r\nbody.present .btn-presenter.next-exercise { right: 0px; }\r\n\r\n/* .col-md-12 {\r\n  width: 58.333333333333336%;\r\n}\r\n\r\n.card-mode .col-md-7 {\r\n  width: 50%;\r\n} */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 67805:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/common/css/runestone-custom-sphinx-bootstrap.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables holding theme colors */\r\n:root {\r\n    --background: #ffffff;\r\n    --outerBackground: #eeeeee;\r\n    --links: #0645ad;\r\n    --bodyFont: #000000;\r\n    --tooltip: #ffffff;\r\n    --grayToWhite: #333333;\r\n    --navbar: #f8f8f8;\r\n    --navbarFont: #707070;\r\n    --navbarFontHover: #000000;\r\n    --alerts: #d9edf7;\r\n    --completionButton: #ffaa2b;\r\n    --completionButtonHover: #ff9f19;\r\n    --admonition: #fcf8e3;\r\n    --admonitionBorder: #fbeed5;\r\n    --codeButtons: #474949;\r\n    --codeButtonsBorder: #474949;\r\n    --dangerAlerts: #f2dede;\r\n    --successAlerts: #dff0d8;\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n    --background: #000000;\r\n    --outerBackground: #3d3d3d;\r\n    --links: #1165f0;\r\n    --bodyFont: #ffffff;\r\n    --tooltip: #000000;\r\n    --grayToWhite: #ffffff;\r\n    --navbar: #3d3d3d;\r\n    --navbarFont: #ffffff;\r\n    --navbarFontHover: #d6d6d6;\r\n    --alerts: #714082;\r\n    --completionButton: #650087;\r\n    --completionButtonHover: #560073;\r\n    --admonition: #3d3d3d;\r\n    --admonitionBorder: #262626;\r\n    --codeButtons: #2c0aa6;\r\n    --codeButtonsBorder: #ffffff;\r\n    --dangerAlerts: #8c2626;\r\n    --successAlerts: #217300;\r\n}\r\n\r\n/* custom modification of basic.css for color-contrast (AA compliant) */\r\ntd.linenos pre {\r\n    color: #6b6b6b;\r\n}\r\n\r\n/* custom modification of prettify.css for color-contrast (AA compliant) */\r\n.str {\r\n    color: #006b00;\r\n}\r\n\r\n/* custom modification of parsons.css for color-contrast (AA compliant) */\r\n.parsons .block {\r\n    background-color: #fafafa;\r\n}\r\n\r\n/* custom modification of pygments.css for color-contrast (AA compliant) */\r\n.highlight .c1 {\r\n    color: #376A7B;\r\n}\r\n\r\n.highlight .nn {\r\n    color: #0F6C95;\r\n}\r\n\r\n.highlight .gp {\r\n    color: #A14C08;\r\n}\r\n\r\n.highlight .si {\r\n    color: #3C773D;\r\n}\r\n\r\n.highlight .nc {\r\n    color: #0B719D;\r\n}\r\n\r\n/* `Search` functionality's result custom modification for color-contrast (AA compliant) */\r\nul.search li div.context {\r\n    color: #6b6b6b;\r\n}\r\n\r\nspan.highlighted {\r\n    color: #4d4d4d;\r\n}\r\n\r\n/* ActiveCode gutter custom modification for color-contrast (AA compliant) */\r\n\r\n.CodeMirror-linenumber {\r\n    color: #6b6b6b;\r\n}\r\n\r\n.alert-warning {\r\n    background-color: var(--admonition);\r\n    border-color: var(--admonitionBorder);\r\n}\r\n\r\n/* Python code output custom modification for color-contrast (AA compliant) */\r\ndiv.ExecutionVisualizer table#pyCodeOutput .lineNo {\r\n    color: #6b6b6b;\r\n}\r\n\r\n/* Runestone custom modifications */\r\n\r\nbody {\r\n    counter-reset: rscomponent;\r\n    padding-top: 60px;\r\n    background-color: var(--outerBackground);\r\n}\r\n\r\npre {\r\n    margin: 0 0 1em;\r\n}\r\n\r\nh5 {\r\n    font-weight: bold;\r\n    padding: 10px 0;\r\n}\r\n\r\n/* table-of-contents related styles for color-contrast (AA compliant) */\r\n#table-of-contents a {\r\n    color: var(--links);\r\n}\r\n\r\n#table-of-contents a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n#table-of-contents.section {\r\n    font-size: 16px;\r\n}\r\n\r\n/* navbar-brand color contrast (AA compliant) */\r\n.navbar-default {\r\n    background-color: var(--navbar);\r\n}\r\n\r\n.navbar-default .navbar-nav>li {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover {\r\n    color: var(--navbarFontHover);\r\n}\r\n\r\n.navbar-default .navbar-brand {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n/* acknowledgement related styles for color-contrast (AA compliant) */\r\n.toctree-wrapper {\r\n    font-size: 16px;\r\n}\r\n\r\n.toctree-wrapper a {\r\n    color: var(--links);\r\n}\r\n\r\n.toctree-wrapper a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n/* index and search related styles for color-contrast (AA compliant) */\r\n#index-and-search.section {\r\n    font-size: 16px;\r\n}\r\n\r\n#index-and-search.section a {\r\n    color: var(--links);\r\n}\r\n\r\n#index-and-search.section a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n/* custom style for `a` tag for color-contrast (AA compliant) */\r\n\r\na {\r\n    color: var(--links);\r\n}\r\n\r\n/* navbar and menu related styles */\r\n@media (max-width: 768px) {\r\n\r\n    /* Remove top padding when top navbar goes collapsed in narrow viewports */\r\n    body {\r\n        padding-top: 0;\r\n        margin: auto auto auto 5px;\r\n    }\r\n\r\n    .navbar-fixed-top {\r\n        position: static;\r\n    }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    /* when navbar is collapsed we don't want any vertical dividers taking up space */\r\n    .navbar .divider-vertical {\r\n        margin: 0 3px;\r\n        border-left: 1px solid #f2f2f2;\r\n    }\r\n}\r\n\r\ndiv.container {\r\n    background-color: var(--background);\r\n}\r\n\r\ndiv.section {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.container {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.container .section>*:not(.section):not(.ac_section) {\r\n    max-width: 500pt;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/* This rule is meant to override the behavior of the\r\n   previous rule since it is not possible to exclude\r\n   more than one section in the not() part of the rule\r\n*/\r\n.container .section div.full-width.container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 90%;\r\n}\r\n\r\n.container .section>img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.container .section .parsons,\r\n.container .section .parsons .sortable-code-container,\r\n.container .section .cd_section {\r\n    max-width: none;\r\n}\r\n\r\n.navbar>.container .navbar-brand {\r\n    margin-left: 0;\r\n}\r\n\r\n.navbar>.container {\r\n    background-color: var(--navbar);\r\n}\r\n\r\n.footer>.container {\r\n    background-color: var(--outerBackground);\r\n}\r\n\r\n.footer>.container p>a {\r\n    color: var(--links);\r\n}\r\n\r\n.brand-logo {\r\n    float: left;\r\n    display: block;\r\n    background-size: 40px 40px !important;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-top: 4px;\r\n}\r\n\r\n.social-menu {\r\n    width: 220px;\r\n    padding: 10px 10px 15px 20px;\r\n}\r\n\r\n.fb-like {\r\n    margin-top: 7px;\r\n}\r\n\r\n.fb_iframe_widget span,\r\n.fb_iframe_widget iframe {\r\n    height: 20px !important;\r\n    width: 82px !important;\r\n}\r\n\r\n.twitter-follow-button {\r\n    margin-top: 10px;\r\n}\r\n\r\n.gittip {\r\n    margin-top: 8px;\r\n}\r\n\r\n.gittip-button {\r\n    margin-bottom: -6px;\r\n}\r\n\r\n.dropdown-menu>li>span {\r\n    display: block;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    color: var(--grayToWhite);\r\n    white-space: nowrap;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    color: var(--grayToWhite);\r\n}\r\n\r\n.loggedinuser {\r\n    font-weight: bold;\r\n}\r\n\r\n/* end navbar and menu related styles */\r\n\r\n.CodeMirror {\r\n    margin: 0 0 1em 0;\r\n    background-color: var(--background);\r\n    height: auto;\r\n    clear: both;\r\n}\r\n\r\n.CodeMirror-scroll {\r\n    /* this allows CM elements to be resized to (almost) any\r\n     * height while still relying on max-height (which keeps\r\n     * the CM editors to no more than the size needed\r\n     * unless resized) */\r\n    max-height: 60em;\r\n    min-width: 30em;\r\n}\r\n\r\n.ac_section .CodeMirror pre {\r\n    -moz-border-radius: 0;\r\n    -webkit-border-radius: 0;\r\n    -o-border-radius: 0;\r\n    border-radius: 0;\r\n    border-width: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: transparent;\r\n    font-family: Monaco, Courier New, monospace;\r\n    font-size: inherit;\r\n    padding: 0;\r\n    margin: 0;\r\n    white-space: pre;\r\n    word-wrap: normal;\r\n}\r\n\r\nbutton.btn,\r\nbtn.btn-sm,\r\ninput[type=\"submit\"].btn.btn-sm,\r\ninput[type=\"button\"].btn.btn-sm {\r\n    font-size: 1em;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.btn {\r\n    margin: 5px;\r\n}\r\n\r\n.btn.disabled {\r\n    /* needed in Bootstrap 3 to allow tooltips on disabled buttons */\r\n    pointer-events: auto;\r\n}\r\n\r\n.btn-default,\r\n.btn-default.disabled,\r\n.btn-default[disabled],\r\n.btn-default.disabled:hover,\r\n.btn-default[disabled]:hover {\r\n    color: #ffffff;\r\n    background-color: var(--codeButtons);\r\n    border-color: var(codeButtonsBorder);\r\n}\r\n\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default:active,\r\n.btn-default.active {\r\n    background-color: #3a3c3c;\r\n    border-color: #2e2f2f;\r\n    color: #ffffff;\r\n}\r\n\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n    margin-right: 5px;\r\n}\r\n\r\n.tooltip {\r\n    z-index: 2000 !important;\r\n}\r\n\r\n.tooltip.in {\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n}\r\n\r\nh2 {\r\n    margin-top: 20px;\r\n}\r\n\r\n.alert form {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/* default bookstrap alert color is hard to read (low contrast). */\r\n.alert {\r\n    color: var(--grayToWhite);\r\n    padding: 10px;\r\n}\r\n\r\n.alert-info {\r\n    background-color: var(--alerts);\r\n}\r\n\r\n.alert-danger {\r\n    background-color: var(--dangerAlerts);\r\n}\r\n\r\n/* override the color styles applied by Skulpt to the unittest results divs */\r\n.unittest-results.alert-danger {\r\n    background-color: var(--dangerAlerts) !important;\r\n}\r\n\r\n.unittest-results.alert-success {\r\n    background-color: var(--successAlerts) !important;\r\n}\r\n\r\n.alert label {\r\n    font-weight: normal;\r\n}\r\n\r\n/* These admonition styles styles are copied from the Bootstrap .alert classes.\r\n Most of the !important declarations are to override the Sphinx basic.css styles */\r\n.admonition {\r\n    padding: 8px 35px 8px 14px !important;\r\n    margin-bottom: 20px !important;\r\n    margin-top: 20px !important;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    background-color: var(--admonition);\r\n    border: 1px solid #fbeed5;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n/* .alert-danger */\r\n.admonition.caution {\r\n    color: #A33F3E;\r\n    background-color: #f2dede;\r\n    border-color: #eed3d7;\r\n}\r\n\r\n/* .alert-info */\r\n.admonition.tip,\r\n.admonition.note {\r\n    color: #333;\r\n    background-color: #d9edf7;\r\n    border-color: #bce8f1;\r\n}\r\n\r\n/* from web2py.css */\r\ndiv.flash {\r\n    font-weight: bold;\r\n    position: fixed;\r\n    padding: 10px;\r\n    top: 55px;\r\n    right: 45px;\r\n    opacity: 0.95;\r\n    margin: 0 0 10px 10px;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    background-color: #000;\r\n    border: 2px solid #fff;\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n    -webkit-border-radius: 8px;\r\n    background-image: -webkit-linear-gradient(top, #222, #000);\r\n    background-image: -o-linear-gradient(top, #222, #000);\r\n    background-image: -moz-linear-gradient(90deg, #222, #000);\r\n    background-image: linear-gradient(top, #222, #000);\r\n    background-repeat: repeat-x;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    z-index: 2000;\r\n}\r\n\r\n/* Styles for the login, registration, and Janrain forms */\r\n#web2py_user_form {\r\n    margin-top: 10px;\r\n}\r\n\r\n#web2py_user_form form {\r\n    float: left;\r\n    margin-right: 150px;\r\n    padding-top: 3px;\r\n}\r\n\r\n#web2py_user_form td {\r\n    padding-bottom: 15px;\r\n}\r\n\r\n#web2py_user_form td.w2p_fw {\r\n    width: 299px;\r\n}\r\n\r\n#auth-actions {\r\n    margin-top: 50px;\r\n}\r\n\r\n#sign_in_text td {\r\n    font-size: 17px;\r\n    color: #333;\r\n    font-family: 'lucida grande', Verdana, sans-serif;\r\n    padding-bottom: 13px;\r\n}\r\n\r\n#auth_user_remember {\r\n    margin-top: -20px;\r\n}\r\n\r\n/* End login, registration, Janrain styles */\r\n\r\n/* end-of-chapter exercises styles */\r\n#exercises>ol>li,\r\n#programming-exercises>ol>li {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#exercises>ol>li:nth-child(even),\r\n#programming-exercises>ol>li:nth-child(even) {\r\n    padding: 1.2em 1.4em;\r\n    background: #faf7df;\r\n    border: 1px solid #fbeed5;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n/* End chapter exercises styles */\r\n\r\n/* Modal dialog styles (scratch activecode, compare me, etc) */\r\n.scratch-ac-modal {\r\n    width: 90%;\r\n}\r\n\r\n.compare-modal .progress {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.compare-me-progress {\r\n    width: 100%;\r\n}\r\n\r\n.compare-me-progress .progress-bar,\r\n.unittest-results-progress .progress-bar {\r\n    color: #333;\r\n}\r\n\r\n.modal-body {\r\n    background-color: var(--background);\r\n}\r\n\r\n.modal-header {\r\n    background-color: var(--background);\r\n}\r\n\r\n.unittest-results-progress {\r\n    width: 25%;\r\n}\r\n\r\n.compare-modal {\r\n    width: 350px;\r\n}\r\n\r\n.compare-modal table {\r\n    border-collapse: separate;\r\n    border-spacing: 10px 5px;\r\n}\r\n\r\n.codelens-modal {\r\n    /* we set some custom position styles so that the modal doesn't obscure the codelens visualizer */\r\n    top: 20%;\r\n    right: 20%;\r\n    left: auto;\r\n    bottom: auto;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    /* remove any custom position styles when the screen is small (mobile devices)\r\n    to prevent the modal from being partially off the screen */\r\n    .codelens-modal {\r\n        top: 0 !important;\r\n        right: 0 !important;\r\n        bottom: 0 !important;\r\n        left: 0 !important;\r\n    }\r\n}\r\n\r\n.codelens-modal>.modal-dialog {\r\n    width: 400px;\r\n}\r\n\r\n/* End modal dialog styles */\r\n\r\n.footnote.table {\r\n    width: auto;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.footnote.table td.label {\r\n    padding: 2px 5px 2px 5px;\r\n    background-color: #d9edf7;\r\n}\r\n\r\n.ac-canvas {\r\n    background-color: white;\r\n    display: inline-block;\r\n}\r\n\r\n.video-play-overlay {\r\n    position: relative;\r\n    top: -150px;\r\n    left: 44%;\r\n    height: 85px;\r\n    width: 130px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.video_popup video {\r\n    width: 500pt;\r\n    cursor: pointer;\r\n}\r\n\r\n.ui-sortable-helper {\r\n    height: auto !important;\r\n    width: auto !important;\r\n}\r\n\r\n.navLink {\r\n    z-index: 2;\r\n    display: inline;\r\n    bottom: 65px;\r\n    position: fixed;\r\n}\r\n\r\n.navLink:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.navLink a {\r\n    display: inline-block;\r\n    background-color: white; \r\n    border-style:solid; \r\n    border-color:lightgrey; \r\n    border-width:2px; \r\n    width:100px; \r\n    height:50px\r\n}\r\n\r\n#relations-next {\r\n    right: 35px;\r\n}\r\n\r\n#relations-prev {\r\n    left: 35px;\r\n}\r\n\r\n.nextprev-list {\r\n    margin: 10px;\r\n    padding-left: 0;\r\n    height: 50px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    \r\n    .navLink {\r\n        z-index: 2;\r\n        display: inline;\r\n        position: static;\r\n    }\r\n\r\n    #relations-next,\r\n    #relations-prev {\r\n        width: 25%;\r\n        padding: 0 20px;\r\n        display: inline;\r\n    }\r\n}\r\n\r\n.navLink a {\r\n    color: #999;\r\n}\r\n\r\n#completionButton {\r\n    margin-top: 25px;\r\n    margin-bottom: 15px;\r\n    padding-left: 70px;\r\n    padding-right: 70px;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n}\r\n\r\n.buttonAskCompletion {\r\n    background-color: var(--completionButton);\r\n    border-color: var(--completionButtonHover);\r\n    font-weight: bold;\r\n}\r\n\r\n.buttonAskCompletion:hover {\r\n    background-color: var(--completionButtonHover);\r\n    border-color: var(--completionButtonHover);\r\n}\r\n\r\n.buttonConfirmCompletion {\r\n    background-color: #50d392;\r\n    border-color: #3dc682;\r\n\r\n}\r\n\r\n.buttonConfirmCompletion:hover {\r\n    background-color: #3dc682;\r\n    border-color: #3dc682;\r\n}\r\n\r\n.navLinkBg {\r\n    height: 40px;\r\n    background-color: #ffffff;\r\n    z-index: 1;\r\n    position: fixed;\r\n    bottom: 55px;\r\n    color: #999;\r\n    font-weight: bold;\r\n    -webkit-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n    -moz-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n    box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n}\r\n\r\n.navLinkBg:hover {\r\n    color: #999;\r\n}\r\n\r\n#navLinkBgRight {\r\n    right: -1000px;\r\n    padding: 10px 15px 0 65px;\r\n}\r\n\r\n#navLinkBgLeft {\r\n    left: -65px;\r\n    padding-left: 15px;\r\n    padding-right: 50px;\r\n}\r\n\r\n.activehtml {\r\n    width: 100%;\r\n    height: 400px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.container .section>div.sidebar {\r\n    margin: 0 0 0.5em 1em;\r\n    width: auto;\r\n}\r\n\r\na.disqus_thread_link {\r\n    display: block;\r\n}\r\n\r\n.reveal_button {\r\n    display: block;\r\n    margin-left: 0;\r\n}\r\n\r\niframe[seamless] {\r\n    display: block;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 3em 0.5em 1em;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 11em 0.5em 1em;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 18em 0.5em 1em;\r\n    }\r\n}\r\n\r\n\r\ndiv.ExecutionVisualizer table.visualizer {\r\n    width: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n.sltooltip {\r\n    position: absolute;\r\n    z-index: 1020;\r\n    display: block;\r\n    padding-bottom: 5px;\r\n    font-size: 11px;\r\n    visibility: visible;\r\n    margin-top: -2px;\r\n    bottom: 120%;\r\n    margin-left: -2em;\r\n}\r\n\r\n.sltooltip .sltooltip-arrow {\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-top: 5px solid #000000;\r\n    border-right: 5px solid transparent;\r\n    border-left: 5px solid transparent;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.sltooltip-inner {\r\n    max-width: 200px;\r\n    padding: 3px 8px;\r\n    color: var(--tooltip);\r\n    text-align: center;\r\n    text-decoration: none;\r\n    background-color: #000000;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\nul.dropdown-menu.globaltoc {\r\n    max-height: 700px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.globaltoc span.caption-text {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: large;\r\n}\r\n\r\n\r\n/* Style lp textareas. */\r\ntextarea#lp-result {\r\n    width: 100%;\r\n    height: 10em;\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n/*\r\n * Hide only visually, but have it available for screen readers:\r\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\r\n *\r\n * 1. For long content, line feeds are not interpreted as spaces and small width\r\n *    causes content to wrap 1 word per line:\r\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\r\n */\r\n\r\n.visuallyhidden {\r\n    border: 0;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    white-space: nowrap;\r\n    /* 1 */\r\n}\r\n\r\n/*\r\n * Extends the .visuallyhidden class to allow the element\r\n * to be focusable when navigated to via the keyboard:\r\n * https://www.drupal.org/node/897638\r\n */\r\n\r\n.visuallyhidden.focusable:active,\r\n.visuallyhidden.focusable:focus {\r\n    clip: auto;\r\n    height: auto;\r\n    margin: 0;\r\n    overflow: visible;\r\n    position: static;\r\n    width: auto;\r\n    white-space: inherit;\r\n}\r\n\r\n\r\n.blockquote {\r\n    text-align: center;\r\n    font-size: large;\r\n    font-style: italic;\r\n    padding-left: 2em;\r\n    padding-right: 2em;\r\n}\r\n\r\n\r\n#scprogresscontainer {\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#subchapterprogress>div {\r\n    background: green;\r\n}\r\n\r\n#subchapterprogress>div.loggedout {\r\n    background: lightgray;\r\n}\r\n\r\n.runestone_caption {\r\n    text-align: center;\r\n}\r\n\r\n.runestone_caption_divid {\r\n    opacity: 50%;\r\n}\r\n\r\n#questions .runestone_caption:before {\r\n    counter-increment: rscomponent;\r\n    content: \"Problem: \"counter(rscomponent) \" -- \";\r\n}\r\n\r\nbody {\r\n    color: var(--bodyFont);\r\n}\r\n\r\n.jupyter_container .output  {\r\n    margin-top: 10px;\r\n}\r\n\r\n.jupyter_container .output td {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.jupyter_container .output th {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n/*Theme toggle*/\r\n.theme-switch-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    em {\r\n        margin-left: 10px;\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n.theme-switch {\r\n    display: inline-block;\r\n    height: 34px;\r\n    position: relative;\r\n    width: 60px;\r\n}\r\n\r\n.theme-switch input {\r\n    display: none;\r\n}\r\n\r\n.slider {\r\n    background-color: #ccc;\r\n    bottom: 0;\r\n    cursor: pointer;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    background-color: #fff;\r\n    bottom: 4px;\r\n    content: \"\";\r\n    height: 26px;\r\n    left: 4px;\r\n    position: absolute;\r\n    transition: .4s;\r\n    width: 26px;\r\n}\r\n\r\ninput:checked+.slider {\r\n    background-color: #66bb6a;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n    transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n/*End theme toggle*/", "",{"version":3,"sources":["webpack://./runestone/common/css/runestone-custom-sphinx-bootstrap.css"],"names":[],"mappings":"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","sourcesContent":["/* Variables holding theme colors */\r\n:root {\r\n    --background: #ffffff;\r\n    --outerBackground: #eeeeee;\r\n    --links: #0645ad;\r\n    --bodyFont: #000000;\r\n    --tooltip: #ffffff;\r\n    --grayToWhite: #333333;\r\n    --navbar: #f8f8f8;\r\n    --navbarFont: #707070;\r\n    --navbarFontHover: #000000;\r\n    --alerts: #d9edf7;\r\n    --completionButton: #ffaa2b;\r\n    --completionButtonHover: #ff9f19;\r\n    --admonition: #fcf8e3;\r\n    --admonitionBorder: #fbeed5;\r\n    --codeButtons: #474949;\r\n    --codeButtonsBorder: #474949;\r\n    --dangerAlerts: #f2dede;\r\n    --successAlerts: #dff0d8;\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n    --background: #000000;\r\n    --outerBackground: #3d3d3d;\r\n    --links: #1165f0;\r\n    --bodyFont: #ffffff;\r\n    --tooltip: #000000;\r\n    --grayToWhite: #ffffff;\r\n    --navbar: #3d3d3d;\r\n    --navbarFont: #ffffff;\r\n    --navbarFontHover: #d6d6d6;\r\n    --alerts: #714082;\r\n    --completionButton: #650087;\r\n    --completionButtonHover: #560073;\r\n    --admonition: #3d3d3d;\r\n    --admonitionBorder: #262626;\r\n    --codeButtons: #2c0aa6;\r\n    --codeButtonsBorder: #ffffff;\r\n    --dangerAlerts: #8c2626;\r\n    --successAlerts: #217300;\r\n}\r\n\r\n/* custom modification of basic.css for color-contrast (AA compliant) */\r\ntd.linenos pre {\r\n    color: #6b6b6b;\r\n}\r\n\r\n/* custom modification of prettify.css for color-contrast (AA compliant) */\r\n.str {\r\n    color: #006b00;\r\n}\r\n\r\n/* custom modification of parsons.css for color-contrast (AA compliant) */\r\n.parsons .block {\r\n    background-color: #fafafa;\r\n}\r\n\r\n/* custom modification of pygments.css for color-contrast (AA compliant) */\r\n.highlight .c1 {\r\n    color: #376A7B;\r\n}\r\n\r\n.highlight .nn {\r\n    color: #0F6C95;\r\n}\r\n\r\n.highlight .gp {\r\n    color: #A14C08;\r\n}\r\n\r\n.highlight .si {\r\n    color: #3C773D;\r\n}\r\n\r\n.highlight .nc {\r\n    color: #0B719D;\r\n}\r\n\r\n/* `Search` functionality's result custom modification for color-contrast (AA compliant) */\r\nul.search li div.context {\r\n    color: #6b6b6b;\r\n}\r\n\r\nspan.highlighted {\r\n    color: #4d4d4d;\r\n}\r\n\r\n/* ActiveCode gutter custom modification for color-contrast (AA compliant) */\r\n\r\n.CodeMirror-linenumber {\r\n    color: #6b6b6b;\r\n}\r\n\r\n.alert-warning {\r\n    background-color: var(--admonition);\r\n    border-color: var(--admonitionBorder);\r\n}\r\n\r\n/* Python code output custom modification for color-contrast (AA compliant) */\r\ndiv.ExecutionVisualizer table#pyCodeOutput .lineNo {\r\n    color: #6b6b6b;\r\n}\r\n\r\n/* Runestone custom modifications */\r\n\r\nbody {\r\n    counter-reset: rscomponent;\r\n    padding-top: 60px;\r\n    background-color: var(--outerBackground);\r\n}\r\n\r\npre {\r\n    margin: 0 0 1em;\r\n}\r\n\r\nh5 {\r\n    font-weight: bold;\r\n    padding: 10px 0;\r\n}\r\n\r\n/* table-of-contents related styles for color-contrast (AA compliant) */\r\n#table-of-contents a {\r\n    color: var(--links);\r\n}\r\n\r\n#table-of-contents a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n#table-of-contents.section {\r\n    font-size: 16px;\r\n}\r\n\r\n/* navbar-brand color contrast (AA compliant) */\r\n.navbar-default {\r\n    background-color: var(--navbar);\r\n}\r\n\r\n.navbar-default .navbar-nav>li {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n.navbar-default .navbar-nav>li>a:hover {\r\n    color: var(--navbarFontHover);\r\n}\r\n\r\n.navbar-default .navbar-brand {\r\n    color: var(--navbarFont);\r\n}\r\n\r\n/* acknowledgement related styles for color-contrast (AA compliant) */\r\n.toctree-wrapper {\r\n    font-size: 16px;\r\n}\r\n\r\n.toctree-wrapper a {\r\n    color: var(--links);\r\n}\r\n\r\n.toctree-wrapper a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n/* index and search related styles for color-contrast (AA compliant) */\r\n#index-and-search.section {\r\n    font-size: 16px;\r\n}\r\n\r\n#index-and-search.section a {\r\n    color: var(--links);\r\n}\r\n\r\n#index-and-search.section a:hover {\r\n    color: var(--links);\r\n    text-decoration: underline;\r\n}\r\n\r\n/* custom style for `a` tag for color-contrast (AA compliant) */\r\n\r\na {\r\n    color: var(--links);\r\n}\r\n\r\n/* navbar and menu related styles */\r\n@media (max-width: 768px) {\r\n\r\n    /* Remove top padding when top navbar goes collapsed in narrow viewports */\r\n    body {\r\n        padding-top: 0;\r\n        margin: auto auto auto 5px;\r\n    }\r\n\r\n    .navbar-fixed-top {\r\n        position: static;\r\n    }\r\n\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\r\n    /* when navbar is collapsed we don't want any vertical dividers taking up space */\r\n    .navbar .divider-vertical {\r\n        margin: 0 3px;\r\n        border-left: 1px solid #f2f2f2;\r\n    }\r\n}\r\n\r\ndiv.container {\r\n    background-color: var(--background);\r\n}\r\n\r\ndiv.section {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.container {\r\n    padding-left: 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.container .section>*:not(.section):not(.ac_section) {\r\n    max-width: 500pt;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n/* This rule is meant to override the behavior of the\r\n   previous rule since it is not possible to exclude\r\n   more than one section in the not() part of the rule\r\n*/\r\n.container .section div.full-width.container {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 90%;\r\n}\r\n\r\n.container .section>img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.container .section .parsons,\r\n.container .section .parsons .sortable-code-container,\r\n.container .section .cd_section {\r\n    max-width: none;\r\n}\r\n\r\n.navbar>.container .navbar-brand {\r\n    margin-left: 0;\r\n}\r\n\r\n.navbar>.container {\r\n    background-color: var(--navbar);\r\n}\r\n\r\n.footer>.container {\r\n    background-color: var(--outerBackground);\r\n}\r\n\r\n.footer>.container p>a {\r\n    color: var(--links);\r\n}\r\n\r\n.brand-logo {\r\n    float: left;\r\n    display: block;\r\n    background-size: 40px 40px !important;\r\n    width: 40px;\r\n    height: 40px;\r\n    margin-top: 4px;\r\n}\r\n\r\n.social-menu {\r\n    width: 220px;\r\n    padding: 10px 10px 15px 20px;\r\n}\r\n\r\n.fb-like {\r\n    margin-top: 7px;\r\n}\r\n\r\n.fb_iframe_widget span,\r\n.fb_iframe_widget iframe {\r\n    height: 20px !important;\r\n    width: 82px !important;\r\n}\r\n\r\n.twitter-follow-button {\r\n    margin-top: 10px;\r\n}\r\n\r\n.gittip {\r\n    margin-top: 8px;\r\n}\r\n\r\n.gittip-button {\r\n    margin-bottom: -6px;\r\n}\r\n\r\n.dropdown-menu>li>span {\r\n    display: block;\r\n    padding: 3px 20px;\r\n    clear: both;\r\n    font-weight: bold;\r\n    line-height: 20px;\r\n    color: var(--grayToWhite);\r\n    white-space: nowrap;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    color: var(--grayToWhite);\r\n}\r\n\r\n.loggedinuser {\r\n    font-weight: bold;\r\n}\r\n\r\n/* end navbar and menu related styles */\r\n\r\n.CodeMirror {\r\n    margin: 0 0 1em 0;\r\n    background-color: var(--background);\r\n    height: auto;\r\n    clear: both;\r\n}\r\n\r\n.CodeMirror-scroll {\r\n    /* this allows CM elements to be resized to (almost) any\r\n     * height while still relying on max-height (which keeps\r\n     * the CM editors to no more than the size needed\r\n     * unless resized) */\r\n    max-height: 60em;\r\n    min-width: 30em;\r\n}\r\n\r\n.ac_section .CodeMirror pre {\r\n    -moz-border-radius: 0;\r\n    -webkit-border-radius: 0;\r\n    -o-border-radius: 0;\r\n    border-radius: 0;\r\n    border-width: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    background: transparent;\r\n    font-family: Monaco, Courier New, monospace;\r\n    font-size: inherit;\r\n    padding: 0;\r\n    margin: 0;\r\n    white-space: pre;\r\n    word-wrap: normal;\r\n}\r\n\r\nbutton.btn,\r\nbtn.btn-sm,\r\ninput[type=\"submit\"].btn.btn-sm,\r\ninput[type=\"button\"].btn.btn-sm {\r\n    font-size: 1em;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.btn {\r\n    margin: 5px;\r\n}\r\n\r\n.btn.disabled {\r\n    /* needed in Bootstrap 3 to allow tooltips on disabled buttons */\r\n    pointer-events: auto;\r\n}\r\n\r\n.btn-default,\r\n.btn-default.disabled,\r\n.btn-default[disabled],\r\n.btn-default.disabled:hover,\r\n.btn-default[disabled]:hover {\r\n    color: #ffffff;\r\n    background-color: var(--codeButtons);\r\n    border-color: var(codeButtonsBorder);\r\n}\r\n\r\n.btn-default:hover,\r\n.btn-default:focus,\r\n.btn-default:active,\r\n.btn-default.active {\r\n    background-color: #3a3c3c;\r\n    border-color: #2e2f2f;\r\n    color: #ffffff;\r\n}\r\n\r\ninput[type=\"radio\"],\r\ninput[type=\"checkbox\"] {\r\n    margin-right: 5px;\r\n}\r\n\r\n.tooltip {\r\n    z-index: 2000 !important;\r\n}\r\n\r\n.tooltip.in {\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n}\r\n\r\nh2 {\r\n    margin-top: 20px;\r\n}\r\n\r\n.alert form {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/* default bookstrap alert color is hard to read (low contrast). */\r\n.alert {\r\n    color: var(--grayToWhite);\r\n    padding: 10px;\r\n}\r\n\r\n.alert-info {\r\n    background-color: var(--alerts);\r\n}\r\n\r\n.alert-danger {\r\n    background-color: var(--dangerAlerts);\r\n}\r\n\r\n/* override the color styles applied by Skulpt to the unittest results divs */\r\n.unittest-results.alert-danger {\r\n    background-color: var(--dangerAlerts) !important;\r\n}\r\n\r\n.unittest-results.alert-success {\r\n    background-color: var(--successAlerts) !important;\r\n}\r\n\r\n.alert label {\r\n    font-weight: normal;\r\n}\r\n\r\n/* These admonition styles styles are copied from the Bootstrap .alert classes.\r\n Most of the !important declarations are to override the Sphinx basic.css styles */\r\n.admonition {\r\n    padding: 8px 35px 8px 14px !important;\r\n    margin-bottom: 20px !important;\r\n    margin-top: 20px !important;\r\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\r\n    background-color: var(--admonition);\r\n    border: 1px solid #fbeed5;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n/* .alert-danger */\r\n.admonition.caution {\r\n    color: #A33F3E;\r\n    background-color: #f2dede;\r\n    border-color: #eed3d7;\r\n}\r\n\r\n/* .alert-info */\r\n.admonition.tip,\r\n.admonition.note {\r\n    color: #333;\r\n    background-color: #d9edf7;\r\n    border-color: #bce8f1;\r\n}\r\n\r\n/* from web2py.css */\r\ndiv.flash {\r\n    font-weight: bold;\r\n    position: fixed;\r\n    padding: 10px;\r\n    top: 55px;\r\n    right: 45px;\r\n    opacity: 0.95;\r\n    margin: 0 0 10px 10px;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    background-color: #000;\r\n    border: 2px solid #fff;\r\n    border-radius: 8px;\r\n    -moz-border-radius: 8px;\r\n    -webkit-border-radius: 8px;\r\n    background-image: -webkit-linear-gradient(top, #222, #000);\r\n    background-image: -o-linear-gradient(top, #222, #000);\r\n    background-image: -moz-linear-gradient(90deg, #222, #000);\r\n    background-image: linear-gradient(top, #222, #000);\r\n    background-repeat: repeat-x;\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    z-index: 2000;\r\n}\r\n\r\n/* Styles for the login, registration, and Janrain forms */\r\n#web2py_user_form {\r\n    margin-top: 10px;\r\n}\r\n\r\n#web2py_user_form form {\r\n    float: left;\r\n    margin-right: 150px;\r\n    padding-top: 3px;\r\n}\r\n\r\n#web2py_user_form td {\r\n    padding-bottom: 15px;\r\n}\r\n\r\n#web2py_user_form td.w2p_fw {\r\n    width: 299px;\r\n}\r\n\r\n#auth-actions {\r\n    margin-top: 50px;\r\n}\r\n\r\n#sign_in_text td {\r\n    font-size: 17px;\r\n    color: #333;\r\n    font-family: 'lucida grande', Verdana, sans-serif;\r\n    padding-bottom: 13px;\r\n}\r\n\r\n#auth_user_remember {\r\n    margin-top: -20px;\r\n}\r\n\r\n/* End login, registration, Janrain styles */\r\n\r\n/* end-of-chapter exercises styles */\r\n#exercises>ol>li,\r\n#programming-exercises>ol>li {\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#exercises>ol>li:nth-child(even),\r\n#programming-exercises>ol>li:nth-child(even) {\r\n    padding: 1.2em 1.4em;\r\n    background: #faf7df;\r\n    border: 1px solid #fbeed5;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\n/* End chapter exercises styles */\r\n\r\n/* Modal dialog styles (scratch activecode, compare me, etc) */\r\n.scratch-ac-modal {\r\n    width: 90%;\r\n}\r\n\r\n.compare-modal .progress {\r\n    margin-bottom: 0;\r\n}\r\n\r\n.compare-me-progress {\r\n    width: 100%;\r\n}\r\n\r\n.compare-me-progress .progress-bar,\r\n.unittest-results-progress .progress-bar {\r\n    color: #333;\r\n}\r\n\r\n.modal-body {\r\n    background-color: var(--background);\r\n}\r\n\r\n.modal-header {\r\n    background-color: var(--background);\r\n}\r\n\r\n.unittest-results-progress {\r\n    width: 25%;\r\n}\r\n\r\n.compare-modal {\r\n    width: 350px;\r\n}\r\n\r\n.compare-modal table {\r\n    border-collapse: separate;\r\n    border-spacing: 10px 5px;\r\n}\r\n\r\n.codelens-modal {\r\n    /* we set some custom position styles so that the modal doesn't obscure the codelens visualizer */\r\n    top: 20%;\r\n    right: 20%;\r\n    left: auto;\r\n    bottom: auto;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    /* remove any custom position styles when the screen is small (mobile devices)\r\n    to prevent the modal from being partially off the screen */\r\n    .codelens-modal {\r\n        top: 0 !important;\r\n        right: 0 !important;\r\n        bottom: 0 !important;\r\n        left: 0 !important;\r\n    }\r\n}\r\n\r\n.codelens-modal>.modal-dialog {\r\n    width: 400px;\r\n}\r\n\r\n/* End modal dialog styles */\r\n\r\n.footnote.table {\r\n    width: auto;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.footnote.table td.label {\r\n    padding: 2px 5px 2px 5px;\r\n    background-color: #d9edf7;\r\n}\r\n\r\n.ac-canvas {\r\n    background-color: white;\r\n    display: inline-block;\r\n}\r\n\r\n.video-play-overlay {\r\n    position: relative;\r\n    top: -150px;\r\n    left: 44%;\r\n    height: 85px;\r\n    width: 130px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.video_popup video {\r\n    width: 500pt;\r\n    cursor: pointer;\r\n}\r\n\r\n.ui-sortable-helper {\r\n    height: auto !important;\r\n    width: auto !important;\r\n}\r\n\r\n.navLink {\r\n    z-index: 2;\r\n    display: inline;\r\n    bottom: 65px;\r\n    position: fixed;\r\n}\r\n\r\n.navLink:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.navLink a {\r\n    display: inline-block;\r\n    background-color: white; \r\n    border-style:solid; \r\n    border-color:lightgrey; \r\n    border-width:2px; \r\n    width:100px; \r\n    height:50px\r\n}\r\n\r\n#relations-next {\r\n    right: 35px;\r\n}\r\n\r\n#relations-prev {\r\n    left: 35px;\r\n}\r\n\r\n.nextprev-list {\r\n    margin: 10px;\r\n    padding-left: 0;\r\n    height: 50px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n    \r\n    .navLink {\r\n        z-index: 2;\r\n        display: inline;\r\n        position: static;\r\n    }\r\n\r\n    #relations-next,\r\n    #relations-prev {\r\n        width: 25%;\r\n        padding: 0 20px;\r\n        display: inline;\r\n    }\r\n}\r\n\r\n.navLink a {\r\n    color: #999;\r\n}\r\n\r\n#completionButton {\r\n    margin-top: 25px;\r\n    margin-bottom: 15px;\r\n    padding-left: 70px;\r\n    padding-right: 70px;\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n}\r\n\r\n.buttonAskCompletion {\r\n    background-color: var(--completionButton);\r\n    border-color: var(--completionButtonHover);\r\n    font-weight: bold;\r\n}\r\n\r\n.buttonAskCompletion:hover {\r\n    background-color: var(--completionButtonHover);\r\n    border-color: var(--completionButtonHover);\r\n}\r\n\r\n.buttonConfirmCompletion {\r\n    background-color: #50d392;\r\n    border-color: #3dc682;\r\n\r\n}\r\n\r\n.buttonConfirmCompletion:hover {\r\n    background-color: #3dc682;\r\n    border-color: #3dc682;\r\n}\r\n\r\n.navLinkBg {\r\n    height: 40px;\r\n    background-color: #ffffff;\r\n    z-index: 1;\r\n    position: fixed;\r\n    bottom: 55px;\r\n    color: #999;\r\n    font-weight: bold;\r\n    -webkit-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n    -moz-box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n    box-shadow: 0px 0px 3px rgba(50, 50, 50, 0.5);\r\n}\r\n\r\n.navLinkBg:hover {\r\n    color: #999;\r\n}\r\n\r\n#navLinkBgRight {\r\n    right: -1000px;\r\n    padding: 10px 15px 0 65px;\r\n}\r\n\r\n#navLinkBgLeft {\r\n    left: -65px;\r\n    padding-left: 15px;\r\n    padding-right: 50px;\r\n}\r\n\r\n.activehtml {\r\n    width: 100%;\r\n    height: 400px;\r\n    background-color: #ffffff;\r\n}\r\n\r\n.container .section>div.sidebar {\r\n    margin: 0 0 0.5em 1em;\r\n    width: auto;\r\n}\r\n\r\na.disqus_thread_link {\r\n    display: block;\r\n}\r\n\r\n.reveal_button {\r\n    display: block;\r\n    margin-left: 0;\r\n}\r\n\r\niframe[seamless] {\r\n    display: block;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 3em 0.5em 1em;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 11em 0.5em 1em;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n    .container .section>div.sidebar {\r\n        margin: 0 18em 0.5em 1em;\r\n    }\r\n}\r\n\r\n\r\ndiv.ExecutionVisualizer table.visualizer {\r\n    width: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    background-color: #ffffff;\r\n}\r\n\r\n\r\n\r\n\r\n.sltooltip {\r\n    position: absolute;\r\n    z-index: 1020;\r\n    display: block;\r\n    padding-bottom: 5px;\r\n    font-size: 11px;\r\n    visibility: visible;\r\n    margin-top: -2px;\r\n    bottom: 120%;\r\n    margin-left: -2em;\r\n}\r\n\r\n.sltooltip .sltooltip-arrow {\r\n    bottom: 0;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-top: 5px solid #000000;\r\n    border-right: 5px solid transparent;\r\n    border-left: 5px solid transparent;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.sltooltip-inner {\r\n    max-width: 200px;\r\n    padding: 3px 8px;\r\n    color: var(--tooltip);\r\n    text-align: center;\r\n    text-decoration: none;\r\n    background-color: #000000;\r\n    -webkit-border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    border-radius: 4px;\r\n}\r\n\r\nul.dropdown-menu.globaltoc {\r\n    max-height: 700px;\r\n    overflow: auto;\r\n}\r\n\r\n\r\n.globaltoc span.caption-text {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: large;\r\n}\r\n\r\n\r\n/* Style lp textareas. */\r\ntextarea#lp-result {\r\n    width: 100%;\r\n    height: 10em;\r\n    font-family: monospace;\r\n}\r\n\r\n\r\n/*\r\n * Hide only visually, but have it available for screen readers:\r\n * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility\r\n *\r\n * 1. For long content, line feeds are not interpreted as spaces and small width\r\n *    causes content to wrap 1 word per line:\r\n *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe\r\n */\r\n\r\n.visuallyhidden {\r\n    border: 0;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n    white-space: nowrap;\r\n    /* 1 */\r\n}\r\n\r\n/*\r\n * Extends the .visuallyhidden class to allow the element\r\n * to be focusable when navigated to via the keyboard:\r\n * https://www.drupal.org/node/897638\r\n */\r\n\r\n.visuallyhidden.focusable:active,\r\n.visuallyhidden.focusable:focus {\r\n    clip: auto;\r\n    height: auto;\r\n    margin: 0;\r\n    overflow: visible;\r\n    position: static;\r\n    width: auto;\r\n    white-space: inherit;\r\n}\r\n\r\n\r\n.blockquote {\r\n    text-align: center;\r\n    font-size: large;\r\n    font-style: italic;\r\n    padding-left: 2em;\r\n    padding-right: 2em;\r\n}\r\n\r\n\r\n#scprogresscontainer {\r\n    width: 50%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n#subchapterprogress>div {\r\n    background: green;\r\n}\r\n\r\n#subchapterprogress>div.loggedout {\r\n    background: lightgray;\r\n}\r\n\r\n.runestone_caption {\r\n    text-align: center;\r\n}\r\n\r\n.runestone_caption_divid {\r\n    opacity: 50%;\r\n}\r\n\r\n#questions .runestone_caption:before {\r\n    counter-increment: rscomponent;\r\n    content: \"Problem: \"counter(rscomponent) \" -- \";\r\n}\r\n\r\nbody {\r\n    color: var(--bodyFont);\r\n}\r\n\r\n.jupyter_container .output  {\r\n    margin-top: 10px;\r\n}\r\n\r\n.jupyter_container .output td {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n.jupyter_container .output th {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\n/*Theme toggle*/\r\n.theme-switch-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n    em {\r\n        margin-left: 10px;\r\n        font-size: 1rem;\r\n    }\r\n}\r\n\r\n.theme-switch {\r\n    display: inline-block;\r\n    height: 34px;\r\n    position: relative;\r\n    width: 60px;\r\n}\r\n\r\n.theme-switch input {\r\n    display: none;\r\n}\r\n\r\n.slider {\r\n    background-color: #ccc;\r\n    bottom: 0;\r\n    cursor: pointer;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    transition: .4s;\r\n}\r\n\r\n.slider:before {\r\n    background-color: #fff;\r\n    bottom: 4px;\r\n    content: \"\";\r\n    height: 26px;\r\n    left: 4px;\r\n    position: absolute;\r\n    transition: .4s;\r\n    width: 26px;\r\n}\r\n\r\ninput:checked+.slider {\r\n    background-color: #66bb6a;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n    transform: translateX(26px);\r\n}\r\n\r\n.slider.round {\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n}\r\n\r\n/*End theme toggle*/"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 77477:
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/common/css/user-highlights.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ 61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _completed_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completed.png */ 53185);
/* harmony import */ var _active_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./active.png */ 31157);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_completed_png__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_active_png__WEBPACK_IMPORTED_MODULE_4__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Variables holding theme colors */\r\n:root {\r\n\t--menu: #FFFFFF;\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n\t--menu: #000000;\r\n}\r\n\r\n.my-highlighted-text{\r\n\tbackground-color:#FFFF99;\r\n}\r\n.social-highlighted-text{\r\n\tbackground-color:#FFCCCC;\r\n}\r\n.highlight-option-box{\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n}\r\n.highlight-option-box li{ \r\n\theight:24px;\r\n}\r\n#continue-reading{\r\n\tpadding-top:20px;\r\n\tdisplay: none;\r\n}\r\n#continue-reading a{\r\n\tfloat:right;\r\n\tmargin-right:20px;\r\n}\r\nli.completed\r\n{\r\nlist-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\nli.active\r\n{\r\nlist-style-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n.infoTextCompleted{\r\n\tmargin-left:10px;\r\n\tfont-size:0.9em;\r\n\tcolor:#3dc682;\r\n\tdisplay:none;\r\n\tfont-style:italic;\r\n\topacity: 0.7;\r\n}\r\n.infoTextActive{\r\n\tmargin-left:10px;\r\n\tfont-size:0.9em;\r\n\tcolor:#ff9f19;\r\n\tdisplay:none;\r\n\tfont-style:italic;\r\n\topacity: 0.7;\r\n}\r\n.dropdown-menu{\r\n\tbackground-clip: padding-box;\r\n    background-color: var(--menu);\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px 5px 5px 5px;\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n    display: none;\r\n    float: left;\r\n    left: 0;\r\n    list-style: none outside none;\r\n    margin: 1px 0 0;\r\n    min-width: 160px;\r\n    padding: 4px 0;\r\n    position: absolute;\r\n    top: 100%;\r\n    z-index: 1000;\r\n}\r\n.dropdown-menu ul {\r\n    list-style: disc outside none;\r\n    margin: 0 0 9px 25px;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-highlights{\r\n    background-color:#FFFF99;\r\n}\r\ndiv.documentwrapper {\r\n\tborder : 0 none;\r\n}\r\ndiv.bodywrapper {\r\n\tborder-right: 0 none;\r\n}\r\ndiv.sphinxsidebar {\r\n\tborder-left: 1px solid #CCCCCC;\r\n\tpadding-left: 10px;\r\n}\r\n.body>.section .section{\r\n\tpadding-top: 1px;\r\n}\r\n#jump-to-chapter{\r\n    border: 1px solid #CCCCCC;\r\n    letter-spacing: 0.015em;\r\n    line-height: 120%;\r\n    padding: 0.5em;\r\n\twidth: 80%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n#navigation-links{\r\n\tbackground-color: #F8F8F8;\r\n    border: 1px solid #CCCCCC;\r\n\tpadding:10px;\r\n\tmargin:10px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./runestone/common/css/user-highlights.css"],"names":[],"mappings":"AAAA,mCAAmC;AACnC;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,wBAAwB;AACzB;AACA;CACC,wBAAwB;AACzB;AACA;CACC,iBAAiB;CACjB,OAAO;CACP,QAAQ;AACT;AACA;CACC,WAAW;AACZ;AACA;CACC,gBAAgB;CAChB,aAAa;AACd;AACA;CACC,WAAW;CACX,iBAAiB;AAClB;AACA;;AAEA,yDAAsC;AACtC;AACA;;AAEA,yDAAmC;AACnC;AACA;CACC,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,gBAAgB;CAChB,eAAe;CACf,aAAa;CACb,YAAY;CACZ,iBAAiB;CACjB,YAAY;AACb;AACA;CACC,4BAA4B;IACzB,6BAA6B;IAC7B,oCAAoC;IACpC,8BAA8B;IAC9B,yCAAyC;IACzC,aAAa;IACb,WAAW;IACX,OAAO;IACP,6BAA6B;IAC7B,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,aAAa;AACjB;AACA;IACI,6BAA6B;IAC7B,oBAAoB;IACpB,UAAU;AACd;;AAEA;IACI,wBAAwB;AAC5B;AACA;CACC,eAAe;AAChB;AACA;CACC,oBAAoB;AACrB;AACA;CACC,8BAA8B;CAC9B,kBAAkB;AACnB;AACA;CACC,gBAAgB;AACjB;AACA;IACI,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,cAAc;CACjB,UAAU;CACV,iBAAiB;CACjB,kBAAkB;AACnB;AACA;CACC,yBAAyB;IACtB,yBAAyB;CAC5B,YAAY;CACZ,WAAW;AACZ","sourcesContent":["/* Variables holding theme colors */\r\n:root {\r\n\t--menu: #FFFFFF;\r\n}\r\n\r\n[data-theme=\"dark\"] {\r\n\t--menu: #000000;\r\n}\r\n\r\n.my-highlighted-text{\r\n\tbackground-color:#FFFF99;\r\n}\r\n.social-highlighted-text{\r\n\tbackground-color:#FFCCCC;\r\n}\r\n.highlight-option-box{\r\n\tposition:absolute;\r\n\ttop:0px;\r\n\tleft:0px;\r\n}\r\n.highlight-option-box li{ \r\n\theight:24px;\r\n}\r\n#continue-reading{\r\n\tpadding-top:20px;\r\n\tdisplay: none;\r\n}\r\n#continue-reading a{\r\n\tfloat:right;\r\n\tmargin-right:20px;\r\n}\r\nli.completed\r\n{\r\nlist-style-image: url('completed.png');\r\n}\r\nli.active\r\n{\r\nlist-style-image: url('active.png');\r\n}\r\n.infoTextCompleted{\r\n\tmargin-left:10px;\r\n\tfont-size:0.9em;\r\n\tcolor:#3dc682;\r\n\tdisplay:none;\r\n\tfont-style:italic;\r\n\topacity: 0.7;\r\n}\r\n.infoTextActive{\r\n\tmargin-left:10px;\r\n\tfont-size:0.9em;\r\n\tcolor:#ff9f19;\r\n\tdisplay:none;\r\n\tfont-style:italic;\r\n\topacity: 0.7;\r\n}\r\n.dropdown-menu{\r\n\tbackground-clip: padding-box;\r\n    background-color: var(--menu);\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    border-radius: 5px 5px 5px 5px;\r\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\r\n    display: none;\r\n    float: left;\r\n    left: 0;\r\n    list-style: none outside none;\r\n    margin: 1px 0 0;\r\n    min-width: 160px;\r\n    padding: 4px 0;\r\n    position: absolute;\r\n    top: 100%;\r\n    z-index: 1000;\r\n}\r\n.dropdown-menu ul {\r\n    list-style: disc outside none;\r\n    margin: 0 0 9px 25px;\r\n    padding: 0;\r\n}\r\n\r\n.sidebar-highlights{\r\n    background-color:#FFFF99;\r\n}\r\ndiv.documentwrapper {\r\n\tborder : 0 none;\r\n}\r\ndiv.bodywrapper {\r\n\tborder-right: 0 none;\r\n}\r\ndiv.sphinxsidebar {\r\n\tborder-left: 1px solid #CCCCCC;\r\n\tpadding-left: 10px;\r\n}\r\n.body>.section .section{\r\n\tpadding-top: 1px;\r\n}\r\n#jump-to-chapter{\r\n    border: 1px solid #CCCCCC;\r\n    letter-spacing: 0.015em;\r\n    line-height: 120%;\r\n    padding: 0.5em;\r\n\twidth: 80%;\r\n\tmargin-left: auto;\r\n\tmargin-right: auto;\r\n}\r\n#navigation-links{\r\n\tbackground-color: #F8F8F8;\r\n    border: 1px solid #CCCCCC;\r\n\tpadding:10px;\r\n\tmargin:10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 52416:
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/matrixeq/css/matrixeq.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".matrixeq_container {\r\n  padding: 6px 6px 6px 6px;\r\n  margin: 0px 0px 6px 0px;\r\n}\r\n\r\nspan.matrix_table {\r\n  display: inline-table;\r\n  background-color: inherit;\r\n  border-width: 2px 2px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  text-align: center;\r\n  padding: 0px 1px;\r\n  margin: 0px 0px 4px 0px;\r\n  overflow: visible;\r\n}\r\n\r\nspan.matrix_column {\r\n  display: inline-table;\r\n  background-color: inherit;\r\n  padding: 2px 8px 2px 8px;\r\n  margin: 0px 1px;\r\n  border-width: 0px 0px 0px 0px;\r\n  font-family: monospace;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\nspan.matrix_column div {\r\n  display: block;\r\n  margin: 1px;\r\n  padding: 2px;\r\n  background-color: inherit;\r\n}\r\n\r\nspan.matrix_table .matrix_column {\r\n  border-style: none;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\nspan.matrix_table:before {\r\n  content: \" \";\r\n  background-color: inherit;\r\n  width: 85%;\r\n  text-align: center;\r\n  height: 2px;\r\n  position: relative;\r\n  top: -2px;\r\n  z-index: 100;\r\n  display: block;\r\n  margin: 0px auto;\r\n}\r\n\r\nspan.matrix_table:after {\r\n  content: \" \";\r\n  background-color: inherit;\r\n  width: 85%;\r\n  text-align: center;\r\n  height: 2px;\r\n  position: relative;\r\n  top: 2px;\r\n  z-index: 100;\r\n  display: block;\r\n  margin: 0px auto;\r\n}\r\n\r\nspan.matrix_column:before {\r\n  content: \" \";\r\n  width: 85%;\r\n  height: 2px;\r\n  position: relative;\r\n  top: -2px;\r\n  z-index: 100;\r\n  display: block;\r\n}\r\n\r\nspan.matrix_column:after {\r\n  content: \" \";\r\n  width: 85%;\r\n  height: 2px;\r\n  position: relative;\r\n  top: 2px;\r\n  z-index: 100;\r\n  display: block;\r\n}\r\n\r\nspan.matrix_table span.matrix_column:before {\r\n  height: 0px;\r\n}\r\n\r\nspan.matrix_table span.matrix_column:after {\r\n  height: 0px;\r\n}\r\n\r\nspan input[type=\"text\"] {\r\n  display: block;\r\n  margin: 0;\r\n  width: 50px;\r\n  height: 24px;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  appearance: none;\r\n  box-shadow: none;\r\n  text-align: right;\r\n  background-color: inherit;\r\n}\r\n\r\nspan.matrix_operator {\r\n  display: inline-table;\r\n  padding: 0px;\r\n  margin: 0px 4px 0px 4px;\r\n  font-family: monospace;\r\n  font-size: 18px;\r\n  vertical-align: middle;\r\n}\r\n\r\nspan.matrix_label {\r\n  display: inline-table;\r\n  padding: 0px 0px 0px 20px;\r\n  margin: 0px 1px;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\n/* Colors for matrix highlighting */\r\n\r\n.lightcyanColor {\r\n  background-color: lightcyan;\r\n}\r\n\r\n.lightgreyColor {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.purpleColor {\r\n  background-color: #DFB5E8;\r\n}\r\n\r\n.yellowColor {\r\n  background-color: #FDFF9D;\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./runestone/matrixeq/css/matrixeq.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,wBAAwB;EACxB,eAAe;EACf,6BAA6B;EAC7B,sBAAsB;EACtB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,SAAS;EACT,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,uBAAuB;EACvB,sBAAsB;EACtB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,eAAe;EACf,uBAAuB;EACvB,eAAe;EACf,sBAAsB;AACxB;;AAEA,mCAAmC;;AAEnC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B","sourcesContent":[".matrixeq_container {\r\n  padding: 6px 6px 6px 6px;\r\n  margin: 0px 0px 6px 0px;\r\n}\r\n\r\nspan.matrix_table {\r\n  display: inline-table;\r\n  background-color: inherit;\r\n  border-width: 2px 2px;\r\n  border-style: solid;\r\n  border-color: black;\r\n  text-align: center;\r\n  padding: 0px 1px;\r\n  margin: 0px 0px 4px 0px;\r\n  overflow: visible;\r\n}\r\n\r\nspan.matrix_column {\r\n  display: inline-table;\r\n  background-color: inherit;\r\n  padding: 2px 8px 2px 8px;\r\n  margin: 0px 1px;\r\n  border-width: 0px 0px 0px 0px;\r\n  font-family: monospace;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\nspan.matrix_column div {\r\n  display: block;\r\n  margin: 1px;\r\n  padding: 2px;\r\n  background-color: inherit;\r\n}\r\n\r\nspan.matrix_table .matrix_column {\r\n  border-style: none;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\nspan.matrix_table:before {\r\n  content: \" \";\r\n  background-color: inherit;\r\n  width: 85%;\r\n  text-align: center;\r\n  height: 2px;\r\n  position: relative;\r\n  top: -2px;\r\n  z-index: 100;\r\n  display: block;\r\n  margin: 0px auto;\r\n}\r\n\r\nspan.matrix_table:after {\r\n  content: \" \";\r\n  background-color: inherit;\r\n  width: 85%;\r\n  text-align: center;\r\n  height: 2px;\r\n  position: relative;\r\n  top: 2px;\r\n  z-index: 100;\r\n  display: block;\r\n  margin: 0px auto;\r\n}\r\n\r\nspan.matrix_column:before {\r\n  content: \" \";\r\n  width: 85%;\r\n  height: 2px;\r\n  position: relative;\r\n  top: -2px;\r\n  z-index: 100;\r\n  display: block;\r\n}\r\n\r\nspan.matrix_column:after {\r\n  content: \" \";\r\n  width: 85%;\r\n  height: 2px;\r\n  position: relative;\r\n  top: 2px;\r\n  z-index: 100;\r\n  display: block;\r\n}\r\n\r\nspan.matrix_table span.matrix_column:before {\r\n  height: 0px;\r\n}\r\n\r\nspan.matrix_table span.matrix_column:after {\r\n  height: 0px;\r\n}\r\n\r\nspan input[type=\"text\"] {\r\n  display: block;\r\n  margin: 0;\r\n  width: 50px;\r\n  height: 24px;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  appearance: none;\r\n  box-shadow: none;\r\n  text-align: right;\r\n  background-color: inherit;\r\n}\r\n\r\nspan.matrix_operator {\r\n  display: inline-table;\r\n  padding: 0px;\r\n  margin: 0px 4px 0px 4px;\r\n  font-family: monospace;\r\n  font-size: 18px;\r\n  vertical-align: middle;\r\n}\r\n\r\nspan.matrix_label {\r\n  display: inline-table;\r\n  padding: 0px 0px 0px 20px;\r\n  margin: 0px 1px;\r\n  font-family: sans-serif;\r\n  font-size: 12px;\r\n  vertical-align: middle;\r\n}\r\n\r\n/* Colors for matrix highlighting */\r\n\r\n.lightcyanColor {\r\n  background-color: lightcyan;\r\n}\r\n\r\n.lightgreyColor {\r\n  background-color: lightgrey;\r\n}\r\n\r\n.purpleColor {\r\n  background-color: #DFB5E8;\r\n}\r\n\r\n.yellowColor {\r\n  background-color: #FDFF9D;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 83202:
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/webgldemo/css/webglinteractive.css ***!
  \********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ 94015);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/********************* Colour reference chart****************\r\nelememt ********* property ********* colour ********\r\n\r\nwebgl_container  background-color    #fcf8e3\r\n\r\n*/\r\n\r\n/* Major sections */\r\n.webgl_container {\r\n  background-color: #fcf8e3;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.webgl_cmds {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 6px;\r\n}\r\n\r\n.webgl_row2 {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 0px 4px 0px 4px;\r\n  display: block;\r\n  height: 550px;\r\n}\r\n\r\n.webgl_editors {\r\n  box-sizing: border-box;\r\n  float: left;\r\n  display: block;\r\n  visibility: visible;\r\n  width: 50%;\r\n}\r\n\r\n.webgl_canvas {\r\n  box-sizing: border-box;\r\n  float: left;\r\n  display: block;\r\n  visibility: visible;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  padding-left: 5px;\r\n  width: 50%;\r\n}\r\n\r\n.webgl_output {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 4px;\r\n  margin-top: 6px;\r\n  float: left;\r\n}\r\n\r\n/* Details within each section */\r\n/* Tabbed titles, ul horizontal list */\r\n.webgl_nav_tabs {\r\n  height: 31px;\r\n  width: 100%;\r\n  margin: 0px;\r\n  padding: 6px 0px 0px 0px;\r\n  background-color: #CFCCB8;\r\n  border-color: #fbeed5;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  list-style-type: none;\r\n  overflow: hidden;\r\n  display: inline-flex;\r\n}\r\n\r\n.webgl_nav_tabs li {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  margin: 0px 0px 0px 4px;\r\n  padding: 4px 1px 4px 4px;\r\n  list-style-type: none;\r\n  position: relative;\r\n  float: left;\r\n  background-color: #E6E2CC;\r\n  font-size: 9pt;\r\n}\r\n\r\n.webgl_nav_tabs li > a {\r\n  padding: 8px 8px 8px 8px;\r\n  color: #555;\r\n  text-decoration: none;\r\n}\r\n\r\n.webgl_nav_tabs > li > a:hover {\r\n  border-color: #b4b19d;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.webgl_nav_tabs li.active {\r\n  background-color: #ffffff;\r\n  list-style-type: none;\r\n  list-style-image: none;\r\n}\r\n\r\n/* Webgl editors */\r\n.webgl_tab_content {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  z-index: 1;\r\n}\r\n\r\n.webgl_tab_content.active {\r\n  z-index: 2;\r\n}\r\n\r\n.webgl_tab_content > * {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  /*\tposition:relative; */\r\n}\r\n\r\n.webgl_tab_content .clearfix {\r\n  position: initial;\r\n}\r\n\r\n.webgl_tab_editor {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  padding: 10px 4px 10px 4px;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n/* span that contains the tabbed text editors */\r\n.webgl_code {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n.webgl_tab_contents_text {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  padding: 10px 4px 10px 4px;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  z-index: 1;\r\n}\r\n\r\n.webgl_errorMessages {\r\n  color: red;\r\n}\r\n\r\n.webgl_warningMessages {\r\n  color: rgb(170, 34, 164);\r\n}\r\n\r\n.webgl_infoMessages {\r\n  color: rgb(24, 144, 64);\r\n}\r\n\r\n.webgl_output_div {\r\n  width: 100%;\r\n  margin: 2px;\r\n  border: 1px solid lightgrey;\r\n  padding-bottom: 4px;\r\n  padding-top: 4px;\r\n  padding-left: 4px;\r\n  background-color: white;\r\n  overflow: auto;\r\n  height: 14em;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n\r\n.webgl_editor_highlight {\r\n  background-color: #EEEEEE; /* very light grey */\r\n}\r\n\r\n/* To always show the scroll bar in a div */\r\n::-webkit-scrollbar {\r\n    -webkit-appearance: none;\r\n    width: 7px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 4px;\r\n    background-color: rgba(0,0,0,.5);\r\n    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\r\n}\r\n\r\n.webgl_btn {\r\n  display: inline-block;\r\n  padding: 3px 6px;\r\n  margin-bottom: 0;\r\n  background-color: thistle;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.webgl_checkbox {\r\n}\r\n\r\n.webgl_tabbed_editor {\r\n  width: 100%;\r\n  resize: none;\r\n  font-family: monospace, sans-serif;\r\n  font-size: 9pt;\r\n  font-style: normal;\r\n}\r\n\r\n.canvas3D {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.CodeMirror.webgl-default {\r\n  border: 1px solid #eee;\r\n  font-family: monospace, sans-serif;\r\n  font-size: 8pt;\r\n  font-style: normal;\r\n}\r\n\r\nbutton.btn.webgl-default {\r\n  font-size: 8pt;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./runestone/webgldemo/css/webglinteractive.css"],"names":[],"mappings":"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","sourcesContent":["/********************* Colour reference chart****************\r\nelememt ********* property ********* colour ********\r\n\r\nwebgl_container  background-color    #fcf8e3\r\n\r\n*/\r\n\r\n/* Major sections */\r\n.webgl_container {\r\n  background-color: #fcf8e3;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.webgl_cmds {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 6px;\r\n}\r\n\r\n.webgl_row2 {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 0px 4px 0px 4px;\r\n  display: block;\r\n  height: 550px;\r\n}\r\n\r\n.webgl_editors {\r\n  box-sizing: border-box;\r\n  float: left;\r\n  display: block;\r\n  visibility: visible;\r\n  width: 50%;\r\n}\r\n\r\n.webgl_canvas {\r\n  box-sizing: border-box;\r\n  float: left;\r\n  display: block;\r\n  visibility: visible;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  padding-left: 5px;\r\n  width: 50%;\r\n}\r\n\r\n.webgl_output {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 4px;\r\n  margin-top: 6px;\r\n  float: left;\r\n}\r\n\r\n/* Details within each section */\r\n/* Tabbed titles, ul horizontal list */\r\n.webgl_nav_tabs {\r\n  height: 31px;\r\n  width: 100%;\r\n  margin: 0px;\r\n  padding: 6px 0px 0px 0px;\r\n  background-color: #CFCCB8;\r\n  border-color: #fbeed5;\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  list-style-type: none;\r\n  overflow: hidden;\r\n  display: inline-flex;\r\n}\r\n\r\n.webgl_nav_tabs li {\r\n  border-top-left-radius: 4px;\r\n  border-top-right-radius: 4px;\r\n  margin: 0px 0px 0px 4px;\r\n  padding: 4px 1px 4px 4px;\r\n  list-style-type: none;\r\n  position: relative;\r\n  float: left;\r\n  background-color: #E6E2CC;\r\n  font-size: 9pt;\r\n}\r\n\r\n.webgl_nav_tabs li > a {\r\n  padding: 8px 8px 8px 8px;\r\n  color: #555;\r\n  text-decoration: none;\r\n}\r\n\r\n.webgl_nav_tabs > li > a:hover {\r\n  border-color: #b4b19d;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.webgl_nav_tabs li.active {\r\n  background-color: #ffffff;\r\n  list-style-type: none;\r\n  list-style-image: none;\r\n}\r\n\r\n/* Webgl editors */\r\n.webgl_tab_content {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  z-index: 1;\r\n}\r\n\r\n.webgl_tab_content.active {\r\n  z-index: 2;\r\n}\r\n\r\n.webgl_tab_content > * {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  /*\tposition:relative; */\r\n}\r\n\r\n.webgl_tab_content .clearfix {\r\n  position: initial;\r\n}\r\n\r\n.webgl_tab_editor {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  padding: 10px 4px 10px 4px;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n/* span that contains the tabbed text editors */\r\n.webgl_code {\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n.webgl_tab_contents_text {\r\n  width: 100%;\r\n  position: absolute;\r\n  clear: both;\r\n  padding: 10px 4px 10px 4px;\r\n  margin: 0px 0px 20px 0px;\r\n  border: 0px;\r\n  color: #c09853;\r\n  background-color: #fcf8e3;\r\n  z-index: 1;\r\n}\r\n\r\n.webgl_errorMessages {\r\n  color: red;\r\n}\r\n\r\n.webgl_warningMessages {\r\n  color: rgb(170, 34, 164);\r\n}\r\n\r\n.webgl_infoMessages {\r\n  color: rgb(24, 144, 64);\r\n}\r\n\r\n.webgl_output_div {\r\n  width: 100%;\r\n  margin: 2px;\r\n  border: 1px solid lightgrey;\r\n  padding-bottom: 4px;\r\n  padding-top: 4px;\r\n  padding-left: 4px;\r\n  background-color: white;\r\n  overflow: auto;\r\n  height: 14em;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n}\r\n\r\n.webgl_editor_highlight {\r\n  background-color: #EEEEEE; /* very light grey */\r\n}\r\n\r\n/* To always show the scroll bar in a div */\r\n::-webkit-scrollbar {\r\n    -webkit-appearance: none;\r\n    width: 7px;\r\n}\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 4px;\r\n    background-color: rgba(0,0,0,.5);\r\n    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\r\n}\r\n\r\n.webgl_btn {\r\n  display: inline-block;\r\n  padding: 3px 6px;\r\n  margin-bottom: 0;\r\n  background-color: thistle;\r\n  font-size: 12px;\r\n  font-weight: normal;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.webgl_checkbox {\r\n}\r\n\r\n.webgl_tabbed_editor {\r\n  width: 100%;\r\n  resize: none;\r\n  font-family: monospace, sans-serif;\r\n  font-size: 9pt;\r\n  font-style: normal;\r\n}\r\n\r\n.canvas3D {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.CodeMirror.webgl-default {\r\n  border: 1px solid #eee;\r\n  font-family: monospace, sans-serif;\r\n  font-size: 8pt;\r\n  font-style: normal;\r\n}\r\n\r\nbutton.btn.webgl-default {\r\n  font-size: 8pt;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 60976:
/*!*************************************************!*\
  !*** ./runestone/common/css/presenter_mode.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_presenter_mode_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./presenter_mode.css */ 18555);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_presenter_mode_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_presenter_mode_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 55284:
/*!********************************************************************!*\
  !*** ./runestone/common/css/runestone-custom-sphinx-bootstrap.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./runestone-custom-sphinx-bootstrap.css */ 67805);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 97286:
/*!**************************************************!*\
  !*** ./runestone/common/css/user-highlights.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_user_highlights_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./user-highlights.css */ 77477);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_user_highlights_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_user_highlights_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 34044:
/*!*********************************************!*\
  !*** ./runestone/matrixeq/css/matrixeq.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_matrixeq_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./matrixeq.css */ 52416);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_matrixeq_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_matrixeq_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 36310:
/*!******************************************************!*\
  !*** ./runestone/webgldemo/css/webglinteractive.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_webglinteractive_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./webglinteractive.css */ 83202);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_webglinteractive_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_webglinteractive_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 31157:
/*!*****************************************!*\
  !*** ./runestone/common/css/active.png ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIlJREFUeNpi/P//PwMlgImBQjAMDGCBsxZIkaYz4RmaAZhAHYjNoOxTQHwTvwsQgAeIe4E4DU18FhAXAPF3QgbMB+IQLOIgA4WAOBRfIOri0AwDIDktfAbYEBF89jRNB0eI0HMEnwGXgXgNHs1roGrweiERGmUMWKIxkZh08AWI04G4j5iEBBBgAPddF58mobqdAAAAAElFTkSuQmCC";

/***/ }),

/***/ 53185:
/*!********************************************!*\
  !*** ./runestone/common/css/completed.png ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAO5JREFUeNpi/P//PwMlgImBQjAwBthc4osH4skgNguJGrmA1BQgjgPiUJIMAGpWBVKrgNgAiL2P6H3aRrQBQM12QGo1EIsBcQxMM0oYABXxAjETFs2+QGobVHM9UPNSjEAEKgoEUjeBuBhNcwDUZm4gXg/U3IRuAcwLSkAsCcRdQE16QDoRiG2BGGQbOxA/BOIcbN5jhKVEoMYiINULFT8PxCJALAvlhwBtX4vXAKghpSBXoKlZCtQcQ1RCAirsBlJVSEIfgLiRpJQINKQdSNVCuTOB/Nt44xjkBWzY+iJvGRBr4pKHYUZKszNAgAEAln9yGpx/ZXMAAAAASUVORK5CYII=";

/***/ }),

/***/ 21294:
/*!******************************************!*\
  !*** ./runestone/common/js/bookfuncs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageProgressTracker": () => (/* binding */ pageProgressTracker)
/* harmony export */ });
/**
 *
 * User: bmiller
 * Original: 2011-04-20
 * Date: 2019-06-14
 * Time: 2:01 PM
 * This change marks the beginning of version 4.0 of the runestone components
 * Login/logout is no longer handled through javascript but rather server side.
 * Many of the components depend on the runestone:login event so we will keep that
 * for now to keep the churn fairly minimal.
 */

/*

 Copyright (C) 2011  Brad Miller  bonelake@gmail.com

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 */

//
// Chevron functions - Must correspond with width in runestone-custom-sphinx-bootstrap.css
//
$(function () {
    var resizeWindow = false;
    var resizeWidth = 600;
    $(window)
        .on("resize", function (event) {
            if ($(window).width() <= resizeWidth && resizeWindow == false) {
                resizeWindow = true;
                var topPrev = $("#relations-prev")
                    .clone()
                    .attr("id", "top-relations-prev");
                var topNext = $("#relations-next")
                    .clone()
                    .attr("id", "top-relations-next");
                $("#relations-prev, #relations-next").hide();
                var bottomPrev = topPrev
                    .clone()
                    .attr("id", "bottom-relations-prev");
                var bottomNext = topNext
                    .clone()
                    .attr("id", "bottom-relations-next");
                $("div#main-content > div").prepend(topPrev, topNext);
                $("#top-relations-prev, #top-relations-next").wrapAll(
                    '<ul id="top-relations-console"></ul>'
                );
                $("div#main-content > div").append(bottomPrev, bottomNext);
                $("#bottom-relations-prev, #bottom-relations-next").wrapAll(
                    '<ul id="bottom-relations-console"></ul>'
                );
            }
            if ($(window).width() >= resizeWidth + 1 && resizeWindow == true) {
                resizeWindow = false;
                $("#top-relations-console, #bottom-relations-console").remove();
                $("#relations-prev, #relations-next").show();
            }
        })
        .resize();
});

//
// Page decoration functions
//

function addReadingList() {
    if (eBookConfig.readings) {
        var l, nxt, path_parts, nxt_link;
        let cur_path_parts = window.location.pathname.split("/");
        let name =
            cur_path_parts[cur_path_parts.length - 2] +
            "/" +
            cur_path_parts[cur_path_parts.length - 1];
        let position = eBookConfig.readings.indexOf(name);
        let num_readings = eBookConfig.readings.length;
        if (position == eBookConfig.readings.length - 1) {
            // no more readings
            l = $("<div />", {
                text: `Finished reading assignment. Page ${num_readings} of ${num_readings}.`,
            });
        } else if (position >= 0) {
            // get next name
            nxt = eBookConfig.readings[position + 1];
            path_parts = cur_path_parts.slice(0, cur_path_parts.length - 2);
            path_parts.push(nxt);
            nxt_link = path_parts.join("/");
            l = $("<a />", {
                name: "link",
                class: "btn btn-lg ' + 'buttonConfirmCompletion'",
                href: nxt_link,
                text: `Continue to page ${
                    position + 2
                } of ${num_readings} in the reading assignment.`,
            });
        } else {
            l = $("<div />", {
                text:
                    "This page is not part of the last reading assignment you visited.",
            });
        }
        $("#main-content").append(l);
    }
}

function timedRefresh() {
    var timeoutPeriod = 900000; // 75 minutes
    $(document).bind("idle.idleTimer", function () {
        // After timeout period send the user back to the index.  This will force a login
        // if needed when they want to go to a particular page.  This may not be perfect
        // but its an easy way to make sure laptop users are properly logged in when they
        // take quizzes and save stuff.
        if (location.href.indexOf("index.html") < 0) {
            console.log("Idle timer - " + location.pathname);
            location.href =
                eBookConfig.app +
                "/default/user/login?_next=" +
                location.pathname +
                location.search;
        }
    });
    $.idleTimer(timeoutPeriod);
}

class PageProgressBar {
    constructor(actDict) {
        this.possible = 0;
        this.total = 1;
        if (actDict && Object.keys(actDict).length > 0) {
            this.activities = actDict;
        } else {
            let activities = { page: 0 };
            $(".runestone").each(function (idx, e) {
                activities[e.firstElementChild.id] = 0;
            });
            this.activities = activities;
        }
        this.calculateProgress();
        if (
            window.location.pathname.match(
                /.*(index.html|toctree.html|Exercises.html|Glossary.html|search.html)$/i
            )
        ) {
            $("#scprogresscontainer").hide();
        }
        this.renderProgress();
    }

    calculateProgress() {
        for (let k in this.activities) {
            if (k !== undefined) {
                this.possible++;
                if (this.activities[k] > 0) {
                    this.total++;
                }
            }
        }
    }

    renderProgress() {
        let value = 0;
        $("#scprogresstotal").text(this.total);
        $("#scprogressposs").text(this.possible);
        try {
            value = (100 * this.total) / this.possible;
        } catch (e) {
            value = 0;
        }
        $("#subchapterprogress").progressbar({
            value: value,
        });
        if (!eBookConfig.isLoggedIn) {
            $("#subchapterprogress>div").addClass("loggedout");
        }
    }

    updateProgress(div_id) {
        this.activities[div_id]++;
        // Only update the progress bar on the first interaction with an object.
        if (this.activities[div_id] === 1) {
            this.total++;
            let val = (100 * this.total) / this.possible;
            $("#scprogresstotal").text(this.total);
            $("#scprogressposs").text(this.possible);
            $("#subchapterprogress").progressbar("option", "value", val);
            if (
                val == 100.0 &&
                $("#completionButton").text().toLowerCase() ===
                    "mark as completed"
            ) {
                $("#completionButton").click();
            }
        }
    }
}

var pageProgressTracker = {};

function handlePageSetup() {
    var mess;
    if (eBookConfig.useRunestoneServices) {
        jQuery.get(eBookConfig.ajaxURL + "set_tz_offset", {
            timezoneoffset: new Date().getTimezoneOffset() / 60,
        });
    }

    if (eBookConfig.isLoggedIn) {
        mess = `username: ${eBookConfig.username}`;
        if (!eBookConfig.isInstructor) {
            $("#ip_dropdown_link").remove();
        }
        $(document).trigger("runestone:login");
        addReadingList();
        timedRefresh();
    } else {
        mess = "Not logged in";
        $(document).trigger("runestone:logout");
    }
    $(".loggedinuser").html(mess);

    pageProgressTracker = new PageProgressBar(eBookConfig.activities);
    notifyRunestoneComponents();
}

function setupNavbarLoggedIn() {
    $("#profilelink").show();
    $("#passwordlink").show();
    $("#registerlink").hide();
    $("li.loginout").html(
        '<a href="' + eBookConfig.app + '/default/user/logout">Log Out</a>'
    );
}
$(document).bind("runestone:login", setupNavbarLoggedIn);

function setupNavbarLoggedOut() {
    if (eBookConfig.useRunestoneServices) {
        console.log("setup navbar for logged out");
        $("#registerlink").show();
        $("#profilelink").hide();
        $("#passwordlink").hide();
        $("#ip_dropdown_link").hide();
        $("li.loginout").html(
            '<a href="' + eBookConfig.app + '/default/user/login">Login</a>'
        );
        $(".footer").html("user not logged in");
    }
}
$(document).bind("runestone:logout", setupNavbarLoggedOut);

function notifyRunestoneComponents() {
    // Runestone components wait until login process is over to load components because of storage issues. This triggers the `dynamic import machinery`, which then sends the login complete signal when this and all dynamic imports are finished.
    $(document).trigger("runestone:pre-login-complete");
}

// initialize stuff
$(document).ready(function () {
    if (eBookConfig) {
        handlePageSetup();
    } else {
        if (typeof eBookConfig === "undefined") {
            console.log(
                "eBookConfig is not defined.  This page must not be set up for Runestone"
            );
        }
    }
});

// misc stuff
// todo:  This could be further distributed but making a video.js file just for one function seems dumb.
$(document).ready(function () {
    // add the video play button overlay image
    $(".video-play-overlay").each(function () {
        $(this).css(
            "background-image",
            "url('{{pathto('_static/play_overlay_icon.png', 1)}}')"
        );
    });

    // This function is needed to allow the dropdown search bar to work;
    // The default behaviour is that the dropdown menu closes when something in
    // it (like the search bar) is clicked
    $(function () {
        // Fix input element click problem
        $(".dropdown input, .dropdown label").click(function (e) {
            e.stopPropagation();
        });
    });
});


/***/ }),

/***/ 26886:
/*!**************************************************!*\
  !*** ./runestone/common/js/jquery.idle-timer.js ***!
  \**************************************************/
/***/ (() => {

/*!
 * jQuery idleTimer plugin
 * version 0.9.100511
 * by Paul Irish.
 *   http://github.com/paulirish/yui-misc/tree/
 * MIT license

 * adapted from YUI idle timer by nzakas:
 *   http://github.com/nzakas/yui-misc/
*/
/*
 * Copyright (c) 2009 Nicholas C. Zakas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* updated to fix Chrome setTimeout issue by Zaid Zawaideh */

 // API available in <= v0.8
 /*******************************

 // idleTimer() takes an optional argument that defines the idle timeout
 // timeout is in milliseconds; defaults to 30000
 $.idleTimer(10000);


 $(document).bind("idle.idleTimer", function(){
    // function you want to fire when the user goes idle
 });


 $(document).bind("active.idleTimer", function(){
  // function you want to fire when the user becomes active again
 });

 // pass the string 'destroy' to stop the timer
 $.idleTimer('destroy');

 // you can query if the user is idle or not with data()
 $.data(document,'idleTimer');  // 'idle'  or 'active'

 // you can get time elapsed since user when idle/active
 $.idleTimer('getElapsedTime'); // time since state change in ms

 ********/



 // API available in >= v0.9
 /*************************

 // bind to specific elements, allows for multiple timer instances
 $(elem).idleTimer(timeout|'destroy'|'getElapsedTime');
 $.data(elem,'idleTimer');  // 'idle'  or 'active'

 // if you're using the old $.idleTimer api, you should not do $(document).idleTimer(...)

 // element bound timers will only watch for events inside of them.
 // you may just want page-level activity, in which case you may set up
 //   your timers on document, document.documentElement, and document.body

 // You can optionally provide a second argument to override certain options.
 // Here are the defaults, so you can omit any or all of them.
 $(elem).idleTimer(timeout, {
   startImmediately: true, //starts a timeout as soon as the timer is set up; otherwise it waits for the first event.
   idle:    false,         //indicates if the user is idle
   enabled: true,          //indicates if the idle timer is enabled
   events:  'mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove' // activity is one of these events
 });

 ********/

(function($){

$.idleTimer = function(newTimeout, elem, opts){

    // defaults that are to be stored as instance props on the elem

	opts = $.extend({
		startImmediately: true, //starts a timeout as soon as the timer is set up
		idle:    false,         //indicates if the user is idle
		enabled: true,          //indicates if the idle timer is enabled
		timeout: 30000,         //the amount of time (ms) before the user is considered idle
		events:  'mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove' // activity is one of these events
	}, opts);


    elem = elem || document;

    /* (intentionally not documented)
     * Toggles the idle state and fires an appropriate event.
     * @return {void}
     */
    var toggleIdleState = function(myelem){

        // curse you, mozilla setTimeout lateness bug!
        if (typeof myelem === 'number'){
            myelem = undefined;
        }

        var obj = $.data(myelem || elem,'idleTimerObj');

        //toggle the state
        obj.idle = !obj.idle;

        // reset timeout 
        var elapsed = (+new Date()) - obj.olddate;
        obj.olddate = +new Date();

        // handle Chrome always triggering idle after js alert or comfirm popup
        if (obj.idle && (elapsed < opts.timeout)) {
                obj.idle = false;
                clearTimeout($.idleTimer.tId);
                if (opts.enabled)
                  $.idleTimer.tId = setTimeout(toggleIdleState, opts.timeout);
                return;
        }
        
        //fire appropriate event

        // create a custom event, but first, store the new state on the element
        // and then append that string to a namespace
        var event = jQuery.Event( $.data(elem,'idleTimer', obj.idle ? "idle" : "active" )  + '.idleTimer'   );

        // we do want this to bubble, at least as a temporary fix for jQuery 1.7
        // event.stopPropagation();
        $(elem).trigger(event);
    },

    /**
     * Stops the idle timer. This removes appropriate event handlers
     * and cancels any pending timeouts.
     * @return {void}
     * @method stop
     * @static
     */
    stop = function(elem){

        var obj = $.data(elem,'idleTimerObj') || {};

        //set to disabled
        obj.enabled = false;

        //clear any pending timeouts
        clearTimeout(obj.tId);

        //detach the event handlers
        $(elem).off('.idleTimer');
    },


    /* (intentionally not documented)
     * Handles a user event indicating that the user isn't idle.
     * @param {Event} event A DOM2-normalized event object.
     * @return {void}
     */
    handleUserEvent = function(){

        var obj = $.data(this,'idleTimerObj');

        //clear any existing timeout
        clearTimeout(obj.tId);



        //if the idle timer is enabled
        if (obj.enabled){


            //if it's idle, that means the user is no longer idle
            if (obj.idle){
                toggleIdleState(this);
            }

            //set a new timeout
            obj.tId = setTimeout(toggleIdleState, obj.timeout);

        }
     };


    /**
     * Starts the idle timer. This adds appropriate event handlers
     * and starts the first timeout.
     * @param {int} newTimeout (Optional) A new value for the timeout period in ms.
     * @return {void}
     * @method $.idleTimer
     * @static
     */


    var obj = $.data(elem,'idleTimerObj') || {};

    obj.olddate = obj.olddate || +new Date();

    //assign a new timeout if necessary
    if (typeof newTimeout === "number"){
        opts.timeout = newTimeout;
    } else if (newTimeout === 'destroy') {
        stop(elem);
        return this;
    } else if (newTimeout === 'getElapsedTime'){
        return (+new Date()) - obj.olddate;
    }

    //assign appropriate event handlers
    $(elem).on($.trim((opts.events+' ').split(' ').join('.idleTimer ')),handleUserEvent);


    obj.idle    = opts.idle;
    obj.enabled = opts.enabled;
    obj.timeout = opts.timeout;


    //set a timeout to toggle state. May wish to omit this in some situations
	if (opts.startImmediately) {
	    obj.tId = setTimeout(toggleIdleState, obj.timeout);
	}

    // assume the user is active for the first x seconds.
    $.data(elem,'idleTimer',"active");

    // store our instance on the object
    $.data(elem,'idleTimerObj',obj);



}; // end of $.idleTimer()


// v0.9 API for defining multiple timers.
$.fn.idleTimer = function(newTimeout,opts){
	// Allow omission of opts for backward compatibility
	if (!opts) {
		opts = {};
	}

    if(this[0]){
        $.idleTimer(newTimeout,this[0],opts);
    }

    return this;
};


})(jQuery);


/***/ }),

/***/ 43793:
/*!*********************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.bidi.js ***!
  \*********************************************************************/
/***/ (() => {

/*!
 * BIDI embedding support for jQuery.i18n
 *
 * Copyright (C) 2015, David Chan
 *
 * This code is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use this code
 * in commercial projects as long as the copyright header is left intact.
 * See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';
	var strongDirRegExp;

	/**
	 * Matches the first strong directionality codepoint:
	 * - in group 1 if it is LTR
	 * - in group 2 if it is RTL
	 * Does not match if there is no strong directionality codepoint.
	 *
	 * Generated by UnicodeJS (see tools/strongDir) from the UCD; see
	 * https://phabricator.wikimedia.org/diffusion/GUJS/ .
	 */
	strongDirRegExp = new RegExp(
		'(?:' +
			'(' +
				'[\u0041-\u005a\u0061-\u007a\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u02bb-\u02c1\u02d0\u02d1\u02e0-\u02e4\u02ee\u0370-\u0373\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0482\u048a-\u052f\u0531-\u0556\u0559-\u055f\u0561-\u0587\u0589\u0903-\u0939\u093b\u093d-\u0940\u0949-\u094c\u094e-\u0950\u0958-\u0961\u0964-\u0980\u0982\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd-\u09c0\u09c7\u09c8\u09cb\u09cc\u09ce\u09d7\u09dc\u09dd\u09df-\u09e1\u09e6-\u09f1\u09f4-\u09fa\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3e-\u0a40\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd-\u0ac0\u0ac9\u0acb\u0acc\u0ad0\u0ae0\u0ae1\u0ae6-\u0af0\u0af9\u0b02\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b3e\u0b40\u0b47\u0b48\u0b4b\u0b4c\u0b57\u0b5c\u0b5d\u0b5f-\u0b61\u0b66-\u0b77\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe\u0bbf\u0bc1\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcc\u0bd0\u0bd7\u0be6-\u0bf2\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c41-\u0c44\u0c58-\u0c5a\u0c60\u0c61\u0c66-\u0c6f\u0c7f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd-\u0cc4\u0cc6-\u0cc8\u0cca\u0ccb\u0cd5\u0cd6\u0cde\u0ce0\u0ce1\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d40\u0d46-\u0d48\u0d4a-\u0d4c\u0d4e\u0d57\u0d5f-\u0d61\u0d66-\u0d75\u0d79-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dcf-\u0dd1\u0dd8-\u0ddf\u0de6-\u0def\u0df2-\u0df4\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e4f-\u0e5b\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edf\u0f00-\u0f17\u0f1a-\u0f34\u0f36\u0f38\u0f3e-\u0f47\u0f49-\u0f6c\u0f7f\u0f85\u0f88-\u0f8c\u0fbe-\u0fc5\u0fc7-\u0fcc\u0fce-\u0fda\u1000-\u102c\u1031\u1038\u103b\u103c\u103f-\u1057\u105a-\u105d\u1061-\u1070\u1075-\u1081\u1083\u1084\u1087-\u108c\u108e-\u109c\u109e-\u10c5\u10c7\u10cd\u10d0-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1360-\u137c\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u167f\u1681-\u169a\u16a0-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1735\u1736\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17b6\u17be-\u17c5\u17c7\u17c8\u17d4-\u17da\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1923-\u1926\u1929-\u192b\u1930\u1931\u1933-\u1938\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19da\u1a00-\u1a16\u1a19\u1a1a\u1a1e-\u1a55\u1a57\u1a61\u1a63\u1a64\u1a6d-\u1a72\u1a80-\u1a89\u1a90-\u1a99\u1aa0-\u1aad\u1b04-\u1b33\u1b35\u1b3b\u1b3d-\u1b41\u1b43-\u1b4b\u1b50-\u1b6a\u1b74-\u1b7c\u1b82-\u1ba1\u1ba6\u1ba7\u1baa\u1bae-\u1be5\u1be7\u1bea-\u1bec\u1bee\u1bf2\u1bf3\u1bfc-\u1c2b\u1c34\u1c35\u1c3b-\u1c49\u1c4d-\u1c7f\u1cc0-\u1cc7\u1cd3\u1ce1\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200e\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u214f\u2160-\u2188\u2336-\u237a\u2395\u249c-\u24e9\u26ac\u2800-\u28ff\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d70\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u302e\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u3190-\u31ba\u31f0-\u321c\u3220-\u324f\u3260-\u327b\u327f-\u32b0\u32c0-\u32cb\u32d0-\u32fe\u3300-\u3376\u337b-\u33dd\u33e0-\u33fe\u3400-\u4db5\u4e00-\u9fd5\ua000-\ua48c\ua4d0-\ua60c\ua610-\ua62b\ua640-\ua66e\ua680-\ua69d\ua6a0-\ua6ef\ua6f2-\ua6f7\ua722-\ua787\ua789-\ua7ad\ua7b0-\ua7b7\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua824\ua827\ua830-\ua837\ua840-\ua873\ua880-\ua8c3\ua8ce-\ua8d9\ua8f2-\ua8fd\ua900-\ua925\ua92e-\ua946\ua952\ua953\ua95f-\ua97c\ua983-\ua9b2\ua9b4\ua9b5\ua9ba\ua9bb\ua9bd-\ua9cd\ua9cf-\ua9d9\ua9de-\ua9e4\ua9e6-\ua9fe\uaa00-\uaa28\uaa2f\uaa30\uaa33\uaa34\uaa40-\uaa42\uaa44-\uaa4b\uaa4d\uaa50-\uaa59\uaa5c-\uaa7b\uaa7d-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaaeb\uaaee-\uaaf5\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab65\uab70-\uabe4\uabe6\uabe7\uabe9-\uabec\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\ue000-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]|\ud800[\udc00-\udc0b]|\ud800[\udc0d-\udc26]|\ud800[\udc28-\udc3a]|\ud800\udc3c|\ud800\udc3d|\ud800[\udc3f-\udc4d]|\ud800[\udc50-\udc5d]|\ud800[\udc80-\udcfa]|\ud800\udd00|\ud800\udd02|\ud800[\udd07-\udd33]|\ud800[\udd37-\udd3f]|\ud800[\uddd0-\uddfc]|\ud800[\ude80-\ude9c]|\ud800[\udea0-\uded0]|\ud800[\udf00-\udf23]|\ud800[\udf30-\udf4a]|\ud800[\udf50-\udf75]|\ud800[\udf80-\udf9d]|\ud800[\udf9f-\udfc3]|\ud800[\udfc8-\udfd5]|\ud801[\udc00-\udc9d]|\ud801[\udca0-\udca9]|\ud801[\udd00-\udd27]|\ud801[\udd30-\udd63]|\ud801\udd6f|\ud801[\ude00-\udf36]|\ud801[\udf40-\udf55]|\ud801[\udf60-\udf67]|\ud804\udc00|\ud804[\udc02-\udc37]|\ud804[\udc47-\udc4d]|\ud804[\udc66-\udc6f]|\ud804[\udc82-\udcb2]|\ud804\udcb7|\ud804\udcb8|\ud804[\udcbb-\udcc1]|\ud804[\udcd0-\udce8]|\ud804[\udcf0-\udcf9]|\ud804[\udd03-\udd26]|\ud804\udd2c|\ud804[\udd36-\udd43]|\ud804[\udd50-\udd72]|\ud804[\udd74-\udd76]|\ud804[\udd82-\uddb5]|\ud804[\uddbf-\uddc9]|\ud804\uddcd|\ud804[\uddd0-\udddf]|\ud804[\udde1-\uddf4]|\ud804[\ude00-\ude11]|\ud804[\ude13-\ude2e]|\ud804\ude32|\ud804\ude33|\ud804\ude35|\ud804[\ude38-\ude3d]|\ud804[\ude80-\ude86]|\ud804\ude88|\ud804[\ude8a-\ude8d]|\ud804[\ude8f-\ude9d]|\ud804[\ude9f-\udea9]|\ud804[\udeb0-\udede]|\ud804[\udee0-\udee2]|\ud804[\udef0-\udef9]|\ud804\udf02|\ud804\udf03|\ud804[\udf05-\udf0c]|\ud804\udf0f|\ud804\udf10|\ud804[\udf13-\udf28]|\ud804[\udf2a-\udf30]|\ud804\udf32|\ud804\udf33|\ud804[\udf35-\udf39]|\ud804[\udf3d-\udf3f]|\ud804[\udf41-\udf44]|\ud804\udf47|\ud804\udf48|\ud804[\udf4b-\udf4d]|\ud804\udf50|\ud804\udf57|\ud804[\udf5d-\udf63]|\ud805[\udc80-\udcb2]|\ud805\udcb9|\ud805[\udcbb-\udcbe]|\ud805\udcc1|\ud805[\udcc4-\udcc7]|\ud805[\udcd0-\udcd9]|\ud805[\udd80-\uddb1]|\ud805[\uddb8-\uddbb]|\ud805\uddbe|\ud805[\uddc1-\udddb]|\ud805[\ude00-\ude32]|\ud805\ude3b|\ud805\ude3c|\ud805\ude3e|\ud805[\ude41-\ude44]|\ud805[\ude50-\ude59]|\ud805[\ude80-\udeaa]|\ud805\udeac|\ud805\udeae|\ud805\udeaf|\ud805\udeb6|\ud805[\udec0-\udec9]|\ud805[\udf00-\udf19]|\ud805\udf20|\ud805\udf21|\ud805\udf26|\ud805[\udf30-\udf3f]|\ud806[\udca0-\udcf2]|\ud806\udcff|\ud806[\udec0-\udef8]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e]|\ud809[\udc70-\udc74]|\ud809[\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38]|\ud81a[\ude40-\ude5e]|\ud81a[\ude60-\ude69]|\ud81a\ude6e|\ud81a\ude6f|\ud81a[\uded0-\udeed]|\ud81a\udef5|\ud81a[\udf00-\udf2f]|\ud81a[\udf37-\udf45]|\ud81a[\udf50-\udf59]|\ud81a[\udf5b-\udf61]|\ud81a[\udf63-\udf77]|\ud81a[\udf7d-\udf8f]|\ud81b[\udf00-\udf44]|\ud81b[\udf50-\udf7e]|\ud81b[\udf93-\udf9f]|\ud82c\udc00|\ud82c\udc01|\ud82f[\udc00-\udc6a]|\ud82f[\udc70-\udc7c]|\ud82f[\udc80-\udc88]|\ud82f[\udc90-\udc99]|\ud82f\udc9c|\ud82f\udc9f|\ud834[\udc00-\udcf5]|\ud834[\udd00-\udd26]|\ud834[\udd29-\udd66]|\ud834[\udd6a-\udd72]|\ud834\udd83|\ud834\udd84|\ud834[\udd8c-\udda9]|\ud834[\uddae-\udde8]|\ud834[\udf60-\udf71]|\ud835[\udc00-\udc54]|\ud835[\udc56-\udc9c]|\ud835\udc9e|\ud835\udc9f|\ud835\udca2|\ud835\udca5|\ud835\udca6|\ud835[\udca9-\udcac]|\ud835[\udcae-\udcb9]|\ud835\udcbb|\ud835[\udcbd-\udcc3]|\ud835[\udcc5-\udd05]|\ud835[\udd07-\udd0a]|\ud835[\udd0d-\udd14]|\ud835[\udd16-\udd1c]|\ud835[\udd1e-\udd39]|\ud835[\udd3b-\udd3e]|\ud835[\udd40-\udd44]|\ud835\udd46|\ud835[\udd4a-\udd50]|\ud835[\udd52-\udea5]|\ud835[\udea8-\udeda]|\ud835[\udedc-\udf14]|\ud835[\udf16-\udf4e]|\ud835[\udf50-\udf88]|\ud835[\udf8a-\udfc2]|\ud835[\udfc4-\udfcb]|\ud836[\udc00-\uddff]|\ud836[\ude37-\ude3a]|\ud836[\ude6d-\ude74]|\ud836[\ude76-\ude83]|\ud836[\ude85-\ude8b]|\ud83c[\udd10-\udd2e]|\ud83c[\udd30-\udd69]|\ud83c[\udd70-\udd9a]|\ud83c[\udde6-\ude02]|\ud83c[\ude10-\ude3a]|\ud83c[\ude40-\ude48]|\ud83c\ude50|\ud83c\ude51|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6]|\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34]|\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]|[\udb80-\udbbe][\udc00-\udfff]|\udbbf[\udc00-\udffd]|[\udbc0-\udbfe][\udc00-\udfff]|\udbff[\udc00-\udffd]' +
			')|(' +
				'[\u0590\u05be\u05c0\u05c3\u05c6\u05c8-\u05ff\u07c0-\u07ea\u07f4\u07f5\u07fa-\u0815\u081a\u0824\u0828\u082e-\u0858\u085c-\u089f\u200f\ufb1d\ufb1f-\ufb28\ufb2a-\ufb4f\u0608\u060b\u060d\u061b-\u064a\u066d-\u066f\u0671-\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u0710\u0712-\u072f\u074b-\u07a5\u07b1-\u07bf\u08a0-\u08e2\ufb50-\ufd3d\ufd40-\ufdcf\ufdf0-\ufdfc\ufdfe\ufdff\ufe70-\ufefe]|\ud802[\udc00-\udd1e]|\ud802[\udd20-\ude00]|\ud802\ude04|\ud802[\ude07-\ude0b]|\ud802[\ude10-\ude37]|\ud802[\ude3b-\ude3e]|\ud802[\ude40-\udee4]|\ud802[\udee7-\udf38]|\ud802[\udf40-\udfff]|\ud803[\udc00-\ude5f]|\ud803[\ude7f-\udfff]|\ud83a[\udc00-\udccf]|\ud83a[\udcd7-\udfff]|\ud83b[\udc00-\uddff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\ude00-\udeef]|\ud83b[\udef2-\udeff]' +
			')' +
		')'
	);

	/**
	 * Gets directionality of the first strongly directional codepoint
	 *
	 * This is the rule the BIDI algorithm uses to determine the directionality of
	 * paragraphs ( http://unicode.org/reports/tr9/#The_Paragraph_Level ) and
	 * FSI isolates ( http://unicode.org/reports/tr9/#Explicit_Directional_Isolates ).
	 *
	 * TODO: Does not handle BIDI control characters inside the text.
	 * TODO: Does not handle unallocated characters.
	 *
	 * @param {string} text The text from which to extract initial directionality.
	 * @return {string} Directionality (either 'ltr' or 'rtl')
	 */
	function strongDirFromContent( text ) {
		var m = text.match( strongDirRegExp );
		if ( !m ) {
			return null;
		}
		if ( m[ 2 ] === undefined ) {
			return 'ltr';
		}
		return 'rtl';
	}

	$.extend( $.i18n.parser.emitter, {
		/**
		 * Wraps argument with unicode control characters for directionality safety
		 *
		 * This solves the problem where directionality-neutral characters at the edge of
		 * the argument string get interpreted with the wrong directionality from the
		 * enclosing context, giving renderings that look corrupted like "(Ben_(WMF".
		 *
		 * The wrapping is LRE...PDF or RLE...PDF, depending on the detected
		 * directionality of the argument string, using the BIDI algorithm's own "First
		 * strong directional codepoint" rule. Essentially, this works round the fact that
		 * there is no embedding equivalent of U+2068 FSI (isolation with heuristic
		 * direction inference). The latter is cleaner but still not widely supported.
		 *
		 * @param {string[]} nodes The text nodes from which to take the first item.
		 * @return {string} Wrapped String of content as needed.
		 */
		bidi: function ( nodes ) {
			var dir = strongDirFromContent( nodes[ 0 ] );
			if ( dir === 'ltr' ) {
				// Wrap in LEFT-TO-RIGHT EMBEDDING ... POP DIRECTIONAL FORMATTING
				return '\u202A' + nodes[ 0 ] + '\u202C';
			}
			if ( dir === 'rtl' ) {
				// Wrap in RIGHT-TO-LEFT EMBEDDING ... POP DIRECTIONAL FORMATTING
				return '\u202B' + nodes[ 0 ] + '\u202C';
			}
			// No strong directionality: do not wrap
			return nodes[ 0 ];
		}
	} );
}( jQuery ) );


/***/ }),

/***/ 30423:
/*!****************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.js ***!
  \****************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageParserEmitter = function () {
		this.language = $.i18n.languages[ String.locale ] || $.i18n.languages[ 'default' ];
	};

	MessageParserEmitter.prototype = {
		constructor: MessageParserEmitter,

		/**
		 * (We put this method definition here, and not in prototype, to make
		 * sure it's not overwritten by any magic.) Walk entire node structure,
		 * applying replacements and template functions when appropriate
		 *
		 * @param {Mixed} node abstract syntax tree (top node or subnode)
		 * @param {Array} replacements for $1, $2, ... $n
		 * @return {Mixed} single-string node or array of nodes suitable for
		 *  jQuery appending.
		 */
		emit: function ( node, replacements ) {
			var ret, subnodes, operation,
				messageParserEmitter = this;

			switch ( typeof node ) {
				case 'string':
				case 'number':
					ret = node;
					break;
				case 'object':
				// node is an array of nodes
					subnodes = $.map( node.slice( 1 ), function ( n ) {
						return messageParserEmitter.emit( n, replacements );
					} );

					operation = node[ 0 ].toLowerCase();

					if ( typeof messageParserEmitter[ operation ] === 'function' ) {
						ret = messageParserEmitter[ operation ]( subnodes, replacements );
					} else {
						throw new Error( 'unknown operation "' + operation + '"' );
					}

					break;
				case 'undefined':
				// Parsing the empty string (as an entire expression, or as a
				// paramExpression in a template) results in undefined
				// Perhaps a more clever parser can detect this, and return the
				// empty string? Or is that useful information?
				// The logical thing is probably to return the empty string here
				// when we encounter undefined.
					ret = '';
					break;
				default:
					throw new Error( 'unexpected type in AST: ' + typeof node );
			}

			return ret;
		},

		/**
		 * Parsing has been applied depth-first we can assume that all nodes
		 * here are single nodes Must return a single node to parents -- a
		 * jQuery with synthetic span However, unwrap any other synthetic spans
		 * in our children and pass them upwards
		 *
		 * @param {Array} nodes Mixed, some single nodes, some arrays of nodes.
		 * @return {string}
		 */
		concat: function ( nodes ) {
			var result = '';

			$.each( nodes, function ( i, node ) {
				// strings, integers, anything else
				result += node;
			} );

			return result;
		},

		/**
		 * Return escaped replacement of correct index, or string if
		 * unavailable. Note that we expect the parsed parameter to be
		 * zero-based. i.e. $1 should have become [ 0 ]. if the specified
		 * parameter is not found return the same string (e.g. "$99" ->
		 * parameter 98 -> not found -> return "$99" ) TODO throw error if
		 * nodes.length > 1 ?
		 *
		 * @param {Array} nodes One element, integer, n >= 0
		 * @param {Array} replacements for $1, $2, ... $n
		 * @return {string} replacement
		 */
		replace: function ( nodes, replacements ) {
			var index = parseInt( nodes[ 0 ], 10 );

			if ( index < replacements.length ) {
				// replacement is not a string, don't touch!
				return replacements[ index ];
			} else {
				// index not found, fallback to displaying variable
				return '$' + ( index + 1 );
			}
		},

		/**
		 * Transform parsed structure into pluralization n.b. The first node may
		 * be a non-integer (for instance, a string representing an Arabic
		 * number). So convert it back with the current language's
		 * convertNumber.
		 *
		 * @param {Array} nodes List [ {String|Number}, {String}, {String} ... ]
		 * @return {string} selected pluralized form according to current
		 *  language.
		 */
		plural: function ( nodes ) {
			var count = parseFloat( this.language.convertNumber( nodes[ 0 ], 10 ) ),
				forms = nodes.slice( 1 );

			return forms.length ? this.language.convertPlural( count, forms ) : '';
		},

		/**
		 * Transform parsed structure into gender Usage
		 * {{gender:gender|masculine|feminine|neutral}}.
		 *
		 * @param {Array} nodes List [ {String}, {String}, {String} , {String} ]
		 * @return {string} selected gender form according to current language
		 */
		gender: function ( nodes ) {
			var gender = nodes[ 0 ],
				forms = nodes.slice( 1 );

			return this.language.gender( gender, forms );
		},

		/**
		 * Transform parsed structure into grammar conversion. Invoked by
		 * putting {{grammar:form|word}} in a message
		 *
		 * @param {Array} nodes List [{Grammar case eg: genitive}, {String word}]
		 * @return {string} selected grammatical form according to current
		 *  language.
		 */
		grammar: function ( nodes ) {
			var form = nodes[ 0 ],
				word = nodes[ 1 ];

			return word && form && this.language.convertGrammar( word, form );
		}
	};

	$.extend( $.i18n.parser.emitter, new MessageParserEmitter() );
}( jQuery ) );


/***/ }),

/***/ 9001:
/*!******************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.fallbacks.js ***!
  \******************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */
( function ( $ ) {
	'use strict';

	$.i18n = $.i18n || {};
	$.extend( $.i18n.fallbacks, {
		ab: [ 'ru' ],
		ace: [ 'id' ],
		aln: [ 'sq' ],
		// Not so standard - als is supposed to be Tosk Albanian,
		// but in Wikipedia it's used for a Germanic language.
		als: [ 'gsw', 'de' ],
		an: [ 'es' ],
		anp: [ 'hi' ],
		arn: [ 'es' ],
		arz: [ 'ar' ],
		av: [ 'ru' ],
		ay: [ 'es' ],
		ba: [ 'ru' ],
		bar: [ 'de' ],
		'bat-smg': [ 'sgs', 'lt' ],
		bcc: [ 'fa' ],
		'be-x-old': [ 'be-tarask' ],
		bh: [ 'bho' ],
		bjn: [ 'id' ],
		bm: [ 'fr' ],
		bpy: [ 'bn' ],
		bqi: [ 'fa' ],
		bug: [ 'id' ],
		'cbk-zam': [ 'es' ],
		ce: [ 'ru' ],
		crh: [ 'crh-latn' ],
		'crh-cyrl': [ 'ru' ],
		csb: [ 'pl' ],
		cv: [ 'ru' ],
		'de-at': [ 'de' ],
		'de-ch': [ 'de' ],
		'de-formal': [ 'de' ],
		dsb: [ 'de' ],
		dtp: [ 'ms' ],
		egl: [ 'it' ],
		eml: [ 'it' ],
		ff: [ 'fr' ],
		fit: [ 'fi' ],
		'fiu-vro': [ 'vro', 'et' ],
		frc: [ 'fr' ],
		frp: [ 'fr' ],
		frr: [ 'de' ],
		fur: [ 'it' ],
		gag: [ 'tr' ],
		gan: [ 'gan-hant', 'zh-hant', 'zh-hans' ],
		'gan-hans': [ 'zh-hans' ],
		'gan-hant': [ 'zh-hant', 'zh-hans' ],
		gl: [ 'pt' ],
		glk: [ 'fa' ],
		gn: [ 'es' ],
		gsw: [ 'de' ],
		hif: [ 'hif-latn' ],
		hsb: [ 'de' ],
		ht: [ 'fr' ],
		ii: [ 'zh-cn', 'zh-hans' ],
		inh: [ 'ru' ],
		iu: [ 'ike-cans' ],
		jut: [ 'da' ],
		jv: [ 'id' ],
		kaa: [ 'kk-latn', 'kk-cyrl' ],
		kbd: [ 'kbd-cyrl' ],
		khw: [ 'ur' ],
		kiu: [ 'tr' ],
		kk: [ 'kk-cyrl' ],
		'kk-arab': [ 'kk-cyrl' ],
		'kk-latn': [ 'kk-cyrl' ],
		'kk-cn': [ 'kk-arab', 'kk-cyrl' ],
		'kk-kz': [ 'kk-cyrl' ],
		'kk-tr': [ 'kk-latn', 'kk-cyrl' ],
		kl: [ 'da' ],
		'ko-kp': [ 'ko' ],
		koi: [ 'ru' ],
		krc: [ 'ru' ],
		ks: [ 'ks-arab' ],
		ksh: [ 'de' ],
		ku: [ 'ku-latn' ],
		'ku-arab': [ 'ckb' ],
		kv: [ 'ru' ],
		lad: [ 'es' ],
		lb: [ 'de' ],
		lbe: [ 'ru' ],
		lez: [ 'ru' ],
		li: [ 'nl' ],
		lij: [ 'it' ],
		liv: [ 'et' ],
		lmo: [ 'it' ],
		ln: [ 'fr' ],
		ltg: [ 'lv' ],
		lzz: [ 'tr' ],
		mai: [ 'hi' ],
		'map-bms': [ 'jv', 'id' ],
		mg: [ 'fr' ],
		mhr: [ 'ru' ],
		min: [ 'id' ],
		mo: [ 'ro' ],
		mrj: [ 'ru' ],
		mwl: [ 'pt' ],
		myv: [ 'ru' ],
		mzn: [ 'fa' ],
		nah: [ 'es' ],
		nap: [ 'it' ],
		nds: [ 'de' ],
		'nds-nl': [ 'nl' ],
		'nl-informal': [ 'nl' ],
		no: [ 'nb' ],
		os: [ 'ru' ],
		pcd: [ 'fr' ],
		pdc: [ 'de' ],
		pdt: [ 'de' ],
		pfl: [ 'de' ],
		pms: [ 'it' ],
		pt: [ 'pt-br' ],
		'pt-br': [ 'pt' ],
		qu: [ 'es' ],
		qug: [ 'qu', 'es' ],
		rgn: [ 'it' ],
		rmy: [ 'ro' ],
		'roa-rup': [ 'rup' ],
		rue: [ 'uk', 'ru' ],
		ruq: [ 'ruq-latn', 'ro' ],
		'ruq-cyrl': [ 'mk' ],
		'ruq-latn': [ 'ro' ],
		sa: [ 'hi' ],
		sah: [ 'ru' ],
		scn: [ 'it' ],
		sg: [ 'fr' ],
		sgs: [ 'lt' ],
		sli: [ 'de' ],
		sr: [ 'sr-ec' ],
		srn: [ 'nl' ],
		stq: [ 'de' ],
		su: [ 'id' ],
		szl: [ 'pl' ],
		tcy: [ 'kn' ],
		tg: [ 'tg-cyrl' ],
		tt: [ 'tt-cyrl', 'ru' ],
		'tt-cyrl': [ 'ru' ],
		ty: [ 'fr' ],
		udm: [ 'ru' ],
		ug: [ 'ug-arab' ],
		uk: [ 'ru' ],
		vec: [ 'it' ],
		vep: [ 'et' ],
		vls: [ 'nl' ],
		vmf: [ 'de' ],
		vot: [ 'fi' ],
		vro: [ 'et' ],
		wa: [ 'fr' ],
		wo: [ 'fr' ],
		wuu: [ 'zh-hans' ],
		xal: [ 'ru' ],
		xmf: [ 'ka' ],
		yi: [ 'he' ],
		za: [ 'zh-hans' ],
		zea: [ 'nl' ],
		zh: [ 'zh-hans' ],
		'zh-classical': [ 'lzh' ],
		'zh-cn': [ 'zh-hans' ],
		'zh-hant': [ 'zh-hans' ],
		'zh-hk': [ 'zh-hant', 'zh-hans' ],
		'zh-min-nan': [ 'nan' ],
		'zh-mo': [ 'zh-hk', 'zh-hant', 'zh-hans' ],
		'zh-my': [ 'zh-sg', 'zh-hans' ],
		'zh-sg': [ 'zh-hans' ],
		'zh-tw': [ 'zh-hant', 'zh-hans' ],
		'zh-yue': [ 'yue' ]
	} );
}( jQuery ) );


/***/ }),

/***/ 99283:
/*!********************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.js ***!
  \********************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var I18N,
		slice = Array.prototype.slice;
	/**
	 * @constructor
	 * @param {Object} options
	 */
	I18N = function ( options ) {
		// Load defaults
		this.options = $.extend( {}, I18N.defaults, options );

		this.parser = this.options.parser;
		this.locale = this.options.locale;
		this.messageStore = this.options.messageStore;
		this.languages = {};
	};

	I18N.prototype = {
		/**
		 * Localize a given messageKey to a locale.
		 * @param {String} messageKey
		 * @return {String} Localized message
		 */
		localize: function ( messageKey ) {
			var localeParts, localePartIndex, locale, fallbackIndex,
				tryingLocale, message;

			locale = this.locale;
			fallbackIndex = 0;

			while ( locale ) {
				// Iterate through locales starting at most-specific until
				// localization is found. As in fi-Latn-FI, fi-Latn and fi.
				localeParts = locale.split( '-' );
				localePartIndex = localeParts.length;

				do {
					tryingLocale = localeParts.slice( 0, localePartIndex ).join( '-' );
					message = this.messageStore.get( tryingLocale, messageKey );

					if ( message ) {
						return message;
					}

					localePartIndex--;
				} while ( localePartIndex );

				if ( locale === 'en' ) {
					break;
				}

				locale = ( $.i18n.fallbacks[ this.locale ] &&
						$.i18n.fallbacks[ this.locale ][ fallbackIndex ] ) ||
						this.options.fallbackLocale;
				$.i18n.log( 'Trying fallback locale for ' + this.locale + ': ' + locale + ' (' + messageKey + ')' );

				fallbackIndex++;
			}

			// key not found
			return '';
		},

		/*
		 * Destroy the i18n instance.
		 */
		destroy: function () {
			$.removeData( document, 'i18n' );
		},

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages. Example:
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * To load a localization file for a locale:
		 * <code>
		 * load('path/to/de-messages.json', 'de' );
		 * </code>
		 *
		 * To load a localization file from a directory:
		 * <code>
		 * load('path/to/i18n/directory', 'de' );
		 * </code>
		 * The above method has the advantage of fallback resolution.
		 * ie, it will automatically load the fallback locales for de.
		 * For most usecases, this is the recommended method.
		 * It is optional to have trailing slash at end.
		 *
		 * A data object containing message key- message translation mappings
		 * can also be passed. Example:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code>
		 *
		 * A source map containing key-value pair of languagename and locations
		 * can also be passed. Example:
		 * <code>
		 * load( {
		 * bn: 'i18n/bn.json',
		 * he: 'i18n/he.json',
		 * en: 'i18n/en.json'
		 * } )
		 * </code>
		 *
		 * If the data argument is null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var fallbackLocales, locIndex, fallbackLocale, sourceMap = {};
			if ( !source && !locale ) {
				source = 'i18n/' + $.i18n().locale + '.json';
				locale = $.i18n().locale;
			}
			if ( typeof source === 'string' &&
				// source extension should be json, but can have query params after that.
				source.split( '?' )[ 0 ].split( '.' ).pop() !== 'json'
			) {
				// Load specified locale then check for fallbacks when directory is
				// specified in load()
				sourceMap[ locale ] = source + '/' + locale + '.json';
				fallbackLocales = ( $.i18n.fallbacks[ locale ] || [] )
					.concat( this.options.fallbackLocale );
				for ( locIndex = 0; locIndex < fallbackLocales.length; locIndex++ ) {
					fallbackLocale = fallbackLocales[ locIndex ];
					sourceMap[ fallbackLocale ] = source + '/' + fallbackLocale + '.json';
				}
				return this.load( sourceMap );
			} else {
				return this.messageStore.load( source, locale );
			}

		},

		/**
		 * Does parameter and magic word substitution.
		 *
		 * @param {string} key Message key
		 * @param {Array} parameters Message parameters
		 * @return {string}
		 */
		parse: function ( key, parameters ) {
			var message = this.localize( key );
			// FIXME: This changes the state of the I18N object,
			// should probably not change the 'this.parser' but just
			// pass it to the parser.
			this.parser.language = $.i18n.languages[ $.i18n().locale ] || $.i18n.languages[ 'default' ];
			if ( message === '' ) {
				message = key;
			}
			return this.parser.parse( message, parameters );
		}
	};

	/**
	 * Process a message from the $.I18N instance
	 * for the current document, stored in jQuery.data(document).
	 *
	 * @param {string} key Key of the message.
	 * @param {string} param1 [param...] Variadic list of parameters for {key}.
	 * @return {string|$.I18N} Parsed message, or if no key was given
	 * the instance of $.I18N is returned.
	 */
	$.i18n = function ( key, param1 ) {
		var parameters,
			i18n = $.data( document, 'i18n' ),
			options = typeof key === 'object' && key;

		// If the locale option for this call is different then the setup so far,
		// update it automatically. This doesn't just change the context for this
		// call but for all future call as well.
		// If there is no i18n setup yet, don't do this. It will be taken care of
		// by the `new I18N` construction below.
		// NOTE: It should only change language for this one call.
		// Then cache instances of I18N somewhere.
		if ( options && options.locale && i18n && i18n.locale !== options.locale ) {
			i18n.locale = options.locale;
		}

		if ( !i18n ) {
			i18n = new I18N( options );
			$.data( document, 'i18n', i18n );
		}

		if ( typeof key === 'string' ) {
			if ( param1 !== undefined ) {
				parameters = slice.call( arguments, 1 );
			} else {
				parameters = [];
			}

			return i18n.parse( key, parameters );
		} else {
			// FIXME: remove this feature/bug.
			return i18n;
		}
	};

	$.fn.i18n = function () {
		var i18n = $.data( document, 'i18n' );

		if ( !i18n ) {
			i18n = new I18N();
			$.data( document, 'i18n', i18n );
		}

		return this.each( function () {
			var $this = $( this ),
				messageKey = $this.data( 'i18n' ),
				lBracket, rBracket, type, key;

			if ( messageKey ) {
				lBracket = messageKey.indexOf( '[' );
				rBracket = messageKey.indexOf( ']' );
				if ( lBracket !== -1 && rBracket !== -1 && lBracket < rBracket ) {
					type = messageKey.slice( lBracket + 1, rBracket );
					key = messageKey.slice( rBracket + 1 );
					if ( type === 'html' ) {
						$this.html( i18n.parse( key ) );
					} else {
						$this.attr( type, i18n.parse( key ) );
					}
				} else {
					$this.text( i18n.parse( messageKey ) );
				}
			} else {
				$this.find( '[data-i18n]' ).i18n();
			}
		} );
	};

	function getDefaultLocale() {
		var nav, locale = $( 'html' ).attr( 'lang' );

		if ( !locale ) {
			if ( typeof window.navigator !== undefined ) {
				nav = window.navigator;
				locale = nav.language || nav.userLanguage || '';
			} else {
				locale = '';
			}
		}
		return locale;
	}

	$.i18n.languages = {};
	$.i18n.messageStore = $.i18n.messageStore || {};
	$.i18n.parser = {
		// The default parser only handles variable substitution
		parse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;
				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},
		emitter: {}
	};
	$.i18n.fallbacks = {};
	$.i18n.debug = false;
	$.i18n.log = function ( /* arguments */ ) {
		if ( window.console && $.i18n.debug ) {
			window.console.log.apply( window.console, arguments );
		}
	};
	/* Static members */
	I18N.defaults = {
		locale: getDefaultLocale(),
		fallbackLocale: 'en',
		parser: $.i18n.parser,
		messageStore: $.i18n.messageStore
	};

	// Expose constructor
	$.i18n.constructor = I18N;
}( jQuery ) );

/***/ }),

/***/ 64793:
/*!*****************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.language.js ***!
  \*****************************************************************/
/***/ (() => {

/* global pluralRuleParser */
( function ( $ ) {
	'use strict';

	// jscs:disable
	var language = {
		// CLDR plural rules generated using
		// libs/CLDRPluralRuleParser/tools/PluralXML2JSON.html
		pluralRules: {
			ak: {
				one: 'n = 0..1'
			},
			am: {
				one: 'i = 0 or n = 1'
			},
			ar: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n % 100 = 3..10',
				many: 'n % 100 = 11..99'
			},
			ars: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n % 100 = 3..10',
				many: 'n % 100 = 11..99'
			},
			as: {
				one: 'i = 0 or n = 1'
			},
			be: {
				one: 'n % 10 = 1 and n % 100 != 11',
				few: 'n % 10 = 2..4 and n % 100 != 12..14',
				many: 'n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14'
			},
			bh: {
				one: 'n = 0..1'
			},
			bn: {
				one: 'i = 0 or n = 1'
			},
			br: {
				one: 'n % 10 = 1 and n % 100 != 11,71,91',
				two: 'n % 10 = 2 and n % 100 != 12,72,92',
				few: 'n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99',
				many: 'n != 0 and n % 1000000 = 0'
			},
			bs: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			cs: {
				one: 'i = 1 and v = 0',
				few: 'i = 2..4 and v = 0',
				many: 'v != 0'
			},
			cy: {
				zero: 'n = 0',
				one: 'n = 1',
				two: 'n = 2',
				few: 'n = 3',
				many: 'n = 6'
			},
			da: {
				one: 'n = 1 or t != 0 and i = 0,1'
			},
			dsb: {
				one: 'v = 0 and i % 100 = 1 or f % 100 = 1',
				two: 'v = 0 and i % 100 = 2 or f % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'
			},
			fa: {
				one: 'i = 0 or n = 1'
			},
			ff: {
				one: 'i = 0,1'
			},
			fil: {
				one: 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'
			},
			fr: {
				one: 'i = 0,1'
			},
			ga: {
				one: 'n = 1',
				two: 'n = 2',
				few: 'n = 3..6',
				many: 'n = 7..10'
			},
			gd: {
				one: 'n = 1,11',
				two: 'n = 2,12',
				few: 'n = 3..10,13..19'
			},
			gu: {
				one: 'i = 0 or n = 1'
			},
			guw: {
				one: 'n = 0..1'
			},
			gv: {
				one: 'v = 0 and i % 10 = 1',
				two: 'v = 0 and i % 10 = 2',
				few: 'v = 0 and i % 100 = 0,20,40,60,80',
				many: 'v != 0'
			},
			he: {
				one: 'i = 1 and v = 0',
				two: 'i = 2 and v = 0',
				many: 'v = 0 and n != 0..10 and n % 10 = 0'
			},
			hi: {
				one: 'i = 0 or n = 1'
			},
			hr: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			hsb: {
				one: 'v = 0 and i % 100 = 1 or f % 100 = 1',
				two: 'v = 0 and i % 100 = 2 or f % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or f % 100 = 3..4'
			},
			hy: {
				one: 'i = 0,1'
			},
			is: {
				one: 't = 0 and i % 10 = 1 and i % 100 != 11 or t != 0'
			},
			iu: {
				one: 'n = 1',
				two: 'n = 2'
			},
			iw: {
				one: 'i = 1 and v = 0',
				two: 'i = 2 and v = 0',
				many: 'v = 0 and n != 0..10 and n % 10 = 0'
			},
			kab: {
				one: 'i = 0,1'
			},
			kn: {
				one: 'i = 0 or n = 1'
			},
			kw: {
				one: 'n = 1',
				two: 'n = 2'
			},
			lag: {
				zero: 'n = 0',
				one: 'i = 0,1 and n != 0'
			},
			ln: {
				one: 'n = 0..1'
			},
			lt: {
				one: 'n % 10 = 1 and n % 100 != 11..19',
				few: 'n % 10 = 2..9 and n % 100 != 11..19',
				many: 'f != 0'
			},
			lv: {
				zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
				one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
			},
			mg: {
				one: 'n = 0..1'
			},
			mk: {
				one: 'v = 0 and i % 10 = 1 or f % 10 = 1'
			},
			mo: {
				one: 'i = 1 and v = 0',
				few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
			},
			mr: {
				one: 'i = 0 or n = 1'
			},
			mt: {
				one: 'n = 1',
				few: 'n = 0 or n % 100 = 2..10',
				many: 'n % 100 = 11..19'
			},
			naq: {
				one: 'n = 1',
				two: 'n = 2'
			},
			nso: {
				one: 'n = 0..1'
			},
			pa: {
				one: 'n = 0..1'
			},
			pl: {
				one: 'i = 1 and v = 0',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14'
			},
			prg: {
				zero: 'n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19',
				one: 'n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1'
			},
			pt: {
				one: 'i = 0..1'
			},
			ro: {
				one: 'i = 1 and v = 0',
				few: 'v != 0 or n = 0 or n != 1 and n % 100 = 1..19'
			},
			ru: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
			},
			se: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sh: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			shi: {
				one: 'i = 0 or n = 1',
				few: 'n = 2..10'
			},
			si: {
				one: 'n = 0,1 or i = 0 and f = 1'
			},
			sk: {
				one: 'i = 1 and v = 0',
				few: 'i = 2..4 and v = 0',
				many: 'v != 0'
			},
			sl: {
				one: 'v = 0 and i % 100 = 1',
				two: 'v = 0 and i % 100 = 2',
				few: 'v = 0 and i % 100 = 3..4 or v != 0'
			},
			sma: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smi: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smj: {
				one: 'n = 1',
				two: 'n = 2'
			},
			smn: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sms: {
				one: 'n = 1',
				two: 'n = 2'
			},
			sr: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14'
			},
			ti: {
				one: 'n = 0..1'
			},
			tl: {
				one: 'v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9'
			},
			tzm: {
				one: 'n = 0..1 or n = 11..99'
			},
			uk: {
				one: 'v = 0 and i % 10 = 1 and i % 100 != 11',
				few: 'v = 0 and i % 10 = 2..4 and i % 100 != 12..14',
				many: 'v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14'
			},
			wa: {
				one: 'n = 0..1'
			},
			zu: {
				one: 'i = 0 or n = 1'
			}
		},
		// jscs:enable

		/**
		 * Plural form transformations, needed for some languages.
		 *
		 * @param {integer} count
		 *            Non-localized quantifier
		 * @param {Array} forms
		 *            List of plural forms
		 * @return {string} Correct form for quantifier in this language
		 */
		convertPlural: function ( count, forms ) {
			var pluralRules,
				pluralFormIndex,
				index,
				explicitPluralPattern = new RegExp( '\\d+=', 'i' ),
				formCount,
				form;

			if ( !forms || forms.length === 0 ) {
				return '';
			}

			// Handle for Explicit 0= & 1= values
			for ( index = 0; index < forms.length; index++ ) {
				form = forms[ index ];
				if ( explicitPluralPattern.test( form ) ) {
					formCount = parseInt( form.slice( 0, form.indexOf( '=' ) ), 10 );
					if ( formCount === count ) {
						return ( form.slice( form.indexOf( '=' ) + 1 ) );
					}
					forms[ index ] = undefined;
				}
			}

			forms = $.map( forms, function ( form ) {
				if ( form !== undefined ) {
					return form;
				}
			} );

			pluralRules = this.pluralRules[ $.i18n().locale ];

			if ( !pluralRules ) {
				// default fallback.
				return ( count === 1 ) ? forms[ 0 ] : forms[ 1 ];
			}

			pluralFormIndex = this.getPluralForm( count, pluralRules );
			pluralFormIndex = Math.min( pluralFormIndex, forms.length - 1 );

			return forms[ pluralFormIndex ];
		},

		/**
		 * For the number, get the plural for index
		 *
		 * @param {integer} number
		 * @param {Object} pluralRules
		 * @return {integer} plural form index
		 */
		getPluralForm: function ( number, pluralRules ) {
			var i,
				pluralForms = [ 'zero', 'one', 'two', 'few', 'many', 'other' ],
				pluralFormIndex = 0;

			for ( i = 0; i < pluralForms.length; i++ ) {
				if ( pluralRules[ pluralForms[ i ] ] ) {
					if ( pluralRuleParser( pluralRules[ pluralForms[ i ] ], number ) ) {
						return pluralFormIndex;
					}

					pluralFormIndex++;
				}
			}

			return pluralFormIndex;
		},

		/**
		 * Converts a number using digitTransformTable.
		 *
		 * @param {number} num Value to be converted
		 * @param {boolean} integer Convert the return value to an integer
		 * @return {string} The number converted into a String.
		 */
		convertNumber: function ( num, integer ) {
			var tmp, item, i,
				transformTable, numberString, convertedNumber;

			// Set the target Transform table:
			transformTable = this.digitTransformTable( $.i18n().locale );
			numberString = String( num );
			convertedNumber = '';

			if ( !transformTable ) {
				return num;
			}

			// Check if the restore to Latin number flag is set:
			if ( integer ) {
				if ( parseFloat( num, 10 ) === num ) {
					return num;
				}

				tmp = [];

				for ( item in transformTable ) {
					tmp[ transformTable[ item ] ] = item;
				}

				transformTable = tmp;
			}

			for ( i = 0; i < numberString.length; i++ ) {
				if ( transformTable[ numberString[ i ] ] ) {
					convertedNumber += transformTable[ numberString[ i ] ];
				} else {
					convertedNumber += numberString[ i ];
				}
			}

			return integer ? parseFloat( convertedNumber, 10 ) : convertedNumber;
		},

		/**
		 * Grammatical transformations, needed for inflected languages.
		 * Invoked by putting {{grammar:form|word}} in a message.
		 * Override this method for languages that need special grammar rules
		 * applied dynamically.
		 *
		 * @param {string} word
		 * @param {string} form
		 * @return {string}
		 */
		// eslint-disable-next-line no-unused-vars
		convertGrammar: function ( word, form ) {
			return word;
		},

		/**
		 * Provides an alternative text depending on specified gender. Usage
		 * {{gender:[gender|user object]|masculine|feminine|neutral}}. If second
		 * or third parameter are not specified, masculine is used.
		 *
		 * These details may be overriden per language.
		 *
		 * @param {string} gender
		 *      male, female, or anything else for neutral.
		 * @param {Array} forms
		 *      List of gender forms
		 *
		 * @return {string}
		 */
		gender: function ( gender, forms ) {
			if ( !forms || forms.length === 0 ) {
				return '';
			}

			while ( forms.length < 2 ) {
				forms.push( forms[ forms.length - 1 ] );
			}

			if ( gender === 'male' ) {
				return forms[ 0 ];
			}

			if ( gender === 'female' ) {
				return forms[ 1 ];
			}

			return ( forms.length === 3 ) ? forms[ 2 ] : forms[ 0 ];
		},

		/**
		 * Get the digit transform table for the given language
		 * See http://cldr.unicode.org/translation/numbering-systems
		 *
		 * @param {string} language
		 * @return {Array|boolean} List of digits in the passed language or false
		 * representation, or boolean false if there is no information.
		 */
		digitTransformTable: function ( language ) {
			var tables = {
				ar: '٠١٢٣٤٥٦٧٨٩',
				fa: '۰۱۲۳۴۵۶۷۸۹',
				ml: '൦൧൨൩൪൫൬൭൮൯',
				kn: '೦೧೨೩೪೫೬೭೮೯',
				lo: '໐໑໒໓໔໕໖໗໘໙',
				or: '୦୧୨୩୪୫୬୭୮୯',
				kh: '០១២៣៤៥៦៧៨៩',
				pa: '੦੧੨੩੪੫੬੭੮੯',
				gu: '૦૧૨૩૪૫૬૭૮૯',
				hi: '०१२३४५६७८९',
				my: '၀၁၂၃၄၅၆၇၈၉',
				ta: '௦௧௨௩௪௫௬௭௮௯',
				te: '౦౧౨౩౪౫౬౭౮౯',
				th: '๐๑๒๓๔๕๖๗๘๙', // FIXME use iso 639 codes
				bo: '༠༡༢༣༤༥༦༧༨༩' // FIXME use iso 639 codes
			};

			if ( !tables[ language ] ) {
				return false;
			}

			return tables[ language ].split( '' );
		}
	};

	$.extend( $.i18n.languages, {
		'default': language
	} );
}( jQuery ) );


/***/ }),

/***/ 34517:
/*!*********************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.messagestore.js ***!
  \*********************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library - Message Store
 *
 * Copyright (C) 2012 Santhosh Thottingal
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do anything special to
 * choose one license or the other and you don't have to notify anyone which license you are using.
 * You are free to use UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageStore = function () {
		this.messages = {};
		this.sources = {};
	};

	function jsonMessageLoader( url ) {
		var deferred = $.Deferred();

		$.getJSON( url )
			.done( deferred.resolve )
			.fail( function ( jqxhr, settings, exception ) {
				$.i18n.log( 'Error in loading messages from ' + url + ' Exception: ' + exception );
				// Ignore 404 exception, because we are handling fallabacks explicitly
				deferred.resolve();
			} );

		return deferred.promise();
	}

	/**
	 * See https://github.com/wikimedia/jquery.i18n/wiki/Specification#wiki-Message_File_Loading
	 */
	MessageStore.prototype = {

		/**
		 * General message loading API This can take a URL string for
		 * the json formatted messages.
		 * <code>load('path/to/all_localizations.json');</code>
		 *
		 * This can also load a localization file for a locale <code>
		 * load( 'path/to/de-messages.json', 'de' );
		 * </code>
		 * A data object containing message key- message translation mappings
		 * can also be passed Eg:
		 * <code>
		 * load( { 'hello' : 'Hello' }, optionalLocale );
		 * </code> If the data argument is
		 * null/undefined/false,
		 * all cached messages for the i18n instance will get reset.
		 *
		 * @param {string|Object} source
		 * @param {string} locale Language tag
		 * @return {jQuery.Promise}
		 */
		load: function ( source, locale ) {
			var key = null,
				deferred = null,
				deferreds = [],
				messageStore = this;

			if ( typeof source === 'string' ) {
				// This is a URL to the messages file.
				$.i18n.log( 'Loading messages from: ' + source );
				deferred = jsonMessageLoader( source )
					.done( function ( localization ) {
						messageStore.set( locale, localization );
					} );

				return deferred.promise();
			}

			if ( locale ) {
				// source is an key-value pair of messages for given locale
				messageStore.set( locale, source );

				return $.Deferred().resolve();
			} else {
				// source is a key-value pair of locales and their source
				for ( key in source ) {
					if ( Object.prototype.hasOwnProperty.call( source, key ) ) {
						locale = key;
						// No {locale} given, assume data is a group of languages,
						// call this function again for each language.
						deferreds.push( messageStore.load( source[ key ], locale ) );
					}
				}
				return $.when.apply( $, deferreds );
			}

		},

		/**
		 * Set messages to the given locale.
		 * If locale exists, add messages to the locale.
		 *
		 * @param {string} locale
		 * @param {Object} messages
		 */
		set: function ( locale, messages ) {
			if ( !this.messages[ locale ] ) {
				this.messages[ locale ] = messages;
			} else {
				this.messages[ locale ] = $.extend( this.messages[ locale ], messages );
			}
		},

		/**
		 *
		 * @param {string} locale
		 * @param {string} messageKey
		 * @return {boolean}
		 */
		get: function ( locale, messageKey ) {
			return this.messages[ locale ] && this.messages[ locale ][ messageKey ];
		}
	};

	$.extend( $.i18n.messageStore, new MessageStore() );
}( jQuery ) );


/***/ }),

/***/ 25252:
/*!***************************************************************!*\
  !*** ./runestone/common/js/jquery_i18n/jquery.i18n.parser.js ***!
  \***************************************************************/
/***/ (() => {

/*!
 * jQuery Internationalization library
 *
 * Copyright (C) 2011-2013 Santhosh Thottingal, Neil Kandalgaonkar
 *
 * jquery.i18n is dual licensed GPLv2 or later and MIT. You don't have to do
 * anything special to choose one license or the other and you don't have to
 * notify anyone which license you are using. You are free to use
 * UniversalLanguageSelector in commercial projects as long as the copyright
 * header is left intact. See files GPL-LICENSE and MIT-LICENSE for details.
 *
 * @licence GNU General Public Licence 2.0 or later
 * @licence MIT License
 */

( function ( $ ) {
	'use strict';

	var MessageParser = function ( options ) {
		this.options = $.extend( {}, $.i18n.parser.defaults, options );
		this.language = $.i18n.languages[ String.locale ] || $.i18n.languages[ 'default' ];
		this.emitter = $.i18n.parser.emitter;
	};

	MessageParser.prototype = {

		constructor: MessageParser,

		simpleParse: function ( message, parameters ) {
			return message.replace( /\$(\d+)/g, function ( str, match ) {
				var index = parseInt( match, 10 ) - 1;

				return parameters[ index ] !== undefined ? parameters[ index ] : '$' + match;
			} );
		},

		parse: function ( message, replacements ) {
			if ( message.indexOf( '{{' ) < 0 ) {
				return this.simpleParse( message, replacements );
			}

			this.emitter.language = $.i18n.languages[ $.i18n().locale ] ||
				$.i18n.languages[ 'default' ];

			return this.emitter.emit( this.ast( message ), replacements );
		},

		ast: function ( message ) {
			var pipe, colon, backslash, anyCharacter, dollar, digits, regularLiteral,
				regularLiteralWithoutBar, regularLiteralWithoutSpace, escapedOrLiteralWithoutBar,
				escapedOrRegularLiteral, templateContents, templateName, openTemplate,
				closeTemplate, expression, paramExpression, result,
				pos = 0;

			// Try parsers until one works, if none work return null
			function choice( parserSyntax ) {
				return function () {
					var i, result;

					for ( i = 0; i < parserSyntax.length; i++ ) {
						result = parserSyntax[ i ]();

						if ( result !== null ) {
							return result;
						}
					}

					return null;
				};
			}

			// Try several parserSyntax-es in a row.
			// All must succeed; otherwise, return null.
			// This is the only eager one.
			function sequence( parserSyntax ) {
				var i, res,
					originalPos = pos,
					result = [];

				for ( i = 0; i < parserSyntax.length; i++ ) {
					res = parserSyntax[ i ]();

					if ( res === null ) {
						pos = originalPos;

						return null;
					}

					result.push( res );
				}

				return result;
			}

			// Run the same parser over and over until it fails.
			// Must succeed a minimum of n times; otherwise, return null.
			function nOrMore( n, p ) {
				return function () {
					var originalPos = pos,
						result = [],
						parsed = p();

					while ( parsed !== null ) {
						result.push( parsed );
						parsed = p();
					}

					if ( result.length < n ) {
						pos = originalPos;

						return null;
					}

					return result;
				};
			}

			// Helpers -- just make parserSyntax out of simpler JS builtin types

			function makeStringParser( s ) {
				var len = s.length;

				return function () {
					var result = null;

					if ( message.slice( pos, pos + len ) === s ) {
						result = s;
						pos += len;
					}

					return result;
				};
			}

			function makeRegexParser( regex ) {
				return function () {
					var matches = message.slice( pos ).match( regex );

					if ( matches === null ) {
						return null;
					}

					pos += matches[ 0 ].length;

					return matches[ 0 ];
				};
			}

			pipe = makeStringParser( '|' );
			colon = makeStringParser( ':' );
			backslash = makeStringParser( '\\' );
			anyCharacter = makeRegexParser( /^./ );
			dollar = makeStringParser( '$' );
			digits = makeRegexParser( /^\d+/ );
			regularLiteral = makeRegexParser( /^[^{}[\]$\\]/ );
			regularLiteralWithoutBar = makeRegexParser( /^[^{}[\]$\\|]/ );
			regularLiteralWithoutSpace = makeRegexParser( /^[^{}[\]$\s]/ );

			// There is a general pattern:
			// parse a thing;
			// if it worked, apply transform,
			// otherwise return null.
			// But using this as a combinator seems to cause problems
			// when combined with nOrMore().
			// May be some scoping issue.
			function transform( p, fn ) {
				return function () {
					var result = p();

					return result === null ? null : fn( result );
				};
			}

			// Used to define "literals" within template parameters. The pipe
			// character is the parameter delimeter, so by default
			// it is not a literal in the parameter
			function literalWithoutBar() {
				var result = nOrMore( 1, escapedOrLiteralWithoutBar )();

				return result === null ? null : result.join( '' );
			}

			function literal() {
				var result = nOrMore( 1, escapedOrRegularLiteral )();

				return result === null ? null : result.join( '' );
			}

			function escapedLiteral() {
				var result = sequence( [ backslash, anyCharacter ] );

				return result === null ? null : result[ 1 ];
			}

			choice( [ escapedLiteral, regularLiteralWithoutSpace ] );
			escapedOrLiteralWithoutBar = choice( [ escapedLiteral, regularLiteralWithoutBar ] );
			escapedOrRegularLiteral = choice( [ escapedLiteral, regularLiteral ] );

			function replacement() {
				var result = sequence( [ dollar, digits ] );

				if ( result === null ) {
					return null;
				}

				return [ 'REPLACE', parseInt( result[ 1 ], 10 ) - 1 ];
			}

			templateName = transform(
				// see $wgLegalTitleChars
				// not allowing : due to the need to catch "PLURAL:$1"
				makeRegexParser( /^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/ ),

				function ( result ) {
					return result.toString();
				}
			);

			function templateParam() {
				var expr,
					result = sequence( [ pipe, nOrMore( 0, paramExpression ) ] );

				if ( result === null ) {
					return null;
				}

				expr = result[ 1 ];

				// use a "CONCAT" operator if there are multiple nodes,
				// otherwise return the first node, raw.
				return expr.length > 1 ? [ 'CONCAT' ].concat( expr ) : expr[ 0 ];
			}

			function templateWithReplacement() {
				var result = sequence( [ templateName, colon, replacement ] );

				return result === null ? null : [ result[ 0 ], result[ 2 ] ];
			}

			function templateWithOutReplacement() {
				var result = sequence( [ templateName, colon, paramExpression ] );

				return result === null ? null : [ result[ 0 ], result[ 2 ] ];
			}

			templateContents = choice( [
				function () {
					var res = sequence( [
						// templates can have placeholders for dynamic
						// replacement eg: {{PLURAL:$1|one car|$1 cars}}
						// or no placeholders eg:
						// {{GRAMMAR:genitive|{{SITENAME}}}
						choice( [ templateWithReplacement, templateWithOutReplacement ] ),
						nOrMore( 0, templateParam )
					] );

					return res === null ? null : res[ 0 ].concat( res[ 1 ] );
				},
				function () {
					var res = sequence( [ templateName, nOrMore( 0, templateParam ) ] );

					if ( res === null ) {
						return null;
					}

					return [ res[ 0 ] ].concat( res[ 1 ] );
				}
			] );

			openTemplate = makeStringParser( '{{' );
			closeTemplate = makeStringParser( '}}' );

			function template() {
				var result = sequence( [ openTemplate, templateContents, closeTemplate ] );

				return result === null ? null : result[ 1 ];
			}

			expression = choice( [ template, replacement, literal ] );
			paramExpression = choice( [ template, replacement, literalWithoutBar ] );

			function start() {
				var result = nOrMore( 0, expression )();

				if ( result === null ) {
					return null;
				}

				return [ 'CONCAT' ].concat( result );
			}

			result = start();

			/*
			 * For success, the pos must have gotten to the end of the input
			 * and returned a non-null.
			 * n.b. This is part of language infrastructure, so we do not throw an
			 * internationalizable message.
			 */
			if ( result === null || pos !== message.length ) {
				throw new Error( 'Parse error at position ' + pos.toString() + ' in input: ' + message );
			}

			return result;
		}

	};

	$.extend( $.i18n.parser, new MessageParser() );
}( jQuery ) );

/***/ }),

/***/ 66563:
/*!***********************************************!*\
  !*** ./runestone/common/js/presenter_mode.js ***!
  \***********************************************/
/***/ (() => {

var codeExercises;
var presenterCssLink;
var presentModeInitialized = false;

function presentToggle() {
    if (!presentModeInitialized) {
        presentModeSetup();
        presentModeInitialized = true;
    }
    let bod = $("body");
    let presentClass = "present";
    let fullHeightClass = "full-height";
    let bottomClass = "bottom";
    if (bod.hasClass(presentClass)) {
        $(".section *")
            .not(
                "h1, .presentation-title, .btn-presenter, .runestone, .runestone *, .section, .pre, code"
            )
            .removeClass("hidden"); //show everything
        $("#completionButton").removeClass("hidden");
        bod.removeClass(presentClass);
        $("." + fullHeightClass).removeClass(fullHeightClass);
        $("." + bottomClass).removeClass(bottomClass);
        localStorage.setItem("presentMode", "text");
        codeExercises.removeClass("hidden");
        presenterCssLink.disabled = true; // disable present_mode.css
    } else {
        $(".section *")
            .not(
                "h1, .presentation-title, .btn-presenter, .runestone, .runestone *, .section, .pre, code"
            )
            .addClass("hidden"); // hide extraneous stuff
        $("#completionButton").addClass("hidden");
        bod.addClass(presentClass);
        bod.addClass(fullHeightClass);
        $("html").addClass(fullHeightClass);
        $(".section .runestone").addClass(fullHeightClass);
        $(".ac-caption").addClass(bottomClass);
        localStorage.setItem("presentMode", presentClass);
        loadPresenterCss(); // present_mode.css should only apply when in presenter mode.
        activateExercise();
    }
}

function loadPresenterCss() {
    presenterCssLink = document.createElement("link");
    presenterCssLink.type = "text/css";
    presenterCssLink.href = "../_static/presenter_mode.css";
    presenterCssLink.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(presenterCssLink);
}

function presentModeSetup() {
    // moved this out of configure
    let dataComponent = $("[data-childcomponent]");

    // this still leaves some things semi-messed up when you exit presenter mode.
    // but instructors will probably just learn to refresh the page.
    dataComponent.addClass("runestone");
    dataComponent.parent().closest("div").not(".section").addClass("runestone");
    dataComponent.parent().closest("div").css("max-width", "none");

    dataComponent.each(function (index) {
        let me = $(this);
        $(this)
            .find(".ac_code_div, .ac_output")
            .wrapAll("<div class='ac-block' style='width: 100%;'></div>");
    });

    codelensListener(500);
    $(".section img").wrap('<div class="runestone">');
    codeExercises = $(".runestone").not(".runestone .runestone");
    // codeExercises.each(function(){
    $("h1").before(
        "<div class='presentation-title'> \
        <button class='prev-exercise btn-presenter btn-grey-outline' onclick='prevExercise()'>Back</button> \
        <button class='next-exercise btn-presenter btn-grey-solid' onclick='nextExercise()'>Next</button> \
      </div>"
    );
}
function getActiveExercise() {
    return (active = codeExercises.filter(".active"));
}

function activateExercise(index) {
    if (typeof index == "undefined") {
        index = 0;
    }

    let active = getActiveExercise();

    if (codeExercises.length) {
        active.removeClass("active");
        active = $(codeExercises[index]).addClass("active");
        active.removeClass("hidden");
        codeExercises.not(codeExercises.filter(".active")).addClass("hidden");
    }
}

function nextExercise() {
    let active = getActiveExercise();
    let nextIndex = codeExercises.index(active) + 1;
    if (nextIndex < codeExercises.length) {
        activateExercise(nextIndex);
    }
}

function prevExercise() {
    let active = getActiveExercise();
    let prevIndex = codeExercises.index(active) - 1;
    if (prevIndex >= 0) {
        activateExercise(prevIndex);
    }
}

function configure() {
    let rightNav = $(".navbar-right");
    rightNav.prepend(
        "<li class='dropdown view-toggle'> \
      <label>View: \
        <select class='mode-select'> \
          <option value='text'>Textbook</option> \
          <option value='present'>Code Presenter</option> \
        </select> \
      </label> \
    </li>"
    );

    let modeSelect = $(".mode-select").change(presentToggle);
}

function codelensListener(duration) {
    // $(".ExecutionVisualizer").length ? configureCodelens() : setTimeout(codelensListener, duration);
    // configureCodelens();
}

function configureCodelens() {
    let acCodeTitle = document.createElement("h4");
    acCodeTitle.textContent = "Active Code Window";
    let acCode = $(".ac_code_div").removeClass("col-md-12");
    $(".ac_code_div").addClass("col-md-6");
    acCode.prepend(acCodeTitle);

    acOutTitle = document.createElement("h4");
    acOutTitle.textContent = "Output Window";
    let acOut = $(".ac_output").addClass("col-md-6");
    $(".ac_output").prepend(acOutTitle);

    let sketchpadTitle = document.createElement("h4");
    sketchpadTitle.textContent = "Sketchpad";
    let sketchpad = document.createElement("span");
    $(sketchpad).addClass("sketchpad");
    let sketchpadContainer = document.createElement("div");
    $(sketchpadContainer).addClass("sketchpad-container");
    sketchpadContainer.appendChild(sketchpadTitle);
    sketchpadContainer.appendChild(sketchpad);
    //$('.ac_output').append(sketchpadContainer);

    let visualizers = $(".ExecutionVisualizer");

    console.log("Econtainer: ", this.eContainer);

    $("[data-childcomponent]").on("click", "button.row-mode", function () {
        $(this).closest("[data-childcomponent]").removeClass("card-mode");
        $(this).closest("[data-childcomponent]").addClass("row-mode");
        $(this).next(".card-mode").removeClass("active-layout");
        $(this).addClass("active-layout");
    });

    $("[data-childcomponent]").on("click", "button.card-mode", function () {
        $(this).closest("[data-childcomponent]").removeClass("row-mode");
        $(this).closest("[data-childcomponent]").addClass("card-mode");
        $(this).prev(".row-mode").removeClass("active-layout");
        $(this).addClass("active-layout");
    });

    $("[data-childcomponent] .ac_section").each(function () {
        $(this).prepend(
            '<div class="presentation-options"><button class="row-mode layout-btn"><img src="../_images/row-btn-content.png" alt="Rows"></button><button class="card-mode layout-btn"><img src="../_images/card-btn-content.png" alt="Card"></button></div>'
        );
    });

    visualizers.each(function (index) {
        let me = $(this);
        let col1 = me.find("#vizLayoutTdFirst");
        let col2 = me.find("#vizLayoutTdSecond");
        let dataVis = me.find("#dataViz");
        let stackHeapTable = me.find("#stackHeapTable");
        let output = me.find("#progOutputs");
        output.css("display", "block");
        me.parent().prepend(
            "<div class='presentation-title'><div class='title-text'> Example " +
                (Number(index) + 1) +
                "</div></div>"
        );
    });

    acCode.each(function () {
        let section = $(this).closest(".ac-block").parent();
        console.log(section, section.length);
        section.append(sketchpadContainer);
    });

    $("button.card-mode").click();

    let modeSelect = $(".mode-select");
    let mode = localStorage.getItem("presentMode");
    if (mode == "present") {
        modeSelect.val("present");
        modeSelect.change();
    }
}

//$(document).ready(configure);
$(document).bind("runestone:login-complete", function () {
    // if user is instructor, enable presenter mode
    if (eBookConfig.isInstructor) {
        configure();
    }
});


/***/ }),

/***/ 75106:
/*!**************************************!*\
  !*** ./runestone/common/js/theme.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSwitch": () => (/* binding */ getSwitch),
/* harmony export */   "switchTheme": () => (/* binding */ switchTheme)
/* harmony export */ });
function getSwitch() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
}

function switchTheme() {

	var checkBox = document.getElementById("checkbox");
    if (checkBox.checked == true) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}


/***/ }),

/***/ 70114:
/*!************************************************!*\
  !*** ./runestone/common/js/user-highlights.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_user_highlights_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/user-highlights.css */ 97286);
/*global variable declarations*/






function getCompletions() {
    // Get the completion status
    if (
        window.location.href.match(
            /(index.html|toctree.html|genindex.html|navhelp.html|toc.html|assignments.html|Exercises.html)/
        )
    ) {
        return;
    }

    var currentPathname = window.location.pathname;
    if (currentPathname.indexOf("?") !== -1) {
        currentPathname = currentPathname.substring(
            0,
            currentPathname.lastIndexOf("?")
        );
    }
    var data = { lastPageUrl: currentPathname };
    jQuery
        .ajax({
            url: eBookConfig.ajaxURL + "getCompletionStatus",
            data: data,
            async: false,
        })
        .done(function (data) {
            if (data != "None") {
                var completionData = $.parseJSON(data);
                var completionClass, completionMsg;
                if (completionData[0].completionStatus == 1) {
                    completionClass = "buttonConfirmCompletion";
                    completionMsg =
                        "<i class='glyphicon glyphicon-ok'></i> Completed. Well Done!";
                } else {
                    completionClass = "buttonAskCompletion";
                    completionMsg = "Mark as Completed";
                }
                $("#main-content").append(
                    '<div style="text-align:center"><button class="btn btn-lg ' +
                        completionClass +
                        '" id="completionButton">' +
                        completionMsg +
                        "</button></div>"
                );
            }
        });
}

function showLastPositionBanner() {
    var lastPositionVal = $.getUrlVar("lastPosition");
    if (typeof lastPositionVal !== "undefined") {
        $("body").append(
            '<img src="../_static/last-point.png" style="position:absolute; padding-top:55px; left: 10px; top: ' +
                parseInt(lastPositionVal) +
                'px;"/>'
        );
        $("html, body").animate({ scrollTop: parseInt(lastPositionVal) }, 1000);
    }
}

function addNavigationAndCompletionButtons() {
    if (
        window.location.href.match(
            /(index.html|genindex.html|navhelp.html|toc.html|assignments.html|Exercises.html|toctree.html)/
        )
    ) {
        return;
    }
    var navLinkBgRightHiddenPosition = -$("#navLinkBgRight").outerWidth() - 5;
    var navLinkBgRightHalfOpen;
    var navLinkBgRightFullOpen = 0;

    if ($("#completionButton").hasClass("buttonAskCompletion")) {
        navLinkBgRightHalfOpen = navLinkBgRightHiddenPosition + 70;
    } else if ($("#completionButton").hasClass("buttonConfirmCompletion")) {
        navLinkBgRightHalfOpen = 0;
    }
    var relationsNextIconInitialPosition = $("#relations-next").css("right");
    var relationsNextIconNewPosition = -(navLinkBgRightHiddenPosition + 35);

    $("#navLinkBgRight").css("right", navLinkBgRightHiddenPosition).show();
    var navBgShown = false;
    $(window).scroll(function () {
        if (
            $(window).scrollTop() + $(window).height() ==
            $(document).height()
        ) {
            $("#navLinkBgRight").animate(
                { right: navLinkBgRightHalfOpen },
                200
            );
            $("#navLinkBgLeft").animate({ left: "0px" }, 200);
            if ($("#completionButton").hasClass("buttonConfirmCompletion")) {
                $("#relations-next").animate(
                    { right: relationsNextIconNewPosition },
                    200
                );
            }
            navBgShown = true;
        } else if (navBgShown) {
            $("#navLinkBgRight").animate(
                { right: navLinkBgRightHiddenPosition },
                200
            );
            $("#navLinkBgLeft").animate({ left: "-65px" }, 200);
            $("#relations-next").animate({
                right: relationsNextIconInitialPosition,
            });
            navBgShown = false;
        }
    });

    var completionFlag = 0;
    if ($("#completionButton").hasClass("buttonAskCompletion")) {
        completionFlag = 0;
    } else {
        completionFlag = 1;
    }
    $("#completionButton").on("click", function () {
        if ($(this).hasClass("buttonAskCompletion")) {
            $(this)
                .removeClass("buttonAskCompletion")
                .addClass("buttonConfirmCompletion")
                .html(
                    "<i class='glyphicon glyphicon-ok'></i> Completed. Well Done!"
                );
            $("#navLinkBgRight").animate({ right: navLinkBgRightFullOpen });
            $("#relations-next").animate({
                right: relationsNextIconNewPosition,
            });
            navLinkBgRightHalfOpen = 0;
            completionFlag = 1;
        } else if ($(this).hasClass("buttonConfirmCompletion")) {
            $(this)
                .removeClass("buttonConfirmCompletion")
                .addClass("buttonAskCompletion")
                .html("Mark as Completed");
            navLinkBgRightHalfOpen = navLinkBgRightHiddenPosition + 70;
            $("#navLinkBgRight").animate({ right: navLinkBgRightHalfOpen });
            $("#relations-next").animate({
                right: relationsNextIconInitialPosition,
            });
            completionFlag = 0;
        }
        processPageState(completionFlag);
    });

    $(window).on("beforeunload", function (e) {
        if (completionFlag == 0) {
            processPageState(completionFlag);
        }
    });
}

function decorateTableOfContents() {
    if (
        window.location.href.toLowerCase().indexOf("toc.html") != -1 ||
        window.location.href.toLowerCase().indexOf("index.html") != -1
    ) {
        jQuery.get(eBookConfig.ajaxURL + "getAllCompletionStatus", function (
            data
        ) {
            var subChapterList;
            if (data != "None") {
                subChapterList = $.parseJSON(data);

                var allSubChapterURLs = $("#main-content div li a");
                $.each(subChapterList, function (index, item) {
                    for (var s = 0; s < allSubChapterURLs.length; s++) {
                        if (
                            allSubChapterURLs[s].href.indexOf(
                                item.chapterName + "/" + item.subChapterName
                            ) != -1
                        ) {
                            if (item.completionStatus == 1) {
                                $(allSubChapterURLs[s].parentElement)
                                    .addClass("completed")
                                    .append(
                                        '<span class="infoTextCompleted">- Completed this topic on ' +
                                            item.endDate +
                                            "</span>"
                                    )
                                    .children()
                                    .first()
                                    .hover(
                                        function () {
                                            $(this)
                                                .next(".infoTextCompleted")
                                                .show();
                                        },
                                        function () {
                                            $(this)
                                                .next(".infoTextCompleted")
                                                .hide();
                                        }
                                    );
                            } else if (item.completionStatus == 0) {
                                $(allSubChapterURLs[s].parentElement)
                                    .addClass("active")
                                    .append(
                                        '<span class="infoTextActive">Last read this topic on ' +
                                            item.endDate +
                                            "</span>"
                                    )
                                    .children()
                                    .first()
                                    .hover(
                                        function () {
                                            $(this)
                                                .next(".infoTextActive")
                                                .show();
                                        },
                                        function () {
                                            $(this)
                                                .next(".infoTextActive")
                                                .hide();
                                        }
                                    );
                            }
                        }
                    }
                });
            }
        });
        var data = { course: eBookConfig.course };
        jQuery.get(eBookConfig.ajaxURL + "getlastpage", data, function (data) {
            var lastPageData;
            if (data != "None") {
                lastPageData = $.parseJSON(data);
                if (lastPageData[0].lastPageChapter != null) {
                    $("#continue-reading")
                        .show()
                        .html(
                            '<div id="jump-to-chapter" class="alert alert-info" ><strong>You were Last Reading:</strong> ' +
                                lastPageData[0].lastPageChapter +
                                (lastPageData[0].lastPageSubchapter
                                    ? " &gt; " +
                                      lastPageData[0].lastPageSubchapter
                                    : "") +
                                ' <a href="' +
                                lastPageData[0].lastPageUrl +
                                "?lastPosition=" +
                                lastPageData[0].lastPageScrollLocation +
                                '">Continue Reading</a></div>'
                        );
                }
            }
        });
    }
}

function enableCompletions() {
    getCompletions();
    showLastPositionBanner();
    addNavigationAndCompletionButtons();
    decorateTableOfContents();
}

// call enable user highlights after login
$(document).bind("runestone:login", enableCompletions);

function processPageState(completionFlag) {
    /*Log last page visited*/
    var currentPathname = window.location.pathname;
    if (currentPathname.indexOf("?") !== -1) {
        currentPathname = currentPathname.substring(
            0,
            currentPathname.lastIndexOf("?")
        );
    }
    var data = {
        lastPageUrl: currentPathname,
        lastPageScrollLocation: $(window).scrollTop(),
        completionFlag: completionFlag,
        course: eBookConfig.course,
    };
    $(document).ajaxError(function (e, jqhxr, settings, exception) {
        console.log("Request Failed for " + settings.url);
        console.log(e);
    });
    jQuery.ajax({
        url: eBookConfig.ajaxURL + "updatelastpage",
        data: data,
        async: true,
    });
}

$.extend({
    getUrlVars: function () {
        var vars = [],
            hash;
        var hashes = window.location.search
            .slice(window.location.search.indexOf("?") + 1)
            .split("&");
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split("=");
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return $.getUrlVars()[name];
    },
});


/***/ }),

/***/ 11968:
/*!*****************************************************************************************************************!*\
  !*** ./runestone/common/project_template/_templates/plugin_layouts/sphinx_bootstrap/static/bootstrap-sphinx.js ***!
  \*****************************************************************************************************************/
/***/ (() => {

(function ($) {
  /**
   * Patch TOC list.
   *
   * Will mutate the underlying span to have a correct ul for nav.
   *
   * @param $span: Span containing nested UL's to mutate.
   * @param minLevel: Starting level for nested lists. (1: global, 2: local).
   */
  var patchToc = function ($ul, minLevel) {
    var findA,
      patchTables,
      $localLi;

    // Find all a "internal" tags, traversing recursively.
    findA = function ($elem, level) {
      level = level || 0;
      var $items = $elem.find("> li > a.internal, > ul, > li > ul");

      // Iterate everything in order.
      $items.each(function (index, item) {
        var $item = $(item),
          tag = item.tagName.toLowerCase(),
          $childrenLi = $item.children('li'),
          $parentLi = $($item.parent('li'), $item.parent().parent('li'));

        // Add dropdowns if more children and above minimum level.
        if (tag === 'ul' && level >= minLevel && $childrenLi.length > 0) {
          $parentLi
            .addClass('dropdown-submenu')
            .children('a').first().attr('tabindex', -1);

          $item.addClass('dropdown-menu');
        }

        findA($item, level + 1);
      });
    };

    findA($ul);
  };

  /**
   * Patch all tables to remove ``docutils`` class and add Bootstrap base
   * ``table`` class.
   */
  patchTables = function () {
    $("table.docutils")
      .removeClass("docutils")
      .addClass("table")
      .attr("border", 0);
  };

  $(document).ready(function () {

    /*
     * Scroll the window to avoid the topnav bar
     * https://github.com/twitter/bootstrap/issues/1768
     */
    if ($("#navbar.navbar-fixed-top").length > 0) {
      var navHeight = $("#navbar").height(),
        shiftWindow = function() { scrollBy(0, -navHeight - 10); };

      if (location.hash) {
        shiftWindow();
      }

      window.addEventListener("hashchange", shiftWindow);
    }

    // Add styling, structure to TOC's.
    $(".dropdown-menu").each(function () {
      $(this).find("ul").each(function (index, item){
        var $item = $(item);
        $item.addClass('unstyled');
      });
    });

    // Global TOC.
    if ($("ul.globaltoc li").length) {
      patchToc($("ul.globaltoc"), 1);
    } else {
      // Remove Global TOC.
      $(".globaltoc-container").remove();
    }

    // Local TOC.
    patchToc($("ul.localtoc"), 2);

    // Mutate sub-lists (for bs-2.3.0).
    $(".dropdown-menu ul").not(".dropdown-menu").each(function () {
      var $ul = $(this),
        $parent = $ul.parent(),
        tag = $parent[0].tagName.toLowerCase(),
        $kids = $ul.children().detach();

      // Replace list with items if submenu header.
      if (tag === "ul") {
        $ul.replaceWith($kids);
      } else if (tag === "li") {
        // Insert into previous list.
        $parent.after($kids);
        $ul.remove();
      }
    });

    // Add divider in page TOC.
    $localLi = $("ul.localtoc li");
    if ($localLi.length > 2) {
      $localLi.first().after('<li class="divider"></li>');
    }

    // Enable dropdown.
    $('.dropdown-toggle').dropdown();

    // Patch tables.
    patchTables();

    // Add Note, Warning styles.
    $('div.note').addClass('alert').addClass('alert-info');
    $('div.warning').addClass('alert').addClass('alert-warning');

    // Inline code styles to Bootstrap style.
    $('tt.docutils.literal').not(".xref").each(function (i, e) {
      // ignore references
      if (!$(e).parent().hasClass("reference")) {
        $(e).replaceWith(function () {
          return $("<code />").text($(this).text());
        });
      }});
  });
}(window.jQuery));


/***/ }),

/***/ 36350:
/*!**************************!*\
  !*** ./webpack.index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "runestone_auto_import": () => (/* binding */ runestone_auto_import),
/* harmony export */   "runestone_import": () => (/* binding */ runestone_import)
/* harmony export */ });
/* harmony import */ var jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-ui/jquery-ui.js */ 86301);
/* harmony import */ var jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_jquery_ui_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_themes_base_jquery_ui_all_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/themes/base/jquery.ui.all.css */ 46286);
/* harmony import */ var _runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runestone/common/js/jquery.idle-timer.js */ 26886);
/* harmony import */ var _runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_idle_timer_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.js */ 99283);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.bidi.js */ 43793);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_emitter_bidi_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.emitter.js */ 30423);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_emitter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.fallbacks.js */ 9001);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_fallbacks_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.messagestore.js */ 34517);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_messagestore_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.parser.js */ 25252);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_parser_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./runestone/common/js/jquery_i18n/jquery.i18n.language.js */ 64793);
/* harmony import */ var _runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_jquery_i18n_jquery_i18n_language_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.js */ 43734);
/* harmony import */ var bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ 72814);
/* harmony import */ var _runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./runestone/common/project_template/_templates/plugin_layouts/sphinx_bootstrap/static/bootstrap-sphinx.js */ 11968);
/* harmony import */ var _runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_project_template_templates_plugin_layouts_sphinx_bootstrap_static_bootstrap_sphinx_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _runestone_common_css_runestone_custom_sphinx_bootstrap_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./runestone/common/css/runestone-custom-sphinx-bootstrap.css */ 55284);
/* harmony import */ var _runestone_common_js_bookfuncs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./runestone/common/js/bookfuncs.js */ 21294);
/* harmony import */ var _runestone_common_js_user_highlights_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./runestone/common/js/user-highlights.js */ 70114);
/* harmony import */ var _runestone_matrixeq_css_matrixeq_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./runestone/matrixeq/css/matrixeq.css */ 34044);
/* harmony import */ var _runestone_webgldemo_css_webglinteractive_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./runestone/webgldemo/css/webglinteractive.css */ 36310);
/* harmony import */ var _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./runestone/common/js/theme.js */ 75106);
/* harmony import */ var _runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./runestone/common/js/presenter_mode.js */ 66563);
/* harmony import */ var _runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_runestone_common_js_presenter_mode_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _runestone_common_css_presenter_mode_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./runestone/common/css/presenter_mode.css */ 60976);
// ***********************************************************************************
// |docname| - A framework allowing a Runestone component to load only the JS it needs
// ***********************************************************************************
// The JavaScript required by all Runestone components is quite large and results in slow page loads. This approach enables a Runestone component to load only the JavaScript it needs, rather than loading JavaScript for all the components regardless of which are actually used.
//
// To accomplish this, webpack's split-chunks ability analyzes all JS, starting from this file. The dynamic imports below are transformed by webpack into the dynamic fetches of just the JS required by each file and all its dependencies. (If using static imports, webpack will assume that all files are already statically loaded via script tags, defeating the purpose of this framework.)
//
// However, this approach leads to complexity:
//
// -    The ``data-component`` attribute of each component must be kept in sync with the keys of the ``module_map`` below.
// -    The values in the ``module_map`` must be kept in sync with the JavaScript files which implement each of the components.




// Static imports
// ==============
// These imports are (we assume) needed by all pages. However, it would be much better to load these in the modules that actually use them.
//
// These are static imports; code in `dynamically loaded components`_ deals with dynamic imports.
//
// jQuery-related imports.











// Bootstrap





// Misc



// These belong in dynamic imports for the obvious component; however, these components don't include a ``data-component`` attribute.



// These are only needed for the Runestone book, but not in a library mode (such as pretext). I would prefer to dynamically load them. However, these scripts are so small I haven't bothered to do so.





// Dynamically loaded components
// =============================
// This provides a list of modules that components can dynamically import. Webpack will create a list of imports for each based on its analysis.
const module_map = {
    // Wrap each import in a function, so that it won't occur until the function is called. While something cleaner would be nice, webpack can't analyze things like ``import(expression)``.
    //
    // The keys must match the value of each component's ``data-component`` attribute -- the ``runestone_import`` and ``runestone_auto_import`` functions assume this.
    activecode: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("vendors-node_modules_codemirror_mode_htmlmixed_htmlmixed_js-node_modules_handsontable_es_inde-1af827"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-runestone_activecode_js_acfactory_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/activecode/js/acfactory.js */ 86902)),
    // Always import the timed version of a component if available, since the timed components also define the component's factory and include the component as well. Note that ``acfactory`` imports the timed components of ActiveCode, so it follows this pattern.
    clickablearea: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_clickableArea_js_timedclickable_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/clickableArea/js/timedclickable.js */ 61581)),
    codelens: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("runestone_codelens_js_codelens_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/codelens/js/codelens.js */ 12882)),
    datafile: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_datafile_js_datafile_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/datafile/js/datafile.js */ 55789)),
    dragndrop: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_dragndrop_js_timeddnd_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/dragndrop/js/timeddnd.js */ 47496)),
    fillintheblank: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_fitb_js_timedfitb_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/fitb/js/timedfitb.js */ 74309)),
    khanex: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_khanex_js_khanex_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/khanex/js/khanex.js */ 13435)),
    lp_build: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_lp_js_lp_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/lp/js/lp.js */ 2013)),
    multiplechoice: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_mchoice_js_timedmc_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/mchoice/js/timedmc.js */ 95983)),
    parsons: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_parsons_js_timedparsons_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/parsons/js/timedparsons.js */ 79661)),
    poll: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_poll_js_poll_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/poll/js/poll.js */ 37350)),
    quizly: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_quizly_js_quizly_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/quizly/js/quizly.js */ 16207)),
    reveal: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_reveal_js_reveal_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/reveal/js/reveal.js */ 12632)),
    selectquestion: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_selectquestion_js_selectone_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/selectquestion/js/selectone.js */ 63931)),
    shortanswer: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_shortanswer_js_timed_shortanswer_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/shortanswer/js/timed_shortanswer.js */ 87483)),
    showeval: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_showeval_js_showEval_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/showeval/js/showEval.js */ 6224)),
    spreadsheet: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_jexcel_dist_jexcel_js-node_modules_jexcel_dist_jexcel_css"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_spreadsheet_js_spreadsheet_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/spreadsheet/js/spreadsheet.js */ 60611)),
    tabbedStuff: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_tabbedStuff_js_tabbedstuff_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/tabbedStuff/js/tabbedstuff.js */ 97887)),
    timedAssessment: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_codemirror_mode_clike_clike_js-node_modules_codemirror_mode_javascript_j-ea0e03"), __webpack_require__.e("vendors-node_modules_codemirror_mode_htmlmixed_htmlmixed_js-node_modules_handsontable_es_inde-1af827"), __webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_codelens_js_pytutor-embed_bundle_js"), __webpack_require__.e("node_modules_moment_locale_sync_recursive_-runestone_activecode_js_acfactory_js"), __webpack_require__.e("runestone_parsons_js_timedparsons_js"), __webpack_require__.e("runestone_mchoice_js_timedmc_js"), __webpack_require__.e("runestone_dragndrop_js_timeddnd_js"), __webpack_require__.e("runestone_selectquestion_js_selectone_js"), __webpack_require__.e("runestone_clickableArea_js_timedclickable_js"), __webpack_require__.e("runestone_fitb_js_timedfitb_js"), __webpack_require__.e("runestone_shortanswer_js_timed_shortanswer_js"), __webpack_require__.e("runestone_timed_js_timed_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/timed/js/timed.js */ 58707)),
    wavedrom: () => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_wavedrom_lib_process-all_js-node_modules_wavedrom_lib_wave-skin_js"), __webpack_require__.e("runestone_wavedrom_js_wavedrom_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/wavedrom/js/wavedrom.js */ 32405)),
    // TODO: since this isn't in a ``data-component``, need to trigger an import of this code manually.
    webwork: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_webwork_js_webwork_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/webwork/js/webwork.js */ 66142)),
    youtube: () => Promise.all(/*! import() */[__webpack_require__.e("runestone_common_js_runestonebase_js"), __webpack_require__.e("runestone_video_js_runestonevideo_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./runestone/video/js/runestonevideo.js */ 48657)),
}

// .. _dynamic import machinery:
//
// Dynamic import machinery
// ========================
// Fulfill a promise when the Runestone pre-login complete event occurs.
let pre_login_complete_promise = new Promise(resolve => $(document).bind("runestone:pre-login-complete", resolve));

// Provide a simple function to import the JS for all components on the page.
function runestone_auto_import() {
    // Create a set of ``data-component`` values, to avoid duplication.
    const s = new Set(
        // All Runestone components have a ``data-component`` attribute.
        $("[data-component]").map(
            // Extract the value of the data-component attribute.
            (index, element) => $(element).attr("data-component")
            // Switch from a jQuery object back to an array, passing that to the Set constructor.
        ).get()
    );

    // Load JS for each of the components found.
    const a = [...s].map(value =>
        // If there's no JS for this component, return an empty Promise.
        (module_map[value] || (() => Promise.resolve()))()
    );

    // Send the Runestone login complete event when all JS is loaded and the pre-login is also complete.
    Promise.all([pre_login_complete_promise, ...a]).then(() => $(document).trigger("runestone:login-complete"));
}

// Load component JS when the document is ready.
$(document).ready(runestone_auto_import);

// Provide a function to import one specific Runestone component.
// the import function inside module_map is async -- runestone_import
// should be awaited when necessary to ensure the import completes
async function runestone_import(component_name) {
    return module_map[component_name]();
}

async function popupScratchAC() {
    // load the activecode bundle
    await runestone_import("activecode");
    // scratchDiv will be defined if we have already created a scratch
    // activecode.  If its not defined then we need to get it ready to toggle
    if (!eBookConfig.scratchDiv) {
        window.ACFactory.createScratchActivecode();
        let divid = eBookConfig.scratchDiv
        window.edList[divid] = ACFactory.createActiveCode($(`#${divid}`)[0],
            eBookConfig.acDefaultLanguage);
        if (eBookConfig.isLoggedIn) {
            window.edList[divid].enableSaveLoad();
        }
    }
    window.ACFactory.toggleScratchActivecode();
}

// Set the directory containing this script as the `path <https://webpack.js.org/guides/public-path/#on-the-fly>`_ for all webpacked scripts.
const script_src = document.currentScript.src;
__webpack_require__.p = script_src.substring(0, script_src.lastIndexOf('/') + 1);


// Manual exports
// ==============
// Webpack's ``output.library`` setting doesn't seem to work with the split chunks plugin; do all exports manually through the ``window`` object instead.
const rc = {};
rc.runestone_import = runestone_import;
rc.runestone_auto_import = runestone_auto_import;
rc.getSwitch = _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__.getSwitch;
rc.switchTheme = _runestone_common_js_theme_js__WEBPACK_IMPORTED_MODULE_18__.switchTheme;
rc.popupScratchAC = popupScratchAC;
window.runestoneComponents = rc;


/***/ }),

/***/ 73609:
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_js-node_modules_jquery-ui_jquery-ui_js-node_-e60694"], () => (__webpack_exec__(36350)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcHJlc2VudGVyX21vZGUuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy91c2VyLWhpZ2hsaWdodHMuY3NzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvbWF0cml4ZXEvY3NzL21hdHJpeGVxLmNzcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3ByZXNlbnRlcl9tb2RlLmNzcz83YTg0Iiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9ydW5lc3RvbmUtY3VzdG9tLXNwaGlueC1ib290c3RyYXAuY3NzP2QzZTQiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vY3NzL3VzZXItaGlnaGxpZ2h0cy5jc3M/NWIzZCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL21hdHJpeGVxL2Nzcy9tYXRyaXhlcS5jc3M/MDMxZCIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYmdsZGVtby9jc3Mvd2ViZ2xpbnRlcmFjdGl2ZS5jc3M/MjUwZSIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9ib29rZnVuY3MuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5LmlkbGUtdGltZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZW1pdHRlci5iaWRpLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4uZmFsbGJhY2tzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmxhbmd1YWdlLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLm1lc3NhZ2VzdG9yZS5qcyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvcHJlc2VudGVyX21vZGUuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvdXNlci1oaWdobGlnaHRzLmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29tbW9uL3Byb2plY3RfdGVtcGxhdGUvX3RlbXBsYXRlcy9wbHVnaW5fbGF5b3V0cy9zcGhpbnhfYm9vdHN0cmFwL3N0YXRpYy9ib290c3RyYXAtc3BoaW54LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi93ZWJwYWNrLmluZGV4LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxrREFBa0Qsb0JBQW9CLEtBQUsscUJBQXFCLHNCQUFzQixLQUFLLHNDQUFzQyxvQkFBb0IsS0FBSyx5RkFBeUYsdUJBQXVCLEtBQUssaUJBQWlCLHNCQUFzQixLQUFLLHFCQUFxQixzQkFBc0IsS0FBSyxnQkFBZ0IsMkJBQTJCLGtCQUFrQixLQUFLLHdCQUF3Qiw0QkFBNEIsS0FBSyx5Q0FBeUMsZ0JBQWdCLE9BQU8saURBQWlELHlCQUF5QixLQUFLLG9CQUFvQiwrQkFBK0IsS0FBSyx5QkFBeUIsa0JBQWtCLEtBQUssNEJBQTRCLG9DQUFvQyxLQUFLLGlGQUFpRixjQUFjLEtBQUssNkJBQTZCLG9CQUFvQixLQUFLLHNDQUFzQyxxQkFBcUIsS0FBSywwQ0FBMEMsa0JBQWtCLHNCQUFzQixLQUFLLHNCQUFzQix5QkFBeUIsS0FBSyxxQkFBcUIseUJBQXlCLEtBQUssd0JBQXdCLHFCQUFxQixLQUFLLDJHQUEyRyxvQkFBb0IsS0FBSywyQkFBMkIsY0FBYyxLQUFLLDJCQUEyQixjQUFjLEtBQUssNEJBQTRCLGNBQWMsS0FBSywyQkFBMkIsY0FBYyxLQUFLLHNCQUFzQiwrQkFBK0IscUJBQXFCLGlCQUFpQixLQUFLLG1CQUFtQiw0QkFBNEIsS0FBSywyQ0FBMkMseUJBQXlCLEtBQUssa0RBQWtELGtCQUFrQixLQUFLLG1DQUFtQyx1QkFBdUIsS0FBSyxrQkFBa0Isb0JBQW9CLHlCQUF5QixLQUFLLDRCQUE0QixxQkFBcUIsdUJBQXVCLEtBQUsscURBQXFELGtCQUFrQixxQkFBcUIsa0JBQWtCLHNCQUFzQixLQUFLLCtCQUErQix5QkFBeUIsS0FBSyx1QkFBdUIsc0JBQXNCLEtBQUssbUJBQW1CLHFCQUFxQixzQkFBc0IsS0FBSyx3QkFBd0Isb0NBQW9DLHVCQUF1QixLQUFLLG9CQUFvQixnQkFBZ0Isc0JBQXNCLHlCQUF5Qix1QkFBdUIsS0FBSyx5REFBeUQscUJBQXFCLGdCQUFnQixLQUFLLCtCQUErQixvQkFBb0IsMEJBQTBCLGdDQUFnQyxLQUFLLHFCQUFxQixnQ0FBZ0MsZ0NBQWdDLHlCQUF5QixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0JBQXNCLCtCQUErQixLQUFLLHNEQUFzRCxnQ0FBZ0Msb0JBQW9CLEtBQUssOEJBQThCLHFCQUFxQix3QkFBd0Isc0JBQXNCLEtBQUsseUNBQXlDLGlCQUFpQixnQkFBZ0IsNEJBQTRCLHdCQUF3Qiw0QkFBNEIsS0FBSywwQkFBMEIsd0JBQXdCLEtBQUssMkJBQTJCLHVCQUF1QixpQkFBaUIsNEJBQTRCLHNCQUFzQiwwQkFBMEIsdUJBQXVCLEtBQUssb0JBQW9CLHdCQUF3Qiw2QkFBNkIseUJBQXlCLGtCQUFrQix3QkFBd0IscUJBQXFCLEtBQUssd0JBQXdCLDBCQUEwQix5QkFBeUIsdUJBQXVCLHFDQUFxQyxLQUFLLDJCQUEyQiw2QkFBNkIsa0JBQWtCLHdCQUF3QixLQUFLLHlCQUF5Qiw2QkFBNkIsbUJBQW1CLHVCQUF1QixLQUFLLG9DQUFvQyxzQkFBc0IsS0FBSyx5QkFBeUIsa0JBQWtCLEtBQUssc0JBQXNCLDBCQUEwQixRQUFRLDZGQUE2RixvQkFBb0IsS0FBSyxxQ0FBcUMseUJBQXlCLEtBQUssK0NBQStDLFdBQVcsRUFBRSwrQ0FBK0MsWUFBWSxFQUFFLHVCQUF1QixpQ0FBaUMsS0FBSyw4QkFBOEIsaUJBQWlCLEtBQUssY0FBYywwR0FBMEcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFB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QVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssT0FBTyxPQUFPLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLFNBQVMsVUFBVSxZQUFZLGFBQWEsT0FBTyxRQUFRLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLGFBQWEsT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLGFBQWEsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxVQUFVLEtBQUssWUFBWSxXQUFXLFVB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7QUN6TEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQ0FBbUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE1BQU07QUFDbkIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTyxvREFBb0QsSUFBSTtBQUMzRSxhQUFhLGNBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsYTs7Ozs7Ozs7OztBQ3ZTRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtB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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLHFEQUFxRDtBQUNyRCx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDO0FBQ3ZDLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUMsYTs7Ozs7Ozs7OztBQ3JURDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOzs7Ozs7Ozs7OztBQ3RURDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLDhCQUE4Qjs7QUFFaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUixHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7O0FBR2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNnQztBQUNpQjtBQUNHO0FBQ007QUFDYTtBQUNMO0FBQ0U7QUFDRztBQUNOO0FBQ0U7O0FBRW5FO0FBQ3dDO0FBQ0U7QUFDeUU7QUFDN0M7O0FBRXRFO0FBQzRDO0FBQ007O0FBRWxELDZEQUE2RDtBQUNkO0FBQ1M7O0FBRXhEO0FBQ3dFO0FBQ3ZCO0FBQ0U7OztBQUduRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvbkJBQWdEO0FBQ3RFO0FBQ0EseUJBQXlCLG1SQUF3RDtBQUNqRixvQkFBb0IscVVBQTZDO0FBQ2pFLG9CQUFvQiw2UEFBNkM7QUFDakUscUJBQXFCLCtQQUE4QztBQUNuRSwwQkFBMEIsdVBBQTBDO0FBQ3BFLGtCQUFrQixxUEFBeUM7QUFDM0Qsb0JBQW9CLG1XQUFpQztBQUNyRCwwQkFBMEIseVBBQTJDO0FBQ3JFLG1CQUFtQixtUUFBZ0Q7QUFDbkUsZ0JBQWdCLDZPQUFxQztBQUNyRCxrQkFBa0IscVBBQXlDO0FBQzNELGtCQUFrQixxUEFBeUM7QUFDM0QsMEJBQTBCLDJRQUFvRDtBQUM5RSx1QkFBdUIscVJBQXlEO0FBQ2hGLG9CQUFvQiw0UEFBNkM7QUFDakUsdUJBQXVCLGtYQUFtRDtBQUMxRSx1QkFBdUIseVFBQW1EO0FBQzFFLDJCQUEyQixrbUNBQXVDO0FBQ2xFLG9CQUFvQixnVEFBNkM7QUFDakU7QUFDQSxtQkFBbUIseVBBQTJDO0FBQzlELG1CQUFtQixtUUFBZ0Q7QUFDbkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSxNQUFNO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBdUI7OztBQUd2QjtBQUNBO0FBQ0EsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQVM7QUFDeEIsaUJBQWlCLHVFQUFXO0FBQzVCO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVKQSx3QiIsImZpbGUiOiJydW5lc3RvbmUuYnVuZGxlLmpzP3Y9YjFiNjgxMTBlMWQyNDUxNjkyZDAiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW57XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udmlldy10b2dnbGV7XFxyXFxuICBwYWRkaW5nOiAwLjg1ZW07XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50YXRpb24tbW9kZSAuc2VjdGlvbiAqe1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnRhdGlvbi1tb2RlIC5zZWN0aW9uIC5ydW5lc3RvbmUsIC5wcmVzZW50YXRpb24tbW9kZSAuc2VjdGlvbiAucnVuZXN0b25lICp7XFxyXFxuICBkaXNwbGF5OiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGwtaGVpZ2h0e1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9te1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvZGVEaXNwbGF5RGl2e1xcclxcbiAgd2lkdGg6IGF1dG8haW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciAjZGF0YVZpentcXHJcXG4gIG1hcmdpbjogMDsgIFxcclxcbn1cXHJcXG5cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciBkaXYjc3RhY2tIZWFkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhY2tGcmFtZXtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YWNrSGVhcFRhYmxlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhY2tIZWFwVGFibGUgdHIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRkI3N0YWNrX3RkLCBkaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0ZCNoZWFwX3RkIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50YXRpb24tdGl0bGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnQgLnByZXNlbnRhdGlvbi10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgZGl2I2hlYXAge1xcclxcbiAgZmxvYXQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNzdGFja190ZCB0ciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxyXFxufVxcclxcblxcclxcbiNoZWFwX3RkIHRyIHtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcXHJcXG59XFxyXFxuXFxyXFxuI2NvZGVEaXNwbGF5RGl2e1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qICBibm0gLS0gY29tbWVudCB0aGlzIG91dCBmb3Igbm93IGFzIGl0IGJyZWFrcyBjb2RlbGVucyBpbmRlbnRhdGlvbiBhbmQgYXJyb3dzXFxyXFxuLnZpc3VhbGl6ZXIgdHJ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4qL1xcclxcblxcclxcbiN2aXpMYXlvdXRUZHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiN2aXpMYXlvdXRUZEZpcnN0IHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbiN2aXpMYXlvdXRUZFNlY29uZCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdml6TGF5b3V0VGRUaGlyZCB7XFxyXFxuICBmbGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJvZ091dHB1dHMge1xcclxcbiAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O1xcclxcbiAgbWFyZ2luOiAwIDIwcHg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4jcHlTdGRvdXQge1xcclxcbiAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciAjcHlTdGRvdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0YWJsZS52aXN1YWxpemVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudCAjdml6TGF5b3V0VGRUaGlyZHtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxufVxcclxcblxcclxcbi5hYy1ibG9ja3tcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5yb3ctbW9kZSAuYWMtYmxvY2t7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5yb3ctbW9kZSAuYWNfb3V0cHV0LCAucm93LW1vZGUgLmFjX2NvZGVfZGl2e1xcclxcbiAgZmxvYXQ6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiBhdXRvO1xcclxcbiAgbWF4LXdpZHRoOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LW1vZGUgLmFjX2NvZGVfZGl2e1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNfc2VjdGlvbj4qIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjX291dHB1dHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYWNfb3V0cHV0IHByZSB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5Db2RlTWlycm9ye1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgbWluLWhlaWdodDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiA+IHJ1bmVzdG9uZTpub3QoLmFjX3NlY3Rpb24pe1xcclxcbiAgbWF4LXdpZHRoOm5vbmU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50YXRpb24tb3B0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbi5sYXlvdXQtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGQkVFRDU7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjREZENEJFO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgcGFkZGluZzogLjI1cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCAuNXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxheW91dC1idG4uYWN0aXZlLWxheW91dCwgLmxheW91dC1idG46Zm9jdXMge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgIzk3OTc5NztcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5za2V0Y2hwYWQtY29udGFpbmVyIHtcXHJcXG4gIG1pbi13aWR0aDogNTAlO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1vZGUgLnNrZXRjaHBhZC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIC8qbWFyZ2luOiAwIC0xNXB4OyovXFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LW1vZGUgLmVycm9yIHtcXHJcXG4gIG1hcmdpbjogMjBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tb2RlIC5lcnJvciB7XFxyXFxuICBtYXJnaW46IDI4cHggMCAwO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBtYXJnaW4tdG9wOiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2tldGNocGFkIHtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1wcmVzZW50ZXIge1xcclxcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBtYXJnaW46IDEuNXJlbSAwIDEuNXJlbSAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4tZ3JleS1vdXRsaW5lIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBjb2xvcjogZ3JleTtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyZXktc29saWQge1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJhY2tncm91bmQ6IGdyZXk7XFxyXFxufVxcclxcblxcclxcbmJvZHkucHJlc2VudCAuYWNfc2VjdGlvbj4qIHtcXHJcXG4gIG1heC13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuYm9keS5wcmVzZW50IGlmcmFtZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS5wcmVzZW50IHtcXHJcXG4gIC8qIGZvbnQtc2l6ZTogMi4wZW07ICovXFxyXFxufVxcclxcblxcclxcbmJvZHkucHJlc2VudCAjcmVsYXRpb25zLXByZXYsIGJvZHkucHJlc2VudCAjcmVsYXRpb25zLW5leHQsIGJvZHkucHJlc2VudCAubmF2TGlua0JnIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkucHJlc2VudCAuYnRuLXByZXNlbnRlciB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcbmJvZHkucHJlc2VudCAuYnRuLXByZXNlbnRlci5wcmV2LWV4ZXJjaXNlIHsgbGVmdDogMHB4OyB9XFxyXFxuYm9keS5wcmVzZW50IC5idG4tcHJlc2VudGVyLm5leHQtZXhlcmNpc2UgeyByaWdodDogMHB4OyB9XFxyXFxuXFxyXFxuLyogLmNvbC1tZC0xMiB7XFxyXFxuICB3aWR0aDogNTguMzMzMzMzMzMzMzMzMzM2JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbW9kZSAuY29sLW1kLTcge1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59ICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcHJlc2VudGVyX21vZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFB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Ozs7R0FNR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGlkZGVue1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZXctdG9nZ2xle1xcclxcbiAgcGFkZGluZzogMC44NWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudGF0aW9uLW1vZGUgLnNlY3Rpb24gKntcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50YXRpb24tbW9kZSAuc2VjdGlvbiAucnVuZXN0b25lLCAucHJlc2VudGF0aW9uLW1vZGUgLnNlY3Rpb24gLnJ1bmVzdG9uZSAqe1xcclxcbiAgZGlzcGxheTogaW5pdGlhbDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5mdWxsLWhlaWdodHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbXtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbiNjb2RlRGlzcGxheURpdntcXHJcXG4gIHdpZHRoOiBhdXRvIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgI2RhdGFWaXp7XFxyXFxuICBtYXJnaW46IDA7ICBcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgZGl2I3N0YWNrSGVhZGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YWNrRnJhbWV7XFxyXFxuICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbiNzdGFja0hlYXBUYWJsZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3N0YWNrSGVhcFRhYmxlIHRyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0ZCNzdGFja190ZCwgZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGQjaGVhcF90ZCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudGF0aW9uLXRpdGxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcmVzZW50IC5wcmVzZW50YXRpb24tdGl0bGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIGRpdiNoZWFwIHtcXHJcXG4gIGZsb2F0OiBub25lO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3RhY2tfdGQgdHIge1xcclxcbiAgZGlzcGxheTogdGFibGUtcm93O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhcF90ZCB0ciB7XFxyXFxuICBkaXNwbGF5OiB0YWJsZS1yb3c7XFxyXFxufVxcclxcblxcclxcbiNjb2RlRGlzcGxheURpdntcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAgYm5tIC0tIGNvbW1lbnQgdGhpcyBvdXQgZm9yIG5vdyBhcyBpdCBicmVha3MgY29kZWxlbnMgaW5kZW50YXRpb24gYW5kIGFycm93c1xcclxcbi52aXN1YWxpemVyIHRye1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuKi9cXHJcXG5cXHJcXG4jdml6TGF5b3V0VGR7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4jdml6TGF5b3V0VGRGaXJzdCB7XFxyXFxuICBmbGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4jdml6TGF5b3V0VGRTZWNvbmQge1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuI3ZpekxheW91dFRkVGhpcmQge1xcclxcbiAgZmxleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2dPdXRwdXRzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcXHJcXG4gIG1hcmdpbjogMCAyMHB4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3B5U3Rkb3V0IHtcXHJcXG4gIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgI3B5U3Rkb3V0IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LkV4ZWN1dGlvblZpc3VhbGl6ZXIgdGFibGUudmlzdWFsaXplciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXNlbnQgI3ZpekxheW91dFRkVGhpcmR7XFxyXFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWMtYmxvY2t7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LW1vZGUgLmFjLWJsb2Nre1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucm93LW1vZGUgLmFjX291dHB1dCwgLnJvdy1tb2RlIC5hY19jb2RlX2RpdntcXHJcXG4gIGZsb2F0OiBub25lO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1heC13aWR0aDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1tb2RlIC5hY19jb2RlX2RpdntcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjX3NlY3Rpb24+KiB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5hY19vdXRwdXR7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjX291dHB1dCBwcmUge1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQ7XFxyXFxuICBtaW4taGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uQ29kZU1pcnJvcntcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIgLnNlY3Rpb24gPiBydW5lc3RvbmU6bm90KC5hY19zZWN0aW9uKXtcXHJcXG4gIG1heC13aWR0aDpub25lO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJlc2VudGF0aW9uLW9wdGlvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubGF5b3V0LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJFRUQ1O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI0RGRDRCRTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG4gIHBhZGRpbmc6IC4yNXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgLjVyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5sYXlvdXQtYnRuLmFjdGl2ZS1sYXlvdXQsIC5sYXlvdXQtYnRuOmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5Nzk3OTc7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tldGNocGFkLWNvbnRhaW5lciB7XFxyXFxuICBtaW4td2lkdGg6IDUwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgcGFkZGluZzogMCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1tb2RlIC5za2V0Y2hwYWQtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAvKm1hcmdpbjogMCAtMTVweDsqL1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG59XFxyXFxuXFxyXFxuLnJvdy1tb2RlIC5lcnJvciB7XFxyXFxuICBtYXJnaW46IDIwcHggMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtbW9kZSAuZXJyb3Ige1xcclxcbiAgbWFyZ2luOiAyOHB4IDAgMDtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgbWFyZ2luLXRvcDogMjhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNrZXRjaHBhZCB7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5idG4tcHJlc2VudGVyIHtcXHJcXG4gIHBhZGRpbmc6IC41cmVtIDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWdyZXktb3V0bGluZSB7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcclxcbiAgY29sb3I6IGdyZXk7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1ncmV5LXNvbGlkIHtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBiYWNrZ3JvdW5kOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnByZXNlbnQgLmFjX3NlY3Rpb24+KiB7XFxyXFxuICBtYXgtd2lkdGg6IG5vbmU7XFxyXFxufVxcclxcbmJvZHkucHJlc2VudCBpZnJhbWUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkucHJlc2VudCB7XFxyXFxuICAvKiBmb250LXNpemU6IDIuMGVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnByZXNlbnQgI3JlbGF0aW9ucy1wcmV2LCBib2R5LnByZXNlbnQgI3JlbGF0aW9ucy1uZXh0LCBib2R5LnByZXNlbnQgLm5hdkxpbmtCZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnByZXNlbnQgLmJ0bi1wcmVzZW50ZXIge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5ib2R5LnByZXNlbnQgLmJ0bi1wcmVzZW50ZXIucHJldi1leGVyY2lzZSB7IGxlZnQ6IDBweDsgfVxcclxcbmJvZHkucHJlc2VudCAuYnRuLXByZXNlbnRlci5uZXh0LWV4ZXJjaXNlIHsgcmlnaHQ6IDBweDsgfVxcclxcblxcclxcbi8qIC5jb2wtbWQtMTIge1xcclxcbiAgd2lkdGg6IDU4LjMzMzMzMzMzMzMzMzMzNiU7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLW1vZGUgLmNvbC1tZC03IHtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufSAqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFZhcmlhYmxlcyBob2xkaW5nIHRoZW1lIGNvbG9ycyAqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgICAtLW91dGVyQmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG4gICAgLS1saW5rczogIzA2NDVhZDtcXHJcXG4gICAgLS1ib2R5Rm9udDogIzAwMDAwMDtcXHJcXG4gICAgLS10b29sdGlwOiAjZmZmZmZmO1xcclxcbiAgICAtLWdyYXlUb1doaXRlOiAjMzMzMzMzO1xcclxcbiAgICAtLW5hdmJhcjogI2Y4ZjhmODtcXHJcXG4gICAgLS1uYXZiYXJGb250OiAjNzA3MDcwO1xcclxcbiAgICAtLW5hdmJhckZvbnRIb3ZlcjogIzAwMDAwMDtcXHJcXG4gICAgLS1hbGVydHM6ICNkOWVkZjc7XFxyXFxuICAgIC0tY29tcGxldGlvbkJ1dHRvbjogI2ZmYWEyYjtcXHJcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uSG92ZXI6ICNmZjlmMTk7XFxyXFxuICAgIC0tYWRtb25pdGlvbjogI2ZjZjhlMztcXHJcXG4gICAgLS1hZG1vbml0aW9uQm9yZGVyOiAjZmJlZWQ1O1xcclxcbiAgICAtLWNvZGVCdXR0b25zOiAjNDc0OTQ5O1xcclxcbiAgICAtLWNvZGVCdXR0b25zQm9yZGVyOiAjNDc0OTQ5O1xcclxcbiAgICAtLWRhbmdlckFsZXJ0czogI2YyZGVkZTtcXHJcXG4gICAgLS1zdWNjZXNzQWxlcnRzOiAjZGZmMGQ4O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiAgICAtLW91dGVyQmFja2dyb3VuZDogIzNkM2QzZDtcXHJcXG4gICAgLS1saW5rczogIzExNjVmMDtcXHJcXG4gICAgLS1ib2R5Rm9udDogI2ZmZmZmZjtcXHJcXG4gICAgLS10b29sdGlwOiAjMDAwMDAwO1xcclxcbiAgICAtLWdyYXlUb1doaXRlOiAjZmZmZmZmO1xcclxcbiAgICAtLW5hdmJhcjogIzNkM2QzZDtcXHJcXG4gICAgLS1uYXZiYXJGb250OiAjZmZmZmZmO1xcclxcbiAgICAtLW5hdmJhckZvbnRIb3ZlcjogI2Q2ZDZkNjtcXHJcXG4gICAgLS1hbGVydHM6ICM3MTQwODI7XFxyXFxuICAgIC0tY29tcGxldGlvbkJ1dHRvbjogIzY1MDA4NztcXHJcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uSG92ZXI6ICM1NjAwNzM7XFxyXFxuICAgIC0tYWRtb25pdGlvbjogIzNkM2QzZDtcXHJcXG4gICAgLS1hZG1vbml0aW9uQm9yZGVyOiAjMjYyNjI2O1xcclxcbiAgICAtLWNvZGVCdXR0b25zOiAjMmMwYWE2O1xcclxcbiAgICAtLWNvZGVCdXR0b25zQm9yZGVyOiAjZmZmZmZmO1xcclxcbiAgICAtLWRhbmdlckFsZXJ0czogIzhjMjYyNjtcXHJcXG4gICAgLS1zdWNjZXNzQWxlcnRzOiAjMjE3MzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIGJhc2ljLmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG50ZC5saW5lbm9zIHByZSB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIHByZXR0aWZ5LmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4uc3RyIHtcXHJcXG4gICAgY29sb3I6ICMwMDZiMDA7XFxyXFxufVxcclxcblxcclxcbi8qIGN1c3RvbSBtb2RpZmljYXRpb24gb2YgcGFyc29ucy5jc3MgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLnBhcnNvbnMgLmJsb2NrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3VzdG9tIG1vZGlmaWNhdGlvbiBvZiBweWdtZW50cy5jc3MgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLmhpZ2hsaWdodCAuYzEge1xcclxcbiAgICBjb2xvcjogIzM3NkE3QjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAubm4ge1xcclxcbiAgICBjb2xvcjogIzBGNkM5NTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAuZ3Age1xcclxcbiAgICBjb2xvcjogI0ExNEMwODtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAuc2kge1xcclxcbiAgICBjb2xvcjogIzNDNzczRDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAubmMge1xcclxcbiAgICBjb2xvcjogIzBCNzE5RDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYFNlYXJjaGAgZnVuY3Rpb25hbGl0eSdzIHJlc3VsdCBjdXN0b20gbW9kaWZpY2F0aW9uIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcbnVsLnNlYXJjaCBsaSBkaXYuY29udGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxyXFxufVxcclxcblxcclxcbi8qIEFjdGl2ZUNvZGUgZ3V0dGVyIGN1c3RvbSBtb2RpZmljYXRpb24gZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuXFxyXFxuLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtd2FybmluZyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkbW9uaXRpb24pO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFkbW9uaXRpb25Cb3JkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQeXRob24gY29kZSBvdXRwdXQgY3VzdG9tIG1vZGlmaWNhdGlvbiBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0YWJsZSNweUNvZGVPdXRwdXQgLmxpbmVObyB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSdW5lc3RvbmUgY3VzdG9tIG1vZGlmaWNhdGlvbnMgKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgY291bnRlci1yZXNldDogcnNjb21wb25lbnQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdXRlckJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBtYXJnaW46IDAgMCAxZW07XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGFibGUtb2YtY29udGVudHMgcmVsYXRlZCBzdHlsZXMgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuI3RhYmxlLW9mLWNvbnRlbnRzIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFibGUtb2YtY29udGVudHMgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFibGUtb2YtY29udGVudHMuc2VjdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmF2YmFyLWJyYW5kIGNvbG9yIGNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLm5hdmJhci1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW5hdmJhckZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXJGb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udEhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udCk7XFxyXFxufVxcclxcblxcclxcbi8qIGFja25vd2xlZGdlbWVudCByZWxhdGVkIHN0eWxlcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4udG9jdHJlZS13cmFwcGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9jdHJlZS13cmFwcGVyIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9jdHJlZS13cmFwcGVyIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW5kZXggYW5kIHNlYXJjaCByZWxhdGVkIHN0eWxlcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3VzdG9tIHN0eWxlIGZvciBgYWAgdGFnIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXZiYXIgYW5kIG1lbnUgcmVsYXRlZCBzdHlsZXMgKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLyogUmVtb3ZlIHRvcCBwYWRkaW5nIHdoZW4gdG9wIG5hdmJhciBnb2VzIGNvbGxhcHNlZCBpbiBuYXJyb3cgdmlld3BvcnRzICovXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2YmFyLWZpeGVkLXRvcCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICAvKiB3aGVuIG5hdmJhciBpcyBjb2xsYXBzZWQgd2UgZG9uJ3Qgd2FudCBhbnkgdmVydGljYWwgZGl2aWRlcnMgdGFraW5nIHVwIHNwYWNlICovXFxyXFxuICAgIC5uYXZiYXIgLmRpdmlkZXItdmVydGljYWwge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5kaXYuY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbmRpdi5zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbj4qOm5vdCguc2VjdGlvbik6bm90KC5hY19zZWN0aW9uKSB7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgcnVsZSBpcyBtZWFudCB0byBvdmVycmlkZSB0aGUgYmVoYXZpb3Igb2YgdGhlXFxyXFxuICAgcHJldmlvdXMgcnVsZSBzaW5jZSBpdCBpcyBub3QgcG9zc2libGUgdG8gZXhjbHVkZVxcclxcbiAgIG1vcmUgdGhhbiBvbmUgc2VjdGlvbiBpbiB0aGUgbm90KCkgcGFydCBvZiB0aGUgcnVsZVxcclxcbiovXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiBkaXYuZnVsbC13aWR0aC5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbj5pbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiAucGFyc29ucyxcXHJcXG4uY29udGFpbmVyIC5zZWN0aW9uIC5wYXJzb25zIC5zb3J0YWJsZS1jb2RlLWNvbnRhaW5lcixcXHJcXG4uY29udGFpbmVyIC5zZWN0aW9uIC5jZF9zZWN0aW9uIHtcXHJcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyPi5jb250YWluZXIgLm5hdmJhci1icmFuZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyPi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyPi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdXRlckJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyPi5jb250YWluZXIgcD5hIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJyYW5kLWxvZ28ge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweCA0MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZW51IHtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItbGlrZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiX2lmcmFtZV93aWRnZXQgc3BhbixcXHJcXG4uZmJfaWZyYW1lX3dpZGdldCBpZnJhbWUge1xcclxcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IDgycHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnR3aXR0ZXItZm9sbG93LWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5naXR0aXAge1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5naXR0aXAtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnU+bGk+c3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXlUb1doaXRlKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnU+bGk+YSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5VG9XaGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5sb2dnZWRpbnVzZXIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZW5kIG5hdmJhciBhbmQgbWVudSByZWxhdGVkIHN0eWxlcyAqL1xcclxcblxcclxcbi5Db2RlTWlycm9yIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29kZU1pcnJvci1zY3JvbGwge1xcclxcbiAgICAvKiB0aGlzIGFsbG93cyBDTSBlbGVtZW50cyB0byBiZSByZXNpemVkIHRvIChhbG1vc3QpIGFueVxcclxcbiAgICAgKiBoZWlnaHQgd2hpbGUgc3RpbGwgcmVseWluZyBvbiBtYXgtaGVpZ2h0ICh3aGljaCBrZWVwc1xcclxcbiAgICAgKiB0aGUgQ00gZWRpdG9ycyB0byBubyBtb3JlIHRoYW4gdGhlIHNpemUgbmVlZGVkXFxyXFxuICAgICAqIHVubGVzcyByZXNpemVkKSAqL1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MGVtO1xcclxcbiAgICBtaW4td2lkdGg6IDMwZW07XFxyXFxufVxcclxcblxcclxcbi5hY19zZWN0aW9uIC5Db2RlTWlycm9yIHByZSB7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICAtby1ib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bixcXHJcXG5idG4uYnRuLXNtLFxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ0bi5idG4tc20sXFxyXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnRuLmJ0bi1zbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRpc2FibGVkIHtcXHJcXG4gICAgLyogbmVlZGVkIGluIEJvb3RzdHJhcCAzIHRvIGFsbG93IHRvb2x0aXBzIG9uIGRpc2FibGVkIGJ1dHRvbnMgKi9cXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idG4tZGVmYXVsdCxcXHJcXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQsXFxyXFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXSxcXHJcXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2RlQnV0dG9ucyk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKGNvZGVCdXR0b25zQm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1kZWZhdWx0OmhvdmVyLFxcclxcbi5idG4tZGVmYXVsdDpmb2N1cyxcXHJcXG4uYnRuLWRlZmF1bHQ6YWN0aXZlLFxcclxcbi5idG4tZGVmYXVsdC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYzNjO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMyZTJmMmY7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwLmluIHtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbGVydCBmb3JtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGVmYXVsdCBib29rc3RyYXAgYWxlcnQgY29sb3IgaXMgaGFyZCB0byByZWFkIChsb3cgY29udHJhc3QpLiAqL1xcclxcbi5hbGVydCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5VG9XaGl0ZSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbGVydC1pbmZvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnRzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LWRhbmdlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlckFsZXJ0cyk7XFxyXFxufVxcclxcblxcclxcbi8qIG92ZXJyaWRlIHRoZSBjb2xvciBzdHlsZXMgYXBwbGllZCBieSBTa3VscHQgdG8gdGhlIHVuaXR0ZXN0IHJlc3VsdHMgZGl2cyAqL1xcclxcbi51bml0dGVzdC1yZXN1bHRzLmFsZXJ0LWRhbmdlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlckFsZXJ0cykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnVuaXR0ZXN0LXJlc3VsdHMuYWxlcnQtc3VjY2VzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3NBbGVydHMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5hbGVydCBsYWJlbCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZXNlIGFkbW9uaXRpb24gc3R5bGVzIHN0eWxlcyBhcmUgY29waWVkIGZyb20gdGhlIEJvb3RzdHJhcCAuYWxlcnQgY2xhc3Nlcy5cXHJcXG4gTW9zdCBvZiB0aGUgIWltcG9ydGFudCBkZWNsYXJhdGlvbnMgYXJlIHRvIG92ZXJyaWRlIHRoZSBTcGhpbnggYmFzaWMuY3NzIHN0eWxlcyAqL1xcclxcbi5hZG1vbml0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogOHB4IDM1cHggOHB4IDE0cHggIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRtb25pdGlvbik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYmVlZDU7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuYWxlcnQtZGFuZ2VyICovXFxyXFxuLmFkbW9uaXRpb24uY2F1dGlvbiB7XFxyXFxuICAgIGNvbG9yOiAjQTMzRjNFO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlZWQzZDc7XFxyXFxufVxcclxcblxcclxcbi8qIC5hbGVydC1pbmZvICovXFxyXFxuLmFkbW9uaXRpb24udGlwLFxcclxcbi5hZG1vbml0aW9uLm5vdGUge1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmcm9tIHdlYjJweS5jc3MgKi9cXHJcXG5kaXYuZmxhc2gge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB0b3A6IDU1cHg7XFxyXFxuICAgIHJpZ2h0OiA0NXB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk1O1xcclxcbiAgICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyMjIsICMwMDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjMjIyLCAjMDAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMjIsICMwMDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjMjIyLCAjMDAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIHotaW5kZXg6IDIwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlcyBmb3IgdGhlIGxvZ2luLCByZWdpc3RyYXRpb24sIGFuZCBKYW5yYWluIGZvcm1zICovXFxyXFxuI3dlYjJweV91c2VyX2Zvcm0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2ViMnB5X3VzZXJfZm9ybSBmb3JtIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxufVxcclxcblxcclxcbiN3ZWIycHlfdXNlcl9mb3JtIHRkIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN3ZWIycHlfdXNlcl9mb3JtIHRkLncycF9mdyB7XFxyXFxuICAgIHdpZHRoOiAyOTlweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGgtYWN0aW9ucyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaWduX2luX3RleHQgdGQge1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBmb250LWZhbWlseTogJ2x1Y2lkYSBncmFuZGUnLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGhfdXNlcl9yZW1lbWJlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgbG9naW4sIHJlZ2lzdHJhdGlvbiwgSmFucmFpbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG4vKiBlbmQtb2YtY2hhcHRlciBleGVyY2lzZXMgc3R5bGVzICovXFxyXFxuI2V4ZXJjaXNlcz5vbD5saSxcXHJcXG4jcHJvZ3JhbW1pbmctZXhlcmNpc2VzPm9sPmxpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2V4ZXJjaXNlcz5vbD5saTpudGgtY2hpbGQoZXZlbiksXFxyXFxuI3Byb2dyYW1taW5nLWV4ZXJjaXNlcz5vbD5saTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjRlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZhZjdkZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZiZWVkNTtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qIEVuZCBjaGFwdGVyIGV4ZXJjaXNlcyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4vKiBNb2RhbCBkaWFsb2cgc3R5bGVzIChzY3JhdGNoIGFjdGl2ZWNvZGUsIGNvbXBhcmUgbWUsIGV0YykgKi9cXHJcXG4uc2NyYXRjaC1hYy1tb2RhbCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1vZGFsIC5wcm9ncmVzcyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1lLXByb2dyZXNzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1lLXByb2dyZXNzIC5wcm9ncmVzcy1iYXIsXFxyXFxuLnVuaXR0ZXN0LXJlc3VsdHMtcHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi51bml0dGVzdC1yZXN1bHRzLXByb2dyZXNzIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBhcmUtbW9kYWwge1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1vZGFsIHRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29kZWxlbnMtbW9kYWwge1xcclxcbiAgICAvKiB3ZSBzZXQgc29tZSBjdXN0b20gcG9zaXRpb24gc3R5bGVzIHNvIHRoYXQgdGhlIG1vZGFsIGRvZXNuJ3Qgb2JzY3VyZSB0aGUgY29kZWxlbnMgdmlzdWFsaXplciAqL1xcclxcbiAgICB0b3A6IDIwJTtcXHJcXG4gICAgcmlnaHQ6IDIwJTtcXHJcXG4gICAgbGVmdDogYXV0bztcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLyogcmVtb3ZlIGFueSBjdXN0b20gcG9zaXRpb24gc3R5bGVzIHdoZW4gdGhlIHNjcmVlbiBpcyBzbWFsbCAobW9iaWxlIGRldmljZXMpXFxyXFxuICAgIHRvIHByZXZlbnQgdGhlIG1vZGFsIGZyb20gYmVpbmcgcGFydGlhbGx5IG9mZiB0aGUgc2NyZWVuICovXFxyXFxuICAgIC5jb2RlbGVucy1tb2RhbCB7XFxyXFxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29kZWxlbnMtbW9kYWw+Lm1vZGFsLWRpYWxvZyB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIG1vZGFsIGRpYWxvZyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uZm9vdG5vdGUudGFibGUge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rub3RlLnRhYmxlIHRkLmxhYmVsIHtcXHJcXG4gICAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xcclxcbn1cXHJcXG5cXHJcXG4uYWMtY2FudmFzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvLXBsYXktb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtMTUwcHg7XFxyXFxuICAgIGxlZnQ6IDQ0JTtcXHJcXG4gICAgaGVpZ2h0OiA4NXB4O1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvX3BvcHVwIHZpZGVvIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51aS1zb3J0YWJsZS1oZWxwZXIge1xcclxcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmsge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJvdHRvbTogNjVweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGluazpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rIGEge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXHJcXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBcXHJcXG4gICAgYm9yZGVyLWNvbG9yOmxpZ2h0Z3JleTsgXFxyXFxuICAgIGJvcmRlci13aWR0aDoycHg7IFxcclxcbiAgICB3aWR0aDoxMDBweDsgXFxyXFxuICAgIGhlaWdodDo1MHB4XFxyXFxufVxcclxcblxcclxcbiNyZWxhdGlvbnMtbmV4dCB7XFxyXFxuICAgIHJpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVsYXRpb25zLXByZXYge1xcclxcbiAgICBsZWZ0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dHByZXYtbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICBcXHJcXG4gICAgLm5hdkxpbmsge1xcclxcbiAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3JlbGF0aW9ucy1uZXh0LFxcclxcbiAgICAjcmVsYXRpb25zLXByZXYge1xcclxcbiAgICAgICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGluayBhIHtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbiNjb21wbGV0aW9uQnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Bc2tDb21wbGV0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGlvbkJ1dHRvbik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tcGxldGlvbkJ1dHRvbkhvdmVyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Bc2tDb21wbGV0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGlvbkJ1dHRvbkhvdmVyKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uSG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29uZmlybUNvbXBsZXRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBkMzkyO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMzZGM2ODI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5idXR0b25Db25maXJtQ29tcGxldGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZGM2ODI7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzNkYzY4MjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmtCZyB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDU1cHg7XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSg1MCwgNTAsIDUwLCAwLjUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rQmc6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdkxpbmtCZ1JpZ2h0IHtcXHJcXG4gICAgcmlnaHQ6IC0xMDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAwIDY1cHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZMaW5rQmdMZWZ0IHtcXHJcXG4gICAgbGVmdDogLTY1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZWh0bWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbj5kaXYuc2lkZWJhciB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAuNWVtIDFlbTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmEuZGlzcXVzX3RocmVhZF9saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5yZXZlYWxfYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pZnJhbWVbc2VhbWxlc3NdIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuY29udGFpbmVyIC5zZWN0aW9uPmRpdi5zaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAzZW0gMC41ZW0gMWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcclxcbiAgICAuY29udGFpbmVyIC5zZWN0aW9uPmRpdi5zaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAxMWVtIDAuNWVtIDFlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDE4ZW0gMC41ZW0gMWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRhYmxlLnZpc3VhbGl6ZXIge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNsdG9vbHRpcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAyMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG4gICAgYm90dG9tOiAxMjAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsdG9vbHRpcCAuc2x0b29sdGlwLWFycm93IHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsdG9vbHRpcC1pbm5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweCA4cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10b29sdGlwKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bC5kcm9wZG93bi1tZW51Lmdsb2JhbHRvYyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdsb2JhbHRvYyBzcGFuLmNhcHRpb24tdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFN0eWxlIGxwIHRleHRhcmVhcy4gKi9cXHJcXG50ZXh0YXJlYSNscC1yZXN1bHQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMGVtO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhpZGUgb25seSB2aXN1YWxseSwgYnV0IGhhdmUgaXQgYXZhaWxhYmxlIGZvciBzY3JlZW4gcmVhZGVyczpcXHJcXG4gKiBodHRwczovL3Nub29rLmNhL2FyY2hpdmVzL2h0bWxfYW5kX2Nzcy9oaWRpbmctY29udGVudC1mb3ItYWNjZXNzaWJpbGl0eVxcclxcbiAqXFxyXFxuICogMS4gRm9yIGxvbmcgY29udGVudCwgbGluZSBmZWVkcyBhcmUgbm90IGludGVycHJldGVkIGFzIHNwYWNlcyBhbmQgc21hbGwgd2lkdGhcXHJcXG4gKiAgICBjYXVzZXMgY29udGVudCB0byB3cmFwIDEgd29yZCBwZXIgbGluZTpcXHJcXG4gKiAgICBodHRwczovL21lZGl1bS5jb20vQGplc3NlYmVhY2gvYmV3YXJlLXNtdXNoZWQtb2ZmLXNjcmVlbi1hY2Nlc3NpYmxlLXRleHQtNTk1MmE0YzJjYmZlXFxyXFxuICovXFxyXFxuXFxyXFxuLnZpc3VhbGx5aGlkZGVuIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBFeHRlbmRzIHRoZSAudmlzdWFsbHloaWRkZW4gY2xhc3MgdG8gYWxsb3cgdGhlIGVsZW1lbnRcXHJcXG4gKiB0byBiZSBmb2N1c2FibGUgd2hlbiBuYXZpZ2F0ZWQgdG8gdmlhIHRoZSBrZXlib2FyZDpcXHJcXG4gKiBodHRwczovL3d3dy5kcnVwYWwub3JnL25vZGUvODk3NjM4XFxyXFxuICovXFxyXFxuXFxyXFxuLnZpc3VhbGx5aGlkZGVuLmZvY3VzYWJsZTphY3RpdmUsXFxyXFxuLnZpc3VhbGx5aGlkZGVuLmZvY3VzYWJsZTpmb2N1cyB7XFxyXFxuICAgIGNsaXA6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmxvY2txdW90ZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jc2Nwcm9ncmVzc2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNzdWJjaGFwdGVycHJvZ3Jlc3M+ZGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbiNzdWJjaGFwdGVycHJvZ3Jlc3M+ZGl2LmxvZ2dlZG91dCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bmVzdG9uZV9jYXB0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVuZXN0b25lX2NhcHRpb25fZGl2aWQge1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNxdWVzdGlvbnMgLnJ1bmVzdG9uZV9jYXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgIGNvdW50ZXItaW5jcmVtZW50OiByc2NvbXBvbmVudDtcXHJcXG4gICAgY29udGVudDogXFxcIlByb2JsZW06IFxcXCJjb3VudGVyKHJzY29tcG9uZW50KSBcXFwiIC0tIFxcXCI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYm9keUZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uanVweXRlcl9jb250YWluZXIgLm91dHB1dCAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uanVweXRlcl9jb250YWluZXIgLm91dHB1dCB0ZCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5qdXB5dGVyX2NvbnRhaW5lciAub3V0cHV0IHRoIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLypUaGVtZSB0b2dnbGUqL1xcclxcbi50aGVtZS1zd2l0Y2gtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGVtIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1zd2l0Y2gge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLXN3aXRjaCBpbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm90dG9tOiA0cHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHdpZHRoOiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkKy5zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkKy5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi8qRW5kIHRoZW1lIHRvZ2dsZSovXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcnVuZXN0b25lL2NvbW1vbi9jc3MvcnVuZXN0b25lLWN1c3RvbS1zcGhpbngtYm9vdHN0cmFwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQ0FBbUM7QUFDbkM7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG1CQUFt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MkI7QUFDL0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUEsbUJBQW1CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFZhcmlhYmxlcyBob2xkaW5nIHRoZW1lIGNvbG9ycyAqL1xcclxcbjpyb290IHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xcclxcbiAgICAtLW91dGVyQmFja2dyb3VuZDogI2VlZWVlZTtcXHJcXG4gICAgLS1saW5rczogIzA2NDVhZDtcXHJcXG4gICAgLS1ib2R5Rm9udDogIzAwMDAwMDtcXHJcXG4gICAgLS10b29sdGlwOiAjZmZmZmZmO1xcclxcbiAgICAtLWdyYXlUb1doaXRlOiAjMzMzMzMzO1xcclxcbiAgICAtLW5hdmJhcjogI2Y4ZjhmODtcXHJcXG4gICAgLS1uYXZiYXJGb250OiAjNzA3MDcwO1xcclxcbiAgICAtLW5hdmJhckZvbnRIb3ZlcjogIzAwMDAwMDtcXHJcXG4gICAgLS1hbGVydHM6ICNkOWVkZjc7XFxyXFxuICAgIC0tY29tcGxldGlvbkJ1dHRvbjogI2ZmYWEyYjtcXHJcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uSG92ZXI6ICNmZjlmMTk7XFxyXFxuICAgIC0tYWRtb25pdGlvbjogI2ZjZjhlMztcXHJcXG4gICAgLS1hZG1vbml0aW9uQm9yZGVyOiAjZmJlZWQ1O1xcclxcbiAgICAtLWNvZGVCdXR0b25zOiAjNDc0OTQ5O1xcclxcbiAgICAtLWNvZGVCdXR0b25zQm9yZGVyOiAjNDc0OTQ5O1xcclxcbiAgICAtLWRhbmdlckFsZXJ0czogI2YyZGVkZTtcXHJcXG4gICAgLS1zdWNjZXNzQWxlcnRzOiAjZGZmMGQ4O1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xcclxcbiAgICAtLW91dGVyQmFja2dyb3VuZDogIzNkM2QzZDtcXHJcXG4gICAgLS1saW5rczogIzExNjVmMDtcXHJcXG4gICAgLS1ib2R5Rm9udDogI2ZmZmZmZjtcXHJcXG4gICAgLS10b29sdGlwOiAjMDAwMDAwO1xcclxcbiAgICAtLWdyYXlUb1doaXRlOiAjZmZmZmZmO1xcclxcbiAgICAtLW5hdmJhcjogIzNkM2QzZDtcXHJcXG4gICAgLS1uYXZiYXJGb250OiAjZmZmZmZmO1xcclxcbiAgICAtLW5hdmJhckZvbnRIb3ZlcjogI2Q2ZDZkNjtcXHJcXG4gICAgLS1hbGVydHM6ICM3MTQwODI7XFxyXFxuICAgIC0tY29tcGxldGlvbkJ1dHRvbjogIzY1MDA4NztcXHJcXG4gICAgLS1jb21wbGV0aW9uQnV0dG9uSG92ZXI6ICM1NjAwNzM7XFxyXFxuICAgIC0tYWRtb25pdGlvbjogIzNkM2QzZDtcXHJcXG4gICAgLS1hZG1vbml0aW9uQm9yZGVyOiAjMjYyNjI2O1xcclxcbiAgICAtLWNvZGVCdXR0b25zOiAjMmMwYWE2O1xcclxcbiAgICAtLWNvZGVCdXR0b25zQm9yZGVyOiAjZmZmZmZmO1xcclxcbiAgICAtLWRhbmdlckFsZXJ0czogIzhjMjYyNjtcXHJcXG4gICAgLS1zdWNjZXNzQWxlcnRzOiAjMjE3MzAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIGJhc2ljLmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG50ZC5saW5lbm9zIHByZSB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjdXN0b20gbW9kaWZpY2F0aW9uIG9mIHByZXR0aWZ5LmNzcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4uc3RyIHtcXHJcXG4gICAgY29sb3I6ICMwMDZiMDA7XFxyXFxufVxcclxcblxcclxcbi8qIGN1c3RvbSBtb2RpZmljYXRpb24gb2YgcGFyc29ucy5jc3MgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLnBhcnNvbnMgLmJsb2NrIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3VzdG9tIG1vZGlmaWNhdGlvbiBvZiBweWdtZW50cy5jc3MgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLmhpZ2hsaWdodCAuYzEge1xcclxcbiAgICBjb2xvcjogIzM3NkE3QjtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAubm4ge1xcclxcbiAgICBjb2xvcjogIzBGNkM5NTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAuZ3Age1xcclxcbiAgICBjb2xvcjogI0ExNEMwODtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAuc2kge1xcclxcbiAgICBjb2xvcjogIzNDNzczRDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZ2hsaWdodCAubmMge1xcclxcbiAgICBjb2xvcjogIzBCNzE5RDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYFNlYXJjaGAgZnVuY3Rpb25hbGl0eSdzIHJlc3VsdCBjdXN0b20gbW9kaWZpY2F0aW9uIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcbnVsLnNlYXJjaCBsaSBkaXYuY29udGV4dCB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLmhpZ2hsaWdodGVkIHtcXHJcXG4gICAgY29sb3I6ICM0ZDRkNGQ7XFxyXFxufVxcclxcblxcclxcbi8qIEFjdGl2ZUNvZGUgZ3V0dGVyIGN1c3RvbSBtb2RpZmljYXRpb24gZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuXFxyXFxuLkNvZGVNaXJyb3ItbGluZW51bWJlciB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxlcnQtd2FybmluZyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkbW9uaXRpb24pO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWFkbW9uaXRpb25Cb3JkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQeXRob24gY29kZSBvdXRwdXQgY3VzdG9tIG1vZGlmaWNhdGlvbiBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG5kaXYuRXhlY3V0aW9uVmlzdWFsaXplciB0YWJsZSNweUNvZGVPdXRwdXQgLmxpbmVObyB7XFxyXFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSdW5lc3RvbmUgY3VzdG9tIG1vZGlmaWNhdGlvbnMgKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgY291bnRlci1yZXNldDogcnNjb21wb25lbnQ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdXRlckJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgICBtYXJnaW46IDAgMCAxZW07XFxyXFxufVxcclxcblxcclxcbmg1IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogdGFibGUtb2YtY29udGVudHMgcmVsYXRlZCBzdHlsZXMgZm9yIGNvbG9yLWNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuI3RhYmxlLW9mLWNvbnRlbnRzIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFibGUtb2YtY29udGVudHMgYTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFibGUtb2YtY29udGVudHMuc2VjdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmF2YmFyLWJyYW5kIGNvbG9yIGNvbnRyYXN0IChBQSBjb21wbGlhbnQpICovXFxyXFxuLm5hdmJhci1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLW5hdmJhckZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWRlZmF1bHQgLm5hdmJhci1uYXY+bGk+YSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1uYXZiYXJGb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItbmF2PmxpPmE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udEhvdmVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1kZWZhdWx0IC5uYXZiYXItYnJhbmQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbmF2YmFyRm9udCk7XFxyXFxufVxcclxcblxcclxcbi8qIGFja25vd2xlZGdlbWVudCByZWxhdGVkIHN0eWxlcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4udG9jdHJlZS13cmFwcGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9jdHJlZS13cmFwcGVyIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9jdHJlZS13cmFwcGVyIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogaW5kZXggYW5kIHNlYXJjaCByZWxhdGVkIHN0eWxlcyBmb3IgY29sb3ItY29udHJhc3QgKEFBIGNvbXBsaWFudCkgKi9cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIGEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5kZXgtYW5kLXNlYXJjaC5zZWN0aW9uIGE6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogY3VzdG9tIHN0eWxlIGZvciBgYWAgdGFnIGZvciBjb2xvci1jb250cmFzdCAoQUEgY29tcGxpYW50KSAqL1xcclxcblxcclxcbmEge1xcclxcbiAgICBjb2xvcjogdmFyKC0tbGlua3MpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXZiYXIgYW5kIG1lbnUgcmVsYXRlZCBzdHlsZXMgKi9cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLyogUmVtb3ZlIHRvcCBwYWRkaW5nIHdoZW4gdG9wIG5hdmJhciBnb2VzIGNvbGxhcHNlZCBpbiBuYXJyb3cgdmlld3BvcnRzICovXFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmF2YmFyLWZpeGVkLXRvcCB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICAvKiB3aGVuIG5hdmJhciBpcyBjb2xsYXBzZWQgd2UgZG9uJ3Qgd2FudCBhbnkgdmVydGljYWwgZGl2aWRlcnMgdGFraW5nIHVwIHNwYWNlICovXFxyXFxuICAgIC5uYXZiYXIgLmRpdmlkZXItdmVydGljYWwge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDNweDtcXHJcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YyZjJmMjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5kaXYuY29udGFpbmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbmRpdi5zZWN0aW9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbj4qOm5vdCguc2VjdGlvbik6bm90KC5hY19zZWN0aW9uKSB7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHQ7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgcnVsZSBpcyBtZWFudCB0byBvdmVycmlkZSB0aGUgYmVoYXZpb3Igb2YgdGhlXFxyXFxuICAgcHJldmlvdXMgcnVsZSBzaW5jZSBpdCBpcyBub3QgcG9zc2libGUgdG8gZXhjbHVkZVxcclxcbiAgIG1vcmUgdGhhbiBvbmUgc2VjdGlvbiBpbiB0aGUgbm90KCkgcGFydCBvZiB0aGUgcnVsZVxcclxcbiovXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiBkaXYuZnVsbC13aWR0aC5jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbj5pbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbiAucGFyc29ucyxcXHJcXG4uY29udGFpbmVyIC5zZWN0aW9uIC5wYXJzb25zIC5zb3J0YWJsZS1jb2RlLWNvbnRhaW5lcixcXHJcXG4uY29udGFpbmVyIC5zZWN0aW9uIC5jZF9zZWN0aW9uIHtcXHJcXG4gICAgbWF4LXdpZHRoOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyPi5jb250YWluZXIgLm5hdmJhci1icmFuZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyPi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyPi5jb250YWluZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdXRlckJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyPi5jb250YWluZXIgcD5hIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWxpbmtzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJyYW5kLWxvZ28ge1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogNDBweCA0MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbC1tZW51IHtcXHJcXG4gICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTVweCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmItbGlrZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZiX2lmcmFtZV93aWRnZXQgc3BhbixcXHJcXG4uZmJfaWZyYW1lX3dpZGdldCBpZnJhbWUge1xcclxcbiAgICBoZWlnaHQ6IDIwcHggIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IDgycHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnR3aXR0ZXItZm9sbG93LWJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5naXR0aXAge1xcclxcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5naXR0aXAtYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnU+bGk+c3BhbiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiAzcHggMjBweDtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyYXlUb1doaXRlKTtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmRyb3Bkb3duLW1lbnU+bGk+YSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5VG9XaGl0ZSk7XFxyXFxufVxcclxcblxcclxcbi5sb2dnZWRpbnVzZXIge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZW5kIG5hdmJhciBhbmQgbWVudSByZWxhdGVkIHN0eWxlcyAqL1xcclxcblxcclxcbi5Db2RlTWlycm9yIHtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMWVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uQ29kZU1pcnJvci1zY3JvbGwge1xcclxcbiAgICAvKiB0aGlzIGFsbG93cyBDTSBlbGVtZW50cyB0byBiZSByZXNpemVkIHRvIChhbG1vc3QpIGFueVxcclxcbiAgICAgKiBoZWlnaHQgd2hpbGUgc3RpbGwgcmVseWluZyBvbiBtYXgtaGVpZ2h0ICh3aGljaCBrZWVwc1xcclxcbiAgICAgKiB0aGUgQ00gZWRpdG9ycyB0byBubyBtb3JlIHRoYW4gdGhlIHNpemUgbmVlZGVkXFxyXFxuICAgICAqIHVubGVzcyByZXNpemVkKSAqL1xcclxcbiAgICBtYXgtaGVpZ2h0OiA2MGVtO1xcclxcbiAgICBtaW4td2lkdGg6IDMwZW07XFxyXFxufVxcclxcblxcclxcbi5hY19zZWN0aW9uIC5Db2RlTWlycm9yIHByZSB7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICAtby1ib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb25hY28sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xcclxcbiAgICB3b3JkLXdyYXA6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bixcXHJcXG5idG4uYnRuLXNtLFxcclxcbmlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdLmJ0bi5idG4tc20sXFxyXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0uYnRuLmJ0bi1zbSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIG1hcmdpbjogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRpc2FibGVkIHtcXHJcXG4gICAgLyogbmVlZGVkIGluIEJvb3RzdHJhcCAzIHRvIGFsbG93IHRvb2x0aXBzIG9uIGRpc2FibGVkIGJ1dHRvbnMgKi9cXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idG4tZGVmYXVsdCxcXHJcXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQsXFxyXFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXSxcXHJcXG4uYnRuLWRlZmF1bHQuZGlzYWJsZWQ6aG92ZXIsXFxyXFxuLmJ0bi1kZWZhdWx0W2Rpc2FibGVkXTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2RlQnV0dG9ucyk7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKGNvZGVCdXR0b25zQm9yZGVyKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1kZWZhdWx0OmhvdmVyLFxcclxcbi5idG4tZGVmYXVsdDpmb2N1cyxcXHJcXG4uYnRuLWRlZmF1bHQ6YWN0aXZlLFxcclxcbi5idG4tZGVmYXVsdC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYzNjO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMyZTJmMmY7XFxyXFxuICAgIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvb2x0aXAge1xcclxcbiAgICB6LWluZGV4OiAyMDAwICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi50b29sdGlwLmluIHtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9ODApO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbGVydCBmb3JtIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogZGVmYXVsdCBib29rc3RyYXAgYWxlcnQgY29sb3IgaXMgaGFyZCB0byByZWFkIChsb3cgY29udHJhc3QpLiAqL1xcclxcbi5hbGVydCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmF5VG9XaGl0ZSk7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5hbGVydC1pbmZvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWxlcnRzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsZXJ0LWRhbmdlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlckFsZXJ0cyk7XFxyXFxufVxcclxcblxcclxcbi8qIG92ZXJyaWRlIHRoZSBjb2xvciBzdHlsZXMgYXBwbGllZCBieSBTa3VscHQgdG8gdGhlIHVuaXR0ZXN0IHJlc3VsdHMgZGl2cyAqL1xcclxcbi51bml0dGVzdC1yZXN1bHRzLmFsZXJ0LWRhbmdlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlckFsZXJ0cykgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnVuaXR0ZXN0LXJlc3VsdHMuYWxlcnQtc3VjY2VzcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Y2Nlc3NBbGVydHMpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5hbGVydCBsYWJlbCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qIFRoZXNlIGFkbW9uaXRpb24gc3R5bGVzIHN0eWxlcyBhcmUgY29waWVkIGZyb20gdGhlIEJvb3RzdHJhcCAuYWxlcnQgY2xhc3Nlcy5cXHJcXG4gTW9zdCBvZiB0aGUgIWltcG9ydGFudCBkZWNsYXJhdGlvbnMgYXJlIHRvIG92ZXJyaWRlIHRoZSBTcGhpbnggYmFzaWMuY3NzIHN0eWxlcyAqL1xcclxcbi5hZG1vbml0aW9uIHtcXHJcXG4gICAgcGFkZGluZzogOHB4IDM1cHggOHB4IDE0cHggIWltcG9ydGFudDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRtb25pdGlvbik7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmYmVlZDU7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuYWxlcnQtZGFuZ2VyICovXFxyXFxuLmFkbW9uaXRpb24uY2F1dGlvbiB7XFxyXFxuICAgIGNvbG9yOiAjQTMzRjNFO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJkZWRlO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNlZWQzZDc7XFxyXFxufVxcclxcblxcclxcbi8qIC5hbGVydC1pbmZvICovXFxyXFxuLmFkbW9uaXRpb24udGlwLFxcclxcbi5hZG1vbml0aW9uLm5vdGUge1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZWRmNztcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjYmNlOGYxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmcm9tIHdlYjJweS5jc3MgKi9cXHJcXG5kaXYuZmxhc2gge1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB0b3A6IDU1cHg7XFxyXFxuICAgIHJpZ2h0OiA0NXB4O1xcclxcbiAgICBvcGFjaXR5OiAwLjk1O1xcclxcbiAgICBtYXJnaW46IDAgMCAxMHB4IDEwcHg7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICMyMjIsICMwMDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjMjIyLCAjMDAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoOTBkZWcsICMyMjIsICMwMDApO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjMjIyLCAjMDAwKTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAgIHotaW5kZXg6IDIwMDA7XFxyXFxufVxcclxcblxcclxcbi8qIFN0eWxlcyBmb3IgdGhlIGxvZ2luLCByZWdpc3RyYXRpb24sIGFuZCBKYW5yYWluIGZvcm1zICovXFxyXFxuI3dlYjJweV91c2VyX2Zvcm0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2ViMnB5X3VzZXJfZm9ybSBmb3JtIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAzcHg7XFxyXFxufVxcclxcblxcclxcbiN3ZWIycHlfdXNlcl9mb3JtIHRkIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbiN3ZWIycHlfdXNlcl9mb3JtIHRkLncycF9mdyB7XFxyXFxuICAgIHdpZHRoOiAyOTlweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGgtYWN0aW9ucyB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaWduX2luX3RleHQgdGQge1xcclxcbiAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgICBmb250LWZhbWlseTogJ2x1Y2lkYSBncmFuZGUnLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2F1dGhfdXNlcl9yZW1lbWJlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFbmQgbG9naW4sIHJlZ2lzdHJhdGlvbiwgSmFucmFpbiBzdHlsZXMgKi9cXHJcXG5cXHJcXG4vKiBlbmQtb2YtY2hhcHRlciBleGVyY2lzZXMgc3R5bGVzICovXFxyXFxuI2V4ZXJjaXNlcz5vbD5saSxcXHJcXG4jcHJvZ3JhbW1pbmctZXhlcmNpc2VzPm9sPmxpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2V4ZXJjaXNlcz5vbD5saTpudGgtY2hpbGQoZXZlbiksXFxyXFxuI3Byb2dyYW1taW5nLWV4ZXJjaXNlcz5vbD5saTpudGgtY2hpbGQoZXZlbikge1xcclxcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjRlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZhZjdkZjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZiZWVkNTtcXHJcXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi8qIEVuZCBjaGFwdGVyIGV4ZXJjaXNlcyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4vKiBNb2RhbCBkaWFsb2cgc3R5bGVzIChzY3JhdGNoIGFjdGl2ZWNvZGUsIGNvbXBhcmUgbWUsIGV0YykgKi9cXHJcXG4uc2NyYXRjaC1hYy1tb2RhbCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1vZGFsIC5wcm9ncmVzcyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1lLXByb2dyZXNzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1lLXByb2dyZXNzIC5wcm9ncmVzcy1iYXIsXFxyXFxuLnVuaXR0ZXN0LXJlc3VsdHMtcHJvZ3Jlc3MgLnByb2dyZXNzLWJhciB7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtaGVhZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblxcclxcbi51bml0dGVzdC1yZXN1bHRzLXByb2dyZXNzIHtcXHJcXG4gICAgd2lkdGg6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbXBhcmUtbW9kYWwge1xcclxcbiAgICB3aWR0aDogMzUwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21wYXJlLW1vZGFsIHRhYmxlIHtcXHJcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXHJcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDEwcHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29kZWxlbnMtbW9kYWwge1xcclxcbiAgICAvKiB3ZSBzZXQgc29tZSBjdXN0b20gcG9zaXRpb24gc3R5bGVzIHNvIHRoYXQgdGhlIG1vZGFsIGRvZXNuJ3Qgb2JzY3VyZSB0aGUgY29kZWxlbnMgdmlzdWFsaXplciAqL1xcclxcbiAgICB0b3A6IDIwJTtcXHJcXG4gICAgcmlnaHQ6IDIwJTtcXHJcXG4gICAgbGVmdDogYXV0bztcXHJcXG4gICAgYm90dG9tOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgLyogcmVtb3ZlIGFueSBjdXN0b20gcG9zaXRpb24gc3R5bGVzIHdoZW4gdGhlIHNjcmVlbiBpcyBzbWFsbCAobW9iaWxlIGRldmljZXMpXFxyXFxuICAgIHRvIHByZXZlbnQgdGhlIG1vZGFsIGZyb20gYmVpbmcgcGFydGlhbGx5IG9mZiB0aGUgc2NyZWVuICovXFxyXFxuICAgIC5jb2RlbGVucy1tb2RhbCB7XFxyXFxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcXHJcXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29kZWxlbnMtbW9kYWw+Lm1vZGFsLWRpYWxvZyB7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW5kIG1vZGFsIGRpYWxvZyBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uZm9vdG5vdGUudGFibGUge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rub3RlLnRhYmxlIHRkLmxhYmVsIHtcXHJcXG4gICAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDllZGY3O1xcclxcbn1cXHJcXG5cXHJcXG4uYWMtY2FudmFzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvLXBsYXktb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtMTUwcHg7XFxyXFxuICAgIGxlZnQ6IDQ0JTtcXHJcXG4gICAgaGVpZ2h0OiA4NXB4O1xcclxcbiAgICB3aWR0aDogMTMwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLnZpZGVvX3BvcHVwIHZpZGVvIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51aS1zb3J0YWJsZS1oZWxwZXIge1xcclxcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmsge1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIGJvdHRvbTogNjVweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGluazpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rIGEge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXHJcXG4gICAgYm9yZGVyLXN0eWxlOnNvbGlkOyBcXHJcXG4gICAgYm9yZGVyLWNvbG9yOmxpZ2h0Z3JleTsgXFxyXFxuICAgIGJvcmRlci13aWR0aDoycHg7IFxcclxcbiAgICB3aWR0aDoxMDBweDsgXFxyXFxuICAgIGhlaWdodDo1MHB4XFxyXFxufVxcclxcblxcclxcbiNyZWxhdGlvbnMtbmV4dCB7XFxyXFxuICAgIHJpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jcmVsYXRpb25zLXByZXYge1xcclxcbiAgICBsZWZ0OiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dHByZXYtbGlzdCB7XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICBcXHJcXG4gICAgLm5hdkxpbmsge1xcclxcbiAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3JlbGF0aW9ucy1uZXh0LFxcclxcbiAgICAjcmVsYXRpb25zLXByZXYge1xcclxcbiAgICAgICAgd2lkdGg6IDI1JTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubmF2TGluayBhIHtcXHJcXG4gICAgY29sb3I6ICM5OTk7XFxyXFxufVxcclxcblxcclxcbiNjb21wbGV0aW9uQnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xcclxcbiAgICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Bc2tDb21wbGV0aW9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGlvbkJ1dHRvbik7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29tcGxldGlvbkJ1dHRvbkhvdmVyKTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25Bc2tDb21wbGV0aW9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29tcGxldGlvbkJ1dHRvbkhvdmVyKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb21wbGV0aW9uQnV0dG9uSG92ZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uQ29uZmlybUNvbXBsZXRpb24ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTBkMzkyO1xcclxcbiAgICBib3JkZXItY29sb3I6ICMzZGM2ODI7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5idXR0b25Db25maXJtQ29tcGxldGlvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZGM2ODI7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzNkYzY4MjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdkxpbmtCZyB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDU1cHg7XFxyXFxuICAgIGNvbG9yOiAjOTk5O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAzcHggcmdiYSg1MCwgNTAsIDUwLCAwLjUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDNweCByZ2JhKDUwLCA1MCwgNTAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZMaW5rQmc6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzk5OTtcXHJcXG59XFxyXFxuXFxyXFxuI25hdkxpbmtCZ1JpZ2h0IHtcXHJcXG4gICAgcmlnaHQ6IC0xMDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweCAwIDY1cHg7XFxyXFxufVxcclxcblxcclxcbiNuYXZMaW5rQmdMZWZ0IHtcXHJcXG4gICAgbGVmdDogLTY1cHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZWh0bWwge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciAuc2VjdGlvbj5kaXYuc2lkZWJhciB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDAuNWVtIDFlbTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmEuZGlzcXVzX3RocmVhZF9saW5rIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5yZXZlYWxfYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pZnJhbWVbc2VhbWxlc3NdIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuY29udGFpbmVyIC5zZWN0aW9uPmRpdi5zaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAzZW0gMC41ZW0gMWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcclxcbiAgICAuY29udGFpbmVyIC5zZWN0aW9uPmRpdi5zaWRlYmFyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAxMWVtIDAuNWVtIDFlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5jb250YWluZXIgLnNlY3Rpb24+ZGl2LnNpZGViYXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDE4ZW0gMC41ZW0gMWVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbmRpdi5FeGVjdXRpb25WaXN1YWxpemVyIHRhYmxlLnZpc3VhbGl6ZXIge1xcclxcbiAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnNsdG9vbHRpcCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTAyMDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG4gICAgYm90dG9tOiAxMjAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsdG9vbHRpcCAuc2x0b29sdGlwLWFycm93IHtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsdG9vbHRpcC1pbm5lciB7XFxyXFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDNweCA4cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10b29sdGlwKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bC5kcm9wZG93bi1tZW51Lmdsb2JhbHRvYyB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDcwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmdsb2JhbHRvYyBzcGFuLmNhcHRpb24tdGV4dCB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFN0eWxlIGxwIHRleHRhcmVhcy4gKi9cXHJcXG50ZXh0YXJlYSNscC1yZXN1bHQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMGVtO1xcclxcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbiAqIEhpZGUgb25seSB2aXN1YWxseSwgYnV0IGhhdmUgaXQgYXZhaWxhYmxlIGZvciBzY3JlZW4gcmVhZGVyczpcXHJcXG4gKiBodHRwczovL3Nub29rLmNhL2FyY2hpdmVzL2h0bWxfYW5kX2Nzcy9oaWRpbmctY29udGVudC1mb3ItYWNjZXNzaWJpbGl0eVxcclxcbiAqXFxyXFxuICogMS4gRm9yIGxvbmcgY29udGVudCwgbGluZSBmZWVkcyBhcmUgbm90IGludGVycHJldGVkIGFzIHNwYWNlcyBhbmQgc21hbGwgd2lkdGhcXHJcXG4gKiAgICBjYXVzZXMgY29udGVudCB0byB3cmFwIDEgd29yZCBwZXIgbGluZTpcXHJcXG4gKiAgICBodHRwczovL21lZGl1bS5jb20vQGplc3NlYmVhY2gvYmV3YXJlLXNtdXNoZWQtb2ZmLXNjcmVlbi1hY2Nlc3NpYmxlLXRleHQtNTk1MmE0YzJjYmZlXFxyXFxuICovXFxyXFxuXFxyXFxuLnZpc3VhbGx5aGlkZGVuIHtcXHJcXG4gICAgYm9yZGVyOiAwO1xcclxcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xcclxcbiAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgbWFyZ2luOiAtMXB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxcHg7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIC8qIDEgKi9cXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gKiBFeHRlbmRzIHRoZSAudmlzdWFsbHloaWRkZW4gY2xhc3MgdG8gYWxsb3cgdGhlIGVsZW1lbnRcXHJcXG4gKiB0byBiZSBmb2N1c2FibGUgd2hlbiBuYXZpZ2F0ZWQgdG8gdmlhIHRoZSBrZXlib2FyZDpcXHJcXG4gKiBodHRwczovL3d3dy5kcnVwYWwub3JnL25vZGUvODk3NjM4XFxyXFxuICovXFxyXFxuXFxyXFxuLnZpc3VhbGx5aGlkZGVuLmZvY3VzYWJsZTphY3RpdmUsXFxyXFxuLnZpc3VhbGx5aGlkZGVuLmZvY3VzYWJsZTpmb2N1cyB7XFxyXFxuICAgIGNsaXA6IGF1dG87XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uYmxvY2txdW90ZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jc2Nwcm9ncmVzc2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNzdWJjaGFwdGVycHJvZ3Jlc3M+ZGl2IHtcXHJcXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbiNzdWJjaGFwdGVycHJvZ3Jlc3M+ZGl2LmxvZ2dlZG91dCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLnJ1bmVzdG9uZV9jYXB0aW9uIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucnVuZXN0b25lX2NhcHRpb25fZGl2aWQge1xcclxcbiAgICBvcGFjaXR5OiA1MCU7XFxyXFxufVxcclxcblxcclxcbiNxdWVzdGlvbnMgLnJ1bmVzdG9uZV9jYXB0aW9uOmJlZm9yZSB7XFxyXFxuICAgIGNvdW50ZXItaW5jcmVtZW50OiByc2NvbXBvbmVudDtcXHJcXG4gICAgY29udGVudDogXFxcIlByb2JsZW06IFxcXCJjb3VudGVyKHJzY29tcG9uZW50KSBcXFwiIC0tIFxcXCI7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYm9keUZvbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uanVweXRlcl9jb250YWluZXIgLm91dHB1dCAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uanVweXRlcl9jb250YWluZXIgLm91dHB1dCB0ZCB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5qdXB5dGVyX2NvbnRhaW5lciAub3V0cHV0IHRoIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLypUaGVtZSB0b2dnbGUqL1xcclxcbi50aGVtZS1zd2l0Y2gtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGVtIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1zd2l0Y2gge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogMzRweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLXN3aXRjaCBpbnB1dCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm90dG9tOiA0cHg7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgIGxlZnQ6IDRweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNHM7XFxyXFxuICAgIHdpZHRoOiAyNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkKy5zbGlkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDpjaGVja2VkKy5zbGlkZXI6YmVmb3JlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLnJvdW5kIHtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi8qRW5kIHRoZW1lIHRvZ2dsZSovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9jb21wbGV0ZWQucG5nXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vYWN0aXZlLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBWYXJpYWJsZXMgaG9sZGluZyB0aGVtZSBjb2xvcnMgKi9cXHJcXG46cm9vdCB7XFxyXFxuXFx0LS1tZW51OiAjRkZGRkZGO1xcclxcbn1cXHJcXG5cXHJcXG5bZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXHJcXG5cXHQtLW1lbnU6ICMwMDAwMDA7XFxyXFxufVxcclxcblxcclxcbi5teS1oaWdobGlnaHRlZC10ZXh0e1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6I0ZGRkY5OTtcXHJcXG59XFxyXFxuLnNvY2lhbC1oaWdobGlnaHRlZC10ZXh0e1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6I0ZGQ0NDQztcXHJcXG59XFxyXFxuLmhpZ2hsaWdodC1vcHRpb24tYm94e1xcclxcblxcdHBvc2l0aW9uOmFic29sdXRlO1xcclxcblxcdHRvcDowcHg7XFxyXFxuXFx0bGVmdDowcHg7XFxyXFxufVxcclxcbi5oaWdobGlnaHQtb3B0aW9uLWJveCBsaXsgXFxyXFxuXFx0aGVpZ2h0OjI0cHg7XFxyXFxufVxcclxcbiNjb250aW51ZS1yZWFkaW5ne1xcclxcblxcdHBhZGRpbmctdG9wOjIwcHg7XFxyXFxuXFx0ZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuI2NvbnRpbnVlLXJlYWRpbmcgYXtcXHJcXG5cXHRmbG9hdDpyaWdodDtcXHJcXG5cXHRtYXJnaW4tcmlnaHQ6MjBweDtcXHJcXG59XFxyXFxubGkuY29tcGxldGVkXFxyXFxue1xcclxcbmxpc3Qtc3R5bGUtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbmxpLmFjdGl2ZVxcclxcbntcXHJcXG5saXN0LXN0eWxlLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG4uaW5mb1RleHRDb21wbGV0ZWR7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6MTBweDtcXHJcXG5cXHRmb250LXNpemU6MC45ZW07XFxyXFxuXFx0Y29sb3I6IzNkYzY4MjtcXHJcXG5cXHRkaXNwbGF5Om5vbmU7XFxyXFxuXFx0Zm9udC1zdHlsZTppdGFsaWM7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG4uaW5mb1RleHRBY3RpdmV7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6MTBweDtcXHJcXG5cXHRmb250LXNpemU6MC45ZW07XFxyXFxuXFx0Y29sb3I6I2ZmOWYxOTtcXHJcXG5cXHRkaXNwbGF5Om5vbmU7XFxyXFxuXFx0Zm9udC1zdHlsZTppdGFsaWM7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG4uZHJvcGRvd24tbWVudXtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlIG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMXB4IDAgMDtcXHJcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG4uZHJvcGRvd24tbWVudSB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZSBub25lO1xcclxcbiAgICBtYXJnaW46IDAgMCA5cHggMjVweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaGlnaGxpZ2h0c3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRjk5O1xcclxcbn1cXHJcXG5kaXYuZG9jdW1lbnR3cmFwcGVyIHtcXHJcXG5cXHRib3JkZXIgOiAwIG5vbmU7XFxyXFxufVxcclxcbmRpdi5ib2R5d3JhcHBlciB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAwIG5vbmU7XFxyXFxufVxcclxcbmRpdi5zcGhpbnhzaWRlYmFyIHtcXHJcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNDQ0NDQ0M7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4uYm9keT4uc2VjdGlvbiAuc2VjdGlvbntcXHJcXG5cXHRwYWRkaW5nLXRvcDogMXB4O1xcclxcbn1cXHJcXG4janVtcC10by1jaGFwdGVye1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMTVlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4jbmF2aWdhdGlvbi1saW5rc3tcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcclxcblxcdHBhZGRpbmc6MTBweDtcXHJcXG5cXHRtYXJnaW46MTBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vcnVuZXN0b25lL2NvbW1vbi9jc3MvdXNlci1oaWdobGlnaHRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQ0FBbUM7QUFDbkM7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QjtBQUNBO0NBQ0Msd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxpQkFBaUI7Q0FDakIsT0FBTztDQUNQLFFBQVE7QUFDVDtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsaUJBQWlCO0FBQ2xCO0FBQ0E7O0FBRUEseURBQXNDO0FBQ3RDO0FBQ0E7O0FBRUEseURBQW1DO0FBQ25DO0FBQ0E7Q0FDQyxnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGFBQWE7Q0FDYixZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixhQUFhO0NBQ2IsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7QUFDQTtDQUNDLDRCQUE0QjtJQUN6Qiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5Qix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLFdBQVc7SUFDWCxPQUFPO0lBQ1AsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0MsOEJBQThCO0NBQzlCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixjQUFjO0NBQ2pCLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyx5QkFBeUI7SUFDdEIseUJBQXlCO0NBQzVCLFlBQVk7Q0FDWixXQUFXO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogVmFyaWFibGVzIGhvbGRpbmcgdGhlbWUgY29sb3JzICovXFxyXFxuOnJvb3Qge1xcclxcblxcdC0tbWVudTogI0ZGRkZGRjtcXHJcXG59XFxyXFxuXFxyXFxuW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSB7XFxyXFxuXFx0LS1tZW51OiAjMDAwMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktaGlnaGxpZ2h0ZWQtdGV4dHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGOTk7XFxyXFxufVxcclxcbi5zb2NpYWwtaGlnaGxpZ2h0ZWQtdGV4dHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiNGRkNDQ0M7XFxyXFxufVxcclxcbi5oaWdobGlnaHQtb3B0aW9uLWJveHtcXHJcXG5cXHRwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG5cXHR0b3A6MHB4O1xcclxcblxcdGxlZnQ6MHB4O1xcclxcbn1cXHJcXG4uaGlnaGxpZ2h0LW9wdGlvbi1ib3ggbGl7IFxcclxcblxcdGhlaWdodDoyNHB4O1xcclxcbn1cXHJcXG4jY29udGludWUtcmVhZGluZ3tcXHJcXG5cXHRwYWRkaW5nLXRvcDoyMHB4O1xcclxcblxcdGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbiNjb250aW51ZS1yZWFkaW5nIGF7XFxyXFxuXFx0ZmxvYXQ6cmlnaHQ7XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OjIwcHg7XFxyXFxufVxcclxcbmxpLmNvbXBsZXRlZFxcclxcbntcXHJcXG5saXN0LXN0eWxlLWltYWdlOiB1cmwoJ2NvbXBsZXRlZC5wbmcnKTtcXHJcXG59XFxyXFxubGkuYWN0aXZlXFxyXFxue1xcclxcbmxpc3Qtc3R5bGUtaW1hZ2U6IHVybCgnYWN0aXZlLnBuZycpO1xcclxcbn1cXHJcXG4uaW5mb1RleHRDb21wbGV0ZWR7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6MTBweDtcXHJcXG5cXHRmb250LXNpemU6MC45ZW07XFxyXFxuXFx0Y29sb3I6IzNkYzY4MjtcXHJcXG5cXHRkaXNwbGF5Om5vbmU7XFxyXFxuXFx0Zm9udC1zdHlsZTppdGFsaWM7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG4uaW5mb1RleHRBY3RpdmV7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6MTBweDtcXHJcXG5cXHRmb250LXNpemU6MC45ZW07XFxyXFxuXFx0Y29sb3I6I2ZmOWYxOTtcXHJcXG5cXHRkaXNwbGF5Om5vbmU7XFxyXFxuXFx0Zm9udC1zdHlsZTppdGFsaWM7XFxyXFxuXFx0b3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG4uZHJvcGRvd24tbWVudXtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZSBvdXRzaWRlIG5vbmU7XFxyXFxuICAgIG1hcmdpbjogMXB4IDAgMDtcXHJcXG4gICAgbWluLXdpZHRoOiAxNjBweDtcXHJcXG4gICAgcGFkZGluZzogNHB4IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbn1cXHJcXG4uZHJvcGRvd24tbWVudSB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IGRpc2Mgb3V0c2lkZSBub25lO1xcclxcbiAgICBtYXJnaW46IDAgMCA5cHggMjVweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXItaGlnaGxpZ2h0c3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojRkZGRjk5O1xcclxcbn1cXHJcXG5kaXYuZG9jdW1lbnR3cmFwcGVyIHtcXHJcXG5cXHRib3JkZXIgOiAwIG5vbmU7XFxyXFxufVxcclxcbmRpdi5ib2R5d3JhcHBlciB7XFxyXFxuXFx0Ym9yZGVyLXJpZ2h0OiAwIG5vbmU7XFxyXFxufVxcclxcbmRpdi5zcGhpbnhzaWRlYmFyIHtcXHJcXG5cXHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNDQ0NDQ0M7XFxyXFxuXFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG4uYm9keT4uc2VjdGlvbiAuc2VjdGlvbntcXHJcXG5cXHRwYWRkaW5nLXRvcDogMXB4O1xcclxcbn1cXHJcXG4janVtcC10by1jaGFwdGVye1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMTVlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEyMCU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcclxcblxcdHdpZHRoOiA4MCU7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4jbmF2aWdhdGlvbi1saW5rc3tcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjhGOEY4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xcclxcblxcdHBhZGRpbmc6MTBweDtcXHJcXG5cXHRtYXJnaW46MTBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hdHJpeGVxX2NvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA2cHggNnB4IDZweCA2cHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggNnB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfdGFibGUge1xcclxcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlci13aWR0aDogMnB4IDJweDtcXHJcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICBib3JkZXItY29sb3I6IGJsYWNrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMHB4IDFweDtcXHJcXG4gIG1hcmdpbjogMHB4IDBweCA0cHggMHB4O1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X2NvbHVtbiB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogMnB4IDhweCAycHggOHB4O1xcclxcbiAgbWFyZ2luOiAwcHggMXB4O1xcclxcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDBweCAwcHg7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfY29sdW1uIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMXB4O1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfdGFibGUgLm1hdHJpeF9jb2x1bW4ge1xcclxcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF90YWJsZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfdGFibGU6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMnB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDBweCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF9jb2x1bW46YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogLTJweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF9jb2x1bW46YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIiBcXFwiO1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIGhlaWdodDogMnB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdG9wOiAycHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfdGFibGUgc3Bhbi5tYXRyaXhfY29sdW1uOmJlZm9yZSB7XFxyXFxuICBoZWlnaHQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfdGFibGUgc3Bhbi5tYXRyaXhfY29sdW1uOmFmdGVyIHtcXHJcXG4gIGhlaWdodDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogbm9uZTtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfb3BlcmF0b3Ige1xcclxcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgbWFyZ2luOiAwcHggNHB4IDBweCA0cHg7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfbGFiZWwge1xcclxcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMjBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDFweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ29sb3JzIGZvciBtYXRyaXggaGlnaGxpZ2h0aW5nICovXFxyXFxuXFxyXFxuLmxpZ2h0Y3lhbkNvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y3lhbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpZ2h0Z3JleUNvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLnB1cnBsZUNvbG9yIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNERkI1RTg7XFxyXFxufVxcclxcblxcclxcbi55ZWxsb3dDb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGRjlEO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvbWF0cml4ZXEvY3NzL21hdHJpeGVxLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQSxtQ0FBbUM7O0FBRW5DO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYXRyaXhlcV9jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNnB4IDZweCA2cHggNnB4O1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDZweCAwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICBib3JkZXItd2lkdGg6IDJweCAycHg7XFxyXFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDBweCAxcHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggNHB4IDBweDtcXHJcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG5zcGFuLm1hdHJpeF9jb2x1bW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDJweCA4cHggMnB4IDhweDtcXHJcXG4gIG1hcmdpbjogMHB4IDFweDtcXHJcXG4gIGJvcmRlci13aWR0aDogMHB4IDBweCAwcHggMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X2NvbHVtbiBkaXYge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDFweDtcXHJcXG4gIHBhZGRpbmc6IDJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlIC5tYXRyaXhfY29sdW1uIHtcXHJcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfdGFibGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IC0ycHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDJweDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiAwcHggYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfY29sdW1uOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiIFxcXCI7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgaGVpZ2h0OiAycHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IC0ycHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5tYXRyaXhfY29sdW1uOmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDJweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRvcDogMnB4O1xcclxcbiAgei1pbmRleDogMTAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlIHNwYW4ubWF0cml4X2NvbHVtbjpiZWZvcmUge1xcclxcbiAgaGVpZ2h0OiAwcHg7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X3RhYmxlIHNwYW4ubWF0cml4X2NvbHVtbjphZnRlciB7XFxyXFxuICBoZWlnaHQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuc3BhbiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGhlaWdodDogMjRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X29wZXJhdG9yIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDRweCAwcHggNHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbnNwYW4ubWF0cml4X2xhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXHJcXG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDIwcHg7XFxyXFxuICBtYXJnaW46IDBweCAxcHg7XFxyXFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxufVxcclxcblxcclxcbi8qIENvbG9ycyBmb3IgbWF0cml4IGhpZ2hsaWdodGluZyAqL1xcclxcblxcclxcbi5saWdodGN5YW5Db2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGN5YW47XFxyXFxufVxcclxcblxcclxcbi5saWdodGdyZXlDb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxyXFxufVxcclxcblxcclxcbi5wdXJwbGVDb2xvciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZCNUU4O1xcclxcbn1cXHJcXG5cXHJcXG4ueWVsbG93Q29sb3Ige1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZERkY5RDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyoqKioqKioqKioqKioqKioqKioqKiBDb2xvdXIgcmVmZXJlbmNlIGNoYXJ0KioqKioqKioqKioqKioqKlxcclxcbmVsZW1lbXQgKioqKioqKioqIHByb3BlcnR5ICoqKioqKioqKiBjb2xvdXIgKioqKioqKipcXHJcXG5cXHJcXG53ZWJnbF9jb250YWluZXIgIGJhY2tncm91bmQtY29sb3IgICAgI2ZjZjhlM1xcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLyogTWFqb3Igc2VjdGlvbnMgKi9cXHJcXG4ud2ViZ2xfY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2NtZHMge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfcm93MiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwcHggNHB4IDBweCA0cHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGhlaWdodDogNTUwcHg7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9lZGl0b3JzIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9jYW52YXMge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX291dHB1dCB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBtYXJnaW4tdG9wOiA2cHg7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRGV0YWlscyB3aXRoaW4gZWFjaCBzZWN0aW9uICovXFxyXFxuLyogVGFiYmVkIHRpdGxlcywgdWwgaG9yaXpvbnRhbCBsaXN0ICovXFxyXFxuLndlYmdsX25hdl90YWJzIHtcXHJcXG4gIGhlaWdodDogMzFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAwcHg7XFxyXFxuICBwYWRkaW5nOiA2cHggMHB4IDBweCAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZDQ0I4O1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZmJlZWQ1O1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX25hdl90YWJzIGxpIHtcXHJcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcXHJcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggMHB4IDRweDtcXHJcXG4gIHBhZGRpbmc6IDRweCAxcHggNHB4IDRweDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTJDQztcXHJcXG4gIGZvbnQtc2l6ZTogOXB0O1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfbmF2X3RhYnMgbGkgPiBhIHtcXHJcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDhweDtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfbmF2X3RhYnMgPiBsaSA+IGE6aG92ZXIge1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjYjRiMTlkO1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX25hdl90YWJzIGxpLmFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgbGlzdC1zdHlsZS1pbWFnZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogV2ViZ2wgZWRpdG9ycyAqL1xcclxcbi53ZWJnbF90YWJfY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBjb2xvcjogI2MwOTg1MztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiX2NvbnRlbnQuYWN0aXZlIHtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF90YWJfY29udGVudCA+ICoge1xcclxcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAvKlxcdHBvc2l0aW9uOnJlbGF0aXZlOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiX2NvbnRlbnQgLmNsZWFyZml4IHtcXHJcXG4gIHBvc2l0aW9uOiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiX2VkaXRvciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGNsZWFyOiBib3RoO1xcclxcbiAgcGFkZGluZzogMTBweCA0cHggMTBweCA0cHg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGNvbG9yOiAjYzA5ODUzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcXHJcXG59XFxyXFxuXFxyXFxuLyogc3BhbiB0aGF0IGNvbnRhaW5zIHRoZSB0YWJiZWQgdGV4dCBlZGl0b3JzICovXFxyXFxuLndlYmdsX2NvZGUge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3RhYl9jb250ZW50c190ZXh0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDRweCAxMHB4IDRweDtcXHJcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgY29sb3I6ICNjMDk4NTM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2Vycm9yTWVzc2FnZXMge1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3dhcm5pbmdNZXNzYWdlcyB7XFxyXFxuICBjb2xvcjogcmdiKDE3MCwgMzQsIDE2NCk7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9pbmZvTWVzc2FnZXMge1xcclxcbiAgY29sb3I6IHJnYigyNCwgMTQ0LCA2NCk7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9vdXRwdXRfZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luOiAycHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcclxcbiAgcGFkZGluZy10b3A6IDRweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogNHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGhlaWdodDogMTRlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9lZGl0b3JfaGlnaGxpZ2h0IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7IC8qIHZlcnkgbGlnaHQgZ3JleSAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUbyBhbHdheXMgc2hvdyB0aGUgc2Nyb2xsIGJhciBpbiBhIGRpdiAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiA3cHg7XFxyXFxufVxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwuNSk7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogM3B4IDZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0aGlzdGxlO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIC1vLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9jaGVja2JveCB7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF90YWJiZWRfZWRpdG9yIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogOXB0O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FudmFzM0Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5Db2RlTWlycm9yLndlYmdsLWRlZmF1bHQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDhwdDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi53ZWJnbC1kZWZhdWx0IHtcXHJcXG4gIGZvbnQtc2l6ZTogOHB0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvd2ViZ2xkZW1vL2Nzcy93ZWJnbGludGVyYWN0aXZlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Q0FLQzs7QUFFRCxtQkFBbUI7QUFDbkI7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JB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Q2xDLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztFQUNsQyxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqKioqKioqKioqKioqKioqIENvbG91ciByZWZlcmVuY2UgY2hhcnQqKioqKioqKioqKioqKioqXFxyXFxuZWxlbWVtdCAqKioqKioqKiogcHJvcGVydHkgKioqKioqKioqIGNvbG91ciAqKioqKioqKlxcclxcblxcclxcbndlYmdsX2NvbnRhaW5lciAgYmFja2dyb3VuZC1jb2xvciAgICAjZmNmOGUzXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4vKiBNYWpvciBzZWN0aW9ucyAqL1xcclxcbi53ZWJnbF9jb250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfY21kcyB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9yb3cyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDBweCA0cHggMHB4IDRweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgaGVpZ2h0OiA1NTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2VkaXRvcnMge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2NhbnZhcyB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfb3V0cHV0IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIG1hcmdpbi10b3A6IDZweDtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEZXRhaWxzIHdpdGhpbiBlYWNoIHNlY3Rpb24gKi9cXHJcXG4vKiBUYWJiZWQgdGl0bGVzLCB1bCBob3Jpem9udGFsIGxpc3QgKi9cXHJcXG4ud2ViZ2xfbmF2X3RhYnMge1xcclxcbiAgaGVpZ2h0OiAzMXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDZweCAwcHggMHB4IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkNDQjg7XFxyXFxuICBib3JkZXItY29sb3I6ICNmYmVlZDU7XFxyXFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XFxyXFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfbmF2X3RhYnMgbGkge1xcclxcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNHB4O1xcclxcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcXHJcXG4gIG1hcmdpbjogMHB4IDBweCAwcHggNHB4O1xcclxcbiAgcGFkZGluZzogNHB4IDFweCA0cHggNHB4O1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZmxvYXQ6IGxlZnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZFMkNDO1xcclxcbiAgZm9udC1zaXplOiA5cHQ7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9uYXZfdGFicyBsaSA+IGEge1xcclxcbiAgcGFkZGluZzogOHB4IDhweCA4cHggOHB4O1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF9uYXZfdGFicyA+IGxpID4gYTpob3ZlciB7XFxyXFxuICBib3JkZXItY29sb3I6ICNiNGIxOWQ7XFxyXFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfbmF2X3RhYnMgbGkuYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlLWltYWdlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBXZWJnbCBlZGl0b3JzICovXFxyXFxuLndlYmdsX3RhYl9jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGNvbG9yOiAjYzA5ODUzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMztcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF90YWJfY29udGVudC5hY3RpdmUge1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3RhYl9jb250ZW50ID4gKiB7XFxyXFxuICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gIC8qXFx0cG9zaXRpb246cmVsYXRpdmU7ICovXFxyXFxufVxcclxcblxcclxcbi53ZWJnbF90YWJfY29udGVudCAuY2xlYXJmaXgge1xcclxcbiAgcG9zaXRpb246IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbi53ZWJnbF90YWJfZWRpdG9yIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgY2xlYXI6IGJvdGg7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDRweCAxMHB4IDRweDtcXHJcXG4gIG1hcmdpbjogMHB4IDBweCAyMHB4IDBweDtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgY29sb3I6ICNjMDk4NTM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzcGFuIHRoYXQgY29udGFpbnMgdGhlIHRhYmJlZCB0ZXh0IGVkaXRvcnMgKi9cXHJcXG4ud2ViZ2xfY29kZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfdGFiX2NvbnRlbnRzX3RleHQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBjbGVhcjogYm90aDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggNHB4IDEwcHggNHB4O1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHggMHB4O1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBjb2xvcjogI2MwOTg1MztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfZXJyb3JNZXNzYWdlcyB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5cXHJcXG4ud2ViZ2xfd2FybmluZ01lc3NhZ2VzIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTcwLCAzNCwgMTY0KTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2luZm9NZXNzYWdlcyB7XFxyXFxuICBjb2xvcjogcmdiKDI0LCAxNDQsIDY0KTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX291dHB1dF9kaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW46IDJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxyXFxuICBwYWRkaW5nLXRvcDogNHB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgaGVpZ2h0OiAxNGVtO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2VkaXRvcl9oaWdobGlnaHQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTsgLyogdmVyeSBsaWdodCBncmV5ICovXFxyXFxufVxcclxcblxcclxcbi8qIFRvIGFsd2F5cyBzaG93IHRoZSBzY3JvbGwgYmFyIGluIGEgZGl2ICovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDdweDtcXHJcXG59XFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNSk7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDI1NSwyNTUsMjU1LC41KTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2J0biB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAzcHggNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRoaXN0bGU7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX2NoZWNrYm94IHtcXHJcXG59XFxyXFxuXFxyXFxuLndlYmdsX3RhYmJlZF9lZGl0b3Ige1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiA5cHQ7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5jYW52YXMzRCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLkNvZGVNaXJyb3Iud2ViZ2wtZGVmYXVsdCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogOHB0O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLndlYmdsLWRlZmF1bHQge1xcclxcbiAgZm9udC1zaXplOiA4cHQ7XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByZXNlbnRlcl9tb2RlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcnVuZXN0b25lLWN1c3RvbS1zcGhpbngtYm9vdHN0cmFwLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdXNlci1oaWdobGlnaHRzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWF0cml4ZXEuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi93ZWJnbGludGVyYWN0aXZlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8qKlxyXG4gKlxyXG4gKiBVc2VyOiBibWlsbGVyXHJcbiAqIE9yaWdpbmFsOiAyMDExLTA0LTIwXHJcbiAqIERhdGU6IDIwMTktMDYtMTRcclxuICogVGltZTogMjowMSBQTVxyXG4gKiBUaGlzIGNoYW5nZSBtYXJrcyB0aGUgYmVnaW5uaW5nIG9mIHZlcnNpb24gNC4wIG9mIHRoZSBydW5lc3RvbmUgY29tcG9uZW50c1xyXG4gKiBMb2dpbi9sb2dvdXQgaXMgbm8gbG9uZ2VyIGhhbmRsZWQgdGhyb3VnaCBqYXZhc2NyaXB0IGJ1dCByYXRoZXIgc2VydmVyIHNpZGUuXHJcbiAqIE1hbnkgb2YgdGhlIGNvbXBvbmVudHMgZGVwZW5kIG9uIHRoZSBydW5lc3RvbmU6bG9naW4gZXZlbnQgc28gd2Ugd2lsbCBrZWVwIHRoYXRcclxuICogZm9yIG5vdyB0byBrZWVwIHRoZSBjaHVybiBmYWlybHkgbWluaW1hbC5cclxuICovXHJcblxyXG4vKlxyXG5cclxuIENvcHlyaWdodCAoQykgMjAxMSAgQnJhZCBNaWxsZXIgIGJvbmVsYWtlQGdtYWlsLmNvbVxyXG5cclxuIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XHJcbiBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxyXG4gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcclxuIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXHJcblxyXG4gVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXHJcbiBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxyXG4gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxyXG4gR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cclxuXHJcbiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxyXG4gYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXHJcblxyXG4gKi9cclxuXHJcbi8vXHJcbi8vIENoZXZyb24gZnVuY3Rpb25zIC0gTXVzdCBjb3JyZXNwb25kIHdpdGggd2lkdGggaW4gcnVuZXN0b25lLWN1c3RvbS1zcGhpbngtYm9vdHN0cmFwLmNzc1xyXG4vL1xyXG4kKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciByZXNpemVXaW5kb3cgPSBmYWxzZTtcclxuICAgIHZhciByZXNpemVXaWR0aCA9IDYwMDtcclxuICAgICQod2luZG93KVxyXG4gICAgICAgIC5vbihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IHJlc2l6ZVdpZHRoICYmIHJlc2l6ZVdpbmRvdyA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzaXplV2luZG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3BQcmV2ID0gJChcIiNyZWxhdGlvbnMtcHJldlwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcInRvcC1yZWxhdGlvbnMtcHJldlwiKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b3BOZXh0ID0gJChcIiNyZWxhdGlvbnMtbmV4dFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jbG9uZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcInRvcC1yZWxhdGlvbnMtbmV4dFwiKTtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLXByZXYsICNyZWxhdGlvbnMtbmV4dFwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tUHJldiA9IHRvcFByZXZcclxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJib3R0b20tcmVsYXRpb25zLXByZXZcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tTmV4dCA9IHRvcE5leHRcclxuICAgICAgICAgICAgICAgICAgICAuY2xvbmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJib3R0b20tcmVsYXRpb25zLW5leHRcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiZGl2I21haW4tY29udGVudCA+IGRpdlwiKS5wcmVwZW5kKHRvcFByZXYsIHRvcE5leHQpO1xyXG4gICAgICAgICAgICAgICAgJChcIiN0b3AtcmVsYXRpb25zLXByZXYsICN0b3AtcmVsYXRpb25zLW5leHRcIikud3JhcEFsbChcclxuICAgICAgICAgICAgICAgICAgICAnPHVsIGlkPVwidG9wLXJlbGF0aW9ucy1jb25zb2xlXCI+PC91bD4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgJChcImRpdiNtYWluLWNvbnRlbnQgPiBkaXZcIikuYXBwZW5kKGJvdHRvbVByZXYsIGJvdHRvbU5leHQpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNib3R0b20tcmVsYXRpb25zLXByZXYsICNib3R0b20tcmVsYXRpb25zLW5leHRcIikud3JhcEFsbChcclxuICAgICAgICAgICAgICAgICAgICAnPHVsIGlkPVwiYm90dG9tLXJlbGF0aW9ucy1jb25zb2xlXCI+PC91bD4nXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSByZXNpemVXaWR0aCArIDEgJiYgcmVzaXplV2luZG93ID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJlc2l6ZVdpbmRvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgJChcIiN0b3AtcmVsYXRpb25zLWNvbnNvbGUsICNib3R0b20tcmVsYXRpb25zLWNvbnNvbGVcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1wcmV2LCAjcmVsYXRpb25zLW5leHRcIikuc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAucmVzaXplKCk7XHJcbn0pO1xyXG5cclxuLy9cclxuLy8gUGFnZSBkZWNvcmF0aW9uIGZ1bmN0aW9uc1xyXG4vL1xyXG5cclxuZnVuY3Rpb24gYWRkUmVhZGluZ0xpc3QoKSB7XHJcbiAgICBpZiAoZUJvb2tDb25maWcucmVhZGluZ3MpIHtcclxuICAgICAgICB2YXIgbCwgbnh0LCBwYXRoX3BhcnRzLCBueHRfbGluaztcclxuICAgICAgICBsZXQgY3VyX3BhdGhfcGFydHMgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoXCIvXCIpO1xyXG4gICAgICAgIGxldCBuYW1lID1cclxuICAgICAgICAgICAgY3VyX3BhdGhfcGFydHNbY3VyX3BhdGhfcGFydHMubGVuZ3RoIC0gMl0gK1xyXG4gICAgICAgICAgICBcIi9cIiArXHJcbiAgICAgICAgICAgIGN1cl9wYXRoX3BhcnRzW2N1cl9wYXRoX3BhcnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbiA9IGVCb29rQ29uZmlnLnJlYWRpbmdzLmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgbGV0IG51bV9yZWFkaW5ncyA9IGVCb29rQ29uZmlnLnJlYWRpbmdzLmxlbmd0aDtcclxuICAgICAgICBpZiAocG9zaXRpb24gPT0gZUJvb2tDb25maWcucmVhZGluZ3MubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAvLyBubyBtb3JlIHJlYWRpbmdzXHJcbiAgICAgICAgICAgIGwgPSAkKFwiPGRpdiAvPlwiLCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgRmluaXNoZWQgcmVhZGluZyBhc3NpZ25tZW50LiBQYWdlICR7bnVtX3JlYWRpbmdzfSBvZiAke251bV9yZWFkaW5nc30uYCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIGdldCBuZXh0IG5hbWVcclxuICAgICAgICAgICAgbnh0ID0gZUJvb2tDb25maWcucmVhZGluZ3NbcG9zaXRpb24gKyAxXTtcclxuICAgICAgICAgICAgcGF0aF9wYXJ0cyA9IGN1cl9wYXRoX3BhcnRzLnNsaWNlKDAsIGN1cl9wYXRoX3BhcnRzLmxlbmd0aCAtIDIpO1xyXG4gICAgICAgICAgICBwYXRoX3BhcnRzLnB1c2gobnh0KTtcclxuICAgICAgICAgICAgbnh0X2xpbmsgPSBwYXRoX3BhcnRzLmpvaW4oXCIvXCIpO1xyXG4gICAgICAgICAgICBsID0gJChcIjxhIC8+XCIsIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwibGlua1wiLFxyXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwiYnRuIGJ0bi1sZyAnICsgJ2J1dHRvbkNvbmZpcm1Db21wbGV0aW9uJ1wiLFxyXG4gICAgICAgICAgICAgICAgaHJlZjogbnh0X2xpbmssXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgQ29udGludWUgdG8gcGFnZSAke1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uICsgMlxyXG4gICAgICAgICAgICAgICAgfSBvZiAke251bV9yZWFkaW5nc30gaW4gdGhlIHJlYWRpbmcgYXNzaWdubWVudC5gLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsID0gJChcIjxkaXYgLz5cIiwge1xyXG4gICAgICAgICAgICAgICAgdGV4dDpcclxuICAgICAgICAgICAgICAgICAgICBcIlRoaXMgcGFnZSBpcyBub3QgcGFydCBvZiB0aGUgbGFzdCByZWFkaW5nIGFzc2lnbm1lbnQgeW91IHZpc2l0ZWQuXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI21haW4tY29udGVudFwiKS5hcHBlbmQobCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRpbWVkUmVmcmVzaCgpIHtcclxuICAgIHZhciB0aW1lb3V0UGVyaW9kID0gOTAwMDAwOyAvLyA3NSBtaW51dGVzXHJcbiAgICAkKGRvY3VtZW50KS5iaW5kKFwiaWRsZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEFmdGVyIHRpbWVvdXQgcGVyaW9kIHNlbmQgdGhlIHVzZXIgYmFjayB0byB0aGUgaW5kZXguICBUaGlzIHdpbGwgZm9yY2UgYSBsb2dpblxyXG4gICAgICAgIC8vIGlmIG5lZWRlZCB3aGVuIHRoZXkgd2FudCB0byBnbyB0byBhIHBhcnRpY3VsYXIgcGFnZS4gIFRoaXMgbWF5IG5vdCBiZSBwZXJmZWN0XHJcbiAgICAgICAgLy8gYnV0IGl0cyBhbiBlYXN5IHdheSB0byBtYWtlIHN1cmUgbGFwdG9wIHVzZXJzIGFyZSBwcm9wZXJseSBsb2dnZWQgaW4gd2hlbiB0aGV5XHJcbiAgICAgICAgLy8gdGFrZSBxdWl6emVzIGFuZCBzYXZlIHN0dWZmLlxyXG4gICAgICAgIGlmIChsb2NhdGlvbi5ocmVmLmluZGV4T2YoXCJpbmRleC5odG1sXCIpIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklkbGUgdGltZXIgLSBcIiArIGxvY2F0aW9uLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgbG9jYXRpb24uaHJlZiA9XHJcbiAgICAgICAgICAgICAgICBlQm9va0NvbmZpZy5hcHAgK1xyXG4gICAgICAgICAgICAgICAgXCIvZGVmYXVsdC91c2VyL2xvZ2luP19uZXh0PVwiICtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lICtcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLnNlYXJjaDtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgICQuaWRsZVRpbWVyKHRpbWVvdXRQZXJpb2QpO1xyXG59XHJcblxyXG5jbGFzcyBQYWdlUHJvZ3Jlc3NCYXIge1xyXG4gICAgY29uc3RydWN0b3IoYWN0RGljdCkge1xyXG4gICAgICAgIHRoaXMucG9zc2libGUgPSAwO1xyXG4gICAgICAgIHRoaXMudG90YWwgPSAxO1xyXG4gICAgICAgIGlmIChhY3REaWN0ICYmIE9iamVjdC5rZXlzKGFjdERpY3QpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gYWN0RGljdDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgYWN0aXZpdGllcyA9IHsgcGFnZTogMCB9O1xyXG4gICAgICAgICAgICAkKFwiLnJ1bmVzdG9uZVwiKS5lYWNoKGZ1bmN0aW9uIChpZHgsIGUpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2aXRpZXNbZS5maXJzdEVsZW1lbnRDaGlsZC5pZF0gPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpdml0aWVzID0gYWN0aXZpdGllcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVQcm9ncmVzcygpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKFxyXG4gICAgICAgICAgICAgICAgLy4qKGluZGV4Lmh0bWx8dG9jdHJlZS5odG1sfEV4ZXJjaXNlcy5odG1sfEdsb3NzYXJ5Lmh0bWx8c2VhcmNoLmh0bWwpJC9pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJChcIiNzY3Byb2dyZXNzY29udGFpbmVyXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9ncmVzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVByb2dyZXNzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5hY3Rpdml0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGUrKztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNba10gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3RhbCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclByb2dyZXNzKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IDA7XHJcbiAgICAgICAgJChcIiNzY3Byb2dyZXNzdG90YWxcIikudGV4dCh0aGlzLnRvdGFsKTtcclxuICAgICAgICAkKFwiI3NjcHJvZ3Jlc3Nwb3NzXCIpLnRleHQodGhpcy5wb3NzaWJsZSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFsdWUgPSAoMTAwICogdGhpcy50b3RhbCkgLyB0aGlzLnBvc3NpYmxlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKFwiI3N1YmNoYXB0ZXJwcm9ncmVzc1wiKS5wcm9ncmVzc2Jhcih7XHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWVCb29rQ29uZmlnLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICAgICAgJChcIiNzdWJjaGFwdGVycHJvZ3Jlc3M+ZGl2XCIpLmFkZENsYXNzKFwibG9nZ2Vkb3V0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcm9ncmVzcyhkaXZfaWQpIHtcclxuICAgICAgICB0aGlzLmFjdGl2aXRpZXNbZGl2X2lkXSsrO1xyXG4gICAgICAgIC8vIE9ubHkgdXBkYXRlIHRoZSBwcm9ncmVzcyBiYXIgb24gdGhlIGZpcnN0IGludGVyYWN0aW9uIHdpdGggYW4gb2JqZWN0LlxyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2aXRpZXNbZGl2X2lkXSA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsKys7XHJcbiAgICAgICAgICAgIGxldCB2YWwgPSAoMTAwICogdGhpcy50b3RhbCkgLyB0aGlzLnBvc3NpYmxlO1xyXG4gICAgICAgICAgICAkKFwiI3NjcHJvZ3Jlc3N0b3RhbFwiKS50ZXh0KHRoaXMudG90YWwpO1xyXG4gICAgICAgICAgICAkKFwiI3NjcHJvZ3Jlc3Nwb3NzXCIpLnRleHQodGhpcy5wb3NzaWJsZSk7XHJcbiAgICAgICAgICAgICQoXCIjc3ViY2hhcHRlcnByb2dyZXNzXCIpLnByb2dyZXNzYmFyKFwib3B0aW9uXCIsIFwidmFsdWVcIiwgdmFsKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgdmFsID09IDEwMC4wICYmXHJcbiAgICAgICAgICAgICAgICAkKFwiI2NvbXBsZXRpb25CdXR0b25cIikudGV4dCgpLnRvTG93ZXJDYXNlKCkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgXCJtYXJrIGFzIGNvbXBsZXRlZFwiXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgcGFnZVByb2dyZXNzVHJhY2tlciA9IHt9O1xyXG5cclxuZnVuY3Rpb24gaGFuZGxlUGFnZVNldHVwKCkge1xyXG4gICAgdmFyIG1lc3M7XHJcbiAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcclxuICAgICAgICBqUXVlcnkuZ2V0KGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcInNldF90el9vZmZzZXRcIiwge1xyXG4gICAgICAgICAgICB0aW1lem9uZW9mZnNldDogbmV3IERhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpIC8gNjAsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVCb29rQ29uZmlnLmlzTG9nZ2VkSW4pIHtcclxuICAgICAgICBtZXNzID0gYHVzZXJuYW1lOiAke2VCb29rQ29uZmlnLnVzZXJuYW1lfWA7XHJcbiAgICAgICAgaWYgKCFlQm9va0NvbmZpZy5pc0luc3RydWN0b3IpIHtcclxuICAgICAgICAgICAgJChcIiNpcF9kcm9wZG93bl9saW5rXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwicnVuZXN0b25lOmxvZ2luXCIpO1xyXG4gICAgICAgIGFkZFJlYWRpbmdMaXN0KCk7XHJcbiAgICAgICAgdGltZWRSZWZyZXNoKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lc3MgPSBcIk5vdCBsb2dnZWQgaW5cIjtcclxuICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKFwicnVuZXN0b25lOmxvZ291dFwiKTtcclxuICAgIH1cclxuICAgICQoXCIubG9nZ2VkaW51c2VyXCIpLmh0bWwobWVzcyk7XHJcblxyXG4gICAgcGFnZVByb2dyZXNzVHJhY2tlciA9IG5ldyBQYWdlUHJvZ3Jlc3NCYXIoZUJvb2tDb25maWcuYWN0aXZpdGllcyk7XHJcbiAgICBub3RpZnlSdW5lc3RvbmVDb21wb25lbnRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwTmF2YmFyTG9nZ2VkSW4oKSB7XHJcbiAgICAkKFwiI3Byb2ZpbGVsaW5rXCIpLnNob3coKTtcclxuICAgICQoXCIjcGFzc3dvcmRsaW5rXCIpLnNob3coKTtcclxuICAgICQoXCIjcmVnaXN0ZXJsaW5rXCIpLmhpZGUoKTtcclxuICAgICQoXCJsaS5sb2dpbm91dFwiKS5odG1sKFxyXG4gICAgICAgICc8YSBocmVmPVwiJyArIGVCb29rQ29uZmlnLmFwcCArICcvZGVmYXVsdC91c2VyL2xvZ291dFwiPkxvZyBPdXQ8L2E+J1xyXG4gICAgKTtcclxufVxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luXCIsIHNldHVwTmF2YmFyTG9nZ2VkSW4pO1xyXG5cclxuZnVuY3Rpb24gc2V0dXBOYXZiYXJMb2dnZWRPdXQoKSB7XHJcbiAgICBpZiAoZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInNldHVwIG5hdmJhciBmb3IgbG9nZ2VkIG91dFwiKTtcclxuICAgICAgICAkKFwiI3JlZ2lzdGVybGlua1wiKS5zaG93KCk7XHJcbiAgICAgICAgJChcIiNwcm9maWxlbGlua1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNwYXNzd29yZGxpbmtcIikuaGlkZSgpO1xyXG4gICAgICAgICQoXCIjaXBfZHJvcGRvd25fbGlua1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcImxpLmxvZ2lub3V0XCIpLmh0bWwoXHJcbiAgICAgICAgICAgICc8YSBocmVmPVwiJyArIGVCb29rQ29uZmlnLmFwcCArICcvZGVmYXVsdC91c2VyL2xvZ2luXCI+TG9naW48L2E+J1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgJChcIi5mb290ZXJcIikuaHRtbChcInVzZXIgbm90IGxvZ2dlZCBpblwiKTtcclxuICAgIH1cclxufVxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ291dFwiLCBzZXR1cE5hdmJhckxvZ2dlZE91dCk7XHJcblxyXG5mdW5jdGlvbiBub3RpZnlSdW5lc3RvbmVDb21wb25lbnRzKCkge1xyXG4gICAgLy8gUnVuZXN0b25lIGNvbXBvbmVudHMgd2FpdCB1bnRpbCBsb2dpbiBwcm9jZXNzIGlzIG92ZXIgdG8gbG9hZCBjb21wb25lbnRzIGJlY2F1c2Ugb2Ygc3RvcmFnZSBpc3N1ZXMuIFRoaXMgdHJpZ2dlcnMgdGhlIGBkeW5hbWljIGltcG9ydCBtYWNoaW5lcnlgLCB3aGljaCB0aGVuIHNlbmRzIHRoZSBsb2dpbiBjb21wbGV0ZSBzaWduYWwgd2hlbiB0aGlzIGFuZCBhbGwgZHluYW1pYyBpbXBvcnRzIGFyZSBmaW5pc2hlZC5cclxuICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoXCJydW5lc3RvbmU6cHJlLWxvZ2luLWNvbXBsZXRlXCIpO1xyXG59XHJcblxyXG4vLyBpbml0aWFsaXplIHN0dWZmXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChlQm9va0NvbmZpZykge1xyXG4gICAgICAgIGhhbmRsZVBhZ2VTZXR1cCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodHlwZW9mIGVCb29rQ29uZmlnID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgXCJlQm9va0NvbmZpZyBpcyBub3QgZGVmaW5lZC4gIFRoaXMgcGFnZSBtdXN0IG5vdCBiZSBzZXQgdXAgZm9yIFJ1bmVzdG9uZVwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIG1pc2Mgc3R1ZmZcclxuLy8gdG9kbzogIFRoaXMgY291bGQgYmUgZnVydGhlciBkaXN0cmlidXRlZCBidXQgbWFraW5nIGEgdmlkZW8uanMgZmlsZSBqdXN0IGZvciBvbmUgZnVuY3Rpb24gc2VlbXMgZHVtYi5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gYWRkIHRoZSB2aWRlbyBwbGF5IGJ1dHRvbiBvdmVybGF5IGltYWdlXHJcbiAgICAkKFwiLnZpZGVvLXBsYXktb3ZlcmxheVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmNzcyhcclxuICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCIsXHJcbiAgICAgICAgICAgIFwidXJsKCd7e3BhdGh0bygnX3N0YXRpYy9wbGF5X292ZXJsYXlfaWNvbi5wbmcnLCAxKX19JylcIlxyXG4gICAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIG5lZWRlZCB0byBhbGxvdyB0aGUgZHJvcGRvd24gc2VhcmNoIGJhciB0byB3b3JrO1xyXG4gICAgLy8gVGhlIGRlZmF1bHQgYmVoYXZpb3VyIGlzIHRoYXQgdGhlIGRyb3Bkb3duIG1lbnUgY2xvc2VzIHdoZW4gc29tZXRoaW5nIGluXHJcbiAgICAvLyBpdCAobGlrZSB0aGUgc2VhcmNoIGJhcikgaXMgY2xpY2tlZFxyXG4gICAgJChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gRml4IGlucHV0IGVsZW1lbnQgY2xpY2sgcHJvYmxlbVxyXG4gICAgICAgICQoXCIuZHJvcGRvd24gaW5wdXQsIC5kcm9wZG93biBsYWJlbFwiKS5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCIvKiFcclxuICogalF1ZXJ5IGlkbGVUaW1lciBwbHVnaW5cclxuICogdmVyc2lvbiAwLjkuMTAwNTExXHJcbiAqIGJ5IFBhdWwgSXJpc2guXHJcbiAqICAgaHR0cDovL2dpdGh1Yi5jb20vcGF1bGlyaXNoL3l1aS1taXNjL3RyZWUvXHJcbiAqIE1JVCBsaWNlbnNlXHJcblxyXG4gKiBhZGFwdGVkIGZyb20gWVVJIGlkbGUgdGltZXIgYnkgbnpha2FzOlxyXG4gKiAgIGh0dHA6Ly9naXRodWIuY29tL256YWthcy95dWktbWlzYy9cclxuKi9cclxuLypcclxuICogQ29weXJpZ2h0IChjKSAyMDA5IE5pY2hvbGFzIEMuIFpha2FzXHJcbiAqXHJcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcbiAqXHJcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXHJcbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG4gKlxyXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXHJcbiAqIFRIRSBTT0ZUV0FSRS5cclxuICovXHJcblxyXG4vKiB1cGRhdGVkIHRvIGZpeCBDaHJvbWUgc2V0VGltZW91dCBpc3N1ZSBieSBaYWlkIFphd2FpZGVoICovXHJcblxyXG4gLy8gQVBJIGF2YWlsYWJsZSBpbiA8PSB2MC44XHJcbiAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuIC8vIGlkbGVUaW1lcigpIHRha2VzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgZGVmaW5lcyB0aGUgaWRsZSB0aW1lb3V0XHJcbiAvLyB0aW1lb3V0IGlzIGluIG1pbGxpc2Vjb25kczsgZGVmYXVsdHMgdG8gMzAwMDBcclxuICQuaWRsZVRpbWVyKDEwMDAwKTtcclxuXHJcblxyXG4gJChkb2N1bWVudCkuYmluZChcImlkbGUuaWRsZVRpbWVyXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyBmdW5jdGlvbiB5b3Ugd2FudCB0byBmaXJlIHdoZW4gdGhlIHVzZXIgZ29lcyBpZGxlXHJcbiB9KTtcclxuXHJcblxyXG4gJChkb2N1bWVudCkuYmluZChcImFjdGl2ZS5pZGxlVGltZXJcIiwgZnVuY3Rpb24oKXtcclxuICAvLyBmdW5jdGlvbiB5b3Ugd2FudCB0byBmaXJlIHdoZW4gdGhlIHVzZXIgYmVjb21lcyBhY3RpdmUgYWdhaW5cclxuIH0pO1xyXG5cclxuIC8vIHBhc3MgdGhlIHN0cmluZyAnZGVzdHJveScgdG8gc3RvcCB0aGUgdGltZXJcclxuICQuaWRsZVRpbWVyKCdkZXN0cm95Jyk7XHJcblxyXG4gLy8geW91IGNhbiBxdWVyeSBpZiB0aGUgdXNlciBpcyBpZGxlIG9yIG5vdCB3aXRoIGRhdGEoKVxyXG4gJC5kYXRhKGRvY3VtZW50LCdpZGxlVGltZXInKTsgIC8vICdpZGxlJyAgb3IgJ2FjdGl2ZSdcclxuXHJcbiAvLyB5b3UgY2FuIGdldCB0aW1lIGVsYXBzZWQgc2luY2UgdXNlciB3aGVuIGlkbGUvYWN0aXZlXHJcbiAkLmlkbGVUaW1lcignZ2V0RWxhcHNlZFRpbWUnKTsgLy8gdGltZSBzaW5jZSBzdGF0ZSBjaGFuZ2UgaW4gbXNcclxuXHJcbiAqKioqKioqKi9cclxuXHJcblxyXG5cclxuIC8vIEFQSSBhdmFpbGFibGUgaW4gPj0gdjAuOVxyXG4gLyoqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAvLyBiaW5kIHRvIHNwZWNpZmljIGVsZW1lbnRzLCBhbGxvd3MgZm9yIG11bHRpcGxlIHRpbWVyIGluc3RhbmNlc1xyXG4gJChlbGVtKS5pZGxlVGltZXIodGltZW91dHwnZGVzdHJveSd8J2dldEVsYXBzZWRUaW1lJyk7XHJcbiAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyJyk7ICAvLyAnaWRsZScgIG9yICdhY3RpdmUnXHJcblxyXG4gLy8gaWYgeW91J3JlIHVzaW5nIHRoZSBvbGQgJC5pZGxlVGltZXIgYXBpLCB5b3Ugc2hvdWxkIG5vdCBkbyAkKGRvY3VtZW50KS5pZGxlVGltZXIoLi4uKVxyXG5cclxuIC8vIGVsZW1lbnQgYm91bmQgdGltZXJzIHdpbGwgb25seSB3YXRjaCBmb3IgZXZlbnRzIGluc2lkZSBvZiB0aGVtLlxyXG4gLy8geW91IG1heSBqdXN0IHdhbnQgcGFnZS1sZXZlbCBhY3Rpdml0eSwgaW4gd2hpY2ggY2FzZSB5b3UgbWF5IHNldCB1cFxyXG4gLy8gICB5b3VyIHRpbWVycyBvbiBkb2N1bWVudCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBhbmQgZG9jdW1lbnQuYm9keVxyXG5cclxuIC8vIFlvdSBjYW4gb3B0aW9uYWxseSBwcm92aWRlIGEgc2Vjb25kIGFyZ3VtZW50IHRvIG92ZXJyaWRlIGNlcnRhaW4gb3B0aW9ucy5cclxuIC8vIEhlcmUgYXJlIHRoZSBkZWZhdWx0cywgc28geW91IGNhbiBvbWl0IGFueSBvciBhbGwgb2YgdGhlbS5cclxuICQoZWxlbSkuaWRsZVRpbWVyKHRpbWVvdXQsIHtcclxuICAgc3RhcnRJbW1lZGlhdGVseTogdHJ1ZSwgLy9zdGFydHMgYSB0aW1lb3V0IGFzIHNvb24gYXMgdGhlIHRpbWVyIGlzIHNldCB1cDsgb3RoZXJ3aXNlIGl0IHdhaXRzIGZvciB0aGUgZmlyc3QgZXZlbnQuXHJcbiAgIGlkbGU6ICAgIGZhbHNlLCAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSB1c2VyIGlzIGlkbGVcclxuICAgZW5hYmxlZDogdHJ1ZSwgICAgICAgICAgLy9pbmRpY2F0ZXMgaWYgdGhlIGlkbGUgdGltZXIgaXMgZW5hYmxlZFxyXG4gICBldmVudHM6ICAnbW91c2Vtb3ZlIGtleWRvd24gRE9NTW91c2VTY3JvbGwgbW91c2V3aGVlbCBtb3VzZWRvd24gdG91Y2hzdGFydCB0b3VjaG1vdmUnIC8vIGFjdGl2aXR5IGlzIG9uZSBvZiB0aGVzZSBldmVudHNcclxuIH0pO1xyXG5cclxuICoqKioqKioqL1xyXG5cclxuKGZ1bmN0aW9uKCQpe1xyXG5cclxuJC5pZGxlVGltZXIgPSBmdW5jdGlvbihuZXdUaW1lb3V0LCBlbGVtLCBvcHRzKXtcclxuXHJcbiAgICAvLyBkZWZhdWx0cyB0aGF0IGFyZSB0byBiZSBzdG9yZWQgYXMgaW5zdGFuY2UgcHJvcHMgb24gdGhlIGVsZW1cclxuXHJcblx0b3B0cyA9ICQuZXh0ZW5kKHtcclxuXHRcdHN0YXJ0SW1tZWRpYXRlbHk6IHRydWUsIC8vc3RhcnRzIGEgdGltZW91dCBhcyBzb29uIGFzIHRoZSB0aW1lciBpcyBzZXQgdXBcclxuXHRcdGlkbGU6ICAgIGZhbHNlLCAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSB1c2VyIGlzIGlkbGVcclxuXHRcdGVuYWJsZWQ6IHRydWUsICAgICAgICAgIC8vaW5kaWNhdGVzIGlmIHRoZSBpZGxlIHRpbWVyIGlzIGVuYWJsZWRcclxuXHRcdHRpbWVvdXQ6IDMwMDAwLCAgICAgICAgIC8vdGhlIGFtb3VudCBvZiB0aW1lIChtcykgYmVmb3JlIHRoZSB1c2VyIGlzIGNvbnNpZGVyZWQgaWRsZVxyXG5cdFx0ZXZlbnRzOiAgJ21vdXNlbW92ZSBrZXlkb3duIERPTU1vdXNlU2Nyb2xsIG1vdXNld2hlZWwgbW91c2Vkb3duIHRvdWNoc3RhcnQgdG91Y2htb3ZlJyAvLyBhY3Rpdml0eSBpcyBvbmUgb2YgdGhlc2UgZXZlbnRzXHJcblx0fSwgb3B0cyk7XHJcblxyXG5cclxuICAgIGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50O1xyXG5cclxuICAgIC8qIChpbnRlbnRpb25hbGx5IG5vdCBkb2N1bWVudGVkKVxyXG4gICAgICogVG9nZ2xlcyB0aGUgaWRsZSBzdGF0ZSBhbmQgZmlyZXMgYW4gYXBwcm9wcmlhdGUgZXZlbnQuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICovXHJcbiAgICB2YXIgdG9nZ2xlSWRsZVN0YXRlID0gZnVuY3Rpb24obXllbGVtKXtcclxuXHJcbiAgICAgICAgLy8gY3Vyc2UgeW91LCBtb3ppbGxhIHNldFRpbWVvdXQgbGF0ZW5lc3MgYnVnIVxyXG4gICAgICAgIGlmICh0eXBlb2YgbXllbGVtID09PSAnbnVtYmVyJyl7XHJcbiAgICAgICAgICAgIG15ZWxlbSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEobXllbGVtIHx8IGVsZW0sJ2lkbGVUaW1lck9iaicpO1xyXG5cclxuICAgICAgICAvL3RvZ2dsZSB0aGUgc3RhdGVcclxuICAgICAgICBvYmouaWRsZSA9ICFvYmouaWRsZTtcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdGltZW91dCBcclxuICAgICAgICB2YXIgZWxhcHNlZCA9ICgrbmV3IERhdGUoKSkgLSBvYmoub2xkZGF0ZTtcclxuICAgICAgICBvYmoub2xkZGF0ZSA9ICtuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBoYW5kbGUgQ2hyb21lIGFsd2F5cyB0cmlnZ2VyaW5nIGlkbGUgYWZ0ZXIganMgYWxlcnQgb3IgY29tZmlybSBwb3B1cFxyXG4gICAgICAgIGlmIChvYmouaWRsZSAmJiAoZWxhcHNlZCA8IG9wdHMudGltZW91dCkpIHtcclxuICAgICAgICAgICAgICAgIG9iai5pZGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoJC5pZGxlVGltZXIudElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICAgICQuaWRsZVRpbWVyLnRJZCA9IHNldFRpbWVvdXQodG9nZ2xlSWRsZVN0YXRlLCBvcHRzLnRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvL2ZpcmUgYXBwcm9wcmlhdGUgZXZlbnRcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgY3VzdG9tIGV2ZW50LCBidXQgZmlyc3QsIHN0b3JlIHRoZSBuZXcgc3RhdGUgb24gdGhlIGVsZW1lbnRcclxuICAgICAgICAvLyBhbmQgdGhlbiBhcHBlbmQgdGhhdCBzdHJpbmcgdG8gYSBuYW1lc3BhY2VcclxuICAgICAgICB2YXIgZXZlbnQgPSBqUXVlcnkuRXZlbnQoICQuZGF0YShlbGVtLCdpZGxlVGltZXInLCBvYmouaWRsZSA/IFwiaWRsZVwiIDogXCJhY3RpdmVcIiApICArICcuaWRsZVRpbWVyJyAgICk7XHJcblxyXG4gICAgICAgIC8vIHdlIGRvIHdhbnQgdGhpcyB0byBidWJibGUsIGF0IGxlYXN0IGFzIGEgdGVtcG9yYXJ5IGZpeCBmb3IgalF1ZXJ5IDEuN1xyXG4gICAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICQoZWxlbSkudHJpZ2dlcihldmVudCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcHMgdGhlIGlkbGUgdGltZXIuIFRoaXMgcmVtb3ZlcyBhcHByb3ByaWF0ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgICogYW5kIGNhbmNlbHMgYW55IHBlbmRpbmcgdGltZW91dHMuXHJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxyXG4gICAgICogQG1ldGhvZCBzdG9wXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuICAgIHN0b3AgPSBmdW5jdGlvbihlbGVtKXtcclxuXHJcbiAgICAgICAgdmFyIG9iaiA9ICQuZGF0YShlbGVtLCdpZGxlVGltZXJPYmonKSB8fCB7fTtcclxuXHJcbiAgICAgICAgLy9zZXQgdG8gZGlzYWJsZWRcclxuICAgICAgICBvYmouZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvL2NsZWFyIGFueSBwZW5kaW5nIHRpbWVvdXRzXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KG9iai50SWQpO1xyXG5cclxuICAgICAgICAvL2RldGFjaCB0aGUgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICAkKGVsZW0pLm9mZignLmlkbGVUaW1lcicpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLyogKGludGVudGlvbmFsbHkgbm90IGRvY3VtZW50ZWQpXHJcbiAgICAgKiBIYW5kbGVzIGEgdXNlciBldmVudCBpbmRpY2F0aW5nIHRoYXQgdGhlIHVzZXIgaXNuJ3QgaWRsZS5cclxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEEgRE9NMi1ub3JtYWxpemVkIGV2ZW50IG9iamVjdC5cclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVVzZXJFdmVudCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBvYmogPSAkLmRhdGEodGhpcywnaWRsZVRpbWVyT2JqJyk7XHJcblxyXG4gICAgICAgIC8vY2xlYXIgYW55IGV4aXN0aW5nIHRpbWVvdXRcclxuICAgICAgICBjbGVhclRpbWVvdXQob2JqLnRJZCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy9pZiB0aGUgaWRsZSB0aW1lciBpcyBlbmFibGVkXHJcbiAgICAgICAgaWYgKG9iai5lbmFibGVkKXtcclxuXHJcblxyXG4gICAgICAgICAgICAvL2lmIGl0J3MgaWRsZSwgdGhhdCBtZWFucyB0aGUgdXNlciBpcyBubyBsb25nZXIgaWRsZVxyXG4gICAgICAgICAgICBpZiAob2JqLmlkbGUpe1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlSWRsZVN0YXRlKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL3NldCBhIG5ldyB0aW1lb3V0XHJcbiAgICAgICAgICAgIG9iai50SWQgPSBzZXRUaW1lb3V0KHRvZ2dsZUlkbGVTdGF0ZSwgb2JqLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgfTtcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTdGFydHMgdGhlIGlkbGUgdGltZXIuIFRoaXMgYWRkcyBhcHByb3ByaWF0ZSBldmVudCBoYW5kbGVyc1xyXG4gICAgICogYW5kIHN0YXJ0cyB0aGUgZmlyc3QgdGltZW91dC5cclxuICAgICAqIEBwYXJhbSB7aW50fSBuZXdUaW1lb3V0IChPcHRpb25hbCkgQSBuZXcgdmFsdWUgZm9yIHRoZSB0aW1lb3V0IHBlcmlvZCBpbiBtcy5cclxuICAgICAqIEByZXR1cm4ge3ZvaWR9XHJcbiAgICAgKiBAbWV0aG9kICQuaWRsZVRpbWVyXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKi9cclxuXHJcblxyXG4gICAgdmFyIG9iaiA9ICQuZGF0YShlbGVtLCdpZGxlVGltZXJPYmonKSB8fCB7fTtcclxuXHJcbiAgICBvYmoub2xkZGF0ZSA9IG9iai5vbGRkYXRlIHx8ICtuZXcgRGF0ZSgpO1xyXG5cclxuICAgIC8vYXNzaWduIGEgbmV3IHRpbWVvdXQgaWYgbmVjZXNzYXJ5XHJcbiAgICBpZiAodHlwZW9mIG5ld1RpbWVvdXQgPT09IFwibnVtYmVyXCIpe1xyXG4gICAgICAgIG9wdHMudGltZW91dCA9IG5ld1RpbWVvdXQ7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1RpbWVvdXQgPT09ICdkZXN0cm95Jykge1xyXG4gICAgICAgIHN0b3AoZWxlbSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1RpbWVvdXQgPT09ICdnZXRFbGFwc2VkVGltZScpe1xyXG4gICAgICAgIHJldHVybiAoK25ldyBEYXRlKCkpIC0gb2JqLm9sZGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9hc3NpZ24gYXBwcm9wcmlhdGUgZXZlbnQgaGFuZGxlcnNcclxuICAgICQoZWxlbSkub24oJC50cmltKChvcHRzLmV2ZW50cysnICcpLnNwbGl0KCcgJykuam9pbignLmlkbGVUaW1lciAnKSksaGFuZGxlVXNlckV2ZW50KTtcclxuXHJcblxyXG4gICAgb2JqLmlkbGUgICAgPSBvcHRzLmlkbGU7XHJcbiAgICBvYmouZW5hYmxlZCA9IG9wdHMuZW5hYmxlZDtcclxuICAgIG9iai50aW1lb3V0ID0gb3B0cy50aW1lb3V0O1xyXG5cclxuXHJcbiAgICAvL3NldCBhIHRpbWVvdXQgdG8gdG9nZ2xlIHN0YXRlLiBNYXkgd2lzaCB0byBvbWl0IHRoaXMgaW4gc29tZSBzaXR1YXRpb25zXHJcblx0aWYgKG9wdHMuc3RhcnRJbW1lZGlhdGVseSkge1xyXG5cdCAgICBvYmoudElkID0gc2V0VGltZW91dCh0b2dnbGVJZGxlU3RhdGUsIG9iai50aW1lb3V0KTtcclxuXHR9XHJcblxyXG4gICAgLy8gYXNzdW1lIHRoZSB1c2VyIGlzIGFjdGl2ZSBmb3IgdGhlIGZpcnN0IHggc2Vjb25kcy5cclxuICAgICQuZGF0YShlbGVtLCdpZGxlVGltZXInLFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIC8vIHN0b3JlIG91ciBpbnN0YW5jZSBvbiB0aGUgb2JqZWN0XHJcbiAgICAkLmRhdGEoZWxlbSwnaWRsZVRpbWVyT2JqJyxvYmopO1xyXG5cclxuXHJcblxyXG59OyAvLyBlbmQgb2YgJC5pZGxlVGltZXIoKVxyXG5cclxuXHJcbi8vIHYwLjkgQVBJIGZvciBkZWZpbmluZyBtdWx0aXBsZSB0aW1lcnMuXHJcbiQuZm4uaWRsZVRpbWVyID0gZnVuY3Rpb24obmV3VGltZW91dCxvcHRzKXtcclxuXHQvLyBBbGxvdyBvbWlzc2lvbiBvZiBvcHRzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcblx0aWYgKCFvcHRzKSB7XHJcblx0XHRvcHRzID0ge307XHJcblx0fVxyXG5cclxuICAgIGlmKHRoaXNbMF0pe1xyXG4gICAgICAgICQuaWRsZVRpbWVyKG5ld1RpbWVvdXQsdGhpc1swXSxvcHRzKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcblxyXG59KShqUXVlcnkpO1xyXG4iLCIvKiFcclxuICogQklESSBlbWJlZGRpbmcgc3VwcG9ydCBmb3IgalF1ZXJ5LmkxOG5cclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDE1LCBEYXZpZCBDaGFuXHJcbiAqXHJcbiAqIFRoaXMgY29kZSBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvXHJcbiAqIGFueXRoaW5nIHNwZWNpYWwgdG8gY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG9cclxuICogbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuIFlvdSBhcmUgZnJlZSB0byB1c2UgdGhpcyBjb2RlXHJcbiAqIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0IGhlYWRlciBpcyBsZWZ0IGludGFjdC5cclxuICogU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cclxuICpcclxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXHJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuKCBmdW5jdGlvbiAoICQgKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdHZhciBzdHJvbmdEaXJSZWdFeHA7XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1hdGNoZXMgdGhlIGZpcnN0IHN0cm9uZyBkaXJlY3Rpb25hbGl0eSBjb2RlcG9pbnQ6XHJcblx0ICogLSBpbiBncm91cCAxIGlmIGl0IGlzIExUUlxyXG5cdCAqIC0gaW4gZ3JvdXAgMiBpZiBpdCBpcyBSVExcclxuXHQgKiBEb2VzIG5vdCBtYXRjaCBpZiB0aGVyZSBpcyBubyBzdHJvbmcgZGlyZWN0aW9uYWxpdHkgY29kZXBvaW50LlxyXG5cdCAqXHJcblx0ICogR2VuZXJhdGVkIGJ5IFVuaWNvZGVKUyAoc2VlIHRvb2xzL3N0cm9uZ0RpcikgZnJvbSB0aGUgVUNEOyBzZWVcclxuXHQgKiBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvZGlmZnVzaW9uL0dVSlMvIC5cclxuXHQgKi9cclxuXHRzdHJvbmdEaXJSZWdFeHAgPSBuZXcgUmVnRXhwKFxyXG5cdFx0Jyg/OicgK1xyXG5cdFx0XHQnKCcgK1xyXG5cdFx0XHRcdCdbXFx1MDA0MS1cXHUwMDVhXFx1MDA2MS1cXHUwMDdhXFx1MDBhYVxcdTAwYjVcXHUwMGJhXFx1MDBjMC1cXHUwMGQ2XFx1MDBkOC1cXHUwMGY2XFx1MDBmOC1cXHUwMmI4XFx1MDJiYi1cXHUwMmMxXFx1MDJkMFxcdTAyZDFcXHUwMmUwLVxcdTAyZTRcXHUwMmVlXFx1MDM3MC1cXHUwMzczXFx1MDM3NlxcdTAzNzdcXHUwMzdhLVxcdTAzN2RcXHUwMzdmXFx1MDM4NlxcdTAzODgtXFx1MDM4YVxcdTAzOGNcXHUwMzhlLVxcdTAzYTFcXHUwM2EzLVxcdTAzZjVcXHUwM2Y3LVxcdTA0ODJcXHUwNDhhLVxcdTA1MmZcXHUwNTMxLVxcdTA1NTZcXHUwNTU5LVxcdTA1NWZcXHUwNTYxLVxcdTA1ODdcXHUwNTg5XFx1MDkwMy1cXHUwOTM5XFx1MDkzYlxcdTA5M2QtXFx1MDk0MFxcdTA5NDktXFx1MDk0Y1xcdTA5NGUtXFx1MDk1MFxcdTA5NTgtXFx1MDk2MVxcdTA5NjQtXFx1MDk4MFxcdTA5ODJcXHUwOTgzXFx1MDk4NS1cXHUwOThjXFx1MDk4ZlxcdTA5OTBcXHUwOTkzLVxcdTA5YThcXHUwOWFhLVxcdTA5YjBcXHUwOWIyXFx1MDliNi1cXHUwOWI5XFx1MDliZC1cXHUwOWMwXFx1MDljN1xcdTA5YzhcXHUwOWNiXFx1MDljY1xcdTA5Y2VcXHUwOWQ3XFx1MDlkY1xcdTA5ZGRcXHUwOWRmLVxcdTA5ZTFcXHUwOWU2LVxcdTA5ZjFcXHUwOWY0LVxcdTA5ZmFcXHUwYTAzXFx1MGEwNS1cXHUwYTBhXFx1MGEwZlxcdTBhMTBcXHUwYTEzLVxcdTBhMjhcXHUwYTJhLVxcdTBhMzBcXHUwYTMyXFx1MGEzM1xcdTBhMzVcXHUwYTM2XFx1MGEzOFxcdTBhMzlcXHUwYTNlLVxcdTBhNDBcXHUwYTU5LVxcdTBhNWNcXHUwYTVlXFx1MGE2Ni1cXHUwYTZmXFx1MGE3Mi1cXHUwYTc0XFx1MGE4M1xcdTBhODUtXFx1MGE4ZFxcdTBhOGYtXFx1MGE5MVxcdTBhOTMtXFx1MGFhOFxcdTBhYWEtXFx1MGFiMFxcdTBhYjJcXHUwYWIzXFx1MGFiNS1cXHUwYWI5XFx1MGFiZC1cXHUwYWMwXFx1MGFjOVxcdTBhY2JcXHUwYWNjXFx1MGFkMFxcdTBhZTBcXHUwYWUxXFx1MGFlNi1cXHUwYWYwXFx1MGFmOVxcdTBiMDJcXHUwYjAzXFx1MGIwNS1cXHUwYjBjXFx1MGIwZlxcdTBiMTBcXHUwYjEzLVxcdTBiMjhcXHUwYjJhLVxcdTBiMzBcXHUwYjMyXFx1MGIzM1xcdTBiMzUtXFx1MGIzOVxcdTBiM2RcXHUwYjNlXFx1MGI0MFxcdTBiNDdcXHUwYjQ4XFx1MGI0YlxcdTBiNGNcXHUwYjU3XFx1MGI1Y1xcdTBiNWRcXHUwYjVmLVxcdTBiNjFcXHUwYjY2LVxcdTBiNzdcXHUwYjgzXFx1MGI4NS1cXHUwYjhhXFx1MGI4ZS1cXHUwYjkwXFx1MGI5Mi1cXHUwYjk1XFx1MGI5OVxcdTBiOWFcXHUwYjljXFx1MGI5ZVxcdTBiOWZcXHUwYmEzXFx1MGJhNFxcdTBiYTgtXFx1MGJhYVxcdTBiYWUtXFx1MGJiOVxcdTBiYmVcXHUwYmJmXFx1MGJjMVxcdTBiYzJcXHUwYmM2LVxcdTBiYzhcXHUwYmNhLVxcdTBiY2NcXHUwYmQwXFx1MGJkN1xcdTBiZTYtXFx1MGJmMlxcdTBjMDEtXFx1MGMwM1xcdTBjMDUtXFx1MGMwY1xcdTBjMGUtXFx1MGMxMFxcdTBjMTItXFx1MGMyOFxcdTBjMmEtXFx1MGMzOVxcdTBjM2RcXHUwYzQxLVxcdTBjNDRcXHUwYzU4LVxcdTBjNWFcXHUwYzYwXFx1MGM2MVxcdTBjNjYtXFx1MGM2ZlxcdTBjN2ZcXHUwYzgyXFx1MGM4M1xcdTBjODUtXFx1MGM4Y1xcdTBjOGUtXFx1MGM5MFxcdTBjOTItXFx1MGNhOFxcdTBjYWEtXFx1MGNiM1xcdTBjYjUtXFx1MGNiOVxcdTBjYmQtXFx1MGNjNFxcdTBjYzYtXFx1MGNjOFxcdTBjY2FcXHUwY2NiXFx1MGNkNVxcdTBjZDZcXHUwY2RlXFx1MGNlMFxcdTBjZTFcXHUwY2U2LVxcdTBjZWZcXHUwY2YxXFx1MGNmMlxcdTBkMDJcXHUwZDAzXFx1MGQwNS1cXHUwZDBjXFx1MGQwZS1cXHUwZDEwXFx1MGQxMi1cXHUwZDNhXFx1MGQzZC1cXHUwZDQwXFx1MGQ0Ni1cXHUwZDQ4XFx1MGQ0YS1cXHUwZDRjXFx1MGQ0ZVxcdTBkNTdcXHUwZDVmLVxcdTBkNjFcXHUwZDY2LVxcdTBkNzVcXHUwZDc5LVxcdTBkN2ZcXHUwZDgyXFx1MGQ4M1xcdTBkODUtXFx1MGQ5NlxcdTBkOWEtXFx1MGRiMVxcdTBkYjMtXFx1MGRiYlxcdTBkYmRcXHUwZGMwLVxcdTBkYzZcXHUwZGNmLVxcdTBkZDFcXHUwZGQ4LVxcdTBkZGZcXHUwZGU2LVxcdTBkZWZcXHUwZGYyLVxcdTBkZjRcXHUwZTAxLVxcdTBlMzBcXHUwZTMyXFx1MGUzM1xcdTBlNDAtXFx1MGU0NlxcdTBlNGYtXFx1MGU1YlxcdTBlODFcXHUwZTgyXFx1MGU4NFxcdTBlODdcXHUwZTg4XFx1MGU4YVxcdTBlOGRcXHUwZTk0LVxcdTBlOTdcXHUwZTk5LVxcdTBlOWZcXHUwZWExLVxcdTBlYTNcXHUwZWE1XFx1MGVhN1xcdTBlYWFcXHUwZWFiXFx1MGVhZC1cXHUwZWIwXFx1MGViMlxcdTBlYjNcXHUwZWJkXFx1MGVjMC1cXHUwZWM0XFx1MGVjNlxcdTBlZDAtXFx1MGVkOVxcdTBlZGMtXFx1MGVkZlxcdTBmMDAtXFx1MGYxN1xcdTBmMWEtXFx1MGYzNFxcdTBmMzZcXHUwZjM4XFx1MGYzZS1cXHUwZjQ3XFx1MGY0OS1cXHUwZjZjXFx1MGY3ZlxcdTBmODVcXHUwZjg4LVxcdTBmOGNcXHUwZmJlLVxcdTBmYzVcXHUwZmM3LVxcdTBmY2NcXHUwZmNlLVxcdTBmZGFcXHUxMDAwLVxcdTEwMmNcXHUxMDMxXFx1MTAzOFxcdTEwM2JcXHUxMDNjXFx1MTAzZi1cXHUxMDU3XFx1MTA1YS1cXHUxMDVkXFx1MTA2MS1cXHUxMDcwXFx1MTA3NS1cXHUxMDgxXFx1MTA4M1xcdTEwODRcXHUxMDg3LVxcdTEwOGNcXHUxMDhlLVxcdTEwOWNcXHUxMDllLVxcdTEwYzVcXHUxMGM3XFx1MTBjZFxcdTEwZDAtXFx1MTI0OFxcdTEyNGEtXFx1MTI0ZFxcdTEyNTAtXFx1MTI1NlxcdTEyNThcXHUxMjVhLVxcdTEyNWRcXHUxMjYwLVxcdTEyODhcXHUxMjhhLVxcdTEyOGRcXHUxMjkwLVxcdTEyYjBcXHUxMmIyLVxcdTEyYjVcXHUxMmI4LVxcdTEyYmVcXHUxMmMwXFx1MTJjMi1cXHUxMmM1XFx1MTJjOC1cXHUxMmQ2XFx1MTJkOC1cXHUxMzEwXFx1MTMxMi1cXHUxMzE1XFx1MTMxOC1cXHUxMzVhXFx1MTM2MC1cXHUxMzdjXFx1MTM4MC1cXHUxMzhmXFx1MTNhMC1cXHUxM2Y1XFx1MTNmOC1cXHUxM2ZkXFx1MTQwMS1cXHUxNjdmXFx1MTY4MS1cXHUxNjlhXFx1MTZhMC1cXHUxNmY4XFx1MTcwMC1cXHUxNzBjXFx1MTcwZS1cXHUxNzExXFx1MTcyMC1cXHUxNzMxXFx1MTczNVxcdTE3MzZcXHUxNzQwLVxcdTE3NTFcXHUxNzYwLVxcdTE3NmNcXHUxNzZlLVxcdTE3NzBcXHUxNzgwLVxcdTE3YjNcXHUxN2I2XFx1MTdiZS1cXHUxN2M1XFx1MTdjN1xcdTE3YzhcXHUxN2Q0LVxcdTE3ZGFcXHUxN2RjXFx1MTdlMC1cXHUxN2U5XFx1MTgxMC1cXHUxODE5XFx1MTgyMC1cXHUxODc3XFx1MTg4MC1cXHUxOGE4XFx1MThhYVxcdTE4YjAtXFx1MThmNVxcdTE5MDAtXFx1MTkxZVxcdTE5MjMtXFx1MTkyNlxcdTE5MjktXFx1MTkyYlxcdTE5MzBcXHUxOTMxXFx1MTkzMy1cXHUxOTM4XFx1MTk0Ni1cXHUxOTZkXFx1MTk3MC1cXHUxOTc0XFx1MTk4MC1cXHUxOWFiXFx1MTliMC1cXHUxOWM5XFx1MTlkMC1cXHUxOWRhXFx1MWEwMC1cXHUxYTE2XFx1MWExOVxcdTFhMWFcXHUxYTFlLVxcdTFhNTVcXHUxYTU3XFx1MWE2MVxcdTFhNjNcXHUxYTY0XFx1MWE2ZC1cXHUxYTcyXFx1MWE4MC1cXHUxYTg5XFx1MWE5MC1cXHUxYTk5XFx1MWFhMC1cXHUxYWFkXFx1MWIwNC1cXHUxYjMzXFx1MWIzNVxcdTFiM2JcXHUxYjNkLVxcdTFiNDFcXHUxYjQzLVxcdTFiNGJcXHUxYjUwLVxcdTFiNmFcXHUxYjc0LVxcdTFiN2NcXHUxYjgyLVxcdTFiYTFcXHUxYmE2XFx1MWJhN1xcdTFiYWFcXHUxYmFlLVxcdTFiZTVcXHUxYmU3XFx1MWJlYS1cXHUxYmVjXFx1MWJlZVxcdTFiZjJcXHUxYmYzXFx1MWJmYy1cXHUxYzJiXFx1MWMzNFxcdTFjMzVcXHUxYzNiLVxcdTFjNDlcXHUxYzRkLVxcdTFjN2ZcXHUxY2MwLVxcdTFjYzdcXHUxY2QzXFx1MWNlMVxcdTFjZTktXFx1MWNlY1xcdTFjZWUtXFx1MWNmM1xcdTFjZjVcXHUxY2Y2XFx1MWQwMC1cXHUxZGJmXFx1MWUwMC1cXHUxZjE1XFx1MWYxOC1cXHUxZjFkXFx1MWYyMC1cXHUxZjQ1XFx1MWY0OC1cXHUxZjRkXFx1MWY1MC1cXHUxZjU3XFx1MWY1OVxcdTFmNWJcXHUxZjVkXFx1MWY1Zi1cXHUxZjdkXFx1MWY4MC1cXHUxZmI0XFx1MWZiNi1cXHUxZmJjXFx1MWZiZVxcdTFmYzItXFx1MWZjNFxcdTFmYzYtXFx1MWZjY1xcdTFmZDAtXFx1MWZkM1xcdTFmZDYtXFx1MWZkYlxcdTFmZTAtXFx1MWZlY1xcdTFmZjItXFx1MWZmNFxcdTFmZjYtXFx1MWZmY1xcdTIwMGVcXHUyMDcxXFx1MjA3ZlxcdTIwOTAtXFx1MjA5Y1xcdTIxMDJcXHUyMTA3XFx1MjEwYS1cXHUyMTEzXFx1MjExNVxcdTIxMTktXFx1MjExZFxcdTIxMjRcXHUyMTI2XFx1MjEyOFxcdTIxMmEtXFx1MjEyZFxcdTIxMmYtXFx1MjEzOVxcdTIxM2MtXFx1MjEzZlxcdTIxNDUtXFx1MjE0OVxcdTIxNGVcXHUyMTRmXFx1MjE2MC1cXHUyMTg4XFx1MjMzNi1cXHUyMzdhXFx1MjM5NVxcdTI0OWMtXFx1MjRlOVxcdTI2YWNcXHUyODAwLVxcdTI4ZmZcXHUyYzAwLVxcdTJjMmVcXHUyYzMwLVxcdTJjNWVcXHUyYzYwLVxcdTJjZTRcXHUyY2ViLVxcdTJjZWVcXHUyY2YyXFx1MmNmM1xcdTJkMDAtXFx1MmQyNVxcdTJkMjdcXHUyZDJkXFx1MmQzMC1cXHUyZDY3XFx1MmQ2ZlxcdTJkNzBcXHUyZDgwLVxcdTJkOTZcXHUyZGEwLVxcdTJkYTZcXHUyZGE4LVxcdTJkYWVcXHUyZGIwLVxcdTJkYjZcXHUyZGI4LVxcdTJkYmVcXHUyZGMwLVxcdTJkYzZcXHUyZGM4LVxcdTJkY2VcXHUyZGQwLVxcdTJkZDZcXHUyZGQ4LVxcdTJkZGVcXHUzMDA1LVxcdTMwMDdcXHUzMDIxLVxcdTMwMjlcXHUzMDJlXFx1MzAyZlxcdTMwMzEtXFx1MzAzNVxcdTMwMzgtXFx1MzAzY1xcdTMwNDEtXFx1MzA5NlxcdTMwOWQtXFx1MzA5ZlxcdTMwYTEtXFx1MzBmYVxcdTMwZmMtXFx1MzBmZlxcdTMxMDUtXFx1MzEyZFxcdTMxMzEtXFx1MzE4ZVxcdTMxOTAtXFx1MzFiYVxcdTMxZjAtXFx1MzIxY1xcdTMyMjAtXFx1MzI0ZlxcdTMyNjAtXFx1MzI3YlxcdTMyN2YtXFx1MzJiMFxcdTMyYzAtXFx1MzJjYlxcdTMyZDAtXFx1MzJmZVxcdTMzMDAtXFx1MzM3NlxcdTMzN2ItXFx1MzNkZFxcdTMzZTAtXFx1MzNmZVxcdTM0MDAtXFx1NGRiNVxcdTRlMDAtXFx1OWZkNVxcdWEwMDAtXFx1YTQ4Y1xcdWE0ZDAtXFx1YTYwY1xcdWE2MTAtXFx1YTYyYlxcdWE2NDAtXFx1YTY2ZVxcdWE2ODAtXFx1YTY5ZFxcdWE2YTAtXFx1YTZlZlxcdWE2ZjItXFx1YTZmN1xcdWE3MjItXFx1YTc4N1xcdWE3ODktXFx1YTdhZFxcdWE3YjAtXFx1YTdiN1xcdWE3ZjctXFx1YTgwMVxcdWE4MDMtXFx1YTgwNVxcdWE4MDctXFx1YTgwYVxcdWE4MGMtXFx1YTgyNFxcdWE4MjdcXHVhODMwLVxcdWE4MzdcXHVhODQwLVxcdWE4NzNcXHVhODgwLVxcdWE4YzNcXHVhOGNlLVxcdWE4ZDlcXHVhOGYyLVxcdWE4ZmRcXHVhOTAwLVxcdWE5MjVcXHVhOTJlLVxcdWE5NDZcXHVhOTUyXFx1YTk1M1xcdWE5NWYtXFx1YTk3Y1xcdWE5ODMtXFx1YTliMlxcdWE5YjRcXHVhOWI1XFx1YTliYVxcdWE5YmJcXHVhOWJkLVxcdWE5Y2RcXHVhOWNmLVxcdWE5ZDlcXHVhOWRlLVxcdWE5ZTRcXHVhOWU2LVxcdWE5ZmVcXHVhYTAwLVxcdWFhMjhcXHVhYTJmXFx1YWEzMFxcdWFhMzNcXHVhYTM0XFx1YWE0MC1cXHVhYTQyXFx1YWE0NC1cXHVhYTRiXFx1YWE0ZFxcdWFhNTAtXFx1YWE1OVxcdWFhNWMtXFx1YWE3YlxcdWFhN2QtXFx1YWFhZlxcdWFhYjFcXHVhYWI1XFx1YWFiNlxcdWFhYjktXFx1YWFiZFxcdWFhYzBcXHVhYWMyXFx1YWFkYi1cXHVhYWViXFx1YWFlZS1cXHVhYWY1XFx1YWIwMS1cXHVhYjA2XFx1YWIwOS1cXHVhYjBlXFx1YWIxMS1cXHVhYjE2XFx1YWIyMC1cXHVhYjI2XFx1YWIyOC1cXHVhYjJlXFx1YWIzMC1cXHVhYjY1XFx1YWI3MC1cXHVhYmU0XFx1YWJlNlxcdWFiZTdcXHVhYmU5LVxcdWFiZWNcXHVhYmYwLVxcdWFiZjlcXHVhYzAwLVxcdWQ3YTNcXHVkN2IwLVxcdWQ3YzZcXHVkN2NiLVxcdWQ3ZmJcXHVlMDAwLVxcdWZhNmRcXHVmYTcwLVxcdWZhZDlcXHVmYjAwLVxcdWZiMDZcXHVmYjEzLVxcdWZiMTdcXHVmZjIxLVxcdWZmM2FcXHVmZjQxLVxcdWZmNWFcXHVmZjY2LVxcdWZmYmVcXHVmZmMyLVxcdWZmYzdcXHVmZmNhLVxcdWZmY2ZcXHVmZmQyLVxcdWZmZDdcXHVmZmRhLVxcdWZmZGNdfFxcdWQ4MDBbXFx1ZGMwMC1cXHVkYzBiXXxcXHVkODAwW1xcdWRjMGQtXFx1ZGMyNl18XFx1ZDgwMFtcXHVkYzI4LVxcdWRjM2FdfFxcdWQ4MDBcXHVkYzNjfFxcdWQ4MDBcXHVkYzNkfFxcdWQ4MDBbXFx1ZGMzZi1cXHVkYzRkXXxcXHVkODAwW1xcdWRjNTAtXFx1ZGM1ZF18XFx1ZDgwMFtcXHVkYzgwLVxcdWRjZmFdfFxcdWQ4MDBcXHVkZDAwfFxcdWQ4MDBcXHVkZDAyfFxcdWQ4MDBbXFx1ZGQwNy1cXHVkZDMzXXxcXHVkODAwW1xcdWRkMzctXFx1ZGQzZl18XFx1ZDgwMFtcXHVkZGQwLVxcdWRkZmNdfFxcdWQ4MDBbXFx1ZGU4MC1cXHVkZTljXXxcXHVkODAwW1xcdWRlYTAtXFx1ZGVkMF18XFx1ZDgwMFtcXHVkZjAwLVxcdWRmMjNdfFxcdWQ4MDBbXFx1ZGYzMC1cXHVkZjRhXXxcXHVkODAwW1xcdWRmNTAtXFx1ZGY3NV18XFx1ZDgwMFtcXHVkZjgwLVxcdWRmOWRdfFxcdWQ4MDBbXFx1ZGY5Zi1cXHVkZmMzXXxcXHVkODAwW1xcdWRmYzgtXFx1ZGZkNV18XFx1ZDgwMVtcXHVkYzAwLVxcdWRjOWRdfFxcdWQ4MDFbXFx1ZGNhMC1cXHVkY2E5XXxcXHVkODAxW1xcdWRkMDAtXFx1ZGQyN118XFx1ZDgwMVtcXHVkZDMwLVxcdWRkNjNdfFxcdWQ4MDFcXHVkZDZmfFxcdWQ4MDFbXFx1ZGUwMC1cXHVkZjM2XXxcXHVkODAxW1xcdWRmNDAtXFx1ZGY1NV18XFx1ZDgwMVtcXHVkZjYwLVxcdWRmNjddfFxcdWQ4MDRcXHVkYzAwfFxcdWQ4MDRbXFx1ZGMwMi1cXHVkYzM3XXxcXHVkODA0W1xcdWRjNDctXFx1ZGM0ZF18XFx1ZDgwNFtcXHVkYzY2LVxcdWRjNmZdfFxcdWQ4MDRbXFx1ZGM4Mi1cXHVkY2IyXXxcXHVkODA0XFx1ZGNiN3xcXHVkODA0XFx1ZGNiOHxcXHVkODA0W1xcdWRjYmItXFx1ZGNjMV18XFx1ZDgwNFtcXHVkY2QwLVxcdWRjZThdfFxcdWQ4MDRbXFx1ZGNmMC1cXHVkY2Y5XXxcXHVkODA0W1xcdWRkMDMtXFx1ZGQyNl18XFx1ZDgwNFxcdWRkMmN8XFx1ZDgwNFtcXHVkZDM2LVxcdWRkNDNdfFxcdWQ4MDRbXFx1ZGQ1MC1cXHVkZDcyXXxcXHVkODA0W1xcdWRkNzQtXFx1ZGQ3Nl18XFx1ZDgwNFtcXHVkZDgyLVxcdWRkYjVdfFxcdWQ4MDRbXFx1ZGRiZi1cXHVkZGM5XXxcXHVkODA0XFx1ZGRjZHxcXHVkODA0W1xcdWRkZDAtXFx1ZGRkZl18XFx1ZDgwNFtcXHVkZGUxLVxcdWRkZjRdfFxcdWQ4MDRbXFx1ZGUwMC1cXHVkZTExXXxcXHVkODA0W1xcdWRlMTMtXFx1ZGUyZV18XFx1ZDgwNFxcdWRlMzJ8XFx1ZDgwNFxcdWRlMzN8XFx1ZDgwNFxcdWRlMzV8XFx1ZDgwNFtcXHVkZTM4LVxcdWRlM2RdfFxcdWQ4MDRbXFx1ZGU4MC1cXHVkZTg2XXxcXHVkODA0XFx1ZGU4OHxcXHVkODA0W1xcdWRlOGEtXFx1ZGU4ZF18XFx1ZDgwNFtcXHVkZThmLVxcdWRlOWRdfFxcdWQ4MDRbXFx1ZGU5Zi1cXHVkZWE5XXxcXHVkODA0W1xcdWRlYjAtXFx1ZGVkZV18XFx1ZDgwNFtcXHVkZWUwLVxcdWRlZTJdfFxcdWQ4MDRbXFx1ZGVmMC1cXHVkZWY5XXxcXHVkODA0XFx1ZGYwMnxcXHVkODA0XFx1ZGYwM3xcXHVkODA0W1xcdWRmMDUtXFx1ZGYwY118XFx1ZDgwNFxcdWRmMGZ8XFx1ZDgwNFxcdWRmMTB8XFx1ZDgwNFtcXHVkZjEzLVxcdWRmMjhdfFxcdWQ4MDRbXFx1ZGYyYS1cXHVkZjMwXXxcXHVkODA0XFx1ZGYzMnxcXHVkODA0XFx1ZGYzM3xcXHVkODA0W1xcdWRmMzUtXFx1ZGYzOV18XFx1ZDgwNFtcXHVkZjNkLVxcdWRmM2ZdfFxcdWQ4MDRbXFx1ZGY0MS1cXHVkZjQ0XXxcXHVkODA0XFx1ZGY0N3xcXHVkODA0XFx1ZGY0OHxcXHVkODA0W1xcdWRmNGItXFx1ZGY0ZF18XFx1ZDgwNFxcdWRmNTB8XFx1ZDgwNFxcdWRmNTd8XFx1ZDgwNFtcXHVkZjVkLVxcdWRmNjNdfFxcdWQ4MDVbXFx1ZGM4MC1cXHVkY2IyXXxcXHVkODA1XFx1ZGNiOXxcXHVkODA1W1xcdWRjYmItXFx1ZGNiZV18XFx1ZDgwNVxcdWRjYzF8XFx1ZDgwNVtcXHVkY2M0LVxcdWRjYzddfFxcdWQ4MDVbXFx1ZGNkMC1cXHVkY2Q5XXxcXHVkODA1W1xcdWRkODAtXFx1ZGRiMV18XFx1ZDgwNVtcXHVkZGI4LVxcdWRkYmJdfFxcdWQ4MDVcXHVkZGJlfFxcdWQ4MDVbXFx1ZGRjMS1cXHVkZGRiXXxcXHVkODA1W1xcdWRlMDAtXFx1ZGUzMl18XFx1ZDgwNVxcdWRlM2J8XFx1ZDgwNVxcdWRlM2N8XFx1ZDgwNVxcdWRlM2V8XFx1ZDgwNVtcXHVkZTQxLVxcdWRlNDRdfFxcdWQ4MDVbXFx1ZGU1MC1cXHVkZTU5XXxcXHVkODA1W1xcdWRlODAtXFx1ZGVhYV18XFx1ZDgwNVxcdWRlYWN8XFx1ZDgwNVxcdWRlYWV8XFx1ZDgwNVxcdWRlYWZ8XFx1ZDgwNVxcdWRlYjZ8XFx1ZDgwNVtcXHVkZWMwLVxcdWRlYzldfFxcdWQ4MDVbXFx1ZGYwMC1cXHVkZjE5XXxcXHVkODA1XFx1ZGYyMHxcXHVkODA1XFx1ZGYyMXxcXHVkODA1XFx1ZGYyNnxcXHVkODA1W1xcdWRmMzAtXFx1ZGYzZl18XFx1ZDgwNltcXHVkY2EwLVxcdWRjZjJdfFxcdWQ4MDZcXHVkY2ZmfFxcdWQ4MDZbXFx1ZGVjMC1cXHVkZWY4XXxcXHVkODA4W1xcdWRjMDAtXFx1ZGY5OV18XFx1ZDgwOVtcXHVkYzAwLVxcdWRjNmVdfFxcdWQ4MDlbXFx1ZGM3MC1cXHVkYzc0XXxcXHVkODA5W1xcdWRjODAtXFx1ZGQ0M118XFx1ZDgwY1tcXHVkYzAwLVxcdWRmZmZdfFxcdWQ4MGRbXFx1ZGMwMC1cXHVkYzJlXXxcXHVkODExW1xcdWRjMDAtXFx1ZGU0Nl18XFx1ZDgxYVtcXHVkYzAwLVxcdWRlMzhdfFxcdWQ4MWFbXFx1ZGU0MC1cXHVkZTVlXXxcXHVkODFhW1xcdWRlNjAtXFx1ZGU2OV18XFx1ZDgxYVxcdWRlNmV8XFx1ZDgxYVxcdWRlNmZ8XFx1ZDgxYVtcXHVkZWQwLVxcdWRlZWRdfFxcdWQ4MWFcXHVkZWY1fFxcdWQ4MWFbXFx1ZGYwMC1cXHVkZjJmXXxcXHVkODFhW1xcdWRmMzctXFx1ZGY0NV18XFx1ZDgxYVtcXHVkZjUwLVxcdWRmNTldfFxcdWQ4MWFbXFx1ZGY1Yi1cXHVkZjYxXXxcXHVkODFhW1xcdWRmNjMtXFx1ZGY3N118XFx1ZDgxYVtcXHVkZjdkLVxcdWRmOGZdfFxcdWQ4MWJbXFx1ZGYwMC1cXHVkZjQ0XXxcXHVkODFiW1xcdWRmNTAtXFx1ZGY3ZV18XFx1ZDgxYltcXHVkZjkzLVxcdWRmOWZdfFxcdWQ4MmNcXHVkYzAwfFxcdWQ4MmNcXHVkYzAxfFxcdWQ4MmZbXFx1ZGMwMC1cXHVkYzZhXXxcXHVkODJmW1xcdWRjNzAtXFx1ZGM3Y118XFx1ZDgyZltcXHVkYzgwLVxcdWRjODhdfFxcdWQ4MmZbXFx1ZGM5MC1cXHVkYzk5XXxcXHVkODJmXFx1ZGM5Y3xcXHVkODJmXFx1ZGM5ZnxcXHVkODM0W1xcdWRjMDAtXFx1ZGNmNV18XFx1ZDgzNFtcXHVkZDAwLVxcdWRkMjZdfFxcdWQ4MzRbXFx1ZGQyOS1cXHVkZDY2XXxcXHVkODM0W1xcdWRkNmEtXFx1ZGQ3Ml18XFx1ZDgzNFxcdWRkODN8XFx1ZDgzNFxcdWRkODR8XFx1ZDgzNFtcXHVkZDhjLVxcdWRkYTldfFxcdWQ4MzRbXFx1ZGRhZS1cXHVkZGU4XXxcXHVkODM0W1xcdWRmNjAtXFx1ZGY3MV18XFx1ZDgzNVtcXHVkYzAwLVxcdWRjNTRdfFxcdWQ4MzVbXFx1ZGM1Ni1cXHVkYzljXXxcXHVkODM1XFx1ZGM5ZXxcXHVkODM1XFx1ZGM5ZnxcXHVkODM1XFx1ZGNhMnxcXHVkODM1XFx1ZGNhNXxcXHVkODM1XFx1ZGNhNnxcXHVkODM1W1xcdWRjYTktXFx1ZGNhY118XFx1ZDgzNVtcXHVkY2FlLVxcdWRjYjldfFxcdWQ4MzVcXHVkY2JifFxcdWQ4MzVbXFx1ZGNiZC1cXHVkY2MzXXxcXHVkODM1W1xcdWRjYzUtXFx1ZGQwNV18XFx1ZDgzNVtcXHVkZDA3LVxcdWRkMGFdfFxcdWQ4MzVbXFx1ZGQwZC1cXHVkZDE0XXxcXHVkODM1W1xcdWRkMTYtXFx1ZGQxY118XFx1ZDgzNVtcXHVkZDFlLVxcdWRkMzldfFxcdWQ4MzVbXFx1ZGQzYi1cXHVkZDNlXXxcXHVkODM1W1xcdWRkNDAtXFx1ZGQ0NF18XFx1ZDgzNVxcdWRkNDZ8XFx1ZDgzNVtcXHVkZDRhLVxcdWRkNTBdfFxcdWQ4MzVbXFx1ZGQ1Mi1cXHVkZWE1XXxcXHVkODM1W1xcdWRlYTgtXFx1ZGVkYV18XFx1ZDgzNVtcXHVkZWRjLVxcdWRmMTRdfFxcdWQ4MzVbXFx1ZGYxNi1cXHVkZjRlXXxcXHVkODM1W1xcdWRmNTAtXFx1ZGY4OF18XFx1ZDgzNVtcXHVkZjhhLVxcdWRmYzJdfFxcdWQ4MzVbXFx1ZGZjNC1cXHVkZmNiXXxcXHVkODM2W1xcdWRjMDAtXFx1ZGRmZl18XFx1ZDgzNltcXHVkZTM3LVxcdWRlM2FdfFxcdWQ4MzZbXFx1ZGU2ZC1cXHVkZTc0XXxcXHVkODM2W1xcdWRlNzYtXFx1ZGU4M118XFx1ZDgzNltcXHVkZTg1LVxcdWRlOGJdfFxcdWQ4M2NbXFx1ZGQxMC1cXHVkZDJlXXxcXHVkODNjW1xcdWRkMzAtXFx1ZGQ2OV18XFx1ZDgzY1tcXHVkZDcwLVxcdWRkOWFdfFxcdWQ4M2NbXFx1ZGRlNi1cXHVkZTAyXXxcXHVkODNjW1xcdWRlMTAtXFx1ZGUzYV18XFx1ZDgzY1tcXHVkZTQwLVxcdWRlNDhdfFxcdWQ4M2NcXHVkZTUwfFxcdWQ4M2NcXHVkZTUxfFtcXHVkODQwLVxcdWQ4NjhdW1xcdWRjMDAtXFx1ZGZmZl18XFx1ZDg2OVtcXHVkYzAwLVxcdWRlZDZdfFxcdWQ4NjlbXFx1ZGYwMC1cXHVkZmZmXXxbXFx1ZDg2YS1cXHVkODZjXVtcXHVkYzAwLVxcdWRmZmZdfFxcdWQ4NmRbXFx1ZGMwMC1cXHVkZjM0XXxcXHVkODZkW1xcdWRmNDAtXFx1ZGZmZl18XFx1ZDg2ZVtcXHVkYzAwLVxcdWRjMWRdfFxcdWQ4NmVbXFx1ZGMyMC1cXHVkZmZmXXxbXFx1ZDg2Zi1cXHVkODcyXVtcXHVkYzAwLVxcdWRmZmZdfFxcdWQ4NzNbXFx1ZGMwMC1cXHVkZWExXXxcXHVkODdlW1xcdWRjMDAtXFx1ZGUxZF18W1xcdWRiODAtXFx1ZGJiZV1bXFx1ZGMwMC1cXHVkZmZmXXxcXHVkYmJmW1xcdWRjMDAtXFx1ZGZmZF18W1xcdWRiYzAtXFx1ZGJmZV1bXFx1ZGMwMC1cXHVkZmZmXXxcXHVkYmZmW1xcdWRjMDAtXFx1ZGZmZF0nICtcclxuXHRcdFx0Jyl8KCcgK1xyXG5cdFx0XHRcdCdbXFx1MDU5MFxcdTA1YmVcXHUwNWMwXFx1MDVjM1xcdTA1YzZcXHUwNWM4LVxcdTA1ZmZcXHUwN2MwLVxcdTA3ZWFcXHUwN2Y0XFx1MDdmNVxcdTA3ZmEtXFx1MDgxNVxcdTA4MWFcXHUwODI0XFx1MDgyOFxcdTA4MmUtXFx1MDg1OFxcdTA4NWMtXFx1MDg5ZlxcdTIwMGZcXHVmYjFkXFx1ZmIxZi1cXHVmYjI4XFx1ZmIyYS1cXHVmYjRmXFx1MDYwOFxcdTA2MGJcXHUwNjBkXFx1MDYxYi1cXHUwNjRhXFx1MDY2ZC1cXHUwNjZmXFx1MDY3MS1cXHUwNmQ1XFx1MDZlNVxcdTA2ZTZcXHUwNmVlXFx1MDZlZlxcdTA2ZmEtXFx1MDcxMFxcdTA3MTItXFx1MDcyZlxcdTA3NGItXFx1MDdhNVxcdTA3YjEtXFx1MDdiZlxcdTA4YTAtXFx1MDhlMlxcdWZiNTAtXFx1ZmQzZFxcdWZkNDAtXFx1ZmRjZlxcdWZkZjAtXFx1ZmRmY1xcdWZkZmVcXHVmZGZmXFx1ZmU3MC1cXHVmZWZlXXxcXHVkODAyW1xcdWRjMDAtXFx1ZGQxZV18XFx1ZDgwMltcXHVkZDIwLVxcdWRlMDBdfFxcdWQ4MDJcXHVkZTA0fFxcdWQ4MDJbXFx1ZGUwNy1cXHVkZTBiXXxcXHVkODAyW1xcdWRlMTAtXFx1ZGUzN118XFx1ZDgwMltcXHVkZTNiLVxcdWRlM2VdfFxcdWQ4MDJbXFx1ZGU0MC1cXHVkZWU0XXxcXHVkODAyW1xcdWRlZTctXFx1ZGYzOF18XFx1ZDgwMltcXHVkZjQwLVxcdWRmZmZdfFxcdWQ4MDNbXFx1ZGMwMC1cXHVkZTVmXXxcXHVkODAzW1xcdWRlN2YtXFx1ZGZmZl18XFx1ZDgzYVtcXHVkYzAwLVxcdWRjY2ZdfFxcdWQ4M2FbXFx1ZGNkNy1cXHVkZmZmXXxcXHVkODNiW1xcdWRjMDAtXFx1ZGRmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGYwMC1cXHVkZmZmXXxcXHVkODNiW1xcdWRmMDAtXFx1ZGZmZl18XFx1ZDgzYltcXHVkZjAwLVxcdWRmZmZdfFxcdWQ4M2JbXFx1ZGUwMC1cXHVkZWVmXXxcXHVkODNiW1xcdWRlZjItXFx1ZGVmZl0nICtcclxuXHRcdFx0JyknICtcclxuXHRcdCcpJ1xyXG5cdCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgZGlyZWN0aW9uYWxpdHkgb2YgdGhlIGZpcnN0IHN0cm9uZ2x5IGRpcmVjdGlvbmFsIGNvZGVwb2ludFxyXG5cdCAqXHJcblx0ICogVGhpcyBpcyB0aGUgcnVsZSB0aGUgQklESSBhbGdvcml0aG0gdXNlcyB0byBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvbmFsaXR5IG9mXHJcblx0ICogcGFyYWdyYXBocyAoIGh0dHA6Ly91bmljb2RlLm9yZy9yZXBvcnRzL3RyOS8jVGhlX1BhcmFncmFwaF9MZXZlbCApIGFuZFxyXG5cdCAqIEZTSSBpc29sYXRlcyAoIGh0dHA6Ly91bmljb2RlLm9yZy9yZXBvcnRzL3RyOS8jRXhwbGljaXRfRGlyZWN0aW9uYWxfSXNvbGF0ZXMgKS5cclxuXHQgKlxyXG5cdCAqIFRPRE86IERvZXMgbm90IGhhbmRsZSBCSURJIGNvbnRyb2wgY2hhcmFjdGVycyBpbnNpZGUgdGhlIHRleHQuXHJcblx0ICogVE9ETzogRG9lcyBub3QgaGFuZGxlIHVuYWxsb2NhdGVkIGNoYXJhY3RlcnMuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCBmcm9tIHdoaWNoIHRvIGV4dHJhY3QgaW5pdGlhbCBkaXJlY3Rpb25hbGl0eS5cclxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9IERpcmVjdGlvbmFsaXR5IChlaXRoZXIgJ2x0cicgb3IgJ3J0bCcpXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gc3Ryb25nRGlyRnJvbUNvbnRlbnQoIHRleHQgKSB7XHJcblx0XHR2YXIgbSA9IHRleHQubWF0Y2goIHN0cm9uZ0RpclJlZ0V4cCApO1xyXG5cdFx0aWYgKCAhbSApIHtcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHR9XHJcblx0XHRpZiAoIG1bIDIgXSA9PT0gdW5kZWZpbmVkICkge1xyXG5cdFx0XHRyZXR1cm4gJ2x0cic7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ3J0bCc7XHJcblx0fVxyXG5cclxuXHQkLmV4dGVuZCggJC5pMThuLnBhcnNlci5lbWl0dGVyLCB7XHJcblx0XHQvKipcclxuXHRcdCAqIFdyYXBzIGFyZ3VtZW50IHdpdGggdW5pY29kZSBjb250cm9sIGNoYXJhY3RlcnMgZm9yIGRpcmVjdGlvbmFsaXR5IHNhZmV0eVxyXG5cdFx0ICpcclxuXHRcdCAqIFRoaXMgc29sdmVzIHRoZSBwcm9ibGVtIHdoZXJlIGRpcmVjdGlvbmFsaXR5LW5ldXRyYWwgY2hhcmFjdGVycyBhdCB0aGUgZWRnZSBvZlxyXG5cdFx0ICogdGhlIGFyZ3VtZW50IHN0cmluZyBnZXQgaW50ZXJwcmV0ZWQgd2l0aCB0aGUgd3JvbmcgZGlyZWN0aW9uYWxpdHkgZnJvbSB0aGVcclxuXHRcdCAqIGVuY2xvc2luZyBjb250ZXh0LCBnaXZpbmcgcmVuZGVyaW5ncyB0aGF0IGxvb2sgY29ycnVwdGVkIGxpa2UgXCIoQmVuXyhXTUZcIi5cclxuXHRcdCAqXHJcblx0XHQgKiBUaGUgd3JhcHBpbmcgaXMgTFJFLi4uUERGIG9yIFJMRS4uLlBERiwgZGVwZW5kaW5nIG9uIHRoZSBkZXRlY3RlZFxyXG5cdFx0ICogZGlyZWN0aW9uYWxpdHkgb2YgdGhlIGFyZ3VtZW50IHN0cmluZywgdXNpbmcgdGhlIEJJREkgYWxnb3JpdGhtJ3Mgb3duIFwiRmlyc3RcclxuXHRcdCAqIHN0cm9uZyBkaXJlY3Rpb25hbCBjb2RlcG9pbnRcIiBydWxlLiBFc3NlbnRpYWxseSwgdGhpcyB3b3JrcyByb3VuZCB0aGUgZmFjdCB0aGF0XHJcblx0XHQgKiB0aGVyZSBpcyBubyBlbWJlZGRpbmcgZXF1aXZhbGVudCBvZiBVKzIwNjggRlNJIChpc29sYXRpb24gd2l0aCBoZXVyaXN0aWNcclxuXHRcdCAqIGRpcmVjdGlvbiBpbmZlcmVuY2UpLiBUaGUgbGF0dGVyIGlzIGNsZWFuZXIgYnV0IHN0aWxsIG5vdCB3aWRlbHkgc3VwcG9ydGVkLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nW119IG5vZGVzIFRoZSB0ZXh0IG5vZGVzIGZyb20gd2hpY2ggdG8gdGFrZSB0aGUgZmlyc3QgaXRlbS5cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gV3JhcHBlZCBTdHJpbmcgb2YgY29udGVudCBhcyBuZWVkZWQuXHJcblx0XHQgKi9cclxuXHRcdGJpZGk6IGZ1bmN0aW9uICggbm9kZXMgKSB7XHJcblx0XHRcdHZhciBkaXIgPSBzdHJvbmdEaXJGcm9tQ29udGVudCggbm9kZXNbIDAgXSApO1xyXG5cdFx0XHRpZiAoIGRpciA9PT0gJ2x0cicgKSB7XHJcblx0XHRcdFx0Ly8gV3JhcCBpbiBMRUZULVRPLVJJR0hUIEVNQkVERElORyAuLi4gUE9QIERJUkVDVElPTkFMIEZPUk1BVFRJTkdcclxuXHRcdFx0XHRyZXR1cm4gJ1xcdTIwMkEnICsgbm9kZXNbIDAgXSArICdcXHUyMDJDJztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIGRpciA9PT0gJ3J0bCcgKSB7XHJcblx0XHRcdFx0Ly8gV3JhcCBpbiBSSUdIVC1UTy1MRUZUIEVNQkVERElORyAuLi4gUE9QIERJUkVDVElPTkFMIEZPUk1BVFRJTkdcclxuXHRcdFx0XHRyZXR1cm4gJ1xcdTIwMkInICsgbm9kZXNbIDAgXSArICdcXHUyMDJDJztcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBObyBzdHJvbmcgZGlyZWN0aW9uYWxpdHk6IGRvIG5vdCB3cmFwXHJcblx0XHRcdHJldHVybiBub2Rlc1sgMCBdO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxufSggalF1ZXJ5ICkgKTtcclxuIiwiLyohXHJcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMS0yMDEzIFNhbnRob3NoIFRob3R0aW5nYWwsIE5laWwgS2FuZGFsZ2FvbmthclxyXG4gKlxyXG4gKiBqcXVlcnkuaTE4biBpcyBkdWFsIGxpY2Vuc2VkIEdQTHYyIG9yIGxhdGVyIGFuZCBNSVQuIFlvdSBkb24ndCBoYXZlIHRvIGRvXHJcbiAqIGFueXRoaW5nIHNwZWNpYWwgdG8gY2hvb3NlIG9uZSBsaWNlbnNlIG9yIHRoZSBvdGhlciBhbmQgeW91IGRvbid0IGhhdmUgdG9cclxuICogbm90aWZ5IGFueW9uZSB3aGljaCBsaWNlbnNlIHlvdSBhcmUgdXNpbmcuIFlvdSBhcmUgZnJlZSB0byB1c2VcclxuICogVW5pdmVyc2FsTGFuZ3VhZ2VTZWxlY3RvciBpbiBjb21tZXJjaWFsIHByb2plY3RzIGFzIGxvbmcgYXMgdGhlIGNvcHlyaWdodFxyXG4gKiBoZWFkZXIgaXMgbGVmdCBpbnRhY3QuIFNlZSBmaWxlcyBHUEwtTElDRU5TRSBhbmQgTUlULUxJQ0VOU0UgZm9yIGRldGFpbHMuXHJcbiAqXHJcbiAqIEBsaWNlbmNlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbmNlIDIuMCBvciBsYXRlclxyXG4gKiBAbGljZW5jZSBNSVQgTGljZW5zZVxyXG4gKi9cclxuXHJcbiggZnVuY3Rpb24gKCAkICkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0dmFyIE1lc3NhZ2VQYXJzZXJFbWl0dGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5sYW5ndWFnZSA9ICQuaTE4bi5sYW5ndWFnZXNbIFN0cmluZy5sb2NhbGUgXSB8fCAkLmkxOG4ubGFuZ3VhZ2VzWyAnZGVmYXVsdCcgXTtcclxuXHR9O1xyXG5cclxuXHRNZXNzYWdlUGFyc2VyRW1pdHRlci5wcm90b3R5cGUgPSB7XHJcblx0XHRjb25zdHJ1Y3RvcjogTWVzc2FnZVBhcnNlckVtaXR0ZXIsXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiAoV2UgcHV0IHRoaXMgbWV0aG9kIGRlZmluaXRpb24gaGVyZSwgYW5kIG5vdCBpbiBwcm90b3R5cGUsIHRvIG1ha2VcclxuXHRcdCAqIHN1cmUgaXQncyBub3Qgb3ZlcndyaXR0ZW4gYnkgYW55IG1hZ2ljLikgV2FsayBlbnRpcmUgbm9kZSBzdHJ1Y3R1cmUsXHJcblx0XHQgKiBhcHBseWluZyByZXBsYWNlbWVudHMgYW5kIHRlbXBsYXRlIGZ1bmN0aW9ucyB3aGVuIGFwcHJvcHJpYXRlXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtNaXhlZH0gbm9kZSBhYnN0cmFjdCBzeW50YXggdHJlZSAodG9wIG5vZGUgb3Igc3Vibm9kZSlcclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IHJlcGxhY2VtZW50cyBmb3IgJDEsICQyLCAuLi4gJG5cclxuXHRcdCAqIEByZXR1cm4ge01peGVkfSBzaW5nbGUtc3RyaW5nIG5vZGUgb3IgYXJyYXkgb2Ygbm9kZXMgc3VpdGFibGUgZm9yXHJcblx0XHQgKiAgalF1ZXJ5IGFwcGVuZGluZy5cclxuXHRcdCAqL1xyXG5cdFx0ZW1pdDogZnVuY3Rpb24gKCBub2RlLCByZXBsYWNlbWVudHMgKSB7XHJcblx0XHRcdHZhciByZXQsIHN1Ym5vZGVzLCBvcGVyYXRpb24sXHJcblx0XHRcdFx0bWVzc2FnZVBhcnNlckVtaXR0ZXIgPSB0aGlzO1xyXG5cclxuXHRcdFx0c3dpdGNoICggdHlwZW9mIG5vZGUgKSB7XHJcblx0XHRcdFx0Y2FzZSAnc3RyaW5nJzpcclxuXHRcdFx0XHRjYXNlICdudW1iZXInOlxyXG5cdFx0XHRcdFx0cmV0ID0gbm9kZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ29iamVjdCc6XHJcblx0XHRcdFx0Ly8gbm9kZSBpcyBhbiBhcnJheSBvZiBub2Rlc1xyXG5cdFx0XHRcdFx0c3Vibm9kZXMgPSAkLm1hcCggbm9kZS5zbGljZSggMSApLCBmdW5jdGlvbiAoIG4gKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBtZXNzYWdlUGFyc2VyRW1pdHRlci5lbWl0KCBuLCByZXBsYWNlbWVudHMgKTtcclxuXHRcdFx0XHRcdH0gKTtcclxuXHJcblx0XHRcdFx0XHRvcGVyYXRpb24gPSBub2RlWyAwIF0udG9Mb3dlckNhc2UoKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIHR5cGVvZiBtZXNzYWdlUGFyc2VyRW1pdHRlclsgb3BlcmF0aW9uIF0gPT09ICdmdW5jdGlvbicgKSB7XHJcblx0XHRcdFx0XHRcdHJldCA9IG1lc3NhZ2VQYXJzZXJFbWl0dGVyWyBvcGVyYXRpb24gXSggc3Vibm9kZXMsIHJlcGxhY2VtZW50cyApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCAndW5rbm93biBvcGVyYXRpb24gXCInICsgb3BlcmF0aW9uICsgJ1wiJyApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ3VuZGVmaW5lZCc6XHJcblx0XHRcdFx0Ly8gUGFyc2luZyB0aGUgZW1wdHkgc3RyaW5nIChhcyBhbiBlbnRpcmUgZXhwcmVzc2lvbiwgb3IgYXMgYVxyXG5cdFx0XHRcdC8vIHBhcmFtRXhwcmVzc2lvbiBpbiBhIHRlbXBsYXRlKSByZXN1bHRzIGluIHVuZGVmaW5lZFxyXG5cdFx0XHRcdC8vIFBlcmhhcHMgYSBtb3JlIGNsZXZlciBwYXJzZXIgY2FuIGRldGVjdCB0aGlzLCBhbmQgcmV0dXJuIHRoZVxyXG5cdFx0XHRcdC8vIGVtcHR5IHN0cmluZz8gT3IgaXMgdGhhdCB1c2VmdWwgaW5mb3JtYXRpb24/XHJcblx0XHRcdFx0Ly8gVGhlIGxvZ2ljYWwgdGhpbmcgaXMgcHJvYmFibHkgdG8gcmV0dXJuIHRoZSBlbXB0eSBzdHJpbmcgaGVyZVxyXG5cdFx0XHRcdC8vIHdoZW4gd2UgZW5jb3VudGVyIHVuZGVmaW5lZC5cclxuXHRcdFx0XHRcdHJldCA9ICcnO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ3VuZXhwZWN0ZWQgdHlwZSBpbiBBU1Q6ICcgKyB0eXBlb2Ygbm9kZSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gcmV0O1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFBhcnNpbmcgaGFzIGJlZW4gYXBwbGllZCBkZXB0aC1maXJzdCB3ZSBjYW4gYXNzdW1lIHRoYXQgYWxsIG5vZGVzXHJcblx0XHQgKiBoZXJlIGFyZSBzaW5nbGUgbm9kZXMgTXVzdCByZXR1cm4gYSBzaW5nbGUgbm9kZSB0byBwYXJlbnRzIC0tIGFcclxuXHRcdCAqIGpRdWVyeSB3aXRoIHN5bnRoZXRpYyBzcGFuIEhvd2V2ZXIsIHVud3JhcCBhbnkgb3RoZXIgc3ludGhldGljIHNwYW5zXHJcblx0XHQgKiBpbiBvdXIgY2hpbGRyZW4gYW5kIHBhc3MgdGhlbSB1cHdhcmRzXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gbm9kZXMgTWl4ZWQsIHNvbWUgc2luZ2xlIG5vZGVzLCBzb21lIGFycmF5cyBvZiBub2Rlcy5cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0Y29uY2F0OiBmdW5jdGlvbiAoIG5vZGVzICkge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gJyc7XHJcblxyXG5cdFx0XHQkLmVhY2goIG5vZGVzLCBmdW5jdGlvbiAoIGksIG5vZGUgKSB7XHJcblx0XHRcdFx0Ly8gc3RyaW5ncywgaW50ZWdlcnMsIGFueXRoaW5nIGVsc2VcclxuXHRcdFx0XHRyZXN1bHQgKz0gbm9kZTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBSZXR1cm4gZXNjYXBlZCByZXBsYWNlbWVudCBvZiBjb3JyZWN0IGluZGV4LCBvciBzdHJpbmcgaWZcclxuXHRcdCAqIHVuYXZhaWxhYmxlLiBOb3RlIHRoYXQgd2UgZXhwZWN0IHRoZSBwYXJzZWQgcGFyYW1ldGVyIHRvIGJlXHJcblx0XHQgKiB6ZXJvLWJhc2VkLiBpLmUuICQxIHNob3VsZCBoYXZlIGJlY29tZSBbIDAgXS4gaWYgdGhlIHNwZWNpZmllZFxyXG5cdFx0ICogcGFyYW1ldGVyIGlzIG5vdCBmb3VuZCByZXR1cm4gdGhlIHNhbWUgc3RyaW5nIChlLmcuIFwiJDk5XCIgLT5cclxuXHRcdCAqIHBhcmFtZXRlciA5OCAtPiBub3QgZm91bmQgLT4gcmV0dXJuIFwiJDk5XCIgKSBUT0RPIHRocm93IGVycm9yIGlmXHJcblx0XHQgKiBub2Rlcy5sZW5ndGggPiAxID9cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBub2RlcyBPbmUgZWxlbWVudCwgaW50ZWdlciwgbiA+PSAwXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSByZXBsYWNlbWVudHMgZm9yICQxLCAkMiwgLi4uICRuXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IHJlcGxhY2VtZW50XHJcblx0XHQgKi9cclxuXHRcdHJlcGxhY2U6IGZ1bmN0aW9uICggbm9kZXMsIHJlcGxhY2VtZW50cyApIHtcclxuXHRcdFx0dmFyIGluZGV4ID0gcGFyc2VJbnQoIG5vZGVzWyAwIF0sIDEwICk7XHJcblxyXG5cdFx0XHRpZiAoIGluZGV4IDwgcmVwbGFjZW1lbnRzLmxlbmd0aCApIHtcclxuXHRcdFx0XHQvLyByZXBsYWNlbWVudCBpcyBub3QgYSBzdHJpbmcsIGRvbid0IHRvdWNoIVxyXG5cdFx0XHRcdHJldHVybiByZXBsYWNlbWVudHNbIGluZGV4IF07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaW5kZXggbm90IGZvdW5kLCBmYWxsYmFjayB0byBkaXNwbGF5aW5nIHZhcmlhYmxlXHJcblx0XHRcdFx0cmV0dXJuICckJyArICggaW5kZXggKyAxICk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUcmFuc2Zvcm0gcGFyc2VkIHN0cnVjdHVyZSBpbnRvIHBsdXJhbGl6YXRpb24gbi5iLiBUaGUgZmlyc3Qgbm9kZSBtYXlcclxuXHRcdCAqIGJlIGEgbm9uLWludGVnZXIgKGZvciBpbnN0YW5jZSwgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGFuIEFyYWJpY1xyXG5cdFx0ICogbnVtYmVyKS4gU28gY29udmVydCBpdCBiYWNrIHdpdGggdGhlIGN1cnJlbnQgbGFuZ3VhZ2Unc1xyXG5cdFx0ICogY29udmVydE51bWJlci5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBub2RlcyBMaXN0IFsge1N0cmluZ3xOdW1iZXJ9LCB7U3RyaW5nfSwge1N0cmluZ30gLi4uIF1cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gc2VsZWN0ZWQgcGx1cmFsaXplZCBmb3JtIGFjY29yZGluZyB0byBjdXJyZW50XHJcblx0XHQgKiAgbGFuZ3VhZ2UuXHJcblx0XHQgKi9cclxuXHRcdHBsdXJhbDogZnVuY3Rpb24gKCBub2RlcyApIHtcclxuXHRcdFx0dmFyIGNvdW50ID0gcGFyc2VGbG9hdCggdGhpcy5sYW5ndWFnZS5jb252ZXJ0TnVtYmVyKCBub2Rlc1sgMCBdLCAxMCApICksXHJcblx0XHRcdFx0Zm9ybXMgPSBub2Rlcy5zbGljZSggMSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZvcm1zLmxlbmd0aCA/IHRoaXMubGFuZ3VhZ2UuY29udmVydFBsdXJhbCggY291bnQsIGZvcm1zICkgOiAnJztcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBUcmFuc2Zvcm0gcGFyc2VkIHN0cnVjdHVyZSBpbnRvIGdlbmRlciBVc2FnZVxyXG5cdFx0ICoge3tnZW5kZXI6Z2VuZGVyfG1hc2N1bGluZXxmZW1pbmluZXxuZXV0cmFsfX0uXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gbm9kZXMgTGlzdCBbIHtTdHJpbmd9LCB7U3RyaW5nfSwge1N0cmluZ30gLCB7U3RyaW5nfSBdXHJcblx0XHQgKiBAcmV0dXJuIHtzdHJpbmd9IHNlbGVjdGVkIGdlbmRlciBmb3JtIGFjY29yZGluZyB0byBjdXJyZW50IGxhbmd1YWdlXHJcblx0XHQgKi9cclxuXHRcdGdlbmRlcjogZnVuY3Rpb24gKCBub2RlcyApIHtcclxuXHRcdFx0dmFyIGdlbmRlciA9IG5vZGVzWyAwIF0sXHJcblx0XHRcdFx0Zm9ybXMgPSBub2Rlcy5zbGljZSggMSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXMubGFuZ3VhZ2UuZ2VuZGVyKCBnZW5kZXIsIGZvcm1zICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogVHJhbnNmb3JtIHBhcnNlZCBzdHJ1Y3R1cmUgaW50byBncmFtbWFyIGNvbnZlcnNpb24uIEludm9rZWQgYnlcclxuXHRcdCAqIHB1dHRpbmcge3tncmFtbWFyOmZvcm18d29yZH19IGluIGEgbWVzc2FnZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IG5vZGVzIExpc3QgW3tHcmFtbWFyIGNhc2UgZWc6IGdlbml0aXZlfSwge1N0cmluZyB3b3JkfV1cclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gc2VsZWN0ZWQgZ3JhbW1hdGljYWwgZm9ybSBhY2NvcmRpbmcgdG8gY3VycmVudFxyXG5cdFx0ICogIGxhbmd1YWdlLlxyXG5cdFx0ICovXHJcblx0XHRncmFtbWFyOiBmdW5jdGlvbiAoIG5vZGVzICkge1xyXG5cdFx0XHR2YXIgZm9ybSA9IG5vZGVzWyAwIF0sXHJcblx0XHRcdFx0d29yZCA9IG5vZGVzWyAxIF07XHJcblxyXG5cdFx0XHRyZXR1cm4gd29yZCAmJiBmb3JtICYmIHRoaXMubGFuZ3VhZ2UuY29udmVydEdyYW1tYXIoIHdvcmQsIGZvcm0gKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmV4dGVuZCggJC5pMThuLnBhcnNlci5lbWl0dGVyLCBuZXcgTWVzc2FnZVBhcnNlckVtaXR0ZXIoKSApO1xyXG59KCBqUXVlcnkgKSApO1xyXG4iLCIvKiFcclxuICogalF1ZXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnlcclxuICpcclxuICogQ29weXJpZ2h0IChDKSAyMDEyIFNhbnRob3NoIFRob3R0aW5nYWxcclxuICpcclxuICoganF1ZXJ5LmkxOG4gaXMgZHVhbCBsaWNlbnNlZCBHUEx2MiBvciBsYXRlciBhbmQgTUlULiBZb3UgZG9uJ3QgaGF2ZSB0byBkbyBhbnl0aGluZyBzcGVjaWFsIHRvXHJcbiAqIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvIG5vdGlmeSBhbnlvbmUgd2hpY2ggbGljZW5zZSB5b3UgYXJlIHVzaW5nLlxyXG4gKiBZb3UgYXJlIGZyZWUgdG8gdXNlIFVuaXZlcnNhbExhbmd1YWdlU2VsZWN0b3IgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyBhcyBsb25nIGFzIHRoZSBjb3B5cmlnaHRcclxuICogaGVhZGVyIGlzIGxlZnQgaW50YWN0LiBTZWUgZmlsZXMgR1BMLUxJQ0VOU0UgYW5kIE1JVC1MSUNFTlNFIGZvciBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAbGljZW5jZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5jZSAyLjAgb3IgbGF0ZXJcclxuICogQGxpY2VuY2UgTUlUIExpY2Vuc2VcclxuICovXHJcbiggZnVuY3Rpb24gKCAkICkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0JC5pMThuID0gJC5pMThuIHx8IHt9O1xyXG5cdCQuZXh0ZW5kKCAkLmkxOG4uZmFsbGJhY2tzLCB7XHJcblx0XHRhYjogWyAncnUnIF0sXHJcblx0XHRhY2U6IFsgJ2lkJyBdLFxyXG5cdFx0YWxuOiBbICdzcScgXSxcclxuXHRcdC8vIE5vdCBzbyBzdGFuZGFyZCAtIGFscyBpcyBzdXBwb3NlZCB0byBiZSBUb3NrIEFsYmFuaWFuLFxyXG5cdFx0Ly8gYnV0IGluIFdpa2lwZWRpYSBpdCdzIHVzZWQgZm9yIGEgR2VybWFuaWMgbGFuZ3VhZ2UuXHJcblx0XHRhbHM6IFsgJ2dzdycsICdkZScgXSxcclxuXHRcdGFuOiBbICdlcycgXSxcclxuXHRcdGFucDogWyAnaGknIF0sXHJcblx0XHRhcm46IFsgJ2VzJyBdLFxyXG5cdFx0YXJ6OiBbICdhcicgXSxcclxuXHRcdGF2OiBbICdydScgXSxcclxuXHRcdGF5OiBbICdlcycgXSxcclxuXHRcdGJhOiBbICdydScgXSxcclxuXHRcdGJhcjogWyAnZGUnIF0sXHJcblx0XHQnYmF0LXNtZyc6IFsgJ3NncycsICdsdCcgXSxcclxuXHRcdGJjYzogWyAnZmEnIF0sXHJcblx0XHQnYmUteC1vbGQnOiBbICdiZS10YXJhc2snIF0sXHJcblx0XHRiaDogWyAnYmhvJyBdLFxyXG5cdFx0YmpuOiBbICdpZCcgXSxcclxuXHRcdGJtOiBbICdmcicgXSxcclxuXHRcdGJweTogWyAnYm4nIF0sXHJcblx0XHRicWk6IFsgJ2ZhJyBdLFxyXG5cdFx0YnVnOiBbICdpZCcgXSxcclxuXHRcdCdjYmstemFtJzogWyAnZXMnIF0sXHJcblx0XHRjZTogWyAncnUnIF0sXHJcblx0XHRjcmg6IFsgJ2NyaC1sYXRuJyBdLFxyXG5cdFx0J2NyaC1jeXJsJzogWyAncnUnIF0sXHJcblx0XHRjc2I6IFsgJ3BsJyBdLFxyXG5cdFx0Y3Y6IFsgJ3J1JyBdLFxyXG5cdFx0J2RlLWF0JzogWyAnZGUnIF0sXHJcblx0XHQnZGUtY2gnOiBbICdkZScgXSxcclxuXHRcdCdkZS1mb3JtYWwnOiBbICdkZScgXSxcclxuXHRcdGRzYjogWyAnZGUnIF0sXHJcblx0XHRkdHA6IFsgJ21zJyBdLFxyXG5cdFx0ZWdsOiBbICdpdCcgXSxcclxuXHRcdGVtbDogWyAnaXQnIF0sXHJcblx0XHRmZjogWyAnZnInIF0sXHJcblx0XHRmaXQ6IFsgJ2ZpJyBdLFxyXG5cdFx0J2ZpdS12cm8nOiBbICd2cm8nLCAnZXQnIF0sXHJcblx0XHRmcmM6IFsgJ2ZyJyBdLFxyXG5cdFx0ZnJwOiBbICdmcicgXSxcclxuXHRcdGZycjogWyAnZGUnIF0sXHJcblx0XHRmdXI6IFsgJ2l0JyBdLFxyXG5cdFx0Z2FnOiBbICd0cicgXSxcclxuXHRcdGdhbjogWyAnZ2FuLWhhbnQnLCAnemgtaGFudCcsICd6aC1oYW5zJyBdLFxyXG5cdFx0J2dhbi1oYW5zJzogWyAnemgtaGFucycgXSxcclxuXHRcdCdnYW4taGFudCc6IFsgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcclxuXHRcdGdsOiBbICdwdCcgXSxcclxuXHRcdGdsazogWyAnZmEnIF0sXHJcblx0XHRnbjogWyAnZXMnIF0sXHJcblx0XHRnc3c6IFsgJ2RlJyBdLFxyXG5cdFx0aGlmOiBbICdoaWYtbGF0bicgXSxcclxuXHRcdGhzYjogWyAnZGUnIF0sXHJcblx0XHRodDogWyAnZnInIF0sXHJcblx0XHRpaTogWyAnemgtY24nLCAnemgtaGFucycgXSxcclxuXHRcdGluaDogWyAncnUnIF0sXHJcblx0XHRpdTogWyAnaWtlLWNhbnMnIF0sXHJcblx0XHRqdXQ6IFsgJ2RhJyBdLFxyXG5cdFx0anY6IFsgJ2lkJyBdLFxyXG5cdFx0a2FhOiBbICdray1sYXRuJywgJ2trLWN5cmwnIF0sXHJcblx0XHRrYmQ6IFsgJ2tiZC1jeXJsJyBdLFxyXG5cdFx0a2h3OiBbICd1cicgXSxcclxuXHRcdGtpdTogWyAndHInIF0sXHJcblx0XHRrazogWyAna2stY3lybCcgXSxcclxuXHRcdCdray1hcmFiJzogWyAna2stY3lybCcgXSxcclxuXHRcdCdray1sYXRuJzogWyAna2stY3lybCcgXSxcclxuXHRcdCdray1jbic6IFsgJ2trLWFyYWInLCAna2stY3lybCcgXSxcclxuXHRcdCdray1reic6IFsgJ2trLWN5cmwnIF0sXHJcblx0XHQna2stdHInOiBbICdray1sYXRuJywgJ2trLWN5cmwnIF0sXHJcblx0XHRrbDogWyAnZGEnIF0sXHJcblx0XHQna28ta3AnOiBbICdrbycgXSxcclxuXHRcdGtvaTogWyAncnUnIF0sXHJcblx0XHRrcmM6IFsgJ3J1JyBdLFxyXG5cdFx0a3M6IFsgJ2tzLWFyYWInIF0sXHJcblx0XHRrc2g6IFsgJ2RlJyBdLFxyXG5cdFx0a3U6IFsgJ2t1LWxhdG4nIF0sXHJcblx0XHQna3UtYXJhYic6IFsgJ2NrYicgXSxcclxuXHRcdGt2OiBbICdydScgXSxcclxuXHRcdGxhZDogWyAnZXMnIF0sXHJcblx0XHRsYjogWyAnZGUnIF0sXHJcblx0XHRsYmU6IFsgJ3J1JyBdLFxyXG5cdFx0bGV6OiBbICdydScgXSxcclxuXHRcdGxpOiBbICdubCcgXSxcclxuXHRcdGxpajogWyAnaXQnIF0sXHJcblx0XHRsaXY6IFsgJ2V0JyBdLFxyXG5cdFx0bG1vOiBbICdpdCcgXSxcclxuXHRcdGxuOiBbICdmcicgXSxcclxuXHRcdGx0ZzogWyAnbHYnIF0sXHJcblx0XHRseno6IFsgJ3RyJyBdLFxyXG5cdFx0bWFpOiBbICdoaScgXSxcclxuXHRcdCdtYXAtYm1zJzogWyAnanYnLCAnaWQnIF0sXHJcblx0XHRtZzogWyAnZnInIF0sXHJcblx0XHRtaHI6IFsgJ3J1JyBdLFxyXG5cdFx0bWluOiBbICdpZCcgXSxcclxuXHRcdG1vOiBbICdybycgXSxcclxuXHRcdG1yajogWyAncnUnIF0sXHJcblx0XHRtd2w6IFsgJ3B0JyBdLFxyXG5cdFx0bXl2OiBbICdydScgXSxcclxuXHRcdG16bjogWyAnZmEnIF0sXHJcblx0XHRuYWg6IFsgJ2VzJyBdLFxyXG5cdFx0bmFwOiBbICdpdCcgXSxcclxuXHRcdG5kczogWyAnZGUnIF0sXHJcblx0XHQnbmRzLW5sJzogWyAnbmwnIF0sXHJcblx0XHQnbmwtaW5mb3JtYWwnOiBbICdubCcgXSxcclxuXHRcdG5vOiBbICduYicgXSxcclxuXHRcdG9zOiBbICdydScgXSxcclxuXHRcdHBjZDogWyAnZnInIF0sXHJcblx0XHRwZGM6IFsgJ2RlJyBdLFxyXG5cdFx0cGR0OiBbICdkZScgXSxcclxuXHRcdHBmbDogWyAnZGUnIF0sXHJcblx0XHRwbXM6IFsgJ2l0JyBdLFxyXG5cdFx0cHQ6IFsgJ3B0LWJyJyBdLFxyXG5cdFx0J3B0LWJyJzogWyAncHQnIF0sXHJcblx0XHRxdTogWyAnZXMnIF0sXHJcblx0XHRxdWc6IFsgJ3F1JywgJ2VzJyBdLFxyXG5cdFx0cmduOiBbICdpdCcgXSxcclxuXHRcdHJteTogWyAncm8nIF0sXHJcblx0XHQncm9hLXJ1cCc6IFsgJ3J1cCcgXSxcclxuXHRcdHJ1ZTogWyAndWsnLCAncnUnIF0sXHJcblx0XHRydXE6IFsgJ3J1cS1sYXRuJywgJ3JvJyBdLFxyXG5cdFx0J3J1cS1jeXJsJzogWyAnbWsnIF0sXHJcblx0XHQncnVxLWxhdG4nOiBbICdybycgXSxcclxuXHRcdHNhOiBbICdoaScgXSxcclxuXHRcdHNhaDogWyAncnUnIF0sXHJcblx0XHRzY246IFsgJ2l0JyBdLFxyXG5cdFx0c2c6IFsgJ2ZyJyBdLFxyXG5cdFx0c2dzOiBbICdsdCcgXSxcclxuXHRcdHNsaTogWyAnZGUnIF0sXHJcblx0XHRzcjogWyAnc3ItZWMnIF0sXHJcblx0XHRzcm46IFsgJ25sJyBdLFxyXG5cdFx0c3RxOiBbICdkZScgXSxcclxuXHRcdHN1OiBbICdpZCcgXSxcclxuXHRcdHN6bDogWyAncGwnIF0sXHJcblx0XHR0Y3k6IFsgJ2tuJyBdLFxyXG5cdFx0dGc6IFsgJ3RnLWN5cmwnIF0sXHJcblx0XHR0dDogWyAndHQtY3lybCcsICdydScgXSxcclxuXHRcdCd0dC1jeXJsJzogWyAncnUnIF0sXHJcblx0XHR0eTogWyAnZnInIF0sXHJcblx0XHR1ZG06IFsgJ3J1JyBdLFxyXG5cdFx0dWc6IFsgJ3VnLWFyYWInIF0sXHJcblx0XHR1azogWyAncnUnIF0sXHJcblx0XHR2ZWM6IFsgJ2l0JyBdLFxyXG5cdFx0dmVwOiBbICdldCcgXSxcclxuXHRcdHZsczogWyAnbmwnIF0sXHJcblx0XHR2bWY6IFsgJ2RlJyBdLFxyXG5cdFx0dm90OiBbICdmaScgXSxcclxuXHRcdHZybzogWyAnZXQnIF0sXHJcblx0XHR3YTogWyAnZnInIF0sXHJcblx0XHR3bzogWyAnZnInIF0sXHJcblx0XHR3dXU6IFsgJ3poLWhhbnMnIF0sXHJcblx0XHR4YWw6IFsgJ3J1JyBdLFxyXG5cdFx0eG1mOiBbICdrYScgXSxcclxuXHRcdHlpOiBbICdoZScgXSxcclxuXHRcdHphOiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0emVhOiBbICdubCcgXSxcclxuXHRcdHpoOiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLWNsYXNzaWNhbCc6IFsgJ2x6aCcgXSxcclxuXHRcdCd6aC1jbic6IFsgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtaGFudCc6IFsgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtaGsnOiBbICd6aC1oYW50JywgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtbWluLW5hbic6IFsgJ25hbicgXSxcclxuXHRcdCd6aC1tbyc6IFsgJ3poLWhrJywgJ3poLWhhbnQnLCAnemgtaGFucycgXSxcclxuXHRcdCd6aC1teSc6IFsgJ3poLXNnJywgJ3poLWhhbnMnIF0sXHJcblx0XHQnemgtc2cnOiBbICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLXR3JzogWyAnemgtaGFudCcsICd6aC1oYW5zJyBdLFxyXG5cdFx0J3poLXl1ZSc6IFsgJ3l1ZScgXVxyXG5cdH0gKTtcclxufSggalF1ZXJ5ICkgKTtcclxuIiwiLyohXHJcbiAqIGpRdWVyeSBJbnRlcm5hdGlvbmFsaXphdGlvbiBsaWJyYXJ5XHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMiBTYW50aG9zaCBUaG90dGluZ2FsXHJcbiAqXHJcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG9cclxuICogYW55dGhpbmcgc3BlY2lhbCB0byBjaG9vc2Ugb25lIGxpY2Vuc2Ugb3IgdGhlIG90aGVyIGFuZCB5b3UgZG9uJ3QgaGF2ZSB0b1xyXG4gKiBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy4gWW91IGFyZSBmcmVlIHRvIHVzZVxyXG4gKiBVbml2ZXJzYWxMYW5ndWFnZVNlbGVjdG9yIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0XHJcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cclxuICpcclxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXHJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuKCBmdW5jdGlvbiAoICQgKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgSTE4TixcclxuXHRcdHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xyXG5cdC8qKlxyXG5cdCAqIEBjb25zdHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcblx0ICovXHJcblx0STE4TiA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdC8vIExvYWQgZGVmYXVsdHNcclxuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKCB7fSwgSTE4Ti5kZWZhdWx0cywgb3B0aW9ucyApO1xyXG5cclxuXHRcdHRoaXMucGFyc2VyID0gdGhpcy5vcHRpb25zLnBhcnNlcjtcclxuXHRcdHRoaXMubG9jYWxlID0gdGhpcy5vcHRpb25zLmxvY2FsZTtcclxuXHRcdHRoaXMubWVzc2FnZVN0b3JlID0gdGhpcy5vcHRpb25zLm1lc3NhZ2VTdG9yZTtcclxuXHRcdHRoaXMubGFuZ3VhZ2VzID0ge307XHJcblx0fTtcclxuXHJcblx0STE4Ti5wcm90b3R5cGUgPSB7XHJcblx0XHQvKipcclxuXHRcdCAqIExvY2FsaXplIGEgZ2l2ZW4gbWVzc2FnZUtleSB0byBhIGxvY2FsZS5cclxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlS2V5XHJcblx0XHQgKiBAcmV0dXJuIHtTdHJpbmd9IExvY2FsaXplZCBtZXNzYWdlXHJcblx0XHQgKi9cclxuXHRcdGxvY2FsaXplOiBmdW5jdGlvbiAoIG1lc3NhZ2VLZXkgKSB7XHJcblx0XHRcdHZhciBsb2NhbGVQYXJ0cywgbG9jYWxlUGFydEluZGV4LCBsb2NhbGUsIGZhbGxiYWNrSW5kZXgsXHJcblx0XHRcdFx0dHJ5aW5nTG9jYWxlLCBtZXNzYWdlO1xyXG5cclxuXHRcdFx0bG9jYWxlID0gdGhpcy5sb2NhbGU7XHJcblx0XHRcdGZhbGxiYWNrSW5kZXggPSAwO1xyXG5cclxuXHRcdFx0d2hpbGUgKCBsb2NhbGUgKSB7XHJcblx0XHRcdFx0Ly8gSXRlcmF0ZSB0aHJvdWdoIGxvY2FsZXMgc3RhcnRpbmcgYXQgbW9zdC1zcGVjaWZpYyB1bnRpbFxyXG5cdFx0XHRcdC8vIGxvY2FsaXphdGlvbiBpcyBmb3VuZC4gQXMgaW4gZmktTGF0bi1GSSwgZmktTGF0biBhbmQgZmkuXHJcblx0XHRcdFx0bG9jYWxlUGFydHMgPSBsb2NhbGUuc3BsaXQoICctJyApO1xyXG5cdFx0XHRcdGxvY2FsZVBhcnRJbmRleCA9IGxvY2FsZVBhcnRzLmxlbmd0aDtcclxuXHJcblx0XHRcdFx0ZG8ge1xyXG5cdFx0XHRcdFx0dHJ5aW5nTG9jYWxlID0gbG9jYWxlUGFydHMuc2xpY2UoIDAsIGxvY2FsZVBhcnRJbmRleCApLmpvaW4oICctJyApO1xyXG5cdFx0XHRcdFx0bWVzc2FnZSA9IHRoaXMubWVzc2FnZVN0b3JlLmdldCggdHJ5aW5nTG9jYWxlLCBtZXNzYWdlS2V5ICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBtZXNzYWdlICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gbWVzc2FnZTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRsb2NhbGVQYXJ0SW5kZXgtLTtcclxuXHRcdFx0XHR9IHdoaWxlICggbG9jYWxlUGFydEluZGV4ICk7XHJcblxyXG5cdFx0XHRcdGlmICggbG9jYWxlID09PSAnZW4nICkge1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRsb2NhbGUgPSAoICQuaTE4bi5mYWxsYmFja3NbIHRoaXMubG9jYWxlIF0gJiZcclxuXHRcdFx0XHRcdFx0JC5pMThuLmZhbGxiYWNrc1sgdGhpcy5sb2NhbGUgXVsgZmFsbGJhY2tJbmRleCBdICkgfHxcclxuXHRcdFx0XHRcdFx0dGhpcy5vcHRpb25zLmZhbGxiYWNrTG9jYWxlO1xyXG5cdFx0XHRcdCQuaTE4bi5sb2coICdUcnlpbmcgZmFsbGJhY2sgbG9jYWxlIGZvciAnICsgdGhpcy5sb2NhbGUgKyAnOiAnICsgbG9jYWxlICsgJyAoJyArIG1lc3NhZ2VLZXkgKyAnKScgKTtcclxuXHJcblx0XHRcdFx0ZmFsbGJhY2tJbmRleCsrO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBrZXkgbm90IGZvdW5kXHJcblx0XHRcdHJldHVybiAnJztcclxuXHRcdH0sXHJcblxyXG5cdFx0LypcclxuXHRcdCAqIERlc3Ryb3kgdGhlIGkxOG4gaW5zdGFuY2UuXHJcblx0XHQgKi9cclxuXHRcdGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0JC5yZW1vdmVEYXRhKCBkb2N1bWVudCwgJ2kxOG4nICk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogR2VuZXJhbCBtZXNzYWdlIGxvYWRpbmcgQVBJIFRoaXMgY2FuIHRha2UgYSBVUkwgc3RyaW5nIGZvclxyXG5cdFx0ICogdGhlIGpzb24gZm9ybWF0dGVkIG1lc3NhZ2VzLiBFeGFtcGxlOlxyXG5cdFx0ICogPGNvZGU+bG9hZCgncGF0aC90by9hbGxfbG9jYWxpemF0aW9ucy5qc29uJyk7PC9jb2RlPlxyXG5cdFx0ICpcclxuXHRcdCAqIFRvIGxvYWQgYSBsb2NhbGl6YXRpb24gZmlsZSBmb3IgYSBsb2NhbGU6XHJcblx0XHQgKiA8Y29kZT5cclxuXHRcdCAqIGxvYWQoJ3BhdGgvdG8vZGUtbWVzc2FnZXMuanNvbicsICdkZScgKTtcclxuXHRcdCAqIDwvY29kZT5cclxuXHRcdCAqXHJcblx0XHQgKiBUbyBsb2FkIGEgbG9jYWxpemF0aW9uIGZpbGUgZnJvbSBhIGRpcmVjdG9yeTpcclxuXHRcdCAqIDxjb2RlPlxyXG5cdFx0ICogbG9hZCgncGF0aC90by9pMThuL2RpcmVjdG9yeScsICdkZScgKTtcclxuXHRcdCAqIDwvY29kZT5cclxuXHRcdCAqIFRoZSBhYm92ZSBtZXRob2QgaGFzIHRoZSBhZHZhbnRhZ2Ugb2YgZmFsbGJhY2sgcmVzb2x1dGlvbi5cclxuXHRcdCAqIGllLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgbG9hZCB0aGUgZmFsbGJhY2sgbG9jYWxlcyBmb3IgZGUuXHJcblx0XHQgKiBGb3IgbW9zdCB1c2VjYXNlcywgdGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kLlxyXG5cdFx0ICogSXQgaXMgb3B0aW9uYWwgdG8gaGF2ZSB0cmFpbGluZyBzbGFzaCBhdCBlbmQuXHJcblx0XHQgKlxyXG5cdFx0ICogQSBkYXRhIG9iamVjdCBjb250YWluaW5nIG1lc3NhZ2Uga2V5LSBtZXNzYWdlIHRyYW5zbGF0aW9uIG1hcHBpbmdzXHJcblx0XHQgKiBjYW4gYWxzbyBiZSBwYXNzZWQuIEV4YW1wbGU6XHJcblx0XHQgKiA8Y29kZT5cclxuXHRcdCAqIGxvYWQoIHsgJ2hlbGxvJyA6ICdIZWxsbycgfSwgb3B0aW9uYWxMb2NhbGUgKTtcclxuXHRcdCAqIDwvY29kZT5cclxuXHRcdCAqXHJcblx0XHQgKiBBIHNvdXJjZSBtYXAgY29udGFpbmluZyBrZXktdmFsdWUgcGFpciBvZiBsYW5ndWFnZW5hbWUgYW5kIGxvY2F0aW9uc1xyXG5cdFx0ICogY2FuIGFsc28gYmUgcGFzc2VkLiBFeGFtcGxlOlxyXG5cdFx0ICogPGNvZGU+XHJcblx0XHQgKiBsb2FkKCB7XHJcblx0XHQgKiBibjogJ2kxOG4vYm4uanNvbicsXHJcblx0XHQgKiBoZTogJ2kxOG4vaGUuanNvbicsXHJcblx0XHQgKiBlbjogJ2kxOG4vZW4uanNvbidcclxuXHRcdCAqIH0gKVxyXG5cdFx0ICogPC9jb2RlPlxyXG5cdFx0ICpcclxuXHRcdCAqIElmIHRoZSBkYXRhIGFyZ3VtZW50IGlzIG51bGwvdW5kZWZpbmVkL2ZhbHNlLFxyXG5cdFx0ICogYWxsIGNhY2hlZCBtZXNzYWdlcyBmb3IgdGhlIGkxOG4gaW5zdGFuY2Ugd2lsbCBnZXQgcmVzZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzb3VyY2VcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGUgTGFuZ3VhZ2UgdGFnXHJcblx0XHQgKiBAcmV0dXJuIHtqUXVlcnkuUHJvbWlzZX1cclxuXHRcdCAqL1xyXG5cdFx0bG9hZDogZnVuY3Rpb24gKCBzb3VyY2UsIGxvY2FsZSApIHtcclxuXHRcdFx0dmFyIGZhbGxiYWNrTG9jYWxlcywgbG9jSW5kZXgsIGZhbGxiYWNrTG9jYWxlLCBzb3VyY2VNYXAgPSB7fTtcclxuXHRcdFx0aWYgKCAhc291cmNlICYmICFsb2NhbGUgKSB7XHJcblx0XHRcdFx0c291cmNlID0gJ2kxOG4vJyArICQuaTE4bigpLmxvY2FsZSArICcuanNvbic7XHJcblx0XHRcdFx0bG9jYWxlID0gJC5pMThuKCkubG9jYWxlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICggdHlwZW9mIHNvdXJjZSA9PT0gJ3N0cmluZycgJiZcclxuXHRcdFx0XHQvLyBzb3VyY2UgZXh0ZW5zaW9uIHNob3VsZCBiZSBqc29uLCBidXQgY2FuIGhhdmUgcXVlcnkgcGFyYW1zIGFmdGVyIHRoYXQuXHJcblx0XHRcdFx0c291cmNlLnNwbGl0KCAnPycgKVsgMCBdLnNwbGl0KCAnLicgKS5wb3AoKSAhPT0gJ2pzb24nXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdC8vIExvYWQgc3BlY2lmaWVkIGxvY2FsZSB0aGVuIGNoZWNrIGZvciBmYWxsYmFja3Mgd2hlbiBkaXJlY3RvcnkgaXNcclxuXHRcdFx0XHQvLyBzcGVjaWZpZWQgaW4gbG9hZCgpXHJcblx0XHRcdFx0c291cmNlTWFwWyBsb2NhbGUgXSA9IHNvdXJjZSArICcvJyArIGxvY2FsZSArICcuanNvbic7XHJcblx0XHRcdFx0ZmFsbGJhY2tMb2NhbGVzID0gKCAkLmkxOG4uZmFsbGJhY2tzWyBsb2NhbGUgXSB8fCBbXSApXHJcblx0XHRcdFx0XHQuY29uY2F0KCB0aGlzLm9wdGlvbnMuZmFsbGJhY2tMb2NhbGUgKTtcclxuXHRcdFx0XHRmb3IgKCBsb2NJbmRleCA9IDA7IGxvY0luZGV4IDwgZmFsbGJhY2tMb2NhbGVzLmxlbmd0aDsgbG9jSW5kZXgrKyApIHtcclxuXHRcdFx0XHRcdGZhbGxiYWNrTG9jYWxlID0gZmFsbGJhY2tMb2NhbGVzWyBsb2NJbmRleCBdO1xyXG5cdFx0XHRcdFx0c291cmNlTWFwWyBmYWxsYmFja0xvY2FsZSBdID0gc291cmNlICsgJy8nICsgZmFsbGJhY2tMb2NhbGUgKyAnLmpzb24nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sb2FkKCBzb3VyY2VNYXAgKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlU3RvcmUubG9hZCggc291cmNlLCBsb2NhbGUgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBEb2VzIHBhcmFtZXRlciBhbmQgbWFnaWMgd29yZCBzdWJzdGl0dXRpb24uXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGtleSBNZXNzYWdlIGtleVxyXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcGFyYW1ldGVycyBNZXNzYWdlIHBhcmFtZXRlcnNcclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ31cclxuXHRcdCAqL1xyXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICgga2V5LCBwYXJhbWV0ZXJzICkge1xyXG5cdFx0XHR2YXIgbWVzc2FnZSA9IHRoaXMubG9jYWxpemUoIGtleSApO1xyXG5cdFx0XHQvLyBGSVhNRTogVGhpcyBjaGFuZ2VzIHRoZSBzdGF0ZSBvZiB0aGUgSTE4TiBvYmplY3QsXHJcblx0XHRcdC8vIHNob3VsZCBwcm9iYWJseSBub3QgY2hhbmdlIHRoZSAndGhpcy5wYXJzZXInIGJ1dCBqdXN0XHJcblx0XHRcdC8vIHBhc3MgaXQgdG8gdGhlIHBhcnNlci5cclxuXHRcdFx0dGhpcy5wYXJzZXIubGFuZ3VhZ2UgPSAkLmkxOG4ubGFuZ3VhZ2VzWyAkLmkxOG4oKS5sb2NhbGUgXSB8fCAkLmkxOG4ubGFuZ3VhZ2VzWyAnZGVmYXVsdCcgXTtcclxuXHRcdFx0aWYgKCBtZXNzYWdlID09PSAnJyApIHtcclxuXHRcdFx0XHRtZXNzYWdlID0ga2V5O1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzLnBhcnNlci5wYXJzZSggbWVzc2FnZSwgcGFyYW1ldGVycyApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByb2Nlc3MgYSBtZXNzYWdlIGZyb20gdGhlICQuSTE4TiBpbnN0YW5jZVxyXG5cdCAqIGZvciB0aGUgY3VycmVudCBkb2N1bWVudCwgc3RvcmVkIGluIGpRdWVyeS5kYXRhKGRvY3VtZW50KS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgS2V5IG9mIHRoZSBtZXNzYWdlLlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbTEgW3BhcmFtLi4uXSBWYXJpYWRpYyBsaXN0IG9mIHBhcmFtZXRlcnMgZm9yIHtrZXl9LlxyXG5cdCAqIEByZXR1cm4ge3N0cmluZ3wkLkkxOE59IFBhcnNlZCBtZXNzYWdlLCBvciBpZiBubyBrZXkgd2FzIGdpdmVuXHJcblx0ICogdGhlIGluc3RhbmNlIG9mICQuSTE4TiBpcyByZXR1cm5lZC5cclxuXHQgKi9cclxuXHQkLmkxOG4gPSBmdW5jdGlvbiAoIGtleSwgcGFyYW0xICkge1xyXG5cdFx0dmFyIHBhcmFtZXRlcnMsXHJcblx0XHRcdGkxOG4gPSAkLmRhdGEoIGRvY3VtZW50LCAnaTE4bicgKSxcclxuXHRcdFx0b3B0aW9ucyA9IHR5cGVvZiBrZXkgPT09ICdvYmplY3QnICYmIGtleTtcclxuXHJcblx0XHQvLyBJZiB0aGUgbG9jYWxlIG9wdGlvbiBmb3IgdGhpcyBjYWxsIGlzIGRpZmZlcmVudCB0aGVuIHRoZSBzZXR1cCBzbyBmYXIsXHJcblx0XHQvLyB1cGRhdGUgaXQgYXV0b21hdGljYWxseS4gVGhpcyBkb2Vzbid0IGp1c3QgY2hhbmdlIHRoZSBjb250ZXh0IGZvciB0aGlzXHJcblx0XHQvLyBjYWxsIGJ1dCBmb3IgYWxsIGZ1dHVyZSBjYWxsIGFzIHdlbGwuXHJcblx0XHQvLyBJZiB0aGVyZSBpcyBubyBpMThuIHNldHVwIHlldCwgZG9uJ3QgZG8gdGhpcy4gSXQgd2lsbCBiZSB0YWtlbiBjYXJlIG9mXHJcblx0XHQvLyBieSB0aGUgYG5ldyBJMThOYCBjb25zdHJ1Y3Rpb24gYmVsb3cuXHJcblx0XHQvLyBOT1RFOiBJdCBzaG91bGQgb25seSBjaGFuZ2UgbGFuZ3VhZ2UgZm9yIHRoaXMgb25lIGNhbGwuXHJcblx0XHQvLyBUaGVuIGNhY2hlIGluc3RhbmNlcyBvZiBJMThOIHNvbWV3aGVyZS5cclxuXHRcdGlmICggb3B0aW9ucyAmJiBvcHRpb25zLmxvY2FsZSAmJiBpMThuICYmIGkxOG4ubG9jYWxlICE9PSBvcHRpb25zLmxvY2FsZSApIHtcclxuXHRcdFx0aTE4bi5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICFpMThuICkge1xyXG5cdFx0XHRpMThuID0gbmV3IEkxOE4oIG9wdGlvbnMgKTtcclxuXHRcdFx0JC5kYXRhKCBkb2N1bWVudCwgJ2kxOG4nLCBpMThuICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyApIHtcclxuXHRcdFx0aWYgKCBwYXJhbTEgIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRwYXJhbWV0ZXJzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGFyYW1ldGVycyA9IFtdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gaTE4bi5wYXJzZSgga2V5LCBwYXJhbWV0ZXJzICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBGSVhNRTogcmVtb3ZlIHRoaXMgZmVhdHVyZS9idWcuXHJcblx0XHRcdHJldHVybiBpMThuO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQuZm4uaTE4biA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpMThuID0gJC5kYXRhKCBkb2N1bWVudCwgJ2kxOG4nICk7XHJcblxyXG5cdFx0aWYgKCAhaTE4biApIHtcclxuXHRcdFx0aTE4biA9IG5ldyBJMThOKCk7XHJcblx0XHRcdCQuZGF0YSggZG9jdW1lbnQsICdpMThuJywgaTE4biApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dmFyICR0aGlzID0gJCggdGhpcyApLFxyXG5cdFx0XHRcdG1lc3NhZ2VLZXkgPSAkdGhpcy5kYXRhKCAnaTE4bicgKSxcclxuXHRcdFx0XHRsQnJhY2tldCwgckJyYWNrZXQsIHR5cGUsIGtleTtcclxuXHJcblx0XHRcdGlmICggbWVzc2FnZUtleSApIHtcclxuXHRcdFx0XHRsQnJhY2tldCA9IG1lc3NhZ2VLZXkuaW5kZXhPZiggJ1snICk7XHJcblx0XHRcdFx0ckJyYWNrZXQgPSBtZXNzYWdlS2V5LmluZGV4T2YoICddJyApO1xyXG5cdFx0XHRcdGlmICggbEJyYWNrZXQgIT09IC0xICYmIHJCcmFja2V0ICE9PSAtMSAmJiBsQnJhY2tldCA8IHJCcmFja2V0ICkge1xyXG5cdFx0XHRcdFx0dHlwZSA9IG1lc3NhZ2VLZXkuc2xpY2UoIGxCcmFja2V0ICsgMSwgckJyYWNrZXQgKTtcclxuXHRcdFx0XHRcdGtleSA9IG1lc3NhZ2VLZXkuc2xpY2UoIHJCcmFja2V0ICsgMSApO1xyXG5cdFx0XHRcdFx0aWYgKCB0eXBlID09PSAnaHRtbCcgKSB7XHJcblx0XHRcdFx0XHRcdCR0aGlzLmh0bWwoIGkxOG4ucGFyc2UoIGtleSApICk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkdGhpcy5hdHRyKCB0eXBlLCBpMThuLnBhcnNlKCBrZXkgKSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkdGhpcy50ZXh0KCBpMThuLnBhcnNlKCBtZXNzYWdlS2V5ICkgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JHRoaXMuZmluZCggJ1tkYXRhLWkxOG5dJyApLmkxOG4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdGZ1bmN0aW9uIGdldERlZmF1bHRMb2NhbGUoKSB7XHJcblx0XHR2YXIgbmF2LCBsb2NhbGUgPSAkKCAnaHRtbCcgKS5hdHRyKCAnbGFuZycgKTtcclxuXHJcblx0XHRpZiAoICFsb2NhbGUgKSB7XHJcblx0XHRcdGlmICggdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IgIT09IHVuZGVmaW5lZCApIHtcclxuXHRcdFx0XHRuYXYgPSB3aW5kb3cubmF2aWdhdG9yO1xyXG5cdFx0XHRcdGxvY2FsZSA9IG5hdi5sYW5ndWFnZSB8fCBuYXYudXNlckxhbmd1YWdlIHx8ICcnO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxvY2FsZSA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbG9jYWxlO1xyXG5cdH1cclxuXHJcblx0JC5pMThuLmxhbmd1YWdlcyA9IHt9O1xyXG5cdCQuaTE4bi5tZXNzYWdlU3RvcmUgPSAkLmkxOG4ubWVzc2FnZVN0b3JlIHx8IHt9O1xyXG5cdCQuaTE4bi5wYXJzZXIgPSB7XHJcblx0XHQvLyBUaGUgZGVmYXVsdCBwYXJzZXIgb25seSBoYW5kbGVzIHZhcmlhYmxlIHN1YnN0aXR1dGlvblxyXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICggbWVzc2FnZSwgcGFyYW1ldGVycyApIHtcclxuXHRcdFx0cmV0dXJuIG1lc3NhZ2UucmVwbGFjZSggL1xcJChcXGQrKS9nLCBmdW5jdGlvbiAoIHN0ciwgbWF0Y2ggKSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gcGFyc2VJbnQoIG1hdGNoLCAxMCApIC0gMTtcclxuXHRcdFx0XHRyZXR1cm4gcGFyYW1ldGVyc1sgaW5kZXggXSAhPT0gdW5kZWZpbmVkID8gcGFyYW1ldGVyc1sgaW5kZXggXSA6ICckJyArIG1hdGNoO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9LFxyXG5cdFx0ZW1pdHRlcjoge31cclxuXHR9O1xyXG5cdCQuaTE4bi5mYWxsYmFja3MgPSB7fTtcclxuXHQkLmkxOG4uZGVidWcgPSBmYWxzZTtcclxuXHQkLmkxOG4ubG9nID0gZnVuY3Rpb24gKCAvKiBhcmd1bWVudHMgKi8gKSB7XHJcblx0XHRpZiAoIHdpbmRvdy5jb25zb2xlICYmICQuaTE4bi5kZWJ1ZyApIHtcclxuXHRcdFx0d2luZG93LmNvbnNvbGUubG9nLmFwcGx5KCB3aW5kb3cuY29uc29sZSwgYXJndW1lbnRzICk7XHJcblx0XHR9XHJcblx0fTtcclxuXHQvKiBTdGF0aWMgbWVtYmVycyAqL1xyXG5cdEkxOE4uZGVmYXVsdHMgPSB7XHJcblx0XHRsb2NhbGU6IGdldERlZmF1bHRMb2NhbGUoKSxcclxuXHRcdGZhbGxiYWNrTG9jYWxlOiAnZW4nLFxyXG5cdFx0cGFyc2VyOiAkLmkxOG4ucGFyc2VyLFxyXG5cdFx0bWVzc2FnZVN0b3JlOiAkLmkxOG4ubWVzc2FnZVN0b3JlXHJcblx0fTtcclxuXHJcblx0Ly8gRXhwb3NlIGNvbnN0cnVjdG9yXHJcblx0JC5pMThuLmNvbnN0cnVjdG9yID0gSTE4TjtcclxufSggalF1ZXJ5ICkgKTsiLCIvKiBnbG9iYWwgcGx1cmFsUnVsZVBhcnNlciAqL1xyXG4oIGZ1bmN0aW9uICggJCApIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdC8vIGpzY3M6ZGlzYWJsZVxyXG5cdHZhciBsYW5ndWFnZSA9IHtcclxuXHRcdC8vIENMRFIgcGx1cmFsIHJ1bGVzIGdlbmVyYXRlZCB1c2luZ1xyXG5cdFx0Ly8gbGlicy9DTERSUGx1cmFsUnVsZVBhcnNlci90b29scy9QbHVyYWxYTUwySlNPTi5odG1sXHJcblx0XHRwbHVyYWxSdWxlczoge1xyXG5cdFx0XHRhazoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhcjoge1xyXG5cdFx0XHRcdHplcm86ICduID0gMCcsXHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJyxcclxuXHRcdFx0XHRmZXc6ICduICUgMTAwID0gMy4uMTAnLFxyXG5cdFx0XHRcdG1hbnk6ICduICUgMTAwID0gMTEuLjk5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhcnM6IHtcclxuXHRcdFx0XHR6ZXJvOiAnbiA9IDAnLFxyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMicsXHJcblx0XHRcdFx0ZmV3OiAnbiAlIDEwMCA9IDMuLjEwJyxcclxuXHRcdFx0XHRtYW55OiAnbiAlIDEwMCA9IDExLi45OSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YXM6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCBvciBuID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YmU6IHtcclxuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExJyxcclxuXHRcdFx0XHRmZXc6ICduICUgMTAgPSAyLi40IGFuZCBuICUgMTAwICE9IDEyLi4xNCcsXHJcblx0XHRcdFx0bWFueTogJ24gJSAxMCA9IDAgb3IgbiAlIDEwID0gNS4uOSBvciBuICUgMTAwID0gMTEuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaDoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRibjoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRicjoge1xyXG5cdFx0XHRcdG9uZTogJ24gJSAxMCA9IDEgYW5kIG4gJSAxMDAgIT0gMTEsNzEsOTEnLFxyXG5cdFx0XHRcdHR3bzogJ24gJSAxMCA9IDIgYW5kIG4gJSAxMDAgIT0gMTIsNzIsOTInLFxyXG5cdFx0XHRcdGZldzogJ24gJSAxMCA9IDMuLjQsOSBhbmQgbiAlIDEwMCAhPSAxMC4uMTksNzAuLjc5LDkwLi45OScsXHJcblx0XHRcdFx0bWFueTogJ24gIT0gMCBhbmQgbiAlIDEwMDAwMDAgPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiczoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxIGFuZCBpICUgMTAwICE9IDExIG9yIGYgJSAxMCA9IDEgYW5kIGYgJSAxMDAgIT0gMTEnLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3M6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdGZldzogJ2kgPSAyLi40IGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0bWFueTogJ3YgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Y3k6IHtcclxuXHRcdFx0XHR6ZXJvOiAnbiA9IDAnLFxyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMicsXHJcblx0XHRcdFx0ZmV3OiAnbiA9IDMnLFxyXG5cdFx0XHRcdG1hbnk6ICduID0gNidcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGE6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMSBvciB0ICE9IDAgYW5kIGkgPSAwLDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGRzYjoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAwID0gMSBvciBmICUgMTAwID0gMScsXHJcblx0XHRcdFx0dHdvOiAndiA9IDAgYW5kIGkgJSAxMDAgPSAyIG9yIGYgJSAxMDAgPSAyJyxcclxuXHRcdFx0XHRmZXc6ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDMuLjQgb3IgZiAlIDEwMCA9IDMuLjQnXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGZmOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAsMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmlsOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgPSAxLDIsMyBvciB2ID0gMCBhbmQgaSAlIDEwICE9IDQsNiw5IG9yIHYgIT0gMCBhbmQgZiAlIDEwICE9IDQsNiw5J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmcjoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwLDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGdhOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJyxcclxuXHRcdFx0XHRmZXc6ICduID0gMy4uNicsXHJcblx0XHRcdFx0bWFueTogJ24gPSA3Li4xMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2Q6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMSwxMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDIsMTInLFxyXG5cdFx0XHRcdGZldzogJ24gPSAzLi4xMCwxMy4uMTknXHJcblx0XHRcdH0sXHJcblx0XHRcdGd1OiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGd1dzoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRndjoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxJyxcclxuXHRcdFx0XHR0d286ICd2ID0gMCBhbmQgaSAlIDEwID0gMicsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAwLDIwLDQwLDYwLDgwJyxcclxuXHRcdFx0XHRtYW55OiAndiAhPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoZToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAxIGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0dHdvOiAnaSA9IDIgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIG4gIT0gMC4uMTAgYW5kIG4gJSAxMCA9IDAnXHJcblx0XHRcdH0sXHJcblx0XHRcdGhpOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGhyOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0IG9yIGYgJSAxMCA9IDIuLjQgYW5kIGYgJSAxMDAgIT0gMTIuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoc2I6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDEgb3IgZiAlIDEwMCA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMiBvciBmICUgMTAwID0gMicsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAzLi40IG9yIGYgJSAxMDAgPSAzLi40J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRoeToge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwLDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGlzOiB7XHJcblx0XHRcdFx0b25lOiAndCA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgdCAhPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRpdToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0aXc6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdHR3bzogJ2kgPSAyIGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0bWFueTogJ3YgPSAwIGFuZCBuICE9IDAuLjEwIGFuZCBuICUgMTAgPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRrYWI6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMCwxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRrbjoge1xyXG5cdFx0XHRcdG9uZTogJ2kgPSAwIG9yIG4gPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRrdzoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0bGFnOiB7XHJcblx0XHRcdFx0emVybzogJ24gPSAwJyxcclxuXHRcdFx0XHRvbmU6ICdpID0gMCwxIGFuZCBuICE9IDAnXHJcblx0XHRcdH0sXHJcblx0XHRcdGxuOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdGx0OiB7XHJcblx0XHRcdFx0b25lOiAnbiAlIDEwID0gMSBhbmQgbiAlIDEwMCAhPSAxMS4uMTknLFxyXG5cdFx0XHRcdGZldzogJ24gJSAxMCA9IDIuLjkgYW5kIG4gJSAxMDAgIT0gMTEuLjE5JyxcclxuXHRcdFx0XHRtYW55OiAnZiAhPSAwJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRsdjoge1xyXG5cdFx0XHRcdHplcm86ICduICUgMTAgPSAwIG9yIG4gJSAxMDAgPSAxMS4uMTkgb3IgdiA9IDIgYW5kIGYgJSAxMDAgPSAxMS4uMTknLFxyXG5cdFx0XHRcdG9uZTogJ24gJSAxMCA9IDEgYW5kIG4gJSAxMDAgIT0gMTEgb3IgdiA9IDIgYW5kIGYgJSAxMCA9IDEgYW5kIGYgJSAxMDAgIT0gMTEgb3IgdiAhPSAyIGFuZCBmICUgMTAgPSAxJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtZzoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtazoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxIG9yIGYgJSAxMCA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdG1vOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRmZXc6ICd2ICE9IDAgb3IgbiA9IDAgb3IgbiAhPSAxIGFuZCBuICUgMTAwID0gMS4uMTknXHJcblx0XHRcdH0sXHJcblx0XHRcdG1yOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH0sXHJcblx0XHRcdG10OiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdGZldzogJ24gPSAwIG9yIG4gJSAxMDAgPSAyLi4xMCcsXHJcblx0XHRcdFx0bWFueTogJ24gJSAxMDAgPSAxMS4uMTknXHJcblx0XHRcdH0sXHJcblx0XHRcdG5hcToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0bnNvOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHBsOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDEgYW5kIHYgPSAwJyxcclxuXHRcdFx0XHRmZXc6ICd2ID0gMCBhbmQgaSAlIDEwID0gMi4uNCBhbmQgaSAlIDEwMCAhPSAxMi4uMTQnLFxyXG5cdFx0XHRcdG1hbnk6ICd2ID0gMCBhbmQgaSAhPSAxIGFuZCBpICUgMTAgPSAwLi4xIG9yIHYgPSAwIGFuZCBpICUgMTAgPSA1Li45IG9yIHYgPSAwIGFuZCBpICUgMTAwID0gMTIuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwcmc6IHtcclxuXHRcdFx0XHR6ZXJvOiAnbiAlIDEwID0gMCBvciBuICUgMTAwID0gMTEuLjE5IG9yIHYgPSAyIGFuZCBmICUgMTAwID0gMTEuLjE5JyxcclxuXHRcdFx0XHRvbmU6ICduICUgMTAgPSAxIGFuZCBuICUgMTAwICE9IDExIG9yIHYgPSAyIGFuZCBmICUgMTAgPSAxIGFuZCBmICUgMTAwICE9IDExIG9yIHYgIT0gMiBhbmQgZiAlIDEwID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0cHQ6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMC4uMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0cm86IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdGZldzogJ3YgIT0gMCBvciBuID0gMCBvciBuICE9IDEgYW5kIG4gJSAxMDAgPSAxLi4xOSdcclxuXHRcdFx0fSxcclxuXHRcdFx0cnU6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMSBhbmQgaSAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0JyxcclxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIGkgJSAxMCA9IDAgb3IgdiA9IDAgYW5kIGkgJSAxMCA9IDUuLjkgb3IgdiA9IDAgYW5kIGkgJSAxMDAgPSAxMS4uMTQnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNlOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaDoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpICUgMTAgPSAxIGFuZCBpICUgMTAwICE9IDExIG9yIGYgJSAxMCA9IDEgYW5kIGYgJSAxMDAgIT0gMTEnLFxyXG5cdFx0XHRcdGZldzogJ3YgPSAwIGFuZCBpICUgMTAgPSAyLi40IGFuZCBpICUgMTAwICE9IDEyLi4xNCBvciBmICUgMTAgPSAyLi40IGFuZCBmICUgMTAwICE9IDEyLi4xNCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hpOiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnLFxyXG5cdFx0XHRcdGZldzogJ24gPSAyLi4xMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2k6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMCwxIG9yIGkgPSAwIGFuZCBmID0gMSdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2s6IHtcclxuXHRcdFx0XHRvbmU6ICdpID0gMSBhbmQgdiA9IDAnLFxyXG5cdFx0XHRcdGZldzogJ2kgPSAyLi40IGFuZCB2ID0gMCcsXHJcblx0XHRcdFx0bWFueTogJ3YgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c2w6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwMCA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ3YgPSAwIGFuZCBpICUgMTAwID0gMicsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMDAgPSAzLi40IG9yIHYgIT0gMCdcclxuXHRcdFx0fSxcclxuXHRcdFx0c21hOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzbWk6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInXHJcblx0XHRcdH0sXHJcblx0XHRcdHNtajoge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAxJyxcclxuXHRcdFx0XHR0d286ICduID0gMidcclxuXHRcdFx0fSxcclxuXHRcdFx0c21uOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDEnLFxyXG5cdFx0XHRcdHR3bzogJ24gPSAyJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzbXM6IHtcclxuXHRcdFx0XHRvbmU6ICduID0gMScsXHJcblx0XHRcdFx0dHdvOiAnbiA9IDInXHJcblx0XHRcdH0sXHJcblx0XHRcdHNyOiB7XHJcblx0XHRcdFx0b25lOiAndiA9IDAgYW5kIGkgJSAxMCA9IDEgYW5kIGkgJSAxMDAgIT0gMTEgb3IgZiAlIDEwID0gMSBhbmQgZiAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0IG9yIGYgJSAxMCA9IDIuLjQgYW5kIGYgJSAxMDAgIT0gMTIuLjE0J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0aToge1xyXG5cdFx0XHRcdG9uZTogJ24gPSAwLi4xJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0bDoge1xyXG5cdFx0XHRcdG9uZTogJ3YgPSAwIGFuZCBpID0gMSwyLDMgb3IgdiA9IDAgYW5kIGkgJSAxMCAhPSA0LDYsOSBvciB2ICE9IDAgYW5kIGYgJSAxMCAhPSA0LDYsOSdcclxuXHRcdFx0fSxcclxuXHRcdFx0dHptOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEgb3IgbiA9IDExLi45OSdcclxuXHRcdFx0fSxcclxuXHRcdFx0dWs6IHtcclxuXHRcdFx0XHRvbmU6ICd2ID0gMCBhbmQgaSAlIDEwID0gMSBhbmQgaSAlIDEwMCAhPSAxMScsXHJcblx0XHRcdFx0ZmV3OiAndiA9IDAgYW5kIGkgJSAxMCA9IDIuLjQgYW5kIGkgJSAxMDAgIT0gMTIuLjE0JyxcclxuXHRcdFx0XHRtYW55OiAndiA9IDAgYW5kIGkgJSAxMCA9IDAgb3IgdiA9IDAgYW5kIGkgJSAxMCA9IDUuLjkgb3IgdiA9IDAgYW5kIGkgJSAxMDAgPSAxMS4uMTQnXHJcblx0XHRcdH0sXHJcblx0XHRcdHdhOiB7XHJcblx0XHRcdFx0b25lOiAnbiA9IDAuLjEnXHJcblx0XHRcdH0sXHJcblx0XHRcdHp1OiB7XHJcblx0XHRcdFx0b25lOiAnaSA9IDAgb3IgbiA9IDEnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHQvLyBqc2NzOmVuYWJsZVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUGx1cmFsIGZvcm0gdHJhbnNmb3JtYXRpb25zLCBuZWVkZWQgZm9yIHNvbWUgbGFuZ3VhZ2VzLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7aW50ZWdlcn0gY291bnRcclxuXHRcdCAqICAgICAgICAgICAgTm9uLWxvY2FsaXplZCBxdWFudGlmaWVyXHJcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBmb3Jtc1xyXG5cdFx0ICogICAgICAgICAgICBMaXN0IG9mIHBsdXJhbCBmb3Jtc1xyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfSBDb3JyZWN0IGZvcm0gZm9yIHF1YW50aWZpZXIgaW4gdGhpcyBsYW5ndWFnZVxyXG5cdFx0ICovXHJcblx0XHRjb252ZXJ0UGx1cmFsOiBmdW5jdGlvbiAoIGNvdW50LCBmb3JtcyApIHtcclxuXHRcdFx0dmFyIHBsdXJhbFJ1bGVzLFxyXG5cdFx0XHRcdHBsdXJhbEZvcm1JbmRleCxcclxuXHRcdFx0XHRpbmRleCxcclxuXHRcdFx0XHRleHBsaWNpdFBsdXJhbFBhdHRlcm4gPSBuZXcgUmVnRXhwKCAnXFxcXGQrPScsICdpJyApLFxyXG5cdFx0XHRcdGZvcm1Db3VudCxcclxuXHRcdFx0XHRmb3JtO1xyXG5cclxuXHRcdFx0aWYgKCAhZm9ybXMgfHwgZm9ybXMubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdHJldHVybiAnJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gSGFuZGxlIGZvciBFeHBsaWNpdCAwPSAmIDE9IHZhbHVlc1xyXG5cdFx0XHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybXMubGVuZ3RoOyBpbmRleCsrICkge1xyXG5cdFx0XHRcdGZvcm0gPSBmb3Jtc1sgaW5kZXggXTtcclxuXHRcdFx0XHRpZiAoIGV4cGxpY2l0UGx1cmFsUGF0dGVybi50ZXN0KCBmb3JtICkgKSB7XHJcblx0XHRcdFx0XHRmb3JtQ291bnQgPSBwYXJzZUludCggZm9ybS5zbGljZSggMCwgZm9ybS5pbmRleE9mKCAnPScgKSApLCAxMCApO1xyXG5cdFx0XHRcdFx0aWYgKCBmb3JtQ291bnQgPT09IGNvdW50ICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gKCBmb3JtLnNsaWNlKCBmb3JtLmluZGV4T2YoICc9JyApICsgMSApICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb3Jtc1sgaW5kZXggXSA9IHVuZGVmaW5lZDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZvcm1zID0gJC5tYXAoIGZvcm1zLCBmdW5jdGlvbiAoIGZvcm0gKSB7XHJcblx0XHRcdFx0aWYgKCBmb3JtICE9PSB1bmRlZmluZWQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZm9ybTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gKTtcclxuXHJcblx0XHRcdHBsdXJhbFJ1bGVzID0gdGhpcy5wbHVyYWxSdWxlc1sgJC5pMThuKCkubG9jYWxlIF07XHJcblxyXG5cdFx0XHRpZiAoICFwbHVyYWxSdWxlcyApIHtcclxuXHRcdFx0XHQvLyBkZWZhdWx0IGZhbGxiYWNrLlxyXG5cdFx0XHRcdHJldHVybiAoIGNvdW50ID09PSAxICkgPyBmb3Jtc1sgMCBdIDogZm9ybXNbIDEgXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cGx1cmFsRm9ybUluZGV4ID0gdGhpcy5nZXRQbHVyYWxGb3JtKCBjb3VudCwgcGx1cmFsUnVsZXMgKTtcclxuXHRcdFx0cGx1cmFsRm9ybUluZGV4ID0gTWF0aC5taW4oIHBsdXJhbEZvcm1JbmRleCwgZm9ybXMubGVuZ3RoIC0gMSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZvcm1zWyBwbHVyYWxGb3JtSW5kZXggXTtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBGb3IgdGhlIG51bWJlciwgZ2V0IHRoZSBwbHVyYWwgZm9yIGluZGV4XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtpbnRlZ2VyfSBudW1iZXJcclxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBwbHVyYWxSdWxlc1xyXG5cdFx0ICogQHJldHVybiB7aW50ZWdlcn0gcGx1cmFsIGZvcm0gaW5kZXhcclxuXHRcdCAqL1xyXG5cdFx0Z2V0UGx1cmFsRm9ybTogZnVuY3Rpb24gKCBudW1iZXIsIHBsdXJhbFJ1bGVzICkge1xyXG5cdFx0XHR2YXIgaSxcclxuXHRcdFx0XHRwbHVyYWxGb3JtcyA9IFsgJ3plcm8nLCAnb25lJywgJ3R3bycsICdmZXcnLCAnbWFueScsICdvdGhlcicgXSxcclxuXHRcdFx0XHRwbHVyYWxGb3JtSW5kZXggPSAwO1xyXG5cclxuXHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwbHVyYWxGb3Jtcy5sZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHRpZiAoIHBsdXJhbFJ1bGVzWyBwbHVyYWxGb3Jtc1sgaSBdIF0gKSB7XHJcblx0XHRcdFx0XHRpZiAoIHBsdXJhbFJ1bGVQYXJzZXIoIHBsdXJhbFJ1bGVzWyBwbHVyYWxGb3Jtc1sgaSBdIF0sIG51bWJlciApICkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcGx1cmFsRm9ybUluZGV4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHBsdXJhbEZvcm1JbmRleCsrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHBsdXJhbEZvcm1JbmRleDtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDb252ZXJ0cyBhIG51bWJlciB1c2luZyBkaWdpdFRyYW5zZm9ybVRhYmxlLlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW0gVmFsdWUgdG8gYmUgY29udmVydGVkXHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGludGVnZXIgQ29udmVydCB0aGUgcmV0dXJuIHZhbHVlIHRvIGFuIGludGVnZXJcclxuXHRcdCAqIEByZXR1cm4ge3N0cmluZ30gVGhlIG51bWJlciBjb252ZXJ0ZWQgaW50byBhIFN0cmluZy5cclxuXHRcdCAqL1xyXG5cdFx0Y29udmVydE51bWJlcjogZnVuY3Rpb24gKCBudW0sIGludGVnZXIgKSB7XHJcblx0XHRcdHZhciB0bXAsIGl0ZW0sIGksXHJcblx0XHRcdFx0dHJhbnNmb3JtVGFibGUsIG51bWJlclN0cmluZywgY29udmVydGVkTnVtYmVyO1xyXG5cclxuXHRcdFx0Ly8gU2V0IHRoZSB0YXJnZXQgVHJhbnNmb3JtIHRhYmxlOlxyXG5cdFx0XHR0cmFuc2Zvcm1UYWJsZSA9IHRoaXMuZGlnaXRUcmFuc2Zvcm1UYWJsZSggJC5pMThuKCkubG9jYWxlICk7XHJcblx0XHRcdG51bWJlclN0cmluZyA9IFN0cmluZyggbnVtICk7XHJcblx0XHRcdGNvbnZlcnRlZE51bWJlciA9ICcnO1xyXG5cclxuXHRcdFx0aWYgKCAhdHJhbnNmb3JtVGFibGUgKSB7XHJcblx0XHRcdFx0cmV0dXJuIG51bTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIHJlc3RvcmUgdG8gTGF0aW4gbnVtYmVyIGZsYWcgaXMgc2V0OlxyXG5cdFx0XHRpZiAoIGludGVnZXIgKSB7XHJcblx0XHRcdFx0aWYgKCBwYXJzZUZsb2F0KCBudW0sIDEwICkgPT09IG51bSApIHtcclxuXHRcdFx0XHRcdHJldHVybiBudW07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0bXAgPSBbXTtcclxuXHJcblx0XHRcdFx0Zm9yICggaXRlbSBpbiB0cmFuc2Zvcm1UYWJsZSApIHtcclxuXHRcdFx0XHRcdHRtcFsgdHJhbnNmb3JtVGFibGVbIGl0ZW0gXSBdID0gaXRlbTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRyYW5zZm9ybVRhYmxlID0gdG1wO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IG51bWJlclN0cmluZy5sZW5ndGg7IGkrKyApIHtcclxuXHRcdFx0XHRpZiAoIHRyYW5zZm9ybVRhYmxlWyBudW1iZXJTdHJpbmdbIGkgXSBdICkge1xyXG5cdFx0XHRcdFx0Y29udmVydGVkTnVtYmVyICs9IHRyYW5zZm9ybVRhYmxlWyBudW1iZXJTdHJpbmdbIGkgXSBdO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRjb252ZXJ0ZWROdW1iZXIgKz0gbnVtYmVyU3RyaW5nWyBpIF07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gaW50ZWdlciA/IHBhcnNlRmxvYXQoIGNvbnZlcnRlZE51bWJlciwgMTAgKSA6IGNvbnZlcnRlZE51bWJlcjtcclxuXHRcdH0sXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBHcmFtbWF0aWNhbCB0cmFuc2Zvcm1hdGlvbnMsIG5lZWRlZCBmb3IgaW5mbGVjdGVkIGxhbmd1YWdlcy5cclxuXHRcdCAqIEludm9rZWQgYnkgcHV0dGluZyB7e2dyYW1tYXI6Zm9ybXx3b3JkfX0gaW4gYSBtZXNzYWdlLlxyXG5cdFx0ICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgZm9yIGxhbmd1YWdlcyB0aGF0IG5lZWQgc3BlY2lhbCBncmFtbWFyIHJ1bGVzXHJcblx0XHQgKiBhcHBsaWVkIGR5bmFtaWNhbGx5LlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3b3JkXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZm9ybVxyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuXHRcdGNvbnZlcnRHcmFtbWFyOiBmdW5jdGlvbiAoIHdvcmQsIGZvcm0gKSB7XHJcblx0XHRcdHJldHVybiB3b3JkO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFByb3ZpZGVzIGFuIGFsdGVybmF0aXZlIHRleHQgZGVwZW5kaW5nIG9uIHNwZWNpZmllZCBnZW5kZXIuIFVzYWdlXHJcblx0XHQgKiB7e2dlbmRlcjpbZ2VuZGVyfHVzZXIgb2JqZWN0XXxtYXNjdWxpbmV8ZmVtaW5pbmV8bmV1dHJhbH19LiBJZiBzZWNvbmRcclxuXHRcdCAqIG9yIHRoaXJkIHBhcmFtZXRlciBhcmUgbm90IHNwZWNpZmllZCwgbWFzY3VsaW5lIGlzIHVzZWQuXHJcblx0XHQgKlxyXG5cdFx0ICogVGhlc2UgZGV0YWlscyBtYXkgYmUgb3ZlcnJpZGVuIHBlciBsYW5ndWFnZS5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZ2VuZGVyXHJcblx0XHQgKiAgICAgIG1hbGUsIGZlbWFsZSwgb3IgYW55dGhpbmcgZWxzZSBmb3IgbmV1dHJhbC5cclxuXHRcdCAqIEBwYXJhbSB7QXJyYXl9IGZvcm1zXHJcblx0XHQgKiAgICAgIExpc3Qgb2YgZ2VuZGVyIGZvcm1zXHJcblx0XHQgKlxyXG5cdFx0ICogQHJldHVybiB7c3RyaW5nfVxyXG5cdFx0ICovXHJcblx0XHRnZW5kZXI6IGZ1bmN0aW9uICggZ2VuZGVyLCBmb3JtcyApIHtcclxuXHRcdFx0aWYgKCAhZm9ybXMgfHwgZm9ybXMubGVuZ3RoID09PSAwICkge1xyXG5cdFx0XHRcdHJldHVybiAnJztcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0d2hpbGUgKCBmb3Jtcy5sZW5ndGggPCAyICkge1xyXG5cdFx0XHRcdGZvcm1zLnB1c2goIGZvcm1zWyBmb3Jtcy5sZW5ndGggLSAxIF0gKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBnZW5kZXIgPT09ICdtYWxlJyApIHtcclxuXHRcdFx0XHRyZXR1cm4gZm9ybXNbIDAgXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCBnZW5kZXIgPT09ICdmZW1hbGUnICkge1xyXG5cdFx0XHRcdHJldHVybiBmb3Jtc1sgMSBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gKCBmb3Jtcy5sZW5ndGggPT09IDMgKSA/IGZvcm1zWyAyIF0gOiBmb3Jtc1sgMCBdO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdldCB0aGUgZGlnaXQgdHJhbnNmb3JtIHRhYmxlIGZvciB0aGUgZ2l2ZW4gbGFuZ3VhZ2VcclxuXHRcdCAqIFNlZSBodHRwOi8vY2xkci51bmljb2RlLm9yZy90cmFuc2xhdGlvbi9udW1iZXJpbmctc3lzdGVtc1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZVxyXG5cdFx0ICogQHJldHVybiB7QXJyYXl8Ym9vbGVhbn0gTGlzdCBvZiBkaWdpdHMgaW4gdGhlIHBhc3NlZCBsYW5ndWFnZSBvciBmYWxzZVxyXG5cdFx0ICogcmVwcmVzZW50YXRpb24sIG9yIGJvb2xlYW4gZmFsc2UgaWYgdGhlcmUgaXMgbm8gaW5mb3JtYXRpb24uXHJcblx0XHQgKi9cclxuXHRcdGRpZ2l0VHJhbnNmb3JtVGFibGU6IGZ1bmN0aW9uICggbGFuZ3VhZ2UgKSB7XHJcblx0XHRcdHZhciB0YWJsZXMgPSB7XHJcblx0XHRcdFx0YXI6ICfZoNmh2aLZo9mk2aXZptmn2ajZqScsXHJcblx0XHRcdFx0ZmE6ICfbsNux27Lbs9u027Xbttu327jbuScsXHJcblx0XHRcdFx0bWw6ICfgtabgtafgtajgtangtargtavgtazgta3gta7gta8nLFxyXG5cdFx0XHRcdGtuOiAn4LOm4LOn4LOo4LOp4LOq4LOr4LOs4LOt4LOu4LOvJyxcclxuXHRcdFx0XHRsbzogJ+C7kOC7keC7kuC7k+C7lOC7leC7luC7l+C7mOC7mScsXHJcblx0XHRcdFx0b3I6ICfgrabgrafgrajgrangrargravgrazgra3gra7gra8nLFxyXG5cdFx0XHRcdGtoOiAn4Z+g4Z+h4Z+i4Z+j4Z+k4Z+l4Z+m4Z+n4Z+o4Z+pJyxcclxuXHRcdFx0XHRwYTogJ+CppuCpp+CpqOCpqeCpquCpq+CprOCpreCpruCprycsXHJcblx0XHRcdFx0Z3U6ICfgq6bgq6fgq6jgq6ngq6rgq6vgq6zgq63gq67gq68nLFxyXG5cdFx0XHRcdGhpOiAn4KWm4KWn4KWo4KWp4KWq4KWr4KWs4KWt4KWu4KWvJyxcclxuXHRcdFx0XHRteTogJ+GBgOGBgeGBguGBg+GBhOGBheGBhuGBh+GBiOGBiScsXHJcblx0XHRcdFx0dGE6ICfgr6bgr6fgr6jgr6ngr6rgr6vgr6zgr63gr67gr68nLFxyXG5cdFx0XHRcdHRlOiAn4LGm4LGn4LGo4LGp4LGq4LGr4LGs4LGt4LGu4LGvJyxcclxuXHRcdFx0XHR0aDogJ+C5kOC5keC5kuC5k+C5lOC5leC5luC5l+C5mOC5mScsIC8vIEZJWE1FIHVzZSBpc28gNjM5IGNvZGVzXHJcblx0XHRcdFx0Ym86ICfgvKDgvKHgvKLgvKPgvKTgvKXgvKbgvKfgvKjgvKknIC8vIEZJWE1FIHVzZSBpc28gNjM5IGNvZGVzXHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRpZiAoICF0YWJsZXNbIGxhbmd1YWdlIF0gKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGFibGVzWyBsYW5ndWFnZSBdLnNwbGl0KCAnJyApO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCQuZXh0ZW5kKCAkLmkxOG4ubGFuZ3VhZ2VzLCB7XHJcblx0XHQnZGVmYXVsdCc6IGxhbmd1YWdlXHJcblx0fSApO1xyXG59KCBqUXVlcnkgKSApO1xyXG4iLCIvKiFcclxuICogalF1ZXJ5IEludGVybmF0aW9uYWxpemF0aW9uIGxpYnJhcnkgLSBNZXNzYWdlIFN0b3JlXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoQykgMjAxMiBTYW50aG9zaCBUaG90dGluZ2FsXHJcbiAqXHJcbiAqIGpxdWVyeS5pMThuIGlzIGR1YWwgbGljZW5zZWQgR1BMdjIgb3IgbGF0ZXIgYW5kIE1JVC4gWW91IGRvbid0IGhhdmUgdG8gZG8gYW55dGhpbmcgc3BlY2lhbCB0b1xyXG4gKiBjaG9vc2Ugb25lIGxpY2Vuc2Ugb3IgdGhlIG90aGVyIGFuZCB5b3UgZG9uJ3QgaGF2ZSB0byBub3RpZnkgYW55b25lIHdoaWNoIGxpY2Vuc2UgeW91IGFyZSB1c2luZy5cclxuICogWW91IGFyZSBmcmVlIHRvIHVzZSBVbml2ZXJzYWxMYW5ndWFnZVNlbGVjdG9yIGluIGNvbW1lcmNpYWwgcHJvamVjdHMgYXMgbG9uZyBhcyB0aGUgY29weXJpZ2h0XHJcbiAqIGhlYWRlciBpcyBsZWZ0IGludGFjdC4gU2VlIGZpbGVzIEdQTC1MSUNFTlNFIGFuZCBNSVQtTElDRU5TRSBmb3IgZGV0YWlscy5cclxuICpcclxuICogQGxpY2VuY2UgR05VIEdlbmVyYWwgUHVibGljIExpY2VuY2UgMi4wIG9yIGxhdGVyXHJcbiAqIEBsaWNlbmNlIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuKCBmdW5jdGlvbiAoICQgKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cclxuXHR2YXIgTWVzc2FnZVN0b3JlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5tZXNzYWdlcyA9IHt9O1xyXG5cdFx0dGhpcy5zb3VyY2VzID0ge307XHJcblx0fTtcclxuXHJcblx0ZnVuY3Rpb24ganNvbk1lc3NhZ2VMb2FkZXIoIHVybCApIHtcclxuXHRcdHZhciBkZWZlcnJlZCA9ICQuRGVmZXJyZWQoKTtcclxuXHJcblx0XHQkLmdldEpTT04oIHVybCApXHJcblx0XHRcdC5kb25lKCBkZWZlcnJlZC5yZXNvbHZlIClcclxuXHRcdFx0LmZhaWwoIGZ1bmN0aW9uICgganF4aHIsIHNldHRpbmdzLCBleGNlcHRpb24gKSB7XHJcblx0XHRcdFx0JC5pMThuLmxvZyggJ0Vycm9yIGluIGxvYWRpbmcgbWVzc2FnZXMgZnJvbSAnICsgdXJsICsgJyBFeGNlcHRpb246ICcgKyBleGNlcHRpb24gKTtcclxuXHRcdFx0XHQvLyBJZ25vcmUgNDA0IGV4Y2VwdGlvbiwgYmVjYXVzZSB3ZSBhcmUgaGFuZGxpbmcgZmFsbGFiYWNrcyBleHBsaWNpdGx5XHJcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xyXG5cdFx0XHR9ICk7XHJcblxyXG5cdFx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2lraW1lZGlhL2pxdWVyeS5pMThuL3dpa2kvU3BlY2lmaWNhdGlvbiN3aWtpLU1lc3NhZ2VfRmlsZV9Mb2FkaW5nXHJcblx0ICovXHJcblx0TWVzc2FnZVN0b3JlLnByb3RvdHlwZSA9IHtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdlbmVyYWwgbWVzc2FnZSBsb2FkaW5nIEFQSSBUaGlzIGNhbiB0YWtlIGEgVVJMIHN0cmluZyBmb3JcclxuXHRcdCAqIHRoZSBqc29uIGZvcm1hdHRlZCBtZXNzYWdlcy5cclxuXHRcdCAqIDxjb2RlPmxvYWQoJ3BhdGgvdG8vYWxsX2xvY2FsaXphdGlvbnMuanNvbicpOzwvY29kZT5cclxuXHRcdCAqXHJcblx0XHQgKiBUaGlzIGNhbiBhbHNvIGxvYWQgYSBsb2NhbGl6YXRpb24gZmlsZSBmb3IgYSBsb2NhbGUgPGNvZGU+XHJcblx0XHQgKiBsb2FkKCAncGF0aC90by9kZS1tZXNzYWdlcy5qc29uJywgJ2RlJyApO1xyXG5cdFx0ICogPC9jb2RlPlxyXG5cdFx0ICogQSBkYXRhIG9iamVjdCBjb250YWluaW5nIG1lc3NhZ2Uga2V5LSBtZXNzYWdlIHRyYW5zbGF0aW9uIG1hcHBpbmdzXHJcblx0XHQgKiBjYW4gYWxzbyBiZSBwYXNzZWQgRWc6XHJcblx0XHQgKiA8Y29kZT5cclxuXHRcdCAqIGxvYWQoIHsgJ2hlbGxvJyA6ICdIZWxsbycgfSwgb3B0aW9uYWxMb2NhbGUgKTtcclxuXHRcdCAqIDwvY29kZT4gSWYgdGhlIGRhdGEgYXJndW1lbnQgaXNcclxuXHRcdCAqIG51bGwvdW5kZWZpbmVkL2ZhbHNlLFxyXG5cdFx0ICogYWxsIGNhY2hlZCBtZXNzYWdlcyBmb3IgdGhlIGkxOG4gaW5zdGFuY2Ugd2lsbCBnZXQgcmVzZXQuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8T2JqZWN0fSBzb3VyY2VcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGUgTGFuZ3VhZ2UgdGFnXHJcblx0XHQgKiBAcmV0dXJuIHtqUXVlcnkuUHJvbWlzZX1cclxuXHRcdCAqL1xyXG5cdFx0bG9hZDogZnVuY3Rpb24gKCBzb3VyY2UsIGxvY2FsZSApIHtcclxuXHRcdFx0dmFyIGtleSA9IG51bGwsXHJcblx0XHRcdFx0ZGVmZXJyZWQgPSBudWxsLFxyXG5cdFx0XHRcdGRlZmVycmVkcyA9IFtdLFxyXG5cdFx0XHRcdG1lc3NhZ2VTdG9yZSA9IHRoaXM7XHJcblxyXG5cdFx0XHRpZiAoIHR5cGVvZiBzb3VyY2UgPT09ICdzdHJpbmcnICkge1xyXG5cdFx0XHRcdC8vIFRoaXMgaXMgYSBVUkwgdG8gdGhlIG1lc3NhZ2VzIGZpbGUuXHJcblx0XHRcdFx0JC5pMThuLmxvZyggJ0xvYWRpbmcgbWVzc2FnZXMgZnJvbTogJyArIHNvdXJjZSApO1xyXG5cdFx0XHRcdGRlZmVycmVkID0ganNvbk1lc3NhZ2VMb2FkZXIoIHNvdXJjZSApXHJcblx0XHRcdFx0XHQuZG9uZSggZnVuY3Rpb24gKCBsb2NhbGl6YXRpb24gKSB7XHJcblx0XHRcdFx0XHRcdG1lc3NhZ2VTdG9yZS5zZXQoIGxvY2FsZSwgbG9jYWxpemF0aW9uICk7XHJcblx0XHRcdFx0XHR9ICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICggbG9jYWxlICkge1xyXG5cdFx0XHRcdC8vIHNvdXJjZSBpcyBhbiBrZXktdmFsdWUgcGFpciBvZiBtZXNzYWdlcyBmb3IgZ2l2ZW4gbG9jYWxlXHJcblx0XHRcdFx0bWVzc2FnZVN0b3JlLnNldCggbG9jYWxlLCBzb3VyY2UgKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuICQuRGVmZXJyZWQoKS5yZXNvbHZlKCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gc291cmNlIGlzIGEga2V5LXZhbHVlIHBhaXIgb2YgbG9jYWxlcyBhbmQgdGhlaXIgc291cmNlXHJcblx0XHRcdFx0Zm9yICgga2V5IGluIHNvdXJjZSApIHtcclxuXHRcdFx0XHRcdGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBzb3VyY2UsIGtleSApICkge1xyXG5cdFx0XHRcdFx0XHRsb2NhbGUgPSBrZXk7XHJcblx0XHRcdFx0XHRcdC8vIE5vIHtsb2NhbGV9IGdpdmVuLCBhc3N1bWUgZGF0YSBpcyBhIGdyb3VwIG9mIGxhbmd1YWdlcyxcclxuXHRcdFx0XHRcdFx0Ly8gY2FsbCB0aGlzIGZ1bmN0aW9uIGFnYWluIGZvciBlYWNoIGxhbmd1YWdlLlxyXG5cdFx0XHRcdFx0XHRkZWZlcnJlZHMucHVzaCggbWVzc2FnZVN0b3JlLmxvYWQoIHNvdXJjZVsga2V5IF0sIGxvY2FsZSApICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiAkLndoZW4uYXBwbHkoICQsIGRlZmVycmVkcyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNldCBtZXNzYWdlcyB0byB0aGUgZ2l2ZW4gbG9jYWxlLlxyXG5cdFx0ICogSWYgbG9jYWxlIGV4aXN0cywgYWRkIG1lc3NhZ2VzIHRvIHRoZSBsb2NhbGUuXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsZVxyXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VzXHJcblx0XHQgKi9cclxuXHRcdHNldDogZnVuY3Rpb24gKCBsb2NhbGUsIG1lc3NhZ2VzICkge1xyXG5cdFx0XHRpZiAoICF0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSApIHtcclxuXHRcdFx0XHR0aGlzLm1lc3NhZ2VzWyBsb2NhbGUgXSA9IG1lc3NhZ2VzO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdID0gJC5leHRlbmQoIHRoaXMubWVzc2FnZXNbIGxvY2FsZSBdLCBtZXNzYWdlcyApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcclxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlS2V5XHJcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdFx0ICovXHJcblx0XHRnZXQ6IGZ1bmN0aW9uICggbG9jYWxlLCBtZXNzYWdlS2V5ICkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF0gJiYgdGhpcy5tZXNzYWdlc1sgbG9jYWxlIF1bIG1lc3NhZ2VLZXkgXTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQkLmV4dGVuZCggJC5pMThuLm1lc3NhZ2VTdG9yZSwgbmV3IE1lc3NhZ2VTdG9yZSgpICk7XHJcbn0oIGpRdWVyeSApICk7XHJcbiIsIi8qIVxyXG4gKiBqUXVlcnkgSW50ZXJuYXRpb25hbGl6YXRpb24gbGlicmFyeVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTEtMjAxMyBTYW50aG9zaCBUaG90dGluZ2FsLCBOZWlsIEthbmRhbGdhb25rYXJcclxuICpcclxuICoganF1ZXJ5LmkxOG4gaXMgZHVhbCBsaWNlbnNlZCBHUEx2MiBvciBsYXRlciBhbmQgTUlULiBZb3UgZG9uJ3QgaGF2ZSB0byBkb1xyXG4gKiBhbnl0aGluZyBzcGVjaWFsIHRvIGNob29zZSBvbmUgbGljZW5zZSBvciB0aGUgb3RoZXIgYW5kIHlvdSBkb24ndCBoYXZlIHRvXHJcbiAqIG5vdGlmeSBhbnlvbmUgd2hpY2ggbGljZW5zZSB5b3UgYXJlIHVzaW5nLiBZb3UgYXJlIGZyZWUgdG8gdXNlXHJcbiAqIFVuaXZlcnNhbExhbmd1YWdlU2VsZWN0b3IgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyBhcyBsb25nIGFzIHRoZSBjb3B5cmlnaHRcclxuICogaGVhZGVyIGlzIGxlZnQgaW50YWN0LiBTZWUgZmlsZXMgR1BMLUxJQ0VOU0UgYW5kIE1JVC1MSUNFTlNFIGZvciBkZXRhaWxzLlxyXG4gKlxyXG4gKiBAbGljZW5jZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5jZSAyLjAgb3IgbGF0ZXJcclxuICogQGxpY2VuY2UgTUlUIExpY2Vuc2VcclxuICovXHJcblxyXG4oIGZ1bmN0aW9uICggJCApIHtcclxuXHQndXNlIHN0cmljdCc7XHJcblxyXG5cdHZhciBNZXNzYWdlUGFyc2VyID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0dGhpcy5vcHRpb25zID0gJC5leHRlbmQoIHt9LCAkLmkxOG4ucGFyc2VyLmRlZmF1bHRzLCBvcHRpb25zICk7XHJcblx0XHR0aGlzLmxhbmd1YWdlID0gJC5pMThuLmxhbmd1YWdlc1sgU3RyaW5nLmxvY2FsZSBdIHx8ICQuaTE4bi5sYW5ndWFnZXNbICdkZWZhdWx0JyBdO1xyXG5cdFx0dGhpcy5lbWl0dGVyID0gJC5pMThuLnBhcnNlci5lbWl0dGVyO1xyXG5cdH07XHJcblxyXG5cdE1lc3NhZ2VQYXJzZXIucHJvdG90eXBlID0ge1xyXG5cclxuXHRcdGNvbnN0cnVjdG9yOiBNZXNzYWdlUGFyc2VyLFxyXG5cclxuXHRcdHNpbXBsZVBhcnNlOiBmdW5jdGlvbiAoIG1lc3NhZ2UsIHBhcmFtZXRlcnMgKSB7XHJcblx0XHRcdHJldHVybiBtZXNzYWdlLnJlcGxhY2UoIC9cXCQoXFxkKykvZywgZnVuY3Rpb24gKCBzdHIsIG1hdGNoICkge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IHBhcnNlSW50KCBtYXRjaCwgMTAgKSAtIDE7XHJcblxyXG5cdFx0XHRcdHJldHVybiBwYXJhbWV0ZXJzWyBpbmRleCBdICE9PSB1bmRlZmluZWQgPyBwYXJhbWV0ZXJzWyBpbmRleCBdIDogJyQnICsgbWF0Y2g7XHJcblx0XHRcdH0gKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cGFyc2U6IGZ1bmN0aW9uICggbWVzc2FnZSwgcmVwbGFjZW1lbnRzICkge1xyXG5cdFx0XHRpZiAoIG1lc3NhZ2UuaW5kZXhPZiggJ3t7JyApIDwgMCApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zaW1wbGVQYXJzZSggbWVzc2FnZSwgcmVwbGFjZW1lbnRzICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMuZW1pdHRlci5sYW5ndWFnZSA9ICQuaTE4bi5sYW5ndWFnZXNbICQuaTE4bigpLmxvY2FsZSBdIHx8XHJcblx0XHRcdFx0JC5pMThuLmxhbmd1YWdlc1sgJ2RlZmF1bHQnIF07XHJcblxyXG5cdFx0XHRyZXR1cm4gdGhpcy5lbWl0dGVyLmVtaXQoIHRoaXMuYXN0KCBtZXNzYWdlICksIHJlcGxhY2VtZW50cyApO1xyXG5cdFx0fSxcclxuXHJcblx0XHRhc3Q6IGZ1bmN0aW9uICggbWVzc2FnZSApIHtcclxuXHRcdFx0dmFyIHBpcGUsIGNvbG9uLCBiYWNrc2xhc2gsIGFueUNoYXJhY3RlciwgZG9sbGFyLCBkaWdpdHMsIHJlZ3VsYXJMaXRlcmFsLFxyXG5cdFx0XHRcdHJlZ3VsYXJMaXRlcmFsV2l0aG91dEJhciwgcmVndWxhckxpdGVyYWxXaXRob3V0U3BhY2UsIGVzY2FwZWRPckxpdGVyYWxXaXRob3V0QmFyLFxyXG5cdFx0XHRcdGVzY2FwZWRPclJlZ3VsYXJMaXRlcmFsLCB0ZW1wbGF0ZUNvbnRlbnRzLCB0ZW1wbGF0ZU5hbWUsIG9wZW5UZW1wbGF0ZSxcclxuXHRcdFx0XHRjbG9zZVRlbXBsYXRlLCBleHByZXNzaW9uLCBwYXJhbUV4cHJlc3Npb24sIHJlc3VsdCxcclxuXHRcdFx0XHRwb3MgPSAwO1xyXG5cclxuXHRcdFx0Ly8gVHJ5IHBhcnNlcnMgdW50aWwgb25lIHdvcmtzLCBpZiBub25lIHdvcmsgcmV0dXJuIG51bGxcclxuXHRcdFx0ZnVuY3Rpb24gY2hvaWNlKCBwYXJzZXJTeW50YXggKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHZhciBpLCByZXN1bHQ7XHJcblxyXG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwYXJzZXJTeW50YXgubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHBhcnNlclN5bnRheFsgaSBdKCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoIHJlc3VsdCAhPT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Ly8gVHJ5IHNldmVyYWwgcGFyc2VyU3ludGF4LWVzIGluIGEgcm93LlxyXG5cdFx0XHQvLyBBbGwgbXVzdCBzdWNjZWVkOyBvdGhlcndpc2UsIHJldHVybiBudWxsLlxyXG5cdFx0XHQvLyBUaGlzIGlzIHRoZSBvbmx5IGVhZ2VyIG9uZS5cclxuXHRcdFx0ZnVuY3Rpb24gc2VxdWVuY2UoIHBhcnNlclN5bnRheCApIHtcclxuXHRcdFx0XHR2YXIgaSwgcmVzLFxyXG5cdFx0XHRcdFx0b3JpZ2luYWxQb3MgPSBwb3MsXHJcblx0XHRcdFx0XHRyZXN1bHQgPSBbXTtcclxuXHJcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBwYXJzZXJTeW50YXgubGVuZ3RoOyBpKysgKSB7XHJcblx0XHRcdFx0XHRyZXMgPSBwYXJzZXJTeW50YXhbIGkgXSgpO1xyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzID09PSBudWxsICkge1xyXG5cdFx0XHRcdFx0XHRwb3MgPSBvcmlnaW5hbFBvcztcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKCByZXMgKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIFJ1biB0aGUgc2FtZSBwYXJzZXIgb3ZlciBhbmQgb3ZlciB1bnRpbCBpdCBmYWlscy5cclxuXHRcdFx0Ly8gTXVzdCBzdWNjZWVkIGEgbWluaW11bSBvZiBuIHRpbWVzOyBvdGhlcndpc2UsIHJldHVybiBudWxsLlxyXG5cdFx0XHRmdW5jdGlvbiBuT3JNb3JlKCBuLCBwICkge1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgb3JpZ2luYWxQb3MgPSBwb3MsXHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IFtdLFxyXG5cdFx0XHRcdFx0XHRwYXJzZWQgPSBwKCk7XHJcblxyXG5cdFx0XHRcdFx0d2hpbGUgKCBwYXJzZWQgIT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdC5wdXNoKCBwYXJzZWQgKTtcclxuXHRcdFx0XHRcdFx0cGFyc2VkID0gcCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmICggcmVzdWx0Lmxlbmd0aCA8IG4gKSB7XHJcblx0XHRcdFx0XHRcdHBvcyA9IG9yaWdpbmFsUG9zO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBIZWxwZXJzIC0tIGp1c3QgbWFrZSBwYXJzZXJTeW50YXggb3V0IG9mIHNpbXBsZXIgSlMgYnVpbHRpbiB0eXBlc1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gbWFrZVN0cmluZ1BhcnNlciggcyApIHtcclxuXHRcdFx0XHR2YXIgbGVuID0gcy5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcblx0XHRcdFx0XHRpZiAoIG1lc3NhZ2Uuc2xpY2UoIHBvcywgcG9zICsgbGVuICkgPT09IHMgKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHM7XHJcblx0XHRcdFx0XHRcdHBvcyArPSBsZW47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBtYWtlUmVnZXhQYXJzZXIoIHJlZ2V4ICkge1xyXG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHR2YXIgbWF0Y2hlcyA9IG1lc3NhZ2Uuc2xpY2UoIHBvcyApLm1hdGNoKCByZWdleCApO1xyXG5cclxuXHRcdFx0XHRcdGlmICggbWF0Y2hlcyA9PT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0cG9zICs9IG1hdGNoZXNbIDAgXS5sZW5ndGg7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXNbIDAgXTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwaXBlID0gbWFrZVN0cmluZ1BhcnNlciggJ3wnICk7XHJcblx0XHRcdGNvbG9uID0gbWFrZVN0cmluZ1BhcnNlciggJzonICk7XHJcblx0XHRcdGJhY2tzbGFzaCA9IG1ha2VTdHJpbmdQYXJzZXIoICdcXFxcJyApO1xyXG5cdFx0XHRhbnlDaGFyYWN0ZXIgPSBtYWtlUmVnZXhQYXJzZXIoIC9eLi8gKTtcclxuXHRcdFx0ZG9sbGFyID0gbWFrZVN0cmluZ1BhcnNlciggJyQnICk7XHJcblx0XHRcdGRpZ2l0cyA9IG1ha2VSZWdleFBhcnNlciggL15cXGQrLyApO1xyXG5cdFx0XHRyZWd1bGFyTGl0ZXJhbCA9IG1ha2VSZWdleFBhcnNlciggL15bXnt9W1xcXSRcXFxcXS8gKTtcclxuXHRcdFx0cmVndWxhckxpdGVyYWxXaXRob3V0QmFyID0gbWFrZVJlZ2V4UGFyc2VyKCAvXltee31bXFxdJFxcXFx8XS8gKTtcclxuXHRcdFx0cmVndWxhckxpdGVyYWxXaXRob3V0U3BhY2UgPSBtYWtlUmVnZXhQYXJzZXIoIC9eW157fVtcXF0kXFxzXS8gKTtcclxuXHJcblx0XHRcdC8vIFRoZXJlIGlzIGEgZ2VuZXJhbCBwYXR0ZXJuOlxyXG5cdFx0XHQvLyBwYXJzZSBhIHRoaW5nO1xyXG5cdFx0XHQvLyBpZiBpdCB3b3JrZWQsIGFwcGx5IHRyYW5zZm9ybSxcclxuXHRcdFx0Ly8gb3RoZXJ3aXNlIHJldHVybiBudWxsLlxyXG5cdFx0XHQvLyBCdXQgdXNpbmcgdGhpcyBhcyBhIGNvbWJpbmF0b3Igc2VlbXMgdG8gY2F1c2UgcHJvYmxlbXNcclxuXHRcdFx0Ly8gd2hlbiBjb21iaW5lZCB3aXRoIG5Pck1vcmUoKS5cclxuXHRcdFx0Ly8gTWF5IGJlIHNvbWUgc2NvcGluZyBpc3N1ZS5cclxuXHRcdFx0ZnVuY3Rpb24gdHJhbnNmb3JtKCBwLCBmbiApIHtcclxuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHAoKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IGZuKCByZXN1bHQgKTtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyBVc2VkIHRvIGRlZmluZSBcImxpdGVyYWxzXCIgd2l0aGluIHRlbXBsYXRlIHBhcmFtZXRlcnMuIFRoZSBwaXBlXHJcblx0XHRcdC8vIGNoYXJhY3RlciBpcyB0aGUgcGFyYW1ldGVyIGRlbGltZXRlciwgc28gYnkgZGVmYXVsdFxyXG5cdFx0XHQvLyBpdCBpcyBub3QgYSBsaXRlcmFsIGluIHRoZSBwYXJhbWV0ZXJcclxuXHRcdFx0ZnVuY3Rpb24gbGl0ZXJhbFdpdGhvdXRCYXIoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IG5Pck1vcmUoIDEsIGVzY2FwZWRPckxpdGVyYWxXaXRob3V0QmFyICkoKTtcclxuXHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IG51bGwgOiByZXN1bHQuam9pbiggJycgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gbGl0ZXJhbCgpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbk9yTW9yZSggMSwgZXNjYXBlZE9yUmVndWxhckxpdGVyYWwgKSgpO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IHJlc3VsdC5qb2luKCAnJyApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmdW5jdGlvbiBlc2NhcGVkTGl0ZXJhbCgpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gc2VxdWVuY2UoIFsgYmFja3NsYXNoLCBhbnlDaGFyYWN0ZXIgXSApO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0ID09PSBudWxsID8gbnVsbCA6IHJlc3VsdFsgMSBdO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRjaG9pY2UoIFsgZXNjYXBlZExpdGVyYWwsIHJlZ3VsYXJMaXRlcmFsV2l0aG91dFNwYWNlIF0gKTtcclxuXHRcdFx0ZXNjYXBlZE9yTGl0ZXJhbFdpdGhvdXRCYXIgPSBjaG9pY2UoIFsgZXNjYXBlZExpdGVyYWwsIHJlZ3VsYXJMaXRlcmFsV2l0aG91dEJhciBdICk7XHJcblx0XHRcdGVzY2FwZWRPclJlZ3VsYXJMaXRlcmFsID0gY2hvaWNlKCBbIGVzY2FwZWRMaXRlcmFsLCByZWd1bGFyTGl0ZXJhbCBdICk7XHJcblxyXG5cdFx0XHRmdW5jdGlvbiByZXBsYWNlbWVudCgpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gc2VxdWVuY2UoIFsgZG9sbGFyLCBkaWdpdHMgXSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFsgJ1JFUExBQ0UnLCBwYXJzZUludCggcmVzdWx0WyAxIF0sIDEwICkgLSAxIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRlbXBsYXRlTmFtZSA9IHRyYW5zZm9ybShcclxuXHRcdFx0XHQvLyBzZWUgJHdnTGVnYWxUaXRsZUNoYXJzXHJcblx0XHRcdFx0Ly8gbm90IGFsbG93aW5nIDogZHVlIHRvIHRoZSBuZWVkIHRvIGNhdGNoIFwiUExVUkFMOiQxXCJcclxuXHRcdFx0XHRtYWtlUmVnZXhQYXJzZXIoIC9eWyAhXCIkJicoKSosLi8wLTk7PT9AQS1aXl9gYS16flxceDgwLVxceEZGKy1dKy8gKSxcclxuXHJcblx0XHRcdFx0ZnVuY3Rpb24gKCByZXN1bHQgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0LnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdGVtcGxhdGVQYXJhbSgpIHtcclxuXHRcdFx0XHR2YXIgZXhwcixcclxuXHRcdFx0XHRcdHJlc3VsdCA9IHNlcXVlbmNlKCBbIHBpcGUsIG5Pck1vcmUoIDAsIHBhcmFtRXhwcmVzc2lvbiApIF0gKTtcclxuXHJcblx0XHRcdFx0aWYgKCByZXN1bHQgPT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGV4cHIgPSByZXN1bHRbIDEgXTtcclxuXHJcblx0XHRcdFx0Ly8gdXNlIGEgXCJDT05DQVRcIiBvcGVyYXRvciBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgbm9kZXMsXHJcblx0XHRcdFx0Ly8gb3RoZXJ3aXNlIHJldHVybiB0aGUgZmlyc3Qgbm9kZSwgcmF3LlxyXG5cdFx0XHRcdHJldHVybiBleHByLmxlbmd0aCA+IDEgPyBbICdDT05DQVQnIF0uY29uY2F0KCBleHByICkgOiBleHByWyAwIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGZ1bmN0aW9uIHRlbXBsYXRlV2l0aFJlcGxhY2VtZW50KCkge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBzZXF1ZW5jZSggWyB0ZW1wbGF0ZU5hbWUsIGNvbG9uLCByZXBsYWNlbWVudCBdICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogWyByZXN1bHRbIDAgXSwgcmVzdWx0WyAyIF0gXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdGVtcGxhdGVXaXRoT3V0UmVwbGFjZW1lbnQoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIHRlbXBsYXRlTmFtZSwgY29sb24sIHBhcmFtRXhwcmVzc2lvbiBdICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogWyByZXN1bHRbIDAgXSwgcmVzdWx0WyAyIF0gXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dGVtcGxhdGVDb250ZW50cyA9IGNob2ljZSggW1xyXG5cdFx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHZhciByZXMgPSBzZXF1ZW5jZSggW1xyXG5cdFx0XHRcdFx0XHQvLyB0ZW1wbGF0ZXMgY2FuIGhhdmUgcGxhY2Vob2xkZXJzIGZvciBkeW5hbWljXHJcblx0XHRcdFx0XHRcdC8vIHJlcGxhY2VtZW50IGVnOiB7e1BMVVJBTDokMXxvbmUgY2FyfCQxIGNhcnN9fVxyXG5cdFx0XHRcdFx0XHQvLyBvciBubyBwbGFjZWhvbGRlcnMgZWc6XHJcblx0XHRcdFx0XHRcdC8vIHt7R1JBTU1BUjpnZW5pdGl2ZXx7e1NJVEVOQU1FfX19XHJcblx0XHRcdFx0XHRcdGNob2ljZSggWyB0ZW1wbGF0ZVdpdGhSZXBsYWNlbWVudCwgdGVtcGxhdGVXaXRoT3V0UmVwbGFjZW1lbnQgXSApLFxyXG5cdFx0XHRcdFx0XHRuT3JNb3JlKCAwLCB0ZW1wbGF0ZVBhcmFtIClcclxuXHRcdFx0XHRcdF0gKTtcclxuXHJcblx0XHRcdFx0XHRyZXR1cm4gcmVzID09PSBudWxsID8gbnVsbCA6IHJlc1sgMCBdLmNvbmNhdCggcmVzWyAxIF0gKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdHZhciByZXMgPSBzZXF1ZW5jZSggWyB0ZW1wbGF0ZU5hbWUsIG5Pck1vcmUoIDAsIHRlbXBsYXRlUGFyYW0gKSBdICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCByZXMgPT09IG51bGwgKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHJldHVybiBbIHJlc1sgMCBdIF0uY29uY2F0KCByZXNbIDEgXSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSApO1xyXG5cclxuXHRcdFx0b3BlblRlbXBsYXRlID0gbWFrZVN0cmluZ1BhcnNlciggJ3t7JyApO1xyXG5cdFx0XHRjbG9zZVRlbXBsYXRlID0gbWFrZVN0cmluZ1BhcnNlciggJ319JyApO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gdGVtcGxhdGUoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IHNlcXVlbmNlKCBbIG9wZW5UZW1wbGF0ZSwgdGVtcGxhdGVDb250ZW50cywgY2xvc2VUZW1wbGF0ZSBdICk7XHJcblxyXG5cdFx0XHRcdHJldHVybiByZXN1bHQgPT09IG51bGwgPyBudWxsIDogcmVzdWx0WyAxIF07XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGV4cHJlc3Npb24gPSBjaG9pY2UoIFsgdGVtcGxhdGUsIHJlcGxhY2VtZW50LCBsaXRlcmFsIF0gKTtcclxuXHRcdFx0cGFyYW1FeHByZXNzaW9uID0gY2hvaWNlKCBbIHRlbXBsYXRlLCByZXBsYWNlbWVudCwgbGl0ZXJhbFdpdGhvdXRCYXIgXSApO1xyXG5cclxuXHRcdFx0ZnVuY3Rpb24gc3RhcnQoKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IG5Pck1vcmUoIDAsIGV4cHJlc3Npb24gKSgpO1xyXG5cclxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PT0gbnVsbCApIHtcclxuXHRcdFx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIFsgJ0NPTkNBVCcgXS5jb25jYXQoIHJlc3VsdCApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXN1bHQgPSBzdGFydCgpO1xyXG5cclxuXHRcdFx0LypcclxuXHRcdFx0ICogRm9yIHN1Y2Nlc3MsIHRoZSBwb3MgbXVzdCBoYXZlIGdvdHRlbiB0byB0aGUgZW5kIG9mIHRoZSBpbnB1dFxyXG5cdFx0XHQgKiBhbmQgcmV0dXJuZWQgYSBub24tbnVsbC5cclxuXHRcdFx0ICogbi5iLiBUaGlzIGlzIHBhcnQgb2YgbGFuZ3VhZ2UgaW5mcmFzdHJ1Y3R1cmUsIHNvIHdlIGRvIG5vdCB0aHJvdyBhblxyXG5cdFx0XHQgKiBpbnRlcm5hdGlvbmFsaXphYmxlIG1lc3NhZ2UuXHJcblx0XHRcdCAqL1xyXG5cdFx0XHRpZiAoIHJlc3VsdCA9PT0gbnVsbCB8fCBwb3MgIT09IG1lc3NhZ2UubGVuZ3RoICkge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvciggJ1BhcnNlIGVycm9yIGF0IHBvc2l0aW9uICcgKyBwb3MudG9TdHJpbmcoKSArICcgaW4gaW5wdXQ6ICcgKyBtZXNzYWdlICk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdCQuZXh0ZW5kKCAkLmkxOG4ucGFyc2VyLCBuZXcgTWVzc2FnZVBhcnNlcigpICk7XHJcbn0oIGpRdWVyeSApICk7IiwidmFyIGNvZGVFeGVyY2lzZXM7XHJcbnZhciBwcmVzZW50ZXJDc3NMaW5rO1xyXG52YXIgcHJlc2VudE1vZGVJbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gcHJlc2VudFRvZ2dsZSgpIHtcclxuICAgIGlmICghcHJlc2VudE1vZGVJbml0aWFsaXplZCkge1xyXG4gICAgICAgIHByZXNlbnRNb2RlU2V0dXAoKTtcclxuICAgICAgICBwcmVzZW50TW9kZUluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxldCBib2QgPSAkKFwiYm9keVwiKTtcclxuICAgIGxldCBwcmVzZW50Q2xhc3MgPSBcInByZXNlbnRcIjtcclxuICAgIGxldCBmdWxsSGVpZ2h0Q2xhc3MgPSBcImZ1bGwtaGVpZ2h0XCI7XHJcbiAgICBsZXQgYm90dG9tQ2xhc3MgPSBcImJvdHRvbVwiO1xyXG4gICAgaWYgKGJvZC5oYXNDbGFzcyhwcmVzZW50Q2xhc3MpKSB7XHJcbiAgICAgICAgJChcIi5zZWN0aW9uICpcIilcclxuICAgICAgICAgICAgLm5vdChcclxuICAgICAgICAgICAgICAgIFwiaDEsIC5wcmVzZW50YXRpb24tdGl0bGUsIC5idG4tcHJlc2VudGVyLCAucnVuZXN0b25lLCAucnVuZXN0b25lICosIC5zZWN0aW9uLCAucHJlLCBjb2RlXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7IC8vc2hvdyBldmVyeXRoaW5nXHJcbiAgICAgICAgJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGJvZC5yZW1vdmVDbGFzcyhwcmVzZW50Q2xhc3MpO1xyXG4gICAgICAgICQoXCIuXCIgKyBmdWxsSGVpZ2h0Q2xhc3MpLnJlbW92ZUNsYXNzKGZ1bGxIZWlnaHRDbGFzcyk7XHJcbiAgICAgICAgJChcIi5cIiArIGJvdHRvbUNsYXNzKS5yZW1vdmVDbGFzcyhib3R0b21DbGFzcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmVzZW50TW9kZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgY29kZUV4ZXJjaXNlcy5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICBwcmVzZW50ZXJDc3NMaW5rLmRpc2FibGVkID0gdHJ1ZTsgLy8gZGlzYWJsZSBwcmVzZW50X21vZGUuY3NzXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoXCIuc2VjdGlvbiAqXCIpXHJcbiAgICAgICAgICAgIC5ub3QoXHJcbiAgICAgICAgICAgICAgICBcImgxLCAucHJlc2VudGF0aW9uLXRpdGxlLCAuYnRuLXByZXNlbnRlciwgLnJ1bmVzdG9uZSwgLnJ1bmVzdG9uZSAqLCAuc2VjdGlvbiwgLnByZSwgY29kZVwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwiaGlkZGVuXCIpOyAvLyBoaWRlIGV4dHJhbmVvdXMgc3R1ZmZcclxuICAgICAgICAkKFwiI2NvbXBsZXRpb25CdXR0b25cIikuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgYm9kLmFkZENsYXNzKHByZXNlbnRDbGFzcyk7XHJcbiAgICAgICAgYm9kLmFkZENsYXNzKGZ1bGxIZWlnaHRDbGFzcyk7XHJcbiAgICAgICAgJChcImh0bWxcIikuYWRkQ2xhc3MoZnVsbEhlaWdodENsYXNzKTtcclxuICAgICAgICAkKFwiLnNlY3Rpb24gLnJ1bmVzdG9uZVwiKS5hZGRDbGFzcyhmdWxsSGVpZ2h0Q2xhc3MpO1xyXG4gICAgICAgICQoXCIuYWMtY2FwdGlvblwiKS5hZGRDbGFzcyhib3R0b21DbGFzcyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcmVzZW50TW9kZVwiLCBwcmVzZW50Q2xhc3MpO1xyXG4gICAgICAgIGxvYWRQcmVzZW50ZXJDc3MoKTsgLy8gcHJlc2VudF9tb2RlLmNzcyBzaG91bGQgb25seSBhcHBseSB3aGVuIGluIHByZXNlbnRlciBtb2RlLlxyXG4gICAgICAgIGFjdGl2YXRlRXhlcmNpc2UoKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByZXNlbnRlckNzcygpIHtcclxuICAgIHByZXNlbnRlckNzc0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgIHByZXNlbnRlckNzc0xpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgIHByZXNlbnRlckNzc0xpbmsuaHJlZiA9IFwiLi4vX3N0YXRpYy9wcmVzZW50ZXJfbW9kZS5jc3NcIjtcclxuICAgIHByZXNlbnRlckNzc0xpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQocHJlc2VudGVyQ3NzTGluayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByZXNlbnRNb2RlU2V0dXAoKSB7XHJcbiAgICAvLyBtb3ZlZCB0aGlzIG91dCBvZiBjb25maWd1cmVcclxuICAgIGxldCBkYXRhQ29tcG9uZW50ID0gJChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKTtcclxuXHJcbiAgICAvLyB0aGlzIHN0aWxsIGxlYXZlcyBzb21lIHRoaW5ncyBzZW1pLW1lc3NlZCB1cCB3aGVuIHlvdSBleGl0IHByZXNlbnRlciBtb2RlLlxyXG4gICAgLy8gYnV0IGluc3RydWN0b3JzIHdpbGwgcHJvYmFibHkganVzdCBsZWFybiB0byByZWZyZXNoIHRoZSBwYWdlLlxyXG4gICAgZGF0YUNvbXBvbmVudC5hZGRDbGFzcyhcInJ1bmVzdG9uZVwiKTtcclxuICAgIGRhdGFDb21wb25lbnQucGFyZW50KCkuY2xvc2VzdChcImRpdlwiKS5ub3QoXCIuc2VjdGlvblwiKS5hZGRDbGFzcyhcInJ1bmVzdG9uZVwiKTtcclxuICAgIGRhdGFDb21wb25lbnQucGFyZW50KCkuY2xvc2VzdChcImRpdlwiKS5jc3MoXCJtYXgtd2lkdGhcIiwgXCJub25lXCIpO1xyXG5cclxuICAgIGRhdGFDb21wb25lbnQuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICBsZXQgbWUgPSAkKHRoaXMpO1xyXG4gICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgLmZpbmQoXCIuYWNfY29kZV9kaXYsIC5hY19vdXRwdXRcIilcclxuICAgICAgICAgICAgLndyYXBBbGwoXCI8ZGl2IGNsYXNzPSdhYy1ibG9jaycgc3R5bGU9J3dpZHRoOiAxMDAlOyc+PC9kaXY+XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29kZWxlbnNMaXN0ZW5lcig1MDApO1xyXG4gICAgJChcIi5zZWN0aW9uIGltZ1wiKS53cmFwKCc8ZGl2IGNsYXNzPVwicnVuZXN0b25lXCI+Jyk7XHJcbiAgICBjb2RlRXhlcmNpc2VzID0gJChcIi5ydW5lc3RvbmVcIikubm90KFwiLnJ1bmVzdG9uZSAucnVuZXN0b25lXCIpO1xyXG4gICAgLy8gY29kZUV4ZXJjaXNlcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKFwiaDFcIikuYmVmb3JlKFxyXG4gICAgICAgIFwiPGRpdiBjbGFzcz0ncHJlc2VudGF0aW9uLXRpdGxlJz4gXFxcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPSdwcmV2LWV4ZXJjaXNlIGJ0bi1wcmVzZW50ZXIgYnRuLWdyZXktb3V0bGluZScgb25jbGljaz0ncHJldkV4ZXJjaXNlKCknPkJhY2s8L2J1dHRvbj4gXFxcclxuICAgICAgICA8YnV0dG9uIGNsYXNzPSduZXh0LWV4ZXJjaXNlIGJ0bi1wcmVzZW50ZXIgYnRuLWdyZXktc29saWQnIG9uY2xpY2s9J25leHRFeGVyY2lzZSgpJz5OZXh0PC9idXR0b24+IFxcXHJcbiAgICAgIDwvZGl2PlwiXHJcbiAgICApO1xyXG59XHJcbmZ1bmN0aW9uIGdldEFjdGl2ZUV4ZXJjaXNlKCkge1xyXG4gICAgcmV0dXJuIChhY3RpdmUgPSBjb2RlRXhlcmNpc2VzLmZpbHRlcihcIi5hY3RpdmVcIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhY3RpdmF0ZUV4ZXJjaXNlKGluZGV4KSB7XHJcbiAgICBpZiAodHlwZW9mIGluZGV4ID09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpbmRleCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGFjdGl2ZSA9IGdldEFjdGl2ZUV4ZXJjaXNlKCk7XHJcblxyXG4gICAgaWYgKGNvZGVFeGVyY2lzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgYWN0aXZlLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGFjdGl2ZSA9ICQoY29kZUV4ZXJjaXNlc1tpbmRleF0pLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIGFjdGl2ZS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcclxuICAgICAgICBjb2RlRXhlcmNpc2VzLm5vdChjb2RlRXhlcmNpc2VzLmZpbHRlcihcIi5hY3RpdmVcIikpLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0RXhlcmNpc2UoKSB7XHJcbiAgICBsZXQgYWN0aXZlID0gZ2V0QWN0aXZlRXhlcmNpc2UoKTtcclxuICAgIGxldCBuZXh0SW5kZXggPSBjb2RlRXhlcmNpc2VzLmluZGV4KGFjdGl2ZSkgKyAxO1xyXG4gICAgaWYgKG5leHRJbmRleCA8IGNvZGVFeGVyY2lzZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgYWN0aXZhdGVFeGVyY2lzZShuZXh0SW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcmV2RXhlcmNpc2UoKSB7XHJcbiAgICBsZXQgYWN0aXZlID0gZ2V0QWN0aXZlRXhlcmNpc2UoKTtcclxuICAgIGxldCBwcmV2SW5kZXggPSBjb2RlRXhlcmNpc2VzLmluZGV4KGFjdGl2ZSkgLSAxO1xyXG4gICAgaWYgKHByZXZJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgYWN0aXZhdGVFeGVyY2lzZShwcmV2SW5kZXgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmUoKSB7XHJcbiAgICBsZXQgcmlnaHROYXYgPSAkKFwiLm5hdmJhci1yaWdodFwiKTtcclxuICAgIHJpZ2h0TmF2LnByZXBlbmQoXHJcbiAgICAgICAgXCI8bGkgY2xhc3M9J2Ryb3Bkb3duIHZpZXctdG9nZ2xlJz4gXFxcclxuICAgICAgPGxhYmVsPlZpZXc6IFxcXHJcbiAgICAgICAgPHNlbGVjdCBjbGFzcz0nbW9kZS1zZWxlY3QnPiBcXFxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0ndGV4dCc+VGV4dGJvb2s8L29wdGlvbj4gXFxcclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3ByZXNlbnQnPkNvZGUgUHJlc2VudGVyPC9vcHRpb24+IFxcXHJcbiAgICAgICAgPC9zZWxlY3Q+IFxcXHJcbiAgICAgIDwvbGFiZWw+IFxcXHJcbiAgICA8L2xpPlwiXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBtb2RlU2VsZWN0ID0gJChcIi5tb2RlLXNlbGVjdFwiKS5jaGFuZ2UocHJlc2VudFRvZ2dsZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvZGVsZW5zTGlzdGVuZXIoZHVyYXRpb24pIHtcclxuICAgIC8vICQoXCIuRXhlY3V0aW9uVmlzdWFsaXplclwiKS5sZW5ndGggPyBjb25maWd1cmVDb2RlbGVucygpIDogc2V0VGltZW91dChjb2RlbGVuc0xpc3RlbmVyLCBkdXJhdGlvbik7XHJcbiAgICAvLyBjb25maWd1cmVDb2RlbGVucygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maWd1cmVDb2RlbGVucygpIHtcclxuICAgIGxldCBhY0NvZGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGFjQ29kZVRpdGxlLnRleHRDb250ZW50ID0gXCJBY3RpdmUgQ29kZSBXaW5kb3dcIjtcclxuICAgIGxldCBhY0NvZGUgPSAkKFwiLmFjX2NvZGVfZGl2XCIpLnJlbW92ZUNsYXNzKFwiY29sLW1kLTEyXCIpO1xyXG4gICAgJChcIi5hY19jb2RlX2RpdlwiKS5hZGRDbGFzcyhcImNvbC1tZC02XCIpO1xyXG4gICAgYWNDb2RlLnByZXBlbmQoYWNDb2RlVGl0bGUpO1xyXG5cclxuICAgIGFjT3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBhY091dFRpdGxlLnRleHRDb250ZW50ID0gXCJPdXRwdXQgV2luZG93XCI7XHJcbiAgICBsZXQgYWNPdXQgPSAkKFwiLmFjX291dHB1dFwiKS5hZGRDbGFzcyhcImNvbC1tZC02XCIpO1xyXG4gICAgJChcIi5hY19vdXRwdXRcIikucHJlcGVuZChhY091dFRpdGxlKTtcclxuXHJcbiAgICBsZXQgc2tldGNocGFkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBza2V0Y2hwYWRUaXRsZS50ZXh0Q29udGVudCA9IFwiU2tldGNocGFkXCI7XHJcbiAgICBsZXQgc2tldGNocGFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAkKHNrZXRjaHBhZCkuYWRkQ2xhc3MoXCJza2V0Y2hwYWRcIik7XHJcbiAgICBsZXQgc2tldGNocGFkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICQoc2tldGNocGFkQ29udGFpbmVyKS5hZGRDbGFzcyhcInNrZXRjaHBhZC1jb250YWluZXJcIik7XHJcbiAgICBza2V0Y2hwYWRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2tldGNocGFkVGl0bGUpO1xyXG4gICAgc2tldGNocGFkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNrZXRjaHBhZCk7XHJcbiAgICAvLyQoJy5hY19vdXRwdXQnKS5hcHBlbmQoc2tldGNocGFkQ29udGFpbmVyKTtcclxuXHJcbiAgICBsZXQgdmlzdWFsaXplcnMgPSAkKFwiLkV4ZWN1dGlvblZpc3VhbGl6ZXJcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJFY29udGFpbmVyOiBcIiwgdGhpcy5lQ29udGFpbmVyKTtcclxuXHJcbiAgICAkKFwiW2RhdGEtY2hpbGRjb21wb25lbnRdXCIpLm9uKFwiY2xpY2tcIiwgXCJidXR0b24ucm93LW1vZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5yZW1vdmVDbGFzcyhcImNhcmQtbW9kZVwiKTtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIikuYWRkQ2xhc3MoXCJyb3ctbW9kZVwiKTtcclxuICAgICAgICAkKHRoaXMpLm5leHQoXCIuY2FyZC1tb2RlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlLWxheW91dFwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlLWxheW91dFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoXCJbZGF0YS1jaGlsZGNvbXBvbmVudF1cIikub24oXCJjbGlja1wiLCBcImJ1dHRvbi5jYXJkLW1vZGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5yZW1vdmVDbGFzcyhcInJvdy1tb2RlXCIpO1xyXG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIltkYXRhLWNoaWxkY29tcG9uZW50XVwiKS5hZGRDbGFzcyhcImNhcmQtbW9kZVwiKTtcclxuICAgICAgICAkKHRoaXMpLnByZXYoXCIucm93LW1vZGVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmUtbGF5b3V0XCIpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJhY3RpdmUtbGF5b3V0XCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcIltkYXRhLWNoaWxkY29tcG9uZW50XSAuYWNfc2VjdGlvblwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLnByZXBlbmQoXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicHJlc2VudGF0aW9uLW9wdGlvbnNcIj48YnV0dG9uIGNsYXNzPVwicm93LW1vZGUgbGF5b3V0LWJ0blwiPjxpbWcgc3JjPVwiLi4vX2ltYWdlcy9yb3ctYnRuLWNvbnRlbnQucG5nXCIgYWx0PVwiUm93c1wiPjwvYnV0dG9uPjxidXR0b24gY2xhc3M9XCJjYXJkLW1vZGUgbGF5b3V0LWJ0blwiPjxpbWcgc3JjPVwiLi4vX2ltYWdlcy9jYXJkLWJ0bi1jb250ZW50LnBuZ1wiIGFsdD1cIkNhcmRcIj48L2J1dHRvbj48L2Rpdj4nXHJcbiAgICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZpc3VhbGl6ZXJzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgbGV0IG1lID0gJCh0aGlzKTtcclxuICAgICAgICBsZXQgY29sMSA9IG1lLmZpbmQoXCIjdml6TGF5b3V0VGRGaXJzdFwiKTtcclxuICAgICAgICBsZXQgY29sMiA9IG1lLmZpbmQoXCIjdml6TGF5b3V0VGRTZWNvbmRcIik7XHJcbiAgICAgICAgbGV0IGRhdGFWaXMgPSBtZS5maW5kKFwiI2RhdGFWaXpcIik7XHJcbiAgICAgICAgbGV0IHN0YWNrSGVhcFRhYmxlID0gbWUuZmluZChcIiNzdGFja0hlYXBUYWJsZVwiKTtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gbWUuZmluZChcIiNwcm9nT3V0cHV0c1wiKTtcclxuICAgICAgICBvdXRwdXQuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgICAgIG1lLnBhcmVudCgpLnByZXBlbmQoXHJcbiAgICAgICAgICAgIFwiPGRpdiBjbGFzcz0ncHJlc2VudGF0aW9uLXRpdGxlJz48ZGl2IGNsYXNzPSd0aXRsZS10ZXh0Jz4gRXhhbXBsZSBcIiArXHJcbiAgICAgICAgICAgICAgICAoTnVtYmVyKGluZGV4KSArIDEpICtcclxuICAgICAgICAgICAgICAgIFwiPC9kaXY+PC9kaXY+XCJcclxuICAgICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWNDb2RlLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gJCh0aGlzKS5jbG9zZXN0KFwiLmFjLWJsb2NrXCIpLnBhcmVudCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlY3Rpb24sIHNlY3Rpb24ubGVuZ3RoKTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZChza2V0Y2hwYWRDb250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChcImJ1dHRvbi5jYXJkLW1vZGVcIikuY2xpY2soKTtcclxuXHJcbiAgICBsZXQgbW9kZVNlbGVjdCA9ICQoXCIubW9kZS1zZWxlY3RcIik7XHJcbiAgICBsZXQgbW9kZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJlc2VudE1vZGVcIik7XHJcbiAgICBpZiAobW9kZSA9PSBcInByZXNlbnRcIikge1xyXG4gICAgICAgIG1vZGVTZWxlY3QudmFsKFwicHJlc2VudFwiKTtcclxuICAgICAgICBtb2RlU2VsZWN0LmNoYW5nZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyQoZG9jdW1lbnQpLnJlYWR5KGNvbmZpZ3VyZSk7XHJcbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gaWYgdXNlciBpcyBpbnN0cnVjdG9yLCBlbmFibGUgcHJlc2VudGVyIG1vZGVcclxuICAgIGlmIChlQm9va0NvbmZpZy5pc0luc3RydWN0b3IpIHtcclxuICAgICAgICBjb25maWd1cmUoKTtcclxuICAgIH1cclxufSk7XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTd2l0Y2goKSB7XHJcbiAgICBjb25zdCB0b2dnbGVTd2l0Y2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWUtc3dpdGNoIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA6IG51bGw7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUaGVtZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCBjdXJyZW50VGhlbWUpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFRoZW1lID09PSAnZGFyaycpIHtcclxuICAgICAgICAgICAgdG9nZ2xlU3dpdGNoLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaFRoZW1lKCkge1xyXG5cclxuXHR2YXIgY2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrYm94XCIpO1xyXG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJyk7IC8vYWRkIHRoaXNcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnbGlnaHQnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnbGlnaHQnKTsgLy9hZGQgdGhpc1xyXG4gICAgfVxyXG59XHJcbiIsIi8qZ2xvYmFsIHZhcmlhYmxlIGRlY2xhcmF0aW9ucyovXHJcblxyXG5cInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Nzcy91c2VyLWhpZ2hsaWdodHMuY3NzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tcGxldGlvbnMoKSB7XHJcbiAgICAvLyBHZXQgdGhlIGNvbXBsZXRpb24gc3RhdHVzXHJcbiAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYubWF0Y2goXHJcbiAgICAgICAgICAgIC8oaW5kZXguaHRtbHx0b2N0cmVlLmh0bWx8Z2VuaW5kZXguaHRtbHxuYXZoZWxwLmh0bWx8dG9jLmh0bWx8YXNzaWdubWVudHMuaHRtbHxFeGVyY2lzZXMuaHRtbCkvXHJcbiAgICAgICAgKVxyXG4gICAgKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjdXJyZW50UGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcbiAgICBpZiAoY3VycmVudFBhdGhuYW1lLmluZGV4T2YoXCI/XCIpICE9PSAtMSkge1xyXG4gICAgICAgIGN1cnJlbnRQYXRobmFtZSA9IGN1cnJlbnRQYXRobmFtZS5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYXRobmFtZS5sYXN0SW5kZXhPZihcIj9cIilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGEgPSB7IGxhc3RQYWdlVXJsOiBjdXJyZW50UGF0aG5hbWUgfTtcclxuICAgIGpRdWVyeVxyXG4gICAgICAgIC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXRDb21wbGV0aW9uU3RhdHVzXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhICE9IFwiTm9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tcGxldGlvbkRhdGEgPSAkLnBhcnNlSlNPTihkYXRhKTtcclxuICAgICAgICAgICAgICAgIHZhciBjb21wbGV0aW9uQ2xhc3MsIGNvbXBsZXRpb25Nc2c7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGlvbkRhdGFbMF0uY29tcGxldGlvblN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbkNsYXNzID0gXCJidXR0b25Db25maXJtQ29tcGxldGlvblwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRpb25Nc2cgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPSdnbHlwaGljb24gZ2x5cGhpY29uLW9rJz48L2k+IENvbXBsZXRlZC4gV2VsbCBEb25lIVwiO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uQ2xhc3MgPSBcImJ1dHRvbkFza0NvbXBsZXRpb25cIjtcclxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uTXNnID0gXCJNYXJrIGFzIENvbXBsZXRlZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJChcIiNtYWluLWNvbnRlbnRcIikuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1sZyAnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbkNsYXNzICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIGlkPVwiY29tcGxldGlvbkJ1dHRvblwiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uTXNnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8L2J1dHRvbj48L2Rpdj5cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TGFzdFBvc2l0aW9uQmFubmVyKCkge1xyXG4gICAgdmFyIGxhc3RQb3NpdGlvblZhbCA9ICQuZ2V0VXJsVmFyKFwibGFzdFBvc2l0aW9uXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBsYXN0UG9zaXRpb25WYWwgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQoXHJcbiAgICAgICAgICAgICc8aW1nIHNyYz1cIi4uL19zdGF0aWMvbGFzdC1wb2ludC5wbmdcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlOyBwYWRkaW5nLXRvcDo1NXB4OyBsZWZ0OiAxMHB4OyB0b3A6ICcgK1xyXG4gICAgICAgICAgICAgICAgcGFyc2VJbnQobGFzdFBvc2l0aW9uVmFsKSArXHJcbiAgICAgICAgICAgICAgICAncHg7XCIvPidcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoeyBzY3JvbGxUb3A6IHBhcnNlSW50KGxhc3RQb3NpdGlvblZhbCkgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5hdmlnYXRpb25BbmRDb21wbGV0aW9uQnV0dG9ucygpIHtcclxuICAgIGlmIChcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5tYXRjaChcclxuICAgICAgICAgICAgLyhpbmRleC5odG1sfGdlbmluZGV4Lmh0bWx8bmF2aGVscC5odG1sfHRvYy5odG1sfGFzc2lnbm1lbnRzLmh0bWx8RXhlcmNpc2VzLmh0bWx8dG9jdHJlZS5odG1sKS9cclxuICAgICAgICApXHJcbiAgICApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB2YXIgbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbiA9IC0kKFwiI25hdkxpbmtCZ1JpZ2h0XCIpLm91dGVyV2lkdGgoKSAtIDU7XHJcbiAgICB2YXIgbmF2TGlua0JnUmlnaHRIYWxmT3BlbjtcclxuICAgIHZhciBuYXZMaW5rQmdSaWdodEZ1bGxPcGVuID0gMDtcclxuXHJcbiAgICBpZiAoJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLmhhc0NsYXNzKFwiYnV0dG9uQXNrQ29tcGxldGlvblwiKSkge1xyXG4gICAgICAgIG5hdkxpbmtCZ1JpZ2h0SGFsZk9wZW4gPSBuYXZMaW5rQmdSaWdodEhpZGRlblBvc2l0aW9uICsgNzA7XHJcbiAgICB9IGVsc2UgaWYgKCQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5oYXNDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpKSB7XHJcbiAgICAgICAgbmF2TGlua0JnUmlnaHRIYWxmT3BlbiA9IDA7XHJcbiAgICB9XHJcbiAgICB2YXIgcmVsYXRpb25zTmV4dEljb25Jbml0aWFsUG9zaXRpb24gPSAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLmNzcyhcInJpZ2h0XCIpO1xyXG4gICAgdmFyIHJlbGF0aW9uc05leHRJY29uTmV3UG9zaXRpb24gPSAtKG5hdkxpbmtCZ1JpZ2h0SGlkZGVuUG9zaXRpb24gKyAzNSk7XHJcblxyXG4gICAgJChcIiNuYXZMaW5rQmdSaWdodFwiKS5jc3MoXCJyaWdodFwiLCBuYXZMaW5rQmdSaWdodEhpZGRlblBvc2l0aW9uKS5zaG93KCk7XHJcbiAgICB2YXIgbmF2QmdTaG93biA9IGZhbHNlO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsVG9wKCkgKyAkKHdpbmRvdykuaGVpZ2h0KCkgPT1cclxuICAgICAgICAgICAgJChkb2N1bWVudCkuaGVpZ2h0KClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgJChcIiNuYXZMaW5rQmdSaWdodFwiKS5hbmltYXRlKFxyXG4gICAgICAgICAgICAgICAgeyByaWdodDogbmF2TGlua0JnUmlnaHRIYWxmT3BlbiB9LFxyXG4gICAgICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnTGVmdFwiKS5hbmltYXRlKHsgbGVmdDogXCIwcHhcIiB9LCAyMDApO1xyXG4gICAgICAgICAgICBpZiAoJChcIiNjb21wbGV0aW9uQnV0dG9uXCIpLmhhc0NsYXNzKFwiYnV0dG9uQ29uZmlybUNvbXBsZXRpb25cIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjcmVsYXRpb25zLW5leHRcIikuYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICB7IHJpZ2h0OiByZWxhdGlvbnNOZXh0SWNvbk5ld1Bvc2l0aW9uIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5hdkJnU2hvd24gPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmF2QmdTaG93bikge1xyXG4gICAgICAgICAgICAkKFwiI25hdkxpbmtCZ1JpZ2h0XCIpLmFuaW1hdGUoXHJcbiAgICAgICAgICAgICAgICB7IHJpZ2h0OiBuYXZMaW5rQmdSaWdodEhpZGRlblBvc2l0aW9uIH0sXHJcbiAgICAgICAgICAgICAgICAyMDBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJChcIiNuYXZMaW5rQmdMZWZ0XCIpLmFuaW1hdGUoeyBsZWZ0OiBcIi02NXB4XCIgfSwgMjAwKTtcclxuICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiByZWxhdGlvbnNOZXh0SWNvbkluaXRpYWxQb3NpdGlvbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG5hdkJnU2hvd24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY29tcGxldGlvbkZsYWcgPSAwO1xyXG4gICAgaWYgKCQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5oYXNDbGFzcyhcImJ1dHRvbkFza0NvbXBsZXRpb25cIikpIHtcclxuICAgICAgICBjb21wbGV0aW9uRmxhZyA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbXBsZXRpb25GbGFnID0gMTtcclxuICAgIH1cclxuICAgICQoXCIjY29tcGxldGlvbkJ1dHRvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImJ1dHRvbkFza0NvbXBsZXRpb25cIikpIHtcclxuICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiYnV0dG9uQXNrQ29tcGxldGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwiYnV0dG9uQ29uZmlybUNvbXBsZXRpb25cIilcclxuICAgICAgICAgICAgICAgIC5odG1sKFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9J2dseXBoaWNvbiBnbHlwaGljb24tb2snPjwvaT4gQ29tcGxldGVkLiBXZWxsIERvbmUhXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIjbmF2TGlua0JnUmlnaHRcIikuYW5pbWF0ZSh7IHJpZ2h0OiBuYXZMaW5rQmdSaWdodEZ1bGxPcGVuIH0pO1xyXG4gICAgICAgICAgICAkKFwiI3JlbGF0aW9ucy1uZXh0XCIpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHJlbGF0aW9uc05leHRJY29uTmV3UG9zaXRpb24sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBuYXZMaW5rQmdSaWdodEhhbGZPcGVuID0gMDtcclxuICAgICAgICAgICAgY29tcGxldGlvbkZsYWcgPSAxO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5oYXNDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpKSB7XHJcbiAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImJ1dHRvbkNvbmZpcm1Db21wbGV0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJidXR0b25Bc2tDb21wbGV0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChcIk1hcmsgYXMgQ29tcGxldGVkXCIpO1xyXG4gICAgICAgICAgICBuYXZMaW5rQmdSaWdodEhhbGZPcGVuID0gbmF2TGlua0JnUmlnaHRIaWRkZW5Qb3NpdGlvbiArIDcwO1xyXG4gICAgICAgICAgICAkKFwiI25hdkxpbmtCZ1JpZ2h0XCIpLmFuaW1hdGUoeyByaWdodDogbmF2TGlua0JnUmlnaHRIYWxmT3BlbiB9KTtcclxuICAgICAgICAgICAgJChcIiNyZWxhdGlvbnMtbmV4dFwiKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiByZWxhdGlvbnNOZXh0SWNvbkluaXRpYWxQb3NpdGlvbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbXBsZXRpb25GbGFnID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvY2Vzc1BhZ2VTdGF0ZShjb21wbGV0aW9uRmxhZyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKHdpbmRvdykub24oXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoY29tcGxldGlvbkZsYWcgPT0gMCkge1xyXG4gICAgICAgICAgICBwcm9jZXNzUGFnZVN0YXRlKGNvbXBsZXRpb25GbGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVjb3JhdGVUYWJsZU9mQ29udGVudHMoKSB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwidG9jLmh0bWxcIikgIT0gLTEgfHxcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJpbmRleC5odG1sXCIpICE9IC0xXHJcbiAgICApIHtcclxuICAgICAgICBqUXVlcnkuZ2V0KGVCb29rQ29uZmlnLmFqYXhVUkwgKyBcImdldEFsbENvbXBsZXRpb25TdGF0dXNcIiwgZnVuY3Rpb24gKFxyXG4gICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHZhciBzdWJDaGFwdGVyTGlzdDtcclxuICAgICAgICAgICAgaWYgKGRhdGEgIT0gXCJOb25lXCIpIHtcclxuICAgICAgICAgICAgICAgIHN1YkNoYXB0ZXJMaXN0ID0gJC5wYXJzZUpTT04oZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGFsbFN1YkNoYXB0ZXJVUkxzID0gJChcIiNtYWluLWNvbnRlbnQgZGl2IGxpIGFcIik7XHJcbiAgICAgICAgICAgICAgICAkLmVhY2goc3ViQ2hhcHRlckxpc3QsIGZ1bmN0aW9uIChpbmRleCwgaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHMgPSAwOyBzIDwgYWxsU3ViQ2hhcHRlclVSTHMubGVuZ3RoOyBzKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsU3ViQ2hhcHRlclVSTHNbc10uaHJlZi5pbmRleE9mKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hhcHRlck5hbWUgKyBcIi9cIiArIGl0ZW0uc3ViQ2hhcHRlck5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgIT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jb21wbGV0aW9uU3RhdHVzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGFsbFN1YkNoYXB0ZXJVUkxzW3NdLnBhcmVudEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcImNvbXBsZXRlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiaW5mb1RleHRDb21wbGV0ZWRcIj4tIENvbXBsZXRlZCB0aGlzIHRvcGljIG9uICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uZW5kRGF0ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaG92ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmV4dChcIi5pbmZvVGV4dENvbXBsZXRlZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KFwiLmluZm9UZXh0Q29tcGxldGVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY29tcGxldGlvblN0YXR1cyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChhbGxTdWJDaGFwdGVyVVJMc1tzXS5wYXJlbnRFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImluZm9UZXh0QWN0aXZlXCI+TGFzdCByZWFkIHRoaXMgdG9waWMgb24gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5lbmREYXRlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGlsZHJlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ob3ZlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uZXh0KFwiLmluZm9UZXh0QWN0aXZlXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5leHQoXCIuaW5mb1RleHRBY3RpdmVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7IGNvdXJzZTogZUJvb2tDb25maWcuY291cnNlIH07XHJcbiAgICAgICAgalF1ZXJ5LmdldChlQm9va0NvbmZpZy5hamF4VVJMICsgXCJnZXRsYXN0cGFnZVwiLCBkYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgbGFzdFBhZ2VEYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBcIk5vbmVcIikge1xyXG4gICAgICAgICAgICAgICAgbGFzdFBhZ2VEYXRhID0gJC5wYXJzZUpTT04oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAobGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlQ2hhcHRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb250aW51ZS1yZWFkaW5nXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaG93KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmh0bWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImp1bXAtdG8tY2hhcHRlclwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtaW5mb1wiID48c3Ryb25nPllvdSB3ZXJlIExhc3QgUmVhZGluZzo8L3N0cm9uZz4gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFBhZ2VEYXRhWzBdLmxhc3RQYWdlQ2hhcHRlciArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxhc3RQYWdlRGF0YVswXS5sYXN0UGFnZVN1YmNoYXB0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiAmZ3Q7IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZURhdGFbMF0ubGFzdFBhZ2VTdWJjaGFwdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIikgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcgPGEgaHJlZj1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RQYWdlRGF0YVswXS5sYXN0UGFnZVVybCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI/bGFzdFBvc2l0aW9uPVwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0UGFnZURhdGFbMF0ubGFzdFBhZ2VTY3JvbGxMb2NhdGlvbiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPkNvbnRpbnVlIFJlYWRpbmc8L2E+PC9kaXY+J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuYWJsZUNvbXBsZXRpb25zKCkge1xyXG4gICAgZ2V0Q29tcGxldGlvbnMoKTtcclxuICAgIHNob3dMYXN0UG9zaXRpb25CYW5uZXIoKTtcclxuICAgIGFkZE5hdmlnYXRpb25BbmRDb21wbGV0aW9uQnV0dG9ucygpO1xyXG4gICAgZGVjb3JhdGVUYWJsZU9mQ29udGVudHMoKTtcclxufVxyXG5cclxuLy8gY2FsbCBlbmFibGUgdXNlciBoaWdobGlnaHRzIGFmdGVyIGxvZ2luXHJcbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW5cIiwgZW5hYmxlQ29tcGxldGlvbnMpO1xyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc1BhZ2VTdGF0ZShjb21wbGV0aW9uRmxhZykge1xyXG4gICAgLypMb2cgbGFzdCBwYWdlIHZpc2l0ZWQqL1xyXG4gICAgdmFyIGN1cnJlbnRQYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIGlmIChjdXJyZW50UGF0aG5hbWUuaW5kZXhPZihcIj9cIikgIT09IC0xKSB7XHJcbiAgICAgICAgY3VycmVudFBhdGhuYW1lID0gY3VycmVudFBhdGhuYW1lLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgY3VycmVudFBhdGhuYW1lLmxhc3RJbmRleE9mKFwiP1wiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICBsYXN0UGFnZVVybDogY3VycmVudFBhdGhuYW1lLFxyXG4gICAgICAgIGxhc3RQYWdlU2Nyb2xsTG9jYXRpb246ICQod2luZG93KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICBjb21wbGV0aW9uRmxhZzogY29tcGxldGlvbkZsYWcsXHJcbiAgICAgICAgY291cnNlOiBlQm9va0NvbmZpZy5jb3Vyc2UsXHJcbiAgICB9O1xyXG4gICAgJChkb2N1bWVudCkuYWpheEVycm9yKGZ1bmN0aW9uIChlLCBqcWh4ciwgc2V0dGluZ3MsIGV4Y2VwdGlvbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVxdWVzdCBGYWlsZWQgZm9yIFwiICsgc2V0dGluZ3MudXJsKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH0pO1xyXG4gICAgalF1ZXJ5LmFqYXgoe1xyXG4gICAgICAgIHVybDogZUJvb2tDb25maWcuYWpheFVSTCArIFwidXBkYXRlbGFzdHBhZ2VcIixcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiQuZXh0ZW5kKHtcclxuICAgIGdldFVybFZhcnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFycyA9IFtdLFxyXG4gICAgICAgICAgICBoYXNoO1xyXG4gICAgICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoXHJcbiAgICAgICAgICAgIC5zbGljZSh3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluZGV4T2YoXCI/XCIpICsgMSlcclxuICAgICAgICAgICAgLnNwbGl0KFwiJlwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhc2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICAgICAgdmFycy5wdXNoKGhhc2hbMF0pO1xyXG4gICAgICAgICAgICB2YXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhcnM7XHJcbiAgICB9LFxyXG4gICAgZ2V0VXJsVmFyOiBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHJldHVybiAkLmdldFVybFZhcnMoKVtuYW1lXTtcclxuICAgIH0sXHJcbn0pO1xyXG4iLCIoZnVuY3Rpb24gKCQpIHtcclxuICAvKipcclxuICAgKiBQYXRjaCBUT0MgbGlzdC5cclxuICAgKlxyXG4gICAqIFdpbGwgbXV0YXRlIHRoZSB1bmRlcmx5aW5nIHNwYW4gdG8gaGF2ZSBhIGNvcnJlY3QgdWwgZm9yIG5hdi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSAkc3BhbjogU3BhbiBjb250YWluaW5nIG5lc3RlZCBVTCdzIHRvIG11dGF0ZS5cclxuICAgKiBAcGFyYW0gbWluTGV2ZWw6IFN0YXJ0aW5nIGxldmVsIGZvciBuZXN0ZWQgbGlzdHMuICgxOiBnbG9iYWwsIDI6IGxvY2FsKS5cclxuICAgKi9cclxuICB2YXIgcGF0Y2hUb2MgPSBmdW5jdGlvbiAoJHVsLCBtaW5MZXZlbCkge1xyXG4gICAgdmFyIGZpbmRBLFxyXG4gICAgICBwYXRjaFRhYmxlcyxcclxuICAgICAgJGxvY2FsTGk7XHJcblxyXG4gICAgLy8gRmluZCBhbGwgYSBcImludGVybmFsXCIgdGFncywgdHJhdmVyc2luZyByZWN1cnNpdmVseS5cclxuICAgIGZpbmRBID0gZnVuY3Rpb24gKCRlbGVtLCBsZXZlbCkge1xyXG4gICAgICBsZXZlbCA9IGxldmVsIHx8IDA7XHJcbiAgICAgIHZhciAkaXRlbXMgPSAkZWxlbS5maW5kKFwiPiBsaSA+IGEuaW50ZXJuYWwsID4gdWwsID4gbGkgPiB1bFwiKTtcclxuXHJcbiAgICAgIC8vIEl0ZXJhdGUgZXZlcnl0aGluZyBpbiBvcmRlci5cclxuICAgICAgJGl0ZW1zLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKSB7XHJcbiAgICAgICAgdmFyICRpdGVtID0gJChpdGVtKSxcclxuICAgICAgICAgIHRhZyA9IGl0ZW0udGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgJGNoaWxkcmVuTGkgPSAkaXRlbS5jaGlsZHJlbignbGknKSxcclxuICAgICAgICAgICRwYXJlbnRMaSA9ICQoJGl0ZW0ucGFyZW50KCdsaScpLCAkaXRlbS5wYXJlbnQoKS5wYXJlbnQoJ2xpJykpO1xyXG5cclxuICAgICAgICAvLyBBZGQgZHJvcGRvd25zIGlmIG1vcmUgY2hpbGRyZW4gYW5kIGFib3ZlIG1pbmltdW0gbGV2ZWwuXHJcbiAgICAgICAgaWYgKHRhZyA9PT0gJ3VsJyAmJiBsZXZlbCA+PSBtaW5MZXZlbCAmJiAkY2hpbGRyZW5MaS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAkcGFyZW50TGlcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdkcm9wZG93bi1zdWJtZW51JylcclxuICAgICAgICAgICAgLmNoaWxkcmVuKCdhJykuZmlyc3QoKS5hdHRyKCd0YWJpbmRleCcsIC0xKTtcclxuXHJcbiAgICAgICAgICAkaXRlbS5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmluZEEoJGl0ZW0sIGxldmVsICsgMSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBmaW5kQSgkdWwpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdGNoIGFsbCB0YWJsZXMgdG8gcmVtb3ZlIGBgZG9jdXRpbHNgYCBjbGFzcyBhbmQgYWRkIEJvb3RzdHJhcCBiYXNlXHJcbiAgICogYGB0YWJsZWBgIGNsYXNzLlxyXG4gICAqL1xyXG4gIHBhdGNoVGFibGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJChcInRhYmxlLmRvY3V0aWxzXCIpXHJcbiAgICAgIC5yZW1vdmVDbGFzcyhcImRvY3V0aWxzXCIpXHJcbiAgICAgIC5hZGRDbGFzcyhcInRhYmxlXCIpXHJcbiAgICAgIC5hdHRyKFwiYm9yZGVyXCIsIDApO1xyXG4gIH07XHJcblxyXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvKlxyXG4gICAgICogU2Nyb2xsIHRoZSB3aW5kb3cgdG8gYXZvaWQgdGhlIHRvcG5hdiBiYXJcclxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2l0dGVyL2Jvb3RzdHJhcC9pc3N1ZXMvMTc2OFxyXG4gICAgICovXHJcbiAgICBpZiAoJChcIiNuYXZiYXIubmF2YmFyLWZpeGVkLXRvcFwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHZhciBuYXZIZWlnaHQgPSAkKFwiI25hdmJhclwiKS5oZWlnaHQoKSxcclxuICAgICAgICBzaGlmdFdpbmRvdyA9IGZ1bmN0aW9uKCkgeyBzY3JvbGxCeSgwLCAtbmF2SGVpZ2h0IC0gMTApOyB9O1xyXG5cclxuICAgICAgaWYgKGxvY2F0aW9uLmhhc2gpIHtcclxuICAgICAgICBzaGlmdFdpbmRvdygpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgc2hpZnRXaW5kb3cpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBzdHlsaW5nLCBzdHJ1Y3R1cmUgdG8gVE9DJ3MuXHJcbiAgICAkKFwiLmRyb3Bkb3duLW1lbnVcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykuZmluZChcInVsXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4LCBpdGVtKXtcclxuICAgICAgICB2YXIgJGl0ZW0gPSAkKGl0ZW0pO1xyXG4gICAgICAgICRpdGVtLmFkZENsYXNzKCd1bnN0eWxlZCcpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEdsb2JhbCBUT0MuXHJcbiAgICBpZiAoJChcInVsLmdsb2JhbHRvYyBsaVwiKS5sZW5ndGgpIHtcclxuICAgICAgcGF0Y2hUb2MoJChcInVsLmdsb2JhbHRvY1wiKSwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBSZW1vdmUgR2xvYmFsIFRPQy5cclxuICAgICAgJChcIi5nbG9iYWx0b2MtY29udGFpbmVyXCIpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExvY2FsIFRPQy5cclxuICAgIHBhdGNoVG9jKCQoXCJ1bC5sb2NhbHRvY1wiKSwgMik7XHJcblxyXG4gICAgLy8gTXV0YXRlIHN1Yi1saXN0cyAoZm9yIGJzLTIuMy4wKS5cclxuICAgICQoXCIuZHJvcGRvd24tbWVudSB1bFwiKS5ub3QoXCIuZHJvcGRvd24tbWVudVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICR1bCA9ICQodGhpcyksXHJcbiAgICAgICAgJHBhcmVudCA9ICR1bC5wYXJlbnQoKSxcclxuICAgICAgICB0YWcgPSAkcGFyZW50WzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAka2lkcyA9ICR1bC5jaGlsZHJlbigpLmRldGFjaCgpO1xyXG5cclxuICAgICAgLy8gUmVwbGFjZSBsaXN0IHdpdGggaXRlbXMgaWYgc3VibWVudSBoZWFkZXIuXHJcbiAgICAgIGlmICh0YWcgPT09IFwidWxcIikge1xyXG4gICAgICAgICR1bC5yZXBsYWNlV2l0aCgka2lkcyk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGFnID09PSBcImxpXCIpIHtcclxuICAgICAgICAvLyBJbnNlcnQgaW50byBwcmV2aW91cyBsaXN0LlxyXG4gICAgICAgICRwYXJlbnQuYWZ0ZXIoJGtpZHMpO1xyXG4gICAgICAgICR1bC5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQWRkIGRpdmlkZXIgaW4gcGFnZSBUT0MuXHJcbiAgICAkbG9jYWxMaSA9ICQoXCJ1bC5sb2NhbHRvYyBsaVwiKTtcclxuICAgIGlmICgkbG9jYWxMaS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICRsb2NhbExpLmZpcnN0KCkuYWZ0ZXIoJzxsaSBjbGFzcz1cImRpdmlkZXJcIj48L2xpPicpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVuYWJsZSBkcm9wZG93bi5cclxuICAgICQoJy5kcm9wZG93bi10b2dnbGUnKS5kcm9wZG93bigpO1xyXG5cclxuICAgIC8vIFBhdGNoIHRhYmxlcy5cclxuICAgIHBhdGNoVGFibGVzKCk7XHJcblxyXG4gICAgLy8gQWRkIE5vdGUsIFdhcm5pbmcgc3R5bGVzLlxyXG4gICAgJCgnZGl2Lm5vdGUnKS5hZGRDbGFzcygnYWxlcnQnKS5hZGRDbGFzcygnYWxlcnQtaW5mbycpO1xyXG4gICAgJCgnZGl2Lndhcm5pbmcnKS5hZGRDbGFzcygnYWxlcnQnKS5hZGRDbGFzcygnYWxlcnQtd2FybmluZycpO1xyXG5cclxuICAgIC8vIElubGluZSBjb2RlIHN0eWxlcyB0byBCb290c3RyYXAgc3R5bGUuXHJcbiAgICAkKCd0dC5kb2N1dGlscy5saXRlcmFsJykubm90KFwiLnhyZWZcIikuZWFjaChmdW5jdGlvbiAoaSwgZSkge1xyXG4gICAgICAvLyBpZ25vcmUgcmVmZXJlbmNlc1xyXG4gICAgICBpZiAoISQoZSkucGFyZW50KCkuaGFzQ2xhc3MoXCJyZWZlcmVuY2VcIikpIHtcclxuICAgICAgICAkKGUpLnJlcGxhY2VXaXRoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiAkKFwiPGNvZGUgLz5cIikudGV4dCgkKHRoaXMpLnRleHQoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH19KTtcclxuICB9KTtcclxufSh3aW5kb3cualF1ZXJ5KSk7XHJcbiIsIi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIHxkb2NuYW1lfCAtIEEgZnJhbWV3b3JrIGFsbG93aW5nIGEgUnVuZXN0b25lIGNvbXBvbmVudCB0byBsb2FkIG9ubHkgdGhlIEpTIGl0IG5lZWRzXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8vIFRoZSBKYXZhU2NyaXB0IHJlcXVpcmVkIGJ5IGFsbCBSdW5lc3RvbmUgY29tcG9uZW50cyBpcyBxdWl0ZSBsYXJnZSBhbmQgcmVzdWx0cyBpbiBzbG93IHBhZ2UgbG9hZHMuIFRoaXMgYXBwcm9hY2ggZW5hYmxlcyBhIFJ1bmVzdG9uZSBjb21wb25lbnQgdG8gbG9hZCBvbmx5IHRoZSBKYXZhU2NyaXB0IGl0IG5lZWRzLCByYXRoZXIgdGhhbiBsb2FkaW5nIEphdmFTY3JpcHQgZm9yIGFsbCB0aGUgY29tcG9uZW50cyByZWdhcmRsZXNzIG9mIHdoaWNoIGFyZSBhY3R1YWxseSB1c2VkLlxyXG4vL1xyXG4vLyBUbyBhY2NvbXBsaXNoIHRoaXMsIHdlYnBhY2sncyBzcGxpdC1jaHVua3MgYWJpbGl0eSBhbmFseXplcyBhbGwgSlMsIHN0YXJ0aW5nIGZyb20gdGhpcyBmaWxlLiBUaGUgZHluYW1pYyBpbXBvcnRzIGJlbG93IGFyZSB0cmFuc2Zvcm1lZCBieSB3ZWJwYWNrIGludG8gdGhlIGR5bmFtaWMgZmV0Y2hlcyBvZiBqdXN0IHRoZSBKUyByZXF1aXJlZCBieSBlYWNoIGZpbGUgYW5kIGFsbCBpdHMgZGVwZW5kZW5jaWVzLiAoSWYgdXNpbmcgc3RhdGljIGltcG9ydHMsIHdlYnBhY2sgd2lsbCBhc3N1bWUgdGhhdCBhbGwgZmlsZXMgYXJlIGFscmVhZHkgc3RhdGljYWxseSBsb2FkZWQgdmlhIHNjcmlwdCB0YWdzLCBkZWZlYXRpbmcgdGhlIHB1cnBvc2Ugb2YgdGhpcyBmcmFtZXdvcmsuKVxyXG4vL1xyXG4vLyBIb3dldmVyLCB0aGlzIGFwcHJvYWNoIGxlYWRzIHRvIGNvbXBsZXhpdHk6XHJcbi8vXHJcbi8vIC0gICAgVGhlIGBgZGF0YS1jb21wb25lbnRgYCBhdHRyaWJ1dGUgb2YgZWFjaCBjb21wb25lbnQgbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUga2V5cyBvZiB0aGUgYGBtb2R1bGVfbWFwYGAgYmVsb3cuXHJcbi8vIC0gICAgVGhlIHZhbHVlcyBpbiB0aGUgYGBtb2R1bGVfbWFwYGAgbXVzdCBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgSmF2YVNjcmlwdCBmaWxlcyB3aGljaCBpbXBsZW1lbnQgZWFjaCBvZiB0aGUgY29tcG9uZW50cy5cclxuXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbi8vIFN0YXRpYyBpbXBvcnRzXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIFRoZXNlIGltcG9ydHMgYXJlICh3ZSBhc3N1bWUpIG5lZWRlZCBieSBhbGwgcGFnZXMuIEhvd2V2ZXIsIGl0IHdvdWxkIGJlIG11Y2ggYmV0dGVyIHRvIGxvYWQgdGhlc2UgaW4gdGhlIG1vZHVsZXMgdGhhdCBhY3R1YWxseSB1c2UgdGhlbS5cclxuLy9cclxuLy8gVGhlc2UgYXJlIHN0YXRpYyBpbXBvcnRzOyBjb2RlIGluIGBkeW5hbWljYWxseSBsb2FkZWQgY29tcG9uZW50c2BfIGRlYWxzIHdpdGggZHluYW1pYyBpbXBvcnRzLlxyXG4vL1xyXG4vLyBqUXVlcnktcmVsYXRlZCBpbXBvcnRzLlxyXG5pbXBvcnQgXCJqcXVlcnktdWkvanF1ZXJ5LXVpLmpzXCI7XHJcbmltcG9ydCBcImpxdWVyeS11aS90aGVtZXMvYmFzZS9qcXVlcnkudWkuYWxsLmNzc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5LmlkbGUtdGltZXIuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5lbWl0dGVyLmJpZGkuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmVtaXR0ZXIuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmZhbGxiYWNrcy5qc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvanF1ZXJ5X2kxOG4vanF1ZXJ5LmkxOG4ubWVzc2FnZXN0b3JlLmpzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy9qcXVlcnlfaTE4bi9qcXVlcnkuaTE4bi5wYXJzZXIuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2pxdWVyeV9pMThuL2pxdWVyeS5pMThuLmxhbmd1YWdlLmpzXCI7XHJcblxyXG4vLyBCb290c3RyYXBcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvanMvYm9vdHN0cmFwLmpzXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzXCI7XHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL2NvbW1vbi9wcm9qZWN0X3RlbXBsYXRlL190ZW1wbGF0ZXMvcGx1Z2luX2xheW91dHMvc3BoaW54X2Jvb3RzdHJhcC9zdGF0aWMvYm9vdHN0cmFwLXNwaGlueC5qc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vY3NzL3J1bmVzdG9uZS1jdXN0b20tc3BoaW54LWJvb3RzdHJhcC5jc3NcIjtcclxuXHJcbi8vIE1pc2NcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2pzL2Jvb2tmdW5jcy5qc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvdXNlci1oaWdobGlnaHRzLmpzXCI7XHJcblxyXG4vLyBUaGVzZSBiZWxvbmcgaW4gZHluYW1pYyBpbXBvcnRzIGZvciB0aGUgb2J2aW91cyBjb21wb25lbnQ7IGhvd2V2ZXIsIHRoZXNlIGNvbXBvbmVudHMgZG9uJ3QgaW5jbHVkZSBhIGBgZGF0YS1jb21wb25lbnRgYCBhdHRyaWJ1dGUuXHJcbmltcG9ydCBcIi4vcnVuZXN0b25lL21hdHJpeGVxL2Nzcy9tYXRyaXhlcS5jc3NcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvd2ViZ2xkZW1vL2Nzcy93ZWJnbGludGVyYWN0aXZlLmNzc1wiO1xyXG5cclxuLy8gVGhlc2UgYXJlIG9ubHkgbmVlZGVkIGZvciB0aGUgUnVuZXN0b25lIGJvb2ssIGJ1dCBub3QgaW4gYSBsaWJyYXJ5IG1vZGUgKHN1Y2ggYXMgcHJldGV4dCkuIEkgd291bGQgcHJlZmVyIHRvIGR5bmFtaWNhbGx5IGxvYWQgdGhlbS4gSG93ZXZlciwgdGhlc2Ugc2NyaXB0cyBhcmUgc28gc21hbGwgSSBoYXZlbid0IGJvdGhlcmVkIHRvIGRvIHNvLlxyXG5pbXBvcnQgeyBnZXRTd2l0Y2gsIHN3aXRjaFRoZW1lIH0gZnJvbSBcIi4vcnVuZXN0b25lL2NvbW1vbi9qcy90aGVtZS5qc1wiO1xyXG5pbXBvcnQgXCIuL3J1bmVzdG9uZS9jb21tb24vanMvcHJlc2VudGVyX21vZGUuanNcIjtcclxuaW1wb3J0IFwiLi9ydW5lc3RvbmUvY29tbW9uL2Nzcy9wcmVzZW50ZXJfbW9kZS5jc3NcIjtcclxuXHJcblxyXG4vLyBEeW5hbWljYWxseSBsb2FkZWQgY29tcG9uZW50c1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBUaGlzIHByb3ZpZGVzIGEgbGlzdCBvZiBtb2R1bGVzIHRoYXQgY29tcG9uZW50cyBjYW4gZHluYW1pY2FsbHkgaW1wb3J0LiBXZWJwYWNrIHdpbGwgY3JlYXRlIGEgbGlzdCBvZiBpbXBvcnRzIGZvciBlYWNoIGJhc2VkIG9uIGl0cyBhbmFseXNpcy5cclxuY29uc3QgbW9kdWxlX21hcCA9IHtcclxuICAgIC8vIFdyYXAgZWFjaCBpbXBvcnQgaW4gYSBmdW5jdGlvbiwgc28gdGhhdCBpdCB3b24ndCBvY2N1ciB1bnRpbCB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkLiBXaGlsZSBzb21ldGhpbmcgY2xlYW5lciB3b3VsZCBiZSBuaWNlLCB3ZWJwYWNrIGNhbid0IGFuYWx5emUgdGhpbmdzIGxpa2UgYGBpbXBvcnQoZXhwcmVzc2lvbilgYC5cclxuICAgIC8vXHJcbiAgICAvLyBUaGUga2V5cyBtdXN0IG1hdGNoIHRoZSB2YWx1ZSBvZiBlYWNoIGNvbXBvbmVudCdzIGBgZGF0YS1jb21wb25lbnRgYCBhdHRyaWJ1dGUgLS0gdGhlIGBgcnVuZXN0b25lX2ltcG9ydGBgIGFuZCBgYHJ1bmVzdG9uZV9hdXRvX2ltcG9ydGBgIGZ1bmN0aW9ucyBhc3N1bWUgdGhpcy5cclxuICAgIGFjdGl2ZWNvZGU6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2FjdGl2ZWNvZGUvanMvYWNmYWN0b3J5LmpzXCIpLFxyXG4gICAgLy8gQWx3YXlzIGltcG9ydCB0aGUgdGltZWQgdmVyc2lvbiBvZiBhIGNvbXBvbmVudCBpZiBhdmFpbGFibGUsIHNpbmNlIHRoZSB0aW1lZCBjb21wb25lbnRzIGFsc28gZGVmaW5lIHRoZSBjb21wb25lbnQncyBmYWN0b3J5IGFuZCBpbmNsdWRlIHRoZSBjb21wb25lbnQgYXMgd2VsbC4gTm90ZSB0aGF0IGBgYWNmYWN0b3J5YGAgaW1wb3J0cyB0aGUgdGltZWQgY29tcG9uZW50cyBvZiBBY3RpdmVDb2RlLCBzbyBpdCBmb2xsb3dzIHRoaXMgcGF0dGVybi5cclxuICAgIGNsaWNrYWJsZWFyZWE6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2NsaWNrYWJsZUFyZWEvanMvdGltZWRjbGlja2FibGUuanNcIiksXHJcbiAgICBjb2RlbGVuczogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvY29kZWxlbnMvanMvY29kZWxlbnMuanNcIiksXHJcbiAgICBkYXRhZmlsZTogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvZGF0YWZpbGUvanMvZGF0YWZpbGUuanNcIiksXHJcbiAgICBkcmFnbmRyb3A6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL2RyYWduZHJvcC9qcy90aW1lZGRuZC5qc1wiKSxcclxuICAgIGZpbGxpbnRoZWJsYW5rOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9maXRiL2pzL3RpbWVkZml0Yi5qc1wiKSxcclxuICAgIGtoYW5leDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUva2hhbmV4L2pzL2toYW5leC5qc1wiKSxcclxuICAgIGxwX2J1aWxkOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9scC9qcy9scC5qc1wiKSxcclxuICAgIG11bHRpcGxlY2hvaWNlOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9tY2hvaWNlL2pzL3RpbWVkbWMuanNcIiksXHJcbiAgICBwYXJzb25zOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9wYXJzb25zL2pzL3RpbWVkcGFyc29ucy5qc1wiKSxcclxuICAgIHBvbGw6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3BvbGwvanMvcG9sbC5qc1wiKSxcclxuICAgIHF1aXpseTogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvcXVpemx5L2pzL3F1aXpseS5qc1wiKSxcclxuICAgIHJldmVhbDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvcmV2ZWFsL2pzL3JldmVhbC5qc1wiKSxcclxuICAgIHNlbGVjdHF1ZXN0aW9uOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS9zZWxlY3RxdWVzdGlvbi9qcy9zZWxlY3RvbmUuanNcIiksXHJcbiAgICBzaG9ydGFuc3dlcjogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvc2hvcnRhbnN3ZXIvanMvdGltZWRfc2hvcnRhbnN3ZXIuanNcIiksXHJcbiAgICBzaG93ZXZhbDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvc2hvd2V2YWwvanMvc2hvd0V2YWwuanNcIiksXHJcbiAgICBzcHJlYWRzaGVldDogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvc3ByZWFkc2hlZXQvanMvc3ByZWFkc2hlZXQuanNcIiksXHJcbiAgICB0YWJiZWRTdHVmZjogKCkgPT4gaW1wb3J0KFwiLi9ydW5lc3RvbmUvdGFiYmVkU3R1ZmYvanMvdGFiYmVkc3R1ZmYuanNcIiksXHJcbiAgICB0aW1lZEFzc2Vzc21lbnQ6ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3RpbWVkL2pzL3RpbWVkLmpzXCIpLFxyXG4gICAgd2F2ZWRyb206ICgpID0+IGltcG9ydChcIi4vcnVuZXN0b25lL3dhdmVkcm9tL2pzL3dhdmVkcm9tLmpzXCIpLFxyXG4gICAgLy8gVE9ETzogc2luY2UgdGhpcyBpc24ndCBpbiBhIGBgZGF0YS1jb21wb25lbnRgYCwgbmVlZCB0byB0cmlnZ2VyIGFuIGltcG9ydCBvZiB0aGlzIGNvZGUgbWFudWFsbHkuXHJcbiAgICB3ZWJ3b3JrOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS93ZWJ3b3JrL2pzL3dlYndvcmsuanNcIiksXHJcbiAgICB5b3V0dWJlOiAoKSA9PiBpbXBvcnQoXCIuL3J1bmVzdG9uZS92aWRlby9qcy9ydW5lc3RvbmV2aWRlby5qc1wiKSxcclxufVxyXG5cclxuLy8gLi4gX2R5bmFtaWMgaW1wb3J0IG1hY2hpbmVyeTpcclxuLy9cclxuLy8gRHluYW1pYyBpbXBvcnQgbWFjaGluZXJ5XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGdWxmaWxsIGEgcHJvbWlzZSB3aGVuIHRoZSBSdW5lc3RvbmUgcHJlLWxvZ2luIGNvbXBsZXRlIGV2ZW50IG9jY3Vycy5cclxubGV0IHByZV9sb2dpbl9jb21wbGV0ZV9wcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiAkKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOnByZS1sb2dpbi1jb21wbGV0ZVwiLCByZXNvbHZlKSk7XHJcblxyXG4vLyBQcm92aWRlIGEgc2ltcGxlIGZ1bmN0aW9uIHRvIGltcG9ydCB0aGUgSlMgZm9yIGFsbCBjb21wb25lbnRzIG9uIHRoZSBwYWdlLlxyXG5leHBvcnQgZnVuY3Rpb24gcnVuZXN0b25lX2F1dG9faW1wb3J0KCkge1xyXG4gICAgLy8gQ3JlYXRlIGEgc2V0IG9mIGBgZGF0YS1jb21wb25lbnRgYCB2YWx1ZXMsIHRvIGF2b2lkIGR1cGxpY2F0aW9uLlxyXG4gICAgY29uc3QgcyA9IG5ldyBTZXQoXHJcbiAgICAgICAgLy8gQWxsIFJ1bmVzdG9uZSBjb21wb25lbnRzIGhhdmUgYSBgYGRhdGEtY29tcG9uZW50YGAgYXR0cmlidXRlLlxyXG4gICAgICAgICQoXCJbZGF0YS1jb21wb25lbnRdXCIpLm1hcChcclxuICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgdmFsdWUgb2YgdGhlIGRhdGEtY29tcG9uZW50IGF0dHJpYnV0ZS5cclxuICAgICAgICAgICAgKGluZGV4LCBlbGVtZW50KSA9PiAkKGVsZW1lbnQpLmF0dHIoXCJkYXRhLWNvbXBvbmVudFwiKVxyXG4gICAgICAgICAgICAvLyBTd2l0Y2ggZnJvbSBhIGpRdWVyeSBvYmplY3QgYmFjayB0byBhbiBhcnJheSwgcGFzc2luZyB0aGF0IHRvIHRoZSBTZXQgY29uc3RydWN0b3IuXHJcbiAgICAgICAgKS5nZXQoKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBMb2FkIEpTIGZvciBlYWNoIG9mIHRoZSBjb21wb25lbnRzIGZvdW5kLlxyXG4gICAgY29uc3QgYSA9IFsuLi5zXS5tYXAodmFsdWUgPT5cclxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIEpTIGZvciB0aGlzIGNvbXBvbmVudCwgcmV0dXJuIGFuIGVtcHR5IFByb21pc2UuXHJcbiAgICAgICAgKG1vZHVsZV9tYXBbdmFsdWVdIHx8ICgoKSA9PiBQcm9taXNlLnJlc29sdmUoKSkpKClcclxuICAgICk7XHJcblxyXG4gICAgLy8gU2VuZCB0aGUgUnVuZXN0b25lIGxvZ2luIGNvbXBsZXRlIGV2ZW50IHdoZW4gYWxsIEpTIGlzIGxvYWRlZCBhbmQgdGhlIHByZS1sb2dpbiBpcyBhbHNvIGNvbXBsZXRlLlxyXG4gICAgUHJvbWlzZS5hbGwoW3ByZV9sb2dpbl9jb21wbGV0ZV9wcm9taXNlLCAuLi5hXSkudGhlbigoKSA9PiAkKGRvY3VtZW50KS50cmlnZ2VyKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIpKTtcclxufVxyXG5cclxuLy8gTG9hZCBjb21wb25lbnQgSlMgd2hlbiB0aGUgZG9jdW1lbnQgaXMgcmVhZHkuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KHJ1bmVzdG9uZV9hdXRvX2ltcG9ydCk7XHJcblxyXG4vLyBQcm92aWRlIGEgZnVuY3Rpb24gdG8gaW1wb3J0IG9uZSBzcGVjaWZpYyBSdW5lc3RvbmUgY29tcG9uZW50LlxyXG4vLyB0aGUgaW1wb3J0IGZ1bmN0aW9uIGluc2lkZSBtb2R1bGVfbWFwIGlzIGFzeW5jIC0tIHJ1bmVzdG9uZV9pbXBvcnRcclxuLy8gc2hvdWxkIGJlIGF3YWl0ZWQgd2hlbiBuZWNlc3NhcnkgdG8gZW5zdXJlIHRoZSBpbXBvcnQgY29tcGxldGVzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBydW5lc3RvbmVfaW1wb3J0KGNvbXBvbmVudF9uYW1lKSB7XHJcbiAgICByZXR1cm4gbW9kdWxlX21hcFtjb21wb25lbnRfbmFtZV0oKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcG9wdXBTY3JhdGNoQUMoKSB7XHJcbiAgICAvLyBsb2FkIHRoZSBhY3RpdmVjb2RlIGJ1bmRsZVxyXG4gICAgYXdhaXQgcnVuZXN0b25lX2ltcG9ydChcImFjdGl2ZWNvZGVcIik7XHJcbiAgICAvLyBzY3JhdGNoRGl2IHdpbGwgYmUgZGVmaW5lZCBpZiB3ZSBoYXZlIGFscmVhZHkgY3JlYXRlZCBhIHNjcmF0Y2hcclxuICAgIC8vIGFjdGl2ZWNvZGUuICBJZiBpdHMgbm90IGRlZmluZWQgdGhlbiB3ZSBuZWVkIHRvIGdldCBpdCByZWFkeSB0byB0b2dnbGVcclxuICAgIGlmICghZUJvb2tDb25maWcuc2NyYXRjaERpdikge1xyXG4gICAgICAgIHdpbmRvdy5BQ0ZhY3RvcnkuY3JlYXRlU2NyYXRjaEFjdGl2ZWNvZGUoKTtcclxuICAgICAgICBsZXQgZGl2aWQgPSBlQm9va0NvbmZpZy5zY3JhdGNoRGl2XHJcbiAgICAgICAgd2luZG93LmVkTGlzdFtkaXZpZF0gPSBBQ0ZhY3RvcnkuY3JlYXRlQWN0aXZlQ29kZSgkKGAjJHtkaXZpZH1gKVswXSxcclxuICAgICAgICAgICAgZUJvb2tDb25maWcuYWNEZWZhdWx0TGFuZ3VhZ2UpO1xyXG4gICAgICAgIGlmIChlQm9va0NvbmZpZy5pc0xvZ2dlZEluKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5lZExpc3RbZGl2aWRdLmVuYWJsZVNhdmVMb2FkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2luZG93LkFDRmFjdG9yeS50b2dnbGVTY3JhdGNoQWN0aXZlY29kZSgpO1xyXG59XHJcblxyXG4vLyBTZXQgdGhlIGRpcmVjdG9yeSBjb250YWluaW5nIHRoaXMgc2NyaXB0IGFzIHRoZSBgcGF0aCA8aHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9ndWlkZXMvcHVibGljLXBhdGgvI29uLXRoZS1mbHk+YF8gZm9yIGFsbCB3ZWJwYWNrZWQgc2NyaXB0cy5cclxuY29uc3Qgc2NyaXB0X3NyYyA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHNjcmlwdF9zcmMuc3Vic3RyaW5nKDAsIHNjcmlwdF9zcmMubGFzdEluZGV4T2YoJy8nKSArIDEpO1xyXG5cclxuXHJcbi8vIE1hbnVhbCBleHBvcnRzXHJcbi8vID09PT09PT09PT09PT09XHJcbi8vIFdlYnBhY2sncyBgYG91dHB1dC5saWJyYXJ5YGAgc2V0dGluZyBkb2Vzbid0IHNlZW0gdG8gd29yayB3aXRoIHRoZSBzcGxpdCBjaHVua3MgcGx1Z2luOyBkbyBhbGwgZXhwb3J0cyBtYW51YWxseSB0aHJvdWdoIHRoZSBgYHdpbmRvd2BgIG9iamVjdCBpbnN0ZWFkLlxyXG5jb25zdCByYyA9IHt9O1xyXG5yYy5ydW5lc3RvbmVfaW1wb3J0ID0gcnVuZXN0b25lX2ltcG9ydDtcclxucmMucnVuZXN0b25lX2F1dG9faW1wb3J0ID0gcnVuZXN0b25lX2F1dG9faW1wb3J0O1xyXG5yYy5nZXRTd2l0Y2ggPSBnZXRTd2l0Y2g7XHJcbnJjLnN3aXRjaFRoZW1lID0gc3dpdGNoVGhlbWU7XHJcbnJjLnBvcHVwU2NyYXRjaEFDID0gcG9wdXBTY3JhdGNoQUM7XHJcbndpbmRvdy5ydW5lc3RvbmVDb21wb25lbnRzID0gcmM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=