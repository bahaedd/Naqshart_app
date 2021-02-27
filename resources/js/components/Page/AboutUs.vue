<template>
  <section style="min-height:519px">
    <div class="spinner-content">
      <!-- <div class="spinner"></div> -->
      <img src="/images/Animatedlogogifspeed.gif" />
    </div>

    <div class="mission myhome">
      <h3 class="title" @click="mission = !mission" v-if="!mission">
        <span>{{ $t("message.ourmission") }}</span>
        <span class="plus" v-if="mission==false">+</span>
      </h3>
      <h3 class="title" @click="mission = !mission" v-else>
        <span>{{ $t("message.ourmission") }}</span>
        <span class="plus" v-if="mission==true">-</span>
      </h3>
      <div class="row mt-5 text-center" v-if="mission">
        <div class="col-md-9" v-if=" $i18n.locale == 'en'">
          <p>{{ about.body1_en}}</p>
          <!-- <p>{{ about.body2_en}}&nbsp;</p> -->
        </div>
        <div class="col-md-9" v-if=" $i18n.locale == 'ar'">
          <p>{{ about.body1_ar}}</p>
          <!-- <p>{{ about.body2_ar}}&nbsp;</p> -->
        </div>
        <div class="col-md-3">
          <img :src="about.body_image" alt />
        </div>

        <!-- <template style="direction:rtl">
          <div class="col-md-8" v-if=" $i18n.locale == 'ar'">
            <p>{{ about.body1_ar}}</p>
            <p>{{ about.body2_ar}}&nbsp;</p>
          </div>
          <div class="col-md-3" v-if=" $i18n.locale == 'ar'">
            <img :src="about.body_image" alt class="ar" />
          </div>
        </template>-->
      </div>
    </div>

    <div class="artists mt-2">
      <h3 class="title" @click="artist = !artist" v-if="!artist">
        <span>{{ $t("message.artists") }}</span>
        <span class="plus" v-if="artist==false">+</span>
      </h3>
      <h3 class="title" @click="artist = !artist" v-else>
        {{ $t("message.artists") }}
        <span class="false" v-if="artist==true">-</span>
      </h3>
      <div class="mt-5 text-center" v-if="artist">
        <div class="row">
          <div class="col-sm-12">
            <!-- <p class="text-center">{{ $t("message.artisttext") }}</p> -->
            <p class="text-center" v-if=" $i18n.locale == 'en'">{{ about.body2_en}}</p>
            <p class="text-center" v-else>{{ about.body2_ar}}</p>
          </div>
          <div class="col-sm-12">
            <div class="row justify-content-sm-center">
              <div
                class="col-sm-4 col-md-3 col-lg-2"
                v-for="artist in aboutArtists"
                :key="artist.id"
              >
                <div class="about-team__people">
                  <a :href="artist.sociallink" style="color:#000" target="_blank">
                    <img
                      :src="artist.image_ar"
                      alt="artist"
                      style="border-radius:28%;width:100px;height:100px"
                    />
                    <h4
                      class="about-team__name mt-3"
                      v-if=" $i18n.locale == 'en'"
                    >{{artist.name_en}}</h4>
                    <h4 class="about-team__name mt-3" v-else>{{artist.name_ar}}</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="support mt-2">
      <h3 class="title" @click="support = !support" v-if="!support">
        <span>{{ $t("message.support") }}</span>
        <span class="plus" v-if="support==false">+</span>
      </h3>
      <h3 class="title" @click="support = !support" v-else>
        <span>{{ $t("message.support") }}</span>
        <span class="plus" v-if="support==true">-</span>
      </h3>
      <div class="mt-5" v-if="support">
        <p class="text-center" v-if=" $i18n.locale == 'en'">{{ text_contact.text_en }}</p>
        <p class="text-center" v-else>{{ text_contact.text_ar }}</p>
        <div class="row justify-content-md-center support_div text-center">
          <div class="col-md-2 content">
            <h3 class="mt-4">{{ $t("message.contact") }}</h3>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-sm-12" v-if="support">
            <v-form class="form" @submit.prevent="send" v-if=" $i18n.locale == 'en'">
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.name"
                      label="First name"
                      outlined
                      style="border:none"
                      required
                    ></v-text-field>
                    <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.email"
                      label="E-mail"
                      outlined
                      style="border:none"
                      required
                    ></v-text-field>
                    <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="form.phone"
                      label="Phone Number"
                      outlined
                      style="border:none"
                      required
                    ></v-text-field>
                    <span class="red--text" v-if="errors.phone">{{errors.phone[0]}}</span>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-textarea
                      v-model="form.message"
                      outlined
                      name="input-7-4"
                      style="border:none;"
                      label="Message"
                    ></v-textarea>
                    <span class="red--text" v-if="errors.message">{{errors.message[0]}}</span>
                  </v-col>
                </v-row>
                <v-btn color="#252524" class="ml-5" style="color:#fff" type="submit">Send</v-btn>
              </v-container>
            </v-form>
            <v-form class="form" @submit.prevent="send" v-else>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.name"
                      label=" اﻷسم"
                      outlined
                      style="border:none"
                      required
                      dir="rtl"
                    ></v-text-field>
                    <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="form.email"
                      label="البريد اﻷلكتروني"
                      outlined
                      style="border:none"
                      required
                      dir="rtl"
                    ></v-text-field>
                    <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="form.phone"
                      label="رقم التليفون الخاص بك"
                      outlined
                      style="border:none"
                      required
                      dir="rtl"
                    ></v-text-field>
                    <span class="red--text" v-if="errors.phone">{{errors.phone[0]}}</span>
                  </v-col>
                  <v-col cols="12" md="12">
                    <v-textarea
                      v-model="form.message"
                      outlined
                      name="input-7-4"
                      style="border:none;"
                      label="اكتب رسالتك"
                      dir="rtl"
                    ></v-textarea>
                    <span class="red--text" v-if="errors.message">{{errors.message[0]}}</span>
                  </v-col>
                </v-row>
                <v-btn
                  color="#252524"
                  style="float:right;color:#fff"
                  type="submit"
                  class="mr-5"
                >ارسال</v-btn>
                <div style="clear:both"></div>
              </v-container>
            </v-form>
          </div>
        </div>
      </div>
    </div>
    <div class="joinus mt-2 mb-2">
      <h3 class="title" @click="joinus = !joinus" v-if="!joinus">
        <span>{{ $t("message.SUBSCRIBE") }}</span>
        <span class="plus" v-if="joinus==false">+</span>
      </h3>
      <h3 class="title" @click="joinus = !joinus" v-else>
        {{ $t("message.SUBSCRIBE") }}
        <span class="false" v-if="joinus==true">-</span>
      </h3>
      <div class="mt-5 text-center" v-if="joinus">
        <div class="row justify-content-sm-center">
          <div class="col-sm-12">
            <p class="text-center" v-if="$i18n.locale == 'en'">{{ jointext.text_en}}</p>
            <p class="text-center" v-else>{{ jointext.text_ar}}</p>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <app-Joinus></app-Joinus>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import $ from "jquery";
