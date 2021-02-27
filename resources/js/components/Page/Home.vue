<template>
  <div>
    <div class="spinner-content">
      <!-- <div class="spinner"></div> -->
      <img src="/images/Animatedlogogifspeed.gif" />
    </div>

    <appheader class="myhome"></appheader>
    <appslider class="myhome"></appslider>
    <shopvideo class="myhome" :is-home="true"></shopvideo>
    <appvideo class="myhome"></appvideo>
  </div>
</template>

<script>
import $ from "jquery";

$(function() {
  setInterval(() => {
    $(".spinner-content").fadeOut("10000");
  }, 10000);
});

import appheader from "../pagecomponents/Header";
import appslider from "../pagecomponents/Slider";
import appvideo from "../pagecomponents/HomeVideo";
import shopvideo from "../pagecomponents/ShopVideo";
export default {
  components: { appslider, appvideo, appheader, shopvideo },
  //   created() {
  //     setInterval(() => {
  //       $(".spinner-content").fadeOut("3000");
  //     }, 3000);
  //   },
  mounted() {
    $(".modal-mask").css("display", "block");
    // setInterval(() => {
    //   $(".spinner-content").fadeOut("3000");
    // }, 3000);
  }
};
</script>

<style >
/* .spinner {
  width: 40px;
  height: 40px;
  background-color: wheat;
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}
.spinner-content {
  background: black;
  width: 100%;
  position: fixed;
  height: 100vh;
  z-index: 9999999999;
  display: flex;
  justify-content: center;
  align-items: center;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
} */

.myhome {
  animation: animate_website 1s alternate;
}
@keyframes animate_website {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
