(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/Payment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var mobileCodes = __webpack_require__(/*! ../../data/mobilecode */ "./resources/js/data/mobilecode.js")["default"]; // mobileCodes.unshift("Mobile Code");


var countries = __webpack_require__(/*! ../../data/countries.json */ "./resources/js/data/countries.json");

var countriesNames = Object.keys(countries);
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    larg: function larg(el, price, avilable) {
      this.sizeTarget = "Large - 70x93.5cm (28x37)";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      $(".active>.details_img").css({
        width: "100%",
        height: "250px"
      });
      $(".active>.content").css({
        width: "100%"
      });
    },
    cartTotalPrice: function cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cartTotalPriceSAR: function cartTotalPriceSAR() {
      return this.$store.getters.cartTotalPriceSAR;
    },
    cart: function cart() {
      return this.$store.state.cart;
    },
    currency: function currency() {
      return this.$store.getters.currency;
    },
    currentLanguage: function currentLanguage() {
      return this.$i18n.locale;
    },
    currentCountry: function currentCountry() {
      return this.form.country;
    }
  },
  watch: {
    currentCountry: function currentCountry(newCountry, oldCountry) {
      this.cities = countries[newCountry];
    }
  },
  data: function data() {
    return {
      errors: {},
      form: {
        email: null,
        lname: null,
        address: null,
        fname: null,
        apartment: null,
        city: null,
        phone: null,
        phonecode: null,
        country: "Saudi Arabia",
        goverment: "Saudi Arabia",
        postcode: null,
        items: [],
        promocode: ""
      },
      discount: "",
      discount_value: 0,
      discount_value_sar: 0,
      //   cartTotalPrice: 0,
      id: "",
      mobileCode: mobileCodes,
      countries: countriesNames,
      cities: [],
      nameRules: [function (v) {
        return !!v || "Name is required";
      }],
      checkbox: false,
      message: "",
      formview: "",
      discount_section: false
    };
  },
  mounted: function mounted() {
    $(".modal-mask").css("display", "none");
    this.form.country = "Saudi Arabia";
    this.cities = countries["Saudi Arabia"];
  },
  created: function created() {
    var _this = this;

    this.cartTotalPrice; //  {"paletteid":"3","palettesize":"medium","quantity":5}

    this.cart.forEach(function (element) {
      _this.form.items.push({
        paletteid: element.product.id,
        palettesize: element.sizeTarget,
        quantity: element.quantity
      });
    });
  },
  methods: {
    apply_discount: function apply_discount() {
      var _this2 = this;

      //console.log(this.discount);
      axios.post("/api/check-promo", {
        code: this.discount
      }).then(function (data) {
        // console.log(data.data);
        if (data.data.status) {
          var price = parseInt(data.data.percentage);
          _this2.discount_value = _this2.cartTotalPrice * price / 100;
          _this2.cartTotalPrice = _this2.cartTotalPrice - _this2.discount_value;
          _this2.form.promocode = _this2.discount; //SAR

          _this2.discount_value_sar = _this2.cartTotalPriceSAR * price / 100;
          _this2.cartTotalPriceSAR = _this2.cartTotalPriceSAR - _this2.discount_value_sar;
        }
      })["catch"](function (e) {
        console.log(e);
      });
    },
    clearProductFromCart: function clearProductFromCart(product) {
      this.$store.dispatch("deleteCartItem", product);
    },
    clearCartItems: function clearCartItems() {
      this.$store.dispatch("clearCartItems");
    },
    send: function send() {
      var _this3 = this;

      // console.log(this.cart());
      // this.form.items=[    {paletteid:22,palettesize:"small",quantity:22}, {paletteid:2,palettesize:"small",quantity:22}]
      axios.post("/api/add-order", this.form).then(function (data) {
        // console.log(data.data);
        // if (!data.data.status) {
        //   // console.log(data.data);
        //   this.errors = data.data.errors;
        // } else {
        $("#exampleModalCenter").modal("show"); // console.log(data.data.checkid);
        // console.log(data.data.orderid);

        _this3.formview = data.data.orderid;
        _this3.id = data.data.orderid;
        _this3.message = "donnnnnnnnnnnnnnnnne";
        var tag = document.createElement("script");
        tag.setAttribute("src", "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=" + data.data.checkid);
        document.head.appendChild(tag);
        _this3.errors = ""; //}
      })["catch"](function (error) {
        return _this3.errors = error.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.form[data-v-dc37895e] {\n  width: 87%;\n  margin: auto;\n  padding-left: 6%;\n}\n.img[data-v-dc37895e] {\n  padding-bottom: 1.5em !important;\n  margin: 20px 0;\n}\n.img img[data-v-dc37895e] {\n  width: 62px;\n  height: 70px;\n  border: 1px rgba(0, 0, 0, 0.1) solid;\n  border-radius: 8px;\n}\n.form_discount[data-v-dc37895e] {\n  padding: 10px;\n}\n.discount_section[data-v-dc37895e] {\n  width: 89%;\n  margin-top: 12% !important;\n}\n.countity[data-v-dc37895e] {\n  margin-top: 20px;\n  font-size: 1em;\n  font-weight: 600;\n  color: #323232;\n}\n.check_btn[data-v-dc37895e] {\n  border: 1px transparent solid;\n  border-radius: 5px;\n  color: white;\n  font-weight: 500;\n  padding: 25px 15px !important;\n  text-align: center;\n}\n.price[data-v-dc37895e] {\n  position: relative;\n  top: -16px;\n  color: #323232;\n  font-size: 1em;\n  font-weight: 600;\n}\n@media (min-width: 767px) and (max-width: 991px) {\n.discount_section[data-v-dc37895e] {\n    width: 100%;\n}\n}\n.discount .v-input__slot[data-v-dc37895e] {\n  background: transparent !important;\n}\n.alert[data-v-dc37895e] {\n  text-align: center;\n}\n.sm_discount[data-v-dc37895e] {\n  display: none;\n}\n@media (max-width: 767px) {\n.lg_discount[data-v-dc37895e] {\n    display: none;\n}\n.sm_discount[data-v-dc37895e] {\n    display: block;\n}\n}\n.quantity[data-v-dc37895e] {\n  position: absolute;\n  width: 21px;\n  right: -18%;\n  top: -11%;\n  height: 21px;\n  background: #808080;\n  color: #fff;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 0.8rem;\n  line-height: 28px;\n  font-weight: bold;\n}\n@media (max-width: 767px) {\n  /* .quantity {\n    left: 78px;\n  } */\n}\n.clickdown[data-v-dc37895e] {\n  cursor: pointer;\n  font-size: 18px;\n  color: #197bbd;\n  padding: 7px;\n}\n.theme--light.v-btn[data-v-dc37895e]:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {\n  background-color: rgb(200, 200, 200);\n  padding: 1em 1.7em;\n  border: 1px solid rgb(200, 200, 200);\n  border-radius: 5px;\n  color: white;\n  font-weight: bolder;\n  text-align: center;\n  font-size: 14px;\n  white-space: nowrap;\n  line-height: 1.5;\n  text-transform: capitalize;\n  height: auto;\n}\n@media (max-width: 767px) {\n.theme--light.v-btn[data-v-dc37895e]:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {\n    background-color: #f5f5f5;\n    margin-top: 14px;\n}\n}\n.theme--light.v-input[data-v-dc37895e] {\n  padding: 0 !important;\n}\n.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot input[data-v-dc37895e] {\n  text-align: start !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {\n  background: transparent !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=template&id=dc37895e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/Payment.vue?vue&type=template&id=dc37895e&scoped=true& ***!
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
  return _c("section", { staticStyle: { "margin-top": "5%" } }, [
    _vm.$i18n.locale == "en"
      ? _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-5 sm_discount mt-4",
              staticStyle: { "background-color": "#fafafa" }
            },
            [
              !_vm.discount_section
                ? _c(
                    "div",
                    {
                      staticClass: "clickdown",
                      on: {
                        click: function($event) {
                          _vm.discount_section = !_vm.discount_section
                        }
                      }
                    },
                    [
                      _c("span", [
                        _c("i", {
                          staticClass: "fa fa-shopping-cart ml-2 mr-2"
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("message.showorder")) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.discount_section == false
                        ? _c("span", { staticClass: "plus" }, [
                            _c("i", { staticClass: "fa fa-chevron-down" })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "mr-3",
                          staticStyle: { float: "right" }
                        },
                        [
                          _c("span", { staticStyle: { color: "#737171" } }),
                          _vm._v(" "),
                          _vm.currency == "sar"
                            ? [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.sar")) +
                                    " " +
                                    _vm._s(_vm.cartTotalPriceSAR)
                                )
                              ]
                            : [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.usd1")) +
                                    " " +
                                    _vm._s(_vm.cartTotalPrice)
                                )
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { clear: "both" } })
                    ]
                  )
                : _c(
                    "div",
                    {
                      staticClass: "clickdown",
                      on: {
                        click: function($event) {
                          _vm.discount_section = !_vm.discount_section
                        }
                      }
                    },
                    [
                      _c("span", [
                        _c("i", {
                          staticClass: "fa fa-shopping-cart ml-2 mr-2"
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("message.hideorder")) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.discount_section == true
                        ? _c("span", { staticClass: "plus" }, [
                            _c("i", { staticClass: "fa fa-chevron-up" })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "mr-3",
                          staticStyle: { float: "right" }
                        },
                        [
                          _c("span", { staticStyle: { color: "#737171" } }),
                          _vm._v(" "),
                          _vm.currency == "sar"
                            ? [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.sar")) +
                                    " " +
                                    _vm._s(_vm.cartTotalPriceSAR)
                                )
                              ]
                            : [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.usd1")) +
                                    " " +
                                    _vm._s(_vm.cartTotalPrice)
                                )
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { clear: "both" } })
                    ]
                  ),
              _vm._v(" "),
              _vm.discount_section
                ? _c(
                    "div",
                    {
                      staticClass: "discount_section mt-5",
                      staticStyle: { width: "100%", padding: "0px 10px" }
                    },
                    [
                      _vm._l(_vm.cart, function(item) {
                        return _c(
                          "div",
                          {
                            key: item.product.id,
                            staticClass: "border-bottom p-2 img"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "d-inline-block position-relative"
                              },
                              [
                                _c("span", { staticClass: "quantity" }, [
                                  _vm._v(_vm._s(item.quantity))
                                ]),
                                _vm._v(" "),
                                _c("img", {
                                  attrs: {
                                    src: item.product.artistMinPalettes.img
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "price ml-5" }, [
                              _c("strong", [_vm._v(_vm._s(item.product.name))])
                            ]),
                            _vm._v(" "),
                            _vm.currency == "sar"
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "countity",
                                    staticStyle: { float: "right" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.product.M_price_sar) +
                                        " " +
                                        _vm._s(_vm.$t("currency.sar"))
                                    )
                                  ]
                                )
                              : _c(
                                  "div",
                                  {
                                    staticClass: "countity",
                                    staticStyle: { float: "right" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(item.price) +
                                        " " +
                                        _vm._s(_vm.$t("currency.usd1"))
                                    )
                                  ]
                                ),
                            _vm._v(" "),
                            _c("div", { staticStyle: { clear: "both" } })
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "discount" },
                        [
                          _c(
                            "v-form",
                            { staticClass: "form_discount" },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pr-0",
                                      attrs: { cols: "9", sm: "9" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticStyle: { border: "none" },
                                        attrs: {
                                          label: "Discount",
                                          outlined: "",
                                          filled: ""
                                        },
                                        model: {
                                          value: _vm.discount,
                                          callback: function($$v) {
                                            _vm.discount = $$v
                                          },
                                          expression: "discount"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: { padding: "0" },
                                      attrs: { cols: "3", sm: "3" }
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: {
                                            color: "white",
                                            padding: "26px 0"
                                          },
                                          attrs: { color: "#c8c8c8" },
                                          on: {
                                            click: function($event) {
                                              return _vm.apply_discount()
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-arrow-right"
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticStyle: { padding: "10px" } }, [
                        _c(
                          "span",
                          {
                            staticStyle: { padding: "10px", color: "#444f58" }
                          },
                          [_vm._v("Subtotal")]
                        ),
                        _vm._v(" "),
                        _vm.currency == "sar"
                          ? _c(
                              "span",
                              {
                                staticStyle: {
                                  float: "right",
                                  color: "#444f58",
                                  "padding-right": "10px"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.discount_value_sar) +
                                    " " +
                                    _vm._s(_vm.$t("currency.sar"))
                                )
                              ]
                            )
                          : _c(
                              "span",
                              {
                                staticStyle: {
                                  float: "right",
                                  color: "#444f58",
                                  "padding-right": "10px"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.discount_value) +
                                    " " +
                                    _vm._s(_vm.$t("currency.usd1"))
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { clear: "both" } })
                      ]),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c("div", { staticStyle: { padding: "10px" } }, [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "1.3em",
                              padding: "10px"
                            }
                          },
                          [_vm._v("Total")]
                        ),
                        _vm._v(" "),
                        _c("span", { staticStyle: { float: "right" } }, [
                          _c(
                            "span",
                            {
                              staticStyle: {
                                color: "#737171",
                                "padding-right": "10px"
                              }
                            },
                            [
                              _vm.currency == "sar"
                                ? [
                                    _c(
                                      "strong",
                                      {
                                        staticStyle: {
                                          color: "#323232",
                                          "font-size": "1.5em"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("currency.sar")) +
                                            _vm._s(_vm.cartTotalPriceSAR)
                                        )
                                      ]
                                    )
                                  ]
                                : [
                                    _c(
                                      "strong",
                                      {
                                        staticStyle: {
                                          color: "#323232",
                                          "font-size": "1.5em"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.$t("currency.usd1")) +
                                            _vm._s(_vm.cartTotalPrice)
                                        )
                                      ]
                                    )
                                  ]
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticStyle: { clear: "both" } })
                      ])
                    ],
                    2
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _c(
                "div",
                {
                  staticClass: "modal show",
                  attrs: {
                    id: "exampleModalCenter",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "exampleModalCenterTitle",
                    "aria-hidden": "true",
                    show: "true"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog modal-dialog-centered",
                      attrs: { role: "document" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "modal-content",
                          staticStyle: { display: "contents" }
                        },
                        [
                          _c("div", { staticClass: "moda-body" }, [
                            _vm._v("\n              ss\n              "),
                            _c("form", {
                              staticClass: "paymentWidgets",
                              attrs: {
                                action: "/api/payment/" + this.id,
                                "data-brands": "VISA MASTER AMEX"
                              }
                            })
                          ])
                        ]
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
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
                      _c("div", { staticClass: "alert text-left mb-3" }, [
                        _vm.errors.items
                          ? _c("h5", { staticClass: "red--text" }, [
                              _vm._v(_vm._s(_vm.$t("message.noitem")))
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm.message.length > 0
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "alert alert-info alert-dismissible fade show",
                              attrs: { role: "alert" }
                            },
                            [
                              _c("h1", { staticClass: "text-center" }, [
                                _vm._v("Done")
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "data-dismiss": "alert",
                                    "aria-label": "Close"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { attrs: { "aria-hidden": "true" } },
                                    [_vm._v("×")]
                                  )
                                ]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("h4", { staticStyle: { "font-size": "1.3rem" } }, [
                            _vm._v("Contacts information")
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("label", [_vm._v("E-mail")]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "" },
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
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.email[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("label", [_vm._v("First Name")]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "" },
                                model: {
                                  value: _vm.form.fname,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fname", $$v)
                                  },
                                  expression: "form.fname"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.fname
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.fname[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("label", [_vm._v("Last Name")]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "" },
                                model: {
                                  value: _vm.form.lname,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "lname", $$v)
                                  },
                                  expression: "form.lname"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.lname
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.lname[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 0px 0px 12px" },
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c("label", [_vm._v("Mobile Code")]),
                              _vm._v(" "),
                              _c("v-select", {
                                staticStyle: { border: "none" },
                                attrs: {
                                  items: _vm.mobileCode,
                                  placeholder: "Mobile Code",
                                  outlined: ""
                                },
                                model: {
                                  value: _vm.form.phonecode,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "phonecode", $$v)
                                  },
                                  expression: "form.phonecode"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.phonecode
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.phonecode[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 0px 12px" },
                              attrs: { cols: "12", sm: "8" }
                            },
                            [
                              _c("label", [_vm._v("Phone")]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "" },
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
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.phone[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "h4",
                            {
                              staticStyle: {
                                "font-size": "1.3rem",
                                "padding-top": "2em",
                                "padding-bottom": "0.5em"
                              }
                            },
                            [_vm._v("Shipping Address")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("label", [_vm._v("Address")]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "" },
                                model: {
                                  value: _vm.form.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "address", $$v)
                                  },
                                  expression: "form.address"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.address
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.address[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("label", [_vm._v("Appartment (optional)")]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "" },
                                model: {
                                  value: _vm.form.apartment,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "apartment", $$v)
                                  },
                                  expression: "form.apartment"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.apartment
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.apartment[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", sm: "12" }
                            },
                            [
                              _c("label", [_vm._v("Country")]),
                              _vm._v(" "),
                              _c("v-select", {
                                staticStyle: { border: "none" },
                                attrs: { items: _vm.countries, outlined: "" },
                                model: {
                                  value: _vm.form.country,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "country", $$v)
                                  },
                                  expression: "form.country"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.country
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.country[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "8" }
                            },
                            [
                              _c("label", [_vm._v("City")]),
                              _vm._v(" "),
                              _c("v-select", {
                                staticStyle: {
                                  border: "none",
                                  "text-align": "right"
                                },
                                attrs: {
                                  items: _vm.cities,
                                  outlined: "",
                                  dir: "rtl"
                                },
                                model: {
                                  value: _vm.form.city,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "city", $$v)
                                  },
                                  expression: "form.city"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.city
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.city[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c("label", [_vm._v("Post Code")]),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "" },
                                model: {
                                  value: _vm.form.postcode,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "postcode", $$v)
                                  },
                                  expression: "form.postcode"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.postcode
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.postcode[0]))
                                  ])
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
                          staticClass: "check_btn",
                          staticStyle: { float: "left" },
                          attrs: { color: "#197bbd", type: "submit" }
                        },
                        [_vm._v("Proceed To Payment")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-5 lg_discount",
              staticStyle: { "background-color": "#fafafa" }
            },
            [
              _c(
                "div",
                { staticClass: "discount_section mt-5" },
                [
                  _vm._l(_vm.cart, function(item) {
                    return _c(
                      "div",
                      {
                        key: item.product.id,
                        staticClass: "border-bottom p-2 img"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "d-inline-block position-relative" },
                          [
                            _c("span", { staticClass: "quantity" }, [
                              _vm._v(_vm._s(item.quantity))
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              attrs: { src: item.product.artistMinPalettes.img }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "price ml-5" }, [
                          _c("strong", [_vm._v(_vm._s(item.product.name))])
                        ]),
                        _vm._v(" "),
                        _vm.currency == "sar"
                          ? _c(
                              "div",
                              {
                                staticClass: "countity",
                                staticStyle: { float: "right" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.sar")) +
                                    _vm._s(item.product.M_price_sar)
                                )
                              ]
                            )
                          : _c(
                              "div",
                              {
                                staticClass: "countity",
                                staticStyle: { float: "right" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.usd1")) +
                                    _vm._s(item.price)
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { clear: "both" } })
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "discount" },
                    [
                      _c(
                        "v-form",
                        { staticClass: "form_discount" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "9" } },
                                [
                                  _c("v-text-field", {
                                    staticStyle: { border: "none" },
                                    attrs: {
                                      label: "Discount",
                                      outlined: "",
                                      filled: ""
                                    },
                                    model: {
                                      value: _vm.discount,
                                      callback: function($$v) {
                                        _vm.discount = $$v
                                      },
                                      expression: "discount"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "3" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticStyle: { color: "white" },
                                      attrs: { color: "#c8c8c8" },
                                      on: {
                                        click: function($event) {
                                          return _vm.apply_discount()
                                        }
                                      }
                                    },
                                    [_vm._v("Apply")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "1em",
                          padding: "10px",
                          color: "#535353",
                          "font-weight": "600"
                        }
                      },
                      [_vm._v("Subtotal")]
                    ),
                    _vm._v(" "),
                    _vm.currency == "sar"
                      ? _c(
                          "span",
                          {
                            staticStyle: {
                              float: "right",
                              "font-size": "1em",
                              color: "#323232",
                              "padding-right": "10px",
                              "font-weight": "bold"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("currency.sar")) +
                                _vm._s(_vm.discount_value_sar)
                            )
                          ]
                        )
                      : _c(
                          "span",
                          {
                            staticStyle: {
                              float: "right",
                              "font-size": "1em",
                              color: "#323232",
                              "padding-right": "10px",
                              "font-weight": "bold"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.$t("currency.usd1")) +
                                _vm._s(_vm.discount_value)
                            )
                          ]
                        ),
                    _vm._v(" "),
                    _c("div", { staticStyle: { clear: "both" } })
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          "font-size": "1.2em",
                          "padding-left": "10px",
                          color: "#323232",
                          "font-weight": "600"
                        }
                      },
                      [_vm._v("Total")]
                    ),
                    _vm._v(" "),
                    _c("span", { staticStyle: { float: "right" } }, [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            color: "#737171",
                            "padding-right": "10px"
                          }
                        },
                        [
                          _vm.currency == "sar"
                            ? [
                                _c(
                                  "strong",
                                  {
                                    staticStyle: {
                                      color: "#323232",
                                      "font-size": "1.5em"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("currency.sar")) +
                                        _vm._s(_vm.cartTotalPriceSAR)
                                    )
                                  ]
                                )
                              ]
                            : [
                                _c(
                                  "strong",
                                  {
                                    staticStyle: {
                                      color: "#323232",
                                      "font-size": "1.5em"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("currency.usd1")) +
                                        _vm._s(_vm.cartTotalPrice)
                                    )
                                  ]
                                )
                              ]
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticStyle: { clear: "both" } })
                  ])
                ],
                2
              )
            ]
          )
        ])
      : _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-5 sm_discount mt-4",
              staticStyle: { "background-color": "#fafafa" }
            },
            [
              !_vm.discount_section
                ? _c(
                    "div",
                    {
                      staticClass: "clickdown",
                      on: {
                        click: function($event) {
                          _vm.discount_section = !_vm.discount_section
                        }
                      }
                    },
                    [
                      _c("span", [
                        _c("i", {
                          staticClass: "fa fa-shopping-cart ml-2 mr-2"
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("message.showorder")) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.discount_section == false
                        ? _c("span", { staticClass: "plus" }, [
                            _c("i", { staticClass: "fa fa-chevron-down" })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "mr-3",
                          staticStyle: { float: "right" }
                        },
                        [
                          _c("span", { staticStyle: { color: "#737171" } }),
                          _vm._v(" "),
                          _vm.currency == "sar"
                            ? [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.sar")) +
                                    " " +
                                    _vm._s(_vm.cartTotalPriceSAR)
                                )
                              ]
                            : [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.usd1")) +
                                    " " +
                                    _vm._s(_vm.cartTotalPrice)
                                )
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { clear: "both" } })
                    ]
                  )
                : _c(
                    "div",
                    {
                      staticClass: "clickdown",
                      on: {
                        click: function($event) {
                          _vm.discount_section = !_vm.discount_section
                        }
                      }
                    },
                    [
                      _c("span", [
                        _c("i", {
                          staticClass: "fa fa-shopping-cart ml-2 mr-2"
                        }),
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("message.hideorder")) +
                            "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.discount_section == true
                        ? _c("span", { staticClass: "plus" }, [
                            _c("i", { staticClass: "fa fa-chevron-up" })
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "mr-3",
                          staticStyle: { float: "right" }
                        },
                        [
                          _c("span", { staticStyle: { color: "#737171" } }),
                          _vm._v(" "),
                          _vm.currency == "sar"
                            ? [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.sar")) +
                                    " " +
                                    _vm._s(_vm.cartTotalPriceSAR)
                                )
                              ]
                            : [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.usd1")) +
                                    " " +
                                    _vm._s(_vm.cartTotalPrice)
                                )
                              ]
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { clear: "both" } })
                    ]
                  ),
              _vm._v(" "),
              _vm.discount_section
                ? _c(
                    "div",
                    {
                      staticClass: "discount_section mt-5",
                      staticStyle: { width: "100%", padding: "0px 10px" }
                    },
                    [
                      _vm._l(_vm.cart, function(item) {
                        return _c(
                          "div",
                          {
                            key: item.product.id,
                            staticClass: "border-bottom p-2 img"
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "d-inline-block position-relative"
                              },
                              [
                                _c("span", { staticClass: "quantity" }, [
                                  _vm._v(_vm._s(item.quantity))
                                ]),
                                _vm._v(" "),
                                _c("img", {
                                  attrs: {
                                    src: item.product.artistMinPalettes.img
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "price ml-5" }, [
                              _c("strong", [_vm._v(_vm._s(item.product.name))])
                            ]),
                            _vm._v(" "),
                            _vm.currency == "sar"
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "countity",
                                    staticStyle: { float: "right" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("currency.sar")) +
                                        _vm._s(item.product.M_price_sar)
                                    )
                                  ]
                                )
                              : _c(
                                  "div",
                                  {
                                    staticClass: "countity",
                                    staticStyle: { float: "right" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("currency.usd1")) +
                                        _vm._s(item.price)
                                    )
                                  ]
                                ),
                            _vm._v(" "),
                            _c("div", { staticStyle: { clear: "both" } })
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "discount" },
                        [
                          _c(
                            "v-form",
                            { staticClass: "form_discount" },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "9", sm: "9" } },
                                    [
                                      _c("v-text-field", {
                                        staticStyle: { border: "none" },
                                        attrs: {
                                          label: "الكوبون",
                                          outlined: "",
                                          filled: ""
                                        },
                                        model: {
                                          value: _vm.discount,
                                          callback: function($$v) {
                                            _vm.discount = $$v
                                          },
                                          expression: "discount"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: { padding: "0" },
                                      attrs: { cols: "3", sm: "3" }
                                    },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: {
                                            color: "white",
                                            padding: "26px 0"
                                          },
                                          attrs: { color: "#c8c8c8" },
                                          on: {
                                            click: function($event) {
                                              return _vm.apply_discount()
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-arrow-right"
                                          })
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("hr"),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "discount_text",
                          staticStyle: { color: "#737171", padding: "10px" }
                        },
                        [
                          _c("div", [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  float: "right",
                                  padding: "10px",
                                  color: "#444f58"
                                }
                              },
                              [_vm._v("الخصم")]
                            ),
                            _vm._v(" "),
                            _vm.currency == "sar"
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#444f58",
                                      "padding-right": "10px",
                                      "font-weight": "bold"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.discount_value_sar) +
                                        " " +
                                        _vm._s(_vm.$t("currency.sar"))
                                    )
                                  ]
                                )
                              : _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-size": "16px",
                                      color: "#444f58",
                                      "padding-right": "10px",
                                      "font-weight": "bold"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.discount_value) +
                                        " " +
                                        _vm._s(_vm.$t("currency.usd1"))
                                    )
                                  ]
                                ),
                            _vm._v(" "),
                            _c("div", { staticStyle: { clear: "both" } })
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticStyle: { "font-size": "1.3em", padding: "10px" }
                        },
                        [
                          _c("span", { staticStyle: { float: "right" } }, [
                            _vm._v("الحساب الإجمالى")
                          ]),
                          _vm._v(" "),
                          _c("span", [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  color: "#737171",
                                  "padding-right": "10px"
                                }
                              },
                              [
                                _vm.currency == "sar"
                                  ? [
                                      _c(
                                        "strong",
                                        {
                                          staticStyle: {
                                            color: "#323232",
                                            "font-size": "1.5em"
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.cartTotalPriceSAR))]
                                      ),
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(_vm.$t("currency.sar")) +
                                          "\n              "
                                      )
                                    ]
                                  : [
                                      _c(
                                        "strong",
                                        {
                                          staticStyle: {
                                            color: "#323232",
                                            "font-size": "1.5em"
                                          }
                                        },
                                        [_vm._v(_vm._s(_vm.cartTotalPrice))]
                                      ),
                                      _vm._v(
                                        "\n                " +
                                          _vm._s(_vm.$t("currency.usd1")) +
                                          "\n              "
                                      )
                                    ]
                              ],
                              2
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticStyle: { clear: "both" } })
                        ]
                      )
                    ],
                    2
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-7" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
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
                      _c("div", { staticClass: "alert text-center mb-3" }, [
                        _vm.errors.items
                          ? _c("h5", { staticClass: "red--text" }, [
                              _vm._v(_vm._s(_vm.$t("message.noitem")))
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm.message.length > 0
                        ? _c(
                            "div",
                            {
                              staticClass:
                                "alert alert-info alert-dismissible fade show",
                              attrs: { role: "alert" }
                            },
                            [
                              _c("h1", { staticClass: "text-center" }, [
                                _vm._v("Done")
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "data-dismiss": "alert",
                                    "aria-label": "Close"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { attrs: { "aria-hidden": "true" } },
                                    [_vm._v("×")]
                                  )
                                ]
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "h4",
                        {
                          staticClass: "text-right",
                          staticStyle: { "font-size": "1.3rem" }
                        },
                        [_vm._v("تسجيل البيانات")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("البريد الإلكتروني")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "", dir: "rtl" },
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
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.email[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("الاسم الأخير")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "", dir: "rtl" },
                                model: {
                                  value: _vm.form.lname,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "lname", $$v)
                                  },
                                  expression: "form.lname"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.lname
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.lname[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "6" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("الاسم الأول")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "", dir: "rtl" },
                                model: {
                                  value: _vm.form.fname,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fname", $$v)
                                  },
                                  expression: "form.fname"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.fname
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.fname[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 0px 12px" },
                              attrs: { cols: "12", sm: "8" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("الهاتف")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "", dir: "rtl" },
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
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.phone[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 0px 12px 0px" },
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("كود الهاتف")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-select", {
                                staticStyle: { border: "none" },
                                attrs: {
                                  items: _vm.mobileCode,
                                  outlined: "",
                                  placeholder: "Mobile Code",
                                  dir: "rtl"
                                },
                                model: {
                                  value: _vm.form.phonecode,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "phonecode", $$v)
                                  },
                                  expression: "form.phonecode"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.phonecode
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.phonecode[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "h4",
                            {
                              staticClass: "text-right",
                              staticStyle: {
                                "font-size": "1.3rem",
                                "padding-top": "2em",
                                "padding-bottom": "0.5em"
                              }
                            },
                            [_vm._v("بيانات الشحن")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("العنوان")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "", dir: "rtl" },
                                model: {
                                  value: _vm.form.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "address", $$v)
                                  },
                                  expression: "form.address"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.address
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.address[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "12" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("المنزل (اختياري)")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "", dir: "rtl" },
                                model: {
                                  value: _vm.form.apartment,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "apartment", $$v)
                                  },
                                  expression: "form.apartment"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.apartment
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.apartment[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", sm: "12" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("الدولة")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-select", {
                                staticStyle: {
                                  border: "none",
                                  "text-align": "right"
                                },
                                attrs: {
                                  items: _vm.countries,
                                  outlined: "",
                                  dir: "rtl"
                                },
                                model: {
                                  value: _vm.form.country,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "country", $$v)
                                  },
                                  expression: "form.country"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.country
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.country[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", sm: "4" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("رمز البريد")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticStyle: { border: "none" },
                                attrs: { outlined: "", dir: "rtl" },
                                model: {
                                  value: _vm.form.postcode,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "postcode", $$v)
                                  },
                                  expression: "form.postcode"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.postcode
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.postcode[0]))
                                  ])
                                : _vm._e()
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: { padding: "0px 12px" },
                              attrs: { cols: "12", md: "8" }
                            },
                            [
                              _c("label", { staticStyle: { float: "right" } }, [
                                _vm._v("المدينة")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticStyle: { clear: "both" } }),
                              _vm._v(" "),
                              _c("v-select", {
                                staticStyle: {
                                  border: "none",
                                  "text-align": "right"
                                },
                                attrs: {
                                  items: _vm.cities,
                                  outlined: "",
                                  dir: "rtl"
                                },
                                model: {
                                  value: _vm.form.city,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "city", $$v)
                                  },
                                  expression: "form.city"
                                }
                              }),
                              _vm._v(" "),
                              _vm.errors.city
                                ? _c("span", { staticClass: "red--text" }, [
                                    _vm._v(_vm._s(_vm.errors.city[0]))
                                  ])
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
                          staticClass: "check_btn",
                          staticStyle: { float: "right" },
                          attrs: { color: "#197bbd", type: "submit" }
                        },
                        [_vm._v("متابعة الشراء")]
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
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "col-md-5 lg_discount",
              staticStyle: {
                "background-color": "#fafafa",
                "padding-left": "4%",
                "padding-right": "2%"
              }
            },
            [
              _c(
                "div",
                { staticClass: "discount_section mt-5" },
                [
                  _vm._l(_vm.cart, function(item) {
                    return _c(
                      "div",
                      {
                        key: item.product.id,
                        staticClass: "border-bottom p-2 img"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "d-inline-block position-relative" },
                          [
                            _c("span", { staticClass: "quantity" }, [
                              _vm._v(_vm._s(item.quantity))
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              attrs: { src: item.product.artistMinPalettes.img }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "price ml-5" }, [
                          _c("strong", [_vm._v(_vm._s(item.product.name))])
                        ]),
                        _vm._v(" "),
                        _vm.currency == "sar"
                          ? _c(
                              "div",
                              {
                                staticClass: "countity",
                                staticStyle: { float: "right" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.sar")) +
                                    _vm._s(item.product.M_price_sar)
                                )
                              ]
                            )
                          : _c(
                              "div",
                              {
                                staticClass: "countity",
                                staticStyle: { float: "right" }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.$t("currency.usd1")) +
                                    _vm._s(item.price)
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { clear: "both" } })
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "discount" },
                    [
                      _c(
                        "v-form",
                        { staticClass: "form_discount" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "9" } },
                                [
                                  _c("v-text-field", {
                                    staticStyle: { border: "none" },
                                    attrs: {
                                      label: "الكوبون",
                                      outlined: "",
                                      filled: ""
                                    },
                                    model: {
                                      value: _vm.discount,
                                      callback: function($$v) {
                                        _vm.discount = $$v
                                      },
                                      expression: "discount"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "3" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticStyle: {
                                        color: "white",
                                        padding: "0 6px"
                                      },
                                      attrs: { color: "#c8c8c8" },
                                      on: {
                                        click: function($event) {
                                          return _vm.apply_discount()
                                        }
                                      }
                                    },
                                    [_vm._v("خصم الأن")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "discount_text",
                      staticStyle: { color: "#737171", padding: "10px" }
                    },
                    [
                      _c("div", [
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "16px",
                              float: "right",
                              padding: "10px",
                              color: "#444f58"
                            }
                          },
                          [_vm._v("الخصم")]
                        ),
                        _vm._v(" "),
                        _vm.currency == "sar"
                          ? _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#444f58",
                                  "padding-right": "10px",
                                  "font-weight": "bold"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.discount_value_sar) +
                                    " " +
                                    _vm._s(_vm.$t("currency.sar"))
                                )
                              ]
                            )
                          : _c(
                              "span",
                              {
                                staticStyle: {
                                  "font-size": "16px",
                                  color: "#444f58",
                                  "padding-right": "10px",
                                  "font-weight": "bold"
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(_vm.discount_value) +
                                    " " +
                                    _vm._s(_vm.$t("currency.usd1"))
                                )
                              ]
                            ),
                        _vm._v(" "),
                        _c("div", { staticStyle: { clear: "both" } })
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticStyle: { padding: "10px" } }, [
                    _c(
                      "span",
                      { staticStyle: { float: "right", "font-size": "1.3em" } },
                      [_vm._v("الحساب الإجمالى")]
                    ),
                    _vm._v(" "),
                    _c("span", [
                      _c(
                        "span",
                        {
                          staticStyle: {
                            color: "#737171",
                            "padding-right": "10px"
                          }
                        },
                        [
                          _vm.currency == "sar"
                            ? [
                                _c(
                                  "strong",
                                  {
                                    staticStyle: {
                                      color: "#323232",
                                      "font-size": "1.5em"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.cartTotalPriceSAR))]
                                ),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("currency.sar")) +
                                    "\n              "
                                )
                              ]
                            : [
                                _c(
                                  "strong",
                                  {
                                    staticStyle: {
                                      color: "#323232",
                                      "font-size": "1.5em"
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.cartTotalPrice))]
                                ),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.$t("currency.usd1")) +
                                    "\n              "
                                )
                              ]
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticStyle: { clear: "both" } })
                  ])
                ],
                2
              )
            ]
          )
        ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal show",
        attrs: {
          id: "exampleModalCenter",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalCenterTitle",
          "aria-hidden": "true",
          show: "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" }
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-content",
                staticStyle: { display: "contents" }
              },
              [
                _c("div", { staticClass: "moda-body" }, [
                  _vm._v("\n              ss\n              "),
                  _c("form", {
                    staticClass: "paymentWidgets",
                    attrs: {
                      action: "/api/payment/40",
                      "data-brands": "VISA MASTER AMEX"
                    }
                  })
                ])
              ]
            )
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Page/Payment.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Page/Payment.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Payment_vue_vue_type_template_id_dc37895e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Payment.vue?vue&type=template&id=dc37895e&scoped=true& */ "./resources/js/components/Page/Payment.vue?vue&type=template&id=dc37895e&scoped=true&");
/* harmony import */ var _Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Payment.vue?vue&type=script&lang=js& */ "./resources/js/components/Page/Payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Payment_vue_vue_type_style_index_0_id_dc37895e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css& */ "./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css&");
/* harmony import */ var _Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Payment.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Payment_vue_vue_type_template_id_dc37895e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Payment_vue_vue_type_template_id_dc37895e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dc37895e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Page/Payment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Page/Payment.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Page/Payment.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_dc37895e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=style&index=0&id=dc37895e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_dc37895e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_dc37895e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_dc37895e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_dc37895e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_0_id_dc37895e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/Page/Payment.vue?vue&type=template&id=dc37895e&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Page/Payment.vue?vue&type=template&id=dc37895e&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_dc37895e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Payment.vue?vue&type=template&id=dc37895e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/Payment.vue?vue&type=template&id=dc37895e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_dc37895e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Payment_vue_vue_type_template_id_dc37895e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/data/countries.json":
/*!******************************************!*\
  !*** ./resources/js/data/countries.json ***!
  \******************************************/
