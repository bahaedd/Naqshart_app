<template>
  <!-- <div class="text-center" style="padding-left: 15% !important;"> -->
  <!-- <div class="text-center" :style="'padding-left:'+padding+' !important;'"> -->
  <div class="text-center">
    <!-- <div class="text-center" style="padding-left: 23% !important;"> -->
    <span @click="setCurrency" v-if="currency == 'sar'">{{ $t("currency.usd") }}</span>
    <span @click="setCurrency" v-else>{{ $t("currency.sar") }}</span>
  </div>
</template>
    <script>
import $ from "jquery";
export default {
  methods: {
    setCurrency() {
      //   setInterval(() => {
      //     $(".spinner-content").fadeOut("1000");
      //   }, 1000);
      //   if (this.clientWidth < 900) this.padding = "23%";
      //   else {
      //     this.padding = "0px";
      //   }
      $(".spinner-content").fadeIn("3000");
      $(".spinner-content").fadeOut("3000");
      var self = this;
      setTimeout(function() {
        if (self.currency == "usd") {
          self.$store.commit("SET_CORRUNCY", "sar");
        } else {
          self.$store.commit("SET_CORRUNCY", "usd");
        }
      }, 500);
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      if (this.$i18n.locale == "ar") {
        if (newRoute.name != "shop") this.$vuetify.rtl = true;
        else this.$vuetify.rtl = false;
      }
    }
  },
  data() {
    return {
      padding: "0px"
    };
  },
  computed: {
    clientWidth() {
      var w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      return w;
    },
    currency() {
      return this.$store.getters.currency;
    }
  }
};
</script>
 <style scoped>
span {
  cursor: pointer;
}
</style>

