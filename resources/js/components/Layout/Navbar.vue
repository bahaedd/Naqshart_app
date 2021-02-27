<template>
  <nav
    :class="'navbar navbar-expand-md '+ navbar +' px-3 sticky-top'"
    style="direction: ltr;"
    id="navbar"
  >
    <button class="navbar-toggler" id="navbar-toggler" type="button" @click="expanding()">
      <span></span>
      <span></span>
      <span></span>
      <!-- <span :class="'navbar-toggler-icon '+toggleImage"></span> -->
      <!-- <span class="navbar-toggler-icon" v-if="$route.name!='shop'"></span>
      <i class="fas fa-bars" v-else style="color:#fff;"></i>-->
    </button>
    <a class="navbar-brand" href="/">
      <img class="logo-ecs" :src="logoImage" width="32px" alt />
    </a>
    <button class="nav-btns nav_sm_btn" @click="showsModal()">
      <img :src="cartImage" @click="showsModal()" alt="Shopping Cart" width="33px" />
      <span id="count">{{cartItemCount}}</span>
    </button>
    <div class="lang_lg">
      <LanguageDropdown class="lang"></LanguageDropdown>
    </div>
    <div class="lang_lg ml-2">
      <CurrencyChanger class="lang"></CurrencyChanger>
    </div>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul
        class="navbar-nav mx-auto mt-2 mt-lg-0 text-center"
        id="navbar-nav"
        v-if=" $i18n.locale == 'en'"
      >
        <li class="nav-item home" style="width:50px">
          <router-link to="/">
            <a class="nav-link">
              {{ $t("message.home") }}
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </li>
        <li class="nav-item shop shop_sm">
          <router-link to="/shop">
            <a class="nav-link">{{ $t("message.shopart") }}</a>
          </router-link>
        </li>
        <li class="nav-item about" style="width:50px">
          <router-link to="/about">
            <a class="nav-link">{{ $t("message.about") }}</a>
          </router-link>
        </li>
        <li class="lang_sm about">
          <LanguageDropdown class="nav-link" style="display: flex;"></LanguageDropdown>
        </li>
        <li class="lang_sm about">
          <CurrencyChanger class="nav-link" style="display: flex;"></CurrencyChanger>
        </li>
        <li class="nav-about">
          <ul class="nav-content">
            <li>
              <router-link to="/terms">{{ $t("navbar.terms") }}</router-link>
              <!-- <a href="#"></a> -->
            </li>
            <li>
              <router-link to="/privacy">{{ $t("navbar.privacy") }}</router-link>
            </li>
            <li>
              <router-link to="/refund">{{ $t("navbar.refund") }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="navbar-nav mx-auto mt-2 mt-lg-0 text-center" id="navbar-nav" v-else>
        <li class="nav-item about about_sm">
          <router-link to="/about" class="lg">
            <a class="nav-link">{{ $t("message.about") }}</a>
          </router-link>
          <router-link to="/" class="sm">
            <a class="nav-link">
              {{ $t("message.home") }}
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
        </li>

        <li class="nav-item shop shop_sm">
          <router-link to="/shop">
            <a class="nav-link">{{ $t("message.shopart") }}</a>
          </router-link>
        </li>
        <li class="nav-item home home_sm">
          <router-link to="/" class="lg">
            <a class="nav-link">
              {{ $t("message.home") }}
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <router-link to="/about" class="sm">
            <a class="nav-link">{{ $t("message.about") }}</a>
          </router-link>
        </li>
        <li class="lang_sm about">
          <LanguageDropdown class="nav-link" style="display: flex;"></LanguageDropdown>
        </li>
        <li class="lang_sm about">
          <CurrencyChanger class="nav-link" style="display: flex;"></CurrencyChanger>
        </li>
        <li class="nav-about">
          <ul class="nav-content">
            <li>
              <router-link to="/terms">{{ $t("navbar.terms") }}</router-link>
            </li>
            <li>
              <router-link to="/privacy">{{ $t("navbar.privacy") }}</router-link>
            </li>
            <li>
              <router-link to="/refund">{{ $t("navbar.refund") }}</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <button class="nav-btns nav_lg_btn" style="margin-left: 9vw;" @click="showsModal()">
      <img
        src="//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/nav_icons_bag.svg?v=8412811641524949656"
        @click="showsModal()"
        alt="Shopping Cart"
        width="33px"
      />
      <span id="count">{{cartItemCount}}</span>
    </button>
    <div>
      <transition name="modal">
        <div class="modal-mask" ref="mycart">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content" style="color: #000 !important;">
                <div class="modal-header" style="margin-top:4% !important;">
                  <h5 class="modal-title">{{ $t("message.cartname") }}</h5>
                  <button type="button" class="close mr-1" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" @click="closeModal()">
                      <svg role="presentation" viewBox="0 0 16 14">
                        <path d="M15 0L1 14m14 0L1 0" fill="none" fill-rule="evenodd" />
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="modal-timer" v-if="cartItemCount!=0">
                  <template v-if="currentLanguage =='en'">
                    Due to Limited Stock and High Demand ⌛ We can only
                    hold your order for
                  </template>
                  <template v-else>بسبب المخزون المحدود والطلب المرتفع ⌛يمكننا فقط الاحتفاظ بطلبك لـ</template>
                  <span style="font-weight:bold">{{ formattedTimeLeft }}</span>
                  <template v-if="currentLanguage =='en'">minutes...</template>
                  <template v-else>دقيقة ...</template>
                  <!--  -->
                </div>
                <div class="modal-body">
                  <p class="cart-empty" v-if="cartItemCount==0">Your cart is empty.</p>
                  <!-- -----------------------------pallalet cart----------------- -->
                  <div
                    class="row p-4 mt-2 border-bottom"
                    v-for="(item,index) in cart "
                    :key="item.id"
                  >
                    <div class="col-md-sm-4 ml-1">
                      <img :src="item.product.artistMinPalettes.img" />
                    </div>
                    <div class="col-md-sm-8 ml-3">
                      <span class="move move1">
                        <strong>{{ item.product.name }}</strong>
                      </span>
                      <!-- <h6  style="font-size:14px">{{ item.sizeTarget }}  {{item.sizeCm}} </h6> -->
                      <h6
                        class="move"
                        style="margin-top:10px"
                        v-if="currency == 'sar'"
                      >{{item.product.M_price_sar}}.00 {{ $t("currency.sar") }}</h6>
                      <h6
                        class="move"
                        style="margin-top:10px"
                        v-else
                      >{{ $t("currency.usd1") }} {{item.price}}.00</h6>
                      <v-form class="control-increse" style="width:50%;display:inline-block">
                        <v-text-field v-model=" item.quantity ">
                          <v-icon slot="append" @click="addToCart(item.product )">mdi-plus</v-icon>
                          <v-icon
                            slot="prepend"
                            @click.prevent="decreaseProduct(item.product)"
                          >mdi-minus</v-icon>
                        </v-text-field>
                      </v-form>
                    </div>
                    <div class="pro">
                      <button
                        class="ml-3 btn delete"
                        @click.prevent="clearProductFromCart(index)"
                      >{{ $t("message.remove") }}</button>
                    </div>
                  </div>
                </div>
                <div class="modal-footer modal-cart-footer" v-if="cartItemCount>0">
                  <router-link
                    style="margin: auto;color: #fff;"
                    :to="{ path: '/payment', query: { myprop: this.pallatecart }}"
                  >
                    <button
                      type="button"
                      class="btn checkout mb-6"
                      style="font-size: 18px;"
                      v-if="currency == 'sar'"
                    >
                      {{ $t("message.total") }} : {{cartTotalPriceSAR}} {{ $t("currency.sar") }}&nbsp;
                      <strong>.</strong>
                      &nbsp; {{ $t("message.checkout") }}
                    </button>
                    <button type="button" class="btn checkout mb-6" style="font-size: 18px;" v-else>
                      {{ $t("message.total") }} : {{cartTotalPrice}} {{ $t("currency.usd1") }}&nbsp;
                      <strong>.</strong>
                      &nbsp; {{ $t("message.checkout") }}
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import "jquery";
import $ from "jquery";
const TIME_LIMIT = 900;
import LanguageDropdown from "./LanguageDropdown";
import CurrencyChanger from "./CurrencyChanger";
export default {
  computed: {
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cartTotalPriceSAR() {
      return this.$store.getters.cartTotalPriceSAR;
    },
    cart() {
      return this.$store.state.cart;
    },
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    currency() {
      return this.$store.getters.currency;
    },
    timer() {
      return this.$store.getters.startTimer;
    },
    currentLanguage() {
      return this.$i18n.locale;
    },
    cartImage() {
      if (this.$route.name == "shop" && this.windowWidth < 768)
        return "//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/nav_icons_bag_white.svg?v=7005918618075802386";
      else
        return "//cdn.shopify.com/s/files/1/3000/4362/t/109/assets/nav_icons_bag.svg?v=8412811641524949656";
    },
    navbar() {
      if (this.$route.name == "shop" && this.windowWidth < 768)
        return "navbar-dark";
      else return "navbar-light";
    },
    logoImage() {
      if (this.$route.name == "shop" && this.windowWidth < 768)
        return "images/LogoSymbolWhitePNG.png";
      else return "images/LogoSymbolBlackPNG.png";
    },
    formattedTimeLeft() {
      const timeLeft = this.timeLeft;
      const minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      return `${minutes}:${seconds}`;
    },
    timeLeft() {
      return TIME_LIMIT - this.timePassed;
    }
  },
  watch: {
    $route(nv, ov) {
      if ($(".navbar-collapse").has("show")) {
        $(".navbar-collapse").removeClass("show");
      }
      if ($("#navbar-toggler").has("shop")) {
        $("#navbar-toggler").removeClass("shop");
      }
      if ($("#navbar-toggler").has("is-active")) {
        $("#navbar-toggler").removeClass("is-active");
      }
      if ($("#navbar-nav").has("active")) {
        $("#navbar-nav").removeClass("active");
      }
      this.closeModal();
      let navbar = document.getElementById("navbar");
      if (this.$route.name != "shop") {
        navbar.style.background = "";
      } else {
        navbar.style.background = "tranparent";
        $("#navbar-toggler").addClass("shop");
      }
    },
    // currentLanguage(newLang, oldLang) {
    //   //   console.log($(".spinner-content"));
    //   //   setInterval(() => {
    //   $(".spinner-content").fadeIn("1000");
    //   $(".spinner-content").fadeOut("1000");
    //   //   }, 1000);
    // },
    // currency(newCurrency, oldCurrency) {
    //   $(".spinner-content").fadeIn("1000");
    //   $(".spinner-content").fadeOut("1000");
    // },
    windowWidth(newWidth, oldWidth) {
      let navabr = document.getElementById("navbar");
      if (this.$route.name == "shop" && newWidth < 768) {
        navbar.style.backgroundColor = "transparent";
      } else {
        navbar.style.backgroundColor = "#fff";
      }
    },
    timer(newTimer, oldTimeer) {
      if (newTimer) {
        this.startTimer();
      } else {
        this.onTimesUp();
      }
    },
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
        this.clearCartItems();
        this.timePassed = 0;
        this.$store.commit("CHANGE_TIMER", false);
      }
    }
  },
  components: { LanguageDropdown, CurrencyChanger },
  data() {
    return {
      showModal: false,
      value: 1,
      pallatecart: [],
      cartcount: "",
      mycart: "",
      windowWidth: window.innerWidth,
      timePassed: 0,
      timerInterval: null
    };
  },
  mounted() {
    //       let offsetContent = $('.content').offset().top;
    // let offsetFooter = $('.footer').offset().footer;
    // $(document).scroll(function() {
    //   let y = $(this).scrollTop();
    //   if (y > offsetContent && y < offsetFooter) {
    //     $('.hidden-element').fadeIn();
    //   } else {
    //     $('.hidden-element').fadeOut();
    //   }
    // });
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };

    window.addEventListener("scroll", this.handleScroll);
    this.mycart = $(".modal-wrapper");
    // let infoUrl = window.location.href
    // let infoUrlTarget =infoUrl.split('/').slice(-1)[0]
    // $("."+infoUrlTarget).addClass('active').siblings().removeClass('active')
    // console.log("."+infoUrlTarget)

    axios
      .get("/api/getpallatecart")
      .then(res => {
        this.cartcount = res.data.palettes.length;
        this.pallatecart = res.data.palettes;
      })
      .catch(error => console.log(error.response.data));
    let self = this;

    // document.getElementById("navbarTogglerDemo03").onclick = function() {
    //   this.showNavbar();
    // };
    if (self.$route.name === "shop") {
      //   console.log("hello");
      let navabr = document.getElementById("navbar");
      //   let container = document.getElementById("hero-container");
      let width = 0.4 * window.innerWidth;
      //   if (container === null) {
      //     width = ;
      //   } else width = container.offsetHeight;
      //   console.log(width);
      window.onscroll = function() {
        // console.log(window.scrollY);
        if (window.innerWidth < 768) {
          if (window.scrollY < width) {
            navbar.style.background = "transparent";
            navbar.style.borderBottom = "none";
          } else {
            navbar.style.background = "#fff";
            navbar.style.borderBottom = "1px solid #e6e6e6";
          }
        } else {
          navbar.style.background = "#fff";
          navbar.style.borderBottom = "1px solid #e6e6e6";
        }
      };
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },

    onTimesUp() {
      clearInterval(this.timerInterval);
    },
    handleScroll(event) {
      if (this.$route.name == "shop")
        setTimeout(function() {
          var footer = document.getElementById("footer");
          var addToCart = document.getElementById("addToCartsm");
          if (window.scrollY > 5000) addToCart.style.display = "none";
          else addToCart.style.display = "";
        }, 50);
    },
    closeModal() {
      let mycarts = this.$refs.mycart;
      $(mycarts).css({
        left: "100%",
        backgroundColor: "transparent"
      });
      $(".modal-cart-footer").removeClass("animation", "i 0.5s ");
    },
    showsModal() {
      let mycarts = this.$refs.mycart;
      $(mycarts).css("left", 0);
      setTimeout(() => {
        $(mycarts).css("backgroundColor", "rgba(0,0,0,.5)");
      }, 200);
      $(".modal-cart-footer").addClass("animation", "i 0.5s ");
    },
    expanding() {
      //   this.expand = !this.expand;
      //   $(".navbar-collapse").toggleClass("show");
      $("#navbarTogglerDemo03").addClass("show");
      $(".navbar-toggler").toggleClass("is-active");
      $("#navbarTogglerDemo03 #navbar-nav").toggleClass("active");
      let navbar = document.getElementById("navbar");
      let navbarNav = document.getElementById("navbar-nav");
      let navbarToggle = document.getElementById("navbarTogglerDemo03");

      if (window.innerWidth < 768 && this.$route.name == "shop") {
        // console.log(navbarNav.classList.value.indexOf("active"));
        if (navbarNav.classList.value.indexOf("active") != -1) {
          navbar.style.background = "#000";
          //   document.getElementById("navbar-nav").style.background = "#000";
          //   document.getElementById("navbar-nav").style.color = "#fff !important";
        } else {
          let width = 0.4 * window.innerWidth;
          if (window.scrollY < width) {
            navbar.style.background = "transparent";
            navbar.style.borderBottom = "none";
          } else {
            navbar.style.background = "#000";
          }
          //   navbar.style.background = "transparent";
        }
      } else {
        navbar.style.background = "#fff";
        // document.getElementById("navbar-nav").style.background = "#fff";
        // document.getElementById("navbar-nav").style.color = "#000";
      }
    },
    decreaseProduct(product) {
      this.$store.dispatch("decreaseProduct", {
        product,
        quantity: 1
      });
    },
    addToCart(product) {
      this.$store.dispatch("addProductToCart", {
        product,
        quantity: 1
      });
    },
    clearProductFromCart(index) {
      this.$store.dispatch("deleteCartItem", index);
    },
    clearCartItems() {
      this.$store.dispatch("clearCartItems");
    },

    plus($id) {
      this.value += 1;
    },
    minus() {
      this.value -= 1;
      if (this.value <= 0) {
        this.value = 0;
      }
    },
    remove($id) {
      axios
        .post("/api/removefromcart?id=" + $id)
        .then(res => {
          this.pallatecart.splice(res.data.paletteCart, 1);
          $("#count")[0].innerText--;
        })
        .catch(error => console.log(error.response.data));
    }
  }
};
</script>

