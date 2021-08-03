(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_video_js_runestonevideo_js"],{

/***/ 96895:
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/video/css/video.css ***!
  \*****************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".exercises {\r\n    background-color:#f0ffff;\r\n}\r\n\r\nfigcaption {\r\n\tmargin: .75em 0;\r\n\ttext-align: center;\r\n\tfont: italic 13px/18px Cambria, Georgia, \"Times New Roman\", Times, serif;\r\n}\r\n\r\nimg.bookfig {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.cl_caption {\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./runestone/video/css/video.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;AAC5B;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,wEAAwE;AACzE;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":[".exercises {\r\n    background-color:#f0ffff;\r\n}\r\n\r\nfigcaption {\r\n\tmargin: .75em 0;\r\n\ttext-align: center;\r\n\tfont: italic 13px/18px Cambria, Georgia, \"Times New Roman\", Times, serif;\r\n}\r\n\r\nimg.bookfig {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.cl_caption {\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 92363:
/*!***************************************!*\
  !*** ./runestone/video/css/video.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./video.css */ 96895);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_video_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_video_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 48657:
/*!**********************************************!*\
  !*** ./runestone/video/js/runestonevideo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/video.css */ 92363);





var vidList = [];
class RunestoneVideo extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        this.divid = opts.orig.id;
        this.container = $(`#${this.divid}`);
        this.caption = "YouTube";
        if (document.getElementById("youtubescript") == null) {
            let script = document.createElement("script");
            script.id = "youtubescript";
            script.src = "https://www.youtube.com/player_api";
            document.body.appendChild(script);
        }
        this.containerDiv = this.container[0].parentElement;
        this.addCaption("runestone");
        this.indicate_component_ready();
    }
}

window.onPlayerStateChange = function (event) {
    let rb = new _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default();
    let videoTime = event.target.getCurrentTime();
    let data = {
        event: "video",
        div_id: event.target.getIframe().id,
    };
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("playing " + event.target.getIframe().id);
        data.act = "play:" + videoTime;
    } else if (event.data == YT.PlayerState.ENDED) {
        console.log("ended " + event.target.getIframe().id);
        data.act = "complete";
    } else if (event.data == YT.PlayerState.PAUSED) {
        console.log("paused at " + videoTime);
        data.act = "pause:" + videoTime;
    }
    rb.logBookEvent(data);
};

//Callback function to load youtube videos once IFrame Player loads
window.onYouTubeIframeAPIReady = function () {
    let videolist = $(".youtube-video");
    videolist.each(function (i, video) {
        let playerVars = {};
        playerVars["start"] = $(video).data("video-start");
        if ($(video).data("video-end") != -1)
            playerVars["end"] = $(video).data("video-end");
        let player = new YT.Player($(video).data("video-divid"), {
            height: $(video).data("video-height"),
            width: $(video).data("video-width"),
            videoId: $(video).data("video-videoid"),
            playerVars: playerVars,
            events: {
                onStateChange: window.onPlayerStateChange,
            },
        });
    });
};

//Need to make sure the YouTube IFrame Player API is not loaded until after
// all YouTube videos are in the DOM. Add a script tag with it after document is loaded
$(document).ready(function () {
    let script = document.createElement("script");
    script.src = "https://www.youtube.com/player_api";
    document.body.appendChild(script);
});