/*! exports provided: United Arab Emirates, Egypt, Kuwait, Lebanon, Oman, Saudi Arabia, Syrian Arab Republic, Bahrain, United Kingdom, United States, Iraq, Turkey, Canada, Australia, Albania, Andorra, Austria, Belarus, Belgium, Bosnia and Herzegovina, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco, Netherlands, Norway, Poland, Portugal, Romania, San Marino, Slovakia, Slovenia, Spain, Sweden, Switzerland, Ukraine, Afghanistan, Armenia, Azerbaijan, Bangladesh, Bhutan, Cambodia, China, Georgia, India, Indonesia, Japan, Kazakhstan, Kyrgyzstan, Malaysia, Maldives, Mongolia, Myanmar, Nepal, Pakistan, Philippines, Singapore, South Korea, Sri Lanka, Taiwan, Tajikistan, Thailand, Timor-Leste, Turkmenistan, Uzbekistan, Vietnam, Morocco, Tunisia, Algeria, default */
/***/ (function(module) {


/***/ }),

/***/ "./resources/js/data/mobilecode.js":
/*!*****************************************!*\
  !*** ./resources/js/data/mobilecode.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (["+1", "+20", "+212", "+213", "+216", "+30", "+31", "+32", "+33", "+34", "+351", "+352", "+353", "+354", "+355", "+356", "+357", "+358", "+359", "+36", "+370", "+371", "+372", "+374", "+375", "+376", "+377", "+378", "+380", "+385", "+386", "+387", "+39", "+40", "+41", "+420", "+421", "+423", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+60", "+61", "+62", "+63", "+65", "+66", "+670", "+76", "+81", "+855", "+86", "+880", "+886", "+90", "+91", "+92", "+93", "+94", "+95", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+968", "+971", "+973", "+975", "+976", "+977", "+992", "+993", "+994", "+995", "+996", "+998"]);

/***/ })

}]);