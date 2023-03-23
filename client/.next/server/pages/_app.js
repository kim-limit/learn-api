/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query/hydration */ \"react-query/hydration\");\n/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ \"./pages/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/kimjaehan/learn-api/client/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  const clientRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // 이렇게 하는 이유는 app.js는 계속 호출되기 때문에\n\n  const getClient = () => {\n    if (!clientRef.current) clientRef.current = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({\n      defaultOptions: {\n        queries: {\n          // 윈도우 포커스 될때 refetch 방지\n          refetchOnWindowFocus: false\n        }\n      }\n    });\n    return clientRef.current;\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClientProvider, {\n    client: getClient(),\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_query_hydration__WEBPACK_IMPORTED_MODULE_2__.Hydrate, {\n      state: pageProps.dehydratedState,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, undefined);\n};\n\nApp.getInitialProps = async ({\n  ctx,\n  Component\n}) => {\n  var _Component$getInitial;\n\n  const pageProps = await ((_Component$getInitial = Component.getInitialProps) === null || _Component$getInitial === void 0 ? void 0 : _Component$getInitial.call(Component, ctx));\n  return {\n    pageProps\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1JLEdBQUcsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLFNBQUY7QUFBYUMsRUFBQUE7QUFBYixDQUFELEtBQThCO0FBQ3hDLFFBQU1DLFNBQVMsR0FBR1AsNkNBQU0sQ0FBQyxJQUFELENBQXhCLENBRHdDLENBQ1I7O0FBQ2hDLFFBQU1RLFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQUksQ0FBQ0QsU0FBUyxDQUFDRSxPQUFmLEVBQ0VGLFNBQVMsQ0FBQ0UsT0FBVixHQUFvQixJQUFJUixvREFBSixDQUFnQjtBQUNsQ1MsTUFBQUEsY0FBYyxFQUFFO0FBQ2RDLFFBQUFBLE9BQU8sRUFBRTtBQUNQO0FBQ0FDLFVBQUFBLG9CQUFvQixFQUFFO0FBRmY7QUFESztBQURrQixLQUFoQixDQUFwQjtBQVFGLFdBQU9MLFNBQVMsQ0FBQ0UsT0FBakI7QUFDRCxHQVhEOztBQWFBLHNCQUNFLDhEQUFDLDREQUFEO0FBQXFCLFVBQU0sRUFBRUQsU0FBUyxFQUF0QztBQUFBLDJCQUVFLDhEQUFDLDBEQUFEO0FBQVMsV0FBSyxFQUFFRixTQUFTLENBQUNPLGVBQTFCO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZVAsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBdkJEOztBQXlCQUYsR0FBRyxDQUFDVSxlQUFKLEdBQXNCLE9BQU87QUFBRUMsRUFBQUEsR0FBRjtBQUFPVixFQUFBQTtBQUFQLENBQVAsS0FBOEI7QUFBQTs7QUFDbEQsUUFBTUMsU0FBUyxHQUFHLGdDQUFNRCxTQUFTLENBQUNTLGVBQWhCLDBEQUFNLDJCQUFBVCxTQUFTLEVBQW1CVSxHQUFuQixDQUFmLENBQWxCO0FBQ0EsU0FBTztBQUFFVCxJQUFBQTtBQUFGLEdBQVA7QUFDRCxDQUhEOztBQUtBLGlFQUFlRixHQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvX2FwcC50c3g/NzIxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBIeWRyYXRlIH0gZnJvbSBcInJlYWN0LXF1ZXJ5L2h5ZHJhdGlvblwiO1xuaW1wb3J0IFwiLi9pbmRleC5zY3NzXCI7XG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgY2xpZW50UmVmID0gdXNlUmVmKG51bGwpOyAvLyDsnbTroIfqsowg7ZWY64qUIOydtOycoOuKlCBhcHAuanPripQg6rOE7IaNIO2YuOy2nOuQmOq4sCDrlYzrrLjsl5BcbiAgY29uc3QgZ2V0Q2xpZW50ID0gKCkgPT4ge1xuICAgIGlmICghY2xpZW50UmVmLmN1cnJlbnQpXG4gICAgICBjbGllbnRSZWYuY3VycmVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gICAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgICAgLy8g7JyI64+E7JqwIO2PrOy7pOyKpCDrkKDrlYwgcmVmZXRjaCDrsKnsp4BcbiAgICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgcmV0dXJuIGNsaWVudFJlZi5jdXJyZW50O1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtnZXRDbGllbnQoKX0+XG4gICAgICB7Lyog7J206rGw7ZWY66m0IFNlcnZlcnNpZGUg642w7J207YSw66W8IHF1ZXJ5a2V5IGNhY2hl7JeQIOyCrOyaqeqwgOuKpSAqL31cbiAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9IeWRyYXRlPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn07XG5cbkFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyBjdHgsIENvbXBvbmVudCB9KSA9PiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM/LihjdHgpO1xuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJIeWRyYXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50UmVmIiwiZ2V0Q2xpZW50IiwiY3VycmVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiZGVoeWRyYXRlZFN0YXRlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/index.scss":
/*!**************************!*\
  !*** ./pages/index.scss ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react-query/hydration":
/*!****************************************!*\
  !*** external "react-query/hydration" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();