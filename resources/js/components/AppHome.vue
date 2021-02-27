<template>
  <v-app>
    <div class="spinner-content">
      <!-- <div class="spinner"></div> -->
      <img src="/images/Animatedlogogifspeed.gif" />
    </div>
    <appnavbar></appnavbar>
    <router-view></router-view>
    <appfooter></appfooter>
  </v-app>
</template>

<script>
import appnavbar from "./Layout/Navbar";

import appfooter from "./Layout/Footer";
import "jquery";
export default {
  created() {
    let cart = localStorage.getItem("cart");
    if (cart != null) {
      this.$store.commit("SET_CART", JSON.parse(cart));
    }
  },

  components: { appfooter, appnavbar }
};
</script>

<style>
@media (max-width: 768px) {
  html,
  body {
    overflow-x: hidden !important;
  }
}
.spinner {
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
}
</style>
