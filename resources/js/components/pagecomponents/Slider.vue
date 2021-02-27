<template>
  <div class="mt-5">
    <div class="container-fluid">
      <h2 class="home-products-slider__title section-title">
        <span>{{ $t("message.newrelease") }}</span>
        <span class="sTitle">{{ $t("message.newreleaseheader") }}</span>
      </h2>
      <div class="swiper-container mt-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="data in sliderPalettes" :key="data.id">
            <div class="product-grid-item">
              <div class="product-grid-item__image">
                <router-link
                  :to="{ path: '/shop', query: { mydata: data.id }}"
                  class="product-grid-item__imagewrapper"
                  data-product-handle="son-this-is-the-universe"
                  data-product-quantity="48"
                >
                  <img
                    class="front"
                    :src="data.artistMinPalettes.img?data.artistMinPalettes.img:'ffff'"
                    style="height:100%"
                  />
                  <img
                    class="back"
                    :src="data.extraimg?data.extraimg.img:'https://previews.123rf.com/images/eyematrix/eyematrix1712/eyematrix171200014/91720468-used-artists-paint-brushes-different-colors-on-palette-background.jpg'"
                    style="height:100%"
                  />
                </router-link>
                <div class="product-grid-item__variants">
                  <span>Size</span>
                  <div class="product-grid-item__variants--content">
                    <a href="#" data-cart-add="32583351238759" class="soldout">L</a>
                    <a href="#" data-cart-add="32583351337063" class="soldout">M</a>
                    <a href="#" data-cart-add="32583351402599" class>S</a>
                  </div>
                </div>
                <!-- <div class="product-grid-item__tags">
                            <div class="cms-special-description">
                                <span class="cms-special-label color-7">{{ $t("message.newreleaseheader") }}</span>
                                <p>This artwork was added recently (but will likely be sold out soon)</p>
                            </div>
                </div>-->
              </div>
              <div class="product-grid-item__info">
                <div class="product-grid-item__title">
                  <h3 class="product-grid-item__name">
                    <a
                      data-product-handle="son-this-is-the-universe"
                      data-product-quantity="48"
                    >{{data.name}}</a>
                  </h3>
                  <span
                    class="product-grid-item__price"
                    v-if="currency == 'sar'"
                  >{{data.M_price_sar}} {{ $t("currency.sar") }}</span>
                  <span
                    class="product-grid-item__price"
                    v-else
                  >{{ $t("currency.usd1") }} {{data.M_price}}</span>
                </div>
                <span class="product-grid-item__qty">
                  <span class="prints-times text-success">{{data.palette_copies}} /</span>
                  <span>{{data.avalible_copies}}&nbsp;{{$t("message.left") }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-scrollbar" style="display:block!important;"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderPalettes: []
      //   image_hover: ""
    };
  },
  computed: {
    currency() {
      return this.$store.getters.currency;
    }
  },
  created() {
    axios
      .get("/api/palettes")
      .then(response => {
        // this.artists = response.data.artists;
        this.sliderPalettes = response.data.palettesSlider;
      })
      .catch(error => console.log(error.response.data));
  },
  mounted() {
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
        resize: function() {
          for (let index = 0; index < this.slides.length; index++) {
            let element = this.slides[index];
            element.style.height = element.style.width;
          }
          //   console.log(this.slides[0].style.width);
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
        dragSize: "auto"
        // hide: true
      }
    });
    let self = this;
    setTimeout(function() {
      swiper.updateSize();
      swiper.update();
    }, 3000);

    // swiper.scrollbar.updateSize("auto");
  }
};
</script>

<style scoped>
.swiper-container {
  margin-bottom: 50px;
  height: 85vh !important;
}
.swiper-pagination {
  position: relative;
  bottom: 20px;
}
@media (max-width: 767px) {
  .product-grid-item__title {
    font-size: 16px;
  }
  /* .product-grid-item .product-grid-item__image .product-grid-item__imagewrapper{
        min-height: 200px;
    } */
}
.swiper-pagination[data-v-40f21cb0] {
  margin-bottom: 11px;
}
@media (min-width: 760px) and (max-width: 1019px) {
  .swiper-container {
    height: 65vw !important;
  }
}
@media (min-width: 1020px) {
  .swiper-container {
    height: 45vw !important;
  }
}
@media (max-width: 759px) and (min-width: 500px) {
  .swiper-container {
    height: 100vw !important;
  }
}
@media (min-width: 320px) and (max-width: 499px) {
  .swiper-container {
    height: 110vw !important;
  }
}
/* .product-grid-item__image {
  height: 100% !important;
} */
/* @media (max-width: 639px) and (min-width: 500px) {
  .swiper-wrapper {
    height: 95vh !important;
  }
  .product-grid-item {
    height: 80vh !important;
  }
} */

/* .swiper-container {
  margin-bottom: 2% !important;
}
.product-grid-item__imagewrapper {
  height: 100% !important;
} */
</style>
