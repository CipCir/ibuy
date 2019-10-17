<template>
  <div id="lvl_Main" class="lvl_container">
    <div id="navRow" class="row">
      <span class="left">
        <span class="btn nav_buttons_class" @click="updateLevel('Products')">{{
          general_texts.btn.bckResults
        }}</span>
      </span>
      <span class="right">
        <span class="btn nav_buttons_class" @click="updateLevel('Cart')">{{
          general_texts.btn.gtCheckout
        }}</span>
      </span>
    </div>
    <div id="prodctCont" class="row">
      <div class="col xl1 extraCol show-on-extra-large"></div>
      <div id="PrdctArea" class="col m12 xl10">
        <div id="PrdSplitCont" class="row">
          <div id="ProdImgCont" class="col s12 m8 l9">
            <!-- prod name and review -->
            <div class="row">
              <div>
                <span v-html="Prdct.lbl"></span>&nbsp;<span
                  class="ProdBy"
                  v-html="general_texts.by + Prdct.by"
                ></span>
              </div>
              <div>
                <stars
                  v-if="Prdct.rating != null"
                  :rating="Prdct.rating"
                  :skinProps="skinProps"
                ></stars
                >&nbsp;
                <span class="lowTxt Prdct_reviews">
                  <span>{{ Prdct.reviews }}&nbsp;</span>
                  <span v-html="general_texts.customRev"></span>
                </span>
              </div>
            </div>
            <!-- prod images -->
            <!-- mobile -->
            <div class="row hide-on-med-and-up">
              <div id="ProdImgContMob" class="row s12 center-align noMargin">
                <!-- main img -->
                <div class="col s2 navContainer" @click="slideImg(-1)">
                  <i class="medium material-icons">chevron_left</i>
                </div>
                <div
                  id="mainImgContMob"
                  class="col s8 center-align"
                  @click="imageClicked()"
                >
                  <div>
                    <img
                      class="ProdImgMob"
                      :src="prodDB.prodMediaPath + PrdImg.imgSrc"
                    />
                  </div>
                </div>
                <div class="col s2 navContainer" @click="slideImg(1)">
                  <i class="medium material-icons">chevron_right</i>
                </div>
              </div>
              <!-- thumbs  :class="{ selected: PrdImg == thumb }" -->
              <div id="tumbContMob" class="row s12 center-align noMargin">
                <div
                  v-for="(thumb, ind) in Prdct.imgArr"
                  :key="ind"
                  class="tumbImg"
                  :class="PrdImg == thumb ? 'SelectedThumb' : ''"
                  @click="updMainImg(ind)"
                >
                  <img :src="prodDB.prodMediaPath + thumb.imgSrc" />
                </div>
              </div>
            </div>
            <!--  -->
            <!-- desktop -->
            <div class="row hide-on-small-only" id="TumbAndProd">
              <!-- thumbs -->
              <div id="tumbCont" class="center-align">
                <div
                  v-for="(thumb, ind) in Prdct.imgArr"
                  :key="ind"
                  class="tumbImg"
                  :class="PrdImg == thumb ? 'SelectedThumb' : ''"
                  @click="updMainImg(ind)"
                >
                  <img :src="prodDB.prodMediaPath + thumb.imgSrc" />
                </div>
              </div>
              <!-- main img -->
              <div
                id="mainImgCont"
                class="center-align clickable"
                @click="imageClicked()"
              >
                <div class="prodImg">
                  <img
                    id="img_displayed"
                    :src="prodDB.prodMediaPath + PrdImg.imgSrc"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- cart container -->
          <div id="cartCont" class="col s12 m4 l3">
            <div class="row center-align">
              <span class="lowTxt" v-html="general_texts.price"></span> :
              <span class="prodPrice">
                <span v-html="FormatPrice(Prdct)"></span>
              </span>
            </div>
            <div class="row">
              <center>
                <div class="Prdct_addInf3" v-html="Prdct.addInf3"></div>
              </center>
            </div>
            <div class="row center-align">
              {{ general_texts.qty }}
              <select v-model="quantity" class="qSelect">
                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
              </select>
            </div>
            <div class="row center-align">
              <div class="addCart cart_btn" @click="addToCart()">
                {{ general_texts.btn.addCart }}
              </div>
            </div>
            <!-- cart banner -->
            <div
              class="row center-align clickable"
              v-if="Prdct.hasBnrCartImg"
              @click="$emit('StoreBnr', 'Cart')"
            >
              <img
                :src="prodDB.prodMediaPath + prodDB.SponsoredProd.bannerCartImg"
              />
            </div>
          </div>
        </div>
        <!-- under the products -->
        <div class="BtmProdCont row">
          <img
            class="btm_img hide-on-med-and-up show-on-medium"
            :src="prodDB.prodMediaPath + Prdct.detailsImgArr[0]"
            alt="additional image 1 here"
          />
          <img
            class="btm_img hide-on-med-and-down"
            :src="prodDB.prodMediaPath + Prdct.detailsImgArr[1]"
            alt="additional image 2 here"
          />
        </div>
        <!-- bannder details sponsored -->
        <div
          class="row BtmProdCont clickable"
          v-if="Prdct.hasBnrDetailsImg"
          @click="$emit('StoreBnr', 'Details')"
        >
          <img
            class="btm_img hide-on-med-and-up show-on-medium"
            :src="
              prodDB.prodMediaPath + prodDB.SponsoredProd.bannerDetailsImg[0]
            "
            alt="BtmProdCont image 1 here"
          />
          <img
            class="btm_img hide-on-med-and-down"
            :src="
              prodDB.prodMediaPath + prodDB.SponsoredProd.bannerDetailsImg[1]
            "
            alt="BtmProdCont image 2 here"
          />
        </div>
      </div>
      <div class="col xl1 extraCol show-on-extra-large"></div>
    </div>
    <!-- modal -->
    <div id="modal1" class="modal">
      <div class="header_container">
        <span class="modal-close close_modal_btn">X</span>
      </div>
      <div class="modal-content">
        <div id="ProdMediaCont" class="row">
          <div id="modalImageContainer" v-if="PrdImg.type == 'img'">
            <img
              id="modalImage"
              :src="prodDB.prodMediaPath + PrdImg.imgSrc"
              alt="product image enlarged here"
            />
          </div>
          <div id="modalVideoContainer" v-if="PrdImg.type == 'video'">
            <video id="modalVideo" controls @play="playV()">
              <source
                :src="prodDB.prodMediaPath + PrdImg.videoSrc"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <!-- thumbs -->
        <div id="tumbContMob" class="row s12 center-align noMargin">
          <div
            v-for="(thumb, ind) in Prdct.imgArr"
            :key="ind"
            class="tumbImg"
            :class="PrdImg == thumb ? 'SelectedThumb' : ''"
            @click="updMainImg(ind)"
          >
            <img :src="prodDB.prodMediaPath + thumb.imgSrc" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import stars from "./stars.vue";