$(function() {
  setInterval(() => {
    $(".spinner-content").fadeOut("6000");
  }, 6000);
});
import JoinUS from "./JoinUs";
export default {
  components: {
    appJoinus: JoinUS
  },
  data() {
    return {
      artists: [],
      about: {},
      mission: true,
      artist: false,
      support: false,
      joinus: false,
      text_contact: {},
      form: {
        name: null,
        email: null,
        phone: null,
        message: null
      },
      errors: {},
      jointext: {},
      aboutArtists: {}
    };
  },
  mounted() {
    $(".modal-mask").css("display", "block");
  },
  created() {
    if (this.$route.query.mydata == "artist") {
      this.artist = true;
      this.mission = false;
    } else if (this.$route.query.mydata == "contact") {
      this.support = true;
      this.mission = false;
    } else if (this.$route.query.mydata == "join") {
      this.mission = false;
      this.joinus = true;
      1;
    }
    axios
      .get("/api/get-about-content")
      .then(response => {
        // this.artists = response.data.dataArtist;
        this.about = response.data.data;
        if (this.about == null) {
          this.about = "";
        }
      })
      .catch(error => (this.errors = error.response.data));

    axios
      .get("/api/get-about-contents")
      .then(res => {
        this.text_contact = res.data.data;
        if (this.text_contact == null) {
          this.text_contact = "";
        }
      })
      .catch(error => (this.errors = error.response.data));
    axios
      .get("/api/get-about-artists")
      .then(res => {
        this.aboutArtists = res.data.data;
        if (this.aboutArtists == null) {
          this.aboutArtists = "";
        }
      })
      .catch(error => (this.errors = error.response.data));
    axios
      .get("/api/get-join-content")
      .then(res => {
        this.jointext = res.data.data;
      })
      .catch(error => console.log(error.response.data));
  },
  methods: {
    send() {
      axios
        .post("/aboutContacts-api", this.form)
        .then(res => (this.form = ""))
        .catch(error => (this.errors = error.response.data.errors));
    }
  }
};
</script>

<style scoped>
.mission {
  margin-top: 6% !important;
}
@media (max-width: 767px) {
  .mission {
    margin-top: 15% !important;
  }
}
.row {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 34px;
  font-weight: bold;
  line-height: 60px;
  margin: 0;
  margin-bottom: 1px;
  cursor: pointer;
  transition: all 0.4s;
  text-align: center;
  background: #f2efeb;
}
.title:hover {
  background: #e6e1da;
}
.about-team__people {
  margin: 0 20px 30px;
}
.about-team__people img {
  width: 120px;
}
.topteam {
  margin-bottom: 30px;
  border-bottom: 2px solid #eee;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.support_div .content {
  color: grey;
  cursor: pointer;
}
.support_div .active {
  color: black;
  font-weight: bold;
}
.left {
  border-right: 2px solid #000;
  padding-left: 300px;
}
@media (max-width: 991px) {
  .left {
    border-right: none;
    padding-left: 0;
  }
}
@media (min-width: 992px) and (max-width: 1999px) {
  .left {
    padding-left: 200px;
  }
}
.right {
  border-left: 2px solid #000;
  padding-right: 300px;
}
@media (max-width: 991px) {
  .right {
    border-left: none;
    padding-right: 0;
  }
}
@media (min-width: 992px) and (max-width: 1999px) {
  .right {
    padding-right: 200px;
  }
}
@media (max-width: 991px) {
  .term_text {
    text-align: center !important;
  }
}

.form {
  width: 50%;
  margin: auto;
}
.mission img {
  /* width: 100%; */
  height: 370px;
  border-radius: 10px;
}
@media (max-width: 767px) {
  .mission img {
    width: 50% !important;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .mission img {
    width: 100% !important;
  }
}
input[type="text"]:-ms-input-placeholder {
  text-align: right;
}
input[type="text"]::-webkit-input-placeholder {
  text-align: right;
}
input::-moz-placeholder {
  text-align: right;
}
@media (max-width: 767px) {
  .form {
    width: 100% !important;
  }
}
.v-application p {
  font-size: 24px !important;
}
</style>