<style>
.modal-timer {
  padding: 5%;
  border-bottom: 1px solid #dee2e6;
}
.modal-mask {
  position: fixed;
  top: 0;
  height: 100vh;
  left: 100%;
  width: 100%;
  display: none;

  display: block;
  transition: left 0.8s, backgroundColor 0.2s;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  float: right;
  position: relative;

  transition: all 1s;
  /* top: 67px; */
  /* left: 15px; */
}

.modal-content {
  top: -26px !important;
  overflow: scroll;
  width: 436px;
  min-height: 105vh;
  border-radius: 0;
  left: 4%;
  background: #f2efeb;
}
@media (min-width: 768px) {
  .modal-content {
    top: -95px;
  }
}
@media (min-width: 991px) {
  .modal-content {
    /* min-height: 860px; */
  }
  .navbar {
    background-color: transparent;
  }
  /* .navbar-nav {
    margin: auto 0 !important;
    margin-left: 33% !important;
  } */
}
.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  max-height: 55vh;
  flex: 1 1 auto;
  overflow: auto;
  padding: 1rem;
}
/* .modal-body{
    position: absolute;
    width: 400px;
        overflow: scroll;
} */
.modal-body img {
  width: 80px;
  height: 80px;
}

.pro {
  width: 124%;
}
.pro button {
  margin-top: -37px;
}