export default {
  name: "lvl_Prdct",
  components: {
    stars
  },
  props: {
    general_texts: Object,
    prodDB: Object,
    Prdct: Object,
    texts: Object,
    skinProps: Object,
    ImgIndx: Number
  },
  data() {
    return {
      quantity: 1,
      // imgSeen: [0],
      usedZoom: false,
      videoPlayed: false
    };
  },
  computed: {
    PrdImg() {
      return this.Prdct.imgArr[this.ImgIndx];
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
  mounted() {
    var onModalClose = function() {
      // alert("Modal closed!");
      if ($("video").length) {
        $("video")[0].pause();
      }
    };

    var modal = document.querySelector(".modal");
    M.Modal.init(modal, {
      onCloseEnd: onModalClose // Callback für Modal schließen.
    });
  },
  methods: {
    FormatPrice(prodOBJ) {
      let priceFormat = "";
      let FixedDecimalPrice = parseFloat(prodOBJ.price).toFixed(
        this.skinProps.PriceFormats.FixedDecimals
      );
      //curency left
      if (this.skinProps.PriceFormats.CurrencySideLeft) {
        if (this.skinProps.PriceFormats.CurrencyUpper) {
          priceFormat += "<sup>" + this.general_texts.currency + "</sup> ";
        } else {
          priceFormat += this.general_texts.currency + " ";
        }
      }
      //format price value
      if (this.skinProps.PriceFormats.Upper) {
        let priceArr = FixedDecimalPrice.split(".");
        priceFormat += priceArr[0];
        if (priceArr[1]) {
          priceFormat += "<sup>" + priceArr[1] + "</sup>";
        }
      } else {
        priceFormat += FixedDecimalPrice;
      }
      //curency right
      if (!this.skinProps.PriceFormats.CurrencySideLeft) {
        if (this.skinProps.PriceFormats.CurrencyUpper) {
          priceFormat += " <sup>" + this.general_texts.currency + "</sup>";
        } else {
          priceFormat += " " + this.general_texts.currency;
        }
      }
      return priceFormat;
    },
    playV() {
      // this.videoPlayed = true;
      this.$emit("storePrdInfo", {
        ID: this.Prdct.id,
        prmName: "videoPlayed",
        prmVal: true
      });
    },
    updateLevel(pay) {
      this.$emit("updtLvl", {
        lvl: pay
      });
    },
    addToCart() {
      this.$emit("addInCart", this.quantity);
      this.updateLevel("Products");
    },
    updMainImg(val) {
      // this.imgSeen.push(val);
      this.$emit("updImgIndx", {
        prodId: this.Prdct.id,
        imgInx: val
      });
    },
    slideImg(value) {
      let currIndex = this.ImgIndx; //this.Prdct.imgArr.indexOf(this.PrdImg);
      if (
        currIndex + value < this.Prdct.imgArr.length &&
        currIndex + value >= 0
      ) {
        // this.PrdImg = this.Prdct.imgArr[currIndex + value];
        this.updMainImg(currIndex + value);
      }
    },
    imageClicked() {
      this.usedZoom = true;
      this.$emit("storePrdInfo", {
        ID: this.Prdct.id,
        prmName: "usedZoom",
        prmVal: true
      });
      M.Modal.getInstance($("#modal1")).open();
    }
  }
};
</script>

<style scoped>
#cartCont {
  padding-top: 5px;
}
#ProdMediaCont {
  height: 100%;
  display: flex;
  align-items: center;
}
.modal-content {
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}
.modal {
  top: 5vh !important;
  max-height: 90vh;
  width: 90vw;
  bottom: 5vh;
  overflow: hidden;
}

