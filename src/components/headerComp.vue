<template>
  <div id="headerComp">
    <div
      class="row_header_first row"
      v-bind:style="{ 'background-color': skinProps.header.header_bk_color }"
    >
      <div
        class="col s7 m3 l3 valign-wrapper clickable"
        v-bind:style="{ 'background-color': skinProps.header.header_bk_color }"
        @click="UpdateLvl('Products')"
      >
        <img :src="texts.header.logo_img" alt="logo image here" />
      </div>
      <!--small device -->
      <div
        class="col hide-on-med-and-up s5 valign-wrapper cart_container clickable"
        v-bind:style="{
          'background-color': skinProps.header.header_bk_color,
          color: skinProps.header.cart_color
        }"
        @click="UpdateLvl('Cart')"
      >
        <div>
          {{ cart.nrProd }}
          <i class="material-icons small">shopping_cart</i>
        </div>
        <div v-if="ProdSkin.hasVoucher" id="voucher">
          {{ texts.general_texts.voucher }}: {{ texts.general_texts.currency }}
          {{ cart.remV }}
        </div>
      </div>
      <div
        class="col s12 m8 l6 valign-wrapper"
        v-bind:style="{ 'background-color': skinProps.header.header_bk_color }"
        v-if="ProdSkin.show_search"
      >
        <div
          class="col s2 searchbar valign-wrapper"
          v-html="texts.header.search_all_text"
          v-bind:style="{ 'background-color': skinProps.header.search_color1 }"
        ></div>
        <div
          class="col s12 searchbar valign-wrapper"
          v-bind:style="{ 'background-color': skinProps.header.search_color2 }"
        >
          <span
            :style="skinProps.Styles.placeholder_search"
            v-html="ProdSkin.placeholder_search"
          ></span>
        </div>
        <div
          class="col s2 searchbar valign-wrapper"
          v-bind:style="{ 'background-color': skinProps.header.search_color3 }"
        >
          <i class="material-icons small">search</i>
        </div>
      </div>
      <!-- hide-on-med-and-down -->
      <div
        class="col hide-on-med-and-down l3 right right-align"
        v-bind:style="{ 'background-color': skinProps.header.header_bk_color }"
        v-html="texts.header.opt0"
      ></div>
    </div>
    <!-- second row -->
    <div
      class="row_header_second row"
      v-bind:style="{ 'background-color': skinProps.header.header_bk_color }"
    >
      <div
        class="col hide-on-small-only m3 l3 white_space_pre"
        v-bind:style="{ 'background-color': skinProps.header.header_bk_color }"
        v-html="texts.header.opt1"
      ></div>
      <div
        class="col hide-on-small-only m6 l5 white_space_pre forced_line"
        v-bind:style="{ 'background-color': skinProps.header.header_bk_color }"
        v-html="texts.header.opt2"
      ></div>
      <div
        class="col hide-on-med-and-down l2 white_space_pre"
        v-bind:style="{ 'background-color': skinProps.header.header_bk_color }"
        v-html="texts.header.opt3"
      ></div>
      <div
        class="col hide-on-small-only m3 l2 valign-wrapper cart_container clickable"
        :class="{ addMarg: ProdSkin.hasVoucher }"
        v-bind:style="{
          'background-color': skinProps.header.header_bk_color,
          color: skinProps.header.cart_color
        }"
        @click="UpdateLvl('Cart')"
      >
        <div>
          {{ cart.nrProd }}
          <i class="material-icons small">shopping_cart</i>
        </div>
        <div v-if="ProdSkin.hasVoucher" id="voucher">
          {{ texts.general_texts.voucher }}: {{ texts.general_texts.currency }}
          {{ cart.remV }}
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
.searchbar {
  height: 40px;
  margin-top: 5px;
}
.searchbar:first-child {
  width: 50px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 5px;
}
.searchbar:nth-child(2) {
  border: 1px solid darkgray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.searchbar:last-child {
  width: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
#headerComp > div {
  margin: 0px;
}
#headerComp {
  background-color: grey;
  user-select: none;
}
.white_space_pre {
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* @media only screen and (min-width: 1200px) {
  .cart_container {
    flex-direction: row;
  }
} */
</style>
