<template>
  <section>
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      style="margin-bottom:5%;"
      data-interval="false"
      data-wrap="false"
      data-touch="false"
    >
      <ol class="carousel-indicators text-center" id="carousel-indicators">
        <template v-if="!isMobileWindow">
          <li
            data-target="#carouselExampleCaptions"
            v-for="(artist,index) in artists"
            :class="{ 'active active-carsoul': artist.id == artist_active }"
            class="carousel-element"
            :key="artist.id"
            @click="getdata(index)"
            :data-slide-to="index"
          >{{artist.name}}</li>
        </template>

        <template v-else>
          <li
            v-for="(artist,index) in artists"
            :class="{ 'active active-carsoul': index == currentArtist }"
            class="carousel-element"
            :key="artist.id"
            @click="getdata(index)"
          >{{artist.name}}</li>
        </template>
      </ol>
      <div class="carousel-inner" v-if="!isMobileWindow">
        <!-- ,'active':isMobileWindow&index==0 -->
        <div
          class="carousel-item"
          v-for="(artist,index ) in artists"
          :class="{ 'active':  artist.id === artist_active }"
          :key="artist.id"
          :id="'artist-item-'+artist.id"
        >
          <img :src="artist.cover_img" class="header header-lg" alt="..." />
          <img src class="header header-sm" alt="..." :id="'swapper'+index" />
          <!---------------------------- start regular pallete----------------------- -->

          <!-- <swiper class="agile_swap swap_sm" :options="swiperOption"> -->
          <swiper
            class="agile_swap swap_sm"
            @transitionStart="handleSwap(index)"
            @slideChange="slideChanged()"
            @sliderMove="userChangingSlide=true"
            v-if="isMobileWindow"
            ref="mySwiper"
          >
            <!-- @sliderMove="reachEnd()" -->
            <!-- @reachEnd="reachEnd()" -->
            <swiper-slide
              class="details agile_slide"
              v-for="(palettesArtist , index) in allPalettes"
              ref="palettesSlider"
              @click.native="addActive(palettesArtist.id,index,palettesArtist.artist_id)"
              :key="palettesArtist.id"
              @click="ss"
            >
              <input type="hidden" class="palette" :value="palettesArtist.id" />
              <input type="hidden" class="index" :value="index" />
              <input type="hidden" class="artist_id" :value="palettesArtist.artist_id" />

              <img :src="palettesArtist.mobile_background" alt class="mobile-background" />
              <img :src="palettesArtist.img" alt="..." />
              <div class="content" :class="{ 'active': index == 0 }">
                <div class="triangle"></div>
                <h6>
                  <span class="px-1">{{palettesArtist.name}}</span> |
                  <span
                    class="price px-1"
                    v-if="currency == 'sar'"
                  >{{palettesArtist.M_price}} {{ $t("currency.sar") }}</span>
                  <span
                    class="price px-1"
                    v-else
                  >{{ $t("currency.usd1") }} {{palettesArtist.M_price}}</span>
                </h6>
                <div class="infor" v-if="palettesArtist.M_avalible >0">
                  <span>
                    <span class="text-success">{{ palettesArtist.M_avalible }}</span>
                    /{{ palettesArtist.M_copies }} {{ $t("message.left") }}
                  </span>
                </div>
                <div class="infor" v-else>
                  <span style="color:red; font-weight:bolder">{{ $t("message.solidout") }}</span>
                </div>
              </div>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
          <div class="wrapper swap_lg">
            <div class="row d-flex justify-content-center" style="width:100%">
              <div
                class="details col-lg-3 col-sm-3"
                :class="{ 'active': index == 0 }"
                ref="myActive"
                v-for="(palettesArtist , index) in artist.artist_palettes"
                @click="addActive(palettesArtist.id,index,artist.id)"
                :key="palettesArtist.id"
              >
                <div class="details-content">
                  <img :src="palettesArtist.img" class="details_img" alt="..." />
                  <div class="content" :class="{ 'active': index == 0 }">
                    <div class="triangle"></div>
                    <h6>
                      <span class="px-1">{{palettesArtist.name}}</span>
                      |
                      <span
                        class="price px-1"
                        v-if="currency == 'sar'"
                      >{{palettesArtist.M_price_sar}} {{ $t("currency.sar") }}</span>
                      <span
                        class="price px-1"
                        v-else
                      >{{ $t("currency.usd1") }} {{palettesArtist.M_price}}</span>
                    </h6>
                    <div class="infor" v-if="palettesArtist.M_avalible >0">
                      <span>
                        <span class="text-success">{{ palettesArtist.M_avalible }}</span>
                        /{{ palettesArtist.M_copies }} {{ $t("message.left") }}
                      </span>
                    </div>
                    <div class="infor" v-else>
                      <span style="color:red; font-weight:bolder">{{ $t("message.solidout") }}</span>
                    </div>
                    <!-- <button  @click="addToCart(palettesArtist)"  class="form-control btn btn-info border-0">{{ $t("message.cart") }}</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---------------------------- start carousel pallete----------------------- -->

          <div class="parent swap_sm" style="z-index: 2;">
            <!-- <div>
              <img
                src="https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/swipetothenext.png?v=14393615295324639232"
                alt
              />
            </div>-->
            <div class="navigate2" v-if="paletteIndex==0">
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#fff"
                  d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                />
              </svg>
              <span></span>
              <span></span>
            </div>
            <div class="navigate2" v-if="paletteIndex==1">
              <span></span>
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#fff"
                  d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                />
              </svg>
              <span></span>
            </div>
            <div class="navigate2" v-if="paletteIndex==2">
              <span></span>
              <span></span>
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#fff"
                  d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                />
              </svg>
            </div>
          </div>

          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            @click="getdata(index+1)"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            @click="getdata(index-1)"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
        </div>
      </div>
      <div class="carousel-inner" v-else>
        <div
          class="carousel-item"
          v-for="(artist,index ) in artists"
          :class="{ 'active':  index==0 }"
          :key="artist.id"
          :id="'artist-item-'+artist.id"
        >
          <img :src="artist.cover_img" class="header header-lg" alt="..." />
          <img src class="header header-sm" alt="..." :id="'swapper'+index" />
          <!---------------------------- start regular pallete----------------------- -->

          <!-- <swiper class="agile_swap swap_sm" :options="swiperOption"> -->
          <swiper
            class="agile_swap swap_sm"
            @transitionStart="handleSwap(index)"
            @slideChange="slideChanged()"
            @sliderMove="userChangingSlide=true"
            v-if="isMobileWindow"
            ref="mySwiper"
          >
            <!-- @sliderMove="reachEnd()" -->
            <!-- @reachEnd="reachEnd()" -->
            <swiper-slide
              class="details agile_slide"
              v-for="(palettesArtist , index) in allPalettes"
              ref="palettesSlider"
              @click.native="addActive(palettesArtist.id,index,palettesArtist.artist_id)"
              :key="palettesArtist.id"
              @click="ss"
            >
              <input type="hidden" class="palette" :value="palettesArtist.id" />
              <input type="hidden" class="index" :value="index" />
              <input type="hidden" class="artist_id" :value="palettesArtist.artist_id" />

              <img :src="palettesArtist.mobile_background" alt class="mobile-background" />
              <img :src="palettesArtist.img" alt="..." />
              <div class="content" :class="{ 'active': index == 0 }">
                <div class="triangle"></div>
                <h6>
                  <span class="px-1">{{palettesArtist.name}}</span> |
                  <span
                    class="price px-1"
                    v-if="currency == 'sar'"
                  >{{palettesArtist.M_price}} {{ $t("currency.sar") }}</span>
                  <span
                    class="price px-1"
                    v-else
                  >{{ $t("currency.usd1") }} {{palettesArtist.M_price}}</span>
                </h6>
                <div class="infor" v-if="palettesArtist.M_avalible >0">
                  <span>
                    <span class="text-success">{{ palettesArtist.M_avalible }}</span>
                    /{{ palettesArtist.M_copies }} {{ $t("message.left") }}
                  </span>
                </div>
                <div class="infor" v-else>
                  <span style="color:red; font-weight:bolder">{{ $t("message.solidout") }}</span>
                </div>
              </div>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
          <div class="wrapper swap_lg">
            <div class="row d-flex justify-content-center" style="width:100%">
              <div
                class="details col-lg-3 col-sm-3"
                :class="{ 'active': index == 0 }"
                ref="myActive"
                v-for="(palettesArtist , index) in artist.artist_palettes"
                @click="addActive(palettesArtist.id,index,artist.id)"
                :key="palettesArtist.id"
              >
                <div class="details-content">
                  <img :src="palettesArtist.img" class="details_img" alt="..." />
                  <div class="content" :class="{ 'active': index == 0 }">
                    <div class="triangle"></div>
                    <h6>
                      <span class="px-1">{{palettesArtist.name}}</span>
                      |
                      <span
                        class="price px-1"
                        v-if="currency == 'sar'"
                      >{{palettesArtist.M_price_sar}} {{ $t("currency.sar") }}</span>
                      <span
                        class="price px-1"
                        v-else
                      >{{ $t("currency.usd1") }} {{palettesArtist.M_price}}</span>
                    </h6>
                    <div class="infor" v-if="palettesArtist.M_avalible >0">
                      <span>
                        <span class="text-success">{{ palettesArtist.M_avalible }}</span>
                        /{{ palettesArtist.M_copies }} {{ $t("message.left") }}
                      </span>
                    </div>
                    <div class="infor" v-else>
                      <span style="color:red; font-weight:bolder">{{ $t("message.solidout") }}</span>
                    </div>
                    <!-- <button  @click="addToCart(palettesArtist)"  class="form-control btn btn-info border-0">{{ $t("message.cart") }}</button> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!---------------------------- start carousel pallete----------------------- -->

          <div class="parent swap_sm" style="z-index: 2;">
            <!-- <div>
              <img
                src="https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/swipetothenext.png?v=14393615295324639232"
                alt
              />
            </div>-->
            <div class="navigate2" v-if="paletteIndex==0">
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#fff"
                  d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                />
              </svg>
              <span></span>
              <span></span>
            </div>
            <div class="navigate2" v-if="paletteIndex==1">
              <span></span>
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#fff"
                  d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                />
              </svg>
              <span></span>
            </div>
            <div class="navigate2" v-if="paletteIndex==2">
              <span></span>
              <span></span>
              <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#fff"
                  d="M1395 864q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23zm0-384q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
                />
              </svg>
            </div>
          </div>

          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            @click="getdata(index+1)"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            @click="getdata(index-1)"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center addToCart-sm" id="addToCartsm">
      <img :src="minPalettesActive.img" alt style="width: 80px;height: 80px;" />
      <div style="width:75%; margin-left: 4%;">
        <button
          @click="addtocart(minPalettesActive.id,minPalettesActive.M_price, avilableTarget , sizeTarget)"
          v-if="minPalettesActive.M_avalible>0"
          class="btn add-button"
          style="    line-height: 30px;width:100%;margin-bottom: 3%;font-size:1rem !important;height:9vh;border-radius: 0;"
        >
          <template v-if="currency == 'usd'">
            <!-- <span
              v-if="active_el==2"
              style="font-weight: bolder;font-size: 1rem; text-transform:capitalize"
            >{{ $t("currency.usd1") }} {{minPalettesActive.M_price}}-</span>-->
            {{ $t("message.cart") }}
          </template>
          <template v-else>
            <!-- <span
              v-if="active_el==2"
              style="font-weight: bolder;font-size: 1rem; text-transform:capitalize"
            >{{minPalettesActive.M_price_sar}} {{ $t("currency.sar") }}-</span>-->
            {{ $t("message.cart") }}
          </template>
        </button>
        <v-btn
          class="mb-2 size_btn small"
          style="cursor: not-allowed;background-color:#737373;color:#fff;border:none;line-height: 30px;width:100%;margin-bottom: 3%;font-size:1rem !important;height:7vh;border-radius: 0;padding: 0 !important;"
          v-else
        >{{ $t("message.solidout") }}</v-btn>
        <p
          style="font-size: 14px;
                          font-style: italic;
                          width: 100%;
                          margin: 0px;
                          text-align: center;"
        >{{minPalettesActive.name}}</p>
      </div>
    </div>
    <div class="header_sm mb-2"></div>
    <div class="container" style="max-width:1260px!important;margin-bottom: 50px;">
      <div class="row" id="palletes-images-scroll">
        <!-- <div class="d-inline-block palletes-images">

          <img
            :src="minPalettesActive.img"
            style="height:100%; width:100%; diplay:inline"
            alt="..."
          />
        </div>-->
        <div
          class="d-inline-block palletes-images"
          v-for="minPalette in minPalettes"
          :key="minPalette.id"
        >
          <!-- :style="'background:url(\''+minPalette.img+'\')'" -->
          <img :src="minPalette.img" style="height:100%; width:100%; diplay:inline" alt="..." />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7 col-md-6 ml-md-4 ml-sm-0" id="palletes-images">
          <div class="row" id="images">
            <!-- <div class="col-md-6 col-sm-12">
              <img :src="minPalettesActive.img" style="height:100%; width:100%" alt="..." />
            </div>-->
            <div class="col-md-6 col-sm-12" v-for="minPalette in minPalettes" :key="minPalette.id">
              <img :src="minPalette.img" style="height:100%; width:100%" alt="..." />
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 ml-2" id="text-images" style="position:relative">
          <!-- style="margin-top:78px" -->
          <div class="add-cart" id="scrolled" style="width:34vw;bottom:0vw">
            <h2 class="font-weight-bold">
              {{minPalettesActive.name}}
              <template v-if="currency == 'usd'">
                <span v-if="active_el==1">{{ $t("currency.usd1") }} {{minPalettesActive.S_price}}</span>
                <span
                  v-if="active_el==2"
                  style="float: right;font-weight: normal"
                >{{ $t("currency.usd1") }} {{minPalettesActive.M_price}}</span>
                <span v-if="active_el==3">{{ $t("currency.usd1") }} {{minPalettesActive.L_price}}</span>
              </template>
              <template v-else>
                <span v-if="active_el==1">{{minPalettesActive.S_price_sar}} {{ $t("currency.sar") }}</span>
                <span
                  v-if="active_el==2"
                  style="float: right;font-weight: normal"
                >{{minPalettesActive.M_price_sar}} {{ $t("currency.sar") }}</span>
                <span
                  v-if="active_el==3"
                >} {{minPalettesActive.L_price_sar}} {{ $t("currency.sar") }}</span>
              </template>
            </h2>
            <div class="mb-3 mt-2">
              <span style="padding:0 10px;">{{minPalettesActive.tag}}</span>
            </div>
            <div>
              <!-- <v-btn class="mb-2 size_btn small"  :class="{ active_btn : active_el == 1 }" v-if="minPalettesActive.S_avalible>0"  @click="small(1,minPalettesActive.S_price,minPalettesActive.S_avalible,minPalettesActive.id)">S</v-btn>
                            <v-btn class="mb-2 size_btn small" style="cursor: not-allowed;background-color:#737373;color:#fff;border:none" v-else >
                                <div class="rotate"></div>
              {{ $t("message.empty") }}</v-btn>-->
              <!-- <v-btn class="mb-2 size_btn medium" :class="{ active_btn : active_el == 2 }" v-if="minPalettesActive.M_avalible>0" @click="medium(2,minPalettesActive.M_price, minPalettesActive.M_avalible ,minPalettesActive.id)">M</v-btn>
                            <v-btn class="mb-2 size_btn small" style="cursor: not-allowed;background-color:#737373;color:#fff;border:none" v-else >
                                <div class="rotate"></div>

              {{ $t("message.empty") }}</v-btn>-->
              <!-- <v-btn class="mb-2 size_btn larg" :class="{ active_btn : active_el == 3 }" v-if="minPalettesActive.L_avalible>0" @click="larg(3,minPalettesActive.L_price,minPalettesActive.L_avalible,minPalettesActive.id )">L</v-btn> -->
              <!-- <v-btn class="mb-2 size_btn small" style="cursor: not-allowed;background-color:#737373;color:#fff;border:none" v-else >
                                <div class="rotate"></div>
              {{ $t("message.empty") }}</v-btn>-->
              <!-- <h3 class="mt-4 mb-4" v-if="active_el==1"> <strong style="float:right">{{S_copies}}/{{S_avalible}}  {{ $t("message.left") }}</strong></h3> -->
              <!-- <h3 class="mt-4 mb-4" v-if="active_el==2">Medium  </h3> -->
              <!-- <h3 class="mt-4 mb-4" v-if="active_el==3">large<strong style="float:right">{{L_copies}}/{{L_avalible}}  {{ $t("message.left") }}</strong></h3> -->
              <!-- <h3 class="mt-4 mb-4" v-if="active_el==1"> <strong style="float:right">{{minPalettesActive.S_copies}}/{{minPalettesActive.S_avalible}}  {{ $t("message.left") }}</strong></h3> -->
              <!-- <h3 class="mt-4 mb-4" v-if="active_el==2"><strong style="float:right">{{minPalettesActive.M_copies}}/{{minPalettesActive.M_avalible}}  {{ $t("message.left") }}</strong></h3> -->
              <!-- <h3 class="mt-4 mb-4" v-if="active_el==3">large<strong style="float:right">{{minPalettesActive.L_copies}}/{{minPalettesActive.L_avalible}}  {{ $t("message.left") }}</strong></h3> -->
              <div style="clear:both"></div>
            </div>
            <div class="text-center">
              <button
                @click="addtocart(minPalettesActive.id,minPalettesActive.M_price, avilableTarget , sizeTarget)"
                v-if="minPalettesActive.M_avalible>0"
                class="btn add-button addToCart"
              >
                <!-- <span v-if="active_el==1">${{minPalettesActive.S_price}}</span> -->
                <!-- <template v-if="currency == 'usd'">
                  <span
                    v-if="active_el==2"
                    style="font-size:23px;text-transform:capitalize"
                  >{{ $t("currency.usd1") }} {{minPalettesActive.M_price}}</span>
                </template>
                <template v-else>
                  <span
                    v-if="active_el==2"
                    style="font-size:23px;text-transform:capitalize"
                  >{{minPalettesActive.M_price_sar}} {{ $t("currency.sar") }}</span>
                </template>-->
                <!-- <span v-if="active_el==3">${{minPalettesActive.L_price}}</span> -->
                {{ $t("message.cart") }}
              </button>
              <v-btn
                class="mb-2 size_btn small sold-out"
                style="cursor: not-allowed;background-color:#737373;color:#fff;border:none; margin-bottom:45px!important "
                v-else
              >{{ $t("message.solidout") }}</v-btn>
            </div>
            <!-- <div class="text-center addToCart-sm" id="addToCartsm">
              <img :src="minPalettesActive.img" alt style="width: 80px;height: 80px;" />
              <div style="width:75%; margin-left: 4%;">
                <button
                  @click="addtocart(minPalettesActive.id,minPalettesActive.M_price, avilableTarget , sizeTarget)"
                  v-if="minPalettesActive.M_avalible>0"
                  class="btn add-button"
                  style="    line-height: 30px;width:100%;margin-bottom: 3%;font-size:1rem !important;height:9vh;border-radius: 0;"
                >
                  <template v-if="currency == 'usd'">
                    <span
                      v-if="active_el==2"
                      style="font-weight: bolder;font-size: 1rem; text-transform:capitalize"
                    >{{ $t("currency.usd1") }} {{minPalettesActive.M_price}}-</span>
                    {{ $t("message.cart") }}
                  </template>
                  <template v-else>
                    <span
                      v-if="active_el==2"
                      style="font-weight: bolder;font-size: 1rem; text-transform:capitalize"
                    >{{minPalettesActive.M_price_sar}} {{ $t("currency.sar") }}-</span>
                    {{ $t("message.cart") }}
                  </template>
                </button>
                <v-btn
                  class="mb-2 size_btn small"
                  style="cursor: not-allowed;background-color:#737373;color:#fff;border:none;height:60px !important;width:85% !important;margin:0;padding:0px !important;"
                  v-else
                >{{ $t("message.solidout") }}</v-btn>
                <p
                  style="font-size: 14px;
                          font-style: italic;
                          width: 100%;
                          margin: 0px;
                          text-align: center;"
                >{{minPalettesActive.name}}</p>
              </div>
            </div>-->
            <!-- <v-btn class="mb-2 size_btn small" style="cursor: not-allowed;background-color:#737373;color:#fff;border:none" v-else >{{ $t("message.select_size") }}</v-btn> -->
            <transition>
              <p :style="'height:'+height" :class="{'text-right':currentLanguage=='ar'}">
                {{ minPalettesActive.descript }}
                <!-- <span class="font-weight-bold">This is the Classic</span>
                , designed and manufactured by Ecstase,
                the Classic is made up of a wooden frame, a passe-partout,
                and non-reflective glass. Each of the artworks chosen for
                the Classic has been hand made or hand-retouched on art-grade paper,
                and is delivered already professionally framed to ensure
                the longevity of the artwork. You can install it as soon as
                <span>
                  it is delivered as the artwork comes ready to be hung on your wall.
                  The classical design and releases in this series make it an elegant
                  way to add a high-end touch to your space. Each artwork contains
                  a signed certificate of authenticity that guarantees its originality.
                  Curated by Ecstase in a collaboration with Seamless for a limited edition of 50.
                  This psychedelic triple artwork capitalizes on brilliant negative space and amazing detail.
                </span>-->
              </p>
            </transition>
            <div
              class="mt-4 mb-2 d-block"
              style="
              background: linear-gradient(180deg, rgba(255,255,255,0.7189250700280112) 0%, rgba(255,255,255,1) 66%);
            position: relative;
            height: 51px;
            padding-top: 15px;"
            >
              <template v-if="minPalettesActive.description">
                <a
                  class="more text-primary btn btn-block"
                  v-if="(countWords(minPalettesActive.description)>110||countWords(minPalettesActive.description_ar)>80)&&!show"
                  @click="toggleParagraphHeight"
                >{{ $t("message.readmore") }}</a>
              </template>
              <!-- <a
                class="more text-primary btn btn-block"
                v-else
                @click="toggleParagraphHeight"
              >{{ $t("message.readless") }}</a>-->
            </div>
            <ul class="list-group">
              <li class="list-group-item" @click="size = !size">
                <h4 class="font-weight-bold">
                  {{ $t("message.size") }}
                  <i
                    v-if="!size"
                    class="fa fa-chevron-down"
                    style="float:right"
                  ></i>
                  <i v-else class="fa fa-chevron-up" style="float:right"></i>
                </h4>
                <p
                  v-if="size"
                  :class="{'text-right':currentLanguage=='ar'}"
                >{{minPalettesActive.sizing}}</p>
              </li>
              <li class="list-group-item" @click="details = !details">
                <h4 class="font-weight-bold">
                  {{ $t("message.productDetails") }}
                  <i
                    v-if="!details"
                    class="fa fa-chevron-down"
                    style="float:right"
                  ></i>
                  <i v-else class="fa fa-chevron-up" style="float:right"></i>
                </h4>
                <template v-if="details">
                  <!-- <p v-if="currentLanguage=='en'" :class="{'text-right':currentLanguage=='ar'}"> -->
                  <p :class="{'text-right':currentLanguage=='ar'}">
                    <strong>{{ $t("message.Print_material") }}</strong>
                    {{minPalettesActive.print}}
                    <br />
                    <strong>{{ $t("message.Print_ink") }}</strong>
                    {{minPalettesActive.ink}}
                    <br />
                    <strong>{{ $t("message.Print_finish") }}</strong>
                    {{minPalettesActive.finish}}
                    <br />
                    <strong>{{ $t("message.Frame_material") }}</strong>
                    {{minPalettesActive.material}}
                    <br />
                    <strong>{{ $t("message.Frame_finish") }}</strong>
                    {{minPalettesActive.frame}}
                  </p>
                  <!-- <p v-else style="text-align:right">
                    <span>
                      <strong>:خامات الطباعة</strong>
                      {{minPalettesActive.print}}
                    </span>
                    <br />
                    <span>
                      <strong>:حبر الطباعة</strong>
                      {{minPalettesActive.ink}}
                    </span>
                    <br />

                    <span>
                      <strong>:اللمسة النهائية للطباعة</strong>
                      {{minPalettesActive.finish}}
                    </span>
                    <br />

                    <span>
                      <strong>:معدن الاطار</strong>
                      {{minPalettesActive.material}}
                    </span>
                    <br />

                    <span>
                      <strong>:اللمسة النهائية للاطار</strong>
                      {{minPalettesActive.frame}}
                    </span>
                  </p>-->
                </template>
              </li>
              <li class="list-group-item" @click="shipping = !shipping">
                <h4 class="font-weight-bold">
                  {{ $t("message.shipping") }}
                  <i
                    v-if="!shipping"
                    class="fa fa-chevron-down"
                    style="float:right"
                  ></i>
                  <i v-else class="fa fa-chevron-up" style="float:right"></i>
                </h4>
                <p
                  v-if="shipping"
                  :class="{'text-right':currentLanguage=='ar'}"
                >{{minPalettesActive.ship}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <appvideo :palette="minPalettesActive"></appvideo> -->
    <appvideo></appvideo>
    <!-- <review></review> -->
  </section>
</template>

<script>
import appvideo from "../pagecomponents/ShopVideo";
// import review from "../pagecomponents/Review";
import $ from "jquery";
$(function() {
  setInterval(() => {
    $(".spinner-content").fadeOut("10000");
  }, 10000);
});
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/css/swiper.css";

export default {
  components: {
    appvideo,
    // review,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      palettes: [],
      minPalettes: [],
      artists: [],
      palettesArtists: [],
      show: false,
      size: false,
      details: false,
      shipping: false,
      id: "",
      minPalette_id: "",
      first: null,
      firstpalettesArtists: null,
      firstminPalettes: null,
      minPalettesActive: {},
      active_el: 2,
      priceTarget: "",
      avilableTarget: "",
      sizeTarget: "medium",
      button: false,
      artistID: "",
      sizeCm: "",
      artist_text: "",
      artist_active: 1,
      height: "auto",
      width: window.innerWidth,
      content: null,
      allPalettes: [],
      indexes: [],
      palettesSlider: [],
      currentArtist: "",
      paletteIndex: 0,
      userChangingSlide: false
      // swiperOption: {
      //   pagination: {
      //     el: ".swiper-pagination"
      //   }
      // }
    };
  },
  mounted() {
    let images = document.getElementById("images");
    let scrolled = document.getElementById("scrolled");
    let navbar = document.getElementById("navbar");
    let offset = document.getElementById("carousel-indicators");
    let addToCartSm = document.getElementById("addToCartsm");
    let offsetHeightAdd = String(
      window.innerHeight - addToCartSm.offsetHeight
    ).substring(1);
    let carsoulExample = document.getElementById("carouselExampleCaptions");
    let list = document.getElementById("carousel-indicators");
    if (window.innerWidth < 767) {
      list.style.transform = "translateX(80px)";
      addToCartSm.style.position = "relative";
      addToCartSm.style.backgroundColor = "#fff";
      carsoulExample.style.marginBottom = "";
    }
    //content scroll
    let scroll = function() {
      if (window.innerWidth > 768) {
        // console.log(window.scrollY);
        if (window.scrollY > images.offsetHeight) {
          scrolled.style.position = "absolute";
          scrolled.style.bottom = "2vw";
          scrolled.style.top = "";
        } else {
          scrolled.style.position = "relative";
          //   scrolled.style.right = "0vw";
          scrolled.style.marginTop = "";
          // if (window.scrollY >= images.offsetHeight - 100) {
          scrolled.style.top = "0vw";
          scrolled.style.bottom = "2vw";
          // }
          // else scrolled.style.top = "8vw";
        }
        if (
          window.scrollY >= scrolled.clientHeight - 100 &&
          window.scrollY < images.offsetHeight
        ) {
          //   scrolled.style.right = "6.5vw";
          scrolled.style.top = "20vw";
          scrolled.style.position = "fixed";
          // scrolled.style.marginTop = "0px";
          //   console.log(window.scrollY);
        }
      } else {
        // console.log(window.scrollY);
        //56;
        if (window.scrollY > 56) {
          addToCartSm.style.position = "";
          addToCartSm.style.backgroundColor = "";
          carsoulExample.style.marginBottom = "10%";
        } else {
          addToCartSm.style.position = "relative";
          addToCartSm.style.backgroundColor = "#fff";
          carsoulExample.style.marginBottom = "";
        }
      }
    };
    if (window.innerWidth < 768) {
      navbar.style.background = "transparent";
    }
    function navbarChnage() {
      if (window.innerWidth < 768) {
        //   console.log()
        if (window.scrollY < offset.offsetTop) {
          if (
            document
              .getElementById("navbar-nav")
              .classList.value.indexOf("active") != -1
          )
            navbar.style.background = "#000";
          else {
            navbar.style.background = "transparent";
            navbar.style.color = "#fff";
          }
        } else {
          navbar.style.background = "#000";
        }
      }
    }
    window.addEventListener("scroll", scroll);
    window.addEventListener("scroll", navbarChnage);

    // this.changeContent(this.currentLanguage);
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 10,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      on: {
        resize: function() {
          for (let index = 0; index < this.slides.length; index++) {
            let element = this.slides[index];
            element.style.height = element.style.width;
          }
          //   console.log(this.slides[0].style.width);
          //   console.log(this.width);
        }
      },
      breakpoints: {
        // when window width is >= 320px
        280: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        760: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        // when window width is >= 640px
        // 991: {
        // 768: {
        //   slidesPerView: 3,
        //   spaceBetween: 45
        // }
        1020: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      },
      observer: true,
      observerParents: true
    });
    // swiper.update();
    axios
      .get("/api/all-palettes")
      .then(response => {
        this.allPalettes = response.data.palettes;
        this.indexes = response.data.indexes;
      })
      .catch(error => console.log(error));
    axios.get("/api/content").then(response => {
      //   console.log(response);
      this.content = response.data.content;
    });
    if (this.$route.query.mydata) {
      axios
        .get("/api/palettes")
        .then(response => {
          this.artists = response.data.artists;
          //   this.artist_text = response.data.artists[0].Plates_description;
          this.first = response.data.artists[0].id;
          let palleteID = this.$route.query.mydata;
          let instance = this;
          setTimeout(function() {
            instance.goToSlideByID(palleteID);
          }, 100);

          axios
            .get("/api/view?id=" + this.$route.query.mydata)
            .then(response => {
              (this.minPalettesActive = response.data.palettesActive),
                (this.palettesArtists = response.data.palettesArtists);
              this.artist_active = response.data.palettesActive.artist_id;

              this.changeContent(this.currentLanguage);

              if (
                this.countWords(this.minPalettesActive.description) > 110 ||
                this.countWords(this.minPalettesActive.description_ar) > 80
              )
                this.height = "200px";
              else this.height = "auto";
            })

            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));

      //this.addActive(this.$route.query.mydata)
      axios
        .get("/api/viewMinPalettes?id=" + this.$route.query.mydata)
        .then(response => {
          this.minPalettes = response.data.minPalettes;
        })
        .catch(error => console.log(error));
      axios
        .get("/api/artist?id=" + this.$route.query.mydata)
        .then(response => {
          this.artist_active = response.data.artist[0].id;
        })
        .catch(error => console.log(error));
    } else {
      axios
        .get("/api/palettes")
        .then(response => {
          this.artists = response.data.artists;
          this.first = response.data.artists[0].id;
          this.artist_active = this.first;
          //   this.artist_text = response.data.artists[0].Plates_description;
          axios
            .get("/api/view?id=" + this.first)
            .then(response => {
              this.palettes = response.data.palettes;
              (this.minPalettesActive = response.data.palettes[0]),
                (this.palettesArtists = response.data.palettesArtists);
              this.changeContent(this.currentLanguage);
              this.firstpalettesArtists = response.data.palettesArtists[0].id;
              axios
                .get("/api/viewMinPalettes?id=" + this.firstpalettesArtists)
                .then(response => {
                  this.minPalettes = response.data.minPalettes;
                })
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    }
  },

  created() {
    // setInterval(() => {
    //   $(".spinner-content").fadeOut("3000");
    // }, 3000);
  },

  computed: {
    cart() {
      return this.$store.state.products.filter(product => product.quantity > 0);
    },
    currency() {
      return this.$store.getters.currency;
    },
    totalQuantity() {
      return this.$store.state.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    currentLanguage() {
      return this.$i18n.locale;
    },
    isMobileWindow() {
      return this.width <= 767;
    },
    swiper() {
      return this.$refs.mySwiper[0].$swiper;
    }
  },
  methods: {
    goToSlide(artistIndex) {
      this.swiper.slideTo(this.indexes[artistIndex]);
    },
    slideChanged() {
      if (this.userChangingSlide) {
        console.log("slide changed");
        let self = this;
        setTimeout(function() {
          let paletteID = $(
            ".carousel-inner .active .swiper-slide-active .palette"
          ).val();
          let index = $(
            ".carousel-inner .active .swiper-slide-active .index"
          ).val();
          let artistID = $(
            ".carousel-inner .active .swiper-slide-active .artist_id"
          ).val();
          let artist = self.artists.filter(artist => artist.id == artistID)[0];

          self.paletteIndex = artist.artist_palettes.findIndex(
            palette => palette.id == paletteID
          );
          self.addActive(paletteID, index, false, artistID);

          // console.log(paletteID);
          // console.log(index);
        }, 100);
      }
    },
    changeContent(lang) {
      if (lang == "en") {
        this.minPalettesActive.sizing = this.content.sizing_details;
        this.minPalettesActive.print = this.content.print_material;
        this.minPalettesActive.ink = this.content.print_ink;
        this.minPalettesActive.finish = this.content.print_finish;
        this.minPalettesActive.material = this.content.frame_material;
        this.minPalettesActive.frame = this.content.frame_finish;
        this.minPalettesActive.descript = this.minPalettesActive.description;
        this.minPalettesActive.ship = this.content.shipping;
      }
      if (lang == "ar") {
        this.minPalettesActive.sizing = this.content.sizing_details_ar;
        this.minPalettesActive.print = this.content.print_material_ar;
        this.minPalettesActive.ink = this.content.print_ink_ar;
        this.minPalettesActive.finish = this.content.print_finish_ar;
        this.minPalettesActive.material = this.content.frame_material_ar;
        this.minPalettesActive.frame = this.content.frame_finish_ar;
        this.minPalettesActive.descript = this.minPalettesActive.description_ar;
        this.minPalettesActive.ship = this.content.shipping_ar;
      }
    },
    ss(id) {
      console.log(id);
    },
    handleSwap(swapperId) {
      //   console.log("started");
      var element = document.getElementById("swapper" + swapperId);

      //   var el = $(".swiper-wrapper")
      //     .eq(swapperId)
      //     .css("transform");
      var el = document.getElementsByClassName("swiper-wrapper")[swapperId]
        .style.transform;
      var pos = el.substring(el.indexOf("(") + 1, el.indexOf("px"));
      //   console.log(pos);
      //   var translate = (pos / 414) * 33;
      // console.log(translate);
      element.style.transform = "translateX(" + pos + "px)";
      // .first()
      // .css("transform");
      //   console.log(el);

      //   console.log(element);
      //   console.log(element.style.transform);
    },
    countWords(str) {
      str = str.replace(/(^\s*)|(\s*$)/gi, "");
      str = str.replace(/[ ]{2,}/gi, " ");
      str = str.replace(/\n /, "\n");
      return str.split(" ").length;
    },
    toggleParagraphHeight() {
      //   console.log(this.countWords(this.minPalettesActive.descript));
      //   console.log(this.minPalettesActive.descript.length);
      this.show = !this.show;
      if (this.show) this.height = "auto";
      else {
        this.height = "200px";
      }
    },
    addToCart(product) {
      this.$store.dispatch("addProductToCart", {
        product,
        quantity: 1
      });
    },
    updateCart(product, updateType) {
      for (let i = 0; i < this.$store.state.products.length; i++) {
        if (this.$store.state.products[i].id === product.id) {
          if (updateType === "subtract") {
            if (this.$store.state.products[i].quantity !== 0) {
              this.$store.state.products[i].quantity--;
            }
          } else {
            this.$store.state.products[i].quantity++;
          }

          break;
        }
      }
    },
    moveIndicators(index, moveSlide = true) {
      let list = document.getElementById("carousel-indicators");
      if (this.isMobileWindow) {
        list.style.transform = "translateX(" + (80 - 80 * index) + "px)";
        if (moveSlide) this.goToSlide(index);
        this.currentArtist = index;
      } else list.style.transform = "translateX(0px)";
    },
    getdata($id) {
      // let indicators = document.getElementsByClassName("carousel-element");
      this.moveIndicators($id);

      //
      //active-carsoul
      let id = 0;
      if (this.artists[$id]) {
        id = this.artists[$id].id;
      } else if ($id > this.artists.length - 1) {
        id = this.artists[0].id;
      } else {
        id = this.artists[this.artists.length - 1].id;
      }
      axios
        .get("/api/view?id=" + id)

        .then(response => {
          this.palettes = response.data.palettes;
          this.artist_text = response.data.artist[0];
          this.minPalettesActive = response.data.palettes[0];
          if (this.minPalettesActive == null) {
            this.minPalettesActive = "";
          } else {
            this.changeContent(this.currentLanguage);
          }

          if (response.data.palettesArtists.length > 0) {
            this.firstminPalettes = response.data.palettesArtists[0].id;
          } else {
            this.firstminPalettes = null;
          }

          axios
            .get("/api/viewMinPalettes?id=" + this.firstminPalettes)
            .then(response => {
              this.minPalettes = response.data.minPalettes;
            })
            .catch(error => console.log(error.response.data));
        })
        .catch(error => console.log(error.response.data));
    },
    small(el, price, avilable, cardId) {
      this.sizeTarget = "small";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "30x40cm (12x16)";

      //  $(".details .details_img").css({
      //      transform:"scale(1)"
      //  })

      // $(".details .content").css({marginTop:"27px"})

      $(".details.active .details_img").css({
        transform: "scale(.7)"
      });
      $(".details.active .content").css({ marginTop: "-27px" });
    },
    medium(el, price, avilable, cardId) {
      this.sizeTarget = "medium";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "50x66.5cm (20x26)";

      //  $(".details .details_img").css({
      //      transform:"scale(1)"
      //  })
      // $(".details .content").css({marginTop:"27px"})

      // $(".details.active .details_img").css({
      //     transform:"scale(.8)"
      // })
      // $(".details.active .content").css({marginTop:"-17px"})
    },
    larg(el, price, avilable, cardId) {
      this.sizeTarget = "large";
      this.avilableTarget = avilable;
      this.active_el = el;
      this.priceTarget = price;
      this.button = true;
      this.sizeCm = "70x93.5cm (28x37)";

      $(".details.active .details_img").css({
        transform: "scale(1)"
      });
      $(".details.active .content").css({ marginTop: "27px" });
    },
    addActive($minPalette_id, index, move = true, artistID) {
      // console.log(  this.$refs.myActive)
      let myActive = this.$refs.myActive[index];
      $(myActive)
        .addClass("active")
        .siblings()
        .removeClass("active");

      $(".details").on("click", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active");
      });
      if (move) {
        $("html,body").animate(
          {
            scrollTop: "450px"
          },
          500
        );
      }

      // if (!isNewRelease) {
      for (let index = 0; index < this.artists.length; index++) {
        if (this.artists[index].id == artistID) {
          this.moveIndicators(index, false);
        }
      }
      // }
      //   } else {
      //     this.moveIndicators(index,false);
      //     // this.goToSlide(index);
      //   }
      axios
        .get("/api/viewMinPalettes?id=" + $minPalette_id)
        .then(response => {
          this.minPalettes = response.data.minPalettes;
          this.minPalettesActive = response.data.palettes[0];
          this.changeContent(this.currentLanguage);
          this.show = false;
          if (
            this.countWords(this.minPalettesActive.description) > 110 ||
            this.countWords(this.minPalettesActive.description_ar) > 80
          )
            this.height = "200px";
          else this.height = "auto";
          //   this.toggleParagraphHeight();
        })
        .catch(error => console.log(error));
    },
    addtocart($id, price, avilableTarget, sizeTarget, sizeCm) {
      $(".modal-mask").css("left", 0);
      $(".modal-cart-footer").addClass("animation", "i 1s ");
      setTimeout(() => {
        $(".modal-mask").css("backgroundColor", "rgba(0,0,0,.5)");
        $(".modal-mask").css("height", "100vh");
      }, 800);
      axios
        .post("/api/addtocart?id=" + $id)
        .then(res => {
          // console.log(res.data.paletteCart)

          // $('#count')[0].innerText++

          let product = res.data.paletteCart;

          if (sizeTarget == "large") {
            if (this.minPalettesActive.L_avalible <= 0) {
              this.minPalettesActive.L_avalible = 0;
              return;
            }
            --this.minPalettesActive.L_avalible;
          } else if (sizeTarget == "small") {
            if (this.minPalettesActive.S_avalible <= 0) {
              this.minPalettesActive.S_avalible = 0;
              return;
            }
            --this.minPalettesActive.S_avalible;
          } else {
            if (this.minPalettesActive.M_avalible <= 0) {
              this.minPalettesActive.M_avalible = 0;
              return;
            }
            --this.minPalettesActive.M_avalible;
          }
          this.$store.dispatch("addProductToCart", {
            product,
            quantity: 1,
            price: price,
            avilableTarget,
            sizeTarget,
            sizeCm
          });
        })
        .catch(error => console.log(error));
    },
    goToSlideByID(palleteID) {
      let palleteIndex, pallete;
      for (let index = 0; index < this.allPalettes.length; index++) {
        if (this.allPalettes[index].id == palleteID) {
          palleteIndex = index;
          pallete = this.allPalettes[index];
        }
      }
      let artistID = pallete.artist_id;

      this.userChangingSlide = false;
      this.swiper.slideTo(palleteIndex);

      this.addActive(palleteID, palleteIndex, true, artistID);
      let artist = this.artists.filter(artist => artist.id == artistID)[0];

      this.paletteIndex = artist.artist_palettes.findIndex(
        palette => palette.id == palleteID
      );
    }
  }, //method
  watch: {
    $route(to, from) {
      let palleteID = this.$route.query.mydata;
      axios
        .get("/api/viewMinPalettes?id=" + palleteID)
        .then(response => {
          this.minPalettes = response.data.minPalettes;
          // console.log(palleteID );
        })
        .catch(error => console.log(error.response.data));
      axios
        .get("/api/artist?id=" + palleteID)
        .then(response => {
          this.artist_active = response.data.artist[0].id;
        })
        .catch(error => console.log(error.response.data));
      this.goToSlideByID(palleteID);
    },

    currentLanguage(newLang, oldLang) {
      this.changeContent(newLang);
    }
  }
};
</script>


<style scoped>
.col-md-6 {
  padding: 5px !important;
}
.carousel-item .header {
  width: 100%;
  height: 39vw;
  /* margin-top: 4%; */
}
.header-sm {
  display: none;
}
.header-lg {
  display: block;
}
@media (max-width: 767px) {
  .carousel-item .header {
    height: 600px;
    transition: all 300ms ease 0.2s;
    /* transform: scale3d(4.5, 1.5, 1.5); */
    width: 300%;
    /* transform: translateX(-30%); */
  }
  .header-sm {
    display: block;
  }
  .header-lg {
    display: none;
  }
  .carousel-indicators .active::after {
    display: none !important;
  }
}
.header_sm {
  background-image: url("https://cdn.shopify.com/s/files/1/3000/4362/files/turrell_mobile_final_post_3_2048x.jpg?v=1565189502");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 300px;
  background-position: center;
  position: relative;
  display: none;
}

.wrapper {
  position: absolute;
  top: 1rem;
  transform: translate(-50%, 0);
  left: 51%;
  width: 100%;
}

@media (max-width: 768px) {
  .header_sm {
    display: none;
  }
  .wrapper {
    top: -1vw;
  }
  .detials {
    left: 8rem;
  }
}
.details {
  color: #fff;
  cursor: pointer;
  /* transition: all 0.4s; */
  left: 1rem;
}
.details img {
  width: 20vw;
  transition: all 0.4s;
  height: 27vw;
  border-top: 8px solid #111;
  border-bottom: 8px solid #111;
  box-shadow: -2px 3px 8px 0 rgba(0, 0, 0, 0.57);
  transform: scale(0.95);
}
.wrapper .row {
  transform: scale(0.5);
}
.wrapper .details .content {
  margin-left: 2rem;
  position: relative;
  font-size: 10px;
  width: 83%;
  margin-top: 20%;
  /* margin: 16px auto 0; */
  padding: 6px 5px;
  transition: all 0.5s;
  color: white;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.75);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100%;
  z-index: 2;
  top: 10px;
  padding: 0 20px;
  border: 4px solid rgba(0, 0, 0, -7.25);
}

.wrapper .details .content .triangle {
  position: relative;
  z-index: 1;
  /* padding: 10px; */
  display: inline-block;
  top: -29px;
  left: 50%;
  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);
  transform: rotate(0) scale(2.3) translate(-16%, 19%);
  /* background: rgba(0,0,0,0.9); */
  width: 22px;
  height: 10px;
}

