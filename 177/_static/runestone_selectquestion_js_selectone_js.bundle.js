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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3NlbGVjdHF1ZXN0aW9uL2Nzcy9zZWxlY3RxdWVzdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zZWxlY3RxdWVzdGlvbi9jc3Mvc2VsZWN0cXVlc3Rpb24uY3NzP2Q4MmYiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9jb21tb24vanMvcmVuZGVyQ29tcG9uZW50LmpzIiwid2VicGFjazovL1dlYkNvbXBvbmVudHMvLi9ydW5lc3RvbmUvc2VsZWN0cXVlc3Rpb24vanMvc2VsZWN0b25lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEg7QUFDN0I7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDJEQUEyRCwwQkFBMEIsNEJBQTRCLGdDQUFnQywwQkFBMEIsc0NBQXNDLEtBQUssV0FBVyxrSEFBa0gsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLDJDQUEyQywwQkFBMEIsNEJBQTRCLGdDQUFnQywwQkFBMEIsc0NBQXNDLEtBQUssdUJBQXVCO0FBQ2huQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQXNHOztBQUV0Rzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw0RkFBTzs7OztBQUl4QixpRUFBZSxtR0FBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWjBCOztBQUV0RDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixtQkFBbUIsdUJBQXVCO0FBQ3JFO0FBQ0EsZUFBZSxTQUFTOztBQUV4QjtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLFNBQVM7QUFDekM7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQsdUVBQXVFO0FBQ3ZFLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxXQUFXO0FBQ3BEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0RBQXdEO0FBQ3hELG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoicnVuZXN0b25lX3NlbGVjdHF1ZXN0aW9uX2pzX3NlbGVjdG9uZV9qcy5idW5kbGUuanM/dj1hMTg5NzEzMmIzMzQ1OGZjMWJkYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRvZ2dsZS1wcmV2aWV3IHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMTBweCA1cHggNXB4IGdyYXk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9zZWxlY3RxdWVzdGlvbi9jc3Mvc2VsZWN0cXVlc3Rpb24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudG9nZ2xlLXByZXZpZXcge1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxMHB4IDVweCA1cHggZ3JheTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2VsZWN0cXVlc3Rpb24uY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgcnVuZXN0b25lX2ltcG9ydCB9IGZyb20gXCIuLi8uLi8uLi93ZWJwYWNrLmluZGV4LmpzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyUnVuZXN0b25lQ29tcG9uZW50KGNvbXBvbmVudFNyYywgd2hlcmVEaXYsIG1vcmVPcHRzKSB7XHJcbiAgICAvKipcclxuICAgICAqICBUaGUgZWFzeSBwYXJ0IGlzIGFkZGluZyB0aGUgY29tcG9uZW50U3JjIHRvIHRoZSBleGlzdGluZyBkaXYuXHJcbiAgICAgKiAgVGhlIHRlZGlvdXMgcGFydCBpcyBjYWxsaW5nIHRoZSByaWdodCBmdW5jdGlvbnMgdG8gdHVybiB0aGVcclxuICAgICAqICBzb3VyY2UgaW50byB0aGUgYWN0dWFsIGNvbXBvbmVudC5cclxuICAgICAqL1xyXG4gICAgaWYgKCFjb21wb25lbnRTcmMpIHtcclxuICAgICAgICBqUXVlcnkoYCMke3doZXJlRGl2fWApLmh0bWwoYDxwPlNvcnJ5LCBubyBzb3VyY2UgaXMgYXZhaWxhYmxlIGZvciBwcmV2aWV3LjwvcD5gKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcGF0dCA9IC8uLlxcL19pbWFnZXMvZztcclxuICAgIGNvbXBvbmVudFNyYyA9IGNvbXBvbmVudFNyYy5yZXBsYWNlKFxyXG4gICAgICAgIHBhdHQsXHJcbiAgICAgICAgYCR7ZUJvb2tDb25maWcuYXBwfS9ib29rcy9wdWJsaXNoZWQvJHtlQm9va0NvbmZpZy5iYXNlY291cnNlfS9faW1hZ2VzYFxyXG4gICAgKTtcclxuICAgIGpRdWVyeShgIyR7d2hlcmVEaXZ9YCkuaHRtbChjb21wb25lbnRTcmMpO1xyXG5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93LmVkTGlzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIHdpbmRvdy5lZExpc3QgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY29tcG9uZW50S2luZCA9ICQoJChgIyR7d2hlcmVEaXZ9IFtkYXRhLWNvbXBvbmVudF1gKVswXSkuZGF0YShcclxuICAgICAgICBcImNvbXBvbmVudFwiXHJcbiAgICApO1xyXG4gICAgLy8gSW1wb3J0IHRoZSBKYXZhU2NyaXB0IGZvciB0aGlzIGNvbXBvbmVudCBiZWZvcmUgcHJvY2VlZGluZy5cclxuICAgIGF3YWl0IHJ1bmVzdG9uZV9pbXBvcnQoY29tcG9uZW50S2luZCk7XHJcbiAgICBsZXQgb3B0ID0ge307XHJcbiAgICBvcHQub3JpZyA9IGpRdWVyeShgIyR7d2hlcmVEaXZ9IFtkYXRhLWNvbXBvbmVudF1gKVswXTtcclxuICAgIGlmIChvcHQub3JpZykge1xyXG4gICAgICAgIG9wdC5sYW5nID0gJChvcHQub3JpZykuZGF0YShcImxhbmdcIik7XHJcbiAgICAgICAgb3B0LnVzZVJ1bmVzdG9uZVNlcnZpY2VzID0gdHJ1ZTtcclxuICAgICAgICBvcHQuZ3JhZGVyYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgb3B0LnB5dGhvbjMgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbW9yZU9wdHMgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG1vcmVPcHRzKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRba2V5XSA9IG1vcmVPcHRzW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICBcIkVycm9yOiAgTWlzc2luZyB0aGUgY29tcG9uZW50IGZhY3RvcnkhXCJcclxuICAgICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICF3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbY29tcG9uZW50S2luZF0gJiZcclxuICAgICAgICAgICAgIWpRdWVyeShgIyR7d2hlcmVEaXZ9YCkuaHRtbCgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShgIyR7d2hlcmVEaXZ9YCkuaHRtbChcclxuICAgICAgICAgICAgICAgIGA8cD5QcmV2aWV3IG5vdCBhdmFpbGFibGUgZm9yICR7Y29tcG9uZW50S2luZH08L3A+YFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbY29tcG9uZW50S2luZF0ob3B0KTtcclxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudEtpbmQgPT09IFwiYWN0aXZlY29kZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9yZU9wdHMubXVsdGlHcmFkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuZWRMaXN0W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHttb3JlT3B0cy5ncmFkaW5nQ29udGFpbmVyfSAke3Jlcy5kaXZpZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgXSA9IHJlcztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmVkTGlzdFtyZXMuZGl2aWRdID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGltZWRDb21wb25lbnQoY29tcG9uZW50U3JjLCBtb3JlT3B0cykge1xyXG4gICAgLyogVGhlIGltcG9ydGFudCBkaXN0aW5jdGlvbiBpcyB0aGF0IHRoZSBjb21wb25lbnQgZG9lcyBub3QgcmVhbGx5IG5lZWQgdG8gYmUgcmVuZGVyZWRcclxuICAgIGludG8gdGhlIHBhZ2UsIGluIGZhY3QsIGR1ZSB0byB0aGUgYXN5bmMgbmF0dXJlIG9mIGdldHRpbmcgdGhlIHNvdXJjZSB0aGUgbGlzdCBvZiBxdWVzdGlvbnNcclxuICAgIGlzIG1hZGUgYW5kIHRoZSBvcmlnaW5hbCBodG1sIGlzIHJlcGxhY2VkIGJ5IHRoZSBsb29rIG9mIHRoZSBleGFtLlxyXG4gICAgKi9cclxuXHJcbiAgICBsZXQgcGF0dCA9IC8uLlxcL19pbWFnZXMvZztcclxuICAgIGNvbXBvbmVudFNyYyA9IGNvbXBvbmVudFNyYy5yZXBsYWNlKFxyXG4gICAgICAgIHBhdHQsXHJcbiAgICAgICAgYCR7ZUJvb2tDb25maWcuYXBwfS9ib29rcy9wdWJsaXNoZWQvJHtlQm9va0NvbmZpZy5iYXNlY291cnNlfS9faW1hZ2VzYFxyXG4gICAgKTtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50S2luZCA9ICQoJChjb21wb25lbnRTcmMpLmZpbmQoXCJbZGF0YS1jb21wb25lbnRdXCIpWzBdKS5kYXRhKFxyXG4gICAgICAgIFwiY29tcG9uZW50XCJcclxuICAgICk7XHJcblxyXG4gICAgbGV0IG9yaWdJZCA9ICQoY29tcG9uZW50U3JjKS5maW5kKFwiW2RhdGEtY29tcG9uZW50XVwiKS5maXJzdCgpLmF0dHIoXCJpZFwiKTtcclxuXHJcbiAgICAvLyBEb3VibGUgY2hlY2sgLS0gaWYgdGhlIGNvbXBvbmVudCBzb3VyY2UgaXMgbm90IGluIHRoZSBET00sIHRoZW4gYnJpZWZseSBhZGQgaXRcclxuICAgIC8vIGFuZCBjYWxsIHRoZSBjb25zdHJ1Y3Rvci5cclxuICAgIGxldCBoZGl2O1xyXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvcmlnSWQpKSB7XHJcbiAgICAgICAgaGRpdiA9ICQoXCI8ZGl2Lz5cIiwge1xyXG4gICAgICAgICAgICBjc3M6IHsgZGlzcGxheTogXCJub25lXCIgfSxcclxuICAgICAgICB9KS5hcHBlbmRUbyhcImJvZHlcIik7XHJcbiAgICAgICAgaGRpdi5odG1sKGNvbXBvbmVudFNyYyk7XHJcbiAgICB9XHJcbiAgICAvLyBhdCB0aGlzIHBvaW50IGhkaXYgaXMgYSBqcXVlcnkgb2JqZWN0XHJcblxyXG4gICAgbGV0IHJldDtcclxuICAgIGxldCBvcHRzID0ge1xyXG4gICAgICAgIG9yaWc6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9yaWdJZCksXHJcbiAgICAgICAgdGltZWQ6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgaWYgKHR5cGVvZiBtb3JlT3B0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBtb3JlT3B0cykge1xyXG4gICAgICAgICAgICBvcHRzW2tleV0gPSBtb3JlT3B0c1trZXldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY29tcG9uZW50S2luZCBpbiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkpIHtcclxuICAgICAgICByZXQgPSB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnlbY29tcG9uZW50S2luZF0ob3B0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJkaWN0ID0ge307XHJcbiAgICByZGljdC5xdWVzdGlvbiA9IHJldDtcclxuICAgIHJldHVybiByZGljdDtcclxufVxyXG4iLCIvKipcclxuICogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gKiB8ZG9jbmFtZXwgLSBTZWxlY3RPbmUgQ29tcG9uZW50XHJcbiAqICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICovXHJcbmltcG9ydCB7XHJcbiAgICByZW5kZXJSdW5lc3RvbmVDb21wb25lbnQsXHJcbiAgICBjcmVhdGVUaW1lZENvbXBvbmVudCxcclxufSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3JlbmRlckNvbXBvbmVudC5qc1wiO1xyXG5pbXBvcnQgUnVuZXN0b25lQmFzZSBmcm9tIFwiLi4vLi4vY29tbW9uL2pzL3J1bmVzdG9uZWJhc2UuanNcIjtcclxuaW1wb3J0IFwiLi4vY3NzL3NlbGVjdHF1ZXN0aW9uLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VsZWN0T25lIGV4dGVuZHMgUnVuZXN0b25lQmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIGNvbnN0cnVjdG9yIC0tXHJcbiAgICAgKiBNYWtpbmcgYW4gaW5zdGFuY2Ugb2YgYSBzZWxlY3RvbmUgaXMgYSBiaXQgbW9yZSBjb21wbGljYXRlZCBiZWNhdXNlIGl0IGlzXHJcbiAgICAgKiBhIGtpbmQgb2YgbWV0YSBkaXJlY3RpdmUuICBUaGF0IGlzLCBnbyB0byB0aGUgc2VydmVyIGFuZCByYW5kb21seSBzZWxlY3RcclxuICAgICAqIGEgcXVlc3Rpb24gdG8gZGlzcGxheSBpbiB0aGlzIHNwb3QuICBPciwgaWYgYSBzdHVkZW50IGhhcyBhbHJlYWR5IHNlZW4gdGhpcyBxdWVzdGlvblxyXG4gICAgICogaW4gdGhlIGNvbnRleHQgb2YgYW4gZXhhbSByZXRyaWV2ZSB0aGUgcXVlc3Rpb24gdGhleSBzYXcgaW4gdGhlIGZpcnN0IHBsYWNlLlxyXG4gICAgICogTWFraW5nIGFuIEFQSSBjYWxsIGFuZCB3YWl0aW5nIGZvciB0aGUgcmVzcG9uc2UgaXMgaGFuZGxlZCBhc3luY2hyb25vdXNseS5cclxuICAgICAqIEJ1dCBsb3RzIG9mIGNvZGUgaXMgbm90IHdyaXR0ZW4gd2l0aCB0aGF0IGFzc3VtcHRpb24uICBTbyB3ZSBkbyB0aGUgaW5pdGlhbGl6YXRpb24gaW5cclxuICAgICAqIHR3byBwYXJ0cy5cclxuICAgICAqIDEuIENyZWF0ZSB0aGUgb2JqZWN0IHdpdGggdGhlIHVzdWFsIGNvbnN0cnVjdG9yXHJcbiAgICAgKiAyLiBjYWxsIGluaXRpYWxpemUsIHdoaWNoIHJldHVybnMgYSBwcm9taXNlLiAgV2hlbiB0aGF0IHByb21pc2UgaXMgcmVzb2x2ZWRcclxuICAgICAqIHRoZSBcInJlcGxhY2VtZW50XCIgY29tcG9uZW50IHdpbGwgcmVwbGFjZSB0aGUgb3JpZ2luYWwgc2VsZWN0b25lIGNvbXBvbmVudCBpbiB0aGUgRE9NLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSAge30gb3B0c1xyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XHJcbiAgICAgICAgc3VwZXIob3B0cyk7XHJcbiAgICAgICAgdGhpcy5vcmlnT3B0cyA9IG9wdHM7XHJcbiAgICAgICAgdGhpcy5xdWVzdGlvbnMgPSAkKG9wdHMub3JpZykuZGF0YShcInF1ZXN0aW9ubGlzdFwiKTtcclxuICAgICAgICB0aGlzLnByb2ZpY2llbmN5ID0gJChvcHRzLm9yaWcpLmRhdGEoXCJwcm9maWNpZW5jeVwiKTtcclxuICAgICAgICB0aGlzLm1pbkRpZmZpY3VsdHkgPSAkKG9wdHMub3JpZykuZGF0YShcIm1pbkRpZmZpY3VsdHlcIik7XHJcbiAgICAgICAgdGhpcy5tYXhEaWZmaWN1bHR5ID0gJChvcHRzLm9yaWcpLmRhdGEoXCJtYXhEaWZmaWN1bHR5XCIpO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0gJChvcHRzLm9yaWcpLmRhdGEoXCJwb2ludHNcIik7XHJcbiAgICAgICAgdGhpcy5hdXRvZ3JhZGFibGUgPSAkKG9wdHMub3JpZykuZGF0YShcImF1dG9ncmFkYWJsZVwiKTtcclxuICAgICAgICB0aGlzLm5vdF9zZWVuX2V2ZXIgPSAkKG9wdHMub3JpZykuZGF0YShcIm5vdF9zZWVuX2V2ZXJcIik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rvcl9pZCA9ICQob3B0cy5vcmlnKS5maXJzdCgpLmF0dHIoXCJpZFwiKTtcclxuICAgICAgICB0aGlzLnByaW1hcnlPbmx5ID0gJChvcHRzLm9yaWcpLmRhdGEoXCJwcmltYXJ5XCIpO1xyXG4gICAgICAgIHRoaXMuQUJFeHBlcmltZW50ID0gJChvcHRzLm9yaWcpLmRhdGEoXCJhYlwiKTtcclxuICAgICAgICB0aGlzLnRvZ2dsZU9wdGlvbnMgPSAkKG9wdHMub3JpZykuZGF0YShcInRvZ2dsZW9wdGlvbnNcIik7XHJcbiAgICAgICAgdGhpcy50b2dnbGVMYWJlbHMgPSAkKG9wdHMub3JpZykuZGF0YShcInRvZ2dsZWxhYmVsc1wiKTtcclxuICAgICAgICBvcHRzLm9yaWcuaWQgPSB0aGlzLnNlbGVjdG9yX2lkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBpbml0aWFsaXplIC0tXHJcbiAgICAgKiBpbml0aWFsaXplIGlzIHVzZWQgc28gdGhhdCB0aGUgY29uc3RydWN0b3IgZG9lcyBub3QgaGF2ZSB0byBiZSBhc3luYy5cclxuICAgICAqIENvbnN0cnVjdG9ycyBzaG91bGQgZGVmaW5pdGVseSBub3QgcmV0dXJuIHByb21pc2VzIHRoYXQgd291bGQgc2VyaW91c2x5XHJcbiAgICAgKiBtZXNzIHRoaW5ncyB1cC5cclxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IFdpbGwgcmVzb2x2ZSBhZnRlciBjb21wb25lbnQgZnJvbSBEQiBpcyByZWlmaWVkXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBkYXRhID0geyBzZWxlY3Rvcl9pZDogdGhpcy5zZWxlY3Rvcl9pZCB9O1xyXG4gICAgICAgIGlmICh0aGlzLnF1ZXN0aW9ucykge1xyXG4gICAgICAgICAgICBkYXRhLnF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9maWNpZW5jeSkge1xyXG4gICAgICAgICAgICBkYXRhLnByb2ZpY2llbmN5ID0gdGhpcy5wcm9maWNpZW5jeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWluRGlmZmljdWx0eSkge1xyXG4gICAgICAgICAgICBkYXRhLm1pbkRpZmZpY3VsdHkgPSB0aGlzLm1pbkRpZmZpY3VsdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1heERpZmZpY3VsdHkpIHtcclxuICAgICAgICAgICAgZGF0YS5tYXhEaWZmaWN1bHR5ID0gdGhpcy5tYXhEaWZmaWN1bHR5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wb2ludHMpIHtcclxuICAgICAgICAgICAgZGF0YS5wb2ludHMgPSB0aGlzLnBvaW50cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b2dyYWRhYmxlKSB7XHJcbiAgICAgICAgICAgIGRhdGEuYXV0b2dyYWRhYmxlID0gdGhpcy5hdXRvZ3JhZGFibGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vdF9zZWVuX2V2ZXIpIHtcclxuICAgICAgICAgICAgZGF0YS5ub3Rfc2Vlbl9ldmVyID0gdGhpcy5ub3Rfc2Vlbl9ldmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcmltYXJ5T25seSkge1xyXG4gICAgICAgICAgICBkYXRhLnByaW1hcnkgPSB0aGlzLnByaW1hcnlPbmx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5BQkV4cGVyaW1lbnQpIHtcclxuICAgICAgICAgICAgZGF0YS5BQiA9IHRoaXMuQUJFeHBlcmltZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50aW1lZFdyYXBwZXIpIHtcclxuICAgICAgICAgICAgZGF0YS50aW1lZFdyYXBwZXIgPSB0aGlzLnRpbWVkV3JhcHBlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudG9nZ2xlT3B0aW9ucykge1xyXG4gICAgICAgICAgICBkYXRhLnRvZ2dsZU9wdGlvbnMgPSB0aGlzLnRvZ2dsZU9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvZ2dsZUxhYmVscykge1xyXG4gICAgICAgICAgICBkYXRhLnRvZ2dsZUxhYmVscyA9IHRoaXMudG9nZ2xlTGFiZWxzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb3B0cyA9IHRoaXMub3JpZ09wdHM7XHJcbiAgICAgICAgbGV0IHNlbGVjdG9ySWQgPSB0aGlzLnNlbGVjdG9yX2lkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0dGluZyBxdWVzdGlvbiBzb3VyY2VcIik7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdChcIi9ydW5lc3RvbmUvYWpheC9nZXRfcXVlc3Rpb25fc291cmNlXCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5qc29uSGVhZGVycyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCk7XHJcbiAgICAgICAgbGV0IGh0bWxzcmMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKGh0bWxzcmMuaW5kZXhPZihcIk5vIHByZXZpZXdcIikgPj0gMCkge1xyXG4gICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgIGBFcnJvcjogTm90IGFibGUgdG8gZmluZCBhIHF1ZXN0aW9uIGZvciAke3NlbGVjdG9ySWR9IGJhc2VkIG9uIHRoZSBjcml0ZXJpYWBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmFibGUgdG8gZmluZCBhIHF1ZXN0aW9uIGZvciAke3NlbGVjdG9ySWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgaWYgKG9wdHMudGltZWQpIHtcclxuICAgICAgICAgICAgLy8gdGltZWQgY29tcG9uZW50cyBhcmUgbm90IHJlbmRlcmVkIGltbWVkaWF0ZWx5LCBvbmx5IHdoZW4gdGhlIHN0dWRlbnRcclxuICAgICAgICAgICAgLy8gc3RhcnRzIHRoZSBhc3Nlc3NtZW50IGFuZCB2aXNpdHMgdGhpcyBwYXJ0aWN1bGFyIGVudHJ5LlxyXG4gICAgICAgICAgICByZXMgPSBjcmVhdGVUaW1lZENvbXBvbmVudChodG1sc3JjLCB7XHJcbiAgICAgICAgICAgICAgICB0aW1lZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdG9yX2lkOiBzZWxlY3RvcklkLFxyXG4gICAgICAgICAgICAgICAgYXNzZXNzbWVudFRha2VuOiBvcHRzLmFzc2Vzc21lbnRUYWtlbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIGVudHJ5IGluIHRoZSB0aW1lZCBhc3Nlc3NtZW50J3MgbGlzdCBvZiBjb21wb25lbnRzXHJcbiAgICAgICAgICAgIC8vIHdpdGggdGhlIGNvbXBvbmVudCBjcmVhdGVkIGJ5IGNyZWF0ZVRpbWVkQ29tcG9uZW50XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbXBvbmVudCBvZiBvcHRzLnJxYSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5xdWVzdGlvbiA9PSBzZWxmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LnF1ZXN0aW9uID0gcmVzLnF1ZXN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYucmVhbENvbXBvbmVudCA9IHJlcy5xdWVzdGlvbjtcclxuICAgICAgICAgICAgc2VsZi5jb250YWluZXJEaXYgPSByZXMucXVlc3Rpb24uY29udGFpbmVyRGl2O1xyXG4gICAgICAgICAgICBzZWxmLnJlYWxDb21wb25lbnQuc2VsZWN0b3JJZCA9IHNlbGVjdG9ySWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEudG9nZ2xlT3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUxhYmVscyA9IGRhdGEudG9nZ2xlTGFiZWxzLnJlcGxhY2UoXCJ0b2dnbGVsYWJlbHM6XCIsIFwiXCIpLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0b2dnbGVMYWJlbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVMYWJlbHMgPSB0b2dnbGVMYWJlbHMuc3BsaXQoXCIsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgdG9nZ2xlTGFiZWxzLmxlbmd0aDsgdCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUxhYmVsc1t0XSA9IHRvZ2dsZUxhYmVsc1t0XS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zLnNwbGl0KFwiLCBcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlVUkgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgc28gdGhhdCBvbmx5IHRoZSBmaXJzdCB0b2dnbGUgc2VsZWN0IHF1ZXN0aW9uIG9uIHRoZSBhc3NpZ25tZW50cyBwYWdlIGhhcyBhIHByZXZpZXcgcGFuZWwgY3JlYXRlZCwgdGhlbiBhbGwgdG9nZ2xlIHNlbGVjdCBwcmV2aWV3cyB1c2UgdGhpcyBzYW1lIHBhbmVsXHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcG9uZW50LXByZXZpZXdcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBpZD1cImNvbXBvbmVudC1wcmV2aWV3XCIgY2xhc3M9XCJjb2wtbWQtNiB0b2dnbGUtcHJldmlld1wiIHN0eWxlPVwiei1pbmRleDogOTk5O1wiPicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJ0b2dnbGUtYnV0dG9uc1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgaWQ9XCJ0b2dnbGUtcHJldmlld1wiPjwvZGl2PicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGRyb3Bkb3duIG1lbnUgY29udGFpbmluZyB0aGUgcXVlc3Rpb24gb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz1cclxuICAgICAgICAgICAgICAgICAgICAnPGxhYmVsIGZvcj1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ySWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICctdG9nZ2xlUXVlc3Rpb25cIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4XCI+VG9nZ2xlIFF1ZXN0aW9uOjwvbGFiZWw+PHNlbGVjdCBpZD1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ySWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICctdG9nZ2xlUXVlc3Rpb25cIj4nO1xyXG4gICAgICAgICAgICAgICAgdmFyIGk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlUXVlc3Rpb25IVE1MU3JjO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9uU3Vic3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9uVHlwZTtcclxuICAgICAgICAgICAgICAgIHZhciB0b2dnbGVRdWVzdGlvblR5cGVzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9nZ2xlUXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25IVE1MU3JjID0gYXdhaXQgdGhpcy5nZXRUb2dnbGVTcmMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TdWJzdHJpbmcgPSB0b2dnbGVRdWVzdGlvbkhUTUxTcmMuc3BsaXQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhLWNvbXBvbmVudD1cIidcclxuICAgICAgICAgICAgICAgICAgICApWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU3Vic3RyaW5nLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU3Vic3RyaW5nLmluZGV4T2YoJ1wiJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiYWN0aXZlY29kZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJBY3RpdmUgV3JpdGUgQ29kZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJjbGlja2FibGVhcmVhXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGUgPSBcIkNsaWNrYWJsZSBBcmVhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcImRyYWduZHJvcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJEcmFnIG4gRHJvcFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJmaWxsaW50aGVibGFua1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJGaWxsIGluIHRoZSBCbGFua1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZWNob2ljZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJNdWx0aXBsZSBDaG9pY2VcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwicGFyc29uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlID0gXCJQYXJzb25zIE1peGVkLVVwIENvZGVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwic2hvcnRhbnN3ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uVHlwZSA9IFwiU2hvcnQgQW5zd2VyXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25UeXBlc1tpXSA9IHRvZ2dsZVF1ZXN0aW9uVHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPG9wdGlvbiB2YWx1ZT1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvbnNbaV0gK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnXCI+JztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9nZ2xlTGFiZWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0b2dnbGVMYWJlbHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVVJICs9IHRvZ2dsZUxhYmVsc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVVJICs9IHRvZ2dsZVF1ZXN0aW9uVHlwZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAtIFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz0gdG9nZ2xlUXVlc3Rpb25UeXBlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpID09IDApICYmIChkYXRhLnRvZ2dsZU9wdGlvbnMuaW5jbHVkZXMoXCJsb2NrXCIpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPSBcIiAob25seSB0aGlzIHF1ZXN0aW9uIHdpbGwgYmUgZ3JhZGVkKVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVVSSArPSBcIjwvb3B0aW9uPlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlVUkgKz1cclxuICAgICAgICAgICAgICAgICAgICAnPC9zZWxlY3Q+PGRpdiBpZD1cIicgK1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9ySWQgK1xyXG4gICAgICAgICAgICAgICAgICAgICctdG9nZ2xlU2VsZWN0ZWRRdWVzdGlvblwiPic7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG9nZ2xlRmlyc3RJRCA9IGh0bWxzcmMuc3BsaXQoJ2lkPVwiJylbMV07XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVGaXJzdElEID0gdG9nZ2xlRmlyc3RJRC5zcGxpdCgnXCInKVswXTtcclxuICAgICAgICAgICAgICAgIGh0bWxzcmMgPSB0b2dnbGVVSSArIGh0bWxzcmMgKyBcIjwvZGl2PlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGp1c3QgcmVuZGVyIHRoaXMgY29tcG9uZW50IG9uIHRoZSBwYWdlIGluIGl0cyB1c3VhbCBwbGFjZVxyXG4gICAgICAgICAgICBhd2FpdCByZW5kZXJSdW5lc3RvbmVDb21wb25lbnQoaHRtbHNyYywgc2VsZWN0b3JJZCwge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3JfaWQ6IHNlbGVjdG9ySWQsXHJcbiAgICAgICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRvZ2dsZU9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JJZCArIFwiLXRvZ2dsZVF1ZXN0aW9uXCJcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdG9nZ2xlUXVlc3Rpb25TZWxlY3Qub3B0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3Qub3B0aW9uc1tpXS52YWx1ZSA9PSB0b2dnbGVGaXJzdElEXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0LnZhbHVlID0gdG9nZ2xlRmlyc3RJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNcIiArIHNlbGVjdG9ySWQpLmRhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvZ2dsZV9jdXJyZW50XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVGaXJzdElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjXCIgKyBzZWxlY3RvcklkKS5kYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b2dnbGVfY3VycmVudF90eXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGVzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudG9nZ2xlUHJldmlldyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0LnBhcmVudEVsZW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnRvZ2dsZU9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVRdWVzdGlvblR5cGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXRyaWV2ZSBodG1sIHNvdXJjZSBvZiBhIHF1ZXN0aW9uLCBmb3IgdXNlIGluIHZhcmlvdXMgdG9nZ2xlIGZ1bmN0aW9uYWxpdGllc1xyXG4gICAgYXN5bmMgZ2V0VG9nZ2xlU3JjKHRvZ2dsZVF1ZXN0aW9uSUQpIHtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxyXG4gICAgICAgICAgICBcIi9ydW5lc3RvbmUvYWRtaW4vaHRtbHNyYz9hY2lkPVwiICsgdG9nZ2xlUXVlc3Rpb25JRCxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICBsZXQgaHRtbHNyYyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gaHRtbHNyYztcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbiBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdG9nZ2xlIHNlbGVjdCBkcm9wZG93biwgcmVuZGVyIHNlbGVjdGVkIHF1ZXN0aW9uIGluIHByZXZpZXcgcGFuZWwsIGFkZCBhcHByb3ByaWF0ZSBidXR0b25zLCB0aGVuIG1ha2UgcHJldmlldyBwYW5lbCB2aXNpYmxlXHJcbiAgICBhc3luYyB0b2dnbGVQcmV2aWV3KHBhcmVudElELCB0b2dnbGVPcHRpb25zLCB0b2dnbGVRdWVzdGlvblR5cGVzKSB7XHJcbiAgICAgICAgJChcIiN0b2dnbGUtYnV0dG9uc1wiKS5odG1sKFwiXCIpO1xyXG4gICAgICAgIHZhciBwYXJlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRCk7XHJcbiAgICAgICAgdmFyIHRvZ2dsZVF1ZXN0aW9uU2VsZWN0ID0gcGFyZW50RGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2VsZWN0XCIpWzBdO1xyXG4gICAgICAgIHZhciBzZWxlY3RlZFF1ZXN0aW9uID1cclxuICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3Qub3B0aW9uc1t0b2dnbGVRdWVzdGlvblNlbGVjdC5zZWxlY3RlZEluZGV4XVxyXG4gICAgICAgICAgICAgICAgLnZhbHVlO1xyXG4gICAgICAgIHZhciBodG1sc3JjID0gYXdhaXQgdGhpcy5nZXRUb2dnbGVTcmMoc2VsZWN0ZWRRdWVzdGlvbik7XHJcbiAgICAgICAgcmVuZGVyUnVuZXN0b25lQ29tcG9uZW50KGh0bWxzcmMsIFwidG9nZ2xlLXByZXZpZXdcIiwge1xyXG4gICAgICAgICAgICBzZWxlY3Rvcl9pZDogXCJ0b2dnbGUtcHJldmlld1wiLFxyXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkIFwiQ2xvc2UgUHJldmlld1wiIGJ1dHRvbiB0byB0aGUgcHJldmlldyBwYW5lbFxyXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgJChjbG9zZUJ1dHRvbikudGV4dChcIkNsb3NlIFByZXZpZXdcIik7XHJcbiAgICAgICAgJChjbG9zZUJ1dHRvbikuYWRkQ2xhc3MoXCJidG4gYnRuLWRlZmF1bHRcIik7XHJcbiAgICAgICAgJChjbG9zZUJ1dHRvbikuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICQoXCIjdG9nZ2xlLXByZXZpZXdcIikuaHRtbChcIlwiKTtcclxuICAgICAgICAgICAgdG9nZ2xlUXVlc3Rpb25TZWxlY3QudmFsdWUgPSAkKFwiI1wiICsgcGFyZW50SUQpLmRhdGEoXHJcbiAgICAgICAgICAgICAgICBcInRvZ2dsZV9jdXJyZW50XCJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgJChcIiNjb21wb25lbnQtcHJldmlld1wiKS5oaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJChcIiN0b2dnbGUtYnV0dG9uc1wiKS5hcHBlbmQoY2xvc2VCdXR0b24pO1xyXG5cclxuICAgICAgICAvLyBpZiBcImxvY2tcIiBpcyBub3QgaW4gdG9nZ2xlIG9wdGlvbnMsIHRoZW4gYWxsb3cgYWRkaW5nIG1vcmUgYnV0dG9ucyB0byB0aGUgcHJldmlldyBwYW5lbCBcclxuICAgICAgICBpZiAoISh0b2dnbGVPcHRpb25zLmluY2x1ZGVzKFwibG9ja1wiKSkpIHtcclxuICAgICAgICAgICAgbGV0IHNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICQoc2V0QnV0dG9uKS50ZXh0KFwiU2VsZWN0IHRoaXMgUHJvYmxlbVwiKTtcclxuICAgICAgICAgICAgJChzZXRCdXR0b24pLmFkZENsYXNzKFwiYnRuIGJ0bi1wcmltYXJ5XCIpO1xyXG4gICAgICAgICAgICAkKHNldEJ1dHRvbikuY2xpY2soXHJcbiAgICAgICAgICAgICAgICBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy50b2dnbGVTZXQocGFyZW50SUQsIHNlbGVjdGVkUXVlc3Rpb24sIGh0bWxzcmMsIHRvZ2dsZVF1ZXN0aW9uVHlwZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjY29tcG9uZW50LXByZXZpZXdcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICQoXCIjdG9nZ2xlLWJ1dHRvbnNcIikuYXBwZW5kKHNldEJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBcInRyYW5zZmVyXCIgaW4gdG9nZ2xlIG9wdGlvbnMsIGFuZCBpZiBjdXJyZW50IHF1ZXN0aW9uIHR5cGUgaXMgUGFyc29ucyBhbmQgc2VsZWN0ZWQgcXVlc3Rpb24gdHlwZSBpcyBhY3RpdmUgY29kZSwgdGhlbiBhZGQgXCJUcmFuc2ZlclwiIGJ1dHRvbiB0byBwcmV2aWV3IHBhbmVsXHJcbiAgICAgICAgICAgIGlmICh0b2dnbGVPcHRpb25zLmluY2x1ZGVzKFwidHJhbnNmZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9ICQoXCIjXCIgKyBwYXJlbnRJRCkuZGF0YShcInRvZ2dsZV9jdXJyZW50X3R5cGVcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ZWRUeXBlID0gdG9nZ2xlUXVlc3Rpb25UeXBlc1t0b2dnbGVRdWVzdGlvblNlbGVjdC5zZWxlY3RlZEluZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmICgoY3VycmVudFR5cGUgPT0gXCJQYXJzb25zIE1peGVkLVVwIENvZGVcIikgJiYgKHNlbGVjdGVkVHlwZSA9PSBcIkFjdGl2ZSBXcml0ZSBDb2RlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRyYW5zZmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRyYW5zZmVyQnV0dG9uKS50ZXh0KFwiVHJhbnNmZXIgUmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0cmFuc2ZlckJ1dHRvbikuYWRkQ2xhc3MoXCJidG4gYnRuLXByaW1hcnlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0cmFuc2ZlckJ1dHRvbikuY2xpY2soXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMudG9nZ2xlVHJhbnNmZXIocGFyZW50SUQsIHNlbGVjdGVkUXVlc3Rpb24sIGh0bWxzcmMsIHRvZ2dsZVF1ZXN0aW9uVHlwZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdG9nZ2xlLWJ1dHRvbnNcIikuYXBwZW5kKHRyYW5zZmVyQnV0dG9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJChcIiNjb21wb25lbnQtcHJldmlld1wiKS5zaG93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb24gY2xpY2tpbmcgXCJTZWxlY3QgdGhpcyBQcm9ibGVtXCIgYnV0dG9uLCBjbG9zZSBwcmV2aWV3IHBhbmVsLCByZXBsYWNlIGN1cnJlbnQgcXVlc3Rpb24gaW4gYXNzaWdubWVudHMgcGFnZSB3aXRoIHNlbGVjdGVkIHF1ZXN0aW9uLCBhbmQgc2VuZCByZXF1ZXN0IHRvIHVwZGF0ZSBncmFkaW5nIGRhdGFiYXNlXHJcbiAgICBhc3luYyB0b2dnbGVTZXQocGFyZW50SUQsIHNlbGVjdGVkUXVlc3Rpb24sIGh0bWxzcmMsIHRvZ2dsZVF1ZXN0aW9uVHlwZXMpIHtcclxuICAgICAgICB2YXIgc2VsZWN0b3JJZCA9IHBhcmVudElEICsgXCItdG9nZ2xlU2VsZWN0ZWRRdWVzdGlvblwiO1xyXG4gICAgICAgIHZhciB0b2dnbGVRdWVzdGlvblNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmVudElEKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNlbGVjdFwiKVswXTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWxlY3RvcklkKS5pbm5lckhUTUwgPSBcIlwiOyAvLyBuZWVkIHRvIGNoZWNrIHdoZXRoZXIgdGhpcyBpcyBldmVuIG5lY2Vzc2FyeVxyXG4gICAgICAgIGF3YWl0IHJlbmRlclJ1bmVzdG9uZUNvbXBvbmVudChodG1sc3JjLCBzZWxlY3RvcklkLCB7XHJcbiAgICAgICAgICAgIHNlbGVjdG9yX2lkOiBzZWxlY3RvcklkLFxyXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFxyXG4gICAgICAgICAgICBcIi9ydW5lc3RvbmUvYWpheC91cGRhdGVfc2VsZWN0ZWRfcXVlc3Rpb24/bWV0YWlkPVwiICtcclxuICAgICAgICAgICAgICAgIHBhcmVudElEICtcclxuICAgICAgICAgICAgICAgIFwiJnNlbGVjdGVkPVwiICtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkUXVlc3Rpb24sXHJcbiAgICAgICAgICAgIHt9XHJcbiAgICAgICAgKTtcclxuICAgICAgICBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuICAgICAgICAkKFwiI3RvZ2dsZS1wcmV2aWV3XCIpLmh0bWwoXCJcIik7XHJcbiAgICAgICAgJChcIiNcIiArIHBhcmVudElEKS5kYXRhKFwidG9nZ2xlX2N1cnJlbnRcIiwgc2VsZWN0ZWRRdWVzdGlvbik7XHJcbiAgICAgICAgJChcIiNcIiArIHBhcmVudElEKS5kYXRhKFwidG9nZ2xlX2N1cnJlbnRfdHlwZVwiLCB0b2dnbGVRdWVzdGlvblR5cGVzW3RvZ2dsZVF1ZXN0aW9uU2VsZWN0LnNlbGVjdGVkSW5kZXhdKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbiBjbGlja2luZyBcIlRyYW5zZmVyXCIgYnV0dG9uLCBleHRyYWN0IHRoZSBjdXJyZW50IHRleHQgYW5kIGluZGVudGF0aW9uIG9mIHRoZSBQYXJzb25zIGJsb2NrcyBpbiB0aGUgYW5zd2VyIHNwYWNlLCB0aGVuIHBhc3RlIHRoYXQgaW50byB0aGUgc2VsZWN0ZWQgYWN0aXZlIGNvZGUgcXVlc3Rpb25cclxuICAgIGFzeW5jIHRvZ2dsZVRyYW5zZmVyKHBhcmVudElELCBzZWxlY3RlZFF1ZXN0aW9uLCBodG1sc3JjLCB0b2dnbGVRdWVzdGlvblR5cGVzKSB7XHJcbiAgICAgICAgLy8gcmV0cmlldmUgYWxsIFBhcnNvbnMgbGluZXMgd2l0aGluIHRoZSBhbnN3ZXIgc3BhY2UgYW5kIGxvb3AgdGhyb3VnaCB0aGlzIGxpc3RcclxuICAgICAgICB2YXIgY3VycmVudFBhcnNvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwYXJlbnRJRCArIFwiLXRvZ2dsZVNlbGVjdGVkUXVlc3Rpb25cIikucXVlcnlTZWxlY3RvckFsbChcImRpdltjbGFzc149J2Fuc3dlciddXCIpWzBdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcmV0dHlwcmludCBsYW5nLXB5XCIpO1xyXG4gICAgICAgIHZhciBjdXJyZW50UGFyc29uc0NsYXNzO1xyXG4gICAgICAgIHZhciBjdXJyZW50QmxvY2tJbmRlbnQ7XHJcbiAgICAgICAgdmFyIGluZGVudENvdW50XHJcbiAgICAgICAgdmFyIGluZGVudDtcclxuICAgICAgICB2YXIgcGFyc29uc0xpbmU7XHJcbiAgICAgICAgdmFyIHBhcnNvbnNMaW5lcyA9IGBgO1xyXG4gICAgICAgIHZhciBjb3VudDtcclxuICAgICAgICBmb3IgKHZhciBwID0gMDsgcCA8IGN1cnJlbnRQYXJzb25zLmxlbmd0aDsgcCsrKSB7XHJcbiAgICAgICAgICAgIGluZGVudENvdW50ID0gMDtcclxuICAgICAgICAgICAgaW5kZW50ID0gXCJcIjtcclxuICAgICAgICAgICAgLy8gZm9yIFBhcnNvbnMgYmxvY2tzIHRoYXQgaGF2ZSBidWlsdC1pbiBpbmRlbnRhdGlvbiBpbiB0aGVpciBsaW5lc1xyXG4gICAgICAgICAgICBjdXJyZW50UGFyc29uc0NsYXNzID0gY3VycmVudFBhcnNvbnNbcF0uY2xhc3NMaXN0WzJdO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFBhcnNvbnNDbGFzcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQYXJzb25zQ2xhc3MuaW5jbHVkZXMoXCJpbmRlbnRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRlbnRDb3VudCA9IHBhcnNlSW50KGluZGVudENvdW50KSArIHBhcnNlSW50KGN1cnJlbnRQYXJzb25zQ2xhc3Muc2xpY2UoNixjdXJyZW50UGFyc29uc0NsYXNzLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGZvciBQYXJzb25zIGFuc3dlciBzcGFjZXMgd2l0aCB2ZXJ0aWNhbCBsaW5lcyB0aGF0IGFsbG93IHN0dWRlbnQgdG8gZGVmaW5lIHRoZWlyIG93biBsaW5lIGluZGVudGF0aW9uXHJcbiAgICAgICAgICAgIGN1cnJlbnRCbG9ja0luZGVudCA9IGN1cnJlbnRQYXJzb25zW3BdLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5sZWZ0O1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEJsb2NrSW5kZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpbmRlbnRDb3VudCA9IHBhcnNlSW50KGluZGVudENvdW50KSArIHBhcnNlSW50KGN1cnJlbnRCbG9ja0luZGVudC5zbGljZSgwLGN1cnJlbnRCbG9ja0luZGVudC5pbmRleE9mKFwicHhcIikpIC8gMzApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGQgPSAwOyBkIDwgaW5kZW50Q291bnQ7IGQrKykge1xyXG4gICAgICAgICAgICAgICAgaW5kZW50ICs9IFwiICAgIFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHJldHJpZXZlIGVhY2ggdGV4dCBzbmlwcGV0IG9mIGVhY2ggUGFyc29ucyBsaW5lIGFuZCBsb29wIHRocm91Z2ggdGhpcyBsaXN0XHJcbiAgICAgICAgICAgIHBhcnNvbnNMaW5lID0gY3VycmVudFBhcnNvbnNbcF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDwgcGFyc29uc0xpbmUubGVuZ3RoOyBsKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJzb25zTGluZVtsXS5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lID09IFwiI3RleHRcIikgeyAvLyBQYXJzb25zIGJsb2NrcyBoYXZlIGRpZmZlcmluZyBhbW91bnRzIG9mIGhpZXJhcmNoeSBsZXZlbHMgKHNwYW5zIHdpdGhpbiBzcGFucylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHAgPT0gMCkgJiYgKGNvdW50ID09IDApKSB7IC8vIG5lZWQgZGlmZmVyZW50IGNoZWNrIHRoYW4gbCA9PSAwIGJlY2F1c2UgdGhlIGwgbnVtYmVyaW5nIGRvZXNuJ3QgYWxpZ24gd2l0aCBsb2NhdGlvbiB3aXRoaW4gbGluZSBkdWUgdG8gaW5jb25zaXN0ZW50IHNwYW4gaGVpcmFyY2h5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNvbnNMaW5lcyArPSBpbmRlbnQgKyBwYXJzb25zTGluZVtsXS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvdW50ICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyc29uc0xpbmVzICs9IHBhcnNvbnNMaW5lW2xdLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNvbnNMaW5lcyA9IHBhcnNvbnNMaW5lcyArIGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgKyBpbmRlbnQgKyBwYXJzb25zTGluZVtsXS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNvbnNMaW5lcyA9IHBhcnNvbnNMaW5lcy5yZXBsYWNlKFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmVwbGFjZSBhbGwgZXhpc3RpbmcgY29kZSB3aXRoaW4gc2VsZWN0ZWQgYWN0aXZlIGNvZGUgcXVlc3Rpb24gd2l0aCBleHRyYWN0ZWQgUGFyc29ucyB0ZXh0XHJcbiAgICAgICAgdmFyIGh0bWxzcmNGb3JtZXIgPSBodG1sc3JjLnNsaWNlKDAsIGh0bWxzcmMuaW5kZXhPZihcIjx0ZXh0YXJlYVwiKSArIGh0bWxzcmMuc3BsaXQoXCI8dGV4dGFyZWFcIilbMV0uaW5kZXhPZihcIj5cIikgKyAxMCk7XHJcbiAgICAgICAgdmFyIGh0bWxzcmNMYXR0ZXIgPSBodG1sc3JjLnNsaWNlKGh0bWxzcmMuaW5kZXhPZihcIjwvdGV4dGFyZWE+XCIpLCBodG1sc3JjLmxlbmd0aCk7XHJcbiAgICAgICAgaHRtbHNyYyA9IGh0bWxzcmNGb3JtZXIgKyBwYXJzb25zTGluZXMgKyBodG1sc3JjTGF0dGVyO1xyXG5cclxuICAgICAgICBhd2FpdCB0aGlzLnRvZ2dsZVNldChwYXJlbnRJRCwgc2VsZWN0ZWRRdWVzdGlvbiwgaHRtbHNyYywgdG9nZ2xlUXVlc3Rpb25UeXBlcyk7XHJcbiAgICAgICAgJChcIiNjb21wb25lbnQtcHJldmlld1wiKS5oaWRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XHJcbn1cclxuXHJcbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5zZWxlY3RxdWVzdGlvbiA9IGZ1bmN0aW9uIChvcHRzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTZWxlY3RPbmUob3B0cyk7XHJcbn07XHJcblxyXG4vKlxyXG4gKiBXaGVuIHRoZSBwYWdlIGlzIGxvYWRlZCBhbmQgdGhlIGxvZ2luIGNoZWNrcyBhcmUgY29tcGxldGUgZmluZCBhbmQgcmVuZGVyXHJcbiAqIGVhY2ggc2VsZWN0cXVlc3Rpb24gY29tcG9uZW50IHRoYXQgaXMgbm90IHBhcnQgb2YgYSB0aW1lZEFzc2Vzc21lbnQuXHJcbiAqKi9cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgc2VsUXVlc3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICBcIltkYXRhLWNvbXBvbmVudD1zZWxlY3RxdWVzdGlvbl1cIlxyXG4gICAgKTtcclxuICAgIGZvciAobGV0IGNxIG9mIHNlbFF1ZXN0aW9ucykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICgkKGNxKS5jbG9zZXN0KFwiW2RhdGEtY29tcG9uZW50PXRpbWVkQXNzZXNzbWVudF1cIikubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgZWxlbWVudCBleGlzdHMgd2l0aGluIGEgdGltZWQgY29tcG9uZW50LCBkb24ndCByZW5kZXIgaXQgaGVyZVxyXG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IG5ldyBTZWxlY3RPbmUoeyBvcmlnOiBjcSB9KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRtcC5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHJlbmRlcmluZyBOZXcgRXhlcmNpc2UgJHtjcS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgIERldGFpbHM6ICR7ZXJyfWApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=