(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_codelens_js_codelens_js"],{

/***/ 51949:
/*!********************************************!*\
  !*** ./runestone/codelens/css/pytutor.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 12882:
/*!*******************************************!*\
  !*** ./runestone/codelens/js/codelens.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _pytutor_embed_bundle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pytutor-embed.bundle.js */ 71951);
/* harmony import */ var _pytutor_embed_bundle_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pytutor_embed_bundle_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_pytutor_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../css/pytutor.css */ 51949);
/**
 * Created by bmiller on 5/10/15.
 */

/*
 Since I don't want to modify the codelens code I'll attach the logging functionality this way.
 This actually seems like a better way to do it maybe across the board to separate logging
 from the real funcionality.  It would also allow a better way of turning off/on logging..
 As long as Philip doesn't go and change the id values for the buttons and slider this will
 continue to work.... In the best of all worlds we might add a function to the visualizer to
 return the buttons, but I'm having a hard time thinking of any other use for that besides mine.
 */





function attachLoggers(codelens, divid) {
    let rb = new _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default();
    codelens.domRoot.find("#jmpFirstInstr").click(function () {
        rb.logBookEvent({ event: "codelens", act: "first", div_id: divid });
    });
    codelens.domRoot.find("#jmpLastInstr").click(function () {
        rb.logBookEvent({ event: "codelens", act: "last", div_id: divid });
    });
    codelens.domRoot.find("#jmpStepBack").click(function () {
        rb.logBookEvent({ event: "codelens", act: "back", div_id: divid });
    });
    codelens.domRoot.find("#jmpStepFwd").click(function () {
        rb.logBookEvent({ event: "codelens", act: "fwd", div_id: divid });
    });
    codelens.domRoot.find("#executionSlider").bind("slide", function (evt, ui) {
        rb.logBookEvent({ event: "codelens", act: "slide", div_id: divid });
    });
    // TODO: The component isn't quite fully initialized, but it also doesn't inherit from RunestoneBase. This is a convenient place to mark it ready for now, but it should be moved forward in time during a rewrite.
    rb.containerDiv = document.getElementById(divid);
    rb.indicate_component_ready();
}

function styleButtons(divid) {
    var myVis = $("#" + divid);
    $(myVis).find("#jmpFirstInstr").addClass("btn btn-default");
    $(myVis).find("#jmpStepBack").addClass("btn btn-danger");
    $(myVis).find("#jmpStepFwd").addClass("btn btn-success");
    $(myVis).find("#jmpLastInstr").addClass("btn btn-default");
}

if (typeof allVsualizers === "undefined") {
    window.allVisualizers = [];
}

