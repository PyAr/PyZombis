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
___CSS_LOADER_EXPORT___.push([module.id, "div.runestone .jexcel_container {\n    max-height: 550px;\n    overflow: scroll;\n    max-width: 800px;\n    overflow: scroll;\n}", "",{"version":3,"sources":["webpack://./runestone/spreadsheet/css/spreadsheet.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,gBAAgB;AACpB","sourcesContent":["div.runestone .jexcel_container {\n    max-height: 550px;\n    overflow: scroll;\n    max-width: 800px;\n    overflow: scroll;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XZWJDb21wb25lbnRzLy4vcnVuZXN0b25lL3NwcmVhZHNoZWV0L2Nzcy9zcHJlYWRzaGVldC5jc3MiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zcHJlYWRzaGVldC9jc3Mvc3ByZWFkc2hlZXQuY3NzPzI5NTAiLCJ3ZWJwYWNrOi8vV2ViQ29tcG9uZW50cy8uL3J1bmVzdG9uZS9zcHJlYWRzaGVldC9qcy9zcHJlYWRzaGVldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzRIO0FBQzdCO0FBQy9GLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSwyRUFBMkUsd0JBQXdCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLEdBQUcsT0FBTyw0R0FBNEcsWUFBWSxhQUFhLGFBQWEsYUFBYSwyREFBMkQsd0JBQXdCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLEdBQUcsbUJBQW1CO0FBQy9mO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQd0Q7QUFDL0YsWUFBbUc7O0FBRW5HOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLHlGQUFPOzs7O0FBSXhCLGlFQUFlLGdHQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNadEI7O0FBRTZDO0FBQzlCO0FBQ0k7QUFDQTtBQUNBOztBQUVoQzs7QUFFQSwwQkFBMEIsNkRBQWE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2Qyw0QkFBNEIsWUFBWTtBQUN4QztBQUNBLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsV0FBVztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsdUNBQXVDLDJCQUEyQjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDZDQUFNOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QywyQkFBMkI7QUFDeEUsZ0NBQWdDLFlBQVk7QUFDNUM7QUFDQSxTQUFTLGFBQWEsSUFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixJQUFJLFVBQVUsWUFBWSxVQUFVLFlBQVk7QUFDNUUsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixPQUFPLEdBQUcsS0FBSyxHQUFHLFNBQVMsTUFBTSxLQUFLO0FBQ3BFLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwrQkFBK0IsT0FBTyxHQUFHLEtBQUssR0FBRyxTQUFTLFdBQVcsS0FBSztBQUMxRSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixFQUFFLGFBQWEsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsK0RBQStEO0FBQy9ELG9DQUFvQyxJQUFJO0FBQ3hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicnVuZXN0b25lX3NwcmVhZHNoZWV0X2pzX3NwcmVhZHNoZWV0X2pzLmJ1bmRsZS5qcz92PTZiZDYzMTZkYTM3NjVmM2M0OWJiIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYucnVuZXN0b25lIC5qZXhjZWxfY29udGFpbmVyIHtcXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3J1bmVzdG9uZS9zcHJlYWRzaGVldC9jc3Mvc3ByZWFkc2hlZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5ydW5lc3RvbmUgLmpleGNlbF9jb250YWluZXIge1xcbiAgICBtYXgtaGVpZ2h0OiA1NTBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3ByZWFkc2hlZXQuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdW5lc3RvbmVCYXNlIGZyb20gXCIuLi8uLi9jb21tb24vanMvcnVuZXN0b25lYmFzZVwiO1xuaW1wb3J0IGpleGNlbCBmcm9tIFwiamV4Y2VsXCI7XG5pbXBvcnQgXCIuLi9jc3Mvc3ByZWFkc2hlZXQuY3NzXCI7XG5pbXBvcnQgXCIuLi9jc3Mvc3ByZWFkc2hlZXQuY3NzXCI7XG5pbXBvcnQgXCJqZXhjZWwvZGlzdC9qZXhjZWwuY3NzXCI7XG5cbndpbmRvdy5zc0xpc3QgPSB7fTtcblxuY2xhc3MgU3ByZWFkU2hlZXQgZXh0ZW5kcyBSdW5lc3RvbmVCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRzKSB7XG4gICAgICAgIHN1cGVyKG9wdHMpO1xuICAgICAgICBsZXQgb3JpZyA9IG9wdHMub3JpZztcbiAgICAgICAgdGhpcy5kaXZfaWQgPSBvcmlnLmlkO1xuICAgICAgICB0aGlzLnNoZWV0X2lkID0gYCR7dGhpcy5kaXZfaWR9X3NoZWV0YDtcbiAgICAgICAgdGhpcy5kYXRhID0gZXZhbChgJHt0aGlzLmRpdl9pZH1fZGF0YWApO1xuICAgICAgICB0aGlzLmF1dG9ncmFkZSA9ICQob3JpZykuZGF0YShcImF1dG9ncmFkZVwiKTtcbiAgICAgICAgdGhpcy5zdWZmaXggPSB3aW5kb3dbYCR7dGhpcy5kaXZfaWR9X2Fzc2VydHNgXTtcbiAgICAgICAgdGhpcy5taW5kaW1lbnNpb25zID0gJChvcmlnKS5kYXRhKFwibWluZGltZW5zaW9uc1wiKTtcbiAgICAgICAgdGhpcy5jb2x3aWR0aHMgPSAkKG9yaWcpLmRhdGEoXCJjb2x3aWR0aHNcIik7XG4gICAgICAgIHRoaXMuY29sdGl0bGVzID0gZXZhbCgkKG9yaWcpLmRhdGEoXCJjb2x0aXRsZXNcIikpO1xuICAgICAgICB0aGlzLm1heEhlaWdodCA9IDUwO1xuICAgICAgICAvLyBSZW5kZXIgdGhlIGNvbXBvbmVudHNcbiAgICAgICAgdGhpcy5yZW5kZXJTaGVldCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmF1dG9ncmFkZSkge1xuICAgICAgICAgICAgdGhpcy5hZGRBdXRvR3JhZGVCdXR0b24oKTtcbiAgICAgICAgICAgIHRoaXMuYWRkT3V0cHV0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNhcHRpb24gPSBcIlNwcmVhZHNoZWV0XCI7XG4gICAgICAgIHRoaXMuZGl2aWQgPSB0aGlzLmRpdl9pZDtcbiAgICAgICAgdGhpcy5jb250YWluZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpdl9pZCk7XG4gICAgICAgIHRoaXMuYWRkQ2FwdGlvbihcInJ1bmVzdG9uZVwiKTtcbiAgICAgICAgdGhpcy5pbmRpY2F0ZV9jb21wb25lbnRfcmVhZHkoKTtcbiAgICB9XG5cbiAgICByZW5kZXJTaGVldCgpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuc2hlZXRfaWQpO1xuICAgICAgICBsZXQgb3B0cyA9IHsgZGF0YTogdGhpcy5kYXRhLCB0YWJsZUhlaWdodDogdGhpcy5tYXhIZWlnaHQgfTtcbiAgICAgICAgaWYgKHRoaXMubWluZGltZW5zaW9ucykge1xuICAgICAgICAgICAgb3B0cy5taW5EaW1lbnNpb25zID0gdGhpcy5taW5kaW1lbnNpb25zO1xuICAgICAgICB9XG4gICAgICAgIG9wdHMuY29sdW1ucyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5jb2x3aWR0aHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHcgb2YgdGhpcy5jb2x3aWR0aHMpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmNvbHVtbnMucHVzaCh7IHdpZHRoOiB3IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbHRpdGxlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmNvbHRpdGxlcykge1xuICAgICAgICAgICAgICAgIGlmIChvcHRzLmNvbHVtbnNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5jb2x1bW5zW2ldLnRpdGxlID0gdW5lc2NhcGUodGhpcy5jb2x0aXRsZXNbaV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdHMuY29sdW1ucy5wdXNoKHsgdGl0bGU6IHRoaXMuY29sdGl0bGVzW2ldIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGFibGUgPSBqZXhjZWwoZGl2LCBvcHRzKTtcblxuICAgICAgICAvLyBTZXQgYmFja2dyb3VuZCBvZiBjZWxscyB0aGF0IGFyZSBhdXRvZ3JhZGVkXG4gICAgICAgIGlmICh0aGlzLnN1ZmZpeCkge1xuICAgICAgICAgICAgZm9yIChsZXQgdGVzdCBvZiB0aGlzLnN1ZmZpeCkge1xuICAgICAgICAgICAgICAgIGxldCBhc3NlcnQsIGxvYywgb3BlciwgZXhwZWN0ZWQ7XG4gICAgICAgICAgICAgICAgW2Fzc2VydCwgbG9jLCBvcGVyLCBleHBlY3RlZF0gPSB0ZXN0LnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgICAgICAgJChgIyR7dGhpcy5kaXZfaWR9X3NoZWV0YClcbiAgICAgICAgICAgICAgICAgICAgLmZpbmQodGhpcy5nZXRDZWxsU2VsZWN0b3IobG9jKSlcbiAgICAgICAgICAgICAgICAgICAgLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgXCIjZDRlM2ZmXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRkQXV0b0dyYWRlQnV0dG9uKCkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5kaXZfaWQpO1xuICAgICAgICB2YXIgYnV0dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICQoYnV0dCkudGV4dChcIkNoZWNrXCIpO1xuICAgICAgICAkKGJ1dHQpLmFkZENsYXNzKFwiYnRuIGJ0bi1zdWNjZXNzIHJ1bi1idXR0b25cIik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChidXR0KTtcbiAgICAgICAgdGhpcy5ncmFkZUJ1dHRvbiA9IGJ1dHQ7XG4gICAgICAgICQoYnV0dCkuY2xpY2sodGhpcy5kb0F1dG9HcmFkZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgJChidXR0KS5hdHRyKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgJChidXR0KS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgfVxuXG4gICAgYWRkT3V0cHV0KCkge1xuICAgICAgICB0aGlzLm91dHB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwcmVcIik7XG4gICAgICAgIHRoaXMub3V0cHV0LmlkID0gYCR7dGhpcy5kaXZfaWR9X3N0ZG91dGA7XG4gICAgICAgICQodGhpcy5vdXRwdXQpLmNzcyhcInZpc2liaWxpdHlcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRpdl9pZCk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLm91dHB1dCk7XG4gICAgfVxuXG4gICAgZG9BdXRvR3JhZGUoKSB7XG4gICAgICAgIGxldCB0ZXN0cyA9IHRoaXMuc3VmZml4O1xuICAgICAgICB0aGlzLnBhc3NlZCA9IDA7XG4gICAgICAgIHRoaXMuZmFpbGVkID0gMDtcbiAgICAgICAgLy8gVGVzdHMgc2hvdWxkIGJlIG9mIHRoZSBmb3JtXG4gICAgICAgIC8vIGFzc2VydCBjZWxsIG9wZXIgdmFsdWUgZm9yIGV4YW1wbGVcbiAgICAgICAgLy8gYXNzZXJ0IEE0ID09IDNcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHRlc3RzID0gdGVzdHMuZmlsdGVyKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gcy5pbmRleE9mKFwiYXNzZXJ0XCIpID4gLTE7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IgKGxldCB0ZXN0IG9mIHRlc3RzKSB7XG4gICAgICAgICAgICBsZXQgYXNzZXJ0LCBsb2MsIG9wZXIsIGV4cGVjdGVkO1xuICAgICAgICAgICAgW2Fzc2VydCwgbG9jLCBvcGVyLCBleHBlY3RlZF0gPSB0ZXN0LnNwbGl0KC9cXHMrLyk7XG4gICAgICAgICAgICByZXN1bHQgKz0gdGhpcy50ZXN0T25lQXNzZXJ0KGxvYywgb3BlciwgZXhwZWN0ZWQpO1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiXFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBjdCA9ICgxMDAgKiB0aGlzLnBhc3NlZCkgLyAodGhpcy5wYXNzZWQgKyB0aGlzLmZhaWxlZCk7XG4gICAgICAgIHBjdCA9IHBjdC50b0xvY2FsZVN0cmluZyh1bmRlZmluZWQsIHsgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyIH0pO1xuICAgICAgICByZXN1bHQgKz0gYFlvdSBwYXNzZWQgJHt0aGlzLnBhc3NlZH0gb3V0IG9mICR7XG4gICAgICAgICAgICB0aGlzLnBhc3NlZCArIHRoaXMuZmFpbGVkXG4gICAgICAgIH0gdGVzdHMgZm9yICR7cGN0fSVgO1xuICAgICAgICB0aGlzLmxvZ0Jvb2tFdmVudCh7XG4gICAgICAgICAgICBldmVudDogXCJ1bml0dGVzdFwiLFxuICAgICAgICAgICAgZGl2X2lkOiB0aGlzLmRpdl9pZCxcbiAgICAgICAgICAgIGNvdXJzZTogZUJvb2tDb25maWcuY291cnNlLFxuICAgICAgICAgICAgYWN0OiBgcGVyY2VudDoke3BjdH06cGFzc2VkOiR7dGhpcy5wYXNzZWR9OmZhaWxlZDoke3RoaXMuZmFpbGVkfWAsXG4gICAgICAgIH0pO1xuICAgICAgICAkKHRoaXMub3V0cHV0KS5jc3MoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKTtcbiAgICAgICAgJCh0aGlzLm91dHB1dCkudGV4dChyZXN1bHQpO1xuICAgIH1cblxuICAgIHRlc3RPbmVBc3NlcnQoY2VsbCwgb3BlciwgZXhwZWN0ZWQpIHtcbiAgICAgICAgbGV0IGFjdHVhbCA9IHRoaXMuZ2V0Q2VsbERpc3BsYXlWYWx1ZShjZWxsKTtcbiAgICAgICAgY29uc3Qgb3BlcmF0b3JzID0ge1xuICAgICAgICAgICAgXCI9PVwiOiBmdW5jdGlvbiAob3BlcmFuZDEsIG9wZXJhbmQyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhbmQxID09IG9wZXJhbmQyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiIT1cIjogZnVuY3Rpb24gKG9wZXJhbmQxLCBvcGVyYW5kMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcGVyYW5kMSAhPSBvcGVyYW5kMjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIj5cIjogZnVuY3Rpb24gKG9wZXJhbmQxLCBvcGVyYW5kMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcGVyYW5kMSA+IG9wZXJhbmQyO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiPFwiOiBmdW5jdGlvbiAob3BlcmFuZDEsIG9wZXJhbmQyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhbmQxID4gb3BlcmFuZDI7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCByZXMgPSBvcGVyYXRvcnNbb3Blcl0oYWN0dWFsLCBleHBlY3RlZCk7XG4gICAgICAgIGxldCBvdXRwdXQgPSBcIlwiO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBgUGFzczogJHthY3R1YWx9ICR7b3Blcn0gJHtleHBlY3RlZH0gaW4gJHtjZWxsfWA7XG4gICAgICAgICAgICAkKGAjJHt0aGlzLmRpdl9pZH1fc2hlZXRgKVxuICAgICAgICAgICAgICAgIC5maW5kKHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKGNlbGwpKVxuICAgICAgICAgICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiI2NjZmZjY1wiKTtcbiAgICAgICAgICAgIHRoaXMucGFzc2VkKys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXRwdXQgPSBgRmFpbGVkICR7YWN0dWFsfSAke29wZXJ9ICR7ZXhwZWN0ZWR9IGluIGNlbGwgJHtjZWxsfWA7XG4gICAgICAgICAgICAkKGAjJHt0aGlzLmRpdl9pZH1fc2hlZXRgKVxuICAgICAgICAgICAgICAgIC5maW5kKHRoaXMuZ2V0Q2VsbFNlbGVjdG9yKGNlbGwpKVxuICAgICAgICAgICAgICAgIC5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiI2ZmOTk4MFwiKTtcbiAgICAgICAgICAgIHRoaXMuZmFpbGVkKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY2VsbCBjb250YWlucyBhIGZvcm11bGEsIHRoaXMgY2FsbCB3aWxsIHJldHVybiB0aGUgZm9ybXVsYSBub3QgdGhlIGNvbXB1dGVkIHZhbHVlXG4gICAgZ2V0Q2VsbFNvdXJjZShjZWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlLmdldFZhbHVlKGNlbGwpO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBjZWxsIGNvbnRhaW5zIGEgZm9ybXVsYSB0aGlzIGNhbGwgd2lsbCByZXR1cm4gdGhlIGNvbXB1dGVkIHZhbHVlXG4gICAgZ2V0Q2VsbERpc3BsYXlWYWx1ZShjZWxsKSB7XG4gICAgICAgIGxldCByZXMgPSB0aGlzLnRhYmxlLmVsLnF1ZXJ5U2VsZWN0b3IodGhpcy5nZXRDZWxsU2VsZWN0b3IoY2VsbCkpO1xuICAgICAgICByZXR1cm4gcmVzLmlubmVyVGV4dDtcbiAgICB9XG5cbiAgICBnZXRDZWxsU2VsZWN0b3IoY2VsbCkge1xuICAgICAgICBsZXQgcGFydHMgPSBjZWxsLm1hdGNoKC9cXCQ/KFtBLVpdKylcXCQ/KFswLTldKykvKTtcbiAgICAgICAgbGV0IHggPSB0aGlzLmNvbHVtblRvSW5kZXgocGFydHNbMV0pO1xuICAgICAgICBsZXQgeSA9IHBhcnRzWzJdIC0gMTtcbiAgICAgICAgcmV0dXJuIGBbZGF0YS14PVwiJHt4fVwiXVtkYXRhLXk9XCIke3l9XCJdYDtcbiAgICB9XG4gICAgY29sdW1uVG9JbmRleChjb2xOYW1lKSB7XG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGNvbHVtbiBuYW1lIHRvIGEgbnVtYmVyIEEgPSAwIEFBID0gMjYgQkEgPSA1MiwgZXRjXG4gICAgICAgIGxldCBiYXNlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlwiO1xuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcblxuICAgICAgICBmb3IgKFxuICAgICAgICAgICAgbGV0IGkgPSAwLCBqID0gY29sTmFtZS5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaSA8IGNvbE5hbWUubGVuZ3RoO1xuICAgICAgICAgICAgaSArPSAxLCBqIC09IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gTWF0aC5wb3coYmFzZS5sZW5ndGgsIGopICogKGJhc2UuaW5kZXhPZihjb2xOYW1lW2ldKSArIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdCAtIDE7XG4gICAgfVxufVxuXG4kKGRvY3VtZW50KS5iaW5kKFwicnVuZXN0b25lOmxvZ2luLWNvbXBsZXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiW2RhdGEtY29tcG9uZW50PXNwcmVhZHNoZWV0XVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAvLyBNQ1xuICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgIG9yaWc6IHRoaXMsXG4gICAgICAgICAgICB1c2VSdW5lc3RvbmVTZXJ2aWNlczogZUJvb2tDb25maWcudXNlUnVuZXN0b25lU2VydmljZXMsXG4gICAgICAgIH07XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aW5kb3cuc3NMaXN0W3RoaXMuaWRdID0gbmV3IFNwcmVhZFNoZWV0KG9wdHMpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciByZW5kZXJpbmcgU3ByZWFkU2hlZXQgUHJvYmxlbSAke3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWlsczogJHtlcnJ9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuaWYgKHR5cGVvZiB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB3aW5kb3cuY29tcG9uZW50X2ZhY3RvcnkgPSB7fTtcbn1cbndpbmRvdy5jb21wb25lbnRfZmFjdG9yeS5zcHJlYWRzaGVldCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gICAgcmV0dXJuIG5ldyBTcHJlYWRTaGVldChvcHRzKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9