/* .details.active .triangle{
            top: -26.1px;

    } */
/* .wrapper .details .content:hover{
        border: 2px solid #00a4ee;
    } */

/* .details-content{
        margin:20px;
    } */
.details:hover .details_img {
  transform: scale(1) !important;
}
.add-cart {
  padding-left: 50px;
}

.add-cart div span {
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  display: inline-block;
  /* margin-right: 5px; */
  padding-left: 10px;
  text-transform: lowercase;
  color: #fff;
  border-radius: 999px;
  background-color: #000;
}
.add-cart p {
  font-size: 20px;
}
#addToCartsm {
  transition: all 0.7s ease-in-out;
}
.add-cart .add-button,
#addToCartsm .add-button {
  font-size: 20px;
  font-weight: 700;
  line-height: 70px;
  display: block;
  width: 100%;
  margin-bottom: 40px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: none;
  background-color: #000;
}
.add-cart .more {
  outline: none;
}
.list-group .list-group-item {
  cursor: pointer;
  border-left: none;
  border-right: none;
  padding-left: 10px;
  padding-right: 10px;
}
.list-group {
  padding-left: 0;
}
/*
    .carousel-control-prev{
        left: -50%;
    } */
.carousel-indicators li {
  box-sizing: content-box;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  width: 67px;
  height: 29px;
  margin-right: 2%;
  margin-left: 0;
  text-indent: 0;
  cursor: pointer;
  color: black;
  background: none;
}
.carousel-indicators {
  bottom: -6%;
  width: 100%;
  background-color: #f5f0ed;
  margin-left: 0;
  margin-right: 0;
}
@media (min-width: 768px) {
  .carousel-indicators {
    transform: translateX(0px) !important;
  }
}
@media (min-width: 768px) {
  /* .carousel-indicators {
    bottom: -8%; */
  /* bottom: -14%; */
  /* padding-bottom: 8vh;
    overflow-x: scroll !important;
  } */
}
/* .carousel-indicators .active {
  border-bottom: 3px solid #00aeef;
} */
.small,
.medium,
.larg {
  padding: 40px 120px !important ;
  margin-right: 20px !important;
  font-size: 20px;
}
.details.active .content {
  border: 4px solid #00a4ee;
}
.details.active .triangle {
  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon-active.png) !important;
}
.active_btn {
  border: 2px solid #00a4ee;
}
.content h6,
.content span {
  font-size: 1.6rem;
}

