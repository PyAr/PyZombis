(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_webwork_js_webwork_js"],{

/***/ 66142:
/*!*****************************************!*\
  !*** ./runestone/webwork/js/webwork.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);


class WebWork extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
    }
}

let rb = new WebWork();

function logWebWork(e, data) {
    var correct = false;
    let correctCount = 0;
    let qCount = 0;
    let actString = "check:";
    for (let k of Object.keys(data.rh_result.answers)) {
        qCount += 1;
        if (data.rh_result.answers[k].score == 1) {
            correctCount += 1;
        }
        actString += `actual:${data.rh_result.answers[k].student_ans}:expected:${data.rh_result.answers[k].correct_value}:`;
    }
    let pct = correctCount / qCount;
    actString += `correct:${correctCount}:count:${qCount}:pct:${pct}`;
    if (pct == 1.0) {
        correct = true;
    }
    rb.logBookEvent({
        event: "webwork",
        div_id: data.ww_id,
        act: actString,
        correct: correct,
    });
}

function logShowCorrect(e, data) {
    rb.logBookEvent({
        event: "webwork",
        div_id: data.ww_id,
        act: "show",
    });
}

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.webwork = function (opts) {
    return new WebWork();
};

$(document).ready(function () {
    $("body").on("runestone_ww_check", logWebWork);
    $("body").on("runestone_show_correct", logShowCorrect);
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYndvcmsvanMvd2Vid29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQsc0JBQXNCLDZEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNDQUFzQyxZQUFZLHdDQUF3QztBQUN6SDtBQUNBO0FBQ0EsNEJBQTRCLGFBQWEsU0FBUyxPQUFPLE9BQU8sSUFBSTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InJ1bmVzdG9uZV93ZWJ3b3JrX2pzX3dlYndvcmtfanMuYnVuZGxlLmpzP3Y9MmExNjNiYmFiMWJiNDYxM2Q0MjIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2VcIjtcclxuXHJcbmNsYXNzIFdlYldvcmsgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHJiID0gbmV3IFdlYldvcmsoKTtcclxuXHJcbmZ1bmN0aW9uIGxvZ1dlYldvcmsoZSwgZGF0YSkge1xyXG4gICAgdmFyIGNvcnJlY3QgPSBmYWxzZTtcclxuICAgIGxldCBjb3JyZWN0Q291bnQgPSAwO1xyXG4gICAgbGV0IHFDb3VudCA9IDA7XHJcbiAgICBsZXQgYWN0U3RyaW5nID0gXCJjaGVjazpcIjtcclxuICAgIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YS5yaF9yZXN1bHQuYW5zd2VycykpIHtcclxuICAgICAgICBxQ291bnQgKz0gMTtcclxuICAgICAgICBpZiAoZGF0YS5yaF9yZXN1bHQuYW5zd2Vyc1trXS5zY29yZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNvcnJlY3RDb3VudCArPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhY3RTdHJpbmcgKz0gYGFjdHVhbDoke2RhdGEucmhfcmVzdWx0LmFuc3dlcnNba10uc3R1ZGVudF9hbnN9OmV4cGVjdGVkOiR7ZGF0YS5yaF9yZXN1bHQuYW5zd2Vyc1trXS5jb3JyZWN0X3ZhbHVlfTpgO1xyXG4gICAgfVxyXG4gICAgbGV0IHBjdCA9IGNvcnJlY3RDb3VudCAvIHFDb3VudDtcclxuICAgIGFjdFN0cmluZyArPSBgY29ycmVjdDoke2NvcnJlY3RDb3VudH06Y291bnQ6JHtxQ291bnR9OnBjdDoke3BjdH1gO1xyXG4gICAgaWYgKHBjdCA9PSAxLjApIHtcclxuICAgICAgICBjb3JyZWN0ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJiLmxvZ0Jvb2tFdmVudCh7XHJcbiAgICAgICAgZXZlbnQ6IFwid2Vid29ya1wiLFxyXG4gICAgICAgIGRpdl9pZDogZGF0YS53d19pZCxcclxuICAgICAgICBhY3Q6IGFjdFN0cmluZyxcclxuICAgICAgICBjb3JyZWN0OiBjb3JyZWN0LFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ1Nob3dDb3JyZWN0KGUsIGRhdGEpIHtcclxuICAgIHJiLmxvZ0Jvb2tFdmVudCh7XHJcbiAgICAgICAgZXZlbnQ6IFwid2Vid29ya1wiLFxyXG4gICAgICAgIGRpdl9pZDogZGF0YS53d19pZCxcclxuICAgICAgICBhY3Q6IFwic2hvd1wiLFxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmlmICh0eXBlb2Ygd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcclxufVxyXG5cclxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LndlYndvcmsgPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgcmV0dXJuIG5ldyBXZWJXb3JrKCk7XHJcbn07XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiYm9keVwiKS5vbihcInJ1bmVzdG9uZV93d19jaGVja1wiLCBsb2dXZWJXb3JrKTtcclxuICAgICQoXCJib2R5XCIpLm9uKFwicnVuZXN0b25lX3Nob3dfY29ycmVjdFwiLCBsb2dTaG93Q29ycmVjdCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9