/* @media(max-width:996px){

    li.nav-item{
        width: 67px;
    }
} */
/* .nav-btns{
    margin-left: 27px;
} */

.delete {
  width: 90px !important;
  float: right;
}
.navbar-brand img {
  width: 42px;
}
.v-text-field > .v-input__control > .v-input__slot:before {
  border-style: none !important;
}
.v-text-field > .v-input__control > .v-input__slot:after {
  border: none !important;
}
.theme--light.v-input {
  border: 1px solid #cfcfcf;
  padding: 8px 10px 1px;
}
.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: inherit;
  border-style: dashed !important;
  border-width: 0 0 !important;
}
.v-text-field__details {
  display: none;
}
.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot input {
  /* text-align: center; */
  margin-left: -2px;
}
.control-increse {
  transform: scale(0.8);
}
.move {
  position: relative;
  font-size: 11px;
  color: #6a6a6a;
  left: 12px;
}
.move1 {
  color: #0074d9;
  font-size: 12px;
}
.delete {
  font-size: 10px;
  position: relative;
  margin: 8px 0;
  padding: 0;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #6a6a6a;
  border: 0;
  background: none;
  width: 50px !important;
}
.delete:before {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  content: "";
  transition: transform 0.2s ease-in-out;
  transform: scale(1);
  transform-origin: left center;
  background: currentColor;
}
.delete:hover:before {
  transform: scaleX(0);
}
.modal-footer {
  /* transform: translateY(-95px); */
  background: #f2efeb;
}
.checkout {
  font-size: 12px !important;
  /* display: flex; */
  padding: 12px 100px;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #000;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 23px;
}
.checkout:hover {
  background: white;
  color: black;
  border: 2px solid black;
}
svg {
  stroke-width: 1.5px;
  stroke: #000;
  width: 15px;
  height: 15px;
}
.close {
  color: black !important;
}
.cart-empty {
  position: absolute;
  font-size: 15px;
  top: 50%;
  left: 50%;
  width: auto;
  transform: translate(-50%, -50%);
  animation: i 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.modal-title,
.cart-empty {
  text-align: center;
  letter-spacing: 0.2em;
  font-weight: 300;
  text-transform: uppercase;
}
@keyframes i {
  0% {
    transform: translate(-50%, calc(-50% + 35px));
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
}
.navbar-nav .nav-about {
  width: 100%;
  height: 100%;
  display: none;
}
.navbar-nav .nav-about .nav-content {
  width: 100%;
  height: 100%;
  background: #000;
  list-style-type: none;
  padding-left: 0;
}
.navbar-nav .nav-about .nav-content li {
  padding: 0.5rem 1rem;
  color: #fff;
  text-align: center;
}
.navbar-nav .nav-about .nav-content a {
  color: #545353 !important;
}
.lang:hover {
  border-bottom: 2px solid rgb(27, 26, 26);
}
.sm {
  display: none;
}
.navbar-toggler {
  display: none;
}
@media (max-width: 768px) {
  .lg {
    display: none;
  }
  .sm {
    display: block;
  }
}

@media (max-width: 767px) {
  .navbar-brand {
    position: absolute;
    left: 46%;
    top: 2px;
  }
  .nav_sm_btn {
    position: absolute;
    right: 1%;
    top: -4px;
  }
  .navbar-nav .nav-about {
    display: block;
  }
  #navbar {
    height: 8vh;
  }
  .navbar-toggler {
    display: block !important;
    border: none;
  }
}
@media (min-width: 200px) {
  .navbar {
    position: fixed !important;
    top: 0;
    width: 100%;
  }
}
@media (max-width: 299px) {
  .modal-content {
    width: 240px;
    left: 2%;
  }
}
@media (min-width: 300px) and (max-width: 316px) {
  .modal-content {
    width: 280px;
    /* min-height: 511px; */
  }
  .modal-body {
    max-height: 60vh;
  }
}
@media (min-width: 317px) and (max-width: 336px) {
  .modal-content {
    width: 300px;
    /* min-height: 511px; */
  }
  .modal-body {
    max-height: 55vh;
  }
}
@media (min-width: 337px) and (max-width: 365px) {
  .modal-content {
    width: 320px;
    /* min-height: 511px; */
  }
  .modal-body {
    max-height: 60vh;
  }
}
@media (min-width: 366px) and (max-width: 396px) {
  .modal-content {
    width: 350px;
    /* min-height: 511px; */
  }
  .modal-body {
    max-height: 65vh;
  }
}
@media (min-width: 397px) and (max-width: 440px) {
  .modal-content {
    width: 383px;
    /* min-height: 511px; */
  }
  .modal-body {
    max-height: 65vh;
  }
}
@media (min-width: 441px) and (max-width: 457px) {
  .modal-content {
    width: 425px;
    /* min-height: 511px; */
  }
  .modal-body {
    max-height: 60vh;
  }
}
@media (min-width: 458px) and (max-width: 767px) {
  .modal-content {
    min-height: 624px;
  }
}
@media (max-width: 767px) {
  .checkout {
    padding: 12px 15vw !important;
  }
}
.lang_sm {
  display: none;
}
.nav_sm_btn {
  display: none;
}
@media (max-width: 767px) {
  .lang_sm {
    display: block;
  }

  .lang_lg {
    display: none;
  }
  .nav_lg_btn {
    display: none;
  }
  .nav_sm_btn {
    display: block;
  }
  .navbar .nav-link {
    color: #fff !important;
  }
  .lang_sm .nav-link {
    color: #545353 !important;
  }
  .navbar .navbar-nav {
    padding-left: 0 !important;
    width: 102%;
    left: 0;
    height: 100vh;
    overflow-y: scroll;
    position: absolute;
    transform: translateY(-110%);
    opacity: 0;
    transition: all 0.4s;
  }
  .navbar .navbar-nav.active {
    transform: translateY(0);
    opacity: 1;
  }
  .navbar li.nav-item,
  .navbar .lang_sm {
    width: 100% !important;
    border: none;
    background: #000;
  }
  .navbar li.nav-item {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.87), #000);
  }
  /* .navbar .lang_sm {
    border: 1px solid;
  } */
  .navbar .lang_sm div {
    justify-content: center;
  }

  /* .navbar {
    background-color: transparent;
  } */
}
.lang_lg {
  color: #000;
}
.navbar-nav {
  background-color: #fff;
  display: flex;
  align-items: center;
}
.control-increse input {
  border: none;
}
.navbar {
  border-bottom: none;
  transition: all 0.4s;
}
.light-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}
.dark-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}
.navbar-light {
  background: #fff !important;
}
/* @media (min-width: 768px) {
  .navbar-dark {
    background: #fff !important;
  }
}
@media (max-width: 768px) {
  .navbar-dark {
    background: transparent !important;
  }
} */
.navbar-toggler {
}
.navbar-toggler {
  position: relative;
  display: none;
  width: 30px;
  height: 18px;
  cursor: pointer;
}
.navbar-toggler,
.navbar-toggler span {
  transition: 0.5s ease-in-out;
  transform: rotate(0deg);
}
.navbar-toggler span {
  position: absolute;
  left: 0;
  display: block;
  width: 100%;
  height: 2px;
  opacity: 1;
  border-radius: 1px;
  background-color: #000;
}
.navbar-toggler span:first-child {
  top: 0;
}
.navbar-toggler span:nth-child(2) {
  top: 8px;
}
.navbar-toggler span:nth-child(3) {
  top: 16px;
}
.navbar-toggler.is-active span:first-child {
  top: 8px;
  transform: rotate(135deg);
}
.navbar-toggler.is-active span:nth-child(2) {
  left: -60px;
  opacity: 0;
}
.navbar-toggler.is-active span:nth-child(3) {
  top: 8px;
  transform: rotate(-135deg);
}
.navbar-toggler.shop span {
  background-color: #fff;
}
</style>
