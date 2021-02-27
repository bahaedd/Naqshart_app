<template>
  <!-- <div class="text-center" style="padding-left: 15% !important;"> -->
  <!-- <div class="text-center" :style="'padding-left:'+padding+' !important;'"> -->
  <div class="text-center">
    <span @click="setLocale" v-if="$i18n.locale == 'en'">العربية</span>
    <span @click="setLocale" class="en" v-else>English</span>
  </div>
</template>
    <script>
import $ from "jquery";
export default {
  methods: {
    setLocale() {
      //   if (this.clientWidth < 900) this.padding = "15%";
      //   else {
      //     this.padding = "0px";
      //   }
      $(".spinner-content").fadeIn("3000");
      $(".spinner-content").fadeOut("3000");
      var self = this;
      setTimeout(function() {
        if (self.$i18n.locale == "en") {
          self.$i18n.locale = "ar";
          if (self.$route.name == "about") self.$vuetify.rtl = true;
          else self.$vuetify.rtl = false;
        } else {
          self.$i18n.locale = "en";
          self.$vuetify.rtl = false;
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
    }
  }
};
</script>
 <style scoped>
span {
  cursor: pointer;
}
</style>