$(function () {
    if (typeof allTraceData !== "undefined") {
        for (let divid in allTraceData) {
            let cl = document.getElementById(divid);
            let lang = $(cl).data("params").lang;
            try {
                let vis = addVisualizerToPage(allTraceData[divid], divid, {
                    startingInstruction: 0,
                    editCodeBaseURL: null,
                    hideCode: false,
                    lang: lang,
                });
                attachLoggers(vis, divid);
                styleButtons(divid);
                window.allVisualizers.push(vis);
            } catch (err) {
                console.log(`Error rendering CodeLens Problem ${divid}`);
                console.log(err);
            }
        }
        window.addEventListener("codelens:answer", function (evt) {
            let rb = new _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_0__.default();
            rb.logBookEvent({
                event: "codelens",
                div_id: evt.detail.divid,
                act: `answer:${evt.detail.answer}`,
                correct: evt.detail.correct,
            });
            console.log(evt);
        });
    }
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL2NvZGVsZW5zL2Nzcy9weXR1dG9yLmNzcz83NTQzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvY29kZWxlbnMvanMvY29kZWxlbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2RDtBQUMxQjtBQUNMOztBQUU5QjtBQUNBLGlCQUFpQixnRUFBYTtBQUM5QjtBQUNBLHlCQUF5QixpREFBaUQ7QUFDMUUsS0FBSztBQUNMO0FBQ0EseUJBQXlCLGdEQUFnRDtBQUN6RSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsZ0RBQWdEO0FBQ3pFLEtBQUs7QUFDTDtBQUNBLHlCQUF5QiwrQ0FBK0M7QUFDeEUsS0FBSztBQUNMO0FBQ0EseUJBQXlCLGlEQUFpRDtBQUMxRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLGdFQUFnRSxNQUFNO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdFQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixrQkFBa0I7QUFDakQ7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDIiwiZmlsZSI6InJ1bmVzdG9uZV9jb2RlbGVuc19qc19jb2RlbGVuc19qcy5idW5kbGUuanM/dj1jZWJiNGQ5NGZiZGIzZmQ2ODUyNCIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGJtaWxsZXIgb24gNS8xMC8xNS5cclxuICovXHJcblxyXG4vKlxyXG4gU2luY2UgSSBkb24ndCB3YW50IHRvIG1vZGlmeSB0aGUgY29kZWxlbnMgY29kZSBJJ2xsIGF0dGFjaCB0aGUgbG9nZ2luZyBmdW5jdGlvbmFsaXR5IHRoaXMgd2F5LlxyXG4gVGhpcyBhY3R1YWxseSBzZWVtcyBsaWtlIGEgYmV0dGVyIHdheSB0byBkbyBpdCBtYXliZSBhY3Jvc3MgdGhlIGJvYXJkIHRvIHNlcGFyYXRlIGxvZ2dpbmdcclxuIGZyb20gdGhlIHJlYWwgZnVuY2lvbmFsaXR5LiAgSXQgd291bGQgYWxzbyBhbGxvdyBhIGJldHRlciB3YXkgb2YgdHVybmluZyBvZmYvb24gbG9nZ2luZy4uXHJcbiBBcyBsb25nIGFzIFBoaWxpcCBkb2Vzbid0IGdvIGFuZCBjaGFuZ2UgdGhlIGlkIHZhbHVlcyBmb3IgdGhlIGJ1dHRvbnMgYW5kIHNsaWRlciB0aGlzIHdpbGxcclxuIGNvbnRpbnVlIHRvIHdvcmsuLi4uIEluIHRoZSBiZXN0IG9mIGFsbCB3b3JsZHMgd2UgbWlnaHQgYWRkIGEgZnVuY3Rpb24gdG8gdGhlIHZpc3VhbGl6ZXIgdG9cclxuIHJldHVybiB0aGUgYnV0dG9ucywgYnV0IEknbSBoYXZpbmcgYSBoYXJkIHRpbWUgdGhpbmtpbmcgb2YgYW55IG90aGVyIHVzZSBmb3IgdGhhdCBiZXNpZGVzIG1pbmUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XHJcbmltcG9ydCBcIi4vcHl0dXRvci1lbWJlZC5idW5kbGUuanNcIjtcclxuaW1wb3J0IFwiLi8uLi9jc3MvcHl0dXRvci5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIGF0dGFjaExvZ2dlcnMoY29kZWxlbnMsIGRpdmlkKSB7XHJcbiAgICBsZXQgcmIgPSBuZXcgUnVuZXN0b25lQmFzZSgpO1xyXG4gICAgY29kZWxlbnMuZG9tUm9vdC5maW5kKFwiI2ptcEZpcnN0SW5zdHJcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJiLmxvZ0Jvb2tFdmVudCh7IGV2ZW50OiBcImNvZGVsZW5zXCIsIGFjdDogXCJmaXJzdFwiLCBkaXZfaWQ6IGRpdmlkIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb2RlbGVucy5kb21Sb290LmZpbmQoXCIjam1wTGFzdEluc3RyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByYi5sb2dCb29rRXZlbnQoeyBldmVudDogXCJjb2RlbGVuc1wiLCBhY3Q6IFwibGFzdFwiLCBkaXZfaWQ6IGRpdmlkIH0pO1xyXG4gICAgfSk7XHJcbiAgICBjb2RlbGVucy5kb21Sb290LmZpbmQoXCIjam1wU3RlcEJhY2tcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJiLmxvZ0Jvb2tFdmVudCh7IGV2ZW50OiBcImNvZGVsZW5zXCIsIGFjdDogXCJiYWNrXCIsIGRpdl9pZDogZGl2aWQgfSk7XHJcbiAgICB9KTtcclxuICAgIGNvZGVsZW5zLmRvbVJvb3QuZmluZChcIiNqbXBTdGVwRndkXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByYi5sb2dCb29rRXZlbnQoeyBldmVudDogXCJjb2RlbGVuc1wiLCBhY3Q6IFwiZndkXCIsIGRpdl9pZDogZGl2aWQgfSk7XHJcbiAgICB9KTtcclxuICAgIGNvZGVsZW5zLmRvbVJvb3QuZmluZChcIiNleGVjdXRpb25TbGlkZXJcIikuYmluZChcInNsaWRlXCIsIGZ1bmN0aW9uIChldnQsIHVpKSB7XHJcbiAgICAgICAgcmIubG9nQm9va0V2ZW50KHsgZXZlbnQ6IFwiY29kZWxlbnNcIiwgYWN0OiBcInNsaWRlXCIsIGRpdl9pZDogZGl2aWQgfSk7XHJcbiAgICB9KTtcclxuICAgIC8vIFRPRE86IFRoZSBjb21wb25lbnQgaXNuJ3QgcXVpdGUgZnVsbHkgaW5pdGlhbGl6ZWQsIGJ1dCBpdCBhbHNvIGRvZXNuJ3QgaW5oZXJpdCBmcm9tIFJ1bmVzdG9uZUJhc2UuIFRoaXMgaXMgYSBjb252ZW5pZW50IHBsYWNlIHRvIG1hcmsgaXQgcmVhZHkgZm9yIG5vdywgYnV0IGl0IHNob3VsZCBiZSBtb3ZlZCBmb3J3YXJkIGluIHRpbWUgZHVyaW5nIGEgcmV3cml0ZS5cclxuICAgIHJiLmNvbnRhaW5lckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdmlkKTtcclxuICAgIHJiLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdHlsZUJ1dHRvbnMoZGl2aWQpIHtcclxuICAgIHZhciBteVZpcyA9ICQoXCIjXCIgKyBkaXZpZCk7XHJcbiAgICAkKG15VmlzKS5maW5kKFwiI2ptcEZpcnN0SW5zdHJcIikuYWRkQ2xhc3MoXCJidG4gYnRuLWRlZmF1bHRcIik7XHJcbiAgICAkKG15VmlzKS5maW5kKFwiI2ptcFN0ZXBCYWNrXCIpLmFkZENsYXNzKFwiYnRuIGJ0bi1kYW5nZXJcIik7XHJcbiAgICAkKG15VmlzKS5maW5kKFwiI2ptcFN0ZXBGd2RcIikuYWRkQ2xhc3MoXCJidG4gYnRuLXN1Y2Nlc3NcIik7XHJcbiAgICAkKG15VmlzKS5maW5kKFwiI2ptcExhc3RJbnN0clwiKS5hZGRDbGFzcyhcImJ0biBidG4tZGVmYXVsdFwiKTtcclxufVxyXG5cclxuaWYgKHR5cGVvZiBhbGxWc3VhbGl6ZXJzID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICB3aW5kb3cuYWxsVmlzdWFsaXplcnMgPSBbXTtcclxufVxyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIGFsbFRyYWNlRGF0YSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGZvciAobGV0IGRpdmlkIGluIGFsbFRyYWNlRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgY2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZpZCk7XHJcbiAgICAgICAgICAgIGxldCBsYW5nID0gJChjbCkuZGF0YShcInBhcmFtc1wiKS5sYW5nO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZpcyA9IGFkZFZpc3VhbGl6ZXJUb1BhZ2UoYWxsVHJhY2VEYXRhW2RpdmlkXSwgZGl2aWQsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ0luc3RydWN0aW9uOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkaXRDb2RlQmFzZVVSTDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBoaWRlQ29kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZzogbGFuZyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYXR0YWNoTG9nZ2Vycyh2aXMsIGRpdmlkKTtcclxuICAgICAgICAgICAgICAgIHN0eWxlQnV0dG9ucyhkaXZpZCk7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxsVmlzdWFsaXplcnMucHVzaCh2aXMpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgQ29kZUxlbnMgUHJvYmxlbSAke2RpdmlkfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNvZGVsZW5zOmFuc3dlclwiLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGxldCByYiA9IG5ldyBSdW5lc3RvbmVCYXNlKCk7XHJcbiAgICAgICAgICAgIHJiLmxvZ0Jvb2tFdmVudCh7XHJcbiAgICAgICAgICAgICAgICBldmVudDogXCJjb2RlbGVuc1wiLFxyXG4gICAgICAgICAgICAgICAgZGl2X2lkOiBldnQuZGV0YWlsLmRpdmlkLFxyXG4gICAgICAgICAgICAgICAgYWN0OiBgYW5zd2VyOiR7ZXZ0LmRldGFpbC5hbnN3ZXJ9YCxcclxuICAgICAgICAgICAgICAgIGNvcnJlY3Q6IGV2dC5kZXRhaWwuY29ycmVjdCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2dCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
