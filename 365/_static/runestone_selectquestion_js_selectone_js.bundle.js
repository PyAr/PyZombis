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
___CSS_LOADER_EXPORT___.push([module.id, ".toggle-preview {\n    border: 4px solid;\n    border-radius: 10px;\n    background-color: azure;\n    padding-top: 10px;\n    box-shadow: 10px 5px 5px gray;\n}\n", "",{"version":3,"sources":["webpack://./runestone/selectquestion/css/selectquestion.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;IACjB,6BAA6B;AACjC","sourcesContent":[".toggle-preview {\n    border: 4px solid;\n    border-radius: 10px;\n    background-color: azure;\n    padding-top: 10px;\n    box-shadow: 10px 5px 5px gray;\n}\n"],"sourceRoot":""}]);
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
    if (!componentSrc) {
        jQuery(`#${whereDiv}`).html(`<p>Sorry, no source is available for preview.</p>`);
        return;
    }
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
            "Error:  Missing the component factory!"
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
        this.toggleOptions = $(opts.orig).data("toggleoptions");
        this.toggleLabels = $(opts.orig).data("togglelabels");
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
        if (this.toggleOptions) {
            data.toggleOptions = this.toggleOptions;
        }
        if (this.toggleLabels) {
            data.toggleLabels = this.toggleLabels;
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
            if (data.toggleOptions) {
                var toggleLabels = data.toggleLabels.replace("togglelabels:", "").trim();
                if (toggleLabels) {
                    toggleLabels = toggleLabels.split(",");
                    for (var t = 0; t < toggleLabels.length; t++) {
                        toggleLabels[t] = toggleLabels[t].trim();
                    }
                }
                var toggleQuestions = this.questions.split(", ");
                var toggleUI = "";
                // check so that only the first toggle select question on the assignments page has a preview panel created, then all toggle select previews use this same panel
                if (!document.getElementById("component-preview")) {
                    toggleUI +=
                        '<div id="component-preview" class="col-md-6 toggle-preview" style="z-index: 999;">' +
                            '<div id="toggle-buttons"></div>' +
                            '<div id="toggle-preview"></div>' +
                        '</div>';
                }
                // dropdown menu containing the question options
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
                var toggleQuestionTypes = [];
                for (i = 0; i < toggleQuestions.length; i++) {
                    toggleQuestionHTMLSrc = await this.getToggleSrc(
                        toggleQuestions[i]
                    );
                    toggleQuestionSubstring = toggleQuestionHTMLSrc.split(
                        'data-component="'
                    )[1];
                    switch (
                        toggleQuestionSubstring.slice(
                            0,
                            toggleQuestionSubstring.indexOf('"')
                        )
                    ) {
                        case "activecode":
                            toggleQuestionType = "Active Write Code";
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
                            toggleQuestionType = "Parsons Mixed-Up Code";
                            break;
                        case "shortanswer":
                            toggleQuestionType = "Short Answer";
                            break;
                    }
                    toggleQuestionTypes[i] = toggleQuestionType;
                    toggleUI +=
                        '<option value="' +
                        toggleQuestions[i] +
                        '">';
                    if (toggleLabels) {
                        if (toggleLabels[i]) {
                            toggleUI += toggleLabels[i];
                        }
                        else {
                            toggleUI += toggleQuestionType +
                            " - " +
                            toggleQuestions[i];
                        }
                    }
                    else {
                        toggleUI += toggleQuestionType +
                        " - " +
                        toggleQuestions[i];
                    }
                    if ((i == 0) && (data.toggleOptions.includes("lock"))) {
                        toggleUI += " (only this question will be graded)";
                    }
                    toggleUI += "</option>";
                }
                toggleUI +=
                    '</select><div id="' +
                    selectorId +
                    '-toggleSelectedQuestion">';
                var toggleFirstID = htmlsrc.split('id="')[1];
                toggleFirstID = toggleFirstID.split('"')[0];
                htmlsrc = toggleUI + htmlsrc + "</div>";
            }
            // just render this component on the page in its usual place
            await (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.renderRunestoneComponent)(htmlsrc, selectorId, {
                selector_id: selectorId,
                useRunestoneServices: true,
            });
            if (data.toggleOptions) {
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
                        $("#" + selectorId).data(
                            "toggle_current_type",
                            toggleQuestionTypes[0]
                        );
                        break;
                    }
                }
                toggleQuestionSelect.addEventListener(
                    "change",
                    async function () {
                        await this.togglePreview(
                            toggleQuestionSelect.parentElement.id,
                            data.toggleOptions,
                            toggleQuestionTypes
                        );
                    }.bind(this)
                );
            }
        }
        return response;
    }

    // retrieve html source of a question, for use in various toggle functionalities
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

    // on changing the value of toggle select dropdown, render selected question in preview panel, add appropriate buttons, then make preview panel visible
    async togglePreview(parentID, toggleOptions, toggleQuestionTypes) {
        $("#toggle-buttons").html("");
        var parentDiv = document.getElementById(parentID);
        var toggleQuestionSelect = parentDiv.getElementsByTagName("select")[0];
        var selectedQuestion =
            toggleQuestionSelect.options[toggleQuestionSelect.selectedIndex]
                .value;
        var htmlsrc = await this.getToggleSrc(selectedQuestion);
        (0,_common_js_renderComponent_js__WEBPACK_IMPORTED_MODULE_0__.renderRunestoneComponent)(htmlsrc, "toggle-preview", {
            selector_id: "toggle-preview",
            useRunestoneServices: true,
        });

        // add "Close Preview" button to the preview panel
        let closeButton = document.createElement("button");
        $(closeButton).text("Close Preview");
        $(closeButton).addClass("btn btn-default");
        $(closeButton).click(function (event) {
            $("#toggle-preview").html("");
            toggleQuestionSelect.value = $("#" + parentID).data(
                "toggle_current"
            );
            $("#component-preview").hide();
        });
        $("#toggle-buttons").append(closeButton);

        // if "lock" is not in toggle options, then allow adding more buttons to the preview panel 
        if (!(toggleOptions.includes("lock"))) {
            let setButton = document.createElement("button");
            $(setButton).text("Select this Problem");
            $(setButton).addClass("btn btn-primary");
            $(setButton).click(
                async function () {
                    await this.toggleSet(parentID, selectedQuestion, htmlsrc, toggleQuestionTypes);
                    $("#component-preview").hide();
                }.bind(this)
            );
            $("#toggle-buttons").append(setButton);

            // if "transfer" in toggle options, and if current question type is Parsons and selected question type is active code, then add "Transfer" button to preview panel
            if (toggleOptions.includes("transfer")) {
                var currentType = $("#" + parentID).data("toggle_current_type");
                var selectedType = toggleQuestionTypes[toggleQuestionSelect.selectedIndex];
                if ((currentType == "Parsons Mixed-Up Code") && (selectedType == "Active Write Code")) {
                    let transferButton = document.createElement("button");
                    $(transferButton).text("Transfer Response");
                    $(transferButton).addClass("btn btn-primary");
                    $(transferButton).click(
                        async function () {
                            await this.toggleTransfer(parentID, selectedQuestion, htmlsrc, toggleQuestionTypes);
                        }.bind(this)
                    );
                    $("#toggle-buttons").append(transferButton);
                }
            }
        }

        $("#component-preview").show();
    }

    // on clicking "Select this Problem" button, close preview panel, replace current question in assignments page with selected question, and send request to update grading database
    async toggleSet(parentID, selectedQuestion, htmlsrc, toggleQuestionTypes) {
        var selectorId = parentID + "-toggleSelectedQuestion";
        var toggleQuestionSelect = document.getElementById(parentID).getElementsByTagName("select")[0];
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
        $("#toggle-preview").html("");
        $("#" + parentID).data("toggle_current", selectedQuestion);
        $("#" + parentID).data("toggle_current_type", toggleQuestionTypes[toggleQuestionSelect.selectedIndex]);
    }

    // on clicking "Transfer" button, extract the current text and indentation of the Parsons blocks in the answer space, then paste that into the selected active code question
    async toggleTransfer(parentID, selectedQuestion, htmlsrc, toggleQuestionTypes) {
        // retrieve all Parsons lines within the answer space and loop through this list
        var currentParsons = document.getElementById(parentID + "-toggleSelectedQuestion").querySelectorAll("div[class^='answer']")[0].getElementsByClassName("prettyprint lang-py");
        var currentParsonsClass;
        var currentBlockIndent;
        var indentCount
        var indent;
        var parsonsLine;
        var parsonsLines = ``;
        var count;
        for (var p = 0; p < currentParsons.length; p++) {
            indentCount = 0;
            indent = "";
            // for Parsons blocks that have built-in indentation in their lines
            currentParsonsClass = currentParsons[p].classList[2];
            if (currentParsonsClass) {
                if (currentParsonsClass.includes("indent")) {
                    indentCount = parseInt(indentCount) + parseInt(currentParsonsClass.slice(6,currentParsonsClass.length));
                }
            }
            // for Parsons answer spaces with vertical lines that allow student to define their own line indentation
            currentBlockIndent = currentParsons[p].parentElement.parentElement.style.left;
            if (currentBlockIndent) {
                indentCount = parseInt(indentCount) + parseInt(currentBlockIndent.slice(0,currentBlockIndent.indexOf("px")) / 30);
            }
            for (var d = 0; d < indentCount; d++) {
                indent += "    ";
            }
            // retrieve each text snippet of each Parsons line and loop through this list
            parsonsLine = currentParsons[p].getElementsByTagName("span");
            count = 0;
            for (var l = 0; l < parsonsLine.length; l++) {
                if (parsonsLine[l].childNodes[0].nodeName == "#text") { // Parsons blocks have differing amounts of hierarchy levels (spans within spans)
                    if ((p == 0) && (count == 0)) { // need different check than l == 0 because the l numbering doesn't align with location within line due to inconsistent span heirarchy
                        parsonsLines += indent + parsonsLine[l].innerHTML;
                        count++;
                    }
                    else if (count != 0) {
                        parsonsLines += parsonsLine[l].innerHTML;
                        count++;
                    }
                    else {
                        parsonsLines = parsonsLines + `
                            ` + indent + parsonsLine[l].innerHTML;
                        parsonsLines = parsonsLines.replace("                            ", "");
                        count++;
                    }
                }
            }
        }
        // replace all existing code within selected active code question with extracted Parsons text
        var htmlsrcFormer = htmlsrc.slice(0, htmlsrc.indexOf("<textarea") + htmlsrc.split("<textarea")[1].indexOf(">") + 10);
        var htmlsrcLatter = htmlsrc.slice(htmlsrc.indexOf("</textarea>"), htmlsrc.length);
        htmlsrc = htmlsrcFormer + parsonsLines + htmlsrcLatter;

        await this.toggleSet(parentID, selectedQuestion, htmlsrc, toggleQuestionTypes);
        $("#component-preview").hide();
    }
}


