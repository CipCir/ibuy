<template>
  <div id="lvl_cart" class="lvl_container">
    <div id="navRow" class="row">
      <span class="left">
        <span class="btn nav_buttons_class" @click="Back()">{{
          general_texts.btn.bckResults
        }}</span>
      </span>
    </div>
    <div class="row" style="padding-left:15px">
      <h5>{{ general_texts.cart.cartTitle }}</h5>
      <div v-if="CartArr.length == 1">
        {{ general_texts.cart.empty }}
      </div>
    </div>
    <div id="cartRow" class="row" v-if="CartArr.length > 1">
      <div
        class="col s12 l10 prodCol"
        v-for="prod in CartArr.filter(itm => {
          return itm.id > -1;
        })"
        :key="prod.id"
      >
        <hr />
        <div
          class="prodImg col s4 m3"
          :style="{
            'background-image':
              'url(' + prodMediaPath + prod.imgArr[0].imgSrc + ')'
          }"
        ></div>
        <div class="col s8 m9">
          <div class="ProdLbl" v-html="prod.lbl"></div>
          <div class="ProdBy" v-html="general_texts.by + prod.by"></div>
          <div>
            <stars
              v-if="prod.rating != null"
              :rating="prod.rating"
              :skinProps="skinProps"
            ></stars
            >&nbsp;

            <span class="Prdct_reviews">{{ prod.reviews }}</span>
          </div>

          <div v-html="prod.addInf1"></div>
          <!-- price -->
          <div class="prodPrice">
            <span v-html="FormatPrice(prod.price)"></span>
          </div>
          <!-- additional info -->
          <div v-html="prod.addInf2"></div>
          <!-- quantity -->
          <div>
            {{ general_texts.qty }}
            <select v-model="prod.quantity" @change="UpdateQ()" class="qSelect">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
          <!-- remove -->
          <div>
            <span class="DelLbl" @click="DeleteProd(prod)">{{
              general_texts.del
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="totalContainer" class="row center-align">
      <div>
        {{ general_texts.subTot }} ({{ updCart.nrProd }}
        {{ general_texts.itm }} ):
        <span v-html="FormatPrice(updCart.sum)"></span>
        <!-- {{ general_texts.currency }}
        {{ updCart.sum.toFixed(skinProps.PriceFormats.FixedDecimals) }} -->
      </div>
      <div
        v-if="ProdSkin.hasVoucher"
        :class="parseInt(updCart.remV) > 0 ? 'blue-text' : 'red-text'"
      >
        {{ general_texts.remainingV }} :
        <span v-html="FormatPrice(updCart.remV)"></span>
        <!-- {{ updCart.remV }} -->
      </div>
    </div>
    <div
      id="xxCheckoutRow"
      class="row "
      v-if="CartArr.length > 1 || ProdSkin.allowEmptyCart"
    >
      <!-- <div class="col s12 m4 l2"></div> -->
      <span id="CheckoutCol" class="col s12 m5 l3">
        <span id="CheckoutBtn" class="CheckoutBtn" @click="CheckOut()">{{
          general_texts.cart.checkout
        }}</span>
      </span>
    </div>
    <!-- modal -->
    <div id="modal1" class="modal">
      <div class="header_container">
        <span class="modal-close close_modal_btn">X</span>
      </div>
      <div class="modal-content">
        <div id="ProdMediaCont" class="row">
          {{ general_texts.cart.negVoucher }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import stars from "./stars.vue";

export default {
  name: "lvl_Cart",
  components: {
    stars
  },
  props: {
    general_texts: Object,
    prodMediaPath: String,
    CartArr: Array,
    updCart: Object,
    texts: Object,
    skinProps: Object,
    ProdSkin: Object,
    Cart: Array,
    voucher: String,
    cartVal: Number
  },
  data() {
    return {
      loadedDate: null
    };
  },
  created() {
    window.scrollTo(0, 0);
    // this.subTotal();
    this.loadedDate = new Date();
  },
  mounted() {
    var modal = document.querySelector(".modal");
    M.Modal.init(modal);
  },
  methods: {
    FormatPrice(Pvalue) {
      let priceFormat = "";
      let FixedDecimalPrice = parseFloat(Pvalue).toFixed(
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
    Back() {
      this.$emit("updCartTime", this.loadedDate);
      this.$emit("updtLvl", { lvl: "Products" });
    },
    CheckOut() {
      if (
        parseInt(this.updCart.remV) < 0 &&
        !this.ProdSkin.allowNegativeVoucher
      ) {
        M.Modal.getInstance($("#modal1")).open();
        return false;
      }
      this.$emit("updtLvl", { lvl: "Products" });
      this.$emit("updCartTime", this.loadedDate);
      this.$emit("checkOut");
    },
    UpdateQ() {
      this.$emit("RCart");
    },
    DeleteProd(prod) {
      this.$emit("remProd", prod);
      this.$emit("updCartTime", this.loadedDate);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#totalContainer {
  font-weight: bold;
}
.prodImg {
  min-height: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}
#cartRow {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}
.prodCol {
  margin-left: unset !important;
}
.DelLbl {
  margin-top: 10px;
  color: #0066c0;
  cursor: pointer;
  font-size: 12px;
  border: solid 1px #babbbd;
  border-radius: 5px;
  width: 63px;
  height: 27px;
  display: block;
  padding: 5px;
  text-align: center;
  background-color: #e7e9ec;
}
#CheckoutRow {
  display: flex;
  justify-content: center;
}

/* medium */
@media only screen and (min-width: 601px) {
  #CheckoutCol {
    margin-left: 29.333333%;
  }
}
/* large */
@media only screen and (min-width: 993px) {
  #CheckoutCol {
    margin-left: 37.666667%;
  }
}
#CheckoutBtn {
  width: 100%;
  padding: 5px;
  color: #111;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
}

.header_container {
  text-align: right;
  padding-right: 13px;
  padding-top: 10px;
  font-size: 20px;
}
</style>
