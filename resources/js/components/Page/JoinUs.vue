<template>
  <div>
    <div v-if=" message.length >0 " class="alert alert-info text-center">
      <h1>{{message}}</h1>
    </div>
    <v-form @submit.prevent="send" class="form" v-if="$i18n.locale == 'en'">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.name"
              label="Your Name"
              required
              clearable
              outlined
              style="border:none"
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.email"
              label="E-mail"
              required
              clearable
              outlined
              style="border:none"
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="form.phone"
              label="Your Phone Number"
              required
              clearable
              outlined
              style="border:none"
            ></v-text-field>
            <span class="red--text" v-if="errors.phone">{{errors.phone[0]}}</span>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="form.socialLink"
              label="Your Social Link"
              required
              clearable
              outlined
              style="border:none"
            ></v-text-field>
            <span class="red--text" v-if="errors.socialLink">{{errors.socialLink[0]}}</span>
          </v-col>
        </v-row>
        <v-btn color="#252524" class="ml-2 mb-6" style="color:#fff;float:left" type="submit">Send</v-btn>
      </v-container>
    </v-form>
    <v-form @submit.prevent="send" class="form" v-else>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.name"
              label="أسمك"
              required
              clearable
              outlined
              style="border:none"
              dir="rtl"
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="form.email"
              label="بريدك اﻷلكتروني"
              clearable
              required
              outlined
              style="border:none"
              dir="rtl"
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="form.phone"
              label="رقم الموبايل الخاص بك"
              required
              clearable
              outlined
              style="border:none"
              dir="rtl"
            ></v-text-field>
            <span class="red--text" v-if="errors.phone">{{errors.phone[0]}}</span>
          </v-col>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="form.socialLink"
              label="رابط التواصل الاجتماعي"
              required
              clearable
              outlined
              style="border:none"
              dir="rtl"
            ></v-text-field>
            <span class="red--text" v-if="errors.socialLink">{{errors.socialLink[0]}}</span>
          </v-col>
        </v-row>
        <v-btn
          color="#252524"
          class="mr-2 mb-6"
          style="color:#fff;float:right"
          type="submit"
        >انضم الينا</v-btn>
        <div style="clear:both"></div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: { phone: "", name: "", email: "", socialLink: "" },
    errors: {},
    message: "",
    loading: false
  }),
  mounted() {
    $(".modal-mask").css("display", "block");
  },
  methods: {
    send() {
      axios
        .post("/api/artist-request", this.form)
        .then(res => {
          this.message = "Successful";
          this.form.phone = "";
          this.form.name = "";
          this.form.email = "";
          this.form.socialLink = "";
          this.errors = "";
        })
        .catch(error => (this.errors = error.response.data.errors));
    }
  }
};
</script>

<style scoped>
.label {
  left: 90%;
}

/* .v-btn:not(.v-btn--round).v-size--default {
  font-size: 16px !important;
  font-weight: bold !important;
  display: inline-block !important;
  padding: 20px 38px !important;
  cursor: pointer !important;
  transition: all 0.4s ease-out !important;
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  color: #fff !important;
  border: none !important;
  background-color: #000 !important;
  height: auto !important;
  border-radius: 0 !important;
} */
.form {
  width: 50%;
  margin: auto;
}
@media (max-width: 767px) {
  .form {
    width: 100% !important;
  }
}
</style>
