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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3dlYndvcmsvanMvd2Vid29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDs7QUFFMUQsc0JBQXNCLDZEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHNDQUFzQyxZQUFZLHdDQUF3QztBQUN6SDtBQUNBO0FBQ0EsNEJBQTRCLGFBQWEsU0FBUyxPQUFPLE9BQU8sSUFBSTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InJ1bmVzdG9uZV93ZWJ3b3JrX2pzX3dlYndvcmtfanMuYnVuZGxlLmpzP3Y9NzU0YWMyODA5MmE4MTc5ZjcyMmMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2VcIjtcblxuY2xhc3MgV2ViV29yayBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICAgICAgc3VwZXIob3B0cyk7XG4gICAgfVxufVxuXG5sZXQgcmIgPSBuZXcgV2ViV29yaygpO1xuXG5mdW5jdGlvbiBsb2dXZWJXb3JrKGUsIGRhdGEpIHtcbiAgICB2YXIgY29ycmVjdCA9IGZhbHNlO1xuICAgIGxldCBjb3JyZWN0Q291bnQgPSAwO1xuICAgIGxldCBxQ291bnQgPSAwO1xuICAgIGxldCBhY3RTdHJpbmcgPSBcImNoZWNrOlwiO1xuICAgIGZvciAobGV0IGsgb2YgT2JqZWN0LmtleXMoZGF0YS5yaF9yZXN1bHQuYW5zd2VycykpIHtcbiAgICAgICAgcUNvdW50ICs9IDE7XG4gICAgICAgIGlmIChkYXRhLnJoX3Jlc3VsdC5hbnN3ZXJzW2tdLnNjb3JlID09IDEpIHtcbiAgICAgICAgICAgIGNvcnJlY3RDb3VudCArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGFjdFN0cmluZyArPSBgYWN0dWFsOiR7ZGF0YS5yaF9yZXN1bHQuYW5zd2Vyc1trXS5zdHVkZW50X2Fuc306ZXhwZWN0ZWQ6JHtkYXRhLnJoX3Jlc3VsdC5hbnN3ZXJzW2tdLmNvcnJlY3RfdmFsdWV9OmA7XG4gICAgfVxuICAgIGxldCBwY3QgPSBjb3JyZWN0Q291bnQgLyBxQ291bnQ7XG4gICAgYWN0U3RyaW5nICs9IGBjb3JyZWN0OiR7Y29ycmVjdENvdW50fTpjb3VudDoke3FDb3VudH06cGN0OiR7cGN0fWA7XG4gICAgaWYgKHBjdCA9PSAxLjApIHtcbiAgICAgICAgY29ycmVjdCA9IHRydWU7XG4gICAgfVxuICAgIHJiLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgIGV2ZW50OiBcIndlYndvcmtcIixcbiAgICAgICAgZGl2X2lkOiBkYXRhLnd3X2lkLFxuICAgICAgICBhY3Q6IGFjdFN0cmluZyxcbiAgICAgICAgY29ycmVjdDogY29ycmVjdCxcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gbG9nU2hvd0NvcnJlY3QoZSwgZGF0YSkge1xuICAgIHJiLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgIGV2ZW50OiBcIndlYndvcmtcIixcbiAgICAgICAgZGl2X2lkOiBkYXRhLnd3X2lkLFxuICAgICAgICBhY3Q6IFwic2hvd1wiLFxuICAgIH0pO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9IHt9O1xufVxuXG53aW5kb3cuY29tcG9uZW50X2ZhY3Rvcnkud2Vid29yayA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBXZWJXb3JrKCk7XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgJChcImJvZHlcIikub24oXCJydW5lc3RvbmVfd3dfY2hlY2tcIiwgbG9nV2ViV29yayk7XG4gICAgJChcImJvZHlcIikub24oXCJydW5lc3RvbmVfc2hvd19jb3JyZWN0XCIsIGxvZ1Nob3dDb3JyZWN0KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==