webpackHotUpdate_N_E("pages/solutions",{

/***/ "./src/pages/solutions.tsx":
/*!*********************************!*\
  !*** ./src/pages/solutions.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _fluentui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react */ \"./node_modules/@fluentui/react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _design_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../design/header */ \"./src/design/header/index.tsx\");\n/* harmony import */ var _design_layout_layout_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../design/layout/layout-base */ \"./src/design/layout/layout-base/index.tsx\");\n/* harmony import */ var _design_solutions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../design/solutions */ \"./src/design/solutions/index.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/patrick/Downloads/site-gokkk/src/pages/solutions.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nvar SolutionsPage = function SolutionsPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('products'),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      side = _React$useState2[0],\n      setSide = _React$useState2[1];\n\n  return __jsx(_design_layout_layout_base__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    header: __jsx(_design_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: \"https://res.cloudinary.com/code-comunity/image/upload/v1633477093/site-gok/structure-flex_nnrsrr.png\",\n      bgSize: \"cover\",\n      title: \"Nossa estrutura \\xE9 totalmente flexivel\",\n      description: __jsx(\"div\", {\n        style: {\n          marginTop: '70px',\n          position: 'absolute'\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }\n      }, __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        style: {\n          color: side !== 'products' && 'white',\n          border: 'none',\n          background: side !== 'products' && 'none'\n        },\n        text: \"Products\",\n        onClick: function onClick() {\n          return setSide('products');\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 15\n        }\n      }), __jsx(_fluentui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        style: {\n          color: 'black',\n          border: 'none',\n          background: side !== 'cases' && 'none'\n        },\n        text: \"Cases\",\n        onClick: function onClick() {\n          return setSide('cases');\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 15\n        }\n      })),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }\n    }),\n    content: __jsx(_design_solutions__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      session: side,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 16\n      }\n    }),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  });\n};\n\n_s(SolutionsPage, \"2NgFQGPoBvzPkniTnXHdud6nx70=\");\n\n_c = SolutionsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SolutionsPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"SolutionsPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NvbHV0aW9ucy50c3g/NTBiNiJdLCJuYW1lcyI6WyJTb2x1dGlvbnNQYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNpZGUiLCJzZXRTaWRlIiwibWFyZ2luVG9wIiwicG9zaXRpb24iLCJjb2xvciIsImJvcmRlciIsImJhY2tncm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBdUIsR0FBRyxTQUExQkEsYUFBMEIsR0FBTTtBQUFBOztBQUVwQyx3QkFBd0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxVQUFmLENBQXhCO0FBQUE7QUFBQSxNQUFPQyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFFQSxTQUNFLE1BQUMsa0VBQUQ7QUFDRSxVQUFNLEVBQ0osTUFBQyxzREFBRDtBQUNFLFdBQUssRUFBQyxzR0FEUjtBQUVFLFlBQU0sRUFBQyxPQUZUO0FBR0UsV0FBSyxFQUFDLDBDQUhSO0FBSUUsaUJBQVcsRUFDVDtBQUFLLGFBQUssRUFBRTtBQUFFQyxtQkFBUyxFQUFFLE1BQWI7QUFBcUJDLGtCQUFRLEVBQUU7QUFBL0IsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxzREFBRDtBQUFRLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUVKLElBQUksS0FBSyxVQUFULElBQXVCLE9BQWhDO0FBQXlDSyxnQkFBTSxFQUFFLE1BQWpEO0FBQXlEQyxvQkFBVSxFQUFFTixJQUFJLEtBQUssVUFBVCxJQUF1QjtBQUE1RixTQUFmO0FBQXFILFlBQUksRUFBQyxVQUExSDtBQUFxSSxlQUFPLEVBQUU7QUFBQSxpQkFBTUMsT0FBTyxDQUFDLFVBQUQsQ0FBYjtBQUFBLFNBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBUSxhQUFLLEVBQUU7QUFBRUcsZUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGdCQUFNLEVBQUUsTUFBMUI7QUFBa0NDLG9CQUFVLEVBQUVOLElBQUksS0FBSyxPQUFULElBQW9CO0FBQWxFLFNBQWY7QUFBMkYsWUFBSSxFQUFDLE9BQWhHO0FBQXdHLGVBQU8sRUFBRTtBQUFBLGlCQUFNQyxPQUFPLENBQUMsT0FBRCxDQUFiO0FBQUEsU0FBakg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZGLENBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKO0FBY0UsV0FBTyxFQUFFLE1BQUMseURBQUQ7QUFBVyxhQUFPLEVBQUVELElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFkWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFrQkQsQ0F0QkQ7O0dBQU1ILGE7O0tBQUFBLGE7QUF3QlNBLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3NvbHV0aW9ucy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCcmVhZGNydW1iLCBCdXR0b24gfSBmcm9tICdAZmx1ZW50dWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vZGVzaWduL2hlYWRlcic7XG5pbXBvcnQgTGF5b3V0QmFzZSBmcm9tICcuLi9kZXNpZ24vbGF5b3V0L2xheW91dC1iYXNlJztcbmltcG9ydCBTb2x1dGlvbnMgZnJvbSAnLi4vZGVzaWduL3NvbHV0aW9ucyc7XG5cbmNvbnN0IFNvbHV0aW9uc1BhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzaWRlLCBzZXRTaWRlXSA9IFJlYWN0LnVzZVN0YXRlKCdwcm9kdWN0cycpXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0QmFzZVxuICAgICAgaGVhZGVyPXtcbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vY29kZS1jb211bml0eS9pbWFnZS91cGxvYWQvdjE2MzM0NzcwOTMvc2l0ZS1nb2svc3RydWN0dXJlLWZsZXhfbm5yc3JyLnBuZ1wiXG4gICAgICAgICAgYmdTaXplPVwiY292ZXJcIlxuICAgICAgICAgIHRpdGxlPVwiTm9zc2EgZXN0cnV0dXJhIMOpIHRvdGFsbWVudGUgZmxleGl2ZWxcIlxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNzBweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnIH19PlxuICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IGNvbG9yOiBzaWRlICE9PSAncHJvZHVjdHMnICYmICd3aGl0ZScsIGJvcmRlcjogJ25vbmUnLCBiYWNrZ3JvdW5kOiBzaWRlICE9PSAncHJvZHVjdHMnICYmICdub25lJyB9fSB0ZXh0PVwiUHJvZHVjdHNcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlKCdwcm9kdWN0cycpfSAvPlxuICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCBib3JkZXI6ICdub25lJywgYmFja2dyb3VuZDogc2lkZSAhPT0gJ2Nhc2VzJyAmJiAnbm9uZScgfX0gdGV4dD1cIkNhc2VzXCIgb25DbGljaz17KCkgPT4gc2V0U2lkZSgnY2FzZXMnKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIH1cbiAgICAgIGNvbnRlbnQ9ezxTb2x1dGlvbnMgc2Vzc2lvbj17c2lkZX0gLz59XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2x1dGlvbnNQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/solutions.tsx\n");

/***/ })

})