.price {
  font-size: 1.6rem !important ;
}

.infor {
  top: -12px;
  left: -20px;
  position: relative;
  transform: scale(0.8);
}

/* Start Responsive */
@media (max-width: 1264px) {
  .wrapper .row {
    position: absolute;
    /* top: -230px; */

    /* left: 1.5rem; */
    /* transform: scale(0.4); */
  }
  .details-content {
    /* margin: 10px 30px ; */
  }
}

@media (max-width: 960px) {
  /* .details {
    left: 7rem;
  } */
  .wrapper .row {
    /* transform: scale(0.4); */
  }
  .details-content {
    /* margin: 10px 50px ; */
  }
  .infor[data-v-266b1872] {
    left: 0;
    position: relative;
    transform: scale(0.9);
  }
  /* .details img {
    width: 25vw;
    height: 34vw;
  } */
  /* .wrapper .details img {
    width: 100%;
  } */
  .wrapper .details .content {
    width: 100%;
  }
}

@media (max-width: 880px) {
  .wrapper .row {
    /* transform: scale(0.4); */
    display: flex;
    /* justify-content: space-evenly !important; */
  }
  .details-content {
    /* margin: 10px 50px ; */
    margin-right: -18px;
  }
  .infor[data-v-266b1872] {
    left: 8px;
    position: relative;
    transform: scale(0.9);
  }
  .wrapper .details {
    width: 300px !important;
  }

  /* .wrapper .details img {
    width: 93%;
  } */
  .wrapper .details .content {
    width: 93%;
  }
}
.navigate2 {
  margin: 100px 0;
  text-align: center;
}
.navigate2 svg {
  animation: e 2s infinite;
  width: 28px;
  height: 64px;
}

