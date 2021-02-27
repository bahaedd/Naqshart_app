(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pagecomponents/ShopHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagecomponents_ShopVideo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pagecomponents/ShopVideo */ "./resources/js/components/pagecomponents/ShopVideo.vue");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import review from "../pagecomponents/Review";


jquery__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  setInterval(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(".spinner-content").fadeOut("3000");
  }, 3000);
});
 // import "swiper/css/swiper.css";

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    appvideo: _pagecomponents_ShopVideo__WEBPACK_IMPORTED_MODULE_0__["default"],
    // review,
    Swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["Swiper"],
    SwiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"]
  },
  directives: {
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["directive"]
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
      id: "",
      minPalette_id: "",
      first: null,
      firstpalettesArtists: null,
      firstminPalettes: null,
      minPalettesActive: {},
      active_el: 2,
      priceTarget: "",
      avilableTarget: "",
      sizeTarget: "medium",
      button: false,
      artistID: "",
      sizeCm: "",
      artist_text: "",
      artist_active: "",
      height: "auto",
      width: window.innerWidth,
      content: null,
      allPalettes: [],
      indexes: [],
      palettesSlider: [],
      currentArtist: "",
      paletteIndex: 0 // swiperOption: {
      //   pagination: {
      //     el: ".swiper-pagination"
      //   }
      // }

    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/all-palettes").then(function (response) {
      _this.allPalettes = response.data.palettes;
      _this.indexes = response.data.indexes;
    })["catch"](function (error) {
      return console.log(error);
    });
    axios.get("/api/content").then(function (response) {
      //   console.log(response);
      _this.content = response.data.content;
    });
    var images = document.getElementById("images");
    var scrolled = document.getElementById("scrolled");
    var navbar = document.getElementById("navbar");
    var offset = document.getElementById("carousel-indicators");
    var addToCartSm = document.getElementById("addToCartsm");
    var offsetHeightAdd = String(window.innerHeight - addToCartSm.offsetHeight).substring(1);
    var carsoulExample = document.getElementById("carouselExampleCaptions");
    var list = document.getElementById("carousel-indicators");

    if (window.innerWidth < 767) {
      list.style.transform = "translateX(80px)";
      addToCartSm.style.position = "relative";
      addToCartSm.style.backgroundColor = "#fff";
      carsoulExample.style.marginBottom = "";
    } //content scroll


    var scroll = function scroll() {
      if (window.innerWidth > 768) {
        // console.log(window.scrollY);
        if (window.scrollY > images.offsetHeight) {
          scrolled.style.position = "absolute";
          scrolled.style.bottom = "2vw";
          scrolled.style.top = "";
        } else {
          scrolled.style.position = "relative"; //   scrolled.style.right = "0vw";

          scrolled.style.marginTop = ""; // if (window.scrollY >= images.offsetHeight - 100) {

          scrolled.style.top = "0vw";
          scrolled.style.bottom = "2vw"; // }
          // else scrolled.style.top = "8vw";
        }

        if (window.scrollY >= scrolled.clientHeight - 100 && window.scrollY < images.offsetHeight) {
          //   scrolled.style.right = "6.5vw";
          scrolled.style.top = "20vw";
          scrolled.style.position = "fixed"; // scrolled.style.marginTop = "0px";
          //   console.log(window.scrollY);
        }
      } else {
        // console.log(window.scrollY);
        //56;
        if (window.scrollY > 56) {
          addToCartSm.style.position = "";
          addToCartSm.style.backgroundColor = "";
          carsoulExample.style.marginBottom = "10%";
        } else {
          addToCartSm.style.position = "relative";
          addToCartSm.style.backgroundColor = "#fff";
          carsoulExample.style.marginBottom = "";
        }
      }
    };

    if (window.innerWidth < 768) {
      navbar.style.background = "transparent";
    }

    function navbarChnage() {
      if (window.innerWidth < 768) {
        //   console.log()
        if (window.scrollY < offset.offsetTop) {
          if (document.getElementById("navbar-nav").classList.value.indexOf("active") != -1) navbar.style.background = "#000";else {
            navbar.style.background = "transparent";
            navbar.style.color = "#fff";
          }
        } else {
          navbar.style.background = "#000";
        }
      }
    }

    window.addEventListener("scroll", scroll);
    window.addEventListener("scroll", navbarChnage); // this.changeContent(this.currentLanguage);

    var swiper = new vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["Swiper"](".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
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
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 640px
        // 991: {
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 45
        // }
        1020: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      },
      observer: true,
      observerParents: true
    }); // swiper.update();
  },
  created: function created() {
    var _this2 = this;

    // setInterval(() => {
    //   $(".spinner-content").fadeOut("3000");
    // }, 3000);
    if (this.$route.query.mydata) {
      axios.get("/api/palettes").then(function (response) {
        _this2.artists = response.data.artists; //   this.artist_text = response.data.artists[0].Plates_description;

        _this2.first = response.data.artists[0].id;
        axios.get("/api/view?id=" + _this2.$route.query.mydata).then(function (response) {
          _this2.minPalettesActive = response.data.palettesActive, _this2.palettesArtists = response.data.palettesArtists;

          _this2.changeContent(_this2.currentLanguage);

          if (_this2.countWords(_this2.minPalettesActive.description) > 110 || _this2.countWords(_this2.minPalettesActive.description_ar) > 80) _this2.height = "200px";else _this2.height = "auto";
        })["catch"](function (error) {
          return console.log(error.response.data);
        });
      })["catch"](function (error) {
        return console.log(error.response.data);
      }); //this.addActive(this.$route.query.mydata)

      axios.get("/api/viewMinPalettes?id=" + this.$route.query.mydata).then(function (response) {
        _this2.minPalettes = response.data.minPalettes;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
      axios.get("/api/artist?id=" + this.$route.query.mydata).then(function (response) {
        _this2.artist_active = response.data.artist[0].id;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    } else {
      axios.get("/api/palettes").then(function (response) {
        _this2.artists = response.data.artists;
        _this2.first = response.data.artists[0].id;
        _this2.artist_active = _this2.first; //   this.artist_text = response.data.artists[0].Plates_description;

        axios.get("/api/view?id=" + _this2.first).then(function (response) {
          _this2.palettes = response.data.palettes;
          _this2.minPalettesActive = response.data.palettes[0], _this2.palettesArtists = response.data.palettesArtists;

          _this2.changeContent(_this2.currentLanguage);

          _this2.firstpalettesArtists = response.data.palettesArtists[0].id;
          axios.get("/api/viewMinPalettes?id=" + _this2.firstpalettesArtists).then(function (response) {
            _this2.minPalettes = response.data.minPalettes;
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
      return this.$store.state.products.filter(function (product) {
        return product.quantity > 0;
      });
    },
    currency: function currency() {
      return this.$store.getters.currency;
    },
    totalQuantity: function totalQuantity() {
      return this.$store.state.products.reduce(function (total, product) {
        return total + product.quantity;
      }, 0);
    },
    currentLanguage: function currentLanguage() {
      return this.$i18n.locale;
    },
    isMobileWindow: function isMobileWindow() {
      return this.width <= 767;
    },
    swiper: function swiper() {
      return this.$refs.mySwiper[0].$swiper;
    }
  },
  methods: {
    goToSlide: function goToSlide(artistIndex) {
      this.swiper.slideTo(this.indexes[artistIndex]);
    },
    slideChanged: function slideChanged() {
      var self = this;
      setTimeout(function () {
        var paletteID = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".carousel-inner .active .swiper-slide-active .palette").val();
        var index = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".carousel-inner .active .swiper-slide-active .index").val();
        var artistID = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".carousel-inner .active .swiper-slide-active .artist_id").val();
        var artist = self.artists.filter(function (artist) {
          return artist.id == artistID;
        })[0];
        self.paletteIndex = artist.artist_palettes.findIndex(function (palette) {
          return palette.id == paletteID;
        });
        self.addActive(paletteID, index, false, artistID); // console.log(paletteID);
        // console.log(index);
      }, 100);
    },
    changeContent: function changeContent(lang) {
      if (lang == "en") {
        this.minPalettesActive.sizing = this.content.sizing_details;
        this.minPalettesActive.print = this.content.print_material;
        this.minPalettesActive.ink = this.content.print_ink;
        this.minPalettesActive.finish = this.content.print_finish;
        this.minPalettesActive.material = this.content.frame_material;
        this.minPalettesActive.frame = this.content.frame_finish;
        this.minPalettesActive.descript = this.minPalettesActive.description;
        this.minPalettesActive.ship = this.content.shipping;
      }

      if (lang == "ar") {
        this.minPalettesActive.sizing = this.content.sizing_details_ar;
        this.minPalettesActive.print = this.content.print_material_ar;
        this.minPalettesActive.ink = this.content.print_ink_ar;
        this.minPalettesActive.finish = this.content.print_finish_ar;
        this.minPalettesActive.material = this.content.frame_material_ar;
        this.minPalettesActive.frame = this.content.frame_finish_ar;
        this.minPalettesActive.descript = this.minPalettesActive.description_ar;
        this.minPalettesActive.ship = this.content.shipping_ar;
      }
    },
    ss: function ss(id) {
      console.log(id);
    },
    handleSwap: function handleSwap(swapperId) {
      var element = document.getElementById("swapper" + swapperId); //   var el = $(".swiper-wrapper")
      //     .eq(swapperId)
      //     .css("transform");

      var el = document.getElementsByClassName("swiper-wrapper")[swapperId].style.transform;
      var pos = el.substring(el.indexOf("(") + 1, el.indexOf("px")); //   console.log(pos);
      //   var translate = (pos / 414) * 33;
      // console.log(translate);

      element.style.transform = "translateX(" + pos + "px)"; // .first()
      // .css("transform");
      //   console.log(el);
      //   console.log(element);
      //   console.log(element.style.transform);
    },
    countWords: function countWords(str) {
      str = str.replace(/(^\s*)|(\s*$)/gi, "");
      str = str.replace(/[ ]{2,}/gi, " ");
      str = str.replace(/\n /, "\n");
      return str.split(" ").length;
    },
    toggleParagraphHeight: function toggleParagraphHeight() {
      //   console.log(this.countWords(this.minPalettesActive.descript));
      //   console.log(this.minPalettesActive.descript.length);
      this.show = !this.show;
      if (this.show) this.height = "auto";else {
        this.height = "200px";
      }
    },
    addToCart: function addToCart(product) {
      this.$store.dispatch("addProductToCart", {
        product: product,
        quantity: 1
      });
    },
    updateCart: function updateCart(product, updateType) {
      for (var i = 0; i < this.$store.state.products.length; i++) {
        if (this.$store.state.products[i].id === product.id) {
          if (updateType === "subtract") {
            if (this.$store.state.products[i].quantity !== 0) {
              this.$store.state.products[i].quantity--;
            }
          } else {
            this.$store.state.products[i].quantity++;
          }

          break;
        }
      }
    },
    moveIndicators: function moveIndicators(index) {
      var moveSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var list = document.getElementById("carousel-indicators");

      if (this.isMobileWindow) {
        list.style.transform = "translateX(" + (80 - 80 * index) + "px)";
        if (moveSlide) this.goToSlide(index);
        this.currentArtist = index;
      } else list.style.transform = "translateX(0px)";
    },
    getdata: function getdata($id) {
      var _this3 = this;

      // let indicators = document.getElementsByClassName("carousel-element");
      this.moveIndicators($id); //
      //active-carsoul
      // let id = 0;

      if (this.artists[$id]) {
        $id = this.artists[$id].id;
      } else if ($id > this.artists.length - 1) {
        $id = this.artists[0].id;
      } else {
        $id = this.artists[this.artists.length - 1].id;
      }

      axios.get("/api/view?id=" + $id).then(function (response) {
        _this3.palettes = response.data.palettes;
        _this3.artist_text = response.data.artist[0];
        _this3.minPalettesActive = response.data.palettes[0];

        if (_this3.minPalettesActive == null) {
          _this3.minPalettesActive = "";
        } else {
          _this3.changeContent(_this3.currentLanguage);
        }

        if (response.data.palettesArtists.length > 0) {
          _this3.firstminPalettes = response.data.palettesArtists[0].id;
        } else {
          _this3.firstminPalettes = null;
        }

        axios.get("/api/viewMinPalettes?id=" + _this3.firstminPalettes).then(function (response) {
          _this3.minPalettes = response.data.minPalettes;
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

      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details.active .details_img").css({
        transform: "scale(.7)"
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details.active .content").css({
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
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details.active .details_img").css({
        transform: "scale(1)"
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details.active .content").css({
        marginTop: "27px"
      });
    },
    addActive: function addActive($minPalette_id, index) {
      var _this4 = this;

      var move = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var artistID = arguments.length > 3 ? arguments[3] : undefined;
      // console.log(  this.$refs.myActive)
      var myActive = this.$refs.myActive[index];
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(myActive).addClass("active").siblings().removeClass("active");
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".details").on("click", function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass("active").siblings().removeClass("active");
      });

      if (move) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()("html,body").animate({
          scrollTop: "450px"
        }, 500);
      }

      for (var _index = 0; _index < this.artists.length; _index++) {
        if (this.artists[_index].id == artistID) {
          this.moveIndicators(_index, false);
        }
      }

      axios.get("/api/viewMinPalettes?id=" + $minPalette_id).then(function (response) {
        _this4.minPalettes = response.data.minPalettes;
        _this4.minPalettesActive = response.data.palettes[0];

        _this4.changeContent(_this4.currentLanguage);

        _this4.show = false;
        if (_this4.countWords(_this4.minPalettesActive.description) > 110 || _this4.countWords(_this4.minPalettesActive.description_ar) > 80) _this4.height = "200px";else _this4.height = "auto"; //   this.toggleParagraphHeight();
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    addtocart: function addtocart($id, price, avilableTarget, sizeTarget, sizeCm) {
      var _this5 = this;

      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".modal-mask").css("left", 0);
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(".modal-cart-footer").addClass("animation", "i 1s ");
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".modal-mask").css("backgroundColor", "rgba(0,0,0,.5)");
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(".modal-mask").css("height", "100vh");
      }, 800);
      axios.post("/api/addtocart?id=" + $id).then(function (res) {
        // console.log(res.data.paletteCart)
        // $('#count')[0].innerText++
        var product = res.data.paletteCart;

        if (sizeTarget == "large") {
          if (_this5.minPalettesActive.L_avalible <= 0) {
            _this5.minPalettesActive.L_avalible = 0;
            return;
          }

          --_this5.minPalettesActive.L_avalible;
        } else if (sizeTarget == "small") {
          if (_this5.minPalettesActive.S_avalible <= 0) {
            _this5.minPalettesActive.S_avalible = 0;
            return;
          }

          --_this5.minPalettesActive.S_avalible;
        } else {
          if (_this5.minPalettesActive.M_avalible <= 0) {
            _this5.minPalettesActive.M_avalible = 0;
            return;
          }

          --_this5.minPalettesActive.M_avalible;
        }

        _this5.$store.dispatch("addProductToCart", {
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
      var _this6 = this;

      this.addActive(this.$route.query.mydata);
      axios.get("/api/viewMinPalettes?id=" + this.$route.query.mydata).then(function (response) {
        _this6.minPalettes = response.data.minPalettes; // console.log(this.$route.query.mydata );
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
      axios.get("/api/artist?id=" + this.$route.query.mydata).then(function (response) {
        _this6.artist_active = response.data.artist[0].id;
      })["catch"](function (error) {
        return console.log(error.response.data);
      });
    },
    currentLanguage: function currentLanguage(newLang, oldLang) {
      this.changeContent(newLang);
    }
  }
});

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
exports.push([module.i, "\n.col-md-6[data-v-266b1872] {\n  padding: 5px !important;\n}\n.carousel-item .header[data-v-266b1872] {\n  width: 100%;\n  height: 39vw;\n  /* margin-top: 4%; */\n}\n.header-sm[data-v-266b1872] {\n  display: none;\n}\n.header-lg[data-v-266b1872] {\n  display: block;\n}\n@media (max-width: 767px) {\n.carousel-item .header[data-v-266b1872] {\n    height: 600px;\n    transition: all 300ms ease 0.2s;\n    /* transform: scale3d(4.5, 1.5, 1.5); */\n    width: 300%;\n    /* transform: translateX(-30%); */\n}\n.header-sm[data-v-266b1872] {\n    display: block;\n}\n.header-lg[data-v-266b1872] {\n    display: none;\n}\n.carousel-indicators .active[data-v-266b1872]::after {\n    display: none !important;\n}\n}\n.header_sm[data-v-266b1872] {\n  background-image: url(\"https://cdn.shopify.com/s/files/1/3000/4362/files/turrell_mobile_final_post_3_2048x.jpg?v=1565189502\");\n  background-size: cover;\n  height: 300px;\n  background-position: center;\n  position: relative;\n  display: none;\n}\n.wrapper[data-v-266b1872] {\n  position: absolute;\n  top: 1rem;\n  transform: translate(-50%, 0);\n  left: 51%;\n  width: 100%;\n}\n@media (max-width: 768px) {\n.header_sm[data-v-266b1872] {\n    display: none;\n}\n.wrapper[data-v-266b1872] {\n    top: -1vw;\n}\n.detials[data-v-266b1872] {\n    left: 8rem;\n}\n}\n.details[data-v-266b1872] {\n  color: #fff;\n  cursor: pointer;\n  /* transition: all 0.4s; */\n  left: 1rem;\n}\n.details img[data-v-266b1872] {\n  width: 20vw;\n  transition: all 0.4s;\n  height: 27vw;\n  border-top: 8px solid #111;\n  border-bottom: 8px solid #111;\n  box-shadow: -2px 3px 8px 0 rgba(0, 0, 0, 0.57);\n  transform: scale(0.95);\n}\n.wrapper .row[data-v-266b1872] {\n  transform: scale(0.5);\n}\n.wrapper .details .content[data-v-266b1872] {\n  margin-left: 2rem;\n  position: relative;\n  font-size: 10px;\n  width: 83%;\n  margin-top: 20%;\n  /* margin: 16px auto 0; */\n  padding: 6px 5px;\n  transition: all 0.5s;\n  color: white;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.75);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-size: 100%;\n  z-index: 2;\n  top: 10px;\n  padding: 0 20px;\n  border: 4px solid rgba(0, 0, 0, -7.25);\n}\n.wrapper .details .content .triangle[data-v-266b1872] {\n  position: relative;\n  z-index: 1;\n  /* padding: 10px; */\n  display: inline-block;\n  top: -29px;\n  left: 50%;\n  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);\n  transform: rotate(0) scale(2.3) translate(-16%, 19%);\n  /* background: rgba(0,0,0,0.9); */\n  width: 22px;\n  height: 10px;\n}\n\n/* .details.active .triangle{\n            top: -26.1px;\n\n    } */\n/* .wrapper .details .content:hover{\n        border: 2px solid #00a4ee;\n    } */\n\n/* .details-content{\n        margin:20px;\n    } */\n.details:hover .details_img[data-v-266b1872] {\n  transform: scale(1) !important;\n}\n.add-cart[data-v-266b1872] {\n  padding-left: 50px;\n}\n.add-cart div span[data-v-266b1872] {\n  font-size: 15px;\n  font-weight: 400;\n  line-height: 22px;\n  display: inline-block;\n  /* margin-right: 5px; */\n  padding-left: 10px;\n  text-transform: lowercase;\n  color: #fff;\n  border-radius: 999px;\n  background-color: #000;\n}\n.add-cart p[data-v-266b1872] {\n  font-size: 20px;\n}\n#addToCartsm[data-v-266b1872] {\n  transition: all 0.7s ease-in-out;\n}\n.add-cart .add-button[data-v-266b1872],\n#addToCartsm .add-button[data-v-266b1872] {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 70px;\n  display: block;\n  width: 100%;\n  margin-bottom: 40px;\n  cursor: pointer;\n  text-align: center;\n  text-decoration: none;\n  color: #fff;\n  border: none;\n  background-color: #000;\n}\n.add-cart .more[data-v-266b1872] {\n  outline: none;\n}\n.list-group .list-group-item[data-v-266b1872] {\n  cursor: pointer;\n  border-left: none;\n  border-right: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.list-group[data-v-266b1872] {\n  padding-left: 0;\n}\n/*\n    .carousel-control-prev{\n        left: -50%;\n    } */\n.carousel-indicators li[data-v-266b1872] {\n  box-sizing: content-box;\n  flex: 0 1 auto;\n  width: 67px;\n  height: 29px;\n  margin-right: 2%;\n  margin-left: 0;\n  text-indent: 0;\n  cursor: pointer;\n  color: black;\n  background: none;\n}\n.carousel-indicators[data-v-266b1872] {\n  bottom: -6%;\n  width: 100%;\n  background-color: #f5f0ed;\n  margin-left: 0;\n  margin-right: 0;\n}\n@media (min-width: 768px) {\n.carousel-indicators[data-v-266b1872] {\n    transform: translateX(0px) !important;\n}\n}\n@media (min-width: 768px) {\n  /* .carousel-indicators {\n    bottom: -8%; */\n  /* bottom: -14%; */\n  /* padding-bottom: 8vh;\n    overflow-x: scroll !important;\n  } */\n}\n/* .carousel-indicators .active {\n  border-bottom: 3px solid #00aeef;\n} */\n.small[data-v-266b1872],\n.medium[data-v-266b1872],\n.larg[data-v-266b1872] {\n  padding: 40px 120px !important ;\n  margin-right: 20px !important;\n  font-size: 20px;\n}\n.details.active .content[data-v-266b1872] {\n  border: 4px solid #00a4ee;\n}\n.details.active .triangle[data-v-266b1872] {\n  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon-active.png) !important;\n}\n.active_btn[data-v-266b1872] {\n  border: 2px solid #00a4ee;\n}\n.content h6[data-v-266b1872],\n.content span[data-v-266b1872] {\n  font-size: 1.6rem;\n}\n.price[data-v-266b1872] {\n  font-size: 1.6rem !important ;\n}\n.infor[data-v-266b1872] {\n  top: -12px;\n  left: -20px;\n  position: relative;\n  transform: scale(0.8);\n}\n\n/* Start Responsive */\n@media (max-width: 1264px) {\n.wrapper .row[data-v-266b1872] {\n    position: absolute;\n    /* top: -230px; */\n\n    /* left: 1.5rem; */\n    /* transform: scale(0.4); */\n}\n.details-content[data-v-266b1872] {\n    /* margin: 10px 30px ; */\n}\n}\n@media (max-width: 960px) {\n  /* .details {\n    left: 7rem;\n  } */\n.wrapper .row[data-v-266b1872] {\n    /* transform: scale(0.4); */\n}\n.details-content[data-v-266b1872] {\n    /* margin: 10px 50px ; */\n}\n.infor[data-v-266b1872][data-v-266b1872] {\n    left: 0;\n    position: relative;\n    transform: scale(0.9);\n}\n  /* .details img {\n    width: 25vw;\n    height: 34vw;\n  } */\n  /* .wrapper .details img {\n    width: 100%;\n  } */\n.wrapper .details .content[data-v-266b1872] {\n    width: 100%;\n}\n}\n@media (max-width: 880px) {\n.wrapper .row[data-v-266b1872] {\n    /* transform: scale(0.4); */\n    display: flex;\n    /* justify-content: space-evenly !important; */\n}\n.details-content[data-v-266b1872] {\n    /* margin: 10px 50px ; */\n    margin-right: -18px;\n}\n.infor[data-v-266b1872][data-v-266b1872] {\n    left: 8px;\n    position: relative;\n    transform: scale(0.9);\n}\n.wrapper .details[data-v-266b1872] {\n    width: 300px !important;\n}\n\n  /* .wrapper .details img {\n    width: 93%;\n  } */\n.wrapper .details .content[data-v-266b1872] {\n    width: 93%;\n}\n}\n.navigate2[data-v-266b1872] {\n  margin: 100px 0;\n  text-align: center;\n}\n.navigate2 svg[data-v-266b1872] {\n  -webkit-animation: e-data-v-266b1872 2s infinite;\n          animation: e-data-v-266b1872 2s infinite;\n  width: 28px;\n  height: 64px;\n}\n.navigate2 span[data-v-266b1872] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  margin: 0 5px;\n  transition: opacity 0.5s ease-out;\n  opacity: 0.2;\n  border-radius: 50%;\n  background-color: #fff;\n}\n@-webkit-keyframes e-data-v-266b1872 {\n0%,\n  20%,\n  50%,\n  80%,\n  to {\n    transform: translateY(0);\n}\n40% {\n    transform: translateY(-10px);\n}\n60% {\n    transform: translateY(-5px);\n}\n}\n@keyframes e-data-v-266b1872 {\n0%,\n  20%,\n  50%,\n  80%,\n  to {\n    transform: translateY(0);\n}\n40% {\n    transform: translateY(-10px);\n}\n60% {\n    transform: translateY(-5px);\n}\n}\n.parent[data-v-266b1872] {\n  position: absolute;\n  top: 450px;\n  left: 50%;\n  transform: translate(-50%, 0);\n}\n.parent img[data-v-266b1872] {\n  width: 170px;\n}\n.agile_swap[data-v-266b1872] {\n  /* position: absolute; */\n  /* top: 100px; */\n  /* left: 50%;\n    transform: translate(50%,0); */\n  position: absolute;\n  text-align: center;\n  /* top:2%; */\n  /* transform: scale(.9); */\n}\n.agile_swap img[data-v-266b1872] {\n  width: 37%;\n  margin-top: 80px;\n  border-top: 4px solid #111;\n  border-bottom: 4px solid #111;\n}\n/*\n.pallete-swiper .swiper-pagination{\n    display: none;\n}\n.agile_swap  .agile_slide {\n    width: 77% !important;\n\n} */\n.swiper-wrapper[data-v-266b1872] {\n  /* left: 44px; */\n}\n.agile_swap .content[data-v-266b1872] {\n  position: relative;\n  font-size: 10px;\n  width: 68%;\n  margin-top: 34px;\n  /* margin: 16px auto 0; */\n  padding: 6px 5px;\n  transition: all 0.5s;\n  color: white;\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.75);\n  top: 18px;\n  padding: 0 20px;\n  border: 4px solid rgba(0, 0, 0, -7.25);\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0.5);\n}\n.agile_swap .content .triangle[data-v-266b1872] {\n  position: relative;\n  z-index: 1;\n  /* padding: 10px; */\n  display: inline-block;\n  top: -29px;\n  left: 50%;\n  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);\n  transform: rotate(0) scale(2.3) translate(-316%, 18%);\n  /* background: rgba(0,0,0,0.9); */\n  width: 22px;\n  height: 10px;\n}\n@media (max-width: 414px) {\n.agile_swap .content .triangle[data-v-266b1872] {\n    left: 63% !important;\n}\n.agile_swap img[data-v-266b1872] {\n    height: 200px !important;\n    width: 155px !important;\n}\n.parent[data-v-266b1872] {\n    top: 430px;\n    left: 52%;\n}\n.agile_swap .content[data-v-266b1872] {\n    width: 246px !important;\n}\n.agile_swap .content .triangle[data-v-266b1872] {\n    left: 65% !important;\n}\n.addToCart-sm .add-button[data-v-266b1872] {\n    height: 50px !important;\n    line-height: 24px !important;\n}\n}\n.rotate[data-v-266b1872] {\n  width: 100%;\n  position: relative;\n  height: 82px;\n  transform: rotate(49deg);\n  background: black;\n}\n.carousel-indicators li[data-v-266b1872] {\n  width: auto;\n  padding: 0 5px;\n}\n.custom-padding[data-v-266b1872]:nth-child(odd) {\n  padding-right: 5px !important;\n  padding-left: 20px !important;\n  padding-bottom: 0.3px !important;\n}\n.custom-padding[data-v-266b1872]:nth-child(even) {\n  padding-right: 20px;\n  padding-left: 5px !important;\n  padding-bottom: 0.3px;\n}\n.swap_sm[data-v-266b1872] {\n  display: none;\n}\n.addToCart-sm[data-v-266b1872] {\n  display: none;\n}\n@media (max-width: 767px) {\n.custom-padding[data-v-266b1872]:nth-child(odd) {\n    padding-right: 11px !important;\n    padding-left: 11px !important;\n    padding-bottom: 0.3px !important;\n}\n.sold-out[data-v-266b1872] {\n    display: none;\n}\n.col-sm-12[data-v-266b1872] {\n    display: flex;\n    justify-content: center;\n}\n.custom-padding[data-v-266b1872]:nth-child(even) {\n    padding-right: 11px;\n    padding-left: 11px !important;\n    padding-bottom: 0.3px;\n}\n.add-cart[data-v-266b1872][data-v-266b1872] {\n    padding-left: 6px;\n}\n.addToCart-sm[data-v-266b1872] {\n    position: relative;\n    display: inline;\n    background: #f0f0f0;\n    position: fixed;\n    bottom: 0%;\n    z-index: 99;\n    width: 100%;\n    left: 0px;\n    right: 0;\n    /* height: 30vw; */\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 20px;\n}\n.addToCart[data-v-266b1872] {\n    display: none !important;\n}\n.swap_sm[data-v-266b1872] {\n    display: block;\n}\n.carousel-indicators[data-v-266b1872] {\n    background-color: transparent !important;\n\n    bottom: 3%;\n}\n.carousel-indicators li[data-v-266b1872] {\n    color: #fff !important;\n    font-size: 18px;\n    padding: 13px 0 10px;\n    width: 80px;\n    padding-right: 0;\n    padding-left: 0;\n    transform: scale(0.9);\n}\n.swap_lg[data-v-266b1872] {\n    display: none;\n}\n.agile_swap .agile_slide[data-v-266b1872] {\n    position: relative;\n    /* left: -15.7% !important; */\n}\n.v-application ol[data-v-266b1872],\n  .v-application ul[data-v-266b1872] {\n    /* padding-left: 15vw !important; */\n    /* padding-bottom: 3vh !important; */\n    padding-bottom: 1vh !important;\n}\n.agile_swap[data-v-266b1872] {\n    left: 0 !important;\n    top: 0 !important;\n}\n.agile_swap .agile_slide[data-v-266b1872] {\n    left: 0 !important;\n    max-width: 100vw !important;\n    margin-right: 0 !important;\n    margin-left: 0 !important;\n}\n  /* .details:hover {\n    transform: scale(1) !important;\n  } */\n.details .mobile-background[data-v-266b1872] {\n    width: 100% !important;\n    height: 100% !important;\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin: 0;\n    border: none;\n    color: transparent;\n    z-index: -1;\n    transform: scale(1);\n    box-shadow: none !important;\n}\n.agile_swap img[data-v-266b1872]:last-of-type {\n    margin-top: 32% !important;\n}\n.carousel-control-next[data-v-266b1872],\n  .carousel-control-prev[data-v-266b1872] {\n    display: none;\n}\n.carousel-indicators[data-v-266b1872] {\n    transform: translateX(80px);\n}\n}\n@media (max-width: 320px) {\n.v-application ol[data-v-266b1872],\n  .v-application ul[data-v-266b1872] {\n    /* padding-left: 30vw !important; */\n}\n.agile_swap .content[data-v-266b1872] {\n    padding-bottom: 23vw;\n}\n.addToCart-sm .add-button[data-v-266b1872] {\n    height: 50px !important;\n}\n}\n.swiper-container[data-v-266b1872] {\n  margin-bottom: 50px;\n}\n.agile_swap[data-v-266b1872] {\n  position: absolute;\n  top: 1%;\n  left: 16%;\n  width: 100%;\n}\n.agile_swap img[data-v-266b1872] {\n  height: 250px;\n  width: 189px;\n}\n.agile_swap .content[data-v-266b1872] {\n  width: 331px;\n}\n.agile_swap .agile_slide[data-v-266b1872] {\n  position: relative;\n  left: -11%;\n}\n.text-right strong[data-v-266b1872]::after {\n  content: \":\";\n}\nheader[data-v-266b1872] {\n  width: 81% !important;\n  left: 10% !important;\n}\n@media (max-width: 768px) {\nheader[data-v-266b1872] {\n    left: 0% !important;\n}\n}\n.content[data-v-266b1872] {\n  right: 10% !important;\n}\n@media (min-width: 760px) and (max-width: 1019px) {\n.swiper-container[data-v-266b1872] {\n    height: 65vw !important;\n}\n}\n@media (min-width: 1020px) {\n.swiper-container[data-v-266b1872] {\n    height: 46vw !important;\n}\n}\n@media (max-width: 759px) and (min-width: 500px) {\n.swiper-container[data-v-266b1872] {\n    height: 100vw !important;\n}\n}\n@media (min-width: 320px) and (max-width: 499px) {\n.swiper-container[data-v-266b1872] {\n    height: 600px !important;\n}\n}\n@media (max-width: 759px) {\n.product-grid-item\n    .product-grid-item__image\n    .product-grid-item__imagewrapper[data-v-266b1872] {\n    height: 80vw;\n    width: 80vw;\n    margin-right: 10vw;\n    margin-left: 10vw;\n    margin: auto;\n}\n.swiper-slide[data-v-266b1872] {\n    max-width: 80vw;\n    margin-right: 10vw;\n    margin-left: 5.7vw;\n}\n}\n/* #palletes-images-scroll::-webkit-scrollbar {\n  width: 2em;\n} */\n#palletes-images-scroll[data-v-266b1872]::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 100px;\n  height: 4px;\n}\n#palletes-images-scroll[data-v-266b1872]::-webkit-scrollbar-thumb {\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n/* #palletes-images-scroll::-webkit-scrollbar {\n  -webkit-appearance: scrollbartrack-horizontal;\n} */\n#palletes-images-scroll[data-v-266b1872] {\n  display: none;\n  /* overflow: -moz-scrollbars-horizontal; */\n  overflow-x: auto;\n  overflow-y: hidden;\n  /* height: 70vh; */\n  width: 90vw;\n  margin: 0 auto;\n  white-space: nowrap;\n  padding: 20px;\n}\n.palletes-images[data-v-266b1872] {\n  width: 75vw;\n  /* padding: 5px; */\n  height: 75vw;\n  background-origin: content-box;\n  background-position: center;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  padding: 3px;\n}\n@media (max-width: 769px) {\n.carousel-item .header[data-v-266b1872] {\n    margin-top: 0 !important;\n}\n#palletes-images[data-v-266b1872] {\n    display: none;\n}\n#palletes-images-scroll[data-v-266b1872] {\n    display: block;\n    margin-bottom: 50px;\n}\n#text-images[data-v-266b1872] {\n    flex: 0 0 100%;\n    max-width: 95%;\n    position: relative;\n    bottom: 10vw;\n    margin-bottom: 30px;\n    /* margin-top: 0px !important; */\n}\n#text-images .add-cart[data-v-266b1872] {\n    max-width: 100% !important;\n    width: 100% !important;\n    /* top: -21vw; */\n    position: relative;\n    bottom: -13vw !important;\n}\n.navbar[data-v-266b1872] {\n    background-color: transparent !important;\n}\n}\n.carousel-indicators[data-v-266b1872] {\n  transition: all 300ms ease 0.2s;\n}\n.navbar[data-v-266b1872] {\n  color: #fff !important;\n  background-color: #000 !important;\n}\n.carousel-indicators .active[data-v-266b1872] {\n  font-weight: bold;\n}\n.carousel-indicators .active[data-v-266b1872]::after {\n  width: 100%;\n  height: 3px;\n  background-color: #00aeef;\n  content: \"\";\n  display: block;\n  margin-top: 11px;\n}\n.carousel-indicators li[data-v-266b1872] {\n  opacity: 1;\n}\n@media (max-width: 768px) and (min-width: 500px) {\n.details img[data-v-266b1872] {\n    width: 24vw;\n    height: 32vw;\n}\n  /* .swiper-container .swiper-slide {\n    margin-right: 10px !important;\n  } */\n}\n@media (max-width: 991px) and (min-width: 768px) {\n.carousel-item .header[data-v-266b1872] {\n    height: 48vw;\n}\n#text-images[data-v-266b1872] {\n    margin-top: 0px !important;\n}\n  /* #scrolled {\n    margin-top: 78px;\n  } */\n}\n", ""]);

// exports


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
          staticClass: "carousel slide",
          staticStyle: { "margin-bottom": "5%" },
          attrs: {
            id: "carouselExampleCaptions",
            "data-interval": "false",
            "data-wrap": "false",
            "data-touch": "false"
          }
        },
        [
          _c(
            "ol",
            {
              staticClass: "carousel-indicators text-center",
              attrs: { id: "carousel-indicators" }
            },
            [
              !_vm.isMobileWindow
                ? _vm._l(_vm.artists, function(artist, index) {
                    return _c(
                      "li",
                      {
                        key: artist.id,
                        staticClass: "carousel-element",
                        class: {
                          "active active-carsoul":
                            artist.id == _vm.artist_active
                        },
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
                  })
                : _vm._l(_vm.artists, function(artist, index) {
                    return _c(
                      "li",
                      {
                        key: artist.id,
                        staticClass: "carousel-element",
                        class: {
                          "active active-carsoul": index == _vm.currentArtist
                        },
                        on: {
                          click: function($event) {
                            return _vm.getdata(index)
                          }
                        }
                      },
                      [_vm._v(_vm._s(artist.name))]
                    )
                  })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "carousel-inner" },
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
                    staticClass: "header header-lg",
                    attrs: { src: artist.cover_img, alt: "..." }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "header header-sm",
                    attrs: { src: "", alt: "...", id: "swapper" + index }
                  }),
                  _vm._v(" "),
                  _vm.isMobileWindow
                    ? _c(
                        "swiper",
                        {
                          ref: "mySwiper",
                          refInFor: true,
                          staticClass: "agile_swap swap_sm",
                          on: {
                            transitionStart: function($event) {
                              return _vm.handleSwap(index)
                            },
                            slideChange: function($event) {
                              return _vm.slideChanged()
                            }
                          }
                        },
                        _vm._l(_vm.allPalettes, function(
                          palettesArtist,
                          index
                        ) {
                          return _c(
                            "swiper-slide",
                            {
                              key: palettesArtist.id,
                              ref: "palettesSlider",
                              refInFor: true,
                              staticClass: "details agile_slide",
                              on: { click: _vm.ss },
                              nativeOn: {
                                click: function($event) {
                                  return _vm.addActive(
                                    palettesArtist.id,
                                    index,
                                    palettesArtist.artist_id
                                  )
                                }
                              }
                            },
                            [
                              _c("input", {
                                staticClass: "palette",
                                attrs: { type: "hidden" },
                                domProps: { value: palettesArtist.id }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "index",
                                attrs: { type: "hidden" },
                                domProps: { value: index }
                              }),
                              _vm._v(" "),
                              _c("input", {
                                staticClass: "artist_id",
                                attrs: { type: "hidden" },
                                domProps: { value: palettesArtist.artist_id }
                              }),
                              _vm._v(" "),
                              _c("img", {
                                staticClass: "mobile-background",
                                attrs: {
                                  src: palettesArtist.mobile_background,
                                  alt: ""
                                }
                              }),
                              _vm._v(" "),
                              _c("img", {
                                attrs: { src: palettesArtist.img, alt: "..." }
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
                                      _vm._v(_vm._s(palettesArtist.name))
                                    ]),
                                    _vm._v(" |\n                "),
                                    _vm.currency == "sar"
                                      ? _c(
                                          "span",
                                          { staticClass: "price px-1" },
                                          [
                                            _vm._v(
                                              _vm._s(palettesArtist.M_price) +
                                                " " +
                                                _vm._s(_vm.$t("currency.sar"))
                                            )
                                          ]
                                        )
                                      : _c(
                                          "span",
                                          { staticClass: "price px-1" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("currency.usd1")) +
                                                " " +
                                                _vm._s(palettesArtist.M_price)
                                            )
                                          ]
                                        )
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
                                            "\n                  /" +
                                              _vm._s(palettesArtist.M_copies) +
                                              " " +
                                              _vm._s(_vm.$t("message.left")) +
                                              "\n                "
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
                                              _vm._s(_vm.$t("message.solidout"))
                                            )
                                          ]
                                        )
                                      ])
                                ]
                              )
                            ]
                          )
                        }),
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "wrapper swap_lg" }, [
                    _c(
                      "div",
                      {
                        staticClass: "row d-flex justify-content-center",
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
                            staticClass: "details col-lg-3 col-sm-3",
                            class: { active: index == 0 },
                            on: {
                              click: function($event) {
                                return _vm.addActive(
                                  palettesArtist.id,
                                  index,
                                  artist.id
                                )
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "details-content" }, [
                              _c("img", {
                                staticClass: "details_img",
                                attrs: { src: palettesArtist.img, alt: "..." }
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
                                      _vm._v(_vm._s(palettesArtist.name))
                                    ]),
                                    _vm._v(
                                      "\n                    |\n                    "
                                    ),
                                    _vm.currency == "sar"
                                      ? _c(
                                          "span",
                                          { staticClass: "price px-1" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                palettesArtist.M_price_sar
                                              ) + _vm._s(_vm.$t("currency.sar"))
                                            )
                                          ]
                                        )
                                      : _c(
                                          "span",
                                          { staticClass: "price px-1" },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.$t("currency.usd1")) +
                                                _vm._s(palettesArtist.M_price)
                                            )
                                          ]
                                        )
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
                                            "\n                      /" +
                                              _vm._s(palettesArtist.M_copies) +
                                              " " +
                                              _vm._s(_vm.$t("message.left")) +
                                              "\n                    "
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
                                              _vm._s(_vm.$t("message.solidout"))
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
                  _c(
                    "div",
                    {
                      staticClass: "parent swap_sm",
                      staticStyle: { "z-index": "2" }
                    },
                    [
                      _vm.paletteIndex == 0
                        ? _c("div", { staticClass: "navigate2" }, [
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
                            ),
                            _vm._v(" "),
                            _c("span"),
                            _vm._v(" "),
                            _c("span")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.paletteIndex == 1
                        ? _c("div", { staticClass: "navigate2" }, [
                            _c("span"),
                            _vm._v(" "),
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
                            ),
                            _vm._v(" "),
                            _c("span")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.paletteIndex == 2
                        ? _c("div", { staticClass: "navigate2" }, [
                            _c("span"),
                            _vm._v(" "),
                            _c("span"),
                            _vm._v(" "),
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
                        : _vm._e()
                    ]
                  ),
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
                      staticClass: "carousel-control-prev",
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
      _c(
        "div",
        {
          staticClass: "text-center addToCart-sm",
          attrs: { id: "addToCartsm" }
        },
        [
          _c("img", {
            staticStyle: { width: "80px", height: "80px" },
            attrs: { src: _vm.minPalettesActive.img, alt: "" }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { width: "75%", "margin-left": "4%" } },
            [
              _vm.minPalettesActive.M_avalible > 0
                ? _c(
                    "button",
                    {
                      staticClass: "btn add-button",
                      staticStyle: {
                        "line-height": "30px",
                        width: "100%",
                        "margin-bottom": "3%",
                        "font-size": "1rem !important",
                        height: "9vh",
                        "border-radius": "0"
                      },
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
                      _vm.currency == "usd"
                        ? [
                            _vm.active_el == 2
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-weight": "bolder",
                                      "font-size": "1rem",
                                      "text-transform": "capitalize"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.$t("currency.usd1")) +
                                        " " +
                                        _vm._s(_vm.minPalettesActive.M_price) +
                                        "-"
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(
                              "\n          " +
                                _vm._s(_vm.$t("message.cart")) +
                                "\n        "
                            )
                          ]
                        : [
                            _vm.active_el == 2
                              ? _c(
                                  "span",
                                  {
                                    staticStyle: {
                                      "font-weight": "bolder",
                                      "font-size": "1rem",
                                      "text-transform": "capitalize"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.minPalettesActive.M_price_sar
                                      ) +
                                        " " +
                                        _vm._s(_vm.$t("currency.sar")) +
                                        "-"
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(
                              "\n          " +
                                _vm._s(_vm.$t("message.cart")) +
                                "\n        "
                            )
                          ]
                    ],
                    2
                  )
                : _c(
                    "v-btn",
                    {
                      staticClass: "mb-2 size_btn small",
                      staticStyle: {
                        cursor: "not-allowed",
                        "background-color": "#737373",
                        color: "#fff",
                        border: "none",
                        "line-height": "30px",
                        width: "100%",
                        "margin-bottom": "3%",
                        "font-size": "1rem !important",
                        height: "7vh",
                        "border-radius": "0",
                        padding: "0 !important"
                      }
                    },
                    [_vm._v(_vm._s(_vm.$t("message.solidout")))]
                  ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticStyle: {
                    "font-size": "14px",
                    "font-style": "italic",
                    width: "100%",
                    margin: "0px",
                    "text-align": "center"
                  }
                },
                [_vm._v(_vm._s(_vm.minPalettesActive.name))]
              )
            ],
            1
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
          staticStyle: {
            "max-width": "1260px!important",
            "margin-bottom": "50px"
          }
        },
        [
          _c(
            "div",
            { staticClass: "row", attrs: { id: "palletes-images-scroll" } },
            _vm._l(_vm.minPalettes, function(minPalette) {
              return _c(
                "div",
                {
                  key: minPalette.id,
                  staticClass: "d-inline-block palletes-images"
                },
                [
                  _c("img", {
                    staticStyle: {
                      height: "100%",
                      width: "100%",
                      diplay: "inline"
                    },
                    attrs: { src: minPalette.img, alt: "..." }
                  })
                ]
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "col-lg-7 col-md-6 ml-md-4 ml-sm-0",
                attrs: { id: "palletes-images" }
              },
              [
                _c(
                  "div",
                  { staticClass: "row", attrs: { id: "images" } },
                  _vm._l(_vm.minPalettes, function(minPalette) {
                    return _c(
                      "div",
                      { key: minPalette.id, staticClass: "col-md-6 col-sm-12" },
                      [
                        _c("img", {
                          staticStyle: { height: "100%", width: "100%" },
                          attrs: { src: minPalette.img, alt: "..." }
                        })
                      ]
                    )
                  }),
                  0
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "col-lg-4 col-md-5 ml-2",
                staticStyle: { position: "relative" },
                attrs: { id: "text-images" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "add-cart",
                    staticStyle: { width: "34vw", bottom: "0vw" },
                    attrs: { id: "scrolled" }
                  },
                  [
                    _c(
                      "h2",
                      { staticClass: "font-weight-bold" },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.minPalettesActive.name) +
                            "\n            "
                        ),
                        _vm.currency == "usd"
                          ? [
                              _vm.active_el == 1
                                ? _c("span", [
                                    _vm._v(
                                      _vm._s(_vm.$t("currency.usd1")) +
                                        " " +
                                        _vm._s(_vm.minPalettesActive.S_price)
                                    )
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
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("currency.usd1")) +
                                          " " +
                                          _vm._s(_vm.minPalettesActive.M_price)
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.active_el == 3
                                ? _c("span", [
                                    _vm._v(
                                      _vm._s(_vm.$t("currency.usd1")) +
                                        " " +
                                        _vm._s(_vm.minPalettesActive.L_price)
                                    )
                                  ])
                                : _vm._e()
                            ]
                          : [
                              _vm.active_el == 1
                                ? _c("span", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.minPalettesActive.S_price_sar
                                      ) +
                                        " " +
                                        _vm._s(_vm.$t("currency.sar"))
                                    )
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
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.minPalettesActive.M_price_sar
                                        ) +
                                          " " +
                                          _vm._s(_vm.$t("currency.sar"))
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.active_el == 3
                                ? _c("span", [
                                    _vm._v(
                                      "} " +
                                        _vm._s(
                                          _vm.minPalettesActive.L_price_sar
                                        ) +
                                        " " +
                                        _vm._s(_vm.$t("currency.sar"))
                                    )
                                  ])
                                : _vm._e()
                            ]
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-3 mt-2" }, [
                      _c("span", { staticStyle: { padding: "0 10px" } }, [
                        _vm._v(_vm._s(_vm.minPalettesActive.tag))
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _vm.minPalettesActive.M_avalible > 0
                          ? _c(
                              "button",
                              {
                                staticClass: "btn add-button addToCart",
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
                                _vm.currency == "usd"
                                  ? [
                                      _vm.active_el == 2
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "font-size": "23px",
                                                "text-transform": "capitalize"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.$t("currency.usd1")
                                                ) +
                                                  " " +
                                                  _vm._s(
                                                    _vm.minPalettesActive
                                                      .M_price
                                                  )
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ]
                                  : [
                                      _vm.active_el == 2
                                        ? _c(
                                            "span",
                                            {
                                              staticStyle: {
                                                "font-size": "23px",
                                                "text-transform": "capitalize"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.minPalettesActive
                                                    .M_price_sar
                                                ) +
                                                  " " +
                                                  _vm._s(_vm.$t("currency.sar"))
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                _vm._v(" "),
                                _vm._v(
                                  "\n              " +
                                    _vm._s(_vm.$t("message.cart")) +
                                    "\n            "
                                )
                              ],
                              2
                            )
                          : _c(
                              "v-btn",
                              {
                                staticClass: "mb-2 size_btn small sold-out",
                                staticStyle: {
                                  cursor: "not-allowed",
                                  "background-color": "#737373",
                                  color: "#fff",
                                  border: "none",
                                  "margin-bottom": "45px!important"
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("message.solidout")))]
                            )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("transition", [
                      _c(
                        "p",
                        {
                          class: { "text-right": _vm.currentLanguage == "ar" },
                          style: "height:" + _vm.height
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.minPalettesActive.descript) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "mt-4 mb-2 d-block",
                        staticStyle: {
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.7189250700280112) 0%, rgba(255,255,255,1) 66%)",
                          position: "relative",
                          height: "51px",
                          "padding-top": "15px"
                        }
                      },
                      [
                        _vm.minPalettesActive.description
                          ? [
                              (_vm.countWords(
                                _vm.minPalettesActive.description
                              ) > 110 ||
                                _vm.countWords(
                                  _vm.minPalettesActive.description_ar
                                ) > 80) &&
                              !_vm.show
                                ? _c(
                                    "a",
                                    {
                                      staticClass:
                                        "more text-primary btn btn-block",
                                      on: { click: _vm.toggleParagraphHeight }
                                    },
                                    [_vm._v(_vm._s(_vm.$t("message.readmore")))]
                                  )
                                : _vm._e()
                            ]
                          : _vm._e()
                      ],
                      2
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
                          _c("h4", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("message.size")) +
                                "\n                "
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
                            ? _c(
                                "p",
                                {
                                  class: {
                                    "text-right": _vm.currentLanguage == "ar"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.minPalettesActive.sizing))]
                              )
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
                          _c("h4", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("message.productDetails")) +
                                "\n                "
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
                            ? [
                                _c(
                                  "p",
                                  {
                                    class: {
                                      "text-right": _vm.currentLanguage == "ar"
                                    }
                                  },
                                  [
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Print_material"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.print) +
                                        "\n                  "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Print_ink"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.ink) +
                                        "\n                  "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Print_finish"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.finish) +
                                        "\n                  "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Frame_material"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.material) +
                                        "\n                  "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("strong", [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.Frame_finish"))
                                      )
                                    ]),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.minPalettesActive.frame) +
                                        "\n                "
                                    )
                                  ]
                                )
                              ]
                            : _vm._e()
                        ],
                        2
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
                          _c("h4", { staticClass: "font-weight-bold" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.$t("message.shipping")) +
                                "\n                "
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
                            ? _c(
                                "p",
                                {
                                  class: {
                                    "text-right": _vm.currentLanguage == "ar"
                                  }
                                },
                                [_vm._v(_vm._s(_vm.minPalettesActive.ship))]
                              )
                            : _vm._e()
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("appvideo")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("div", { staticStyle: { clear: "both" } })])
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
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ShopHeader_vue_vue_type_style_index_0_id_266b1872_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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



/***/ })

}]);