<template>
  <section style="margin-top:5%;">
    <div class="row" v-if="$i18n.locale == 'en'">
      <div class="col-md-5 sm_discount mt-4" style="background-color:#fafafa">
        <div
          class="clickdown"
          @click="discount_section = !discount_section"
          v-if="!discount_section"
        >
          <span>
            <i class="fa fa-shopping-cart ml-2 mr-2"></i>
            {{ $t("message.showorder") }}
          </span>
          <span class="plus" v-if="discount_section==false">
            <i class="fa fa-chevron-down"></i>
          </span>
          <span style="float:right;" class="mr-3">
            <span style="color:#737171;"></span>
            <template v-if="currency == 'sar'">{{ $t("currency.sar") }} {{cartTotalPriceSAR}}</template>
            <template v-else>{{ $t("currency.usd1") }} {{cartTotalPrice}}</template>
            <!-- {{cartTotalPrice}} SAR -->
          </span>
          <div style="clear:both"></div>
        </div>
        <div class="clickdown" @click="discount_section = !discount_section" v-else>
          <span>
            <i class="fa fa-shopping-cart ml-2 mr-2"></i>
            {{ $t("message.hideorder") }}
          </span>
          <span class="plus" v-if="discount_section==true">
            <i class="fa fa-chevron-up"></i>
          </span>
          <span style="float:right;" class="mr-3">
            <span style="color:#737171;"></span>
            <template v-if="currency == 'sar'">{{ $t("currency.sar") }} {{cartTotalPriceSAR}}</template>
            <template v-else>{{ $t("currency.usd1") }} {{cartTotalPrice}}</template>
            <!-- {{cartTotalPrice}} SAR -->
          </span>
          <div style="clear:both"></div>
        </div>
        <div
          class="discount_section mt-5"
          style="width:100%;padding:0px 10px;"
          v-if="discount_section"
        >
          <div class="border-bottom p-2 img" v-for="item in cart" :key="item.product.id">
            <div class="d-inline-block position-relative">
              <span class="quantity">{{ item.quantity }}</span>
              <img :src="item.product.artistMinPalettes.img" />
            </div>
            <span class="price ml-5">
              <strong>{{ item.product.name }}</strong>
            </span>
            <!-- <div class="countity" style="float:right">{{item.price}} SAR</div> -->
            <div
              class="countity"
              style="float:right"
              v-if="currency == 'sar'"
            >{{item.product.M_price_sar}} {{ $t("currency.sar") }}</div>
            <div
              class="countity"
              style="float:right"
              v-else
            >{{item.price}} {{ $t("currency.usd1") }}</div>
            <div style="clear:both"></div>
            <!-- <h6 style="width: 50%;margin-left: 90px;margin-top:-31px">{{ item.sizeTarget }} </h6> -->
          </div>

          <div class="discount">
            <v-form class="form_discount">
              <v-row>
                <v-col cols="9" sm="9" class="pr-0">
                  <v-text-field
                    v-model="discount"
                    label="Discount"
                    outlined
                    filled
                    style="border:none;"
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" style="padding:0">
                  <v-btn
                    @click="apply_discount()"
                    color="#c8c8c8"
                    style="color:white;padding: 26px 0;"
                  >
                    <i class="fa fa-arrow-right"></i>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
          <hr />
          <!-- <div class="discount_text" style="color:#737171;padding:10px"> -->
          <div style="    padding: 10px;" v-if="discount_value_sar!=0">
            <span style="padding:10px;color:#444f58">Subtotal</span>
            <span
              style="float:right;color:#444f58;padding-right: 10px;"
              v-if="currency == 'sar'"
            >{{discount_value_sar}} {{ $t("currency.sar") }}</span>
            <span
              style="float:right;color:#444f58;padding-right: 10px;"
              v-else
            >{{discount_value}} {{ $t("currency.usd1") }}</span>
            <div style="clear:both"></div>
          </div>
          <hr />
          <!-- <div class="mt-3">
                <span>Shipping</span>
                <span style="float:right">calculated at next</span>
                <div style="clear:both"></div>
          </div>-->
          <!-- </div> -->

          <div style="padding:10px">
            <span style="font-size: 1.3em;padding:10px">Total</span>
            <span style="float:right;">
              <span style="color:#737171;padding-right: 10px;">
                <template v-if="currency == 'sar'">
                  <strong
                    style="color: #323232;font-size: 1.5em;"
                  >{{ $t("currency.sar") }} {{cartTotalPriceSAR}}</strong>
                </template>
                <template v-else>
                  <strong
                    style="color: #323232;font-size: 1.5em;"
                  >{{ $t("currency.usd1") }} {{cartTotalPrice}}</strong>
                </template>
                <!-- SAR&nbsp; &nbsp;
                <strong style="color:black;font-size:22px">{{cartTotalPrice}}</strong>-->
              </span>
            </span>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <!-- Button trigger modal -->
        <!-- Modal -->
        <div
          class="modal show"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          show="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content" style="display: contents;">
              <div class="moda-body">
                <form
                  :action="`/api/payment/${id}/${form.paymentMethod}`"
                  class="paymentWidgets"
                  :data-brands="form.paymentMethod"
                ></form>
              </div>
            </div>
          </div>
        </div>
        <v-form class="form" @submit.prevent="send">
          <v-container>
            <div class="alert text-left mb-3">
              <h5 class="red--text" v-if="errors.items">{{ $t("message.noitem") }}</h5>
            </div>
            <div
              v-if=" message.length >0 "
              class="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <h1 class="text-center">Done</h1>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <v-row>
              <h4 style="font-size:1.3rem">Contacts information</h4>
              <v-col cols="12" md="12" style="padding:0px 12px">
                <label>E-mail</label>
                <v-text-field v-model="form.email" outlined style="border:none"></v-text-field>

                <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
              </v-col>
              <!-- <v-checkbox
                        v-model="form.checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Keep me up to date on news and exclusive offers"
                        required
              ></v-checkbox>-->

              <v-col cols="12" sm="6" style="padding:0px 12px">
                <label>First Name</label>
                <v-text-field v-model="form.fname" outlined style="border:none"></v-text-field>
                <span class="red--text" v-if="errors.fname">{{errors.fname[0]}}</span>
              </v-col>

              <v-col cols="12" sm="6" style="padding:0px 12px">
                <label>Last Name</label>
                <v-text-field v-model="form.lname" outlined style="border:none"></v-text-field>
                <span class="red--text" v-if="errors.lname">{{errors.lname[0]}}</span>
              </v-col>

              <v-col md="4" sm="4" cols="4" style="padding: 0px  12px;">
                <label>Code</label>
                <v-select
                  v-model="form.phonecode"
                  :items="mobileCode"
                  placeholder="Country code"
                  outlined
                  style="border:none"
                ></v-select>
                <span class="red--text" v-if="errors.phonecode">{{errors.phonecode[0]}}</span>
              </v-col>
              <v-col cols="8" sm="8" style="padding:0px  12px 12px">
                <label>Phone Number</label>
                <v-text-field v-model="form.phone" outlined style="border:none"></v-text-field>
                <span class="red--text" v-if="errors.phone">{{errors.phone[0]}}</span>
              </v-col>
              <h4 style="font-size:1.3rem;padding-top: 1em;padding-bottom: 0.5em;">Shipping Address</h4>
              <v-col cols="12" md="12" style="padding:0px 12px">
                <label>Address</label>
                <v-text-field v-model="form.address" outlined style="border:none"></v-text-field>
                <span class="red--text" v-if="errors.address">{{errors.address[0]}}</span>
              </v-col>
              <v-col cols="12" md="12" style="padding:0px 12px">
                <label>Appartment (optional)</label>
                <v-text-field v-model="form.apartment" outlined style="border:none"></v-text-field>
                <span class="red--text" v-if="errors.apartment">{{errors.apartment[0]}}</span>
              </v-col>
              <v-col cols="12" sm="12" style="padding:0px 12px">
                <label>Country</label>
                <v-select v-model="form.country" :items="countries" outlined style="border:none"></v-select>
                <span class="red--text" v-if="errors.country">{{errors.country[0]}}</span>
              </v-col>
              <v-col cols="8" md="8" style="padding:0px 12px">
                <label>City</label>
                <!-- <v-text-field v-model="form.city" outlined style="border:none"></v-text-field> -->
                <v-select
                  v-model="form.city"
                  :items="cities"
                  outlined
                  dir="rtl"
                  style="border:none;text-align:right"
                ></v-select>
                <span class="red--text" v-if="errors.city">{{errors.city[0]}}</span>
              </v-col>

              <!-- <v-col class="d-flex" cols="12" sm="4">
                <v-select
                  v-model="form.goverment"

                  item-text="name"
                  item-value="last"
                  :items="item"
                  label="governate"
                  outlined
                ></v-select>
              </v-col>-->
              <v-col cols="4" sm="4" style="padding:0px 12px">
                <label>Post Code</label>
                <v-text-field v-model="form.postcode" outlined style="border:none"></v-text-field>
                <span class="red--text" v-if="errors.postcode">{{errors.postcode[0]}}</span>
              </v-col>
              <v-col cols="12" md="12" style="padding:0px 12px">
                <label>Payment Method</label>
                <v-select
                  v-model="form.paymentMethod"
                  :items="paymentMethods"
                  outlined
                  dir="rtl"
                  style="border:none;text-align:right"
                ></v-select>
              </v-col>
            </v-row>
            <v-btn
              color="#197bbd"
              style="float:right;margin: 20px 0;height:10px;font-weight:100;text-transform: none;"
              class="check_btn"
              type="submit"
            >Continue to payment</v-btn>
          </v-container>
        </v-form>
      </div>
      <div class="col-md-5 lg_discount" style="background-color:#fafafa">
        <div class="discount_section mt-5">
          <div class="border-bottom p-2 img" v-for="item in cart" :key="item.product.id">
            <div class="d-inline-block position-relative">
              <span class="quantity">{{ item.quantity }}</span>
              <img :src="item.product.artistMinPalettes.img" />
            </div>
            <span class="price ml-5">
              <strong>{{ item.product.name }}</strong>
            </span>
            <div
              class="countity"
              style="float:right"
              v-if="currency == 'sar'"
            >{{ $t("currency.sar") }} {{item.product.M_price_sar}}</div>
            <div
              class="countity"
              style="float:right"
              v-else
            >{{ $t("currency.usd1") }} {{item.price}}</div>
            <!-- <div class="countity" style="float:right">{{item.price}} SAR</div> -->
            <div style="clear:both"></div>
            <!-- <h6 style="width: 50%;margin-left: 90px;margin-top:-31px">{{ item.sizeTarget }} </h6> -->
          </div>

          <div class="discount">
            <v-form class="form_discount">
              <v-row>
                <v-col cols="12" sm="9">
                  <v-text-field
                    v-model="discount"
                    label="Discount"
                    outlined
                    filled
                    style="border:none"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-btn
                    @click="apply_discount()"
                    color="#c8c8c8"
                    style="color:white;padding:10px"
                  >Apply</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
          <hr />
          <!-- <div class="discount_text" style="color:#737171;padding:10px"> -->
          <div v-if="discount_value_sar!=0">
            <span style="font-size: 1em;padding: 10px;color: #535353;font-weight: 600;">Subtotal</span>
            <span
              style="float: right;font-size: 1em;color: #323232;padding-right: 10px;font-weight: bold;"
              v-if="currency == 'sar'"
            >{{ $t("currency.sar") }}{{discount_value_sar}}</span>
            <span
              style="float: right;font-size: 1em;color: #323232;padding-right: 10px;font-weight: bold;"
              v-else
            >{{ $t("currency.usd1") }}{{discount_value}}</span>
            <div style="clear:both"></div>
            <hr />
          </div>

          <!-- <div class="mt-3">
              <span>Shipping</span>
              <span style="float:right">calculated at next</span>
              <div style="clear:both"></div>
          </div>-->
          <!-- </div> -->

          <div>
            <span style="font-size: 1.2em;padding-left: 10px;color: #323232;font-weight: 600;">Total</span>
            <span style="float:right;">
              <span style="color:#737171;padding-right: 10px;">
                <template v-if="currency == 'sar'">
                  <strong
                    style="color: #323232;font-size: 1.5em;"
                  >{{ $t("currency.sar") }} {{cartTotalPriceSAR}}</strong>
                </template>
                <template v-else>
                  <strong
                    style="color: #323232;font-size: 1.5em;"
                  >{{ $t("currency.usd1") }} {{cartTotalPrice}}</strong>
                </template>
              </span>
            </span>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-else>
      <div class="col-md-5 sm_discount mt-4" style="background-color:#fafafa">
        <div
          class="clickdown"
          @click="discount_section = !discount_section"
          v-if="!discount_section"
        >
          <span>
            <i class="fa fa-shopping-cart ml-2 mr-2"></i>
            {{ $t("message.showorder") }}
          </span>
          <span class="plus" v-if="discount_section==false">
            <i class="fa fa-chevron-down"></i>
          </span>
          <span style="float:right;" class="mr-3">
            <span style="color:#737171;"></span>
            <template v-if="currency == 'sar'">{{ $t("currency.sar") }} {{cartTotalPriceSAR}}</template>
            <template v-else>{{ $t("currency.usd1") }} {{cartTotalPrice}}</template>
          </span>
          <div style="clear:both"></div>
        </div>
        <div class="clickdown" @click="discount_section = !discount_section" v-else>
          <span>
            <i class="fa fa-shopping-cart ml-2 mr-2"></i>
            {{ $t("message.hideorder") }}
          </span>
          <span class="plus" v-if="discount_section==true">
            <i class="fa fa-chevron-up"></i>
          </span>
          <span style="float:right;" class="mr-3">
            <span style="color:#737171;"></span>
            <template v-if="currency == 'sar'">{{ $t("currency.sar") }} {{cartTotalPriceSAR}}</template>
            <template v-else>{{ $t("currency.usd1") }} {{cartTotalPrice}}</template>
            <!-- {{cartTotalPrice}} SAR -->
          </span>
          <div style="clear:both"></div>
        </div>
        <div
          class="discount_section mt-5"
          style="width:100%;padding:0px 10px"
          v-if="discount_section"
        >
          <div class="border-bottom p-2 img" v-for="item in cart" :key="item.product.id">
            <div class="d-inline-block position-relative">
              <span class="quantity">{{ item.quantity }}</span>
              <img :src="item.product.artistMinPalettes.img" />
            </div>
            <span class="price ml-5">
              <strong>{{ item.product.name }}</strong>
            </span>
            <div
              class="countity"
              style="float:right"
              v-if="currency == 'sar'"
            >{{ $t("currency.sar") }} {{item.product.M_price_sar}}</div>
            <div
              class="countity"
              style="float:right"
              v-else
            >{{ $t("currency.usd1") }} {{item.price}}</div>

            <div style="clear:both"></div>
            <!-- <h6 style="width: 50%;margin-left: 90px;margin-top:-31px">{{ item.sizeTarget }} </h6> -->
          </div>

          <div class="discount">
            <v-form class="form_discount">
              <v-row>
                <v-col cols="9" sm="9">
                  <v-text-field
                    v-model="discount"
                    label="الكوبون"
                    outlined
                    filled
                    style="border:none"
                  ></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" style="padding:0">
                  <v-btn
                    @click="apply_discount()"
                    color="#c8c8c8"
                    style="color:white;padding: 26px 0;"
                  >
                    <i class="fa fa-arrow-right"></i>
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
          <hr />
          <div
            class="discount_text"
            style="color:#737171;padding:10px"
            v-if="discount_value_sar!=0"
          >
            <div>
              <span style="font-size:16px;float:right;padding:10px;color:#444f58">الخصم</span>
              <span
                style="font-size:16px;color:#444f58;padding-right: 10px;font-weight:bold;"
                v-if="currency == 'sar'"
              >{{discount_value_sar}} {{ $t("currency.sar") }}</span>
              <span
                style="font-size:16px;color:#444f58;padding-right: 10px;font-weight:bold;"
                v-else
              >{{discount_value}} {{ $t("currency.usd1") }}</span>

              <div style="clear:both"></div>
            </div>
          </div>

          <div style="font-size: 1.3em;padding:10px">
            <span style="float:right;">الحساب الإجمالى</span>
            <span>
              <span style="color:#737171;padding-right: 10px;">
                <template v-if="currency == 'sar'">
                  <strong style="color: #323232;font-size: 1.5em;">{{cartTotalPriceSAR}}</strong>
                  {{ $t("currency.sar") }}
                </template>
                <template v-else>
                  <strong style="color: #323232;font-size: 1.5em;">{{cartTotalPrice}}</strong>
                  {{ $t("currency.usd1") }}
                </template>
                <!-- SAR&nbsp;&nbsp; -->
                <!-- <strong style="color:black;font-size:22px">{{cartTotalPrice}}</strong> -->
              </span>
            </span>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
      <div class="col-md-7">
        <!-- Button trigger modal -->
        <!-- Modal -->
        <div
          class="modal show"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
          show="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content" style="display: contents;">
              <div class="moda-body">
                ss
                <form
                  :action="'/api/payment/'+id+'/'+form.paymentMethod"
                  class="paymentWidgets"
                  :data-brands="form.paymentMethod"
                ></form>
              </div>
            </div>
          </div>
        </div>
        <v-form class="form" @submit.prevent="send">
          <v-container>
            <div class="alert text-center mb-3">
              <h5 class="red--text" v-if="errors.items">{{ $t("message.noitem") }}</h5>
            </div>
            <div
              v-if=" message.length >0 "
              class="alert alert-info alert-dismissible fade show"
              role="alert"
            >
              <h1 class="text-center">Done</h1>
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <v-row>
              <h4 style="font-size:1.3rem;width:100%" class="text-right">تسجيل البيانات</h4>
              <v-col cols="12" md="12" style="padding:0px 12px">
                <label style="float:right">البريد الإلكتروني</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.email" outlined style="border:none" dir="rtl"></v-text-field>
                <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
              </v-col>
              <!-- <v-checkbox
                        v-model="form.checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Keep me up to date on news and exclusive offers"
                        required
              ></v-checkbox>-->
              <v-col cols="12" sm="6" style="padding:0px 12px">
                <label style="float:right">الاسم الأول</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.fname" outlined style="border:none" dir="rtl"></v-text-field>
                <span class="red--text" v-if="errors.fname">{{errors.fname[0]}}</span>
              </v-col>
              <v-col cols="12" sm="6" style="padding:0px 12px">
                <label style="float:right">الاسم الأخير</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.lname" outlined style="border:none" dir="rtl"></v-text-field>
                <span class="red--text" v-if="errors.lname">{{errors.lname[0]}}</span>
              </v-col>

              <v-col cols="8" sm="8" style="padding:0px  12px 12px">
                <label style="float:right">رقم الهاتف</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.phone" outlined style="border:none" dir="rtl"></v-text-field>
                <span class="red--text" v-if="errors.phone">{{errors.phone[0]}}</span>
              </v-col>

              <v-col cols="4" sm="4" style="padding: 0px 12px 12px">
                <label style="float:right">كود الدولة</label>
                <div style="clear:both"></div>
                <v-select
                  v-model="form.phonecode"
                  :items="mobileCode"
                  outlined
                  style="border:none"
                  placeholder="كود الدولة"
                  dir="rtl"
                ></v-select>
                <span class="red--text" v-if="errors.phonecode">{{errors.phonecode[0]}}</span>
              </v-col>

              <h4
                style="font-size:1.3rem;padding-top: 1em;padding-bottom: 0.5em;width:100%"
                class="text-right"
              >بيانات الشحن</h4>
              <v-col cols="12" md="12" style="padding:0px 12px">
                <label style="float:right">العنوان</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.address" outlined style="border:none" dir="rtl"></v-text-field>
                <span class="red--text" v-if="errors.address">{{errors.address[0]}}</span>
              </v-col>
              <v-col cols="12" md="12" style="padding:0px 12px">
                <label style="float:right">المنزل (اختياري)</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.apartment" outlined style="border:none" dir="rtl"></v-text-field>
                <span class="red--text" v-if="errors.apartment">{{errors.apartment[0]}}</span>
              </v-col>

              <v-col cols="12" sm="12" style="padding:0px 12px">
                <label style="float:right">الدولة</label>
                <div style="clear:both"></div>
                <v-select
                  v-model="form.country"
                  :items="countries"
                  outlined
                  dir="rtl"
                  style="border:none;text-align:right"
                ></v-select>
                <span class="red--text" v-if="errors.country">{{errors.country[0]}}</span>
              </v-col>
              <!-- <v-col class="d-flex" cols="12" sm="4">
                <v-select
                  v-model="form.goverment"
                  item-text="name"
                  item-value="last"
                  :items="item"
                  label="المحافظة"
                  outlined
                ></v-select>
              </v-col>-->
              <v-col cols="4" sm="4" style="padding:0px 12px">
                <label style="float:right">رمز البريد</label>
                <div style="clear:both"></div>
                <v-text-field v-model="form.postcode" outlined style="border:none;" dir="rtl"></v-text-field>
                <span class="red--text" v-if="errors.postcode">{{errors.postcode[0]}}</span>
              </v-col>
              <v-col cols="8" md="8" style="padding:0px 12px">
                <label style="float:right">المدينة</label>
                <div style="clear:both"></div>
                <!-- v-select -->
                <v-select
                  v-model="form.city"
                  :items="cities"
                  outlined
                  dir="rtl"
                  style="border:none;text-align:right"
                ></v-select>
                <span class="red--text" v-if="errors.city">{{errors.city[0]}}</span>
              </v-col>
              <v-col cols="12" md="12" style="padding:0px 12px">
                <label style="width: 100%;text-align: right;">طريقة الدفع</label>
                <v-select
                  v-model="form.paymentMethod"
                  :items="paymentMethods"
                  outlined
                  dir="rtl"
                  style="border:none;text-align:right"
                ></v-select>
              </v-col>
            </v-row>
            <v-btn
              color="#197bbd"
              style="float:right;margin: 20px 0;height:10px;font-weight:100"
              class="check_btn"
              type="submit"
            >متابعة الشراء</v-btn>
            <div style="clear:both"></div>
          </v-container>
        </v-form>
      </div>
      <div
        class="col-md-5 lg_discount"
        style="background-color:#fafafa;padding-left: 4%;padding-right: 2%;"
      >
        <div class="discount_section mt-5">
          <div class="border-bottom p-2 img" v-for="item in cart" :key="item.product.id">
            <div class="d-inline-block position-relative">
              <span class="quantity">{{ item.quantity }}</span>
              <img :src="item.product.artistMinPalettes.img" />
            </div>
            <span class="price ml-5">
              <strong>{{ item.product.name }}</strong>
            </span>
            <div
              class="countity"
              style="float:right"
              v-if="currency == 'sar'"
            >{{ $t("currency.sar") }} {{item.product.M_price_sar}}</div>
            <div
              class="countity"
              style="float:right"
              v-else
            >{{ $t("currency.usd1") }} {{item.price}}</div>
            <div style="clear:both"></div>
            <!-- <h6 style="width: 50%;margin-left: 70px;margin-top:-31px">{{ item.sizeTarget }} </h6> -->
          </div>

          <div class="discount">
            <v-form class="form_discount">
              <v-row>
                <v-col cols="12" sm="9">
                  <v-text-field
                    v-model="discount"
                    label="الكوبون"
                    outlined
                    filled
                    style="border:none"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="3">
                  <v-btn
                    @click="apply_discount()"
                    color="#c8c8c8"
                    style="color:white;padding:10px"
                  >خصم الأن</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </div>
          <hr />
          <div
            class="discount_text"
            style="color:#737171;padding:10px"
            v-if="discount_value_sar!=0"
          >
            <div>
              <span style="font-size:16px;float:right;padding:10px;color:#444f58">الخصم</span>
              <span
                style="font-size:16px;color:#444f58;padding-right: 10px;font-weight:bold;"
                v-if="currency == 'sar'"
              >{{discount_value_sar}} {{ $t("currency.sar") }}</span>
              <span
                style="font-size:16px;color:#444f58;padding-right: 10px;font-weight:bold;"
                v-else
              >{{discount_value}} {{ $t("currency.usd1") }}</span>
              <div style="clear:both"></div>
            </div>
          </div>

          <div style="padding:10px">
            <span style="float:right;font-size: 1.3em;">الحساب الإجمالى</span>
            <span>
              <span style="color:#737171;padding-right: 10px;">
                <template v-if="currency == 'sar'">
                  <strong style="color: #323232;font-size: 1.5em;">{{cartTotalPriceSAR}}</strong>
                  {{ $t("currency.sar") }}
                </template>
                <template v-else>
                  <strong style="color: #323232;font-size: 1.5em;">{{cartTotalPrice}}</strong>
                  {{ $t("currency.usd1") }}
                </template>
              </span>
            </span>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 <script>
