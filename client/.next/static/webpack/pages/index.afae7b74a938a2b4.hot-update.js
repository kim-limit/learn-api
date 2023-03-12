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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MsgList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MsgInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MsgInput */ \"./components/MsgInput.tsx\");\n/* harmony import */ var _MsgItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MsgItem */ \"./components/MsgItem.tsx\");\n/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fetcher */ \"./fetcher.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"../node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useInfiniteScroll */ \"./hooks/useInfiniteScroll.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction MsgList() {\n    _s();\n    const { query: { userId =\"\"  }  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [msgs, setMsgs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [hasNext, setHasNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const fetchMoreElement = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const intersecting = (0,_hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(fetchMoreElement);\n    const startEdit = (id)=>setEditingId(id);\n    const endEdit = ()=>setEditingId(null);\n    const handleCreate = async (text)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"post\", \"/messages\", {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs([\n            newMsg,\n            ...msgs\n        ]);\n    };\n    const handleUpdate = async (text, id)=>{\n        const newMsg = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"put\", \"/messages/\".concat(id), {\n            text,\n            userId\n        });\n        if (!newMsg) throw Error(\"something wrong\");\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === id);\n            if (targetIndex < 0) return msgs; // not found\n            const newMsgs = [\n                ...msgs\n            ]; // found\n            newMsgs.splice(targetIndex, 1, newMsg);\n            return newMsgs;\n        });\n        endEdit();\n    };\n    const handleDelete = async (id)=>{\n        const receivedId = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"delete\", \"/messages/\".concat(id), {\n            params: {\n                userId\n            }\n        });\n        setMsgs((msgs)=>{\n            const targetIndex = msgs.findIndex((msg)=>msg.id === receivedId + \"\");\n            if (targetIndex < 0) return msgs; // not found\n            const newMsgs = [\n                ...msgs\n            ]; // found\n            newMsgs.splice(targetIndex, 1);\n            return newMsgs;\n        });\n    };\n    const getMessages = async ()=>{\n        var _msgs_;\n        const getMsgs = await (0,_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"get\", \"/messages\", {\n            params: {\n                cursor: ((_msgs_ = msgs[msgs.length - 1]) === null || _msgs_ === void 0 ? void 0 : _msgs_.id) || \"\"\n            }\n        });\n        setMsgs((msgs)=>[\n                ...msgs,\n                ...getMsgs\n            ]);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (intersecting) getMessages();\n    }, [\n        intersecting\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            userId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                onMutate: handleCreate\n            }, void 0, false, {\n                fileName: \"/Users/kimjaehan/learn-api/client/components/MsgList.tsx\",\n                lineNumber: 73,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"messages\",\n                children: msgs.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MsgItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        ...data,\n                        startEdit: ()=>startEdit(data.id),\n                        isEditing: editingId === data.id,\n                        myId: userId,\n                        onUpdate: handleUpdate,\n                        onDelete: ()=>handleDelete(data.id)\n                    }, data.id, false, {\n                        fileName: \"/Users/kimjaehan/learn-api/client/components/MsgList.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/kimjaehan/learn-api/client/components/MsgList.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: fetchMoreElement\n            }, void 0, false, {\n                fileName: \"/Users/kimjaehan/learn-api/client/components/MsgList.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MsgList, \"3M3WK8HJxNocksClYMIAMde4dFY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _hooks_useInfiniteScroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    ];\n});\n_c = MsgList;\nvar _c;\n$RefreshReg$(_c, \"MsgList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUNDLHFCQUNULDhEQUFDdkMsZ0RBQU9BO3dCQUVMLEdBQUd1QyxJQUFJO3dCQUNSeEIsV0FBVyxJQUFNQSxVQUFVd0IsS0FBS3ZCLEVBQUU7d0JBQ2xDd0IsV0FBVy9CLGNBQWM4QixLQUFLdkIsRUFBRTt3QkFDaEN5QixNQUFNbkM7d0JBQ05vQyxVQUFVcEI7d0JBQ1ZxQixVQUFVLElBQU1mLGFBQWFXLEtBQUt2QixFQUFFO3VCQU4vQnVCLEtBQUt2QixFQUFFOzs7Ozs7Ozs7OzBCQVVsQiw4REFBQzRCO2dCQUFJQyxLQUFLaEM7Ozs7Ozs7O0FBR2hCLENBQUM7R0FsRnVCVDs7UUFHbEJGLGtEQUFTQTtRQUtRQyxnRUFBaUJBOzs7S0FSaEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTXNnTGlzdC50c3g/MGNlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNc2dJbnB1dCBmcm9tIFwiLi9Nc2dJbnB1dFwiO1xuaW1wb3J0IE1zZ0l0ZW0gZnJvbSBcIi4vTXNnSXRlbVwiO1xuaW1wb3J0IGZldGNoZXIgZnJvbSBcIi4uL2ZldGNoZXJcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZUluZmluaXRlU2Nyb2xsIGZyb20gXCIuLi9ob29rcy91c2VJbmZpbml0ZVNjcm9sbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNc2dMaXN0KCkge1xuICBjb25zdCB7XG4gICAgcXVlcnk6IHsgdXNlcklkID0gXCJcIiB9LFxuICB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFttc2dzLCBzZXRNc2dzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2VkaXRpbmdJZCwgc2V0RWRpdGluZ0lkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaGFzTmV4dCwgc2V0SGFzTmV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGZldGNoTW9yZUVsZW1lbnQgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGludGVyc2VjdGluZyA9IHVzZUluZmluaXRlU2Nyb2xsKGZldGNoTW9yZUVsZW1lbnQpO1xuXG4gIGNvbnN0IHN0YXJ0RWRpdCA9IChpZDogbnVtYmVyKSA9PiBzZXRFZGl0aW5nSWQoaWQpO1xuICBjb25zdCBlbmRFZGl0ID0gKCkgPT4gc2V0RWRpdGluZ0lkKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZSA9IGFzeW5jICh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBuZXdNc2cgPSBhd2FpdCBmZXRjaGVyKFwicG9zdFwiLCBcIi9tZXNzYWdlc1wiLCB7IHRleHQsIHVzZXJJZCB9KTtcbiAgICBpZiAoIW5ld01zZykgdGhyb3cgRXJyb3IoXCJzb21ldGhpbmcgd3JvbmdcIik7XG4gICAgc2V0TXNncyhbbmV3TXNnLCAuLi5tc2dzXSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gYXN5bmMgKHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IG5ld01zZyA9IGF3YWl0IGZldGNoZXIoXCJwdXRcIiwgYC9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgICAgIHRleHQsXG4gICAgICB1c2VySWQsXG4gICAgfSk7XG4gICAgaWYgKCFuZXdNc2cpIHRocm93IEVycm9yKFwic29tZXRoaW5nIHdyb25nXCIpO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSBpZCk7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnczsgLy8gbm90IGZvdW5kXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdOyAvLyBmb3VuZFxuICAgICAgbmV3TXNncy5zcGxpY2UoXG4gICAgICAgIHRhcmdldEluZGV4LFxuICAgICAgICAxLFxuICAgICAgICBuZXdNc2dcbiAgICAgICAgLy8gY2hhbmdlIHRleHRcbiAgICAgICk7XG4gICAgICByZXR1cm4gbmV3TXNncztcbiAgICB9KTtcbiAgICBlbmRFZGl0KCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZWNlaXZlZElkID0gYXdhaXQgZmV0Y2hlcihcImRlbGV0ZVwiLCBgL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgcGFyYW1zOiB7IHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHNldE1zZ3MoKG1zZ3MpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldEluZGV4ID0gbXNncy5maW5kSW5kZXgoKG1zZykgPT4gbXNnLmlkID09PSByZWNlaXZlZElkICsgXCJcIik7XG4gICAgICBpZiAodGFyZ2V0SW5kZXggPCAwKSByZXR1cm4gbXNnczsgLy8gbm90IGZvdW5kXG4gICAgICBjb25zdCBuZXdNc2dzID0gWy4uLm1zZ3NdOyAvLyBmb3VuZFxuICAgICAgbmV3TXNncy5zcGxpY2UodGFyZ2V0SW5kZXgsIDEpO1xuICAgICAgcmV0dXJuIG5ld01zZ3M7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgZ2V0TXNncyA9IGF3YWl0IGZldGNoZXIoXCJnZXRcIiwgXCIvbWVzc2FnZXNcIiwge1xuICAgICAgcGFyYW1zOiB7IGN1cnNvcjogbXNnc1ttc2dzLmxlbmd0aCAtIDFdPy5pZCB8fCBcIlwiIH0sXG4gICAgfSk7XG4gICAgc2V0TXNncygobXNncykgPT4gWy4uLm1zZ3MsIC4uLmdldE1zZ3NdKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW5nKSBnZXRNZXNzYWdlcygpO1xuICB9LCBbaW50ZXJzZWN0aW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3VzZXJJZCAmJiA8TXNnSW5wdXQgb25NdXRhdGU9e2hhbmRsZUNyZWF0ZX0gLz59XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVzc2FnZXNcIj5cbiAgICAgICAge21zZ3MubWFwKChkYXRhKSA9PiAoXG4gICAgICAgICAgPE1zZ0l0ZW1cbiAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cbiAgICAgICAgICAgIHsuLi5kYXRhfVxuICAgICAgICAgICAgc3RhcnRFZGl0PXsoKSA9PiBzdGFydEVkaXQoZGF0YS5pZCl9XG4gICAgICAgICAgICBpc0VkaXRpbmc9e2VkaXRpbmdJZCA9PT0gZGF0YS5pZH1cbiAgICAgICAgICAgIG15SWQ9e3VzZXJJZH1cbiAgICAgICAgICAgIG9uVXBkYXRlPXtoYW5kbGVVcGRhdGV9XG4gICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gaGFuZGxlRGVsZXRlKGRhdGEuaWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxkaXYgcmVmPXtmZXRjaE1vcmVFbGVtZW50fT48L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1zZ0lucHV0IiwiTXNnSXRlbSIsImZldGNoZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VJbmZpbml0ZVNjcm9sbCIsIk1zZ0xpc3QiLCJxdWVyeSIsInVzZXJJZCIsIm1zZ3MiLCJzZXRNc2dzIiwiZWRpdGluZ0lkIiwic2V0RWRpdGluZ0lkIiwiaGFzTmV4dCIsInNldEhhc05leHQiLCJmZXRjaE1vcmVFbGVtZW50IiwiaW50ZXJzZWN0aW5nIiwic3RhcnRFZGl0IiwiaWQiLCJlbmRFZGl0IiwiaGFuZGxlQ3JlYXRlIiwidGV4dCIsIm5ld01zZyIsIkVycm9yIiwiaGFuZGxlVXBkYXRlIiwidGFyZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJtc2ciLCJuZXdNc2dzIiwic3BsaWNlIiwiaGFuZGxlRGVsZXRlIiwicmVjZWl2ZWRJZCIsInBhcmFtcyIsImdldE1lc3NhZ2VzIiwiZ2V0TXNncyIsImN1cnNvciIsImxlbmd0aCIsIm9uTXV0YXRlIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJkYXRhIiwiaXNFZGl0aW5nIiwibXlJZCIsIm9uVXBkYXRlIiwib25EZWxldGUiLCJkaXYiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/MsgList.tsx\n"));

/***/ })

});