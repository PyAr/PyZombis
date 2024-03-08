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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dhdmVkcm9tL2pzL3dhdmVkcm9tLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ3FEOztBQUVyRDtBQUNpRDtBQUNqRDtBQUNBLGtCQUFrQixrRUFBUTs7QUFFMUI7QUFDQSwyQ0FBMkMsb0VBQVUiLCJmaWxlIjoicnVuZXN0b25lX3dhdmVkcm9tX2pzX3dhdmVkcm9tX2pzLmJ1bmRsZS5qcz92PTczOTRiYzE1ODJhZDM0Y2RjZTFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIHxkb2NuYW1lfCAtIEphdmFTY3JpcHQgZm9yIHRoZSBXYXZlRHJvbSBsaWJyYXJ5XG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGlzIHRvb2sgYSBmYWlyIGFtb3VudCBvZiBleHBlcmltZW50aW5nIHRvIGZpZ3VyZSBvdXQgaG93IHRvIG1ha2UgdGhpcyB3b3JrIHdpdGggTlBNIGFuZCBXZWJwYWNrLiBTaWdoLiBIZXJlJ3MgdGhlIHdvcmtpbmcgcmVzdWx0LlxuLy9cbi8vIEFsbCB3ZSBuZWVkIGlzIHRoZSBhYmlsaXR5IHRvIGNhbGwgdGhlIGRlZmF1bHQgZXhwb3J0IG9mIGBgUHJvY2Vzc0FsbGBgIGluIG9yZGVyIHRvIHJlbmRlciB0aW1pbmcgZGlhZ3JhbXMuXG5pbXBvcnQgUHJvY2Vzc0FsbCBmcm9tIFwid2F2ZWRyb20vbGliL3Byb2Nlc3MtYWxsLmpzXCI7XG5cbi8vIFdhdmVTa2luIGlzbid0IGRlZmluZWQgZ2xvYmFsbHksIHNvIGltcG9ydCB0aGUgZGVmYXVsdCBleHBvcnQgdG8gZ2V0IGFjY2VzcyB0byBpdC5cbmltcG9ydCBXYXZlU2tpbiBmcm9tIFwid2F2ZWRyb20vbGliL3dhdmUtc2tpbi5qc1wiO1xuLy8gTWFrZSB0aGUgcmVxdWlyZWQgV2F2ZVNraW4gKG5lZWRlZCBieSBXYXZlRHJvbSkgYXZhaWxhYmxlIGdsb2JhbGx5Llxud2luZG93LldhdmVTa2luID0gV2F2ZVNraW47XG5cbi8vIFJ1biB0aGUgcmVuZGVyIGFmdGVyIHRoZSBkeW5hbWljIGxvYWQgaXMgZG9uZS5cbiQoZG9jdW1lbnQpLm9uKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIFByb2Nlc3NBbGwpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==