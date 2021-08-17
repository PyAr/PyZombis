(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_showeval_js_showEval_js"],{

/***/ 83320:
/*!*********************************************!*\
  !*** ./runestone/showeval/css/showEval.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 6224:
/*!*******************************************!*\
  !*** ./runestone/showeval/js/showEval.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowEval": () => (/* binding */ ShowEval)
/* harmony export */ });
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var _css_showEval_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/showEval.css */ 83320);
/*
This component is based on ...
ShowEval, a JS module for creating visualizations of expression evaluation. Mainly for programming tutorials.
0.9.1

Al Sweigart
al@inventwithpython.com
https://github.com/asweigart/
*/





var seList = [];

class ShowEval extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        this.divid = opts.orig.id;
        this.containerDiv = opts.orig;
        this.containerDiv.classList.add("showEval");
        let steps = [];
        for (let s of opts.raw) {
            steps.push(s.replace(/\\/g, ""));
        }
        this.steps = steps.slice();
        this.currentStep = 0;
        this.createTrace = $(opts.orig).data("tracemode"); // TODO - reset doesn't work for traces
        this.rb = new _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default(opts);
        // create elements
        this.currentStepDiv = $("<div>").addClass("currentStepDiv");
        $(this.containerDiv).append(this.currentStepDiv);
        this.currentStepDiv.append($("<span>").addClass("pre"));
        this.currentStepDiv.append($("<span>").addClass("eval"));
        this.currentStepDiv.append($("<span>").addClass("post"));
        this.currentStepDiv.append($("<div>").addClass("anno"));
        this.setNextButton(`#${this.divid}_nextStep`);
        this.setResetButton(`#${this.divid}_reset`);

        // parse steps and turn into a 4-string array: ['pre', 'before eval', 'after eval', 'post']
        for (var i = 0; i < this.steps.length; i++) {
            var s = this.steps[i];
            let endpoint, pItem, comment;

            if (s.includes("##")) {
                // If there is an annotation
                endpoint = s.indexOf("##");
                comment = s.substring(endpoint + 2, s.length);
            } else {
                endpoint = s.length;
                comment = false;
            }
            this.steps[i] = [
                s.substring(0, s.indexOf("{{")), // 'pre'
                s.substring(s.indexOf("{{") + 2, s.indexOf("}}{{")), // 'before eval'
                s.substring(
                    s.indexOf("}}{{") + 4,
                    s.indexOf("}}", s.indexOf("}}{{") + 4)
                ), // 'after eval'
                s.substring(
                    s.indexOf("}}", s.indexOf("}}{{") + 4) + 2,
                    endpoint
                ),
            ]; // 'post'

            this.steps[i].push(comment); // 'anno'
        }
        this.reset();
        this.caption = "ShowEval";
        this.addCaption("runestone");
        this.indicate_component_ready();
    }

    setNextButton(nextButtonSelector) {
        var thisObj = this; // uhg, javascript
        $(nextButtonSelector).click(function () {
            thisObj.evaluateStep(nextButtonSelector);
        });
    }

    setResetButton(resetButtonSelector) {
        var thisObj = this; // uhg, javascript
        $(resetButtonSelector).click(function () {
            thisObj.reset(0);
        });
    }

    reset() {
        $(this.containerDiv).find(".previousStep").remove();
        this.setStep(0);
        this.rb.logBookEvent({
            event: "showeval",
            act: "reset",
            div_id: this.containerDiv.id,
        });
    }

    setStep(step) {
        this.currentStep = step;
        let newWidth = this.getWidth(this.steps[this.currentStep][1]);
        if (this.steps[step][4]) {
            this.currentStepDiv.children(".anno").html(this.steps[step][4]);
            this.currentStepDiv.children(".anno").show();
        } else {
            this.currentStepDiv.children(".anno").hide();
        }
        this.currentStepDiv.children(".eval").width(newWidth);
        this.currentStepDiv.children(".pre").html(this.steps[step][0]);
        this.currentStepDiv.children(".eval").html(this.steps[step][1]);
        this.currentStepDiv.children(".post").html(this.steps[step][3]);
    }

    getWidth(text) {
        // TODO - class style must match or else width will be off.
        var newElem = $("<div>")
            .addClass("showEval evalCont")
            .hide()
            .html(text);
        $("body").append(newElem);
        var newWidth = newElem.width() + 1; // +1 is a hack
        newElem.remove();

        return newWidth;
    }

    createPreviousStepDiv(step) {
        this.currentStepDiv.before(
            $("<div>")
                .addClass("previousStep")
                .html(
                    this.steps[step][0] +
                        this.steps[step][1] +
                        this.steps[step][3]
                )
        );
    }

    evaluateStep(buttonId, step) {
        this.currentStepDiv.children(".anno").hide();
        $(buttonId).attr("disabled", true);
        if (step === undefined) {
            step = this.currentStep;
        }
        if (this.currentStep >= this.steps.length) {
            //this.currentStep = 0;
            //step = 0;
            $(buttonId).attr("disabled", false);
            return; // do nothing if on last step
        }
        //this.setStep(step);

        var fadeInSpeed = 0;
        if (this.createTrace) {
            this.createPreviousStepDiv(step);
            this.currentStepDiv.hide();
            fadeInSpeed = 200;
        }

        let newWidth = this.getWidth(this.steps[step][2]);
        var evalElem = this.currentStepDiv.children(".eval");

        var thisShowEval = this;

        evalElem.css("color", "red");

        this.currentStepDiv.fadeTo(fadeInSpeed, 1, function () {
            window.setTimeout(function () {
                evalElem.fadeTo(400, 0, function () {
                    //evalElem.css('overflow', 'hidden');
                    evalElem.animate(
                        { width: newWidth, duration: 400 },
                        function () {
                            evalElem.html(thisShowEval.steps[step][2]);
                            evalElem.fadeTo(400, 1, function () {
                                window.setTimeout(function () {
                                    //evalElem.css('overflow', 'visible');
                                    evalElem.css("color", "#333");
                                    thisShowEval.currentStep += 1;
                                    if (
                                        thisShowEval.currentStep <
                                        thisShowEval.steps.length
                                    ) {
                                        thisShowEval.setStep(
                                            thisShowEval.currentStep
                                        );
                                    }
                                    $(buttonId).attr("disabled", false);
                                }, 600);
                            });
                        }
                    );
                });
            }, 600);
        });

        this.rb.logBookEvent({
            event: "showeval",
            act: "next",
            div_id: this.containerDiv.id,
        });
    }
}