.navigate2 span {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 5px;
  transition: opacity 0.5s ease-out;
  opacity: 0.2;
  border-radius: 50%;
  background-color: #fff;
}
@keyframes e {
  0%,
  20%,
  50%,
  80%,
  to {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}
.parent {
  position: absolute;
  top: 450px;
  left: 50%;
  transform: translate(-50%, 0);
}
.parent img {
  width: 170px;
}

.agile_swap {
  /* position: absolute; */
  /* top: 100px; */
  /* left: 50%;
    transform: translate(50%,0); */
  position: absolute;
  text-align: center;
  /* top:2%; */
  /* transform: scale(.9); */
}
.agile_swap img {
  width: 37%;
  margin-top: 80px;
  border-top: 4px solid #111;
  border-bottom: 4px solid #111;
}
/*
.pallete-swiper .swiper-pagination{
    display: none;
}
.agile_swap  .agile_slide {
    width: 77% !important;

} */
.swiper-wrapper {
  /* left: 44px; */
}

.agile_swap .content {
  position: relative;
  font-size: 10px;
  width: 68%;
  margin-top: 34px;
  /* margin: 16px auto 0; */
  padding: 6px 5px;
  transition: all 0.5s;
  color: white;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.75);
  top: 18px;
  padding: 0 20px;
  border: 4px solid rgba(0, 0, 0, -7.25);
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
}

