(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_selectquestion_js_selectone_js"],{

/***/ 21823:
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/selectquestion/css/selectquestion.css ***!
  \***********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".toggle-preview {\r\n    border: 4px solid;\r\n    border-radius: 10px;\r\n    background-color: azure;\r\n    padding-top: 10px;\r\n    box-shadow: 10px 5px 5px gray;\r\n}\r\n", "",{"version":3,"sources":["webpack://./runestone/selectquestion/css/selectquestion.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,6BAA6B;AACjC","sourcesContent":[".toggle-preview {\r\n    border: 4px solid;\r\n    border-radius: 10px;\r\n    background-color: azure;\r\n    padding-top: 10px;\r\n    box-shadow: 10px 5px 5px gray;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 40141:
/*!*********************************************************!*\
  !*** ./runestone/selectquestion/css/selectquestion.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_selectquestion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./selectquestion.css */ 21823);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_selectquestion_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_selectquestion_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 72773:
/*!************************************************!*\
  !*** ./runestone/common/js/renderComponent.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderRunestoneComponent": () => (/* binding */ renderRunestoneComponent),
/* harmony export */   "createTimedComponent": () => (/* binding */ createTimedComponent)
/* harmony export */ });
/* harmony import */ var _webpack_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webpack.index.js */ 36350);


async function renderRunestoneComponent(componentSrc, whereDiv, moreOpts) {
    /**
     *  The easy part is adding the componentSrc to the existing div.
     *  The tedious part is calling the right functions to turn the
     *  source into the actual component.
     */
    let patt = /..\/_images/g;
    componentSrc = componentSrc.replace(
        patt,
        `${eBookConfig.app}/books/published/${eBookConfig.basecourse}/_images`
    );
    jQuery(`#${whereDiv}`).html(componentSrc);

    if (typeof window.edList === "undefined") {
        window.edList = {};
    }

    let componentKind = $($(`#${whereDiv} [data-component]`)[0]).data(
        "component"
    );
    // Import the JavaScript for this component before proceeding.
    await (0,_webpack_index_js__WEBPACK_IMPORTED_MODULE_0__.runestone_import)(componentKind);
    let opt = {};
    opt.orig = jQuery(`#${whereDiv} [data-component]`)[0];
    if (opt.orig) {
        opt.lang = $(opt.orig).data("lang");
        opt.useRunestoneServices = true;
        opt.graderactive = false;
        opt.python3 = true;
        if (typeof moreOpts !== "undefined") {
            for (let key in moreOpts) {
                opt[key] = moreOpts[key];
            }
        }
    }

    if (typeof component_factory === "undefined") {
        alert(
            "Error:  Missing the component factory!  Clear you browser cache."
        );
    } else {
        if (
            !window.component_factory[componentKind] &&
            !jQuery(`#${whereDiv}`).html()
        ) {
            jQuery(`#${whereDiv}`).html(
                `<p>Preview not available for ${componentKind}</p>`
            );
        } else {
            let res = window.component_factory[componentKind](opt);
            if (componentKind === "activecode") {
                if (moreOpts.multiGrader) {
                    window.edList[
                        `${moreOpts.gradingContainer} ${res.divid}`
                    ] = res;
                } else {
                    window.edList[res.divid] = res;
                }
            }
        }
    }
}

function createTimedComponent(componentSrc, moreOpts) {
    /* The important distinction is that the component does not really need to be rendered
    into the page, in fact, due to the async nature of getting the source the list of questions
    is made and the original html is replaced by the look of the exam.
    */

    let patt = /..\/_images/g;
    componentSrc = componentSrc.replace(
        patt,
        `${eBookConfig.app}/books/published/${eBookConfig.basecourse}/_images`
    );

    let componentKind = $($(componentSrc).find("[data-component]")[0]).data(
        "component"
    );

    let origId = $(componentSrc).find("[data-component]").first().attr("id");

    // Double check -- if the component source is not in the DOM, then briefly add it
    // and call the constructor.
    let hdiv;
    if (!document.getElementById(origId)) {
        hdiv = $("<div/>", {
            css: { display: "none" },
        }).appendTo("body");
        hdiv.html(componentSrc);
    }
    // at this point hdiv is a jquery object

    let ret;
    let opts = {
        orig: document.getElementById(origId),
        timed: true,
    };
    if (typeof moreOpts !== "undefined") {
        for (let key in moreOpts) {
            opts[key] = moreOpts[key];
        }
    }

    if (componentKind in window.component_factory) {
        ret = window.component_factory[componentKind](opts);
    }

    let rdict = {};
    rdict.question = ret;
    return rdict;
}


/***/ }),

/***/ 63931:
/*!**************************************************!*\
  !*** ./runestone/selectquestion/js/selectone.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SelectOne)
/* harmony export */ });
/* harmony import */ var _common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/renderComponent.js */ 72773);
/* harmony import */ var _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/js/runestonebase.js */ 2568);
/* harmony import */ var _css_selectquestion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/selectquestion.css */ 40141);
/**
 * *******************************
 * |docname| - SelectOne Component
 * *******************************
 */




