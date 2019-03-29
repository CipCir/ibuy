<template>
  <div id="headerComp">
    <div class="row_header_first row" v-bind:style="{'background-color':header_bk_color}">
      <div class="col s10 m3 l3 valign-wrapper" v-bind:style="{'background-color':header_bk_color}">
        <img :src="logo_img" alt="logo image here">
      </div>
      <div
        class="col hide-on-med-and-up s1 valign-wrapper cart_container"
        v-bind:style="{'background-color':header_bk_color,'color':cart_color}"
      >
        {{nr_cart}}
        <i class="material-icons small">shopping_cart</i>
      </div>
      <div
        class="col s12 m8 l6 valign-wrapper"
        v-bind:style="{'background-color':header_bk_color}"
        v-if="show_search"
      >
        <div
          class="col s2 searchbar valign-wrapper"
          v-html="texts.search_all_text"
          v-bind:style="{'background-color':search_color1}"
        ></div>
        <div
          class="col s12 searchbar valign-wrapper"
          v-bind:style="{'background-color':search_color2}"
        >
          <input type="text" id="search_txt" :placeholder="texts.placeholder_search">
        </div>
        <div
          class="col s2 searchbar valign-wrapper"
          v-bind:style="{'background-color':search_color3}"
        >
          <img :src="'./img/search.png'">
        </div>
      </div>
      <div
        class="col hide-on-med-and-down l3 right right-align"
        v-bind:style="{'background-color':header_bk_color}"
        v-html="texts.opt0"
      ></div>
    </div>
    <div class="row_header_second row" v-bind:style="{'background-color':header_bk_color}">
      <div
        class="col hide-on-small-only m3 l3 white_space_pre"
        v-bind:style="{'background-color':header_bk_color}"
        v-html="texts.opt1"
      ></div>
      <div
        class="col hide-on-small-only m7 l6 white_space_pre forced_line"
        v-bind:style="{'background-color':header_bk_color}"
        v-html="texts.opt2"
      ></div>
      <div
        class="col hide-on-med-and-down l2 white_space_pre"
        v-bind:style="{'background-color':header_bk_color}"
        v-html="texts.opt3"
      ></div>
      <div
        class="col hide-on-small-only m1 l1 valign-wrapper cart_container right"
        v-bind:style="{'background-color':header_bk_color,'color':cart_color}"
      >
        {{nr_cart}}
        <i class="material-icons small">shopping_cart</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerComp",
  props: {
    skin: String,
    skinProps: Object,
    texts: Object,
    nr_cart: Number
  },
  data() {
    return {
      logo_img: "",
      header_bk_color: "",
      show_search: false,
      search_color1: "",
      search_color2: "",
      search_color3: "",
      cart_color: ""
    };
  },
  mounted() {
    switch (this.skin) {
      case "Amazon":
        // console.log("Amazon");
        this.logo_img = "./img/amazon_logo_150x50.png";
        this.header_bk_color = "#233040";
        this.show_search = true;
        this.cart_color = "white";
        this.search_color1 = "#f3f3f3";
        this.search_color2 = "white";
        this.search_color3 = "#febd69";
        break;
      default:
        // console.log("Custom");
        this.logo_img = this.skinProps.logo_img;
        this.header_bk_color = this.skinProps.header_bk_color;
        this.show_search = this.skinProps.show_search;
        this.cart_color = this.skinProps.cart_color;
        this.search_color1 = this.skinProps.search_header_bk_color1;
        this.search_color2 = this.skinProps.search_header_bk_color2;
        this.search_color3 = this.skinProps.search_header_bk_color3;
        break;
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
}
#search_txt:focus {
  box-shadow: none;
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
}
.searchbar:last-child {
  width: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
#headerComp > div {
  margin: 0px;
}
/* img {
  border: 1px solid black;
} */
#headerComp {
  background-color: grey;
  /* height: 50px; */
}
.white_space_pre {
  /* white-space: pre; */
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
