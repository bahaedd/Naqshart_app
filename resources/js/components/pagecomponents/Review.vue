<template>
    <div class="container mt-5" style="max-width:1462px">
        <h2 v-if="$i18n.locale == 'en'">{{ $t("message.customerreviews") }}</h2>
        <h2 style="float:right" v-else>{{ $t("message.customerreviews") }}</h2>
        <div style="clear:both"></div>
        <hr>
        <div class="rating" v-if="$i18n.locale == 'en'">
            <span class="fa fa-star text-warning" v-for="i in 5" :key="i.id"></span>
            <span id="reviewscount" class="ml-2">{{reviewscount}} {{ $t("message.review") }}</span>
            <v-btn style="background-color:black;color:#fff;float:right" @click="review = !review"><i class="fa fa-edit mr-2"></i>{{ $t("message.writereview") }}</v-btn>
            <div style="clear:both"></div>
        </div>
        <div class="rating" v-else>
            <v-btn style="background-color:black;color:#fff;" @click="review = !review"><i class="fa fa-edit mr-2"></i>{{ $t("message.writereview") }}</v-btn>
            <span class="fa fa-star text-warning" style="float:right" v-for="i in 5" :key="i.id"></span>
            <span id="reviewscount" class="mr-2" style="float:right">{{reviewscount}} {{ $t("message.review") }}</span>
            <div style="clear:both"></div>

        </div>
        <hr>
        <div v-if="review">
            <h6 v-if="$i18n.locale == 'en'" style="color:#b2b8bd" class="mb-4">{{ $t("message.writereview") }}</h6>
            <h6 v-else style="color:#b2b8bd;float:right"  class="mb-4">{{ $t("message.writereview") }}</h6>
            <div style="clear:both"></div>
            <h6 class="mb-4" v-if="$i18n.locale == 'en'">{{ $t("message.score") }}</h6>
            <h6 class="mb-4" v-else style="float:right">{{ $t("message.score") }}</h6>
            <div style="clear:both"></div>
            <v-rating v-if="$i18n.locale == 'en'" v-model="form.rate" color="orange" medium></v-rating>
            <v-rating v-else style="float:right;" dir="rtl" v-model="form.rate" color="orange" medium></v-rating>
            <div style="clear:both"></div>
            <v-form class="form" v-if="$i18n.locale == 'en'" @submit.prevent="send" v-model="valid">
                <v-row >
                    <v-col
                    cols="12"
                    sm="12"
                    >
                    <v-text-field
                        v-model="form.title"
                        label="Title"
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-textarea
                        v-model="form.body"
                        outlined
                        required
                        label="Review"
                        ></v-textarea>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.name"
                        label="Use Your Name"
                        required
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.email"
                        label="E-mail"
                        required
                        :rules="emailRules"
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn color="#f2efeb" style="margin-left:12px;margin-bottom:10px" type="submit">Post</v-btn>
            </v-form>
            <v-form class="form" v-else @submit.prevent="send" v-model="valid">
                <v-row>
                    <v-col
                    cols="12"
                    sm="12"
                    >
                    <v-text-field
                        v-model="form.title"
                        label="العنوان"
                        required
                        dir="rtl"
                    ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                        <v-textarea
                        v-model="form.body"
                        outlined
                        required
                        dir="rtl"
                        label="أكتب رأيك"
                        ></v-textarea>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.name"
                        label="أستخدم أسمك"
                        required
                        dir="rtl"
                    ></v-text-field>
                    </v-col>
                    <v-col
                    cols="12"
                    md="6"
                    >
                    <v-text-field
                        v-model="form.email"
                        label="اﻷيميل"
                        required
                        dir="rtl"
                         :rules="emailRules"
                    ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn color="#f2efeb" style="margin-left:12px;float:right;margin-bottom:10px" type="submit">إرسال</v-btn>
                <div style="clear:both"></div>
            </v-form>
        </div>
          <v-card class="card my-5" v-for="(review,index) in reviews" :key="index">

                <div class="userimg">
                    <div class="userimg2">
                        <span>{{review.name.charAt(0).toUpperCase()}}</span>
                    </div>

                </div>
                <div style="width:95%;display:inline-block">
                    <v-card-subtitle class="pb-0">{{review.name}} <span style="float:right">{{review.created_at}}</span></v-card-subtitle>
                    <div style="clear:both"></div>
                    <span class="ml-2">
                        <span class="fa fa-star text-warning ml-1" v-for="i in review.rate" :key="i"></span>
                    </span>
                </div>
            <v-card-text class="text--primary">
                <h5 style="font-weight:bold;color:#000">{{review.title}}</h5>

                <div>
                    {{review.body}}
                </div>
            </v-card-text>

            <v-card-actions style="display:block">
            <!-- <v-btn
                text
            >
               <i class="fa fa-share-square"></i> {{ $t("message.share") }}
            </v-btn> -->
            <!-- <span style="float:right;position:relative;left:-35px" v-if="$i18n.locale == 'en'">
                {{ $t("message.checkreview") }} -->
                <!-- <v-btn class="ma-2"  text icon @click.once="like(review.id,$event)">
                    <v-icon >mdi-thumb-up</v-icon><span :id="review.id">{{review.like_counter}}</span>
                </v-btn>

                <v-btn class="ma-2" text icon @click.once="dislike(review.id,$event)">
                    <v-icon >mdi-thumb-down</v-icon> &nbsp;<span :id="review.id+'d'">{{review.dislike_counter}}</span>
                </v-btn>
            </span> -->
            <!-- <span style="float:right" v-else>
                <v-btn class="ma-2" text icon @click.once="like(review.id,$event)">
                    <v-icon >mdi-thumb-up</v-icon><span :id="review.id">{{review.like_counter}}</span>
                </v-btn>

                <v-btn class="ma-2" text icon @click.once="dislike(review.id,$event)">
                    <v-icon >mdi-thumb-down</v-icon> &nbsp;<span :id="review.id+'d'">{{review.dislike_counter}}</span>
                </v-btn>
                {{ $t("message.checkreview") }}
            </span> -->
            <!-- <div style="clear:both"></div> -->
            </v-card-actions>
        </v-card>
          <div class="text-center">
            <v-pagination
            v-model="current_page"
            :length="meta"
            circle
            @input="changePage"
            ></v-pagination>
        </div>
    </div>

