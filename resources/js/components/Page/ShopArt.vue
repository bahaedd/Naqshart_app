<template>
  <div>
    <div class="spinner-content">
      <!-- <div class="spinner"></div> -->
      <img src="/images/Animatedlogogifspeed.gif" />
    </div>
    <shopHeader></shopHeader>
    <appslider></appslider>
  </div>
</template>

<script>
import shopHeader from "../pagecomponents/ShopHeader";
import appslider from "../pagecomponents/Slider";

export default {
  components: { shopHeader, appslider },
  mounted() {
    $(".modal-mask").css("display", "block");
  }
};
</script>

<style>
</style>
