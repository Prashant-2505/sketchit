"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Tollbox/index.js":
/*!*****************************************!*\
  !*** ./src/components/Tollbox/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Toolbox = ()=>{\n    const toolBox = \"toolBox p-5 absolute top-1/4 left-5 w-64 rounded-md  shadow-lg border-[1px] border-gray-200 bg-slate-200\";\n    const colorBox = \"colorBox  h-5 w-5 mr-1 rounded-sm border-[2px] hover:cursor-pointer\";\n    const toolText = \" text-[11px]\";\n    const itemContainer = \"itemContainer flex justify-between mt-2\";\n    const updateBrushSize = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: toolBox,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"toolItem mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: toolText,\n                        children: \" Stroke Color\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                        lineNumber: 13,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: itemContainer,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(colorBox, \" bg-red-400\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                                lineNumber: 15,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(colorBox, \" bg-blue-400\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                                lineNumber: 16,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(colorBox, \" bg-green-400\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                                lineNumber: 17,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat(colorBox, \" bg-yellow-400\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: toolText,\n                        children: \" Brush Size\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"\",\n                            type: \"range\",\n                            min: 1,\n                            max: 10,\n                            step: 1,\n                            onChange: updateBrushSize\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\DSA\\\\projects\\\\full stack app\\\\sketchit\\\\src\\\\components\\\\Tollbox\\\\index.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Toolbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toolbox);\nvar _c;\n$RefreshReg$(_c, \"Toolbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2xsYm94L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFDQSxNQUFNQSxVQUFVO0lBQ1osTUFBTUMsVUFBVTtJQUNoQixNQUFNQyxXQUFXO0lBQ2pCLE1BQU1DLFdBQVc7SUFDakIsTUFBTUMsZ0JBQWdCO0lBQ3RCLE1BQU1DLGtCQUFrQixLQUV4QjtJQUNBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXTjs7MEJBQ1osOERBQUNLO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUdELFdBQVdKO2tDQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDRzt3QkFBSUMsV0FBV0g7OzBDQUNaLDhEQUFDRTtnQ0FBSUMsV0FBVyxHQUFZLE9BQVRMLFVBQVM7Ozs7OzswQ0FDNUIsOERBQUNJO2dDQUFJQyxXQUFXLEdBQVksT0FBVEwsVUFBUzs7Ozs7OzBDQUM1Qiw4REFBQ0k7Z0NBQUlDLFdBQVcsR0FBWSxPQUFUTCxVQUFTOzs7Ozs7MENBQzVCLDhEQUFDSTtnQ0FBSUMsV0FBVyxHQUFZLE9BQVRMLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJcEMsOERBQUNJO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0M7d0JBQUdELFdBQVdKO2tDQUFVOzs7Ozs7a0NBQ3pCLDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0U7NEJBQU1GLFdBQVU7NEJBQ2JHLE1BQUs7NEJBQ0xDLEtBQUs7NEJBQUdDLEtBQUs7NEJBQUlDLE1BQU07NEJBQ3ZCQyxVQUFVVDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEM7S0FoQ01MO0FBaUNOLCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RvbGxib3gvaW5kZXguanM/YzkxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgVG9vbGJveCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRvb2xCb3ggPSBcInRvb2xCb3ggcC01IGFic29sdXRlIHRvcC0xLzQgbGVmdC01IHctNjQgcm91bmRlZC1tZCAgc2hhZG93LWxnIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0yMDAgYmctc2xhdGUtMjAwXCJcclxuICAgIGNvbnN0IGNvbG9yQm94ID0gXCJjb2xvckJveCAgaC01IHctNSBtci0xIHJvdW5kZWQtc20gYm9yZGVyLVsycHhdIGhvdmVyOmN1cnNvci1wb2ludGVyXCJcclxuICAgIGNvbnN0IHRvb2xUZXh0ID0gJyB0ZXh0LVsxMXB4XSdcclxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBcIml0ZW1Db250YWluZXIgZmxleCBqdXN0aWZ5LWJldHdlZW4gbXQtMlwiXHJcbiAgICBjb25zdCB1cGRhdGVCcnVzaFNpemUgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dG9vbEJveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbEl0ZW0gbWItNVwiPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17dG9vbFRleHR9PiBTdHJva2UgQ29sb3I8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2l0ZW1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb2xvckJveH0gYmctcmVkLTQwMGB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb2xvckJveH0gYmctYmx1ZS00MDBgfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y29sb3JCb3h9IGJnLWdyZWVuLTQwMGB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjb2xvckJveH0gYmcteWVsbG93LTQwMGB9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3Rvb2xUZXh0fT4gQnJ1c2ggU2l6ZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49ezF9IG1heD17MTB9IHN0ZXA9ezF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVCcnVzaFNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBUb29sYm94Il0sIm5hbWVzIjpbIlRvb2xib3giLCJ0b29sQm94IiwiY29sb3JCb3giLCJ0b29sVGV4dCIsIml0ZW1Db250YWluZXIiLCJ1cGRhdGVCcnVzaFNpemUiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImlucHV0IiwidHlwZSIsIm1pbiIsIm1heCIsInN0ZXAiLCJvbkNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Tollbox/index.js\n"));

/***/ })

});