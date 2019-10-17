<template>
  <div id="headerComp">
    <div class="row_header_first row">
      <div
        class="col s7 m3 l3 valign-wrapper clickable"
        @click="UpdateLvl('Products')"
      >
        <img :src="texts.header.logo_img" alt="logo image here" />
      </div>
      <!--small device -->
      <div
        class="col hide-on-med-and-up s5 valign-wrapper cart_container clickable Head_cart_color"
        @click="UpdateLvl('Cart')"
      >
        <div>
          {{ cart.nrProd }}
          <i class="material-icons small">shopping_cart</i>
        </div>
        <div v-if="ProdSkin.hasVoucher" id="voucher">
          {{ texts.general_texts.voucher }}:
          <span v-html="FormatCartVal()"> </span>
        </div>
      </div>
      <div class="col s12 m8 l6 valign-wrapper" v-if="ProdSkin.show_search">
        <div
          class="col s2 valign-wrapper searchBar_gen searchBar_seg1"
          v-html="texts.header.search_all_text"
        ></div>
        <div class="col s12 valign-wrapper searchBar_gen  searchBar_seg2">
          <span
            class="placeholder_search"
            v-html="ProdSkin.placeholder_search"
          ></span>
        </div>
        <div class="col s2 valign-wrapper searchBar_gen  searchBar_seg3">
          <i class="material-icons small">search</i>
        </div>
      </div>
      <!-- hide-on-med-and-down -->
      <div
        class="col hide-on-med-and-down l3 right right-align header_opt_0"
        v-html="texts.header.opt0"
      ></div>
    </div>
    <!-- second row -->
    <div class="row_header_second row">
      <div
        class="col hide-on-small-only m3 l3 white_space_pre  header_opt_1"
        v-html="texts.header.opt1"
      ></div>
      <div
        class="col hide-on-small-only m6 l5 white_space_pre forced_line  header_opt_2"
        v-html="texts.header.opt2"
      ></div>
      <div
        class="col hide-on-med-and-down l2 white_space_pre  header_opt_3"
        v-html="texts.header.opt3"
      ></div>
      <div
        class="col hide-on-small-only m3 l2 valign-wrapper cart_container clickable Head_cart_color"
        :class="{ addMarg: ProdSkin.hasVoucher }"
        @click="UpdateLvl('Cart')"
      >
        <div>
          {{ cart.nrProd }}
          <i class="material-icons small">shopping_cart</i>
        </div>
        <div v-if="ProdSkin.hasVoucher" id="voucher">
          {{ texts.general_texts.voucher }}:
          <span v-html="FormatCartVal()"> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComp",
  props: {
    skinProps: Object,
    texts: Object,
    cart: Object,
    ProdSkin: Object
  },
  methods: {
    FormatCartVal() {
      let priceFormat = "";
      let FixedDecimalPrice = this.cart.remV;
      //curency left
      if (this.skinProps.PriceFormats.CurrencySideLeft) {
        if (this.skinProps.PriceFormats.CurrencyUpper) {
          priceFormat +=
            "<sup>" + this.texts.general_texts.currency + "</sup> ";
        } else {
          priceFormat += this.texts.general_texts.currency + " ";
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
          priceFormat +=
            " <sup>" + this.texts.general_texts.currency + "</sup>";
        } else {
          priceFormat += " " + this.texts.general_texts.currency;
        }
      }
      return priceFormat;
    },
    UpdateLvl(level) {
      this.$emit("updtLvl", { lvl: level });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.forced_line {
  overflow: hidden;
  white-space: nowrap;
}
.cart_container {
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.addMarg {
  margin-bottom: 10px;
}
.row_header_first {
  padding-top: 10px;
}
.row_header_second {
  padding-bottom: 10px;
}
#search_txt {
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  text-overflow: ellipsis;
  user-select: none;
  margin: 0px;
}

#headerComp > div {
  margin: 0px;
}
#headerComp {
  user-select: none;
}
.white_space_pre {
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
