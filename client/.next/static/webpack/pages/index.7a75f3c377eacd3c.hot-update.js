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

/***/ "./components/MsgList.tsx":
/*!********************************!*\
  !*** ./components/MsgList.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MsgList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.tsx\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.tsx\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MsgList() {\n    _s();\n    const { query: { userId =\"\"  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const fetchMoreElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startEdit = (id)=>setEditingId(id);\n    const endEdit = ()=>setEditingId(null);\n    const handleCreate = async (text)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"post\", \"/messages\", {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs([\n            newMsg,\n            ...msgs\n        ]);\n    };\n    const handleUpdate = async (text, id)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs; // not found\n            const newMsgs = [\n                ...msgs\n            ]; // found\n            newMsgs.splice(targetIndex, 1, newMsg);\n            return newMsgs;\n        });\n        endEdit();\n    };\n    const handleDelete = async (id)=>{\n        const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n            params: {\n                userId\n            }\n        });\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === receivedId + \"\");\n            if (targetIndex < 0) return msgs; // not found\n            const newMsgs = [\n                ...msgs\n            ]; // found\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const getMessages = async ()=>{\n        const getMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"get\", \"/messages\");\n        setMsgs(getMsgs);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getMessages();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onMutate: handleCreate\n            }, void 0, false, {\n                fileName: \"/Users/kimjaehan/learn-api/client/components/MsgList.tsx\",\n                lineNumber: 68,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...data,\n                        startEdit: ()=>startEdit(data.id),\n                        isEditing: editingId === data.id,\n                        myId: userId,\n                        onUpdate: handleUpdate,\n                        onDelete: ()=>handleDelete(data.id)\n                    }, data.id, false, {\n                        fileName: \"/Users/kimjaehan/learn-api/client/components/MsgList.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kimjaehan/learn-api/client/components/MsgList.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreElement\n            }, void 0, false, {\n                fileName: \"/Users/kimjaehan/learn-api/client/components/MsgList.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MsgList, \"83NiTgu/E55JR/IYOpB2lT6SQpg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = MsgList;\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01zZ0xpc3QudHN4PzBjZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTXNnSW5wdXQgZnJvbSBcIi4vTXNnSW5wdXRcIjtcbmltcG9ydCBNc2dJdGVtIGZyb20gXCIuL01zZ0l0ZW1cIjtcbmltcG9ydCBmZXRjaGVyIGZyb20gXCIuLi9mZXRjaGVyXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXNnTGlzdCgpIHtcbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IHVzZXJJZCA9IFwiXCIgfSxcbiAgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbXNncywgc2V0TXNnc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtlZGl0aW5nSWQsIHNldEVkaXRpbmdJZF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgZmV0Y2hNb3JlRWxlbWVudCA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBzdGFydEVkaXQgPSAoaWQ6IG51bWJlcikgPT4gc2V0RWRpdGluZ0lkKGlkKTtcbiAgY29uc3QgZW5kRWRpdCA9ICgpID0+IHNldEVkaXRpbmdJZChudWxsKTtcblxuICBjb25zdCBoYW5kbGVDcmVhdGUgPSBhc3luYyAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3TXNnID0gYXdhaXQgZmV0Y2hlcihcInBvc3RcIiwgXCIvbWVzc2FnZXNcIiwgeyB0ZXh0LCB1c2VySWQgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpO1xuICAgIHNldE1zZ3MoW25ld01zZywgLi4ubXNnc10pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVwZGF0ZSA9IGFzeW5jICh0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicHV0XCIsIGAvbWVzc2FnZXMvJHtpZH1gLCB7XG4gICAgICB0ZXh0LFxuICAgICAgdXNlcklkLFxuICAgIH0pO1xuICAgIGlmICghbmV3TXNnKSB0aHJvdyBFcnJvcihcInNvbWV0aGluZyB3cm9uZ1wiKTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gaWQpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7IC8vIG5vdCBmb3VuZFxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTsgLy8gZm91bmRcbiAgICAgIG5ld01zZ3Muc3BsaWNlKFxuICAgICAgICB0YXJnZXRJbmRleCxcbiAgICAgICAgMSxcbiAgICAgICAgbmV3TXNnXG4gICAgICAgIC8vIGNoYW5nZSB0ZXh0XG4gICAgICApO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gICAgZW5kRWRpdCgpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcmVjZWl2ZWRJZCA9IGF3YWl0IGZldGNoZXIoXCJkZWxldGVcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgICAgIHBhcmFtczogeyB1c2VySWQgfSxcbiAgICB9KTtcbiAgICBzZXRNc2dzKChtc2dzKSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXRJbmRleCA9IG1zZ3MuZmluZEluZGV4KChtc2cpID0+IG1zZy5pZCA9PT0gcmVjZWl2ZWRJZCArIFwiXCIpO1xuICAgICAgaWYgKHRhcmdldEluZGV4IDwgMCkgcmV0dXJuIG1zZ3M7IC8vIG5vdCBmb3VuZFxuICAgICAgY29uc3QgbmV3TXNncyA9IFsuLi5tc2dzXTsgLy8gZm91bmRcbiAgICAgIG5ld01zZ3Muc3BsaWNlKHRhcmdldEluZGV4LCAxKTtcbiAgICAgIHJldHVybiBuZXdNc2dzO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldE1lc3NhZ2VzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGdldE1zZ3MgPSBhd2FpdCBmZXRjaGVyKFwiZ2V0XCIsIFwiL21lc3NhZ2VzXCIpO1xuICAgIHNldE1zZ3MoZ2V0TXNncyk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0TWVzc2FnZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHt1c2VySWQgJiYgPE1zZ0lucHV0IG9uTXV0YXRlPXtoYW5kbGVDcmVhdGV9IC8+fVxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzXCI+XG4gICAgICAgIHttc2dzLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgIDxNc2dJdGVtXG4gICAgICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgICAgICB7Li4uZGF0YX1cbiAgICAgICAgICAgIHN0YXJ0RWRpdD17KCkgPT4gc3RhcnRFZGl0KGRhdGEuaWQpfVxuICAgICAgICAgICAgaXNFZGl0aW5nPXtlZGl0aW5nSWQgPT09IGRhdGEuaWR9XG4gICAgICAgICAgICBteUlkPXt1c2VySWR9XG4gICAgICAgICAgICBvblVwZGF0ZT17aGFuZGxlVXBkYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9eygpID0+IGhhbmRsZURlbGV0ZShkYXRhLmlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8ZGl2IHJlZj17ZmV0Y2hNb3JlRWxlbWVudH0+PC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNc2dJbnB1dCIsIk1zZ0l0ZW0iLCJmZXRjaGVyIiwidXNlUm91dGVyIiwiTXNnTGlzdCIsInF1ZXJ5IiwidXNlcklkIiwibXNncyIsInNldE1zZ3MiLCJlZGl0aW5nSWQiLCJzZXRFZGl0aW5nSWQiLCJmZXRjaE1vcmVFbGVtZW50Iiwic3RhcnRFZGl0IiwiaWQiLCJlbmRFZGl0IiwiaGFuZGxlQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwiaGFuZGxlVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiaGFuZGxlRGVsZXRlIiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsImdldE1lc3NhZ2VzIiwiZ2V0TXNncyIsIm9uTXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJkYXRhIiwiaXNFZGl0aW5nIiwibXlJZCIsIm9uVXBkYXRlIiwib25EZWxldGUiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.tsx\n"));

/***/ })

});