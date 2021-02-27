<template>
  <section class="container">
    <header class="mb-4 mt-5 mb-5" v-if="gifs!=null&&gifs.gif1">
      <!-- <div class="overlay"></div> -->
      <!-- <div class="container" style="max-width:960px;"> -->
      <img :src="gifs.gif1" id="gif1" v-if="gifs!=null" />
      <!-- <video
        playsinline="playsinline"
        :src="gifs.gif1"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        id="gif1"
        v-if="gifs!=null"
      >

      </video>-->
      <!-- <source :src="gif1" type="video/mp4" /> -->
      <!-- <source :src="gif1" type="video/webm" /> -->
      <!-- <source :src="gif1" type="video/mpeg" /> -->
      <!-- </div> -->
    </header>
    <div class="product-detail-text" v-if="gifs!=null&&gifs.gif1">
      <h3 class="title" v-if="currentLanguage=='en'">{{gifs.header_gif1}}</h3>
      <h3 class="title" v-else>{{gifs.header_ar_gif1}}</h3>
      <p class="text" v-if="currentLanguage=='en'">{{gifs.content_gif1}}</p>
      <p class="text" v-else>{{gifs.content_ar_gif1}}</p>
    </div>
    <header class="mb-4 mt-5 mb-5" v-if="!isHome&&gifs!=null&&gifs.gif2">
      <!-- <div class="container" style="max-width:960px;"> -->

      <!-- <div class="overlay"></div> -->
      <img :src="gifs.gif2" id="gif2" v-if="gifs!=null" />
      <!-- <video
        playsinline="playsinline"
        :src="gifs.gif2"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        id="gif2"
        v-if="gifs!=null"
      ></video>-->
      <!-- </div> -->
      <!-- <source :src="gif2" type="video/mp4" /> -->
      <!-- <source :src="gif2" type="video/webm" /> -->
      <!-- <source :src="gif2" type="video/mpeg" /> -->
    </header>
    <!-- <div class="product-detail-text" v-if="gifs!=null">
      <h3 class="title" v-if="currentLanguage=='en'">{{gifs.header_gif2}}</h3>
      <h3 class="title" v-else>{{gifs.header_ar_gif2}}</h3>
      <p class="text" v-if="currentLanguage=='en'">{{gifs.content_gif2}}</p>
      <p class="text" v-else>{{gifs.content_ar_gif2}}</p>
    </div>-->
  </section>
</template>

<script>
export default {
  props: {
    isHome: {
      type: Boolean,
      default: false
      //   required: true
    }
  },
  mounted() {
    let route = this.isHome ? "/api/home-gifs" : "/api/gifs";

    axios.get(route).then(response => {
      //   console.log(response);
      this.gifs = response.data.gifs;
    });
  },
  //   props: {
  //     palette: {
  //       required: true,
  //       type: Object
  //     }
  //   },
  data() {
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
    currentLanguage() {
      return this.$i18n.locale;
    }
    // gif1() {
    //   return location.origin + "/" + this.gifs.gif1;
    // },
    // gif2() {
    //   return location.origin + "/" + this.gifs.gif2;
    // }
  }
};
</script>

<style scoped>
.product-detail-text {
  margin: auto;
  text-align: center;
}
.product-detail-text .title {
  font-size: 40px;
  margin: 0 0 20px;
  font-weight: bold;
}
.product-detail-text .text {
  font-size: 22px;
  margin: 0;
}
video {
  display: block !important;
}
#gif1,
#gif2 {
  width: 100%;
  /* height: 100%; */
}
</style>
