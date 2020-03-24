webpackHotUpdate("static\\development\\pages\\post.js",{

/***/ "./components/DisplaySinglePost.js":
/*!*****************************************!*\
  !*** ./components/DisplaySinglePost.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\blog_crud\\frontend\\components\\DisplaySinglePost.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var DisplaySinglePost = function DisplaySinglePost(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      post = _useState[0],
      setPost = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://localhost.com/post/".concat(props.match.params.slug));
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, JSON.stringify(props));
};

/* harmony default export */ __webpack_exports__["default"] = (DisplaySinglePost);

/***/ })

})
//# sourceMappingURL=post.js.a911b9a8db9b853fc2d6.hot-update.js.map