/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).bind("runestone:login-complete", function () {
    $("[data-component=showeval]").each(function (index) {
        // MC
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        opts.raw = window.raw_steps[this.id];
        if ($(this).closest("[data-component=timedAssessment]").length == 0) {
            // If this element exists within a timed component, don't render it here
            seList[this.id] = new ShowEval(opts);
        }
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory["showeval"] = function (opts) {
    return new ShowEval(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3Nob3dldmFsL2Nzcy9zaG93RXZhbC5jc3M/NDQ1ZiIsIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3Nob3dldmFsL2pzL3Nob3dFdmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFNkM7QUFDN0I7O0FBRTdCOztBQUVPLHVCQUF1Qiw2REFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEO0FBQzFELHNCQUFzQiw2REFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDLGdDQUFnQyxXQUFXOztBQUUzQztBQUNBLHVCQUF1Qix1QkFBdUI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qyx5Q0FBeUMsdUJBQXVCO0FBQ2hFO0FBQ0EsbUNBQW1DO0FBQ25DLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTtBQUNBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTtBQUNBLGNBQWM7O0FBRWQsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUNBQWlDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicnVuZXN0b25lX3Nob3dldmFsX2pzX3Nob3dFdmFsX2pzLmJ1bmRsZS5qcz92PWJhZGFmMWU3ZjVhMDhlNDg2YjIwIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLypcclxuVGhpcyBjb21wb25lbnQgaXMgYmFzZWQgb24gLi4uXHJcblNob3dFdmFsLCBhIEpTIG1vZHVsZSBmb3IgY3JlYXRpbmcgdmlzdWFsaXphdGlvbnMgb2YgZXhwcmVzc2lvbiBldmFsdWF0aW9uLiBNYWlubHkgZm9yIHByb2dyYW1taW5nIHR1dG9yaWFscy5cclxuMC45LjFcclxuXHJcbkFsIFN3ZWlnYXJ0XHJcbmFsQGludmVudHdpdGhweXRob24uY29tXHJcbmh0dHBzOi8vZ2l0aHViLmNvbS9hc3dlaWdhcnQvXHJcbiovXHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zaG93RXZhbC5jc3NcIjtcclxuXHJcbnZhciBzZUxpc3QgPSBbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTaG93RXZhbCBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHRoaXMuZGl2aWQgPSBvcHRzLm9yaWcuaWQ7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBvcHRzLm9yaWc7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcInNob3dFdmFsXCIpO1xyXG4gICAgICAgIGxldCBzdGVwcyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IHMgb2Ygb3B0cy5yYXcpIHtcclxuICAgICAgICAgICAgc3RlcHMucHVzaChzLnJlcGxhY2UoL1xcXFwvZywgXCJcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0ZXBzID0gc3RlcHMuc2xpY2UoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcclxuICAgICAgICB0aGlzLmNyZWF0ZVRyYWNlID0gJChvcHRzLm9yaWcpLmRhdGEoXCJ0cmFjZW1vZGVcIik7IC8vIFRPRE8gLSByZXNldCBkb2Vzbid0IHdvcmsgZm9yIHRyYWNlc1xyXG4gICAgICAgIHRoaXMucmIgPSBuZXcgUnVuZXN0b25lQmFzZShvcHRzKTtcclxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHNcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwRGl2ID0gJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiY3VycmVudFN0ZXBEaXZcIik7XHJcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuYXBwZW5kKHRoaXMuY3VycmVudFN0ZXBEaXYpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXBEaXYuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJwcmVcIikpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXBEaXYuYXBwZW5kKCQoXCI8c3Bhbj5cIikuYWRkQ2xhc3MoXCJldmFsXCIpKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwRGl2LmFwcGVuZCgkKFwiPHNwYW4+XCIpLmFkZENsYXNzKFwicG9zdFwiKSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcERpdi5hcHBlbmQoJChcIjxkaXY+XCIpLmFkZENsYXNzKFwiYW5ub1wiKSk7XHJcbiAgICAgICAgdGhpcy5zZXROZXh0QnV0dG9uKGAjJHt0aGlzLmRpdmlkfV9uZXh0U3RlcGApO1xyXG4gICAgICAgIHRoaXMuc2V0UmVzZXRCdXR0b24oYCMke3RoaXMuZGl2aWR9X3Jlc2V0YCk7XHJcblxyXG4gICAgICAgIC8vIHBhcnNlIHN0ZXBzIGFuZCB0dXJuIGludG8gYSA0LXN0cmluZyBhcnJheTogWydwcmUnLCAnYmVmb3JlIGV2YWwnLCAnYWZ0ZXIgZXZhbCcsICdwb3N0J11cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3RlcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHMgPSB0aGlzLnN0ZXBzW2ldO1xyXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnQsIHBJdGVtLCBjb21tZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKHMuaW5jbHVkZXMoXCIjI1wiKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gYW5ub3RhdGlvblxyXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQgPSBzLmluZGV4T2YoXCIjI1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnQgPSBzLnN1YnN0cmluZyhlbmRwb2ludCArIDIsIHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVuZHBvaW50ID0gcy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdGVwc1tpXSA9IFtcclxuICAgICAgICAgICAgICAgIHMuc3Vic3RyaW5nKDAsIHMuaW5kZXhPZihcInt7XCIpKSwgLy8gJ3ByZSdcclxuICAgICAgICAgICAgICAgIHMuc3Vic3RyaW5nKHMuaW5kZXhPZihcInt7XCIpICsgMiwgcy5pbmRleE9mKFwifX17e1wiKSksIC8vICdiZWZvcmUgZXZhbCdcclxuICAgICAgICAgICAgICAgIHMuc3Vic3RyaW5nKFxyXG4gICAgICAgICAgICAgICAgICAgIHMuaW5kZXhPZihcIn19e3tcIikgKyA0LFxyXG4gICAgICAgICAgICAgICAgICAgIHMuaW5kZXhPZihcIn19XCIsIHMuaW5kZXhPZihcIn19e3tcIikgKyA0KVxyXG4gICAgICAgICAgICAgICAgKSwgLy8gJ2FmdGVyIGV2YWwnXHJcbiAgICAgICAgICAgICAgICBzLnN1YnN0cmluZyhcclxuICAgICAgICAgICAgICAgICAgICBzLmluZGV4T2YoXCJ9fVwiLCBzLmluZGV4T2YoXCJ9fXt7XCIpICsgNCkgKyAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZHBvaW50XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBdOyAvLyAncG9zdCdcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0ucHVzaChjb21tZW50KTsgLy8gJ2Fubm8nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIlNob3dFdmFsXCI7XHJcbiAgICAgICAgdGhpcy5hZGRDYXB0aW9uKFwicnVuZXN0b25lXCIpO1xyXG4gICAgICAgIHRoaXMuaW5kaWNhdGVfY29tcG9uZW50X3JlYWR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV4dEJ1dHRvbihuZXh0QnV0dG9uU2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgdGhpc09iaiA9IHRoaXM7IC8vIHVoZywgamF2YXNjcmlwdFxyXG4gICAgICAgICQobmV4dEJ1dHRvblNlbGVjdG9yKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXNPYmouZXZhbHVhdGVTdGVwKG5leHRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVzZXRCdXR0b24ocmVzZXRCdXR0b25TZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciB0aGlzT2JqID0gdGhpczsgLy8gdWhnLCBqYXZhc2NyaXB0XHJcbiAgICAgICAgJChyZXNldEJ1dHRvblNlbGVjdG9yKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXNPYmoucmVzZXQoMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgJCh0aGlzLmNvbnRhaW5lckRpdikuZmluZChcIi5wcmV2aW91c1N0ZXBcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGVwKDApO1xyXG4gICAgICAgIHRoaXMucmIubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgZXZlbnQ6IFwic2hvd2V2YWxcIixcclxuICAgICAgICAgICAgYWN0OiBcInJlc2V0XCIsXHJcbiAgICAgICAgICAgIGRpdl9pZDogdGhpcy5jb250YWluZXJEaXYuaWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RlcChzdGVwKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHN0ZXA7XHJcbiAgICAgICAgbGV0IG5ld1dpZHRoID0gdGhpcy5nZXRXaWR0aCh0aGlzLnN0ZXBzW3RoaXMuY3VycmVudFN0ZXBdWzFdKTtcclxuICAgICAgICBpZiAodGhpcy5zdGVwc1tzdGVwXVs0XSkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwRGl2LmNoaWxkcmVuKFwiLmFubm9cIikuaHRtbCh0aGlzLnN0ZXBzW3N0ZXBdWzRdKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcERpdi5jaGlsZHJlbihcIi5hbm5vXCIpLnNob3coKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwRGl2LmNoaWxkcmVuKFwiLmFubm9cIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwRGl2LmNoaWxkcmVuKFwiLmV2YWxcIikud2lkdGgobmV3V2lkdGgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXBEaXYuY2hpbGRyZW4oXCIucHJlXCIpLmh0bWwodGhpcy5zdGVwc1tzdGVwXVswXSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcERpdi5jaGlsZHJlbihcIi5ldmFsXCIpLmh0bWwodGhpcy5zdGVwc1tzdGVwXVsxXSk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcERpdi5jaGlsZHJlbihcIi5wb3N0XCIpLmh0bWwodGhpcy5zdGVwc1tzdGVwXVszXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2lkdGgodGV4dCkge1xyXG4gICAgICAgIC8vIFRPRE8gLSBjbGFzcyBzdHlsZSBtdXN0IG1hdGNoIG9yIGVsc2Ugd2lkdGggd2lsbCBiZSBvZmYuXHJcbiAgICAgICAgdmFyIG5ld0VsZW0gPSAkKFwiPGRpdj5cIilcclxuICAgICAgICAgICAgLmFkZENsYXNzKFwic2hvd0V2YWwgZXZhbENvbnRcIilcclxuICAgICAgICAgICAgLmhpZGUoKVxyXG4gICAgICAgICAgICAuaHRtbCh0ZXh0KTtcclxuICAgICAgICAkKFwiYm9keVwiKS5hcHBlbmQobmV3RWxlbSk7XHJcbiAgICAgICAgdmFyIG5ld1dpZHRoID0gbmV3RWxlbS53aWR0aCgpICsgMTsgLy8gKzEgaXMgYSBoYWNrXHJcbiAgICAgICAgbmV3RWxlbS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld1dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVByZXZpb3VzU3RlcERpdihzdGVwKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcERpdi5iZWZvcmUoXHJcbiAgICAgICAgICAgICQoXCI8ZGl2PlwiKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKFwicHJldmlvdXNTdGVwXCIpXHJcbiAgICAgICAgICAgICAgICAuaHRtbChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzW3N0ZXBdWzBdICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1tzdGVwXVsxXSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbc3RlcF1bM11cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlU3RlcChidXR0b25JZCwgc3RlcCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXBEaXYuY2hpbGRyZW4oXCIuYW5ub1wiKS5oaWRlKCk7XHJcbiAgICAgICAgJChidXR0b25JZCkuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICAgIGlmIChzdGVwID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc3RlcCA9IHRoaXMuY3VycmVudFN0ZXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID49IHRoaXMuc3RlcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50U3RlcCA9IDA7XHJcbiAgICAgICAgICAgIC8vc3RlcCA9IDA7XHJcbiAgICAgICAgICAgICQoYnV0dG9uSWQpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90aGluZyBpZiBvbiBsYXN0IHN0ZXBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy90aGlzLnNldFN0ZXAoc3RlcCk7XHJcblxyXG4gICAgICAgIHZhciBmYWRlSW5TcGVlZCA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuY3JlYXRlVHJhY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQcmV2aW91c1N0ZXBEaXYoc3RlcCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXBEaXYuaGlkZSgpO1xyXG4gICAgICAgICAgICBmYWRlSW5TcGVlZCA9IDIwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdXaWR0aCA9IHRoaXMuZ2V0V2lkdGgodGhpcy5zdGVwc1tzdGVwXVsyXSk7XHJcbiAgICAgICAgdmFyIGV2YWxFbGVtID0gdGhpcy5jdXJyZW50U3RlcERpdi5jaGlsZHJlbihcIi5ldmFsXCIpO1xyXG5cclxuICAgICAgICB2YXIgdGhpc1Nob3dFdmFsID0gdGhpcztcclxuXHJcbiAgICAgICAgZXZhbEVsZW0uY3NzKFwiY29sb3JcIiwgXCJyZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXBEaXYuZmFkZVRvKGZhZGVJblNwZWVkLCAxLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGV2YWxFbGVtLmZhZGVUbyg0MDAsIDAsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2V2YWxFbGVtLmNzcygnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZhbEVsZW0uYW5pbWF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB3aWR0aDogbmV3V2lkdGgsIGR1cmF0aW9uOiA0MDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbEVsZW0uaHRtbCh0aGlzU2hvd0V2YWwuc3RlcHNbc3RlcF1bMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbEVsZW0uZmFkZVRvKDQwMCwgMSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ldmFsRWxlbS5jc3MoJ292ZXJmbG93JywgJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbEVsZW0uY3NzKFwiY29sb3JcIiwgXCIjMzMzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzU2hvd0V2YWwuY3VycmVudFN0ZXAgKz0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1Nob3dFdmFsLmN1cnJlbnRTdGVwIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNTaG93RXZhbC5zdGVwcy5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzU2hvd0V2YWwuc2V0U3RlcChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzU2hvd0V2YWwuY3VycmVudFN0ZXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChidXR0b25JZCkuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCA2MDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDYwMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmIubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgZXZlbnQ6IFwic2hvd2V2YWxcIixcclxuICAgICAgICAgICAgYWN0OiBcIm5leHRcIixcclxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmNvbnRhaW5lckRpdi5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT0gRmluZCB0aGUgY3VzdG9tIEhUTUwgdGFncyBhbmQgPT1cclxuPT0gICBleGVjdXRlIG91ciBjb2RlIG9uIHRoZW0gICAgPT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXNob3dldmFsXVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIC8vIE1DXHJcbiAgICAgICAgdmFyIG9wdHMgPSB7XHJcbiAgICAgICAgICAgIG9yaWc6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIG9wdHMucmF3ID0gd2luZG93LnJhd19zdGVwc1t0aGlzLmlkXTtcclxuICAgICAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGV4aXN0cyB3aXRoaW4gYSB0aW1lZCBjb21wb25lbnQsIGRvbid0IHJlbmRlciBpdCBoZXJlXHJcbiAgICAgICAgICAgIHNlTGlzdFt0aGlzLmlkXSA9IG5ldyBTaG93RXZhbChvcHRzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XHJcbn1cclxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5W1wic2hvd2V2YWxcIl0gPSBmdW5jdGlvbiAob3B0cykge1xyXG4gICAgcmV0dXJuIG5ldyBTaG93RXZhbChvcHRzKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