class SelectOne extends _common_js_runestonebase_js__WEBPACK_IMPORTED_MODULE_1__.default {
    /**
     * constructor --
     * Making an instance of a selectone is a bit more complicated because it is
     * a kind of meta directive.  That is, go to the server and randomly select
     * a question to display in this spot.  Or, if a student has already seen this question
     * in the context of an exam retrieve the question they saw in the first place.
     * Making an API call and waiting for the response is handled asynchronously.
     * But lots of code is not written with that assumption.  So we do the initialization in
     * two parts.
     * 1. Create the object with the usual constructor
     * 2. call initialize, which returns a promise.  When that promise is resolved
     * the "replacement" component will replace the original selectone component in the DOM.
     *
     * @param  {} opts
     */
    constructor(opts) {
        super(opts);
        this.origOpts = opts;
        this.questions = $(opts.orig).data("questionlist");
        this.proficiency = $(opts.orig).data("proficiency");
        this.minDifficulty = $(opts.orig).data("minDifficulty");
        this.maxDifficulty = $(opts.orig).data("maxDifficulty");
        this.points = $(opts.orig).data("points");
        this.autogradable = $(opts.orig).data("autogradable");
        this.not_seen_ever = $(opts.orig).data("not_seen_ever");
        this.selector_id = $(opts.orig).first().attr("id");
        this.primaryOnly = $(opts.orig).data("primary");
        this.ABExperiment = $(opts.orig).data("ab");
        this.toggle = $(opts.orig).data("toggle");
        opts.orig.id = this.selector_id;
    }
    /**
     * initialize --
     * initialize is used so that the constructor does not have to be async.
     * Constructors should definitely not return promises that would seriously
     * mess things up.
     * @return {Promise} Will resolve after component from DB is reified
     */
    async initialize() {
        let self = this;
        let data = { selector_id: this.selector_id };
        if (this.questions) {
            data.questions = this.questions;
        } else if (this.proficiency) {
            data.proficiency = this.proficiency;
        }
        if (this.minDifficulty) {
            data.minDifficulty = this.minDifficulty;
        }
        if (this.maxDifficulty) {
            data.maxDifficulty = this.maxDifficulty;
        }
        if (this.points) {
            data.points = this.points;
        }
        if (this.autogradable) {
            data.autogradable = this.autogradable;
        }
        if (this.not_seen_ever) {
            data.not_seen_ever = this.not_seen_ever;
        }
        if (this.primaryOnly) {
            data.primary = this.primaryOnly;
        }
        if (this.ABExperiment) {
            data.AB = this.ABExperiment;
        }
        if (this.timedWrapper) {
            data.timedWrapper = this.timedWrapper;
        }
        if (this.toggle) {
            data.toggle = this.toggle;
        }
        let opts = this.origOpts;
        let selectorId = this.selector_id;
        console.log("getting question source");
        let request = new Request("/runestone/ajax/get_question_source", {
            method: "POST",
            headers: this.jsonHeaders,
            body: JSON.stringify(data),
        });
        let response = await fetch(request);
        let htmlsrc = await response.json();
        if (htmlsrc.indexOf("No preview") >= 0) {
            alert(
                `Error: Not able to find a question for ${selectorId} based on the criteria`
            );
            throw new Error(`Unable to find a question for ${selectorId}`);
        }
        let res;
        if (opts.timed) {
            // timed components are not rendered immediately, only when the student
            // starts the assessment and visits this particular entry.
            res = (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.createTimedComponent)(htmlsrc, {
                timed: true,
                selector_id: selectorId,
                assessmentTaken: opts.assessmentTaken,
            });
            // replace the entry in the timed assessment's list of components
            // with the component created by createTimedComponent
            for (let component of opts.rqa) {
                if (component.question == self) {
                    component.question = res.question;
                    break;
                }
            }
            self.realComponent = res.question;
            self.containerDiv = res.question.containerDiv;
            self.realComponent.selectorId = selectorId;
        } else {
            ///////////////////////////
            if (data.toggle) {
                var toggleQuestions = this.questions.split(", ");
                var toggleUI = "";
                if (!document.getElementById("component-preview")) {
                    toggleUI +=
                        '<div id="component-preview" class="col-md-6 toggle-preview" style="z-index: 999;"></div>';
                }
                toggleUI +=
                    '<label for="' +
                    selectorId +
                    '-toggleQuestion" style="margin-left: 10px">Toggle Question:</label><select id="' +
                    selectorId +
                    '-toggleQuestion">';
                var i;
                var toggleQuestionHTMLSrc;
                var toggleQuestionSubstring;
                var toggleQuestionType;
                for (i = 0; i < toggleQuestions.length; i++) {
                    toggleQuestionHTMLSrc = await this.getToggleSrc(
                        toggleQuestions[i]
                    );
                    toggleQuestionSubstring = toggleQuestionHTMLSrc.split(
                        'data-component="'
                    )[1];
                    switch (
                        toggleQuestionSubstring.substring(
                            0,
                            toggleQuestionSubstring.indexOf('"')
                        )
                    ) {
                        case "activecode":
                            toggleQuestionType = "Active Code";
                            break;
                        case "clickablearea":
                            toggleQuestionType = "Clickable Area";
                            break;
                        case "dragndrop":
                            toggleQuestionType = "Drag n Drop";
                            break;
                        case "fillintheblank":
                            toggleQuestionType = "Fill in the Blank";
                            break;
                        case "multiplechoice":
                            toggleQuestionType = "Multiple Choice";
                            break;
                        case "parsons":
                            toggleQuestionType = "Parsons";
                            break;
                        case "shortanswer":
                            toggleQuestionType = "Short Answer";
                            break;
                    }
                    toggleUI +=
                        '<option value="' +
                        toggleQuestions[i] +
                        '">' +
                        toggleQuestionType +
                        " - " +
                        toggleQuestions[i] +
                        "</option>";
                }
                toggleUI +=
                    '</select><div id="' +
                    selectorId +
                    '-toggleSelectedQuestion">';
                var toggleFirstID = htmlsrc.split('id="')[1];
                toggleFirstID = toggleFirstID.split('"')[0];
                htmlsrc = toggleUI + htmlsrc + "</div>";
            }
            ///////////////////////////
            // just render this component on the page in its usual place
            await (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.renderRunestoneComponent)(htmlsrc, selectorId, {
                selector_id: selectorId,
                useRunestoneServices: true,
            });
            ///////////////////////////
            if (data.toggle) {
                $("#component-preview").hide();
                var toggleQuestionSelect = document.getElementById(
                    selectorId + "-toggleQuestion"
                );
                for (i = 0; i < toggleQuestionSelect.options.length; i++) {
                    if (
                        toggleQuestionSelect.options[i].value == toggleFirstID
                    ) {
                        toggleQuestionSelect.value = toggleFirstID;
                        $("#" + selectorId).data(
                            "toggle_current",
                            toggleFirstID
                        );
                        break;
                    }
                }
                toggleQuestionSelect.addEventListener(
                    "change",
                    async function () {
                        await this.togglePreview(
                            toggleQuestionSelect.parentElement.id
                        );
                    }.bind(this)
                );
            }
            ///////////////////////////
        }
        return response;
    }

