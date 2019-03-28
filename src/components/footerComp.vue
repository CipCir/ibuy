<template>
  <div id="footerComp" v-bind:style="{'background-color':footer_color}">
    <div
      id="bk_top"
      v-if="bk_top_show"
      class="row center clickable"
      @click="back_to_top()"
      v-html="backtotop"
      v-bind:style="{'background-color':bk_top_color}"
    ></div>
    <div class="row">
      <div class="col center-align s6 m6 l4 xl3" v-html="texts.col1"></div>
      <div class="col center-align s6 m6 l4 xl3" v-html="texts.col2"></div>
      <div class="col center-align hide-on-med-and-down l4 xl3" v-html="texts.col3"></div>
      <div class="col center-align hide-on-large-and-down xl3" v-html="texts.col4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerComp",
  props: {
    skin: String,
    skinProps: Object,
    texts: Object
  },
  data() {
    return {
      footer_color: "",
      backtotop: this.texts.back_to_top,
      bk_top_show: false,
      bk_top_color: ""
    };
  },
  mounted() {
    switch (this.skin) {
      case "Amazon":
        this.footer_color = "#233040";
        this.bk_top_show = true;
        this.bk_top_color = "#37475a";
        break;
      default:
        this.footer_color = this.skinProps.footer_color;
        this.bk_top_show = this.skinProps.bk_top_show;
        this.bk_top_color = this.skinProps.bk_top_color;
        break;
    }
  },
  methods: {
    back_to_top: function() {
      $("body,html").animate(
        {
          scrollTop: 0
        },
        500
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bk_top {
  padding: 15px 0;
}
.img_container {
  /* width: 100% */
  min-height: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}

#footerComp {
  /* padding-top: 10px; */
  padding-bottom: 10px;
}
</style>
