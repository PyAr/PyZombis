(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_wavedrom_js_wavedrom_js"],{

/***/ 32405:
/*!*******************************************!*\
  !*** ./runestone/wavedrom/js/wavedrom.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var wavedrom_lib_process_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wavedrom/lib/process-all.js */ 97398);
/* harmony import */ var wavedrom_lib_process_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wavedrom_lib_process_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wavedrom_lib_wave_skin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wavedrom/lib/wave-skin.js */ 55843);
/* harmony import */ var wavedrom_lib_wave_skin_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wavedrom_lib_wave_skin_js__WEBPACK_IMPORTED_MODULE_1__);
// ***********************************************
// |docname| - JavaScript for the WaveDrom library
// ***********************************************


// This took a fair amount of experimenting to figure out how to make this work with NPM and Webpack. Sigh. Here's the working result.
//
// All we need is the ability to call the default export of ``ProcessAll`` in order to render timing diagrams.


// WaveSkin isn't defined globally, so import the default export to get access to it.

// Make the required WaveSkin (needed by WaveDrom) available globally.
window.WaveSkin = (wavedrom_lib_wave_skin_js__WEBPACK_IMPORTED_MODULE_1___default());

// Run the render after the dynamic load is done.
$(document).on("runestone:login-complete", (wavedrom_lib_process_all_js__WEBPACK_IMPORTED_MODULE_0___default()));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dhdmVkcm9tL2pzL3dhdmVkcm9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ3FEOztBQUVyRDtBQUNpRDtBQUNqRDtBQUNBLGtCQUFrQixrRUFBUTs7QUFFMUI7QUFDQSwyQ0FBMkMsb0VBQVUiLCJmaWxlIjoicnVuZXN0b25lX3dhdmVkcm9tX2pzX3dhdmVkcm9tX2pzLmJ1bmRsZS5qcz92PTU1NjQyZWZhZWVjZTgzZGNkMThmIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gfGRvY25hbWV8IC0gSmF2YVNjcmlwdCBmb3IgdGhlIFdhdmVEcm9tIGxpYnJhcnlcclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gVGhpcyB0b29rIGEgZmFpciBhbW91bnQgb2YgZXhwZXJpbWVudGluZyB0byBmaWd1cmUgb3V0IGhvdyB0byBtYWtlIHRoaXMgd29yayB3aXRoIE5QTSBhbmQgV2VicGFjay4gU2lnaC4gSGVyZSdzIHRoZSB3b3JraW5nIHJlc3VsdC5cclxuLy9cclxuLy8gQWxsIHdlIG5lZWQgaXMgdGhlIGFiaWxpdHkgdG8gY2FsbCB0aGUgZGVmYXVsdCBleHBvcnQgb2YgYGBQcm9jZXNzQWxsYGAgaW4gb3JkZXIgdG8gcmVuZGVyIHRpbWluZyBkaWFncmFtcy5cclxuaW1wb3J0IFByb2Nlc3NBbGwgZnJvbSBcIndhdmVkcm9tL2xpYi9wcm9jZXNzLWFsbC5qc1wiO1xyXG5cclxuLy8gV2F2ZVNraW4gaXNuJ3QgZGVmaW5lZCBnbG9iYWxseSwgc28gaW1wb3J0IHRoZSBkZWZhdWx0IGV4cG9ydCB0byBnZXQgYWNjZXNzIHRvIGl0LlxyXG5pbXBvcnQgV2F2ZVNraW4gZnJvbSBcIndhdmVkcm9tL2xpYi93YXZlLXNraW4uanNcIjtcclxuLy8gTWFrZSB0aGUgcmVxdWlyZWQgV2F2ZVNraW4gKG5lZWRlZCBieSBXYXZlRHJvbSkgYXZhaWxhYmxlIGdsb2JhbGx5LlxyXG53aW5kb3cuV2F2ZVNraW4gPSBXYXZlU2tpbjtcclxuXHJcbi8vIFJ1biB0aGUgcmVuZGVyIGFmdGVyIHRoZSBkeW5hbWljIGxvYWQgaXMgZG9uZS5cclxuJChkb2N1bWVudCkub24oXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgUHJvY2Vzc0FsbCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=