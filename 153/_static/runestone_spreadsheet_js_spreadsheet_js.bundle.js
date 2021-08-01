(self["webpackChunkWebComponents"] = self["webpackChunkWebComponents"] || []).push([["runestone_spreadsheet_js_spreadsheet_js"],{

/***/ 77381:
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./runestone/spreadsheet/css/spreadsheet.css ***!
  \*****************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "div.runestone .jexcel_container {\r\n    max-height: 550px;\r\n    overflow: scroll;\r\n    max-width: 800px;\r\n    overflow: scroll;\r\n}", "",{"version":3,"sources":["webpack://./runestone/spreadsheet/css/spreadsheet.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB","sourcesContent":["div.runestone .jexcel_container {\r\n    max-height: 550px;\r\n    overflow: scroll;\r\n    max-width: 800px;\r\n    overflow: scroll;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 28047:
/*!***************************************************!*\
  !*** ./runestone/spreadsheet/css/spreadsheet.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_spreadsheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./spreadsheet.css */ 77381);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_spreadsheet_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_spreadsheet_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ 60611:
/*!*************************************************!*\
  !*** ./runestone/spreadsheet/js/spreadsheet.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/js/runestonebase */ 2568);
/* harmony import */ var jexcel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jexcel */ 27010);
/* harmony import */ var jexcel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jexcel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_spreadsheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/spreadsheet.css */ 28047);
/* harmony import */ var jexcel_dist_jexcel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jexcel/dist/jexcel.css */ 64304);








window.ssList = {};

class SpreadSheet extends _common_js_runestonebase__WEBPACK_IMPORTED_MODULE_0__.default {
    constructor(opts) {
        super(opts);
        let orig = opts.orig;
        this.div_id = orig.id;
        this.sheet_id = `${this.div_id}_sheet`;
        this.data = eval(`${this.div_id}_data`);
        this.autograde = $(orig).data("autograde");
        this.suffix = window[`${this.div_id}_asserts`];
        this.mindimensions = $(orig).data("mindimensions");
        this.colwidths = $(orig).data("colwidths");
        this.coltitles = eval($(orig).data("coltitles"));
        this.maxHeight = 50;
        // Render the components
        this.renderSheet();

        if (this.autograde) {
            this.addAutoGradeButton();
            this.addOutput();
        }

        this.caption = "Spreadsheet";
        this.divid = this.div_id;
        this.containerDiv = document.getElementById(this.div_id);
        this.addCaption("runestone");
        this.indicate_component_ready();
    }

    renderSheet() {
        let div = document.getElementById(this.sheet_id);
        let opts = { data: this.data, tableHeight: this.maxHeight };
        if (this.mindimensions) {
            opts.minDimensions = this.mindimensions;
        }
        opts.columns = [];
        if (this.colwidths) {
            for (let w of this.colwidths) {
                opts.columns.push({ width: w });
            }
        }
        if (this.coltitles) {
            for (let i in this.coltitles) {
                if (opts.columns[i]) {
                    opts.columns[i].title = unescape(this.coltitles[i]);
                } else {
                    opts.columns.push({ title: this.coltitles[i] });
                }
            }
        }

        this.table = jexcel__WEBPACK_IMPORTED_MODULE_1___default()(div, opts);

        // Set background of cells that are autograded
        if (this.suffix) {
            for (let test of this.suffix) {
                let assert, loc, oper, expected;
                [assert, loc, oper, expected] = test.split(/\s+/);
                $(`#${this.div_id}_sheet`)
                    .find(this.getCellSelector(loc))
                    .css("background-color", "#d4e3ff");
            }
        }
    }

    addAutoGradeButton() {
        let div = document.getElementById(this.div_id);
        var butt = document.createElement("button");
        $(butt).text("Check");
        $(butt).addClass("btn btn-success run-button");
        div.appendChild(butt);
        this.gradeButton = butt;
        $(butt).click(this.doAutoGrade.bind(this));
        $(butt).attr("type", "button");
        $(butt).css("display", "block");
    }

    addOutput() {
        this.output = document.createElement("pre");
        this.output.id = `${this.div_id}_stdout`;
        $(this.output).css("visibility", "hidden");
        let div = document.getElementById(this.div_id);
        div.appendChild(this.output);
    }

    doAutoGrade() {
        let tests = this.suffix;
        this.passed = 0;
        this.failed = 0;
        // Tests should be of the form
        // assert cell oper value for example
        // assert A4 == 3
        let result = "";
        tests = tests.filter(function (s) {
            return s.indexOf("assert") > -1;
        });
        for (let test of tests) {
            let assert, loc, oper, expected;
            [assert, loc, oper, expected] = test.split(/\s+/);
            result += this.testOneAssert(loc, oper, expected);
            result += "\n";
        }
        let pct = (100 * this.passed) / (this.passed + this.failed);
        pct = pct.toLocaleString(undefined, { maximumFractionDigits: 2 });
        result += `You passed ${this.passed} out of ${
            this.passed + this.failed
        } tests for ${pct}%`;
        this.logBookEvent({
            event: "unittest",
            div_id: this.div_id,
            course: eBookConfig.course,
            act: `percent:${pct}:passed:${this.passed}:failed:${this.failed}`,
        });
        $(this.output).css("visibility", "visible");
        $(this.output).text(result);
    }

    testOneAssert(cell, oper, expected) {
        let actual = this.getCellDisplayValue(cell);
        const operators = {
            "==": function (operand1, operand2) {
                return operand1 == operand2;
            },
            "!=": function (operand1, operand2) {
                return operand1 != operand2;
            },
            ">": function (operand1, operand2) {
                return operand1 > operand2;
            },
            "<": function (operand1, operand2) {
                return operand1 > operand2;
            },
        };

        let res = operators[oper](actual, expected);
        let output = "";
        if (res) {
            output = `Pass: ${actual} ${oper} ${expected} in ${cell}`;
            $(`#${this.div_id}_sheet`)
                .find(this.getCellSelector(cell))
                .css("background-color", "#ccffcc");
            this.passed++;
        } else {
            output = `Failed ${actual} ${oper} ${expected} in cell ${cell}`;
            $(`#${this.div_id}_sheet`)
                .find(this.getCellSelector(cell))
                .css("background-color", "#ff9980");
            this.failed++;
        }
        return output;
    }

    // If the cell contains a formula, this call will return the formula not the computed value
    getCellSource(cell) {
        return this.table.getValue(cell);
    }

    // If the cell contains a formula this call will return the computed value
    getCellDisplayValue(cell) {
        let res = this.table.el.querySelector(this.getCellSelector(cell));
        return res.innerText;
    }

    getCellSelector(cell) {
        let parts = cell.match(/\$?([A-Z]+)\$?([0-9]+)/);
        let x = this.columnToIndex(parts[1]);
        let y = parts[2] - 1;
        return `[data-x="${x}"][data-y="${y}"]`;
    }
    columnToIndex(colName) {
        // Convert the column name to a number A = 0 AA = 26 BA = 52, etc
        let base = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = 0;

        for (
            let i = 0, j = colName.length - 1;
            i < colName.length;
            i += 1, j -= 1
        ) {
            result += Math.pow(base.length, j) * (base.indexOf(colName[i]) + 1);
        }

        return result - 1;
    }
}

$(document).bind("runestone:login-complete", function () {
    $("[data-component=spreadsheet]").each(function (index) {
        // MC
        var opts = {
            orig: this,
            useRunestoneServices: eBookConfig.useRunestoneServices,
        };
        try {
            window.ssList[this.id] = new SpreadSheet(opts);
        } catch (err) {
            console.log(`Error rendering SpreadSheet Problem ${this.id}
                         Details: ${err}`);
            console.log(err.stack);
        }
    });
});

if (typeof window.component_factory === "undefined") {
    window.component_factory = {};
}
window.component_factory.spreadsheet = function (opts) {
    return new SpreadSheet(opts);
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3NwcmVhZHNoZWV0L2Nzcy9zcHJlYWRzaGVldC5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zcHJlYWRzaGVldC9jc3Mvc3ByZWFkc2hlZXQuY3NzPzI5NTAiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zcHJlYWRzaGVldC9qcy9zcHJlYWRzaGVldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyRUFBMkUsMEJBQTBCLHlCQUF5Qix5QkFBeUIseUJBQXlCLEtBQUssT0FBTyw0R0FBNEcsWUFBWSxhQUFhLGFBQWEsYUFBYSwyREFBMkQsMEJBQTBCLHlCQUF5Qix5QkFBeUIseUJBQXlCLEtBQUssbUJBQW1CO0FBQ25oQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQy9GLFlBQW1HOztBQUVuRzs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyx5RkFBTzs7OztBQUl4QixpRUFBZSxnR0FBYyxNQUFNLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnRCOztBQUU2QztBQUM5QjtBQUNJO0FBQ0E7QUFDQTs7QUFFaEM7O0FBRUEsMEJBQTBCLDZEQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkMsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHVDQUF1QywyQkFBMkI7QUFDbEU7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw2Q0FBTTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCLFlBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMkJBQTJCO0FBQ3hFLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0EsU0FBUyxhQUFhLElBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSxVQUFVLFlBQVksVUFBVSxZQUFZO0FBQzVFLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsT0FBTyxHQUFHLEtBQUssR0FBRyxTQUFTLE1BQU0sS0FBSztBQUNwRSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0JBQStCLE9BQU8sR0FBRyxLQUFLLEdBQUcsU0FBUyxXQUFXLEtBQUs7QUFDMUUsa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRSxhQUFhLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULCtEQUErRDtBQUMvRCxvQ0FBb0MsSUFBSTtBQUN4QztBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJ1bmVzdG9uZV9zcHJlYWRzaGVldF9qc19zcHJlYWRzaGVldF9qcy5idW5kbGUuanM/dj0yNWJlOWEyMWVmZmYyNGJkY2Q0YSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LnJ1bmVzdG9uZSAuamV4Y2VsX2NvbnRhaW5lciB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDU1MHB4O1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9ydW5lc3RvbmUvc3ByZWFkc2hlZXQvY3NzL3NwcmVhZHNoZWV0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaXYucnVuZXN0b25lIC5qZXhjZWxfY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxuICAgIG1heC13aWR0aDogODAwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NwcmVhZHNoZWV0LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuaW1wb3J0IFJ1bmVzdG9uZUJhc2UgZnJvbSBcIi4uLy4uL2NvbW1vbi9qcy9ydW5lc3RvbmViYXNlXCI7XHJcbmltcG9ydCBqZXhjZWwgZnJvbSBcImpleGNlbFwiO1xyXG5pbXBvcnQgXCIuLi9jc3Mvc3ByZWFkc2hlZXQuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9zcHJlYWRzaGVldC5jc3NcIjtcclxuaW1wb3J0IFwiamV4Y2VsL2Rpc3QvamV4Y2VsLmNzc1wiO1xyXG5cclxud2luZG93LnNzTGlzdCA9IHt9O1xyXG5cclxuY2xhc3MgU3ByZWFkU2hlZXQgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdHMpIHtcclxuICAgICAgICBzdXBlcihvcHRzKTtcclxuICAgICAgICBsZXQgb3JpZyA9IG9wdHMub3JpZztcclxuICAgICAgICB0aGlzLmRpdl9pZCA9IG9yaWcuaWQ7XHJcbiAgICAgICAgdGhpcy5zaGVldF9pZCA9IGAke3RoaXMuZGl2X2lkfV9zaGVldGA7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZXZhbChgJHt0aGlzLmRpdl9pZH1fZGF0YWApO1xyXG4gICAgICAgIHRoaXMuYXV0b2dyYWRlID0gJChvcmlnKS5kYXRhKFwiYXV0b2dyYWRlXCIpO1xyXG4gICAgICAgIHRoaXMuc3VmZml4ID0gd2luZG93W2Ake3RoaXMuZGl2X2lkfV9hc3NlcnRzYF07XHJcbiAgICAgICAgdGhpcy5taW5kaW1lbnNpb25zID0gJChvcmlnKS5kYXRhKFwibWluZGltZW5zaW9uc1wiKTtcclxuICAgICAgICB0aGlzLmNvbHdpZHRocyA9ICQob3JpZykuZGF0YShcImNvbHdpZHRoc1wiKTtcclxuICAgICAgICB0aGlzLmNvbHRpdGxlcyA9IGV2YWwoJChvcmlnKS5kYXRhKFwiY29sdGl0bGVzXCIpKTtcclxuICAgICAgICB0aGlzLm1heEhlaWdodCA9IDUwO1xyXG4gICAgICAgIC8vIFJlbmRlciB0aGUgY29tcG9uZW50c1xyXG4gICAgICAgIHRoaXMucmVuZGVyU2hlZXQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b2dyYWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQXV0b0dyYWRlQnV0dG9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkT3V0cHV0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIlNwcmVhZHNoZWV0XCI7XHJcbiAgICAgICAgdGhpcy5kaXZpZCA9IHRoaXMuZGl2X2lkO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaXZfaWQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcclxuICAgICAgICB0aGlzLmluZGljYXRlX2NvbXBvbmVudF9yZWFkeSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNoZWV0KCkge1xyXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNoZWV0X2lkKTtcclxuICAgICAgICBsZXQgb3B0cyA9IHsgZGF0YTogdGhpcy5kYXRhLCB0YWJsZUhlaWdodDogdGhpcy5tYXhIZWlnaHQgfTtcclxuICAgICAgICBpZiAodGhpcy5taW5kaW1lbnNpb25zKSB7XHJcbiAgICAgICAgICAgIG9wdHMubWluRGltZW5zaW9ucyA9IHRoaXMubWluZGltZW5zaW9ucztcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0cy5jb2x1bW5zID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuY29sd2lkdGhzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHcgb2YgdGhpcy5jb2x3aWR0aHMpIHtcclxuICAgICAgICAgICAgICAgIG9wdHMuY29sdW1ucy5wdXNoKHsgd2lkdGg6IHcgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29sdGl0bGVzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jb2x0aXRsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRzLmNvbHVtbnNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRzLmNvbHVtbnNbaV0udGl0bGUgPSB1bmVzY2FwZSh0aGlzLmNvbHRpdGxlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdHMuY29sdW1ucy5wdXNoKHsgdGl0bGU6IHRoaXMuY29sdGl0bGVzW2ldIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnRhYmxlID0gamV4Y2VsKGRpdiwgb3B0cyk7XHJcblxyXG4gICAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIG9mIGNlbGxzIHRoYXQgYXJlIGF1dG9ncmFkZWRcclxuICAgICAgICBpZiAodGhpcy5zdWZmaXgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdGVzdCBvZiB0aGlzLnN1ZmZpeCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFzc2VydCwgbG9jLCBvcGVyLCBleHBlY3RlZDtcclxuICAgICAgICAgICAgICAgIFthc3NlcnQsIGxvYywgb3BlciwgZXhwZWN0ZWRdID0gdGVzdC5zcGxpdCgvXFxzKy8pO1xyXG4gICAgICAgICAgICAgICAgJChgIyR7dGhpcy5kaXZfaWR9X3NoZWV0YClcclxuICAgICAgICAgICAgICAgICAgICAuZmluZCh0aGlzLmdldENlbGxTZWxlY3Rvcihsb2MpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiI2Q0ZTNmZlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRBdXRvR3JhZGVCdXR0b24oKSB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZGl2X2lkKTtcclxuICAgICAgICB2YXIgYnV0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgJChidXR0KS50ZXh0KFwiQ2hlY2tcIik7XHJcbiAgICAgICAgJChidXR0KS5hZGRDbGFzcyhcImJ0biBidG4tc3VjY2VzcyBydW4tYnV0dG9uXCIpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0KTtcclxuICAgICAgICB0aGlzLmdyYWRlQnV0dG9uID0gYnV0dDtcclxuICAgICAgICAkKGJ1dHQpLmNsaWNrKHRoaXMuZG9BdXRvR3JhZGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgJChidXR0KS5hdHRyKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAkKGJ1dHQpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRPdXRwdXQoKSB7XHJcbiAgICAgICAgdGhpcy5vdXRwdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpO1xyXG4gICAgICAgIHRoaXMub3V0cHV0LmlkID0gYCR7dGhpcy5kaXZfaWR9X3N0ZG91dGA7XHJcbiAgICAgICAgJCh0aGlzLm91dHB1dCkuY3NzKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaXZfaWQpO1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLm91dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9BdXRvR3JhZGUoKSB7XHJcbiAgICAgICAgbGV0IHRlc3RzID0gdGhpcy5zdWZmaXg7XHJcbiAgICAgICAgdGhpcy5wYXNzZWQgPSAwO1xyXG4gICAgICAgIHRoaXMuZmFpbGVkID0gMDtcclxuICAgICAgICAvLyBUZXN0cyBzaG91bGQgYmUgb2YgdGhlIGZvcm1cclxuICAgICAgICAvLyBhc3NlcnQgY2VsbCBvcGVyIHZhbHVlIGZvciBleGFtcGxlXHJcbiAgICAgICAgLy8gYXNzZXJ0IEE0ID09IDNcclxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICB0ZXN0cyA9IHRlc3RzLmZpbHRlcihmdW5jdGlvbiAocykge1xyXG4gICAgICAgICAgICByZXR1cm4gcy5pbmRleE9mKFwiYXNzZXJ0XCIpID4gLTE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgdGVzdCBvZiB0ZXN0cykge1xyXG4gICAgICAgICAgICBsZXQgYXNzZXJ0LCBsb2MsIG9wZXIsIGV4cGVjdGVkO1xyXG4gICAgICAgICAgICBbYXNzZXJ0LCBsb2MsIG9wZXIsIGV4cGVjdGVkXSA9IHRlc3Quc3BsaXQoL1xccysvKTtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMudGVzdE9uZUFzc2VydChsb2MsIG9wZXIsIGV4cGVjdGVkKTtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiXFxuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwY3QgPSAoMTAwICogdGhpcy5wYXNzZWQpIC8gKHRoaXMucGFzc2VkICsgdGhpcy5mYWlsZWQpO1xyXG4gICAgICAgIHBjdCA9IHBjdC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xyXG4gICAgICAgIHJlc3VsdCArPSBgWW91IHBhc3NlZCAke3RoaXMucGFzc2VkfSBvdXQgb2YgJHtcclxuICAgICAgICAgICAgdGhpcy5wYXNzZWQgKyB0aGlzLmZhaWxlZFxyXG4gICAgICAgIH0gdGVzdHMgZm9yICR7cGN0fSVgO1xyXG4gICAgICAgIHRoaXMubG9nQm9va0V2ZW50KHtcclxuICAgICAgICAgICAgZXZlbnQ6IFwidW5pdHRlc3RcIixcclxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdl9pZCxcclxuICAgICAgICAgICAgY291cnNlOiBlQm9va0NvbmZpZy5jb3Vyc2UsXHJcbiAgICAgICAgICAgIGFjdDogYHBlcmNlbnQ6JHtwY3R9OnBhc3NlZDoke3RoaXMucGFzc2VkfTpmYWlsZWQ6JHt0aGlzLmZhaWxlZH1gLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQodGhpcy5vdXRwdXQpLmNzcyhcInZpc2liaWxpdHlcIiwgXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgICQodGhpcy5vdXRwdXQpLnRleHQocmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZXN0T25lQXNzZXJ0KGNlbGwsIG9wZXIsIGV4cGVjdGVkKSB7XHJcbiAgICAgICAgbGV0IGFjdHVhbCA9IHRoaXMuZ2V0Q2VsbERpc3BsYXlWYWx1ZShjZWxsKTtcclxuICAgICAgICBjb25zdCBvcGVyYXRvcnMgPSB7XHJcbiAgICAgICAgICAgIFwiPT1cIjogZnVuY3Rpb24gKG9wZXJhbmQxLCBvcGVyYW5kMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhbmQxID09IG9wZXJhbmQyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIiE9XCI6IGZ1bmN0aW9uIChvcGVyYW5kMSwgb3BlcmFuZDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcGVyYW5kMSAhPSBvcGVyYW5kMjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCI+XCI6IGZ1bmN0aW9uIChvcGVyYW5kMSwgb3BlcmFuZDIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcGVyYW5kMSA+IG9wZXJhbmQyO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcIjxcIjogZnVuY3Rpb24gKG9wZXJhbmQxLCBvcGVyYW5kMikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhbmQxID4gb3BlcmFuZDI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IHJlcyA9IG9wZXJhdG9yc1tvcGVyXShhY3R1YWwsIGV4cGVjdGVkKTtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gXCJcIjtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgIG91dHB1dCA9IGBQYXNzOiAke2FjdHVhbH0gJHtvcGVyfSAke2V4cGVjdGVkfSBpbiAke2NlbGx9YDtcclxuICAgICAgICAgICAgJChgIyR7dGhpcy5kaXZfaWR9X3NoZWV0YClcclxuICAgICAgICAgICAgICAgIC5maW5kKHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKGNlbGwpKVxyXG4gICAgICAgICAgICAgICAgLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjY2NmZmNjXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhc3NlZCsrO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG91dHB1dCA9IGBGYWlsZWQgJHthY3R1YWx9ICR7b3Blcn0gJHtleHBlY3RlZH0gaW4gY2VsbCAke2NlbGx9YDtcclxuICAgICAgICAgICAgJChgIyR7dGhpcy5kaXZfaWR9X3NoZWV0YClcclxuICAgICAgICAgICAgICAgIC5maW5kKHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKGNlbGwpKVxyXG4gICAgICAgICAgICAgICAgLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjZmY5OTgwXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmZhaWxlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBjZWxsIGNvbnRhaW5zIGEgZm9ybXVsYSwgdGhpcyBjYWxsIHdpbGwgcmV0dXJuIHRoZSBmb3JtdWxhIG5vdCB0aGUgY29tcHV0ZWQgdmFsdWVcclxuICAgIGdldENlbGxTb3VyY2UoY2VsbCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlLmdldFZhbHVlKGNlbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIElmIHRoZSBjZWxsIGNvbnRhaW5zIGEgZm9ybXVsYSB0aGlzIGNhbGwgd2lsbCByZXR1cm4gdGhlIGNvbXB1dGVkIHZhbHVlXHJcbiAgICBnZXRDZWxsRGlzcGxheVZhbHVlKGNlbGwpIHtcclxuICAgICAgICBsZXQgcmVzID0gdGhpcy50YWJsZS5lbC5xdWVyeVNlbGVjdG9yKHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKGNlbGwpKTtcclxuICAgICAgICByZXR1cm4gcmVzLmlubmVyVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZWxsU2VsZWN0b3IoY2VsbCkge1xyXG4gICAgICAgIGxldCBwYXJ0cyA9IGNlbGwubWF0Y2goL1xcJD8oW0EtWl0rKVxcJD8oWzAtOV0rKS8pO1xyXG4gICAgICAgIGxldCB4ID0gdGhpcy5jb2x1bW5Ub0luZGV4KHBhcnRzWzFdKTtcclxuICAgICAgICBsZXQgeSA9IHBhcnRzWzJdIC0gMTtcclxuICAgICAgICByZXR1cm4gYFtkYXRhLXg9XCIke3h9XCJdW2RhdGEteT1cIiR7eX1cIl1gO1xyXG4gICAgfVxyXG4gICAgY29sdW1uVG9JbmRleChjb2xOYW1lKSB7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgY29sdW1uIG5hbWUgdG8gYSBudW1iZXIgQSA9IDAgQUEgPSAyNiBCQSA9IDUyLCBldGNcclxuICAgICAgICBsZXQgYmFzZSA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpcIjtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAgICAgbGV0IGkgPSAwLCBqID0gY29sTmFtZS5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICBpIDwgY29sTmFtZS5sZW5ndGg7XHJcbiAgICAgICAgICAgIGkgKz0gMSwgaiAtPSAxXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBNYXRoLnBvdyhiYXNlLmxlbmd0aCwgaikgKiAoYmFzZS5pbmRleE9mKGNvbE5hbWVbaV0pICsgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0IC0gMTtcclxuICAgIH1cclxufVxyXG5cclxuJChkb2N1bWVudCkuYmluZChcInJ1bmVzdG9uZTpsb2dpbi1jb21wbGV0ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXNwcmVhZHNoZWV0XVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgIC8vIE1DXHJcbiAgICAgICAgdmFyIG9wdHMgPSB7XHJcbiAgICAgICAgICAgIG9yaWc6IHRoaXMsXHJcbiAgICAgICAgICAgIHVzZVJ1bmVzdG9uZVNlcnZpY2VzOiBlQm9va0NvbmZpZy51c2VSdW5lc3RvbmVTZXJ2aWNlcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zc0xpc3RbdGhpcy5pZF0gPSBuZXcgU3ByZWFkU2hlZXQob3B0cyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgU3ByZWFkU2hlZXQgUHJvYmxlbSAke3RoaXMuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBEZXRhaWxzOiAke2Vycn1gKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdy5jb21wb25lbnRfZmFjdG9yeSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93LmNvbXBvbmVudF9mYWN0b3J5ID0ge307XHJcbn1cclxud2luZG93LmNvbXBvbmVudF9mYWN0b3J5LnNwcmVhZHNoZWV0ID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgIHJldHVybiBuZXcgU3ByZWFkU2hlZXQob3B0cyk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=