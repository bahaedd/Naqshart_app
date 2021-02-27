<template>
  <div>
    <main v-if="$i18n.locale == 'en'">
      <div class="page-width">
        <div class="grid">
          <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
            <div class="section-header text-center" style="margin-top: 20% !important;">
              <h1 class="text-left">Refund Policy</h1>
            </div>

            <div class="rte">
              <meta charset="utf-8" />
              <h2>RETURNS & REFUNDS</h2>
              <p>We package every order with extra care, but accidents happen. If your order gets damaged in transit, please email a photo of the damaged item and a description of the damage to info@naqshart.com We’ll ask that you return the damaged item and we’ll process a replacement item immediately.</p>

              <h2>How long does it take for me to receive my fee or new product?</h2>
              <p>We aim to send a replacement product within 24 hours after the resend has been approved, the same goes for refunds.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <main class="text-right" v-else>
      <div class="page-width">
        <div class="grid">
          <div
            class="grid__item medium-up - خمسة أسداس متوسطة للأعلى - ضغط بمقدار واحد إلى اثني عشر"
          >
            <div class="section-header text-center" style="margin-top: 20% !important;">
              <h1 class="text-right">سياسة رد الأموال</h1>
            </div>

            <div class="rte">
              <meta charset="utf-8" />
              <h2>سياسة الإرجاع:</h2>
              <p>تتع ّهد نقش بحزم ك ّل طلبية على حدة، بأقصى حذر وانتباه. لكن، إذا تضررت طلبيتك أو تعرضت للتلف خلال الشحن، يرجى مراسلتنا إلكتروني ًا على العنوان info@naqshart.com إرسال صورة للبضاعة التالفة، مع وصف الأضرار التي لحقت بها. سنطلب منك إرجاع البضائع التالفة، وسنبدأ فور ًا بتجهيز البضائع البديلة لإرسالها إليك.</p>
              <h2>ما هي المدة المتوقعة لاستلام الرسوم أو المنتج الجديد؟</h2>
              <p>نهدف إلى إرسال منتج بديل في غضون 48 ساعة بعد الموافقة على إعادة الإرسال، وينطبق الشيء نفسه على المبالغ المستردة.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  mounted() {
    $(".modal-mask").css("display", "block");
  }
};
</script>

<style>
</style>