.agile_swap .content .triangle {
  position: relative;
  z-index: 1;
  /* padding: 10px; */
  display: inline-block;
  top: -29px;
  left: 50%;
  background: url(https://cdn.shopify.com/s/files/1/3000/4362/t/109/assets/icon.png);
  transform: rotate(0) scale(2.3) translate(-316%, 18%);
  /* background: rgba(0,0,0,0.9); */
  width: 22px;
  height: 10px;
}
@media (max-width: 414px) {
  .agile_swap .content .triangle {
    left: 63% !important;
  }
  .agile_swap img {
    height: 200px !important;
    width: 155px !important;
  }
  .parent {
    top: 430px;
    left: 52%;
  }
  .agile_swap .content {
    width: 246px !important;
  }
  .agile_swap .content .triangle {
    left: 65% !important;
  }
  .addToCart-sm .add-button {
    height: 50px !important;
    line-height: 24px !important;
  }
}

.rotate {
  width: 100%;
  position: relative;
  height: 82px;
  transform: rotate(49deg);
  background: black;
}

.carousel-indicators li {
  width: auto;
  padding: 0 5px;
}

.custom-padding:nth-child(odd) {
  padding-right: 5px !important;
  padding-left: 20px !important;
  padding-bottom: 0.3px !important;
}

.custom-padding:nth-child(even) {
  padding-right: 20px;
  padding-left: 5px !important;
  padding-bottom: 0.3px;
}
.swap_sm {
  display: none;
}
.addToCart-sm {
  display: none;
}
@media (max-width: 767px) {
  .custom-padding:nth-child(odd) {
    padding-right: 11px !important;
    padding-left: 11px !important;
    padding-bottom: 0.3px !important;
  }
  .sold-out {
    display: none;
  }
  .col-sm-12 {
    display: flex;
    justify-content: center;
  }
  .custom-padding:nth-child(even) {
    padding-right: 11px;
    padding-left: 11px !important;
    padding-bottom: 0.3px;
  }
  .add-cart[data-v-266b1872] {
    padding-left: 6px;
  }
  .addToCart-sm {
    position: relative;
    display: inline;
    background: #f0f0f0;
    position: fixed;
    bottom: 0%;
    z-index: 99;
    width: 100%;
    left: 0px;
    right: 0;
    /* height: 30vw; */
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
  }
  .addToCart {
    display: none !important;
  }
  .swap_sm {
    display: block;
  }
  .carousel-indicators {
    background-color: transparent !important;

    bottom: 3%;
  }
  .carousel-indicators li {
    color: #fff !important;
    font-size: 18px;
    padding: 13px 0 10px;
    width: 80px;
    padding-right: 0;
    padding-left: 0;
    transform: scale(0.9);
  }
  .swap_lg {
    display: none;
  }
  .agile_swap .agile_slide {
    position: relative;
    /* left: -15.7% !important; */
  }
  .v-application ol,
  .v-application ul {
    /* padding-left: 15vw !important; */
    /* padding-bottom: 3vh !important; */
    padding-bottom: 1vh !important;
  }
  .agile_swap {
    left: 0 !important;
    top: 0 !important;
  }
  .agile_swap .agile_slide {
    left: 0 !important;
    max-width: 100vw !important;
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  /* .details:hover {
    transform: scale(1) !important;
  } */
  .details .mobile-background {
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    border: none;
    color: transparent;
    z-index: -1;
    transform: scale(1);
    box-shadow: none !important;
  }
  .agile_swap img:last-of-type {
    margin-top: 32% !important;
  }
  .carousel-control-next,
  .carousel-control-prev {
    display: none;
  }
  .carousel-indicators {
    transform: translateX(80px);
  }
}
@media (max-width: 320px) {
  .v-application ol,
  .v-application ul {
    /* padding-left: 30vw !important; */
  }
  .agile_swap .content {
    padding-bottom: 23vw;
  }
  .addToCart-sm .add-button {
    height: 50px !important;
  }
}

.swiper-container {
  margin-bottom: 50px;
}
.agile_swap {
  position: absolute;
  top: 1%;
  left: 16%;
  width: 100%;
}
.agile_swap img {
  height: 250px;
  width: 189px;
}
.agile_swap .content {
  width: 331px;
}
.agile_swap .agile_slide {
  position: relative;
  left: -11%;
}
.text-right strong::after {
  content: ":";
}
header {
  width: 81% !important;
  left: 10% !important;
}
@media (max-width: 768px) {
  header {
    left: 0% !important;
  }
}
.content {
  right: 10% !important;
}

@media (min-width: 760px) and (max-width: 1019px) {
  .swiper-container {
    height: 65vw !important;
  }
}
@media (min-width: 1020px) {
  .swiper-container {
    height: 46vw !important;
  }
}
@media (max-width: 759px) and (min-width: 500px) {
  .swiper-container {
    height: 100vw !important;
  }
}
@media (min-width: 320px) and (max-width: 499px) {
  .swiper-container {
    height: 600px !important;
  }
}
@media (max-width: 759px) {
  .product-grid-item
    .product-grid-item__image
    .product-grid-item__imagewrapper {
    height: 80vw;
    width: 80vw;
    margin-right: 10vw;
    margin-left: 10vw;
    margin: auto;
  }

  .swiper-slide {
    max-width: 80vw;
    margin-right: 10vw;
    margin-left: 5.7vw;
  }
}
/* #palletes-images-scroll::-webkit-scrollbar {
  width: 2em;
} */
#palletes-images-scroll::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 100px;
  height: 4px;
}

#palletes-images-scroll::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
}
/* #palletes-images-scroll::-webkit-scrollbar {
  -webkit-appearance: scrollbartrack-horizontal;
} */
#palletes-images-scroll {
  display: none;
  /* overflow: -moz-scrollbars-horizontal; */
  overflow-x: auto;
  overflow-y: hidden;
  /* height: 70vh; */
  width: 90vw;
  margin: 0 auto;
  white-space: nowrap;
  padding: 20px;
}
.palletes-images {
  width: 75vw;
  /* padding: 5px; */
  height: 75vw;
  background-origin: content-box;
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  padding: 3px;
}
@media (max-width: 769px) {
  .carousel-item .header {
    margin-top: 0 !important;
  }
  #palletes-images {
    display: none;
  }
  #palletes-images-scroll {
    display: block;
    margin-bottom: 50px;
  }
  #text-images {
    flex: 0 0 100%;
    max-width: 95%;
    position: relative;
    bottom: 10vw;
    margin-bottom: 30px;
    /* margin-top: 0px !important; */
  }
  #text-images .add-cart {
    max-width: 100% !important;
    width: 100% !important;
    /* top: -21vw; */
    position: relative;
    bottom: -13vw !important;
  }
  .navbar {
    background-color: transparent !important;
  }
}
.carousel-indicators {
  transition: all 300ms ease 0.2s;
}
.navbar {
  color: #fff !important;
  background-color: #000 !important;
}
.carousel-indicators .active {
  font-weight: bold;
}
.carousel-indicators .active::after {
  width: 100%;
  height: 3px;
  background-color: #00aeef;
  content: "";
  display: block;
  margin-top: 11px;
}
.carousel-indicators li {
  opacity: 1;
}
@media (max-width: 768px) and (min-width: 500px) {
  .details img {
    width: 24vw;
    height: 32vw;
  }
  /* .swiper-container .swiper-slide {
    margin-right: 10px !important;
  } */
}
@media (max-width: 991px) and (min-width: 768px) {
  .carousel-item .header {
    height: 48vw;
  }
  #text-images {
    margin-top: 0px !important;
  }
  /* #scrolled {
    margin-top: 78px;
  } */
}
</style>