</template>

<script>
export default {
    data: () => ({
        review:false,
        form:{
            rate: 0,
            title:null,
            email:null,
            name:null,
            body:null,
            like_counter:0,
            dislike_counter:0,
        },
        count:0,
        meta:0,
        reviews:[],
        current_page:0,
        count2:0,
        reviewscount:'',
              emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
        valid: false,

    }),
        methods:{
        send(){
            axios.post('/reviews-api',this.form)
            .then(res =>{
                this.review=false
                this.reviews.unshift(res.data.review)
                this.form.rate=0;
                this.form.name="";
                this.form.email="";
                this.form.title="";
                this.form.body="";

                this.count2=parseInt( $("#reviewscount")[0].innerText) ;
                $("#reviewscount")[0].innerText = ++this.count2;

})
            .catch(error => this.errors = error.response.data.errors)
        },
        changePage(page){
            axios
            .get(`/api/review?page=${page}`)
            .then(response => {
                this.reviews = response.data.data;
                this.meta = response.data.last_page
                this.current_page = response.data.current_page

            })
            .catch(error => console.log(error.response.data));
        },
        like(id , event){
            axios.post('/like?id=' +id)
            .then(res => {
                $('#'+id)[0].innerText = res.data.review.like_counter
                event.target.style.color="blue"
            })
            .catch(error => this.errors = error.response.data.errors)
        },
        dislike(id , event){
            axios.post('/dislike?id=' +id)
            .then(res => {
                $('#'+id+'d')[0].innerText = res.data.review.dislike_counter
                event.target.style.color="red"

            })
            .catch(error => this.errors = error.response.data.errors)
        },
    },
  created() {
    axios
      .get("/api/review")
      .then(response => {
        this.reviews = response.data.data;
        this.meta = response.data.last_page
        this.current_page = response.data.current_page
        this.reviewscount = response.data.total
      })
      .catch(error => console.log(error.response.data));
    },
}
</script>

<style scoped>
    .userimg{
        position: relative;
        display: inline-block;
        text-align: center;
        width: 53px;
        height: 53px;
        top: 7px;

    }
    .userimg2{
        position: relative;
        display: inline-block;
        text-align: center;
        width: 53px;
        height: 53px;
        border-radius: 50%;
        background-color: black;
        color: #fff;
        margin-left: 13px;
    }
    .userimg span{
        position:absolute;
        top:30%;
        left: 23px;
    }
.v-card>.userimg {
    border-top-left-radius: none !important;
    border-top-right-radius: none !important;

}

</style>
