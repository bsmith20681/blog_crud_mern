webpackHotUpdate("static\\development\\pages\\myposts.js",{

/***/ "./components/DisplayPostsComponent.js":
/*!*********************************************!*\
  !*** ./components/DisplayPostsComponent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
var _jsxFileName = "D:\\blog_crud\\frontend\\components\\DisplayPostsComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var DisplayPostsComponent = function DisplayPostsComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var fetchPosts = function fetchPosts() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('http://localhost:8000/api/post', {
      headers: {
        authorization: "Bearer ".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["getToken"])())
      }
    }).then(function (response) {
      console.log(response.data);
      setPosts(response.data);
    })["catch"](function (error) {
      return alert(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchPosts();
  }, []);
  return __jsx("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    "class": "col-lg-12 col-md-12 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, posts.map(function (post, i) {
    return __jsx("div", {
      key: post._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, post.title), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, post.content.substring(0, 100)), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "published on: ", new Date(post.createAt).toLocaleString()));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayPostsComponent);

/***/ })

})
//# sourceMappingURL=myposts.js.37931fb3ffda510d15f7.hot-update.js.map