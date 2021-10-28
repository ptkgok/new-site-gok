webpackHotUpdate_N_E("pages/home",{

/***/ "./src/design/go-news-header/styles.ts":
/*!*********************************************!*\
  !*** ./src/design/go-news-header/styles.ts ***!
  \*********************************************/
/*! exports provided: Container, TitleAndDescription, Title, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleAndDescription\", function() { return TitleAndDescription; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Description\", function() { return Description; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-media-query */ \"./node_modules/styled-media-query/dist/styled-media-query.es.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ \"./src/styles/theme.ts\");\n\n\nvar _templateObject, _templateObject2, _templateObject3;\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-1exjpuy-0\"\n})([\"width:100%;height:100%;border-bottom:1px solid \", \";border-top:1px solid \", \";padding:5px 3px;display:flex;margin:50px 0px;\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.primary);\nvar TitleAndDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__TitleAndDescription\",\n  componentId: \"sc-1exjpuy-1\"\n})([\"display:flex;width:100%;align-items:center;justify-content:space-around;::before,::after{content:'';display:block;width:100%;height:100%;background-image:radial-gradient(\", \" 20%,transparent 20%),radial-gradient(\", \" 20%,transparent 20%);background-color:white;background-position:0 0,50px 50px;background-size:10px 10px;\", \"}\", \"\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, styled_media_query__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lessThan('medium')(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: none;\\n  \"]))), styled_media_query__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lessThan('medium')(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    flex-direction: column;\\n  \"]))));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-1exjpuy-2\"\n})([\"font-size:2.8rem;font-weight:bold;color:\", \";padding:0px 20px;color:white;color:\", \";strong{text-shadow:0px 0px 1px \", \";color:\", \";-webkit-text-stroke-width:1px;-webkit-text-stroke-color:black;}::before,::after{content:'';display:none;width:100%;height:100%;background-image:radial-gradient(\", \" 20%,transparent 20%),radial-gradient(\", \" 20%,transparent 20%);background-color:white;background-position:0 0,50px 50px;background-size:10px 10px;\", \"}\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.primary, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.background, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text, styled_media_query__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lessThan('medium')(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      display: block;\\n    \"]))));\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-1exjpuy-3\"\n})([\"font-size:0.90rem;color:\", \";width:60%;line-height:17px;\"], _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.text);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Rlc2lnbi9nby1uZXdzLWhlYWRlci9zdHlsZXMudHM/ZjUxNyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJUaXRsZUFuZERlc2NyaXB0aW9uIiwidGV4dCIsIm1lZGlhIiwibGVzc1RoYW4iLCJUaXRsZSIsImgxIiwiYmFja2dyb3VuZCIsIkRlc2NyaXB0aW9uIiwicCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvSUFHT0MscURBQUssQ0FBQ0MsTUFBTixDQUFhQyxPQUhwQixFQUlJRixxREFBSyxDQUFDQyxNQUFOLENBQWFDLE9BSmpCLENBQWY7QUFVQSxJQUFNQyxtQkFBbUIsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtVkFZUUMscURBQUssQ0FBQ0MsTUFBTixDQUFhRyxJQVpyQixFQWFSSixxREFBSyxDQUFDQyxNQUFOLENBQWFHLElBYkwsRUFtQjVCQywwREFBSyxDQUFDQyxRQUFOLENBQWUsUUFBZixDQW5CNEIseUtBd0I1QkQsMERBQUssQ0FBQ0MsUUFBTixDQUFlLFFBQWYsQ0F4QjRCLG1MQUF6QjtBQTZCQSxJQUFNQyxLQUFLLEdBQUdULHlEQUFNLENBQUNVLEVBQVY7QUFBQTtBQUFBO0FBQUEseWNBR1BSLHFEQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FITixFQU1QRixxREFBSyxDQUFDQyxNQUFOLENBQWFHLElBTk4sRUFRYUoscURBQUssQ0FBQ0MsTUFBTixDQUFhRyxJQVIxQixFQVNMSixxREFBSyxDQUFDQyxNQUFOLENBQWFRLFVBVFIsRUFvQnNCVCxxREFBSyxDQUFDQyxNQUFOLENBQWFHLElBcEJuQyxFQXFCSUoscURBQUssQ0FBQ0MsTUFBTixDQUFhRyxJQXJCakIsRUF5QlpDLDBEQUFLLENBQUNDLFFBQU4sQ0FBZSxRQUFmLENBekJZLCtLQUFYO0FBK0JBLElBQU1JLFdBQVcsR0FBR1oseURBQU0sQ0FBQ2EsQ0FBVjtBQUFBO0FBQUE7QUFBQSxpRUFFYlgscURBQUssQ0FBQ0MsTUFBTixDQUFhRyxJQUZBLENBQWpCIiwiZmlsZSI6Ii4vc3JjL2Rlc2lnbi9nby1uZXdzLWhlYWRlci9zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBtZWRpYSBmcm9tICdzdHlsZWQtbWVkaWEtcXVlcnknO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3N0eWxlcy90aGVtZSc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMucHJpbWFyeX07XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgcGFkZGluZzogNXB4IDNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA1MHB4IDBweDtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZUFuZERlc2NyaXB0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG4gIDo6YmVmb3JlLCA6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoJHt0aGVtZS5jb2xvcnMudGV4dH0gMjAlLCB0cmFuc3BhcmVudCAyMCUpLFxuICAgICAgcmFkaWFsLWdyYWRpZW50KCR7dGhlbWUuY29sb3JzLnRleHR9IDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcblxuICAgIFxuICAke21lZGlhLmxlc3NUaGFuKCdtZWRpdW0nKWBcbiAgICBkaXNwbGF5OiBub25lO1xuICBgfVxuICB9XG5cbiAgJHttZWRpYS5sZXNzVGhhbignbWVkaXVtJylgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDIuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAke3RoZW1lLmNvbG9ycy5wcmltYXJ5fTtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICR7dGhlbWUuY29sb3JzLnRleHR9O1xuICBzdHJvbmcge1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDFweCAke3RoZW1lLmNvbG9ycy50ZXh0fTtcbiAgICBjb2xvcjogJHt0aGVtZS5jb2xvcnMuYmFja2dyb3VuZH07XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMXB4O1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgOjpiZWZvcmUsIDo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCgke3RoZW1lLmNvbG9ycy50ZXh0fSAyMCUsIHRyYW5zcGFyZW50IDIwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KCR7dGhlbWUuY29sb3JzLnRleHR9IDIwJSwgdHJhbnNwYXJlbnQgMjAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIDUwcHggNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwcHggMTBweDtcbiAgICAke21lZGlhLmxlc3NUaGFuKCdtZWRpdW0nKWBcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGB9XG4gICAgfVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAwLjkwcmVtO1xuICBjb2xvcjogJHt0aGVtZS5jb2xvcnMudGV4dH07XG4gIHdpZHRoOiA2MCU7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuYCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/design/go-news-header/styles.ts\n");

/***/ })

})