#modalVideo,
#modalImage {
  max-width: 100%;
  max-height: 70vh;
  display: block;
  margin: 0 auto;
}
/* phone view */
@media (max-height: 600px) {
  #modalVideo,
  #modalImage {
    max-height: 60vh;
  }
}

.header_container {
  text-align: right;
  padding-right: 13px;
  padding-top: 10px;
  font-size: 20px;
}

#img_displayed {
  max-width: 100%;
  max-height: 50vh;
}

#mainImgContMob {
  padding: 0px;
}
.navContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 0.1px rgba(0, 0, 0, 0.1);
  user-select: none;
}
#ProdImgContMob {
  display: flex;
}

.noMargin {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.ProdImgMob {
  max-width: 90%;
  max-height: 40vh;
}
#tumbContMob {
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
}
.BtmProdCont {
  display: grid;
}
.BtmProdCont > img {
  margin: 0 auto;
  position: relative;
  max-width: 100%;
}
.extraCol {
  display: none;
}
#PrdSplitCont {
  padding: 3px;
}
@media only screen and (min-width: 601px) {
  #PrdSplitCont {
    display: flex;
  }
}
#TumbAndProd {
  display: flex;
  align-items: flex-start;
}
#tumbCont {
  display: flex;
  flex-wrap: wrap;
  width: 110px;
}
#mainImgCont {
  width: 100%;
}
.tumbImg {
  display: flex;
  margin: 4px;
  height: 50px;
  justify-content: center;
  align-items: center;

  width: 35px;

  border-radius: 2px;

  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  padding: 0;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
}
.tumbImg > img {
  width: 100%;
}

.tumbImg > img {
  max-height: 90%;
  max-width: 90%;
}

.addCart {
  display: inline-block;
  padding: 3px;
  height: 29px;
  width: 90%;
  max-width: 200px;

  cursor: pointer;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6) inset;
  border-radius: 2px;
  text-align: center;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  text-align: center;
  text-decoration: none !important;
}
</style>


