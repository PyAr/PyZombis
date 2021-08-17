(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_video_js_runestonevideo_js"],{

/***/ 31786:
/*!***************************************!*\
  !*** ./runestone/video/css/video.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 48657:
/*!**********************************************!*\
  !*** ./runestone/video/js/runestonevideo.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/video.css */ 31786);





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
$(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3ZpZGVvL2Nzcy92aWRlby5jc3M/Y2UwMyIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3ZpZGVvL2pzL3J1bmVzdG9uZXZpZGVvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRTZDO0FBQ2hDOztBQUUxQjtBQUNBLDZCQUE2Qiw2REFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNkRBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJydW5lc3RvbmVfdmlkZW9fanNfcnVuZXN0b25ldmlkZW9fanMuYnVuZGxlLmpzP3Y9MWU5ZDU3YmRiZmVhOWY2NGU4NDciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZVwiO1xyXG5pbXBvcnQgXCIuLi9jc3MvdmlkZW8uY3NzXCI7XHJcblxyXG52YXIgdmlkTGlzdCA9IFtdO1xyXG5jbGFzcyBSdW5lc3RvbmVWaWRlbyBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcHRzLm9yaWcuaWQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSAkKGAjJHt0aGlzLmRpdmlkfWApO1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IFwiWW91VHViZVwiO1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInlvdXR1YmVzY3JpcHRcIikgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgICAgICAgICAgc2NyaXB0LmlkID0gXCJ5b3V0dWJlc2NyaXB0XCI7XHJcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRhaW5lckRpdiA9IHRoaXMuY29udGFpbmVyWzBdLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xyXG4gICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5vblBsYXllclN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBsZXQgcmIgPSBuZXcgUnVuZXN0b25lQmFzZSgpO1xyXG4gICAgbGV0IHZpZGVvVGltZSA9IGV2ZW50LnRhcmdldC5nZXRDdXJyZW50VGltZSgpO1xyXG4gICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgZXZlbnQ6IFwidmlkZW9cIixcclxuICAgICAgICBkaXZfaWQ6IGV2ZW50LnRhcmdldC5nZXRJZnJhbWUoKS5pZCxcclxuICAgIH07XHJcbiAgICBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5aW5nIFwiICsgZXZlbnQudGFyZ2V0LmdldElmcmFtZSgpLmlkKTtcclxuICAgICAgICBkYXRhLmFjdCA9IFwicGxheTpcIiArIHZpZGVvVGltZTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQuZGF0YSA9PSBZVC5QbGF5ZXJTdGF0ZS5FTkRFRCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZW5kZWQgXCIgKyBldmVudC50YXJnZXQuZ2V0SWZyYW1lKCkuaWQpO1xyXG4gICAgICAgIGRhdGEuYWN0ID0gXCJjb21wbGV0ZVwiO1xyXG4gICAgfSBlbHNlIGlmIChldmVudC5kYXRhID09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGF1c2VkIGF0IFwiICsgdmlkZW9UaW1lKTtcclxuICAgICAgICBkYXRhLmFjdCA9IFwicGF1c2U6XCIgKyB2aWRlb1RpbWU7XHJcbiAgICB9XHJcbiAgICByYi5sb2dCb29rRXZlbnQoZGF0YSk7XHJcbn07XHJcblxyXG4vL0NhbGxiYWNrIGZ1bmN0aW9uIHRvIGxvYWQgeW91dHViZSB2aWRlb3Mgb25jZSBJRnJhbWUgUGxheWVyIGxvYWRzXHJcbndpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCB2aWRlb2xpc3QgPSAkKFwiLnlvdXR1YmUtdmlkZW9cIik7XHJcbiAgICB2aWRlb2xpc3QuZWFjaChmdW5jdGlvbiAoaSwgdmlkZW8pIHtcclxuICAgICAgICBsZXQgcGxheWVyVmFycyA9IHt9O1xyXG4gICAgICAgIHBsYXllclZhcnNbXCJzdGFydFwiXSA9ICQodmlkZW8pLmRhdGEoXCJ2aWRlby1zdGFydFwiKTtcclxuICAgICAgICBpZiAoJCh2aWRlbykuZGF0YShcInZpZGVvLWVuZFwiKSAhPSAtMSlcclxuICAgICAgICAgICAgcGxheWVyVmFyc1tcImVuZFwiXSA9ICQodmlkZW8pLmRhdGEoXCJ2aWRlby1lbmRcIik7XHJcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJCh2aWRlbykuZGF0YShcInZpZGVvLWRpdmlkXCIpLCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogJCh2aWRlbykuZGF0YShcInZpZGVvLWhlaWdodFwiKSxcclxuICAgICAgICAgICAgd2lkdGg6ICQodmlkZW8pLmRhdGEoXCJ2aWRlby13aWR0aFwiKSxcclxuICAgICAgICAgICAgdmlkZW9JZDogJCh2aWRlbykuZGF0YShcInZpZGVvLXZpZGVvaWRcIiksXHJcbiAgICAgICAgICAgIHBsYXllclZhcnM6IHBsYXllclZhcnMsXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgb25TdGF0ZUNoYW5nZTogd2luZG93Lm9uUGxheWVyU3RhdGVDaGFuZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbi8vTmVlZCB0byBtYWtlIHN1cmUgdGhlIFlvdVR1YmUgSUZyYW1lIFBsYXllciBBUEkgaXMgbm90IGxvYWRlZCB1bnRpbCBhZnRlclxyXG4vLyBhbGwgWW91VHViZSB2aWRlb3MgYXJlIGluIHRoZSBET00uIEFkZCBhIHNjcmlwdCB0YWcgd2l0aCBpdCBhZnRlciBkb2N1bWVudCBpcyBsb2FkZWRcclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3BsYXllcl9hcGlcIjtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCJbZGF0YS1jb21wb25lbnQ9eW91dHViZV1cIikuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICAvLyBNQ1xyXG4gICAgICAgIHZhciBvcHRzID0ge1xyXG4gICAgICAgICAgICBvcmlnOiB0aGlzLFxyXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2aWRMaXN0W3RoaXMuaWRdID0gbmV3IFJ1bmVzdG9uZVZpZGVvKG9wdHMpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xyXG59XHJcbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS55b3V0dWJlID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIHJldHVybiBuZXcgUnVuZXN0b25lVmlkZW8ob3B0cyk7XHJcbn07XHJcblxyXG53aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkudmltZW8gPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgcmV0dXJuIG5ldyBSdW5lc3RvbmVWaWRlbyhvcHRzKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