$(document).bind("runestone:login-complete", function () {
    $("[data-component=youtube]").each(function (index) {
        // MC
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        vidList[this.id] = new RunestoneVideo(opts);
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.youtube = function (opts) {
    return new RunestoneVideo(opts);
};

window.component_factory.vimeo = function (opts) {
    return new RunestoneVideo(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3ZpZGVvL2Nzcy92aWRlby5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS92aWRlby9jc3MvdmlkZW8uY3NzPzgwY2EiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS92aWRlby9qcy9ydW5lc3RvbmV2aWRlby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxzREFBc0QsaUNBQWlDLEtBQUssb0JBQW9CLHNCQUFzQix5QkFBeUIsaUZBQWlGLEtBQUsscUJBQXFCLDBCQUEwQiwyQkFBMkIsS0FBSyxxQkFBcUIsMkJBQTJCLDBCQUEwQixLQUFLLGVBQWUsZ0dBQWdHLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxzQ0FBc0MsaUNBQWlDLEtBQUssb0JBQW9CLHNCQUFzQix5QkFBeUIsaUZBQWlGLEtBQUsscUJBQXFCLDBCQUEwQiwyQkFBMkIsS0FBSyxxQkFBcUIsMkJBQTJCLDBCQUEwQixLQUFLLDJCQUEyQjtBQUNyaUM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B3RDtBQUMvRixZQUE2Rjs7QUFFN0Y7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsbUZBQU87Ozs7QUFJeEIsaUVBQWUsMEZBQWMsTUFBTSxFOzs7Ozs7Ozs7Ozs7OztBQ1p0Qjs7QUFFNkM7QUFDaEM7O0FBRTFCO0FBQ0EsNkJBQTZCLDZEQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw2REFBYTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6InJ1bmVzdG9uZV92aWRlb19qc19ydW5lc3RvbmV2aWRlb19qcy5idW5kbGUuanM/dj0zNGQ3ZGViYTc3YjA5YzEwZDFhNiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmV4ZXJjaXNlcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZmlnY2FwdGlvbiB7XFxyXFxuXFx0bWFyZ2luOiAuNzVlbSAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250OiBpdGFsaWMgMTNweC8xOHB4IENhbWJyaWEsIEdlb3JnaWEsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmltZy5ib29rZmlnIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNsX2NhcHRpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvdmlkZW8vY3NzL3ZpZGVvLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsd0VBQXdFO0FBQ3pFOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmV4ZXJjaXNlcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2YwZmZmZjtcXHJcXG59XFxyXFxuXFxyXFxuZmlnY2FwdGlvbiB7XFxyXFxuXFx0bWFyZ2luOiAuNzVlbSAwO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRmb250OiBpdGFsaWMgMTNweC8xOHB4IENhbWJyaWEsIEdlb3JnaWEsIFxcXCJUaW1lcyBOZXcgUm9tYW5cXFwiLCBUaW1lcywgc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmltZy5ib29rZmlnIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNsX2NhcHRpb24ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi92aWRlby5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZVwiO1xyXG5pbXBvcnQgXCIuLi9jc3MvdmlkZW8uY3NzXCI7XHJcblxyXG52YXIgdmlkTGlzdCA9IFtdO1xyXG5jbGFzcyBSdW5lc3RvbmVWaWRlbyBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcHRzLm9yaWcuaWQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKGAjJHt0aGlzLmRpdmlkfWApO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiWW91VHViZVwiO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXR1YmVzY3JpcHRcIikgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgICAgc2NyaXB0LmlkID0gXCJ5b3V0dWJlc2NyaXB0XCI7XHJcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IHRoaXMuY29udGFpbmVyWzBdLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xyXG4gICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5vblBsYXllclN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgcmIgPSBuZXcgUnVuZXN0b25lQmFzZSgpO1xyXG4gICAgbGV0IHZpZGVvVGltZSA9IGV2ZW50LnRhcmdldC5nZXRDdXJyZW50VGltZSgpO1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgZXZlbnQ6IFwidmlkZW9cIixcclxuICAgICAgICBkaXZfaWQ6IGV2ZW50LnRhcmdldC5nZXRJZnJhbWUoKS5pZCxcclxuICAgIH07XHJcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5aW5nIFwiICsgZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpLmlkKTtcclxuICAgICAgICBkYXRhLmFjdCA9IFwicGxheTpcIiArIHZpZGVvVGltZTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kZWQgXCIgKyBldmVudC50YXJnZXQuZ2V0SWZyYW1lKCkuaWQpO1xyXG4gICAgICAgIGRhdGEuYWN0ID0gXCJjb21wbGV0ZVwiO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGF1c2VkIGF0IFwiICsgdmlkZW9UaW1lKTtcclxuICAgICAgICBkYXRhLmFjdCA9IFwicGF1c2U6XCIgKyB2aWRlb1RpbWU7XHJcbiAgICB9XHJcbiAgICByYi5sb2dCb29rRXZlbnQoZGF0YSk7XHJcbn07XHJcblxyXG4vL0NhbGxiYWNrIGZ1bmN0aW9uIHRvIGxvYWQgeW91dHViZSB2aWRlb3Mgb25jZSBJRnJhbWUgUGxheWVyIGxvYWRzXHJcbndpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB2aWRlb2xpc3QgPSAkKFwiLnlvdXR1YmUtdmlkZW9cIik7XHJcbiAgICB2aWRlb2xpc3QuZWFjaChmdW5jdGlvbiAoaSwgdmlkZW8pIHtcclxuICAgICAgICBsZXQgcGxheWVyVmFycyA9IHt9O1xyXG4gICAgICAgIHBsYXllclZhcnNbXCJzdGFydFwiXSA9ICQodmlkZW8pLmRhdGEoXCJ2aWRlby1zdGFydFwiKTtcclxuICAgICAgICBpZiAoJCh2aWRlbykuZGF0YShcInZpZGVvLWVuZFwiKSAhPSAtMSlcclxuICAgICAgICAgICAgcGxheWVyVmFyc1tcImVuZFwiXSA9ICQodmlkZW8pLmRhdGEoXCJ2aWRlby1lbmRcIik7XHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJCh2aWRlbykuZGF0YShcInZpZGVvLWRpdmlkXCIpLCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJCh2aWRlbykuZGF0YShcInZpZGVvLWhlaWdodFwiKSxcclxuICAgICAgICAgICAgd2lkdGg6ICQodmlkZW8pLmRhdGEoXCJ2aWRlby13aWR0aFwiKSxcclxuICAgICAgICAgICAgdmlkZW9JZDogJCh2aWRlbykuZGF0YShcInZpZGVvLXZpZGVvaWRcIiksXHJcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHBsYXllclZhcnMsXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgb25TdGF0ZUNoYW5nZTogd2luZG93Lm9uUGxheWVyU3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vTmVlZCB0byBtYWtlIHN1cmUgdGhlIFlvdVR1YmUgSUZyYW1lIFBsYXllciBBUEkgaXMgbm90IGxvYWRlZCB1bnRpbCBhZnRlclxyXG4vLyBhbGwgWW91VHViZSB2aWRlb3MgYXJlIGluIHRoZSBET00uIEFkZCBhIHNjcmlwdCB0YWcgd2l0aCBpdCBhZnRlciBkb2N1bWVudCBpcyBsb2FkZWRcclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5ZXJfYXBpXCI7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbn0pO1xyXG5cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXlvdXR1YmVdXCIpLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgLy8gTUNcclxuICAgICAgICB2YXIgb3B0cyA9IHtcclxuICAgICAgICAgICAgb3JpZzogdGhpcyxcclxuICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IGVCb29rQ29uZmlnLnVzZVJ1bmVzdG9uZVNlcnZpY2VzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmlkTGlzdFt0aGlzLmlkXSA9IG5ldyBSdW5lc3RvbmVWaWRlbyhvcHRzKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcclxufVxyXG53aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkueW91dHViZSA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICByZXR1cm4gbmV3IFJ1bmVzdG9uZVZpZGVvKG9wdHMpO1xyXG59O1xyXG5cclxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LnZpbWVvID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIHJldHVybiBuZXcgUnVuZXN0b25lVmlkZW8ob3B0cyk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=