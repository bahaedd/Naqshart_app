(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagecomponents_ShopHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagecomponents/ShopHeader */ "./resources/js/components/pagecomponents/ShopHeader.vue");
/* harmony import */ var _pagecomponents_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pagecomponents/Slider */ "./resources/js/components/pagecomponents/Slider.vue");
//
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
  components: {
    shopHeader: _pagecomponents_ShopHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    appslider: _pagecomponents_Slider__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mounted: function mounted() {
    $(".modal-mask").css("display", "block");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Review.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/Review.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      review: false,
      form: {
        rate: 0,
        title: null,
        email: null,
        name: null,
        body: null,
        like_counter: 0,
        dislike_counter: 0
      },
      count: 0,
      meta: 0,
      reviews: [],
      current_page: 0,
      count2: 0,
      reviewscount: '',
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }],
      valid: false
    };
  },
  methods: {
    send: function send() {
      var _this = this;

      axios.post('/reviews-api', this.form).then(function (res) {
        _this.review = false;

        _this.reviews.unshift(res.data.review);

        _this.form.rate = 0;
        _this.form.name = "";
        _this.form.email = "";
        _this.form.title = "";
        _this.form.body = "";
        _this.count2 = parseInt($("#reviewscount")[0].innerText);
        $("#reviewscount")[0].innerText = ++_this.count2;
      })["catch"](function (error) {
        return _this.errors = error.response.data.errors;
      });
    },
    changePage: function changePage(page) {
      var _this2 = this;

      axios.get("/api/review?page=".concat(page)).then(function (response) {
        _this2.reviews = response.data.data;
        _this2.meta = response.data.last_page;
        _this2.current_page = response.data.current_page;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    like: function like(id, event) {
      var _this3 = this;

      axios.post('/like?id=' + id).then(function (res) {
        $('#' + id)[0].innerText = res.data.review.like_counter;
        event.target.style.color = "blue";
      })["catch"](function (error) {
        return _this3.errors = error.response.data.errors;
      });
    },
    dislike: function dislike(id, event) {
      var _this4 = this;

      axios.post('/dislike?id=' + id).then(function (res) {
        $('#' + id + 'd')[0].innerText = res.data.review.dislike_counter;
        event.target.style.color = "red";
      })["catch"](function (error) {
        return _this4.errors = error.response.data.errors;
      });
    }
  },
  created: function created() {
    var _this5 = this;

    axios.get("/api/review").then(function (response) {
      _this5.reviews = response.data.data;
      _this5.meta = response.data.last_page;
      _this5.current_page = response.data.current_page;
      _this5.reviewscount = response.data.total;
    })["catch"](function (error) {
      return console.log(error.response.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagecomponents_ShopVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagecomponents/ShopVideo */ "./resources/js/components/pagecomponents/ShopVideo.vue");
/* harmony import */ var _pagecomponents_Review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pagecomponents/Review */ "./resources/js/components/pagecomponents/Review.vue");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    appvideo: _pagecomponents_ShopVideo__WEBPACK_IMPORTED_MODULE_0__["default"],
    review: _pagecomponents_Review__WEBPACK_IMPORTED_MODULE_1__["default"],
    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["Swiper"],
    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"]
  },
  directives: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["directive"]
  },
  data: function data() {
    return {
      palettes: [],
      minPalettes: [],
      artists: [],
      palettesArtists: [],
      show: false,
      size: false,
      details: false,
      shipping: false,
      id: '',
      minPalette_id: '',
      first: null,
      firstpalettesArtists: null,
      firstminPalettes: null,
      minPalettesActive: {},
      active_el: 2,
      priceTarget: '',
      avilableTarget: '',
      sizeTarget: 'medium',
      button: false,
      artistID: '',
      sizeCm: "",
      artist_text: '',
      artist_active: ''
    };
  },
  mounted: function mounted() {
    var swiper = new vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_3__["Swiper"]('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 1
        },
        // when window width is >= 640px
        991: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      },
      observer: true,
      observerParents: true
    }); // swiper.update();
  },
  created: function created() {
    var _this = this;

    if (this.$route.query.mydata) {
      axios.get('/api/palettes').then(function (response) {
        _this.artists = response.data.artists;
        _this.artist_text = response.data.artists[0].Plates_description;
        _this.first = response.data.artists[0].id;
        axios.get("/api/view?id=" + _this.first).then(function (response) {
          _this.palettes = response.data.palettes;
          _this.minPalettesActive = response.data.palettes[0], _this.palettesArtists = response.data.palettesArtists;
        })["catch"](function (error) {
          return console.log(error.response.data);
        });
      })["catch"](function (error) {
        return console.log(error.response.data);
      }); //this.addActive(this.$route.query.mydata)

      axios.get("/api/viewMinPalettes?id=" + this.$route.query.mydata).then(function (response) {
        _this.minPalettes = response.data.minPalettes;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
      axios.get("/api/artist?id=" + this.$route.query.mydata).then(function (response) {
        _this.artist_active = response.data.artist[0].id;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    } else {
      axios.get('/api/palettes').then(function (response) {
        _this.artists = response.data.artists;
        _this.first = response.data.artists[0].id;
        _this.artist_active = _this.first;
        _this.artist_text = response.data.artists[0].Plates_description;
        axios.get("/api/view?id=" + _this.first).then(function (response) {
          _this.palettes = response.data.palettes;
          _this.minPalettesActive = response.data.palettes[0], _this.palettesArtists = response.data.palettesArtists;
          _this.firstpalettesArtists = response.data.palettesArtists[0].id;
          axios.get("/api/viewMinPalettes?id=" + _this.firstpalettesArtists).then(function (response) {
            _this.minPalettes = response.data.minPalettes;
          })["catch"](function (error) {
            return console.log(error.response.data);
          });
        })["catch"](function (error) {
          return console.log(error.response.data);
        });
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    }
  },
  computed: {
    cart: function cart() {
      return this.products.filter(function (product) {
        return product.quantity > 0;
      });
    },
    totalQuantity: function totalQuantity() {
      return this.products.reduce(function (total, product) {
        return total + product.quantity;
      }, 0);
    } // swiper(){
    //     return this.$refs.mySwiper.$swiper
    // }

  },
  methods: {
    addToCart: function addToCart(product) {
      this.$store.dispatch('addProductToCart', {
        product: product,
        quantity: 1
      });
    },
    updateCart: function updateCart(product, updateType) {
      for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          if (updateType === 'subtract') {
            if (this.products[i].quantity !== 0) {
              this.products[i].quantity--;
            }
          } else {
            this.products[i].quantity++;
          }

          break;
        }
      }
    },
    getdata: function getdata($id) {
      var _this2 = this;

      // let id = 0;
      if (this.artists[$id]) {
        $id = this.artists[$id].id;
      } else if ($id > this.artists.length - 1) {
        $id = this.artists[0].id;
      } else {
        $id = this.artists[this.artists.length - 1].id;
      }

      axios.get("/api/view?id=" + $id).then(function (response) {
        _this2.palettes = response.data.palettes;
        _this2.artist_text = response.data.artist[0];
        _this2.minPalettesActive = response.data.palettes[0];

        if (_this2.minPalettesActive == null) {
          _this2.minPalettesActive = '';
        }

        if (response.data.palettesArtists.length > 0) {
          _this2.firstminPalettes = response.data.palettesArtists[0].id;
        } else {
          _this2.firstminPalettes = null;
        }

        axios.get("/api/viewMinPalettes?id=" + _this2.firstminPalettes).then(function (response) {
          _this2.minPalettes = response.data.minPalettes;
        })["catch"](function (error) {
          return console.log(error.response.data);
        });
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    small: function small(el, price, avilable, cardId) {
      this.sizeTarget = "small";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "30x40cm (12x16)"; //  $(".details .details_img").css({
      //      transform:"scale(1)"
      //  })
      // $(".details .content").css({marginTop:"27px"})

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".details.active .details_img").css({
        transform: "scale(.7)"
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".details.active .content").css({
        marginTop: "-27px"
      });
    },
    medium: function medium(el, price, avilable, cardId) {
      this.sizeTarget = "medium";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "50x66.5cm (20x26)"; //  $(".details .details_img").css({
      //      transform:"scale(1)"
      //  })
      // $(".details .content").css({marginTop:"27px"})
      // $(".details.active .details_img").css({
      //     transform:"scale(.8)"
      // })
      // $(".details.active .content").css({marginTop:"-17px"})
    },
    larg: function larg(el, price, avilable, cardId) {
      this.sizeTarget = "large";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "70x93.5cm (28x37)";
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".details.active .details_img").css({
        transform: "scale(1)"
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".details.active .content").css({
        marginTop: "27px"
      });
    },
    addActive: function addActive($minPalette_id, index) {
      var _this3 = this;

      // console.log(  this.$refs.myActive)
      var myActive = this.$refs.myActive[index];
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(myActive).addClass('active').siblings().removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".details").on("click", function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).addClass('active').siblings().removeClass('active');
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()("html,body").animate({
        scrollTop: "450px"
      }, 500);
      axios.get("/api/viewMinPalettes?id=" + $minPalette_id).then(function (response) {
        _this3.minPalettes = response.data.minPalettes;
        _this3.minPalettesActive = response.data.palettes[0];
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    addtocart: function addtocart($id, price, avilableTarget, sizeTarget, sizeCm) {
      var _this4 = this;

      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".modal-mask").css("left", 0);
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".modal-cart-footer").addClass("animation", "i 1s ");
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".modal-mask").css("backgroundColor", "rgba(0,0,0,.5)");
      }, 800);
      axios.post('/api/addtocart?id=' + $id).then(function (res) {
        // console.log(res.data.paletteCart)
        // $('#count')[0].innerText++
        var product = res.data.paletteCart;

        if (sizeTarget == 'large') {
          if (_this4.minPalettesActive.L_avalible <= 0) {
            _this4.minPalettesActive.L_avalible = 0;
            return;
          }

          --_this4.minPalettesActive.L_avalible;
        } else if (sizeTarget == 'small') {
          if (_this4.minPalettesActive.S_avalible <= 0) {
            _this4.minPalettesActive.S_avalible = 0;
            return;
          }

          --_this4.minPalettesActive.S_avalible;
        } else {
          if (_this4.minPalettesActive.M_avalible <= 0) {
            _this4.minPalettesActive.M_avalible = 0;
            return;
          }

          --_this4.minPalettesActive.M_avalible;
        }

        _this4.$store.dispatch('addProductToCart', {
          product: product,
          quantity: 1,
          price: price,
          avilableTarget: avilableTarget,
          sizeTarget: sizeTarget,
          sizeCm: sizeCm
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    } //lklk

  },
  //method
  watch: {
    $route: function $route(to, from) {
      var _this5 = this;

      this.addActive(this.$route.query.mydata);
      axios.get("/api/viewMinPalettes?id=" + this.$route.query.mydata).then(function (response) {
        _this5.minPalettes = response.data.minPalettes; // console.log(this.$route.query.mydata );
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
      axios.get("/api/artist?id=" + this.$route.query.mydata).then(function (response) {
        _this5.artist_active = response.data.artist[0].id;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    }
  }
});

/***/ }),

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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.userimg[data-v-e402f0b2]{\n        position: relative;\n        display: inline-block;\n        text-align: center;\n        width: 53px;\n        height: 53px;\n        top: 7px;\n}\n.userimg2[data-v-e402f0b2]{\n        position: relative;\n        display: inline-block;\n        text-align: center;\n        width: 53px;\n        height: 53px;\n        border-radius: 50%;\n        background-color: black;\n        color: #fff;\n        margin-left: 13px;\n}\n.userimg span[data-v-e402f0b2]{\n        position:absolute;\n        top:30%;\n        left: 23px;\n}\n.v-card>.userimg[data-v-e402f0b2] {\n    border-top-left-radius: none !important;\n    border-top-right-radius: none !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.carousel-item .header[data-v-266b1872]{\n        width: 100%;\n        height: 640px;\n}\n.header_sm[data-v-266b1872]{\n        background-image: url('https://cdn.shopify.com/s/files/1/3000/4362/files/turrell_mobile_final_post_3_2048x.jpg?v=1565189502');\n        background-size: cover;\n        height: 300px;\n        background-position: center;\n        position: relative;\n        display: none;\n}\n@media(max-width:991px){\n.header_sm[data-v-266b1872]{\n            display: none;\n}\n}\n.wrapper[data-v-266b1872]{\n        position: absolute;\n        top: -3%;\n        transform: translate(-50%, 0);\n        left: 51%;\n        width: 100%;\n}\n.details[data-v-266b1872]{\n    color: #fff;\n    cursor: pointer;\n    transition: all 1s;\n}\n.details img[data-v-266b1872]{\n          width: 83%;\n    transition: all 1s;\n    height: 400px;\n    /* box-shadow: 5px 5px 5px black; */\n    border-top: 8px solid #111;\n    border-bottom: 8px solid #111;\n}\n/*\n    @media(max-width: 560px){\n        .details{\n            width: 40%;\n            font-size: 14px;\n        }\n        .details img{\n            width: 100%;\n            height: 200px;\n        }\n        .wrapper .details .content{\n            width: 100%;\n            margin: 16px auto 0;\n\n        }\n        .carousel-item .header{\n            height: 860px;\n        }\n\n    } */\n    /* @media(min-width: 561px) and (max-width:767px){\n        .details{\n            width: 40% ;\n            font-size: 14px;\n        }\n        .carousel-item .header{\n            height: 855px;\n        }\n        .details img{\n            width: 80%;\n            height: 200px;\n        }\n        .wrapper .details .content{\n            width: 80%;\n\n\n        }\n    } */\n    /* @media(min-width: 768px) and (max-width:991px){\n        .details{\n            width: 33% ;\n            font-size: 14px;\n        }\n\n        .details img{\n            width: 80%;\n            height: 250px;\n        }\n        .wrapper .details .content{\n            width: 80%;\n\n\n        }\n        .wrapper{\n            top: -1%;\n            width: 90%;\n            left: 52%;\n\n        }\n    } */\n.wrapper .row[data-v-266b1872]{\n         transform: scale(.5);\n}\n.wrapper .details .content[data-v-266b1872]{\n        position: relative;\n        font-size: 14px;\n        width: 83%;\n        margin-top: 34px;\n        /* margin: 16px auto 0; */\n        padding: 6px 5px;\n        transition: all .5s;\n        color:white;\n        border-radius: 10px;\n          background: rgba(0,0,0,0.75);\n        background-repeat: no-repeat;\n        background-position: 50%;\n        background-size: 100%;\n        z-index: 2;\n        top: 10px;\n        padding: 0 20px;\n        border: 4px solid rgba(0,0,0,-7.25);\n}\n        /* @media(max-width: 991px){\n        .wrapper .details .content{\n            width:33%;\n        }\n    } */\n.wrapper .details .content .triangle[data-v-266b1872]{\n   position: relative;\n    z-index: 1;\n    /* padding: 10px; */\n    display: inline-block;\n    top: -29px;\n    left: 50%;\n    background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);\n    transform: rotate(0) scale(2.3) translate(-16%, 19%);\n    /* background: rgba(0,0,0,0.9); */\n    width: 22px;\n    height: 10px;\n}\n\n    /* .details.active .triangle{\n            top: -26.1px;\n\n    } */\n    /* .wrapper .details .content:hover{\n        border: 2px solid #00a4ee;\n    } */\n\n    /* .details-content{\n        margin:20px;\n    } */\n.details[data-v-266b1872]:hover {\n        transform: scale(1.1);\n}\n.add-cart[data-v-266b1872] {\n        padding-left:50px ;\n}\n.add-cart div span[data-v-266b1872]{\n        font-size: 15px;\n        font-weight: 400;\n        line-height: 22px;\n        display: inline-block;\n        margin-right: 5px;\n        padding: 0 10px;\n        text-transform: lowercase;\n        color: #fff;\n        border-radius: 999px;\n        background-color: #000;\n}\n.add-cart p[data-v-266b1872]{\n        font-size: 20px;\n}\n.add-cart .add-button[data-v-266b1872]{\n        font-size: 20px;\n        font-weight: 700;\n        line-height: 70px;\n        display: block;\n        width: 100%;\n        margin-bottom: 40px;\n        cursor: pointer;\n        text-align: center;\n        text-decoration: none;\n        color: #fff;\n        border: none;\n        background-color: #000;\n}\n.add-cart .more[data-v-266b1872]{\n        outline: none;\n}\n.list-group .list-group-item[data-v-266b1872]{\n        cursor: pointer;\n        border-left: none;\n        border-right: none;\n        padding-left: 10px;\n        padding-right: 10px;\n}\n.list-group[data-v-266b1872] {\n\n        padding-left: 0;\n}\n/*\n    .carousel-control-prev{\n        left: -50%;\n    } */\n.carousel-indicators li[data-v-266b1872] {\n    box-sizing: content-box;\n    flex: 0 1 auto;\n    width: 67px;\n    height: 29px;\n    margin-right: 14px;\n    margin-left: 0;\n    text-indent: 0;\n    cursor: pointer;\n    color: black;\n    background: none;\n}\n.carousel-indicators[data-v-266b1872]{\n    bottom: -9%;\n    width: 100%;\n    background-color: #f5f0ed;\n    margin-left: 0;\n    margin-right: 0;\n}\n@media(max-width: 991px){\n.carousel-indicators[data-v-266b1872]{\n        bottom: -8%\n}\n}\n.carousel-indicators .active[data-v-266b1872]{\n    border-bottom: 3px solid #00aeef;\n}\n.small[data-v-266b1872], .medium[data-v-266b1872], .larg[data-v-266b1872]{\n    padding: 30px !important;\n    margin-right: 20px !important;\n    font-size: 20px ;\n}\n.details.active .content[data-v-266b1872] {\n    border: 4px solid #00a4ee;\n}\n.details.active .triangle[data-v-266b1872] {\n      background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon-active.png) !important;\n}\n.active_btn[data-v-266b1872]{\n    border: 2px solid #00a4ee;\n}\n.content h6[data-v-266b1872],.content  span[data-v-266b1872]{\nfont-size: 2rem;\n}\n.price[data-v-266b1872]{\n   font-size: 1.6rem!important ;\n}\n.infor[data-v-266b1872]{\ntop: -12px;\nleft: -20px;\nposition: relative;\ntransform: scale(.7);\n}\n\n/* Start Responsive */\n@media (max-width: 1264px){\n.wrapper .row[data-v-266b1872]{\n        position: absolute;\n        /* top: -230px; */\n\n        left: 51px;\n    transform: scale(0.4);\n}\n.details-content[data-v-266b1872]{\n    /* margin: 10px 30px ; */\n}\n}\n@media (max-width: 960px){\n.wrapper .row[data-v-266b1872]{\n        transform: scale(.4);\n}\n.details-content[data-v-266b1872]{\n    /* margin: 10px 50px ; */\n}\n.infor[data-v-266b1872][data-v-266b1872] {\n    left: 8px;\n    position: relative;\n    transform: scale(.9);\n}\n.wrapper .details img[data-v-266b1872]{\n    width: 100%;\n}\n.wrapper .details .content[data-v-266b1872]{\n    width: 100%;\n}\n}\n@media (max-width: 880px){\n.wrapper .row[data-v-266b1872]{\n        transform: scale(.4) ;\n        display: flex;\n        justify-content: space-evenly!important;\n}\n.details-content[data-v-266b1872]{\n    /* margin: 10px 50px ; */\n    margin-right: -18px;\n}\n.infor[data-v-266b1872][data-v-266b1872] {\n    left: 8px;\n    position: relative;\n    transform: scale(.9);\n}\n.wrapper .details[data-v-266b1872]{\n    width: 300px !important;\n}\n.wrapper .details img[data-v-266b1872]{\n    width:93%;\n}\n.wrapper .details .content[data-v-266b1872]{\n    width: 93%;\n}\n}\n.navigate2[data-v-266b1872] {\n    margin: 30px 0;\n    text-align: center;\n}\n.navigate2 svg[data-v-266b1872]{\n    -webkit-animation: e-data-v-266b1872 2s infinite;\n            animation: e-data-v-266b1872 2s infinite;\n    width: 28px;\n}\n@-webkit-keyframes e-data-v-266b1872{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}\n@keyframes e-data-v-266b1872{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-10px)}60%{transform:translateY(-5px)}}\n.parent[data-v-266b1872]{\n    position: absolute;\n    top: 400px;\n    left: 50%;\n    transform: translate(-50%,0);\n}\n.parent img[data-v-266b1872]{\n  width: 170px;\n}\n.agile_swap[data-v-266b1872] {\n    /* position: absolute; */\n    /* top: 100px; */\n    /* left: 50%;\n    transform: translate(50%,0); */\n    position: absolute;\n    text-align: center;\n    /* top:2%; */\n    /* transform: scale(.9); */\n}\n.agile_swap  img[data-v-266b1872]{\n    width: 37%;\n    margin-top: 30px;\n    border-top: 6px solid #111;\n    border-bottom: 6px solid #111;\n}\n/*\n.pallete-swiper .swiper-pagination{\n    display: none;\n}\n.agile_swap  .agile_slide {\n    width: 77% !important;\n\n} */\n.swiper-wrapper[data-v-266b1872]{\n    /* left: 44px; */\n}\n.agile_swap  .content[data-v-266b1872]{\n position: relative;\n        font-size: 14px;\n        width:  68%;\n        margin-top: 34px;\n        /* margin: 16px auto 0; */\n        padding: 6px 5px;\n        transition: all .5s;\n        color:white;\n        border-radius: 10px;\n        background: rgba(0,0,0,0.75);\n        top: 10px;\n        padding: 0 20px;\n        border: 4px solid rgba(0,0,0,-7.25);\n        left:50%;\n        transform: translate(-50%,-50%) scale(.5);\n}\n.agile_swap  .content .triangle[data-v-266b1872]{\n    position: relative;\n    z-index: 1;\n    /* padding: 10px; */\n    display: inline-block;\n    top: -29px;\n    left: 50%;\n    background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);\n    transform: rotate(0) scale(2.3) translate(-316%, 18%);\n    /* background: rgba(0,0,0,0.9); */\n    width: 22px;\n    height: 10px;\n}\n@media (max-width: 414px){\n/* \n.agile_swap  img{\n\n\n    margin-top: 80px;\n\n} */\n.agile_swap  .content[data-v-266b1872]{\n position: relative;\n        font-size: 14px;\n        width:  68%;\n        margin-top: 34px;\n        /* margin: 16px auto 0; */\n        padding: 6px 5px;\n        transition: all .5s;\n        color:white;\n        border-radius: 10px;\n        background: rgba(0,0,0,0.75);\n        top: 20px;\n        padding: 0 20px;\n        border: 4px solid rgba(0,0,0,-7.25);\n        left:50%;\n        transform: translate(-50%,-50%) scale(.5);\n}\n.agile_swap  .content .triangle[data-v-266b1872]{\n\n    left: 70%;\n}\n\n/* .agile_swap  .agile_slide {\n         width: 70% !important;\n         margin-right:0px  !important;\n\n} */\n}\n.rotate[data-v-266b1872]{\n width: 100%;\n    position: relative;\n    height: 82px;\n    transform: rotate(49deg);\n    background: black;\n}\n.carousel-indicators li[data-v-266b1872]{\n    width: auto;\n    padding: 0 10px;\n}\n.custom-padding[data-v-266b1872]:nth-child(odd){\n    padding-right: 5px !important;\n     padding-left: 20px !important;\n    padding-bottom: .3px !important;\n}\n.custom-padding[data-v-266b1872]:nth-child(even){\n    padding-right: 20px;\n    padding-left: 5px!important;\n    padding-bottom: .3px;\n}\n@media(max-width: 767px){\n.custom-padding[data-v-266b1872]:nth-child(odd){\n    padding-right: 11px !important;\n    padding-left: 11px !important;\n    padding-bottom: .3px !important;\n}\n.custom-padding[data-v-266b1872]:nth-child(even){\n    padding-right: 11px;\n    padding-left: 11px!important;\n    padding-bottom: .3px;\n}\n.add-cart[data-v-266b1872][data-v-266b1872] {\n        padding-left: 6px;\n}\n}\n.swiper-container[data-v-266b1872]{\n    margin-bottom: 50px;\n}\n.agile_swap[data-v-266b1872]{\n    position: absolute;\n    top: 1%;\n    left: 16%;\n    width: 100%;\n}\n.agile_swap img[data-v-266b1872]{\n    height: 240px;\n}\n.agile_swap .agile_slide[data-v-266b1872]{\n    position: relative;\n    left: -11%;\n}\n", ""]);

// exports


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
exports.push([module.i, "\n.product-detail-text[data-v-55149226]{\n    margin: auto;\n    text-align: center;\n}\n.product-detail-text .title[data-v-55149226]{\n    font-size: 40px;\n    margin: 0 0 20px;\n    font-weight: bold;\n}\n.product-detail-text .text[data-v-55149226]{\n    font-size: 22px;\n    margin: 0;\n}\nvideo[data-v-55149226]{\n    display: block !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [_vm._m(0), _vm._v(" "), _c("shopHeader"), _vm._v(" "), _c("appslider")],
    1
  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Review.vue?vue&type=template&id=e402f0b2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/Review.vue?vue&type=template&id=e402f0b2&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "container mt-5", staticStyle: { "max-width": "1462px" } },
    [
      _vm.$i18n.locale == "en"
        ? _c("h2", [_vm._v(_vm._s(_vm.$t("message.customerreviews")))])
        : _c("h2", { staticStyle: { float: "right" } }, [
            _vm._v(_vm._s(_vm.$t("message.customerreviews")))
          ]),
      _vm._v(" "),
      _c("div", { staticStyle: { clear: "both" } }),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.$i18n.locale == "en"
        ? _c(
            "div",
            { staticClass: "rating" },
            [
              _vm._l(5, function(i) {
                return _c("span", {
                  key: i.id,
                  staticClass: "fa fa-star text-warning"
                })
              }),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "ml-2", attrs: { id: "reviewscount" } },
                [
                  _vm._v(
                    _vm._s(_vm.reviewscount) +
                      " " +
                      _vm._s(_vm.$t("message.review"))
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticStyle: {
                    "background-color": "black",
                    color: "#fff",
                    float: "right"
                  },
                  on: {
                    click: function($event) {
                      _vm.review = !_vm.review
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-edit mr-2" }),
                  _vm._v(_vm._s(_vm.$t("message.writereview")))
                ]
              ),
              _vm._v(" "),
              _c("div", { staticStyle: { clear: "both" } })
            ],
            2
          )
        : _c(
            "div",
            { staticClass: "rating" },
            [
              _c(
                "v-btn",
                {
                  staticStyle: { "background-color": "black", color: "#fff" },
                  on: {
                    click: function($event) {
                      _vm.review = !_vm.review
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-edit mr-2" }),
                  _vm._v(_vm._s(_vm.$t("message.writereview")))
                ]
              ),
              _vm._v(" "),
              _vm._l(5, function(i) {
                return _c("span", {
                  key: i.id,
                  staticClass: "fa fa-star text-warning",
                  staticStyle: { float: "right" }
                })
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "mr-2",
                  staticStyle: { float: "right" },
                  attrs: { id: "reviewscount" }
                },
                [
                  _vm._v(
                    _vm._s(_vm.reviewscount) +
                      " " +
                      _vm._s(_vm.$t("message.review"))
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticStyle: { clear: "both" } })
            ],
            2
          ),
      _vm._v(" "),
      _c("hr"),
      _vm._v(" "),
      _vm.review
        ? _c(
            "div",
            [
              _vm.$i18n.locale == "en"
                ? _c(
                    "h6",
                    { staticClass: "mb-4", staticStyle: { color: "#b2b8bd" } },
                    [_vm._v(_vm._s(_vm.$t("message.writereview")))]
                  )
                : _c(
                    "h6",
                    {
                      staticClass: "mb-4",
                      staticStyle: { color: "#b2b8bd", float: "right" }
                    },
                    [_vm._v(_vm._s(_vm.$t("message.writereview")))]
                  ),
              _vm._v(" "),
              _c("div", { staticStyle: { clear: "both" } }),
              _vm._v(" "),
              _vm.$i18n.locale == "en"
                ? _c("h6", { staticClass: "mb-4" }, [
                    _vm._v(_vm._s(_vm.$t("message.score")))
                  ])
                : _c(
                    "h6",
                    { staticClass: "mb-4", staticStyle: { float: "right" } },
                    [_vm._v(_vm._s(_vm.$t("message.score")))]
                  ),
              _vm._v(" "),
              _c("div", { staticStyle: { clear: "both" } }),
              _vm._v(" "),
              _vm.$i18n.locale == "en"
                ? _c("v-rating", {
                    attrs: { color: "orange", medium: "" },
                    model: {
                      value: _vm.form.rate,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "rate", $$v)
                      },
                      expression: "form.rate"
                    }
                  })
                : _c("v-rating", {
                    staticStyle: { float: "right" },
                    attrs: { dir: "rtl", color: "orange", medium: "" },
                    model: {
                      value: _vm.form.rate,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "rate", $$v)
                      },
                      expression: "form.rate"
                    }
                  }),
              _vm._v(" "),
              _c("div", { staticStyle: { clear: "both" } }),
              _vm._v(" "),
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
                      },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Title", required: "" },
                                model: {
                                  value: _vm.form.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "title", $$v)
                                  },
                                  expression: "form.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  required: "",
                                  label: "Review"
                                },
                                model: {
                                  value: _vm.form.body,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "body", $$v)
                                  },
                                  expression: "form.body"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "Use Your Name", required: "" },
                                model: {
                                  value: _vm.form.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "name", $$v)
                                  },
                                  expression: "form.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "E-mail",
                                  required: "",
                                  rules: _vm.emailRules
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
                                }
                              })
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
                          staticStyle: {
                            "margin-left": "12px",
                            "margin-bottom": "10px"
                          },
                          attrs: { color: "#f2efeb", type: "submit" }
                        },
                        [_vm._v("Post")]
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
                      },
                      model: {
                        value: _vm.valid,
                        callback: function($$v) {
                          _vm.valid = $$v
                        },
                        expression: "valid"
                      }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", sm: "12" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "العنوان",
                                  required: "",
                                  dir: "rtl"
                                },
                                model: {
                                  value: _vm.form.title,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "title", $$v)
                                  },
                                  expression: "form.title"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  outlined: "",
                                  required: "",
                                  dir: "rtl",
                                  label: "أكتب رأيك"
                                },
                                model: {
                                  value: _vm.form.body,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "body", $$v)
                                  },
                                  expression: "form.body"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "أستخدم أسمك",
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
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", md: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "اﻷيميل",
                                  required: "",
                                  dir: "rtl",
                                  rules: _vm.emailRules
                                },
                                model: {
                                  value: _vm.form.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "email", $$v)
                                  },
                                  expression: "form.email"
                                }
                              })
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
                          staticStyle: {
                            "margin-left": "12px",
                            float: "right",
                            "margin-bottom": "10px"
                          },
                          attrs: { color: "#f2efeb", type: "submit" }
                        },
                        [_vm._v("إرسال")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticStyle: { clear: "both" } })
                    ],
                    1
                  )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.reviews, function(review, index) {
        return _c(
          "v-card",
          { key: index, staticClass: "card my-5" },
          [
            _c("div", { staticClass: "userimg" }, [
              _c("div", { staticClass: "userimg2" }, [
                _c("span", [
                  _vm._v(_vm._s(review.name.charAt(0).toUpperCase()))
                ])
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { width: "95%", display: "inline-block" } },
              [
                _c("v-card-subtitle", { staticClass: "pb-0" }, [
                  _vm._v(_vm._s(review.name) + " "),
                  _c("span", { staticStyle: { float: "right" } }, [
                    _vm._v(_vm._s(review.created_at))
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { clear: "both" } }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "ml-2" },
                  _vm._l(review.rate, function(i) {
                    return _c("span", {
                      key: i,
                      staticClass: "fa fa-star text-warning ml-1"
                    })
                  }),
                  0
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("v-card-text", { staticClass: "text--primary" }, [
              _c(
                "h5",
                { staticStyle: { "font-weight": "bold", color: "#000" } },
                [_vm._v(_vm._s(review.title))]
              ),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n                " + _vm._s(review.body) + "\n            "
                )
              ])
            ]),
            _vm._v(" "),
            _c("v-card-actions", { staticStyle: { display: "block" } })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center" },
        [
          _c("v-pagination", {
            attrs: { length: _vm.meta, circle: "" },
            on: { input: _vm.changePage },
            model: {
              value: _vm.current_page,
              callback: function($$v) {
                _vm.current_page = $$v
              },
              expression: "current_page"
            }
          })
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "section",
    [
      _c(
        "div",
        {
          staticClass: "carousel slide ",
          attrs: { id: "carouselExampleCaptions", "data-interval": "false" }
        },
        [
          _c(
            "ol",
            { staticClass: "carousel-indicators text-center" },
            _vm._l(_vm.artists, function(artist, index) {
              return _c(
                "li",
                {
                  key: artist.id,
                  class: { active: artist.id == _vm.artist_active },
                  attrs: {
                    "data-target": "#carouselExampleCaptions",
                    "data-slide-to": index
                  },
                  on: {
                    click: function($event) {
                      return _vm.getdata(index)
                    }
                  }
                },
                [_vm._v(_vm._s(artist.name))]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "carousel-inner " },
            _vm._l(_vm.artists, function(artist, index) {
              return _c(
                "div",
                {
                  key: artist.id,
                  staticClass: "carousel-item",
                  class: { active: artist.id === _vm.artist_active }
                },
                [
                  _c("img", {
                    staticClass: "header",
                    attrs: { src: artist.cover_img, alt: "..." }
                  }),
                  _vm._v(" "),
                  _c(
                    "swiper",
                    { staticClass: "agile_swap d-sm-none" },
                    _vm._l(artist.artist_palettes, function(
                      palettesArtist,
                      index
                    ) {
                      return _c(
                        "swiper-slide",
                        {
                          key: palettesArtist.id,
                          ref: "myActive",
                          refInFor: true,
                          staticClass: "details agile_slide",
                          nativeOn: {
                            click: function($event) {
                              return _vm.addActive(palettesArtist.id, index)
                            }
                          }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src: palettesArtist.artist_min_palettes.img,
                              alt: "..."
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "content",
                              class: { active: index == 0 }
                            },
                            [
                              _c("div", { staticClass: "triangle" }),
                              _vm._v(" "),
                              _c("h6", [
                                _c("span", { staticClass: "px-3" }, [
                                  _vm._v(_vm._s(palettesArtist.name) + " ")
                                ]),
                                _vm._v(" | "),
                                _c("span", { staticClass: "price px-3" }, [
                                  _vm._v("$" + _vm._s(palettesArtist.L_price))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "infor" }, [
                                _c("span", [
                                  _c("span", { staticClass: "text-success" }, [
                                    _vm._v(
                                      _vm._s(
                                        palettesArtist.L_avalible +
                                          palettesArtist.M_avalible +
                                          palettesArtist.S_avalible
                                      )
                                    )
                                  ]),
                                  _vm._v(
                                    "/" +
                                      _vm._s(
                                        palettesArtist.L_copies +
                                          palettesArtist.M_copies +
                                          palettesArtist.S_copies
                                      ) +
                                      "   " +
                                      _vm._s(_vm.$t("message.left"))
                                  )
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "wrapper d-none d-sm-block " }, [
                    _c(
                      "div",
                      {
                        staticClass: " row  d-flex justify-content-center",
                        staticStyle: { width: "100%" }
                      },
                      _vm._l(artist.artist_palettes, function(
                        palettesArtist,
                        index
                      ) {
                        return _c(
                          "div",
                          {
                            key: palettesArtist.id,
                            ref: "myActive",
                            refInFor: true,
                            staticClass: "details  col-lg-3  col-sm-4",
                            class: { active: index == 0 },
                            on: {
                              click: function($event) {
                                return _vm.addActive(palettesArtist.id, index)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "details-content" }, [
                              _c("img", {
                                staticClass: "details_img",
                                attrs: {
                                  src: palettesArtist.artist_min_palettes.img,
                                  alt: "..."
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "content",
                                  class: { active: index == 0 }
                                },
                                [
                                  _c("div", { staticClass: "triangle" }),
                                  _vm._v(" "),
                                  _c("h6", [
                                    _c("span", { staticClass: "px-1" }, [
                                      _vm._v(_vm._s(palettesArtist.name) + " ")
                                    ]),
                                    _vm._v(" | "),
                                    _c("span", { staticClass: "price px-1" }, [
                                      _vm._v(
                                        "$" + _vm._s(palettesArtist.M_price)
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  palettesArtist.M_avalible > 0
                                    ? _c("div", { staticClass: "infor" }, [
                                        _c("span", [
                                          _c(
                                            "span",
                                            { staticClass: "text-success" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  palettesArtist.M_avalible
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(
                                            "/" +
                                              _vm._s(palettesArtist.M_copies) +
                                              "   " +
                                              _vm._s(_vm.$t("message.left"))
                                          )
                                        ])
                                      ])
                                    : _c("div", { staticClass: "infor" }, [
                                        _c(
                                          "span",
                                          {
                                            staticStyle: {
                                              color: "red",
                                              "font-weight": "bolder"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(
                                                  _vm.$t("message.solidout")
                                                )
                                            )
                                          ]
                                        )
                                      ])
                                ]
                              )
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "parent d-sm-none" }, [
                    _vm._m(0, true),
                    _vm._v(" "),
                    _c("div", { staticClass: "navigate2 " }, [
                      _c(
                        "svg",
                        {
                          attrs: {
                            viewBox: "0 0 1792 1792",
                            xmlns: "http://www.w3.org/2000/svg"
                          }
                        },
                        [
                          _c("path", {
                            attrs: {
                              fill: "#fff",
                              d:
                                "M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                            }
                          })
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "carousel-control-next",
                      attrs: {
                        href: "#carouselExampleCaptions",
                        role: "button",
                        "data-slide": "next"
                      },
                      on: {
                        click: function($event) {
                          return _vm.getdata(index + 1)
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "carousel-control-next-icon",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "sr-only" }, [_vm._v("Next")])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "carousel-control-prev ",
                      attrs: {
                        href: "#carouselExampleCaptions",
                        role: "button",
                        "data-slide": "prev"
                      },
                      on: {
                        click: function($event) {
                          return _vm.getdata(index - 1)
                        }
                      }
                    },
                    [
                      _c("span", {
                        staticClass: "carousel-control-prev-icon",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Previous")
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "header_sm mb-2" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "container",
          staticStyle: { "max-width": "1260px!important" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "col-lg-8",
                staticStyle: { "margin-top": "70px" }
              },
              [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("div", { staticClass: "col-md-6 custom-padding " }, [
                      _c("img", {
                        staticClass: "w-100",
                        staticStyle: { height: "400px" },
                        attrs: { src: _vm.minPalettesActive.img, alt: "..." }
                      })
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.minPalettes, function(minPalette) {
                      return _c(
                        "div",
                        {
                          key: minPalette.id,
                          staticClass: "col-md-6 custom-padding "
                        },
                        [
                          _c("img", {
                            staticClass: "w-100",
                            staticStyle: { height: "400px" },
                            attrs: { src: minPalette.img, alt: "..." }
                          })
                        ]
                      )
                    })
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: " col-lg-4",
                staticStyle: { "margin-top": "78px" }
              },
              [
                _c("div", { staticClass: "add-cart" }, [
                  _c("h2", { staticClass: "font-weight-bold " }, [
                    _vm._v(
                      _vm._s(_vm.minPalettesActive.name) +
                        "\n                    "
                    ),
                    _vm.active_el == 1
                      ? _c("span", [
                          _vm._v("$" + _vm._s(_vm.minPalettesActive.S_price))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.active_el == 2
                      ? _c(
                          "span",
                          {
                            staticStyle: {
                              float: "right",
                              "font-weight": "normal"
                            }
                          },
                          [_vm._v("$" + _vm._s(_vm.minPalettesActive.M_price))]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.active_el == 3
                      ? _c("span", [
                          _vm._v("$" + _vm._s(_vm.minPalettesActive.L_price))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "mb-3 mt-2" }, [
                    _c("span", [_vm._v(_vm._s(_vm.minPalettesActive.tag))])
                  ]),
                  _vm._v(" "),
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _vm.minPalettesActive.M_avalible > 0
                        ? _c(
                            "button",
                            {
                              staticClass: "btn add-button addToCart ",
                              on: {
                                click: function($event) {
                                  return _vm.addtocart(
                                    _vm.minPalettesActive.id,
                                    _vm.minPalettesActive.M_price,
                                    _vm.avilableTarget,
                                    _vm.sizeTarget
                                  )
                                }
                              }
                            },
                            [
                              _vm.active_el == 2
                                ? _c(
                                    "span",
                                    { staticStyle: { "font-size": "23px" } },
                                    [
                                      _vm._v(
                                        "$" +
                                          _vm._s(_vm.minPalettesActive.M_price)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.$t("message.cart")) +
                                  "\n\n                            "
                              )
                            ]
                          )
                        : _c(
                            "v-btn",
                            {
                              staticClass: "mb-2 size_btn small ",
                              staticStyle: {
                                cursor: "not-allowed",
                                "background-color": "#737373",
                                color: "#fff",
                                border: "none",
                                "margin-bottom": "45px!important"
                              }
                            },
                            [
                              _vm._v(
                                "\n\n\n                            " +
                                  _vm._s(_vm.$t("message.solidout"))
                              )
                            ]
                          )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    [
                      _c("span", { staticClass: "font-weight-bold " }, [
                        _vm._v("This is the Classic")
                      ]),
                      _vm._v(
                        ", designed and manufactured by Ecstase,\n                        the Classic is made up of a wooden frame, a passe-partout,\n                        and non-reflective glass. Each of the artworks chosen for\n                        the Classic has been hand made or hand-retouched on art-grade paper,\n                        and is delivered already professionally framed to ensure\n                        the longevity of the artwork. You can install it as soon as\n                        "
                      ),
                      _c("transition", [
                        _vm.show
                          ? _c("span", [
                              _vm._v(
                                "\n                                it is delivered as the artwork comes ready to be hung on your wall.\n                                The classical design and releases in this series make it an elegant\n                                way to add a high-end touch to your space. Each artwork contains\n                                a signed certificate of authenticity that guarantees its originality.\n                                Curated by Ecstase in a collaboration with Seamless for a limited edition of 50.\n                                This psychedelic triple artwork capitalizes on brilliant negative space and amazing detail.\n                            "
                              )
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      !_vm.show
                        ? _c(
                            "a",
                            {
                              staticClass: "more text-primary btn btn-block",
                              on: {
                                click: function($event) {
                                  _vm.show = !_vm.show
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("message.readmore")))]
                          )
                        : _c(
                            "a",
                            {
                              staticClass: "more text-primary btn btn-block",
                              on: {
                                click: function($event) {
                                  _vm.show = !_vm.show
                                }
                              }
                            },
                            [_vm._v(_vm._s(_vm.$t("message.readless")))]
                          )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("ul", { staticClass: "list-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "list-group-item",
                        on: {
                          click: function($event) {
                            _vm.size = !_vm.size
                          }
                        }
                      },
                      [
                        _c("h4", { staticClass: "font-weight-bold " }, [
                          _vm._v(
                            "\n                               " +
                              _vm._s(_vm.$t("message.size")) +
                              "\n                                "
                          ),
                          !_vm.size
                            ? _c("i", {
                                staticClass: "fa fa-chevron-down",
                                staticStyle: { float: "right" }
                              })
                            : _c("i", {
                                staticClass: "fa fa-chevron-up",
                                staticStyle: { float: "right" }
                              })
                        ]),
                        _vm._v(" "),
                        _vm.size
                          ? _c("span", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.minPalettesActive.sizing_details) +
                                  " CM\n                            "
                              )
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "list-group-item",
                        on: {
                          click: function($event) {
                            _vm.details = !_vm.details
                          }
                        }
                      },
                      [
                        _c("h4", { staticClass: "font-weight-bold " }, [
                          _vm._v(
                            "\n\n                               " +
                              _vm._s(_vm.$t("message.productDetails")) +
                              "\n                                "
                          ),
                          !_vm.details
                            ? _c("i", {
                                staticClass: "fa fa-chevron-down",
                                staticStyle: { float: "right" }
                              })
                            : _c("i", {
                                staticClass: "fa fa-chevron-up",
                                staticStyle: { float: "right" }
                              })
                        ]),
                        _vm._v(" "),
                        _vm.details
                          ? _c("span", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.minPalettesActive.frame_material) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "list-group-item",
                        on: {
                          click: function($event) {
                            _vm.shipping = !_vm.shipping
                          }
                        }
                      },
                      [
                        _c("h4", { staticClass: "font-weight-bold " }, [
                          _vm._v(
                            "\n                                 " +
                              _vm._s(_vm.$t("message.shipping")) +
                              "\n                                "
                          ),
                          !_vm.shipping
                            ? _c("i", {
                                staticClass: "fa fa-chevron-down",
                                staticStyle: { float: "right" }
                              })
                            : _c("i", {
                                staticClass: "fa fa-chevron-up",
                                staticStyle: { float: "right" }
                              })
                        ]),
                        _vm._v(" "),
                        _vm.shipping
                          ? _c("span", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.minPalettesActive.frame_finish) +
                                  "\n                            "
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("appvideo"),
      _vm._v(" "),
      _c("review")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        attrs: {
          src:
            "https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/swipetothenext.png?v=14393615295324639232",
          alt: ""
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("div", { staticStyle: { clear: "both" } })])
  }
]
render._withStripped = true



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
      _c(
        "video",
        {
          attrs: {
            playsinline: "playsinline",
            autoplay: "autoplay",
            muted: "muted",
            loop: "loop"
          },
          domProps: { muted: true }
        },
        [
          _c("source", {
            attrs: {
              src:
                "https://cdn.shopify.com/s/files/1/3000/4362/files/24-1.mp4?v=1592991630",
              type: "video/mp4"
            }
          })
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("header", { staticClass: "mb-4 mt-5 mb-5" }, [
      _c("div", { staticClass: "overlay" }),
      _vm._v(" "),
      _c(
        "video",
        {
          attrs: {
            playsinline: "playsinline",
            autoplay: "autoplay",
            muted: "muted",
            loop: "loop"
          },
          domProps: { muted: true }
        },
        [
          _c("source", {
            attrs: {
              src:
                "https://cdn.shopify.com/s/files/1/3000/4362/files/11-2.mp4?v=1592991629",
              type: "video/mp4"
            }
          })
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
    return _c("div", { staticClass: "product-detail-text " }, [
      _c("h3", { staticClass: "title" }, [_vm._v("Limited Editions")]),
      _vm._v(" "),
      _c("p", { staticClass: "text" }, [
        _vm._v(
          "Each artwork is enhanced by hand, making each piece from the edition unique."
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Page/ShopArt.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Page/ShopArt.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopArt.vue?vue&type=template&id=01fea958& */ "./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958&");
/* harmony import */ var _ShopArt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopArt.vue?vue&type=script&lang=js& */ "./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShopArt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Page/ShopArt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopArt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/ShopArt.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopArt.vue?vue&type=template&id=01fea958& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Page/ShopArt.vue?vue&type=template&id=01fea958&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopArt_vue_vue_type_template_id_01fea958___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pagecomponents/Review.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/pagecomponents/Review.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Review_vue_vue_type_template_id_e402f0b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Review.vue?vue&type=template&id=e402f0b2&scoped=true& */ "./resources/js/components/pagecomponents/Review.vue?vue&type=template&id=e402f0b2&scoped=true&");
/* harmony import */ var _Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review.vue?vue&type=script&lang=js& */ "./resources/js/components/pagecomponents/Review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Review_vue_vue_type_style_index_0_id_e402f0b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css& */ "./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Review_vue_vue_type_template_id_e402f0b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Review_vue_vue_type_template_id_e402f0b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e402f0b2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pagecomponents/Review.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pagecomponents/Review.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/Review.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Review.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Review.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_e402f0b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Review.vue?vue&type=style&index=0&id=e402f0b2&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_e402f0b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_e402f0b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_e402f0b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_e402f0b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_style_index_0_id_e402f0b2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/Review.vue?vue&type=template&id=e402f0b2&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/Review.vue?vue&type=template&id=e402f0b2&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_e402f0b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Review.vue?vue&type=template&id=e402f0b2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/Review.vue?vue&type=template&id=e402f0b2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_e402f0b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Review_vue_vue_type_template_id_e402f0b2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopHeader.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopHeader.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShopHeader.vue?vue&type=template&id=266b1872&scoped=true& */ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true&");
/* harmony import */ var _ShopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& */ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ShopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "266b1872",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pagecomponents/ShopHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=style&index=0&id=266b1872&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ShopHeader.vue?vue&type=template&id=266b1872&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=template&id=266b1872&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_template_id_266b1872_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopVideo_vue_vue_type_style_index_0_id_55149226_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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



/***/ })

}]);