if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}

window.component_factory.selectquestion = function (opts) {
        return new SelectOne(opts);
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3NlbGVjdHF1ZXN0aW9uL2Nzcy9zZWxlY3RxdWVzdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zZWxlY3RxdWVzdGlvbi9jc3Mvc2VsZWN0cXVlc3Rpb24uY3NzP2Q4MmYiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvcmVuZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvc2VsZWN0cXVlc3Rpb24vanMvc2VsZWN0b25lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDJEQUEyRCx3QkFBd0IsMEJBQTBCLDhCQUE4Qix3QkFBd0Isb0NBQW9DLEdBQUcsU0FBUyxrSEFBa0gsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLDJDQUEyQyx3QkFBd0IsMEJBQTBCLDhCQUE4Qix3QkFBd0Isb0NBQW9DLEdBQUcscUJBQXFCO0FBQ3BsQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQXNHOztBQUV0Rzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw0RkFBTzs7OztBQUl4QixpRUFBZSxtR0FBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjBCOztBQUV0RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixtQkFBbUIsdUJBQXVCO0FBQ3JFO0FBQ0EsZUFBZSxTQUFTOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQsdUVBQXVFO0FBQ3ZFLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0RBQXdEO0FBQ3hELG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicnVuZXN0b25lX3NlbGVjdHF1ZXN0aW9uX2pzX3NlbGVjdG9uZV9qcy5idW5kbGUuanM/dj04MDIwNDJmOWZmNTc1NDRiNTg4MSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZ2dsZS1wcmV2aWV3IHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4IGdyYXk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9zZWxlY3RxdWVzdGlvbi9jc3Mvc2VsZWN0cXVlc3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9nZ2xlLXByZXZpZXcge1xcbiAgICBib3JkZXI6IDRweCBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDVweCA1cHggZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VsZWN0cXVlc3Rpb24uY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcnVuZXN0b25lX2ltcG9ydCB9IGZyb20gXCIuLi8uLi8uLi93ZWJwYWNrLmluZGV4LmpzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW5kZXJSdW5lc3RvbmVDb21wb25lbnQoY29tcG9uZW50U3JjLCB3aGVyZURpdiwgbW9yZU9wdHMpIHtcbiAgICAvKipcbiAgICAgKiAgVGhlIGVhc3kgcGFydCBpcyBhZGRpbmcgdGhlIGNvbXBvbmVudFNyYyB0byB0aGUgZXhpc3RpbmcgZGl2LlxuICAgICAqICBUaGUgdGVkaW91cyBwYXJ0IGlzIGNhbGxpbmcgdGhlIHJpZ2h0IGZ1bmN0aW9ucyB0byB0dXJuIHRoZVxuICAgICAqICBzb3VyY2UgaW50byB0aGUgYWN0dWFsIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBpZiAoIWNvbXBvbmVudFNyYykge1xuICAgICAgICBqUXVlcnkoYCMke3doZXJlRGl2fWApLmh0bWwoYDxwPlNvcnJ5LCBubyBzb3VyY2UgaXMgYXZhaWxhYmxlIGZvciBwcmV2aWV3LjwvcD5gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcGF0dCA9IC8uLlxcL19pbWFnZXMvZztcbiAgICBjb21wb25lbnRTcmMgPSBjb21wb25lbnRTcmMucmVwbGFjZShcbiAgICAgICAgcGF0dCxcbiAgICAgICAgYCR7ZUJvb2tDb25maWcuYXBwfS9ib29rcy9wdWJsaXNoZWQvJHtlQm9va0NvbmZpZy5iYXNlY291cnNlfS9faW1hZ2VzYFxuICAgICk7XG4gICAgalF1ZXJ5KGAjJHt3aGVyZURpdn1gKS5odG1sKGNvbXBvbmVudFNyYyk7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdy5lZExpc3QgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgd2luZG93LmVkTGlzdCA9IHt9O1xuICAgIH1cblxuICAgIGxldCBjb21wb25lbnRLaW5kID0gJCgkKGAjJHt3aGVyZURpdn0gW2RhdGEtY29tcG9uZW50XWApWzBdKS5kYXRhKFxuICAgICAgICBcImNvbXBvbmVudFwiXG4gICAgKTtcbiAgICAvLyBJbXBvcnQgdGhlIEphdmFTY3JpcHQgZm9yIHRoaXMgY29tcG9uZW50IGJlZm9yZSBwcm9jZWVkaW5nLlxuICAgIGF3YWl0IHJ1bmVzdG9uZV9pbXBvcnQoY29tcG9uZW50S2luZCk7XG4gICAgbGV0IG9wdCA9IHt9O1xuICAgIG9wdC5vcmlnID0galF1ZXJ5KGAjJHt3aGVyZURpdn0gW2RhdGEtY29tcG9uZW50XWApWzBdO1xuICAgIGlmIChvcHQub3JpZykge1xuICAgICAgICBvcHQubGFuZyA9ICQob3B0Lm9yaWcpLmRhdGEoXCJsYW5nXCIpO1xuICAgICAgICBvcHQudXNlUnVuZXN0b25lU2VydmljZXMgPSB0cnVlO1xuICAgICAgICBvcHQuZ3JhZGVyYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIG9wdC5weXRob24zID0gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBtb3JlT3B0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG1vcmVPcHRzKSB7XG4gICAgICAgICAgICAgICAgb3B0W2tleV0gPSBtb3JlT3B0c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBhbGVydChcbiAgICAgICAgICAgIFwiRXJyb3I6ICBNaXNzaW5nIHRoZSBjb21wb25lbnQgZmFjdG9yeSFcIlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgICF3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbY29tcG9uZW50S2luZF0gJiZcbiAgICAgICAgICAgICFqUXVlcnkoYCMke3doZXJlRGl2fWApLmh0bWwoKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGpRdWVyeShgIyR7d2hlcmVEaXZ9YCkuaHRtbChcbiAgICAgICAgICAgICAgICBgPHA+UHJldmlldyBub3QgYXZhaWxhYmxlIGZvciAke2NvbXBvbmVudEtpbmR9PC9wPmBcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gd2luZG93LmNvbXBvbmVudF9mYWN0b3J5W2NvbXBvbmVudEtpbmRdKG9wdCk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50S2luZCA9PT0gXCJhY3RpdmVjb2RlXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobW9yZU9wdHMubXVsdGlHcmFkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmVkTGlzdFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke21vcmVPcHRzLmdyYWRpbmdDb250YWluZXJ9ICR7cmVzLmRpdmlkfWBcbiAgICAgICAgICAgICAgICAgICAgXSA9IHJlcztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZWRMaXN0W3Jlcy5kaXZpZF0gPSByZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGltZWRDb21wb25lbnQoY29tcG9uZW50U3JjLCBtb3JlT3B0cykge1xuICAgIC8qIFRoZSBpbXBvcnRhbnQgZGlzdGluY3Rpb24gaXMgdGhhdCB0aGUgY29tcG9uZW50IGRvZXMgbm90IHJlYWxseSBuZWVkIHRvIGJlIHJlbmRlcmVkXG4gICAgaW50byB0aGUgcGFnZSwgaW4gZmFjdCwgZHVlIHRvIHRoZSBhc3luYyBuYXR1cmUgb2YgZ2V0dGluZyB0aGUgc291cmNlIHRoZSBsaXN0IG9mIHF1ZXN0aW9uc1xuICAgIGlzIG1hZGUgYW5kIHRoZSBvcmlnaW5hbCBodG1sIGlzIHJlcGxhY2VkIGJ5IHRoZSBsb29rIG9mIHRoZSBleGFtLlxuICAgICovXG5cbiAgICBsZXQgcGF0dCA9IC8uLlxcL19pbWFnZXMvZztcbiAgICBjb21wb25lbnRTcmMgPSBjb21wb25lbnRTcmMucmVwbGFjZShcbiAgICAgICAgcGF0dCxcbiAgICAgICAgYCR7ZUJvb2tDb25maWcuYXBwfS9ib29rcy9wdWJsaXNoZWQvJHtlQm9va0NvbmZpZy5iYXNlY291cnNlfS9faW1hZ2VzYFxuICAgICk7XG5cbiAgICBsZXQgY29tcG9uZW50S2luZCA9ICQoJChjb21wb25lbnRTcmMpLmZpbmQoXCJbZGF0YS1jb21wb25lbnRdXCIpWzBdKS5kYXRhKFxuICAgICAgICBcImNvbXBvbmVudFwiXG4gICAgKTtcblxuICAgIGxldCBvcmlnSWQgPSAkKGNvbXBvbmVudFNyYykuZmluZChcIltkYXRhLWNvbXBvbmVudF1cIikuZmlyc3QoKS5hdHRyKFwiaWRcIik7XG5cbiAgICAvLyBEb3VibGUgY2hlY2sgLS0gaWYgdGhlIGNvbXBvbmVudCBzb3VyY2UgaXMgbm90IGluIHRoZSBET00sIHRoZW4gYnJpZWZseSBhZGQgaXRcbiAgICAvLyBhbmQgY2FsbCB0aGUgY29uc3RydWN0b3IuXG4gICAgbGV0IGhkaXY7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmlnSWQpKSB7XG4gICAgICAgIGhkaXYgPSAkKFwiPGRpdi8+XCIsIHtcbiAgICAgICAgICAgIGNzczogeyBkaXNwbGF5OiBcIm5vbmVcIiB9LFxuICAgICAgICB9KS5hcHBlbmRUbyhcImJvZHlcIik7XG4gICAgICAgIGhkaXYuaHRtbChjb21wb25lbnRTcmMpO1xuICAgIH1cbiAgICAvLyBhdCB0aGlzIHBvaW50IGhkaXYgaXMgYSBqcXVlcnkgb2JqZWN0XG5cbiAgICBsZXQgcmV0O1xuICAgIGxldCBvcHRzID0ge1xuICAgICAgICBvcmlnOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmlnSWQpLFxuICAgICAgICB0aW1lZDogdHJ1ZSxcbiAgICB9O1xuICAgIGlmICh0eXBlb2YgbW9yZU9wdHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG1vcmVPcHRzKSB7XG4gICAgICAgICAgICBvcHRzW2tleV0gPSBtb3JlT3B0c1trZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbXBvbmVudEtpbmQgaW4gd2luZG93LmNvbXBvbmVudF9mYWN0b3J5KSB7XG4gICAgICAgIHJldCA9IHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeVtjb21wb25lbnRLaW5kXShvcHRzKTtcbiAgICB9XG5cbiAgICBsZXQgcmRpY3QgPSB7fTtcbiAgICByZGljdC5xdWVzdGlvbiA9IHJldDtcbiAgICByZXR1cm4gcmRpY3Q7XG59XG4iLCIvKipcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIHxkb2NuYW1lfCAtIFNlbGVjdE9uZSBDb21wb25lbnRcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqL1xuaW1wb3J0IHtcbiAgICByZW5kZXJSdW5lc3RvbmVDb21wb25lbnQsXG4gICAgY3JlYXRlVGltZWRDb21wb25lbnQsXG59IGZyb20gXCIuLi8uLi9jb21tb24vanMvcmVuZGVyQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2UuanNcIjtcbmltcG9ydCBcIi4uL2Nzcy9zZWxlY3RxdWVzdGlvbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T25lIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XG4gICAgLyoqXG4gICAgICogY29uc3RydWN0b3IgLS1cbiAgICAgKiBNYWtpbmcgYW4gaW5zdGFuY2Ugb2YgYSBzZWxlY3RvbmUgaXMgYSBiaXQgbW9yZSBjb21wbGljYXRlZCBiZWNhdXNlIGl0IGlzXG4gICAgICogYSBraW5kIG9mIG1ldGEgZGlyZWN0aXZlLiAgVGhhdCBpcywgZ28gdG8gdGhlIHNlcnZlciBhbmQgcmFuZG9tbHkgc2VsZWN0XG4gICAgICogYSBxdWVzdGlvbiB0byBkaXNwbGF5IGluIHRoaXMgc3BvdC4gIE9yLCBpZiBhIHN0dWRlbnQgaGFzIGFscmVhZHkgc2VlbiB0aGlzIHF1ZXN0aW9uXG4gICAgICogaW4gdGhlIGNvbnRleHQgb2YgYW4gZXhhbSByZXRyaWV2ZSB0aGUgcXVlc3Rpb24gdGhleSBzYXcgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgICAqIE1ha2luZyBhbiBBUEkgY2FsbCBhbmQgd2FpdGluZyBmb3IgdGhlIHJlc3BvbnNlIGlzIGhhbmRsZWQgYXN5bmNocm9ub3VzbHkuXG4gICAgICogQnV0IGxvdHMgb2YgY29kZSBpcyBub3Qgd3JpdHRlbiB3aXRoIHRoYXQgYXNzdW1wdGlvbi4gIFNvIHdlIGRvIHRoZSBpbml0aWFsaXphdGlvbiBpblxuICAgICAqIHR3byBwYXJ0cy5cbiAgICAgKiAxLiBDcmVhdGUgdGhlIG9iamVjdCB3aXRoIHRoZSB1c3VhbCBjb25zdHJ1Y3RvclxuICAgICAqIDIuIGNhbGwgaW5pdGlhbGl6ZSwgd2hpY2ggcmV0dXJucyBhIHByb21pc2UuICBXaGVuIHRoYXQgcHJvbWlzZSBpcyByZXNvbHZlZFxuICAgICAqIHRoZSBcInJlcGxhY2VtZW50XCIgY29tcG9uZW50IHdpbGwgcmVwbGFjZSB0aGUgb3JpZ2luYWwgc2VsZWN0b25lIGNvbXBvbmVudCBpbiB0aGUgRE9NLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7fSBvcHRzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iob3B0cykge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdGhpcy5vcmlnT3B0cyA9IG9wdHM7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0gJChvcHRzLm9yaWcpLmRhdGEoXCJxdWVzdGlvbmxpc3RcIik7XG4gICAgICAgIHRoaXMucHJvZmljaWVuY3kgPSAkKG9wdHMub3JpZykuZGF0YShcInByb2ZpY2llbmN5XCIpO1xuICAgICAgICB0aGlzLm1pbkRpZmZpY3VsdHkgPSAkKG9wdHMub3JpZykuZGF0YShcIm1pbkRpZmZpY3VsdHlcIik7XG4gICAgICAgIHRoaXMubWF4RGlmZmljdWx0eSA9ICQob3B0cy5vcmlnKS5kYXRhKFwibWF4RGlmZmljdWx0eVwiKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSAkKG9wdHMub3JpZykuZGF0YShcInBvaW50c1wiKTtcbiAgICAgICAgdGhpcy5hdXRvZ3JhZGFibGUgPSAkKG9wdHMub3JpZykuZGF0YShcImF1dG9ncmFkYWJsZVwiKTtcbiAgICAgICAgdGhpcy5ub3Rfc2Vlbl9ldmVyID0gJChvcHRzLm9yaWcpLmRhdGEoXCJub3Rfc2Vlbl9ldmVyXCIpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yX2lkID0gJChvcHRzLm9yaWcpLmZpcnN0KCkuYXR0cihcImlkXCIpO1xuICAgICAgICB0aGlzLnByaW1hcnlPbmx5ID0gJChvcHRzLm9yaWcpLmRhdGEoXCJwcmltYXJ5XCIpO1xuICAgICAgICB0aGlzLkFCRXhwZXJpbWVudCA9ICQob3B0cy5vcmlnKS5kYXRhKFwiYWJcIik7XG4gICAgICAgIHRoaXMudG9nZ2xlT3B0aW9ucyA9ICQob3B0cy5vcmlnKS5kYXRhKFwidG9nZ2xlb3B0aW9uc1wiKTtcbiAgICAgICAgdGhpcy50b2dnbGVMYWJlbHMgPSAkKG9wdHMub3JpZykuZGF0YShcInRvZ2dsZWxhYmVsc1wiKTtcbiAgICAgICAgb3B0cy5vcmlnLmlkID0gdGhpcy5zZWxlY3Rvcl9pZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogaW5pdGlhbGl6ZSAtLVxuICAgICAqIGluaXRpYWxpemUgaXMgdXNlZCBzbyB0aGF0IHRoZSBjb25zdHJ1Y3RvciBkb2VzIG5vdCBoYXZlIHRvIGJlIGFzeW5jLlxuICAgICAqIENvbnN0cnVjdG9ycyBzaG91bGQgZGVmaW5pdGVseSBub3QgcmV0dXJuIHByb21pc2VzIHRoYXQgd291bGQgc2VyaW91c2x5XG4gICAgICogbWVzcyB0aGluZ3MgdXAuXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gV2lsbCByZXNvbHZlIGFmdGVyIGNvbXBvbmVudCBmcm9tIERCIGlzIHJlaWZpZWRcbiAgICAgKi9cbiAgICBhc3luYyBpbml0aWFsaXplKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBkYXRhID0geyBzZWxlY3Rvcl9pZDogdGhpcy5zZWxlY3Rvcl9pZCB9O1xuICAgICAgICBpZiAodGhpcy5xdWVzdGlvbnMpIHtcbiAgICAgICAgICAgIGRhdGEucXVlc3Rpb25zID0gdGhpcy5xdWVzdGlvbnM7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9maWNpZW5jeSkge1xuICAgICAgICAgICAgZGF0YS5wcm9maWNpZW5jeSA9IHRoaXMucHJvZmljaWVuY3k7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWluRGlmZmljdWx0eSkge1xuICAgICAgICAgICAgZGF0YS5taW5EaWZmaWN1bHR5ID0gdGhpcy5taW5EaWZmaWN1bHR5O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm1heERpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgIGRhdGEubWF4RGlmZmljdWx0eSA9IHRoaXMubWF4RGlmZmljdWx0eTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wb2ludHMpIHtcbiAgICAgICAgICAgIGRhdGEucG9pbnRzID0gdGhpcy5wb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYXV0b2dyYWRhYmxlKSB7XG4gICAgICAgICAgICBkYXRhLmF1dG9ncmFkYWJsZSA9IHRoaXMuYXV0b2dyYWRhYmxlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vdF9zZWVuX2V2ZXIpIHtcbiAgICAgICAgICAgIGRhdGEubm90X3NlZW5fZXZlciA9IHRoaXMubm90X3NlZW5fZXZlcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmltYXJ5T25seSkge1xuICAgICAgICAgICAgZGF0YS5wcmltYXJ5ID0gdGhpcy5wcmltYXJ5T25seTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5BQkV4cGVyaW1lbnQpIHtcbiAgICAgICAgICAgIGRhdGEuQUIgPSB0aGlzLkFCRXhwZXJpbWVudDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy50aW1lZFdyYXBwZXIpIHtcbiAgICAgICAgICAgIGRhdGEudGltZWRXcmFwcGVyID0gdGhpcy50aW1lZFdyYXBwZXI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlT3B0aW9ucykge1xuICAgICAgICAgICAgZGF0YS50b2dnbGVPcHRpb25zID0gdGhpcy50b2dnbGVPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUxhYmVscykge1xuICAgICAgICAgICAgZGF0YS50b2dnbGVMYWJlbHMgPSB0aGlzLnRvZ2dsZUxhYmVscztcbiAgICAgICAgfVxuICAgICAgICBsZXQgb3B0cyA9IHRoaXMub3JpZ09wdHM7XG4gICAgICAgIGxldCBzZWxlY3RvcklkID0gdGhpcy5zZWxlY3Rvcl9pZDtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXR0aW5nIHF1ZXN0aW9uIHNvdXJjZVwiKTtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcIi9ydW5lc3RvbmUvYWpheC9nZXRfcXVlc3Rpb25fc291cmNlXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgbGV0IGh0bWxzcmMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChodG1sc3JjLmluZGV4T2YoXCJObyBwcmV2aWV3XCIpID49IDApIHtcbiAgICAgICAgICAgIGFsZXJ0KFxuICAgICAgICAgICAgICAgIGBFcnJvcjogTm90IGFibGUgdG8gZmluZCBhIHF1ZXN0aW9uIGZvciAke3NlbGVjdG9ySWR9IGJhc2VkIG9uIHRoZSBjcml0ZXJpYWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIGEgcXVlc3Rpb24gZm9yICR7c2VsZWN0b3JJZH1gKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzO1xuICAgICAgICBpZiAob3B0cy50aW1lZCkge1xuICAgICAgICAgICAgLy8gdGltZWQgY29tcG9uZW50cyBhcmUgbm90IHJlbmRlcmVkIGltbWVkaWF0ZWx5LCBvbmx5IHdoZW4gdGhlIHN0dWRlbnRcbiAgICAgICAgICAgIC8vIHN0YXJ0cyB0aGUgYXNzZXNzbWVudCBhbmQgdmlzaXRzIHRoaXMgcGFydGljdWxhciBlbnRyeS5cbiAgICAgICAgICAgIHJlcyA9IGNyZWF0ZVRpbWVkQ29tcG9uZW50KGh0bWxzcmMsIHtcbiAgICAgICAgICAgICAgICB0aW1lZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3Rvcl9pZDogc2VsZWN0b3JJZCxcbiAgICAgICAgICAgICAgICBhc3Nlc3NtZW50VGFrZW46IG9wdHMuYXNzZXNzbWVudFRha2VuLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBlbnRyeSBpbiB0aGUgdGltZWQgYXNzZXNzbWVudCdzIGxpc3Qgb2YgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gd2l0aCB0aGUgY29tcG9uZW50IGNyZWF0ZWQgYnkgY3JlYXRlVGltZWRDb21wb25lbnRcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiBvcHRzLnJxYSkge1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQucXVlc3Rpb24gPT0gc2VsZikge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQucXVlc3Rpb24gPSByZXMucXVlc3Rpb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucmVhbENvbXBvbmVudCA9IHJlcy5xdWVzdGlvbjtcbiAgICAgICAgICAgIHNlbGYuY29udGFpbmVyRGl2ID0gcmVzLnF1ZXN0aW9uLmNvbnRhaW5lckRpdjtcbiAgICAgICAgICAgIHNlbGYucmVhbENvbXBvbmVudC5zZWxlY3RvcklkID0gc2VsZWN0b3JJZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnRvZ2dsZU9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlTGFiZWxzID0gZGF0YS50b2dnbGVMYWJlbHMucmVwbGFjZShcInRvZ2dsZWxhYmVsczpcIiwgXCJcIikudHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2dnbGVMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGFiZWxzID0gdG9nZ2xlTGFiZWxzLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdCA9IDA7IHQgPCB0b2dnbGVMYWJlbHMubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUxhYmVsc1t0XSA9IHRvZ2dsZUxhYmVsc1t0XS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zLnNwbGl0KFwiLCBcIik7XG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVVJID0gXCJcIjtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBzbyB0aGF0IG9ubHkgdGhlIGZpcnN0IHRvZ2dsZSBzZWxlY3QgcXVlc3Rpb24gb24gdGhlIGFzc2lnbm1lbnRzIHBhZ2UgaGFzIGEgcHJldmlldyBwYW5lbCBjcmVhdGVkLCB0aGVuIGFsbCB0b2dnbGUgc2VsZWN0IHByZXZpZXdzIHVzZSB0aGlzIHNhbWUgcGFuZWxcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcG9uZW50LXByZXZpZXdcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwiY29tcG9uZW50LXByZXZpZXdcIiBjbGFzcz1cImNvbC1tZC02IHRvZ2dsZS1wcmV2aWV3XCIgc3R5bGU9XCJ6LWluZGV4OiA5OTk7XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJ0b2dnbGUtYnV0dG9uc1wiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGlkPVwidG9nZ2xlLXByZXZpZXdcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkcm9wZG93biBtZW51IGNvbnRhaW5pbmcgdGhlIHF1ZXN0aW9uIG9wdGlvbnNcbiAgICAgICAgICAgICAgICB0b2dnbGVVSSArPVxuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cIicgK1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcklkICtcbiAgICAgICAgICAgICAgICAgICAgJy10b2dnbGVRdWVzdGlvblwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHhcIj5Ub2dnbGUgUXVlc3Rpb246PC9sYWJlbD48c2VsZWN0IGlkPVwiJyArXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ySWQgK1xuICAgICAgICAgICAgICAgICAgICAnLXRvZ2dsZVF1ZXN0aW9uXCI+JztcbiAgICAgICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25IVE1MU3JjO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVRdWVzdGlvblN1YnN0cmluZztcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25UeXBlO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVRdWVzdGlvblR5cGVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRvZ2dsZVF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvbkhUTUxTcmMgPSBhd2FpdCB0aGlzLmdldFRvZ2dsZVNyYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uc1tpXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblN1YnN0cmluZyA9IHRvZ2dsZVF1ZXN0aW9uSFRNTFNyYy5zcGxpdChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNvbXBvbmVudD1cIidcbiAgICAgICAgICAgICAgICAgICAgKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU3Vic3RyaW5nLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TdWJzdHJpbmcuaW5kZXhPZignXCInKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhY3RpdmVjb2RlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJBY3RpdmUgV3JpdGUgQ29kZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImNsaWNrYWJsZWFyZWFcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgPSBcIkNsaWNrYWJsZSBBcmVhXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZHJhZ25kcm9wXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJEcmFnIG4gRHJvcFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImZpbGxpbnRoZWJsYW5rXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJGaWxsIGluIHRoZSBCbGFua1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIm11bHRpcGxlY2hvaWNlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJNdWx0aXBsZSBDaG9pY2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJwYXJzb25zXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJQYXJzb25zIE1peGVkLVVwIENvZGVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJzaG9ydGFuc3dlclwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiU2hvcnQgQW5zd2VyXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlc1tpXSA9IHRvZ2dsZVF1ZXN0aW9uVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz1cbiAgICAgICAgICAgICAgICAgICAgICAgICc8b3B0aW9uIHZhbHVlPVwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvbnNbaV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPic7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2dnbGVMYWJlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2dnbGVMYWJlbHNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPSB0b2dnbGVMYWJlbHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPSB0b2dnbGVRdWVzdGlvblR5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVVJICs9IHRvZ2dsZVF1ZXN0aW9uVHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKGkgPT0gMCkgJiYgKGRhdGEudG9nZ2xlT3B0aW9ucy5pbmNsdWRlcyhcImxvY2tcIikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPSBcIiAob25seSB0aGlzIHF1ZXN0aW9uIHdpbGwgYmUgZ3JhZGVkKVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZVVJICs9IFwiPC9vcHRpb24+XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvZ2dsZVVJICs9XG4gICAgICAgICAgICAgICAgICAgICc8L3NlbGVjdD48ZGl2IGlkPVwiJyArXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ySWQgK1xuICAgICAgICAgICAgICAgICAgICAnLXRvZ2dsZVNlbGVjdGVkUXVlc3Rpb25cIj4nO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVGaXJzdElEID0gaHRtbHNyYy5zcGxpdCgnaWQ9XCInKVsxXTtcbiAgICAgICAgICAgICAgICB0b2dnbGVGaXJzdElEID0gdG9nZ2xlRmlyc3RJRC5zcGxpdCgnXCInKVswXTtcbiAgICAgICAgICAgICAgICBodG1sc3JjID0gdG9nZ2xlVUkgKyBodG1sc3JjICsgXCI8L2Rpdj5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGp1c3QgcmVuZGVyIHRoaXMgY29tcG9uZW50IG9uIHRoZSBwYWdlIGluIGl0cyB1c3VhbCBwbGFjZVxuICAgICAgICAgICAgYXdhaXQgcmVuZGVyUnVuZXN0b25lQ29tcG9uZW50KGh0bWxzcmMsIHNlbGVjdG9ySWQsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rvcl9pZDogc2VsZWN0b3JJZCxcbiAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGRhdGEudG9nZ2xlT3B0aW9ucykge1xuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVRdWVzdGlvblNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcklkICsgXCItdG9nZ2xlUXVlc3Rpb25cIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRvZ2dsZVF1ZXN0aW9uU2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3Qub3B0aW9uc1tpXS52YWx1ZSA9PSB0b2dnbGVGaXJzdElEXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3QudmFsdWUgPSB0b2dnbGVGaXJzdElEO1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNcIiArIHNlbGVjdG9ySWQpLmRhdGEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b2dnbGVfY3VycmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUZpcnN0SURcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiI1wiICsgc2VsZWN0b3JJZCkuZGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvZ2dsZV9jdXJyZW50X3R5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy50b2dnbGVQcmV2aWV3KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0LnBhcmVudEVsZW1lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS50b2dnbGVPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIC8vIHJldHJpZXZlIGh0bWwgc291cmNlIG9mIGEgcXVlc3Rpb24sIGZvciB1c2UgaW4gdmFyaW91cyB0b2dnbGUgZnVuY3Rpb25hbGl0aWVzXG4gICAgYXN5bmMgZ2V0VG9nZ2xlU3JjKHRvZ2dsZVF1ZXN0aW9uSUQpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcbiAgICAgICAgICAgIFwiL3J1bmVzdG9uZS9hZG1pbi9odG1sc3JjP2FjaWQ9XCIgKyB0b2dnbGVRdWVzdGlvbklELFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XG4gICAgICAgIGxldCBodG1sc3JjID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gaHRtbHNyYztcbiAgICB9XG5cbiAgICAvLyBvbiBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdG9nZ2xlIHNlbGVjdCBkcm9wZG93biwgcmVuZGVyIHNlbGVjdGVkIHF1ZXN0aW9uIGluIHByZXZpZXcgcGFuZWwsIGFkZCBhcHByb3ByaWF0ZSBidXR0b25zLCB0aGVuIG1ha2UgcHJldmlldyBwYW5lbCB2aXNpYmxlXG4gICAgYXN5bmMgdG9nZ2xlUHJldmlldyhwYXJlbnRJRCwgdG9nZ2xlT3B0aW9ucywgdG9nZ2xlUXVlc3Rpb25UeXBlcykge1xuICAgICAgICAkKFwiI3RvZ2dsZS1idXR0b25zXCIpLmh0bWwoXCJcIik7XG4gICAgICAgIHZhciBwYXJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRCk7XG4gICAgICAgIHZhciB0b2dnbGVRdWVzdGlvblNlbGVjdCA9IHBhcmVudERpdi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKVswXTtcbiAgICAgICAgdmFyIHNlbGVjdGVkUXVlc3Rpb24gPVxuICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3Qub3B0aW9uc1t0b2dnbGVRdWVzdGlvblNlbGVjdC5zZWxlY3RlZEluZGV4XVxuICAgICAgICAgICAgICAgIC52YWx1ZTtcbiAgICAgICAgdmFyIGh0bWxzcmMgPSBhd2FpdCB0aGlzLmdldFRvZ2dsZVNyYyhzZWxlY3RlZFF1ZXN0aW9uKTtcbiAgICAgICAgcmVuZGVyUnVuZXN0b25lQ29tcG9uZW50KGh0bWxzcmMsIFwidG9nZ2xlLXByZXZpZXdcIiwge1xuICAgICAgICAgICAgc2VsZWN0b3JfaWQ6IFwidG9nZ2xlLXByZXZpZXdcIixcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGQgXCJDbG9zZSBQcmV2aWV3XCIgYnV0dG9uIHRvIHRoZSBwcmV2aWV3IHBhbmVsXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQoY2xvc2VCdXR0b24pLnRleHQoXCJDbG9zZSBQcmV2aWV3XCIpO1xuICAgICAgICAkKGNsb3NlQnV0dG9uKS5hZGRDbGFzcyhcImJ0biBidG4tZGVmYXVsdFwiKTtcbiAgICAgICAgJChjbG9zZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAkKFwiI3RvZ2dsZS1wcmV2aWV3XCIpLmh0bWwoXCJcIik7XG4gICAgICAgICAgICB0b2dnbGVRdWVzdGlvblNlbGVjdC52YWx1ZSA9ICQoXCIjXCIgKyBwYXJlbnRJRCkuZGF0YShcbiAgICAgICAgICAgICAgICBcInRvZ2dsZV9jdXJyZW50XCJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAkKFwiI2NvbXBvbmVudC1wcmV2aWV3XCIpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoXCIjdG9nZ2xlLWJ1dHRvbnNcIikuYXBwZW5kKGNsb3NlQnV0dG9uKTtcblxuICAgICAgICAvLyBpZiBcImxvY2tcIiBpcyBub3QgaW4gdG9nZ2xlIG9wdGlvbnMsIHRoZW4gYWxsb3cgYWRkaW5nIG1vcmUgYnV0dG9ucyB0byB0aGUgcHJldmlldyBwYW5lbCBcbiAgICAgICAgaWYgKCEodG9nZ2xlT3B0aW9ucy5pbmNsdWRlcyhcImxvY2tcIikpKSB7XG4gICAgICAgICAgICBsZXQgc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICQoc2V0QnV0dG9uKS50ZXh0KFwiU2VsZWN0IHRoaXMgUHJvYmxlbVwiKTtcbiAgICAgICAgICAgICQoc2V0QnV0dG9uKS5hZGRDbGFzcyhcImJ0biBidG4tcHJpbWFyeVwiKTtcbiAgICAgICAgICAgICQoc2V0QnV0dG9uKS5jbGljayhcbiAgICAgICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudG9nZ2xlU2V0KHBhcmVudElELCBzZWxlY3RlZFF1ZXN0aW9uLCBodG1sc3JjLCB0b2dnbGVRdWVzdGlvblR5cGVzKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNjb21wb25lbnQtcHJldmlld1wiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgJChcIiN0b2dnbGUtYnV0dG9uc1wiKS5hcHBlbmQoc2V0QnV0dG9uKTtcblxuICAgICAgICAgICAgLy8gaWYgXCJ0cmFuc2ZlclwiIGluIHRvZ2dsZSBvcHRpb25zLCBhbmQgaWYgY3VycmVudCBxdWVzdGlvbiB0eXBlIGlzIFBhcnNvbnMgYW5kIHNlbGVjdGVkIHF1ZXN0aW9uIHR5cGUgaXMgYWN0aXZlIGNvZGUsIHRoZW4gYWRkIFwiVHJhbnNmZXJcIiBidXR0b24gdG8gcHJldmlldyBwYW5lbFxuICAgICAgICAgICAgaWYgKHRvZ2dsZU9wdGlvbnMuaW5jbHVkZXMoXCJ0cmFuc2ZlclwiKSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9ICQoXCIjXCIgKyBwYXJlbnRJRCkuZGF0YShcInRvZ2dsZV9jdXJyZW50X3R5cGVcIik7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkVHlwZSA9IHRvZ2dsZVF1ZXN0aW9uVHlwZXNbdG9nZ2xlUXVlc3Rpb25TZWxlY3Quc2VsZWN0ZWRJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKChjdXJyZW50VHlwZSA9PSBcIlBhcnNvbnMgTWl4ZWQtVXAgQ29kZVwiKSAmJiAoc2VsZWN0ZWRUeXBlID09IFwiQWN0aXZlIFdyaXRlIENvZGVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zZmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0cmFuc2ZlckJ1dHRvbikudGV4dChcIlRyYW5zZmVyIFJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAkKHRyYW5zZmVyQnV0dG9uKS5hZGRDbGFzcyhcImJ0biBidG4tcHJpbWFyeVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0cmFuc2ZlckJ1dHRvbikuY2xpY2soXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy50b2dnbGVUcmFuc2ZlcihwYXJlbnRJRCwgc2VsZWN0ZWRRdWVzdGlvbiwgaHRtbHNyYywgdG9nZ2xlUXVlc3Rpb25UeXBlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiN0b2dnbGUtYnV0dG9uc1wiKS5hcHBlbmQodHJhbnNmZXJCdXR0b24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuc2hvdygpO1xuICAgIH1cblxuICAgIC8vIG9uIGNsaWNraW5nIFwiU2VsZWN0IHRoaXMgUHJvYmxlbVwiIGJ1dHRvbiwgY2xvc2UgcHJldmlldyBwYW5lbCwgcmVwbGFjZSBjdXJyZW50IHF1ZXN0aW9uIGluIGFzc2lnbm1lbnRzIHBhZ2Ugd2l0aCBzZWxlY3RlZCBxdWVzdGlvbiwgYW5kIHNlbmQgcmVxdWVzdCB0byB1cGRhdGUgZ3JhZGluZyBkYXRhYmFzZVxuICAgIGFzeW5jIHRvZ2dsZVNldChwYXJlbnRJRCwgc2VsZWN0ZWRRdWVzdGlvbiwgaHRtbHNyYywgdG9nZ2xlUXVlc3Rpb25UeXBlcykge1xuICAgICAgICB2YXIgc2VsZWN0b3JJZCA9IHBhcmVudElEICsgXCItdG9nZ2xlU2VsZWN0ZWRRdWVzdGlvblwiO1xuICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25TZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRCkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMF07XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ySWQpLmlubmVySFRNTCA9IFwiXCI7IC8vIG5lZWQgdG8gY2hlY2sgd2hldGhlciB0aGlzIGlzIGV2ZW4gbmVjZXNzYXJ5XG4gICAgICAgIGF3YWl0IHJlbmRlclJ1bmVzdG9uZUNvbXBvbmVudChodG1sc3JjLCBzZWxlY3RvcklkLCB7XG4gICAgICAgICAgICBzZWxlY3Rvcl9pZDogc2VsZWN0b3JJZCxcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcbiAgICAgICAgICAgIFwiL3J1bmVzdG9uZS9hamF4L3VwZGF0ZV9zZWxlY3RlZF9xdWVzdGlvbj9tZXRhaWQ9XCIgK1xuICAgICAgICAgICAgICAgIHBhcmVudElEICtcbiAgICAgICAgICAgICAgICBcIiZzZWxlY3RlZD1cIiArXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRRdWVzdGlvbixcbiAgICAgICAgICAgIHt9XG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IGZldGNoKHJlcXVlc3QpO1xuICAgICAgICAkKFwiI3RvZ2dsZS1wcmV2aWV3XCIpLmh0bWwoXCJcIik7XG4gICAgICAgICQoXCIjXCIgKyBwYXJlbnRJRCkuZGF0YShcInRvZ2dsZV9jdXJyZW50XCIsIHNlbGVjdGVkUXVlc3Rpb24pO1xuICAgICAgICAkKFwiI1wiICsgcGFyZW50SUQpLmRhdGEoXCJ0b2dnbGVfY3VycmVudF90eXBlXCIsIHRvZ2dsZVF1ZXN0aW9uVHlwZXNbdG9nZ2xlUXVlc3Rpb25TZWxlY3Quc2VsZWN0ZWRJbmRleF0pO1xuICAgIH1cblxuICAgIC8vIG9uIGNsaWNraW5nIFwiVHJhbnNmZXJcIiBidXR0b24sIGV4dHJhY3QgdGhlIGN1cnJlbnQgdGV4dCBhbmQgaW5kZW50YXRpb24gb2YgdGhlIFBhcnNvbnMgYmxvY2tzIGluIHRoZSBhbnN3ZXIgc3BhY2UsIHRoZW4gcGFzdGUgdGhhdCBpbnRvIHRoZSBzZWxlY3RlZCBhY3RpdmUgY29kZSBxdWVzdGlvblxuICAgIGFzeW5jIHRvZ2dsZVRyYW5zZmVyKHBhcmVudElELCBzZWxlY3RlZFF1ZXN0aW9uLCBodG1sc3JjLCB0b2dnbGVRdWVzdGlvblR5cGVzKSB7XG4gICAgICAgIC8vIHJldHJpZXZlIGFsbCBQYXJzb25zIGxpbmVzIHdpdGhpbiB0aGUgYW5zd2VyIHNwYWNlIGFuZCBsb29wIHRocm91Z2ggdGhpcyBsaXN0XG4gICAgICAgIHZhciBjdXJyZW50UGFyc29ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElEICsgXCItdG9nZ2xlU2VsZWN0ZWRRdWVzdGlvblwiKS5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2W2NsYXNzXj0nYW5zd2VyJ11cIilbMF0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByZXR0eXByaW50IGxhbmctcHlcIik7XG4gICAgICAgIHZhciBjdXJyZW50UGFyc29uc0NsYXNzO1xuICAgICAgICB2YXIgY3VycmVudEJsb2NrSW5kZW50O1xuICAgICAgICB2YXIgaW5kZW50Q291bnRcbiAgICAgICAgdmFyIGluZGVudDtcbiAgICAgICAgdmFyIHBhcnNvbnNMaW5lO1xuICAgICAgICB2YXIgcGFyc29uc0xpbmVzID0gYGA7XG4gICAgICAgIHZhciBjb3VudDtcbiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBjdXJyZW50UGFyc29ucy5sZW5ndGg7IHArKykge1xuICAgICAgICAgICAgaW5kZW50Q291bnQgPSAwO1xuICAgICAgICAgICAgaW5kZW50ID0gXCJcIjtcbiAgICAgICAgICAgIC8vIGZvciBQYXJzb25zIGJsb2NrcyB0aGF0IGhhdmUgYnVpbHQtaW4gaW5kZW50YXRpb24gaW4gdGhlaXIgbGluZXNcbiAgICAgICAgICAgIGN1cnJlbnRQYXJzb25zQ2xhc3MgPSBjdXJyZW50UGFyc29uc1twXS5jbGFzc0xpc3RbMl07XG4gICAgICAgICAgICBpZiAoY3VycmVudFBhcnNvbnNDbGFzcykge1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFyc29uc0NsYXNzLmluY2x1ZGVzKFwiaW5kZW50XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGVudENvdW50ID0gcGFyc2VJbnQoaW5kZW50Q291bnQpICsgcGFyc2VJbnQoY3VycmVudFBhcnNvbnNDbGFzcy5zbGljZSg2LGN1cnJlbnRQYXJzb25zQ2xhc3MubGVuZ3RoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZm9yIFBhcnNvbnMgYW5zd2VyIHNwYWNlcyB3aXRoIHZlcnRpY2FsIGxpbmVzIHRoYXQgYWxsb3cgc3R1ZGVudCB0byBkZWZpbmUgdGhlaXIgb3duIGxpbmUgaW5kZW50YXRpb25cbiAgICAgICAgICAgIGN1cnJlbnRCbG9ja0luZGVudCA9IGN1cnJlbnRQYXJzb25zW3BdLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5sZWZ0O1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRCbG9ja0luZGVudCkge1xuICAgICAgICAgICAgICAgIGluZGVudENvdW50ID0gcGFyc2VJbnQoaW5kZW50Q291bnQpICsgcGFyc2VJbnQoY3VycmVudEJsb2NrSW5kZW50LnNsaWNlKDAsY3VycmVudEJsb2NrSW5kZW50LmluZGV4T2YoXCJweFwiKSkgLyAzMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBkID0gMDsgZCA8IGluZGVudENvdW50OyBkKyspIHtcbiAgICAgICAgICAgICAgICBpbmRlbnQgKz0gXCIgICAgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXRyaWV2ZSBlYWNoIHRleHQgc25pcHBldCBvZiBlYWNoIFBhcnNvbnMgbGluZSBhbmQgbG9vcCB0aHJvdWdoIHRoaXMgbGlzdFxuICAgICAgICAgICAgcGFyc29uc0xpbmUgPSBjdXJyZW50UGFyc29uc1twXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNwYW5cIik7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBsID0gMDsgbCA8IHBhcnNvbnNMaW5lLmxlbmd0aDsgbCsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNvbnNMaW5lW2xdLmNoaWxkTm9kZXNbMF0ubm9kZU5hbWUgPT0gXCIjdGV4dFwiKSB7IC8vIFBhcnNvbnMgYmxvY2tzIGhhdmUgZGlmZmVyaW5nIGFtb3VudHMgb2YgaGllcmFyY2h5IGxldmVscyAoc3BhbnMgd2l0aGluIHNwYW5zKVxuICAgICAgICAgICAgICAgICAgICBpZiAoKHAgPT0gMCkgJiYgKGNvdW50ID09IDApKSB7IC8vIG5lZWQgZGlmZmVyZW50IGNoZWNrIHRoYW4gbCA9PSAwIGJlY2F1c2UgdGhlIGwgbnVtYmVyaW5nIGRvZXNuJ3QgYWxpZ24gd2l0aCBsb2NhdGlvbiB3aXRoaW4gbGluZSBkdWUgdG8gaW5jb25zaXN0ZW50IHNwYW4gaGVpcmFyY2h5XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzb25zTGluZXMgKz0gaW5kZW50ICsgcGFyc29uc0xpbmVbbF0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb3VudCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzb25zTGluZXMgKz0gcGFyc29uc0xpbmVbbF0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNvbnNMaW5lcyA9IHBhcnNvbnNMaW5lcyArIGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgICsgaW5kZW50ICsgcGFyc29uc0xpbmVbbF0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc29uc0xpbmVzID0gcGFyc29uc0xpbmVzLnJlcGxhY2UoXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZXBsYWNlIGFsbCBleGlzdGluZyBjb2RlIHdpdGhpbiBzZWxlY3RlZCBhY3RpdmUgY29kZSBxdWVzdGlvbiB3aXRoIGV4dHJhY3RlZCBQYXJzb25zIHRleHRcbiAgICAgICAgdmFyIGh0bWxzcmNGb3JtZXIgPSBodG1sc3JjLnNsaWNlKDAsIGh0bWxzcmMuaW5kZXhPZihcIjx0ZXh0YXJlYVwiKSArIGh0bWxzcmMuc3BsaXQoXCI8dGV4dGFyZWFcIilbMV0uaW5kZXhPZihcIj5cIikgKyAxMCk7XG4gICAgICAgIHZhciBodG1sc3JjTGF0dGVyID0gaHRtbHNyYy5zbGljZShodG1sc3JjLmluZGV4T2YoXCI8L3RleHRhcmVhPlwiKSwgaHRtbHNyYy5sZW5ndGgpO1xuICAgICAgICBodG1sc3JjID0gaHRtbHNyY0Zvcm1lciArIHBhcnNvbnNMaW5lcyArIGh0bWxzcmNMYXR0ZXI7XG5cbiAgICAgICAgYXdhaXQgdGhpcy50b2dnbGVTZXQocGFyZW50SUQsIHNlbGVjdGVkUXVlc3Rpb24sIGh0bWxzcmMsIHRvZ2dsZVF1ZXN0aW9uVHlwZXMpO1xuICAgICAgICAkKFwiI2NvbXBvbmVudC1wcmV2aWV3XCIpLmhpZGUoKTtcbiAgICB9XG59XG5cblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cblxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LnNlbGVjdHF1ZXN0aW9uID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RPbmUob3B0cyk7XG59O1xuXG4vKlxuICogV2hlbiB0aGUgcGFnZSBpcyBsb2FkZWQgYW5kIHRoZSBsb2dpbiBjaGVja3MgYXJlIGNvbXBsZXRlIGZpbmQgYW5kIHJlbmRlclxuICogZWFjaCBzZWxlY3RxdWVzdGlvbiBjb21wb25lbnQgdGhhdCBpcyBub3QgcGFydCBvZiBhIHRpbWVkQXNzZXNzbWVudC5cbiAqKi9cbiQoZG9jdW1lbnQpLmJpbmQoXCJydW5lc3RvbmU6bG9naW4tY29tcGxldGVcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCBzZWxRdWVzdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICBcIltkYXRhLWNvbXBvbmVudD1zZWxlY3RxdWVzdGlvbl1cIlxuICAgICk7XG4gICAgZm9yIChsZXQgY3Egb2Ygc2VsUXVlc3Rpb25zKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoJChjcSkuY2xvc2VzdChcIltkYXRhLWNvbXBvbmVudD10aW1lZEFzc2Vzc21lbnRdXCIpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBlbGVtZW50IGV4aXN0cyB3aXRoaW4gYSB0aW1lZCBjb21wb25lbnQsIGRvbid0IHJlbmRlciBpdCBoZXJlXG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IG5ldyBTZWxlY3RPbmUoeyBvcmlnOiBjcSB9KTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0bXAuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgTmV3IEV4ZXJjaXNlICR7Y3EuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9