let mobileCodes = require("../../data/mobilecode").default;
// mobileCodes.unshift("Mobile Code");
let countries = require("../../data/countries.json");
let countriesNames = Object.keys(countries);
export default {
  computed: {
    larg(el, price, avilable) {
      this.sizeTarget = "Large - 70x93.5cm (28x37)";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      $(".active>.details_img").css({ width: "100%", height: "250px" });
      $(".active>.content").css({ width: "100%" });
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cartTotalPriceSAR() {
      return this.$store.getters.cartTotalPriceSAR;
    },
    cart() {
      return this.$store.state.cart;
    },
    currency() {
      return this.$store.getters.currency;
    },
    currentLanguage() {
      return this.$i18n.locale;
    },
    currentCountry() {
      return this.form.country;
    }
  },
  watch: {
    currentCountry(newCountry, oldCountry) {
      this.cities = countries[newCountry];
    }
  },
  data() {
    return {
      errors: {},
      form: {
        email: null,
        lname: null,
        address: null,
        fname: null,
        apartment: null,
        city: null,
        phone: null,
        phonecode: null,
        country: "Saudi Arabia",
        goverment: "Saudi Arabia",
        postcode: null,
        items: [],
        promocode: "",
        paymentMethod: "VISA"
      },
      discount: "",
      discount_value: 0,
      discount_value_sar: 0,
      //   cartTotalPrice: 0,
      id: "",
      mobileCode: mobileCodes,
      countries: countriesNames,
      cities: [],
      nameRules: [v => !!v || "Name is required"],
      checkbox: false,
      message: "",
      formview: "",
      discount_section: false,
      paymentMethods: ["VISA", "MASTER", "MADA"]
    };
  },
  mounted() {
    this.$store.commit("CHANGE_TIMER", false);
    $(".modal-mask").css("display", "none");

    this.form.country = "Saudi Arabia";
    this.cities = countries["Saudi Arabia"];
  },
  created() {
    this.cartTotalPrice;
    //  {"paletteid":"3","palettesize":"medium","quantity":5}
    this.cart.forEach(element => {
      this.form.items.push({
        paletteid: element.product.id,
        palettesize: element.sizeTarget,
        quantity: element.quantity
      });
    });
  },
  methods: {
    apply_discount() {
      //console.log(this.discount);
      axios
        .post("/api/check-promo", { code: this.discount })
        .then(data => {
          // console.log(data.data);
          if (data.data.status) {
            var price = parseInt(data.data.percentage);
            this.discount_value = (this.cartTotalPrice * price) / 100;
            this.cartTotalPrice = this.cartTotalPrice - this.discount_value;
            this.form.promocode = this.discount;
            //SAR
            this.discount_value_sar = (this.cartTotalPriceSAR * price) / 100;
            this.cartTotalPriceSAR =
              this.cartTotalPriceSAR - this.discount_value_sar;
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    clearProductFromCart(product) {
      this.$store.dispatch("deleteCartItem", product);
    },
    clearCartItems() {
      this.$store.dispatch("clearCartItems");
    },

    send() {
      // console.log(this.cart());
      // this.form.items=[    {paletteid:22,palettesize:"small",quantity:22}, {paletteid:2,palettesize:"small",quantity:22}]
      axios
        .post("/api/add-order", this.form)
        .then(data => {
          // console.log(data.data);
          // if (!data.data.status) {
          //   // console.log(data.data);
          //   this.errors = data.data.errors;
          // } else {
          $("#exampleModalCenter").modal("show");
          // console.log(data.data.checkid);
          // console.log(data.data.orderid);

          this.formview = data.data.orderid;
          this.id = data.data.orderid;

          //   this.message = "donnnnnnnnnnnnnnnnne";
          let tag = document.createElement("script");
          tag.setAttribute(
            "src",
            "https://test.oppwa.com/v1/paymentWidgets.js?checkoutId=" +
              data.data.checkid
          );
          document.head.appendChild(tag);
          this.errors = "";
          this.$store.dispatch("clearCartItems");
          //}
        })

        .catch(error => (this.errors = error.response.data.errors));
    }
  }
};
</script>

<style scoped>
.form {
  width: 87%;
  margin: auto;
  padding-left: 6%;
}
.img {
  padding-bottom: 1.5em !important;
  margin: 20px 0;
}
.img img {
  width: 62px;
  height: 70px;
  border: 1px rgba(0, 0, 0, 0.1) solid;
  border-radius: 8px;
}
.form_discount {
  padding: 10px;
}
.discount_section {
  width: 89%;
  margin-top: 12% !important;
}
.countity {
  margin-top: 20px;
  font-size: 1em;
  font-weight: 600;
  color: #323232;
}
.check_btn {
  border: 1px transparent solid;
  border-radius: 5px;
  color: white;
  font-weight: 500;
  padding: 25px 15px !important;
  text-align: center;
}
.price {
  position: relative;
  top: -16px;
  color: #323232;
  font-size: 1em;
  font-weight: 600;
}
@media (min-width: 767px) and (max-width: 991px) {
  .discount_section {
    width: 100%;
  }
}

.discount .v-input__slot {
  background: transparent !important;
}
.alert {
  text-align: center;
}
.sm_discount {
  display: none;
}
@media (max-width: 767px) {
  .lg_discount {
    display: none;
  }
  .sm_discount {
    display: block;
    margin-top: 10% !important;
  }
}
.quantity {
  position: absolute;
  width: 21px;
  right: -18%;
  top: -11%;
  height: 21px;
  background: #808080;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 0.8rem;
  line-height: 23px;
  font-weight: bold;
}
@media (max-width: 767px) {
  /* .quantity {
    left: 78px;
  } */
}
.clickdown {
  cursor: pointer;
  font-size: 18px;
  color: #197bbd;
  padding: 7px;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
  background-color: rgb(200, 200, 200);
  padding: 1em 1.7em;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 5px;
  color: white;
  font-weight: bolder;
  text-align: center;
  font-size: 14px;
  white-space: nowrap;
  line-height: 1.5;
  text-transform: capitalize;
  height: auto;
}
@media (max-width: 767px) {
  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #f5f5f5;
    margin-top: 14px;
  }
}

.theme--light.v-input {
  padding: 0 !important;
}
.v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot input {
  text-align: start !important;
}
</style>

<style>
.theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background: transparent !important;
}
</style>
