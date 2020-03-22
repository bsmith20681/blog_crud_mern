webpackHotUpdate("static\\development\\pages\\createpost.js",{

/***/ "./components/CreatePostComponent.js":
/*!*******************************************!*\
  !*** ./components/CreatePostComponent.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");

var _jsxFileName = "D:\\blog_crud\\frontend\\components\\CreatePostComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var CreatePostComponent = function CreatePostComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: '',
    content: ''
  }),
      state = _useState[0],
      setState = _useState[1];

  var title = state.title,
      content = state.content;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("http://localhost:8000/api/post", {
      title: title,
      content: content
    }, {
      headers: {
        authorization: "Bearer ".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["getToken"])())
      }
    }).then(function (response) {
      setState(_objectSpread({}, state, {
        title: '',
        content: ''
      }));
      console.log(title, content);
    })["catch"](function (error) {
      alert(error.response.data.error);
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      setState(_objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, e.target.value)));
    };
  };

  var createPost = function createPost() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      "class": "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("label", {
      "for": "exampleFormControlInput1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "Title"), __jsx("input", {
      value: title,
      onChange: handleChange('title'),
      type: "test",
      "class": "form-control",
      id: "exampleFormControlInput1",
      placeholder: "Enter your title here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    })), __jsx("div", {
      "class": "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("label", {
      "for": "exampleFormControlTextarea1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Content"), __jsx("textarea", {
      value: content,
      onChange: handleChange('content'),
      "class": "form-control",
      id: "exampleFormControlTextarea1",
      rows: "6",
      placeholder: "Write your blog post here",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    })), __jsx("button", {
      "class": "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Create Post"));
  };

  return __jsx("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    "class": "col-lg-12 col-md-12 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, createPost())));
};

/* harmony default export */ __webpack_exports__["default"] = (CreatePostComponent);

/***/ })

})
//# sourceMappingURL=createpost.js.bca0a9e6eb8ec876abc8.hot-update.js.map