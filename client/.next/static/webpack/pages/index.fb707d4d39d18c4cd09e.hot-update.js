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

/***/ "./components/MsgItem.tsx":
/*!********************************!*\
  !*** ./components/MsgItem.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/kimjaehan/learn-api/client/components/MsgItem.tsx\",\n    _this = undefined;\n\n\n\n\n\nvar MsgItem = function MsgItem(_ref) {\n  var id = _ref.id,\n      timestamp = _ref.timestamp,\n      text = _ref.text,\n      onUpdate = _ref.onUpdate,\n      onDelete = _ref.onDelete,\n      isEditing = _ref.isEditing,\n      startEdit = _ref.startEdit,\n      myId = _ref.myId,\n      user = _ref.user;\n  console.log(user);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n    className: \"messages__item\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n      children: [user === null || user === void 0 ? void 0 : user.nickname, \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"sub\", {\n        children: new Date(timestamp).toLocaleString(\"ko-KR\", {\n          year: \"numeric\",\n          month: \"numeric\",\n          day: \"numeric\",\n          hour: \"2-digit\",\n          minute: \"2-digit\",\n          hour12: true\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), isEditing ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_0__.default, {\n        mutate: onUpdate,\n        text: text,\n        id: id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false) : text, myId === (user === null || user === void 0 ? void 0 : user.id) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"messages__buttons\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: startEdit,\n        children: \"\\uC218\\uC815\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: onDelete,\n        children: \"\\uC0AD\\uC81C\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = MsgItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MsgItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"MsgItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01zZ0l0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQW9CVjtBQUFBLE1BbkJKQyxFQW1CSSxRQW5CSkEsRUFtQkk7QUFBQSxNQWxCSkMsU0FrQkksUUFsQkpBLFNBa0JJO0FBQUEsTUFqQkpDLElBaUJJLFFBakJKQSxJQWlCSTtBQUFBLE1BaEJKQyxRQWdCSSxRQWhCSkEsUUFnQkk7QUFBQSxNQWZKQyxRQWVJLFFBZkpBLFFBZUk7QUFBQSxNQWRKQyxTQWNJLFFBZEpBLFNBY0k7QUFBQSxNQWJKQyxTQWFJLFFBYkpBLFNBYUk7QUFBQSxNQVpKQyxJQVlJLFFBWkpBLElBWUk7QUFBQSxNQVhKQyxJQVdJLFFBWEpBLElBV0k7QUFDSkMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFDQSxzQkFDRTtBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBLDRCQUNFO0FBQUEsaUJBQ0dBLElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUFFRyxRQURULEVBQ21CLEdBRG5CLGVBRUU7QUFBQSxrQkFDRyxJQUFJQyxJQUFKLENBQVNYLFNBQVQsRUFBb0JZLGNBQXBCLENBQW1DLE9BQW5DLEVBQTRDO0FBQzNDQyxVQUFBQSxJQUFJLEVBQUUsU0FEcUM7QUFFM0NDLFVBQUFBLEtBQUssRUFBRSxTQUZvQztBQUczQ0MsVUFBQUEsR0FBRyxFQUFFLFNBSHNDO0FBSTNDQyxVQUFBQSxJQUFJLEVBQUUsU0FKcUM7QUFLM0NDLFVBQUFBLE1BQU0sRUFBRSxTQUxtQztBQU0zQ0MsVUFBQUEsTUFBTSxFQUFFO0FBTm1DLFNBQTVDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBZUdkLFNBQVMsZ0JBQ1I7QUFBQSw2QkFDRSw4REFBQyw4Q0FBRDtBQUFVLGNBQU0sRUFBRUYsUUFBbEI7QUFBNEIsWUFBSSxFQUFFRCxJQUFsQztBQUF3QyxVQUFFLEVBQUVGO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixxQkFEUSxHQUtSRSxJQXBCSixFQXVCR0ssSUFBSSxNQUFLQyxJQUFMLGFBQUtBLElBQUwsdUJBQUtBLElBQUksQ0FBRVIsRUFBWCxDQUFKLGlCQUNDO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUVNLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFRLGVBQU8sRUFBRUYsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQ0QsQ0F0REQ7O0tBQU1MO0FBd0ROLCtEQUFlQSxPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnSXRlbS50c3g/ODU0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNdXRhdGUsIFVzZXIgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xuXG5jb25zdCBNc2dJdGVtID0gKHtcbiAgaWQsXG4gIHRpbWVzdGFtcCxcbiAgdGV4dCxcbiAgb25VcGRhdGUsXG4gIG9uRGVsZXRlLFxuICBpc0VkaXRpbmcsXG4gIHN0YXJ0RWRpdCxcbiAgbXlJZCxcbiAgdXNlcixcbn06IHtcbiAgaWQ6IHN0cmluZztcbiAgdGltZXN0YW1wOiBudW1iZXI7XG4gIHRleHQ6IHN0cmluZztcbiAgbXlJZDogc3RyaW5nO1xuICB1c2VyOiBVc2VyO1xuICBpc0VkaXRpbmc6IGJvb2xlYW47XG4gIG9uVXBkYXRlOiBNdXRhdGU7XG4gIHN0YXJ0RWRpdDogKCkgPT4gdm9pZDtcbiAgb25EZWxldGU6ICgpID0+IHZvaWQ7XG59KSA9PiB7XG4gIGNvbnNvbGUubG9nKHVzZXIpO1xuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJtZXNzYWdlc19faXRlbVwiPlxuICAgICAgPGgzPlxuICAgICAgICB7dXNlcj8ubmlja25hbWV9e1wiIFwifVxuICAgICAgICA8c3ViPlxuICAgICAgICAgIHtuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKFwia28tS1JcIiwge1xuICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBtb250aDogXCJudW1lcmljXCIsXG4gICAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICAgICAgaG91cjogXCIyLWRpZ2l0XCIsXG4gICAgICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgICAgICAgaG91cjEyOiB0cnVlLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3N1Yj5cbiAgICAgIDwvaDM+XG5cbiAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1zZ0lucHV0IG11dGF0ZT17b25VcGRhdGV9IHRleHQ9e3RleHR9IGlkPXtpZH0gLz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICB0ZXh0XG4gICAgICApfVxuXG4gICAgICB7bXlJZCA9PT0gdXNlcj8uaWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VzX19idXR0b25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFydEVkaXR9PuyImOyglTwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PuyCreygnDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1zZ0l0ZW07XG4iXSwibmFtZXMiOlsiTXNnSW5wdXQiLCJNc2dJdGVtIiwiaWQiLCJ0aW1lc3RhbXAiLCJ0ZXh0Iiwib25VcGRhdGUiLCJvbkRlbGV0ZSIsImlzRWRpdGluZyIsInN0YXJ0RWRpdCIsIm15SWQiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIm5pY2tuYW1lIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1pbnV0ZSIsImhvdXIxMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MsgItem.tsx\n");

/***/ })

});