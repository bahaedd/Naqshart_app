(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _JoinUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JoinUs */ "./resources/js/components/Page/JoinUs.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  setInterval(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".spinner-content").fadeOut("4000");
  }, 4000);
});

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    appJoinus: _JoinUs__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      artists: [],
      about: {},
      mission: true,
      artist: false,
      support: false,
      joinus: false,
      text_contact: {},
      form: {
        name: null,
        email: null,
        phone: null,
        message: null
      },
      errors: {},
      jointext: {},
      aboutArtists: {}
    };
  },
  mounted: function mounted() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".modal-mask").css("display", "block");
  },
  created: function created() {
    var _this = this;

    if (this.$route.query.mydata == "artist") {
      this.artist = true;
      this.mission = false;
    } else if (this.$route.query.mydata == "contact") {
      this.support = true;
      this.mission = false;
    } else if (this.$route.query.mydata == "join") {
      this.mission = false;
      this.joinus = true;
      1;
    }

    axios.get("/api/get-about-content").then(function (response) {
      // this.artists = response.data.dataArtist;
      _this.about = response.data.data;

      if (_this.about == null) {
        _this.about = "";
      }
    })["catch"](function (error) {
      return _this.errors = error.response.data;
    });
    axios.get("/api/get-about-contents").then(function (res) {
      _this.text_contact = res.data.data;

      if (_this.text_contact == null) {
        _this.text_contact = "";
      }
    })["catch"](function (error) {
      return _this.errors = error.response.data;
    });
    axios.get("/api/get-about-artists").then(function (res) {
      _this.aboutArtists = res.data.data;

      if (_this.aboutArtists == null) {
        _this.aboutArtists = "";
      }
    })["catch"](function (error) {
      return _this.errors = error.response.data;
    });
    axios.get("/api/get-join-content").then(function (res) {
      _this.jointext = res.data.data;
    })["catch"](function (error) {
      return console.log(error.response.data);
    });
  },
  methods: {
    send: function send() {
      var _this2 = this;

      axios.post("/aboutContacts-api", this.form).then(function (res) {
        return _this2.form = "";
      })["catch"](function (error) {
        return _this2.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.mission[data-v-2fea7dd6] {\n  margin-top: 6% !important;\n}\n@media (max-width: 767px) {\n.mission[data-v-2fea7dd6] {\n    margin-top: 15% !important;\n}\n}\n.row[data-v-2fea7dd6] {\n  margin: 0;\n  padding: 0;\n}\n.title[data-v-2fea7dd6] {\n  font-size: 34px;\n  font-weight: bold;\n  line-height: 60px;\n  margin: 0;\n  margin-bottom: 1px;\n  cursor: pointer;\n  transition: all 0.4s;\n  text-align: center;\n  background: #f2efeb;\n}\n.title[data-v-2fea7dd6]:hover {\n  background: #e6e1da;\n}\n.about-team__people[data-v-2fea7dd6] {\n  margin: 0 20px 30px;\n}\n.about-team__people img[data-v-2fea7dd6] {\n  width: 120px;\n}\n.topteam[data-v-2fea7dd6] {\n  margin-bottom: 30px;\n  border-bottom: 2px solid #eee;\n  width: 70%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.support_div .content[data-v-2fea7dd6] {\n  color: grey;\n  cursor: pointer;\n}\n.support_div .active[data-v-2fea7dd6] {\n  color: black;\n  font-weight: bold;\n}\n.left[data-v-2fea7dd6] {\n  border-right: 2px solid #000;\n  padding-left: 300px;\n}\n@media (max-width: 991px) {\n.left[data-v-2fea7dd6] {\n    border-right: none;\n    padding-left: 0;\n}\n}\n@media (min-width: 992px) and (max-width: 1999px) {\n.left[data-v-2fea7dd6] {\n    padding-left: 200px;\n}\n}\n.right[data-v-2fea7dd6] {\n  border-left: 2px solid #000;\n  padding-right: 300px;\n}\n@media (max-width: 991px) {\n.right[data-v-2fea7dd6] {\n    border-left: none;\n    padding-right: 0;\n}\n}\n@media (min-width: 992px) and (max-width: 1999px) {\n.right[data-v-2fea7dd6] {\n    padding-right: 200px;\n}\n}\n@media (max-width: 991px) {\n.term_text[data-v-2fea7dd6] {\n    text-align: center !important;\n}\n}\n.form[data-v-2fea7dd6] {\n  width: 50%;\n  margin: auto;\n}\n.mission img[data-v-2fea7dd6] {\n  /* width: 100%; */\n  height: 370px;\n  border-radius: 10px;\n}\n@media (max-width: 767px) {\n.mission img[data-v-2fea7dd6] {\n    width: 50% !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.mission img[data-v-2fea7dd6] {\n    width: 100% !important;\n}\n}\ninput[type=\"text\"][data-v-2fea7dd6]:-ms-input-placeholder {\n  text-align: right;\n}\ninput[type=\"text\"][data-v-2fea7dd6]::-webkit-input-placeholder {\n  text-align: right;\n}\ninput[data-v-2fea7dd6]::-moz-placeholder {\n  text-align: right;\n}\n@media (max-width: 767px) {\n.form[data-v-2fea7dd6] {\n    width: 100% !important;\n}\n}\n.v-application p[data-v-2fea7dd6] {\n  font-size: 24px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticStyle: { "min-height": "519px" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "mission myhome" }, [
      !_vm.mission
        ? _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.mission = !_vm.mission
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.ourmission")))]),
              _vm._v(" "),
              _vm.mission == false
                ? _c("span", { staticClass: "plus" }, [_vm._v("+")])
                : _vm._e()
            ]
          )
        : _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.mission = !_vm.mission
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.ourmission")))]),
              _vm._v(" "),
              _vm.mission == true
                ? _c("span", { staticClass: "plus" }, [_vm._v("-")])
                : _vm._e()
            ]
          ),
      _vm._v(" "),
      _vm.mission
        ? _c("div", { staticClass: "row mt-5 text-center" }, [
            _vm.$i18n.locale == "en"
              ? _c("div", { staticClass: "col-md-9" }, [
                  _c("p", [_vm._v(_vm._s(_vm.about.body1_en))])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.$i18n.locale == "ar"
              ? _c("div", { staticClass: "col-md-9" }, [
                  _c("p", [_vm._v(_vm._s(_vm.about.body1_ar))])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("img", { attrs: { src: _vm.about.body_image, alt: "" } })
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "artists mt-2" }, [
      !_vm.artist
        ? _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.artist = !_vm.artist
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.artists")))]),
              _vm._v(" "),
              _vm.artist == false
                ? _c("span", { staticClass: "plus" }, [_vm._v("+")])
                : _vm._e()
            ]
          )
        : _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.artist = !_vm.artist
                }
              }
            },
            [
              _vm._v(
                "\n      " + _vm._s(_vm.$t("message.artists")) + "\n      "
              ),
              _vm.artist == true
                ? _c("span", { staticClass: "false" }, [_vm._v("-")])
                : _vm._e()
            ]
          ),
      _vm._v(" "),
      _vm.artist
        ? _c("div", { staticClass: "mt-5 text-center" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _vm.$i18n.locale == "en"
                  ? _c("p", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.about.body2_en))
                    ])
                  : _c("p", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.about.body2_ar))
                    ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-12" }, [
                _c(
                  "div",
                  { staticClass: "row justify-content-sm-center" },
                  _vm._l(_vm.aboutArtists, function(artist) {
                    return _c(
                      "div",
                      {
                        key: artist.id,
                        staticClass: "col-sm-4 col-md-3 col-lg-2"
                      },
                      [
                        _c("div", { staticClass: "about-team__people" }, [
                          _c(
                            "a",
                            {
                              staticStyle: { color: "#000" },
                              attrs: {
                                href: artist.sociallink,
                                target: "_blank"
                              }
                            },
                            [
                              _c("img", {
                                staticStyle: {
                                  "border-radius": "28%",
                                  width: "100px",
                                  height: "100px"
                                },
                                attrs: { src: artist.image_ar, alt: "artist" }
                              }),
                              _vm._v(" "),
                              _vm.$i18n.locale == "en"
                                ? _c(
                                    "h4",
                                    { staticClass: "about-team__name mt-3" },
                                    [_vm._v(_vm._s(artist.name_en))]
                                  )
                                : _c(
                                    "h4",
                                    { staticClass: "about-team__name mt-3" },
                                    [_vm._v(_vm._s(artist.name_ar))]
                                  )
                            ]
                          )
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "support mt-2" }, [
      !_vm.support
        ? _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.support = !_vm.support
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.support")))]),
              _vm._v(" "),
              _vm.support == false
                ? _c("span", { staticClass: "plus" }, [_vm._v("+")])
                : _vm._e()
            ]
          )
        : _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.support = !_vm.support
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.support")))]),
              _vm._v(" "),
              _vm.support == true
                ? _c("span", { staticClass: "plus" }, [_vm._v("-")])
                : _vm._e()
            ]
          ),
      _vm._v(" "),
      _vm.support
        ? _c("div", { staticClass: "mt-5" }, [
            _vm.$i18n.locale == "en"
              ? _c("p", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(_vm.text_contact.text_en))
                ])
              : _c("p", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(_vm.text_contact.text_ar))
                ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "row justify-content-md-center support_div text-center"
              },
              [
                _c("div", { staticClass: "col-md-2 content" }, [
                  _c("h3", { staticClass: "mt-4" }, [
                    _vm._v(_vm._s(_vm.$t("message.contact")))
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-5" }, [
              _vm.support
                ? _c(
                    "div",
                    { staticClass: "col-sm-12" },
                    [
                      _vm.$i18n.locale == "en"
                        ? _c(
                            "v-form",
                            {
                              staticClass: "form",
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.send($event)
                                }
                              }
                            },
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            staticStyle: { border: "none" },
                                            attrs: {
                                              label: "First name",
                                              outlined: "",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.form.name,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "name", $$v)
                                              },
                                              expression: "form.name"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.name
                                            ? _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errors.name[0])
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            staticStyle: { border: "none" },
                                            attrs: {
                                              label: "E-mail",
                                              outlined: "",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.form.email,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "email", $$v)
                                              },
                                              expression: "form.email"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.email
                                            ? _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errors.email[0])
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-text-field", {
                                            staticStyle: { border: "none" },
                                            attrs: {
                                              label: "Phone Number",
                                              outlined: "",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.form.phone,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "phone", $$v)
                                              },
                                              expression: "form.phone"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.phone
                                            ? _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errors.phone[0])
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-textarea", {
                                            staticStyle: { border: "none" },
                                            attrs: {
                                              outlined: "",
                                              name: "input-7-4",
                                              label: "Message"
                                            },
                                            model: {
                                              value: _vm.form.message,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "message",
                                                  $$v
                                                )
                                              },
                                              expression: "form.message"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.message
                                            ? _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.errors.message[0]
                                                    )
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "ml-5",
                                      staticStyle: { color: "#fff" },
                                      attrs: {
                                        color: "#252524",
                                        type: "submit"
                                      }
                                    },
                                    [_vm._v("Send")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _c(
                            "v-form",
                            {
                              staticClass: "form",
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.send($event)
                                }
                              }
                            },
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            staticStyle: { border: "none" },
                                            attrs: {
                                              label: " اﻷسم",
                                              outlined: "",
                                              required: "",
                                              dir: "rtl"
                                            },
                                            model: {
                                              value: _vm.form.name,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "name", $$v)
                                              },
                                              expression: "form.name"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.name
                                            ? _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errors.name[0])
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-text-field", {
                                            staticStyle: { border: "none" },
                                            attrs: {
                                              label: "البريد اﻷلكتروني",
                                              outlined: "",
                                              required: "",
                                              dir: "rtl"
                                            },
                                            model: {
                                              value: _vm.form.email,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "email", $$v)
                                              },
                                              expression: "form.email"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.email
                                            ? _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errors.email[0])
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-text-field", {
                                            staticStyle: { border: "none" },
                                            attrs: {
                                              label: "رقم التليفون الخاص بك",
                                              outlined: "",
                                              required: "",
                                              dir: "rtl"
                                            },
                                            model: {
                                              value: _vm.form.phone,
                                              callback: function($$v) {
                                                _vm.$set(_vm.form, "phone", $$v)
                                              },
                                              expression: "form.phone"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.phone
                                            ? _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(_vm.errors.phone[0])
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "12" } },
                                        [
                                          _c("v-textarea", {
                                            staticStyle: { border: "none" },
                                            attrs: {
                                              outlined: "",
                                              name: "input-7-4",
                                              label: "اكتب رسالتك",
                                              dir: "rtl"
                                            },
                                            model: {
                                              value: _vm.form.message,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.form,
                                                  "message",
                                                  $$v
                                                )
                                              },
                                              expression: "form.message"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _vm.errors.message
                                            ? _c(
                                                "span",
                                                { staticClass: "red--text" },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.errors.message[0]
                                                    )
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mr-5",
                                      staticStyle: {
                                        float: "right",
                                        color: "#fff"
                                      },
                                      attrs: {
                                        color: "#252524",
                                        type: "submit"
                                      }
                                    },
                                    [_vm._v("ارسال")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticStyle: { clear: "both" } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                    ],
                    1
                  )
                : _vm._e()
            ])
          ])
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "joinus mt-2 mb-2" }, [
      !_vm.joinus
        ? _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.joinus = !_vm.joinus
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.$t("message.SUBSCRIBE")))]),
              _vm._v(" "),
              _vm.joinus == false
                ? _c("span", { staticClass: "plus" }, [_vm._v("+")])
                : _vm._e()
            ]
          )
        : _c(
            "h3",
            {
              staticClass: "title",
              on: {
                click: function($event) {
                  _vm.joinus = !_vm.joinus
                }
              }
            },
            [
              _vm._v(
                "\n      " + _vm._s(_vm.$t("message.SUBSCRIBE")) + "\n      "
              ),
              _vm.joinus == true
                ? _c("span", { staticClass: "false" }, [_vm._v("-")])
                : _vm._e()
            ]
          ),
      _vm._v(" "),
      _vm.joinus
        ? _c("div", { staticClass: "mt-5 text-center" }, [
            _c("div", { staticClass: "row justify-content-sm-center" }, [
              _c("div", { staticClass: "col-sm-12" }, [
                _vm.$i18n.locale == "en"
                  ? _c("p", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.jointext.text_en))
                    ])
                  : _c("p", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.jointext.text_ar))
                    ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [_c("app-Joinus")], 1)
              ])
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "spinner-content" }, [
      _c("div", { staticClass: "spinner" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Page/AboutUs.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Page/AboutUs.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true& */ "./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js& */ "./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& */ "./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2fea7dd6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Page/AboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=style&index=0&id=2fea7dd6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_style_index_0_id_2fea7dd6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/AboutUs.vue?vue&type=template&id=2fea7dd6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_2fea7dd6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);