    async getToggleSrc(toggleQuestionID) {
        let request = new Request(
            "/runestone/admin/htmlsrc?acid=" + toggleQuestionID,
            {
                method: "GET",
            }
        );
        let response = await fetch(request);
        let htmlsrc = await response.json();
        return htmlsrc;
    }

    async togglePreview(parentID) {
        var parentDiv = document.getElementById(parentID);
        var toggleQuestionSelect = parentDiv.getElementsByTagName("select")[0];
        var selectedQuestion =
            toggleQuestionSelect.options[toggleQuestionSelect.selectedIndex]
                .value;
        var htmlsrc = await this.getToggleSrc(selectedQuestion);
        let res = (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.renderRunestoneComponent)(htmlsrc, "component-preview", {
            selector_id: "component-preview",
            useRunestoneServices: true,
        });
        // let pd = document.getElementById(preview_div);
        // pd.appendChild(renderGradingComponents(sid, selectedQuestion));

        let closeButton = document.createElement("button");
        $(closeButton).text("Close Preview");
        $(closeButton).addClass("btn btn-default");
        $(closeButton).click(function (event) {
            $("#component-preview").html("");
            toggleQuestionSelect.value = $("#" + parentID).data(
                "toggle_current"
            );
            $("#component-preview").hide();
        });
        $("#component-preview").append(closeButton);

        let setButton = document.createElement("button");
        $(setButton).text("Select this Problem");
        $(setButton).addClass("btn btn-primary");
        $(setButton).click(
            async function () {
                await this.toggleSet(parentID, selectedQuestion, htmlsrc);
                $("#component-preview").hide();
            }.bind(this)
        );
        $("#component-preview").append(setButton);
        $("#component-preview").show();
    }

    async toggleSet(parentID, selectedQuestion, htmlsrc) {
        var selectorId = parentID + "-toggleSelectedQuestion";
        document.getElementById(selectorId).innerHTML = ""; // need to check whether this is even necessary
        await (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.renderRunestoneComponent)(htmlsrc, selectorId, {
            selector_id: selectorId,
            useRunestoneServices: true,
        });
        let request = new Request(
            "/runestone/ajax/update_selected_question?metaid=" +
                parentID +
                "&selected=" +
                selectedQuestion,
            {}
        );
        await fetch(request);
        $("#component-preview").html("");
        $("#" + parentID).data("toggle_current", selectedQuestion);
    }
}

/*
 * When the page is loaded and the login checks are complete find and render
 * each selectquestion component that is not part of a timedAssessment.
 **/
