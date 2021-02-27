(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isHome: {
      type: Boolean,
      "default": false //   required: true

    }
  },
  mounted: function mounted() {
    var _this = this;

    var route = this.isHome ? "/api/home-gifs" : "/api/gifs";
    axios.get(route).then(function (response) {
      //   console.log(response);
      _this.gifs = response.data.gifs;
    });
  },
  //   props: {
  //     palette: {
  //       required: true,
  //       type: Object
  //     }
  //   },
  data: function data() {
    return {
      gifs: null
    };
  },
  //   watch: {
  //     gifs(newPalette, oldPalette) {
  //       var video = document.getElementById("gif1");
  //       video.src = newPalette.gif1;
  //       video.play();
  //       var video2 = document.getElementById("gif2");
  //       video2.src = newPalette.gif2;
  //       video2.play();
  //     }
  //   },
  //   created() {
  //     axios.get("/api/gifs").then(response => {
  //       this.gifs = response.gifs;
  //     });
  //   },
  computed: {
    currentLanguage: function currentLanguage() {
      return this.$i18n.locale;
    } // gif1() {
    //   return location.origin + "/" + this.gifs.gif1;
    // },
    // gif2() {
    //   return location.origin + "/" + this.gifs.gif2;
    // }

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Slider.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/Slider.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      sliderPalettes: [] //   image_hover: ""

    };
  },
  computed: {
    currency: function currency() {
      return this.$store.getters.currency;
    }
  },
  created: function created() {
    var _this = this;

    axios.get("/api/palettes").then(function (response) {
      // this.artists = response.data.artists;
      _this.sliderPalettes = response.data.palettesSlider;
    })["catch"](function (error) {
      return console.log(error.response.data);
    });
  },
  mounted: function mounted() {
    var swiper = new Swiper(".swiper-container", {
      direction: "horizontal",
      slidesPerView: 4,
      spaceBetween: 10,
      resistance: true,
      //   freeMode: true,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true
      //   },
      on: {
        resize: function resize() {
          for (var index = 0; index < this.slides.length; index++) {
            var element = this.slides[index];
            element.style.height = element.style.width;
          } //   console.log(this.slides[0].style.width);
          //   console.log(this.width);

        }
      },
      breakpoints: {
        // when window width is >= 320px
        280: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        760: {
          slidesPerView: 2
        },
        // when window width is >= 640px
        // 991: {
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 45
        // }
        1020: {
          slidesPerView: 3
        }
      },
      observer: true,
      observerParents: true,
      scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: "auto" // hide: true

      }
    });
    var self = this;
    setTimeout(function () {
      swiper.updateSize();
      swiper.update();
    }, 3000); // swiper.scrollbar.updateSize("auto");
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.product-detail-text[data-v-55149226] {\n  margin: auto;\n  text-align: center;\n}\n.product-detail-text .title[data-v-55149226] {\n  font-size: 40px;\n  margin: 0 0 20px;\n  font-weight: bold;\n}\n.product-detail-text .text[data-v-55149226] {\n  font-size: 22px;\n  margin: 0;\n}\nvideo[data-v-55149226] {\n  display: block !important;\n}\n#gif1[data-v-55149226],\n#gif2[data-v-55149226] {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.swiper-container[data-v-40f21cb0] {\n  margin-bottom: 50px;\n  height: 85vh !important;\n}\n.swiper-pagination[data-v-40f21cb0] {\n  position: relative;\n  bottom: 20px;\n}\n@media (max-width: 767px) {\n.product-grid-item__title[data-v-40f21cb0] {\n    font-size: 16px;\n}\n  /* .product-grid-item .product-grid-item__image .product-grid-item__imagewrapper{\n        min-height: 200px;\n    } */\n}\n.swiper-pagination[data-v-40f21cb0][data-v-40f21cb0] {\n  margin-bottom: 11px;\n}\n@media (min-width: 760px) and (max-width: 1019px) {\n.swiper-container[data-v-40f21cb0] {\n    height: 65vw !important;\n}\n}\n@media (min-width: 1020px) {\n.swiper-container[data-v-40f21cb0] {\n    height: 45vw !important;\n}\n}\n@media (max-width: 759px) and (min-width: 500px) {\n.swiper-container[data-v-40f21cb0] {\n    height: 100vw !important;\n}\n}\n@media (min-width: 320px) and (max-width: 499px) {\n.swiper-container[data-v-40f21cb0] {\n    height: 110vw !important;\n}\n}\n/* .product-grid-item__image {\n  height: 100% !important;\n} */\n/* @media (max-width: 639px) and (min-width: 500px) {\n  .swiper-wrapper {\n    height: 95vh !important;\n  }\n  .product-grid-item {\n    height: 80vh !important;\n  }\n} */\n\n/* .swiper-container {\n  margin-bottom: 2% !important;\n}\n.product-grid-item__imagewrapper {\n  height: 100% !important;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "container" }, [
    _c("header", { staticClass: "mb-4 mt-5 mb-5" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _vm.gifs != null
        ? _c("img", { attrs: { src: _vm.gifs.gif1, id: "gif1" } })
        : _vm._e()
    ]),
    _vm._v(" "),
    _vm.gifs != null
      ? _c("div", { staticClass: "product-detail-text" }, [
          _vm.currentLanguage == "en"
            ? _c("h3", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.gifs.header_gif1))
              ])
            : _c("h3", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.gifs.header_ar_gif1))
              ]),
          _vm._v(" "),
          _vm.currentLanguage == "en"
            ? _c("p", { staticClass: "text" }, [
                _vm._v(_vm._s(_vm.gifs.content_gif1))
              ])
            : _c("p", { staticClass: "text" }, [
                _vm._v(_vm._s(_vm.gifs.content_ar_gif1))
              ])
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.isHome
      ? _c("header", { staticClass: "mb-4 mt-5 mb-5" }, [
          _c("div", { staticClass: "overlay" }),
          _vm._v(" "),
          _vm.gifs != null
            ? _c("img", { attrs: { src: _vm.gifs.gif2, id: "gif2" } })
            : _vm._e()
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Slider.vue?vue&type=template&id=40f21cb0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/Slider.vue?vue&type=template&id=40f21cb0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "mt-5" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("h2", { staticClass: "home-products-slider__title section-title" }, [
        _c("span", [_vm._v(_vm._s(_vm.$t("message.newrelease")))]),
        _vm._v(" "),
        _c("span", { staticClass: "sTitle" }, [
          _vm._v(_vm._s(_vm.$t("message.newreleaseheader")))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "swiper-container mt-5" }, [
        _c(
          "div",
          { staticClass: "swiper-wrapper" },
          _vm._l(_vm.sliderPalettes, function(data) {
            return _c("div", { key: data.id, staticClass: "swiper-slide" }, [
              _c("div", { staticClass: "product-grid-item" }, [
                _c(
                  "div",
                  { staticClass: "product-grid-item__image" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "product-grid-item__imagewrapper",
                        attrs: {
                          to: { path: "/shop", query: { mydata: data.id } },
                          "data-product-handle": "son-this-is-the-universe",
                          "data-product-quantity": "48"
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "front",
                          staticStyle: { height: "100%" },
                          attrs: {
                            src: data.artistMinPalettes.img
                              ? data.artistMinPalettes.img
                              : "ffff"
                          }
                        }),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "back",
                          staticStyle: { height: "100%" },
                          attrs: {
                            src: data.extraimg
                              ? data.extraimg.img
                              : "https://previews.123rf.com/images/eyematrix/eyematrix1712/eyematrix171200014/91720468-used-artists-paint-brushes-different-colors-on-palette-background.jpg"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(0, true)
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "product-grid-item__info" }, [
                  _c("div", { staticClass: "product-grid-item__title" }, [
                    _c("h3", { staticClass: "product-grid-item__name" }, [
                      _c(
                        "a",
                        {
                          attrs: {
                            "data-product-handle": "son-this-is-the-universe",
                            "data-product-quantity": "48"
                          }
                        },
                        [_vm._v(_vm._s(data.name))]
                      )
                    ]),
                    _vm._v(" "),
                    _vm.currency == "sar"
                      ? _c(
                          "span",
                          { staticClass: "product-grid-item__price" },
                          [
                            _vm._v(
                              _vm._s(data.M_price_sar) +
                                " " +
                                _vm._s(_vm.$t("currency.sar"))
                            )
                          ]
                        )
                      : _c(
                          "span",
                          { staticClass: "product-grid-item__price" },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("currency.usd1")) +
                                " " +
                                _vm._s(data.M_price)
                            )
                          ]
                        )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "product-grid-item__qty" }, [
                    _c("span", { staticClass: "prints-times text-success" }, [
                      _vm._v(_vm._s(data.palette_copies) + " /")
                    ]),
                    _vm._v(" "),
                    _c("span", [
                      _vm._v(
                        _vm._s(data.avalible_copies) +
                          " " +
                          _vm._s(_vm.$t("message.left"))
                      )
                    ])
                  ])
                ])
              ])
            ])
          }),
          0
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "swiper-scrollbar",
          staticStyle: { display: "block!important" }
        })
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "product-grid-item__variants" }, [
      _c("span", [_vm._v("Size")]),
      _vm._v(" "),
      _c("div", { staticClass: "product-grid-item__variants--content" }, [
        _c(
          "a",
          {
            staticClass: "soldout",
            attrs: { href: "#", "data-cart-add": "32583351238759" }
          },
          [_vm._v("L")]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "soldout",
            attrs: { href: "#", "data-cart-add": "32583351337063" }
          },
          [_vm._v("M")]
        ),
        _vm._v(" "),
        _c("a", { attrs: { href: "#", "data-cart-add": "32583351402599" } }, [
          _vm._v("S")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopVideo.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopVideo.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopVideo.vue?vue&type=template&id=55149226&scoped=true& */ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true&");
/* harmony import */ var _ShopVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopVideo.vue?vue&type=script&lang=js& */ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& */ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShopVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "55149226",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pagecomponents/ShopVideo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopVideo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=style&index=0&id=55149226&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopVideo.vue?vue&type=template&id=55149226&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopVideo.vue?vue&type=template&id=55149226&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_template_id_55149226_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pagecomponents/Slider.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pagecomponents/Slider.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider_vue_vue_type_template_id_40f21cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider.vue?vue&type=template&id=40f21cb0&scoped=true& */ "./resources/js/components/pagecomponents/Slider.vue?vue&type=template&id=40f21cb0&scoped=true&");
/* harmony import */ var _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.vue?vue&type=script&lang=js& */ "./resources/js/components/pagecomponents/Slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Slider_vue_vue_type_style_index_0_id_40f21cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css& */ "./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Slider_vue_vue_type_template_id_40f21cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Slider_vue_vue_type_template_id_40f21cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "40f21cb0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pagecomponents/Slider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pagecomponents/Slider.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/Slider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Slider.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_40f21cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Slider.vue?vue&type=style&index=0&id=40f21cb0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_40f21cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_40f21cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_40f21cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_40f21cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_style_index_0_id_40f21cb0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/Slider.vue?vue&type=template&id=40f21cb0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/Slider.vue?vue&type=template&id=40f21cb0&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_40f21cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Slider.vue?vue&type=template&id=40f21cb0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Slider.vue?vue&type=template&id=40f21cb0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_40f21cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slider_vue_vue_type_template_id_40f21cb0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);