$(document).bind("runestone:login-complete", async function () {
    let selQuestions = document.querySelectorAll(
        "[data-component=selectquestion]"
    );
    for (let cq of selQuestions) {
        try {
            if ($(cq).closest("[data-component=timedAssessment]").length == 0) {
                // If this element exists within a timed component, don't render it here
                let tmp = new SelectOne({ orig: cq });
                await tmp.initialize();
            }
        } catch (err) {
            console.log(`Error rendering New Exercise ${cq.id}
                         Details: ${err}`);
            console.log(err.stack);
        }
    }
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3NlbGVjdHF1ZXN0aW9uL2Nzcy9zZWxlY3RxdWVzdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zZWxlY3RxdWVzdGlvbi9jc3Mvc2VsZWN0cXVlc3Rpb24uY3NzP2Q4MmYiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvcmVuZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvc2VsZWN0cXVlc3Rpb24vanMvc2VsZWN0b25lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDJEQUEyRCwwQkFBMEIsNEJBQTRCLGdDQUFnQywwQkFBMEIsc0NBQXNDLEtBQUssV0FBVyxrSEFBa0gsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLDJDQUEyQywwQkFBMEIsNEJBQTRCLGdDQUFnQywwQkFBMEIsc0NBQXNDLEtBQUssdUJBQXVCO0FBQ2huQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQXNHOztBQUV0Rzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw0RkFBTzs7OztBQUl4QixpRUFBZSxtR0FBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjBCOztBQUV0RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixtQkFBbUIsdUJBQXVCO0FBQ3JFO0FBQ0EsZUFBZSxTQUFTOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtRUFBZ0I7QUFDMUI7QUFDQSwwQkFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUZBQXdCO0FBQzFDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRCxjQUFjLHVGQUF3QjtBQUN0QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsV0FBVztBQUNwRDtBQUNBO0FBQ0EsU0FBUztBQUNULHdEQUF3RDtBQUN4RCxvQ0FBb0MsSUFBSTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6InJ1bmVzdG9uZV9zZWxlY3RxdWVzdGlvbl9qc19zZWxlY3RvbmVfanMuYnVuZGxlLmpzP3Y9YWUzM2U2NmU3YTJkNWJhNjZmMTQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi50b2dnbGUtcHJldmlldyB7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEwcHggNXB4IDVweCBncmF5O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvc2VsZWN0cXVlc3Rpb24vY3NzL3NlbGVjdHF1ZXN0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRvZ2dsZS1wcmV2aWV3IHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4IGdyYXk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlbGVjdHF1ZXN0aW9uLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IHJ1bmVzdG9uZV9pbXBvcnQgfSBmcm9tIFwiLi4vLi4vLi4vd2VicGFjay5pbmRleC5qc1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbmRlclJ1bmVzdG9uZUNvbXBvbmVudChjb21wb25lbnRTcmMsIHdoZXJlRGl2LCBtb3JlT3B0cykge1xyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhlIGVhc3kgcGFydCBpcyBhZGRpbmcgdGhlIGNvbXBvbmVudFNyYyB0byB0aGUgZXhpc3RpbmcgZGl2LlxyXG4gICAgICogIFRoZSB0ZWRpb3VzIHBhcnQgaXMgY2FsbGluZyB0aGUgcmlnaHQgZnVuY3Rpb25zIHRvIHR1cm4gdGhlXHJcbiAgICAgKiAgc291cmNlIGludG8gdGhlIGFjdHVhbCBjb21wb25lbnQuXHJcbiAgICAgKi9cclxuICAgIGxldCBwYXR0ID0gLy4uXFwvX2ltYWdlcy9nO1xyXG4gICAgY29tcG9uZW50U3JjID0gY29tcG9uZW50U3JjLnJlcGxhY2UoXHJcbiAgICAgICAgcGF0dCxcclxuICAgICAgICBgJHtlQm9va0NvbmZpZy5hcHB9L2Jvb2tzL3B1Ymxpc2hlZC8ke2VCb29rQ29uZmlnLmJhc2Vjb3Vyc2V9L19pbWFnZXNgXHJcbiAgICApO1xyXG4gICAgalF1ZXJ5KGAjJHt3aGVyZURpdn1gKS5odG1sKGNvbXBvbmVudFNyYyk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZWRMaXN0ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgd2luZG93LmVkTGlzdCA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjb21wb25lbnRLaW5kID0gJCgkKGAjJHt3aGVyZURpdn0gW2RhdGEtY29tcG9uZW50XWApWzBdKS5kYXRhKFxyXG4gICAgICAgIFwiY29tcG9uZW50XCJcclxuICAgICk7XHJcbiAgICAvLyBJbXBvcnQgdGhlIEphdmFTY3JpcHQgZm9yIHRoaXMgY29tcG9uZW50IGJlZm9yZSBwcm9jZWVkaW5nLlxyXG4gICAgYXdhaXQgcnVuZXN0b25lX2ltcG9ydChjb21wb25lbnRLaW5kKTtcclxuICAgIGxldCBvcHQgPSB7fTtcclxuICAgIG9wdC5vcmlnID0galF1ZXJ5KGAjJHt3aGVyZURpdn0gW2RhdGEtY29tcG9uZW50XWApWzBdO1xyXG4gICAgaWYgKG9wdC5vcmlnKSB7XHJcbiAgICAgICAgb3B0LmxhbmcgPSAkKG9wdC5vcmlnKS5kYXRhKFwibGFuZ1wiKTtcclxuICAgICAgICBvcHQudXNlUnVuZXN0b25lU2VydmljZXMgPSB0cnVlO1xyXG4gICAgICAgIG9wdC5ncmFkZXJhY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBvcHQucHl0aG9uMyA9IHRydWU7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtb3JlT3B0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbW9yZU9wdHMpIHtcclxuICAgICAgICAgICAgICAgIG9wdFtrZXldID0gbW9yZU9wdHNba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudF9mYWN0b3J5ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICAgIFwiRXJyb3I6ICBNaXNzaW5nIHRoZSBjb21wb25lbnQgZmFjdG9yeSEgIENsZWFyIHlvdSBicm93c2VyIGNhY2hlLlwiXHJcbiAgICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAhd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2NvbXBvbmVudEtpbmRdICYmXHJcbiAgICAgICAgICAgICFqUXVlcnkoYCMke3doZXJlRGl2fWApLmh0bWwoKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBqUXVlcnkoYCMke3doZXJlRGl2fWApLmh0bWwoXHJcbiAgICAgICAgICAgICAgICBgPHA+UHJldmlldyBub3QgYXZhaWxhYmxlIGZvciAke2NvbXBvbmVudEtpbmR9PC9wPmBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2NvbXBvbmVudEtpbmRdKG9wdCk7XHJcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRLaW5kID09PSBcImFjdGl2ZWNvZGVcIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vcmVPcHRzLm11bHRpR3JhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmVkTGlzdFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7bW9yZU9wdHMuZ3JhZGluZ0NvbnRhaW5lcn0gJHtyZXMuZGl2aWR9YFxyXG4gICAgICAgICAgICAgICAgICAgIF0gPSByZXM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5lZExpc3RbcmVzLmRpdmlkXSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRpbWVkQ29tcG9uZW50KGNvbXBvbmVudFNyYywgbW9yZU9wdHMpIHtcclxuICAgIC8qIFRoZSBpbXBvcnRhbnQgZGlzdGluY3Rpb24gaXMgdGhhdCB0aGUgY29tcG9uZW50IGRvZXMgbm90IHJlYWxseSBuZWVkIHRvIGJlIHJlbmRlcmVkXHJcbiAgICBpbnRvIHRoZSBwYWdlLCBpbiBmYWN0LCBkdWUgdG8gdGhlIGFzeW5jIG5hdHVyZSBvZiBnZXR0aW5nIHRoZSBzb3VyY2UgdGhlIGxpc3Qgb2YgcXVlc3Rpb25zXHJcbiAgICBpcyBtYWRlIGFuZCB0aGUgb3JpZ2luYWwgaHRtbCBpcyByZXBsYWNlZCBieSB0aGUgbG9vayBvZiB0aGUgZXhhbS5cclxuICAgICovXHJcblxyXG4gICAgbGV0IHBhdHQgPSAvLi5cXC9faW1hZ2VzL2c7XHJcbiAgICBjb21wb25lbnRTcmMgPSBjb21wb25lbnRTcmMucmVwbGFjZShcclxuICAgICAgICBwYXR0LFxyXG4gICAgICAgIGAke2VCb29rQ29uZmlnLmFwcH0vYm9va3MvcHVibGlzaGVkLyR7ZUJvb2tDb25maWcuYmFzZWNvdXJzZX0vX2ltYWdlc2BcclxuICAgICk7XHJcblxyXG4gICAgbGV0IGNvbXBvbmVudEtpbmQgPSAkKCQoY29tcG9uZW50U3JjKS5maW5kKFwiW2RhdGEtY29tcG9uZW50XVwiKVswXSkuZGF0YShcclxuICAgICAgICBcImNvbXBvbmVudFwiXHJcbiAgICApO1xyXG5cclxuICAgIGxldCBvcmlnSWQgPSAkKGNvbXBvbmVudFNyYykuZmluZChcIltkYXRhLWNvbXBvbmVudF1cIikuZmlyc3QoKS5hdHRyKFwiaWRcIik7XHJcblxyXG4gICAgLy8gRG91YmxlIGNoZWNrIC0tIGlmIHRoZSBjb21wb25lbnQgc291cmNlIGlzIG5vdCBpbiB0aGUgRE9NLCB0aGVuIGJyaWVmbHkgYWRkIGl0XHJcbiAgICAvLyBhbmQgY2FsbCB0aGUgY29uc3RydWN0b3IuXHJcbiAgICBsZXQgaGRpdjtcclxuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQob3JpZ0lkKSkge1xyXG4gICAgICAgIGhkaXYgPSAkKFwiPGRpdi8+XCIsIHtcclxuICAgICAgICAgICAgY3NzOiB7IGRpc3BsYXk6IFwibm9uZVwiIH0sXHJcbiAgICAgICAgfSkuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG4gICAgICAgIGhkaXYuaHRtbChjb21wb25lbnRTcmMpO1xyXG4gICAgfVxyXG4gICAgLy8gYXQgdGhpcyBwb2ludCBoZGl2IGlzIGEganF1ZXJ5IG9iamVjdFxyXG5cclxuICAgIGxldCByZXQ7XHJcbiAgICBsZXQgb3B0cyA9IHtcclxuICAgICAgICBvcmlnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmlnSWQpLFxyXG4gICAgICAgIHRpbWVkOiB0cnVlLFxyXG4gICAgfTtcclxuICAgIGlmICh0eXBlb2YgbW9yZU9wdHMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gbW9yZU9wdHMpIHtcclxuICAgICAgICAgICAgb3B0c1trZXldID0gbW9yZU9wdHNba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbXBvbmVudEtpbmQgaW4gd2luZG93LmNvbXBvbmVudF9mYWN0b3J5KSB7XHJcbiAgICAgICAgcmV0ID0gd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2NvbXBvbmVudEtpbmRdKG9wdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZGljdCA9IHt9O1xyXG4gICAgcmRpY3QucXVlc3Rpb24gPSByZXQ7XHJcbiAgICByZXR1cm4gcmRpY3Q7XHJcbn1cclxuIiwiLyoqXHJcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogfGRvY25hbWV8IC0gU2VsZWN0T25lIENvbXBvbmVudFxyXG4gKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqL1xyXG5pbXBvcnQge1xyXG4gICAgcmVuZGVyUnVuZXN0b25lQ29tcG9uZW50LFxyXG4gICAgY3JlYXRlVGltZWRDb21wb25lbnQsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9yZW5kZXJDb21wb25lbnQuanNcIjtcclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlLmpzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zZWxlY3RxdWVzdGlvbi5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlbGVjdE9uZSBleHRlbmRzIFJ1bmVzdG9uZUJhc2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBjb25zdHJ1Y3RvciAtLVxyXG4gICAgICogTWFraW5nIGFuIGluc3RhbmNlIG9mIGEgc2VsZWN0b25lIGlzIGEgYml0IG1vcmUgY29tcGxpY2F0ZWQgYmVjYXVzZSBpdCBpc1xyXG4gICAgICogYSBraW5kIG9mIG1ldGEgZGlyZWN0aXZlLiAgVGhhdCBpcywgZ28gdG8gdGhlIHNlcnZlciBhbmQgcmFuZG9tbHkgc2VsZWN0XHJcbiAgICAgKiBhIHF1ZXN0aW9uIHRvIGRpc3BsYXkgaW4gdGhpcyBzcG90LiAgT3IsIGlmIGEgc3R1ZGVudCBoYXMgYWxyZWFkeSBzZWVuIHRoaXMgcXVlc3Rpb25cclxuICAgICAqIGluIHRoZSBjb250ZXh0IG9mIGFuIGV4YW0gcmV0cmlldmUgdGhlIHF1ZXN0aW9uIHRoZXkgc2F3IGluIHRoZSBmaXJzdCBwbGFjZS5cclxuICAgICAqIE1ha2luZyBhbiBBUEkgY2FsbCBhbmQgd2FpdGluZyBmb3IgdGhlIHJlc3BvbnNlIGlzIGhhbmRsZWQgYXN5bmNocm9ub3VzbHkuXHJcbiAgICAgKiBCdXQgbG90cyBvZiBjb2RlIGlzIG5vdCB3cml0dGVuIHdpdGggdGhhdCBhc3N1bXB0aW9uLiAgU28gd2UgZG8gdGhlIGluaXRpYWxpemF0aW9uIGluXHJcbiAgICAgKiB0d28gcGFydHMuXHJcbiAgICAgKiAxLiBDcmVhdGUgdGhlIG9iamVjdCB3aXRoIHRoZSB1c3VhbCBjb25zdHJ1Y3RvclxyXG4gICAgICogMi4gY2FsbCBpbml0aWFsaXplLCB3aGljaCByZXR1cm5zIGEgcHJvbWlzZS4gIFdoZW4gdGhhdCBwcm9taXNlIGlzIHJlc29sdmVkXHJcbiAgICAgKiB0aGUgXCJyZXBsYWNlbWVudFwiIGNvbXBvbmVudCB3aWxsIHJlcGxhY2UgdGhlIG9yaWdpbmFsIHNlbGVjdG9uZSBjb21wb25lbnQgaW4gdGhlIERPTS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gIHt9IG9wdHNcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xyXG4gICAgICAgIHN1cGVyKG9wdHMpO1xyXG4gICAgICAgIHRoaXMub3JpZ09wdHMgPSBvcHRzO1xyXG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0gJChvcHRzLm9yaWcpLmRhdGEoXCJxdWVzdGlvbmxpc3RcIik7XHJcbiAgICAgICAgdGhpcy5wcm9maWNpZW5jeSA9ICQob3B0cy5vcmlnKS5kYXRhKFwicHJvZmljaWVuY3lcIik7XHJcbiAgICAgICAgdGhpcy5taW5EaWZmaWN1bHR5ID0gJChvcHRzLm9yaWcpLmRhdGEoXCJtaW5EaWZmaWN1bHR5XCIpO1xyXG4gICAgICAgIHRoaXMubWF4RGlmZmljdWx0eSA9ICQob3B0cy5vcmlnKS5kYXRhKFwibWF4RGlmZmljdWx0eVwiKTtcclxuICAgICAgICB0aGlzLnBvaW50cyA9ICQob3B0cy5vcmlnKS5kYXRhKFwicG9pbnRzXCIpO1xyXG4gICAgICAgIHRoaXMuYXV0b2dyYWRhYmxlID0gJChvcHRzLm9yaWcpLmRhdGEoXCJhdXRvZ3JhZGFibGVcIik7XHJcbiAgICAgICAgdGhpcy5ub3Rfc2Vlbl9ldmVyID0gJChvcHRzLm9yaWcpLmRhdGEoXCJub3Rfc2Vlbl9ldmVyXCIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3JfaWQgPSAkKG9wdHMub3JpZykuZmlyc3QoKS5hdHRyKFwiaWRcIik7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5T25seSA9ICQob3B0cy5vcmlnKS5kYXRhKFwicHJpbWFyeVwiKTtcclxuICAgICAgICB0aGlzLkFCRXhwZXJpbWVudCA9ICQob3B0cy5vcmlnKS5kYXRhKFwiYWJcIik7XHJcbiAgICAgICAgdGhpcy50b2dnbGUgPSAkKG9wdHMub3JpZykuZGF0YShcInRvZ2dsZVwiKTtcclxuICAgICAgICBvcHRzLm9yaWcuaWQgPSB0aGlzLnNlbGVjdG9yX2lkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0aWFsaXplIC0tXHJcbiAgICAgKiBpbml0aWFsaXplIGlzIHVzZWQgc28gdGhhdCB0aGUgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSB0byBiZSBhc3luYy5cclxuICAgICAqIENvbnN0cnVjdG9ycyBzaG91bGQgZGVmaW5pdGVseSBub3QgcmV0dXJuIHByb21pc2VzIHRoYXQgd291bGQgc2VyaW91c2x5XHJcbiAgICAgKiBtZXNzIHRoaW5ncyB1cC5cclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IFdpbGwgcmVzb2x2ZSBhZnRlciBjb21wb25lbnQgZnJvbSBEQiBpcyByZWlmaWVkXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBkYXRhID0geyBzZWxlY3Rvcl9pZDogdGhpcy5zZWxlY3Rvcl9pZCB9O1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXN0aW9ucykge1xyXG4gICAgICAgICAgICBkYXRhLnF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9maWNpZW5jeSkge1xyXG4gICAgICAgICAgICBkYXRhLnByb2ZpY2llbmN5ID0gdGhpcy5wcm9maWNpZW5jeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWluRGlmZmljdWx0eSkge1xyXG4gICAgICAgICAgICBkYXRhLm1pbkRpZmZpY3VsdHkgPSB0aGlzLm1pbkRpZmZpY3VsdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1heERpZmZpY3VsdHkpIHtcclxuICAgICAgICAgICAgZGF0YS5tYXhEaWZmaWN1bHR5ID0gdGhpcy5tYXhEaWZmaWN1bHR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb2ludHMpIHtcclxuICAgICAgICAgICAgZGF0YS5wb2ludHMgPSB0aGlzLnBvaW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b2dyYWRhYmxlKSB7XHJcbiAgICAgICAgICAgIGRhdGEuYXV0b2dyYWRhYmxlID0gdGhpcy5hdXRvZ3JhZGFibGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vdF9zZWVuX2V2ZXIpIHtcclxuICAgICAgICAgICAgZGF0YS5ub3Rfc2Vlbl9ldmVyID0gdGhpcy5ub3Rfc2Vlbl9ldmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcmltYXJ5T25seSkge1xyXG4gICAgICAgICAgICBkYXRhLnByaW1hcnkgPSB0aGlzLnByaW1hcnlPbmx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5BQkV4cGVyaW1lbnQpIHtcclxuICAgICAgICAgICAgZGF0YS5BQiA9IHRoaXMuQUJFeHBlcmltZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50aW1lZFdyYXBwZXIpIHtcclxuICAgICAgICAgICAgZGF0YS50aW1lZFdyYXBwZXIgPSB0aGlzLnRpbWVkV3JhcHBlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlKSB7XHJcbiAgICAgICAgICAgIGRhdGEudG9nZ2xlID0gdGhpcy50b2dnbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvcHRzID0gdGhpcy5vcmlnT3B0cztcclxuICAgICAgICBsZXQgc2VsZWN0b3JJZCA9IHRoaXMuc2VsZWN0b3JfaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIHF1ZXN0aW9uIHNvdXJjZVwiKTtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFwiL3J1bmVzdG9uZS9hamF4L2dldF9xdWVzdGlvbl9zb3VyY2VcIiwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICBsZXQgaHRtbHNyYyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBpZiAoaHRtbHNyYy5pbmRleE9mKFwiTm8gcHJldmlld1wiKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgYEVycm9yOiBOb3QgYWJsZSB0byBmaW5kIGEgcXVlc3Rpb24gZm9yICR7c2VsZWN0b3JJZH0gYmFzZWQgb24gdGhlIGNyaXRlcmlhYFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGEgcXVlc3Rpb24gZm9yICR7c2VsZWN0b3JJZH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcztcclxuICAgICAgICBpZiAob3B0cy50aW1lZCkge1xyXG4gICAgICAgICAgICAvLyB0aW1lZCBjb21wb25lbnRzIGFyZSBub3QgcmVuZGVyZWQgaW1tZWRpYXRlbHksIG9ubHkgd2hlbiB0aGUgc3R1ZGVudFxyXG4gICAgICAgICAgICAvLyBzdGFydHMgdGhlIGFzc2Vzc21lbnQgYW5kIHZpc2l0cyB0aGlzIHBhcnRpY3VsYXIgZW50cnkuXHJcbiAgICAgICAgICAgIHJlcyA9IGNyZWF0ZVRpbWVkQ29tcG9uZW50KGh0bWxzcmMsIHtcclxuICAgICAgICAgICAgICAgIHRpbWVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JfaWQ6IHNlbGVjdG9ySWQsXHJcbiAgICAgICAgICAgICAgICBhc3Nlc3NtZW50VGFrZW46IG9wdHMuYXNzZXNzbWVudFRha2VuLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZW50cnkgaW4gdGhlIHRpbWVkIGFzc2Vzc21lbnQncyBsaXN0IG9mIGNvbXBvbmVudHNcclxuICAgICAgICAgICAgLy8gd2l0aCB0aGUgY29tcG9uZW50IGNyZWF0ZWQgYnkgY3JlYXRlVGltZWRDb21wb25lbnRcclxuICAgICAgICAgICAgZm9yIChsZXQgY29tcG9uZW50IG9mIG9wdHMucnFhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LnF1ZXN0aW9uID09IHNlbGYpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQucXVlc3Rpb24gPSByZXMucXVlc3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5yZWFsQ29tcG9uZW50ID0gcmVzLnF1ZXN0aW9uO1xyXG4gICAgICAgICAgICBzZWxmLmNvbnRhaW5lckRpdiA9IHJlcy5xdWVzdGlvbi5jb250YWluZXJEaXY7XHJcbiAgICAgICAgICAgIHNlbGYucmVhbENvbXBvbmVudC5zZWxlY3RvcklkID0gc2VsZWN0b3JJZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgaWYgKGRhdGEudG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25zID0gdGhpcy5xdWVzdGlvbnMuc3BsaXQoXCIsIFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVVSSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcG9uZW50LXByZXZpZXdcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImNvbXBvbmVudC1wcmV2aWV3XCIgY2xhc3M9XCJjb2wtbWQtNiB0b2dnbGUtcHJldmlld1wiIHN0eWxlPVwiei1pbmRleDogOTk5O1wiPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVVSSArPVxyXG4gICAgICAgICAgICAgICAgICAgICc8bGFiZWwgZm9yPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JJZCArXHJcbiAgICAgICAgICAgICAgICAgICAgJy10b2dnbGVRdWVzdGlvblwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHhcIj5Ub2dnbGUgUXVlc3Rpb246PC9sYWJlbD48c2VsZWN0IGlkPVwiJyArXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JJZCArXHJcbiAgICAgICAgICAgICAgICAgICAgJy10b2dnbGVRdWVzdGlvblwiPic7XHJcbiAgICAgICAgICAgICAgICB2YXIgaTtcclxuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVRdWVzdGlvbkhUTUxTcmM7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25TdWJzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25UeXBlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRvZ2dsZVF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uSFRNTFNyYyA9IGF3YWl0IHRoaXMuZ2V0VG9nZ2xlU3JjKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvbnNbaV1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU3Vic3RyaW5nID0gdG9nZ2xlUXVlc3Rpb25IVE1MU3JjLnNwbGl0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGF0YS1jb21wb25lbnQ9XCInXHJcbiAgICAgICAgICAgICAgICAgICAgKVsxXTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblN1YnN0cmluZy5zdWJzdHJpbmcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TdWJzdHJpbmcuaW5kZXhPZignXCInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhY3RpdmVjb2RlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgPSBcIkFjdGl2ZSBDb2RlXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrYWJsZWFyZWFcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiQ2xpY2thYmxlIEFyZWFcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZHJhZ25kcm9wXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgPSBcIkRyYWcgbiBEcm9wXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZpbGxpbnRoZWJsYW5rXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgPSBcIkZpbGwgaW4gdGhlIEJsYW5rXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlY2hvaWNlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgPSBcIk11bHRpcGxlIENob2ljZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwYXJzb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgPSBcIlBhcnNvbnNcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2hvcnRhbnN3ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiU2hvcnQgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxvcHRpb24gdmFsdWU9XCInICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25zW2ldICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25zW2ldICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8L29wdGlvbj5cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvZ2dsZVVJICs9XHJcbiAgICAgICAgICAgICAgICAgICAgJzwvc2VsZWN0PjxkaXYgaWQ9XCInICtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcklkICtcclxuICAgICAgICAgICAgICAgICAgICAnLXRvZ2dsZVNlbGVjdGVkUXVlc3Rpb25cIj4nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUZpcnN0SUQgPSBodG1sc3JjLnNwbGl0KCdpZD1cIicpWzFdO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlRmlyc3RJRCA9IHRvZ2dsZUZpcnN0SUQuc3BsaXQoJ1wiJylbMF07XHJcbiAgICAgICAgICAgICAgICBodG1sc3JjID0gdG9nZ2xlVUkgKyBodG1sc3JjICsgXCI8L2Rpdj5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgLy8ganVzdCByZW5kZXIgdGhpcyBjb21wb25lbnQgb24gdGhlIHBhZ2UgaW4gaXRzIHVzdWFsIHBsYWNlXHJcbiAgICAgICAgICAgIGF3YWl0IHJlbmRlclJ1bmVzdG9uZUNvbXBvbmVudChodG1sc3JjLCBzZWxlY3RvcklkLCB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rvcl9pZDogc2VsZWN0b3JJZCxcclxuICAgICAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRvZ2dsZSkge1xyXG4gICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnQtcHJldmlld1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcklkICsgXCItdG9nZ2xlUXVlc3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0b2dnbGVRdWVzdGlvblNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblNlbGVjdC5vcHRpb25zW2ldLnZhbHVlID09IHRvZ2dsZUZpcnN0SURcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3QudmFsdWUgPSB0b2dnbGVGaXJzdElEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI1wiICsgc2VsZWN0b3JJZCkuZGF0YShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9nZ2xlX2N1cnJlbnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUZpcnN0SURcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgICAgICAgICAgICBcImNoYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy50b2dnbGVQcmV2aWV3KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3QucGFyZW50RWxlbWVudC5pZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldFRvZ2dsZVNyYyh0b2dnbGVRdWVzdGlvbklEKSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcclxuICAgICAgICAgICAgXCIvcnVuZXN0b25lL2FkbWluL2h0bWxzcmM/YWNpZD1cIiArIHRvZ2dsZVF1ZXN0aW9uSUQsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICAgICAgbGV0IGh0bWxzcmMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxzcmM7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdG9nZ2xlUHJldmlldyhwYXJlbnRJRCkge1xyXG4gICAgICAgIHZhciBwYXJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRCk7XHJcbiAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0ID0gcGFyZW50RGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VsZWN0XCIpWzBdO1xyXG4gICAgICAgIHZhciBzZWxlY3RlZFF1ZXN0aW9uID1cclxuICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3Qub3B0aW9uc1t0b2dnbGVRdWVzdGlvblNlbGVjdC5zZWxlY3RlZEluZGV4XVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlO1xyXG4gICAgICAgIHZhciBodG1sc3JjID0gYXdhaXQgdGhpcy5nZXRUb2dnbGVTcmMoc2VsZWN0ZWRRdWVzdGlvbik7XHJcbiAgICAgICAgbGV0IHJlcyA9IHJlbmRlclJ1bmVzdG9uZUNvbXBvbmVudChodG1sc3JjLCBcImNvbXBvbmVudC1wcmV2aWV3XCIsIHtcclxuICAgICAgICAgICAgc2VsZWN0b3JfaWQ6IFwiY29tcG9uZW50LXByZXZpZXdcIixcclxuICAgICAgICAgICAgdXNlUnVuZXN0b25lU2VydmljZXM6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gbGV0IHBkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocHJldmlld19kaXYpO1xyXG4gICAgICAgIC8vIHBkLmFwcGVuZENoaWxkKHJlbmRlckdyYWRpbmdDb21wb25lbnRzKHNpZCwgc2VsZWN0ZWRRdWVzdGlvbikpO1xyXG5cclxuICAgICAgICBsZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICQoY2xvc2VCdXR0b24pLnRleHQoXCJDbG9zZSBQcmV2aWV3XCIpO1xyXG4gICAgICAgICQoY2xvc2VCdXR0b24pLmFkZENsYXNzKFwiYnRuIGJ0bi1kZWZhdWx0XCIpO1xyXG4gICAgICAgICQoY2xvc2VCdXR0b24pLmNsaWNrKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAkKFwiI2NvbXBvbmVudC1wcmV2aWV3XCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0LnZhbHVlID0gJChcIiNcIiArIHBhcmVudElEKS5kYXRhKFxyXG4gICAgICAgICAgICAgICAgXCJ0b2dnbGVfY3VycmVudFwiXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuaGlkZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuYXBwZW5kKGNsb3NlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgbGV0IHNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgJChzZXRCdXR0b24pLnRleHQoXCJTZWxlY3QgdGhpcyBQcm9ibGVtXCIpO1xyXG4gICAgICAgICQoc2V0QnV0dG9uKS5hZGRDbGFzcyhcImJ0biBidG4tcHJpbWFyeVwiKTtcclxuICAgICAgICAkKHNldEJ1dHRvbikuY2xpY2soXHJcbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudG9nZ2xlU2V0KHBhcmVudElELCBzZWxlY3RlZFF1ZXN0aW9uLCBodG1sc3JjKTtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICApO1xyXG4gICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuYXBwZW5kKHNldEJ1dHRvbik7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnQtcHJldmlld1wiKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdG9nZ2xlU2V0KHBhcmVudElELCBzZWxlY3RlZFF1ZXN0aW9uLCBodG1sc3JjKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdG9ySWQgPSBwYXJlbnRJRCArIFwiLXRvZ2dsZVNlbGVjdGVkUXVlc3Rpb25cIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcklkKS5pbm5lckhUTUwgPSBcIlwiOyAvLyBuZWVkIHRvIGNoZWNrIHdoZXRoZXIgdGhpcyBpcyBldmVuIG5lY2Vzc2FyeVxyXG4gICAgICAgIGF3YWl0IHJlbmRlclJ1bmVzdG9uZUNvbXBvbmVudChodG1sc3JjLCBzZWxlY3RvcklkLCB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yX2lkOiBzZWxlY3RvcklkLFxyXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxyXG4gICAgICAgICAgICBcIi9ydW5lc3RvbmUvYWpheC91cGRhdGVfc2VsZWN0ZWRfcXVlc3Rpb24/bWV0YWlkPVwiICtcclxuICAgICAgICAgICAgICAgIHBhcmVudElEICtcclxuICAgICAgICAgICAgICAgIFwiJnNlbGVjdGVkPVwiICtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUXVlc3Rpb24sXHJcbiAgICAgICAgICAgIHt9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICAkKFwiI2NvbXBvbmVudC1wcmV2aWV3XCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgJChcIiNcIiArIHBhcmVudElEKS5kYXRhKFwidG9nZ2xlX2N1cnJlbnRcIiwgc2VsZWN0ZWRRdWVzdGlvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIFdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkIGFuZCB0aGUgbG9naW4gY2hlY2tzIGFyZSBjb21wbGV0ZSBmaW5kIGFuZCByZW5kZXJcclxuICogZWFjaCBzZWxlY3RxdWVzdGlvbiBjb21wb25lbnQgdGhhdCBpcyBub3QgcGFydCBvZiBhIHRpbWVkQXNzZXNzbWVudC5cclxuICoqL1xyXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGxldCBzZWxRdWVzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAgIFwiW2RhdGEtY29tcG9uZW50PXNlbGVjdHF1ZXN0aW9uXVwiXHJcbiAgICApO1xyXG4gICAgZm9yIChsZXQgY3Egb2Ygc2VsUXVlc3Rpb25zKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKCQoY3EpLmNsb3Nlc3QoXCJbZGF0YS1jb21wb25lbnQ9dGltZWRBc3Nlc3NtZW50XVwiKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGV4aXN0cyB3aXRoaW4gYSB0aW1lZCBjb21wb25lbnQsIGRvbid0IHJlbmRlciBpdCBoZXJlXHJcbiAgICAgICAgICAgICAgICBsZXQgdG1wID0gbmV3IFNlbGVjdE9uZSh7IG9yaWc6IGNxIH0pO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdG1wLmluaXRpYWxpemUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgcmVuZGVyaW5nIE5ldyBFeGVyY2lzZSAke2NxLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==