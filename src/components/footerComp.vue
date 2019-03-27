<template>
  <div id="footerComp" v-bind:style="{'background-color':footer_color}">
    <div class="row">
      <div class="col center-align s6 m4 l3" v-html="texts.col1"></div>
      <div class="col center-align s6 m4 l3" v-html="texts.col2"></div>
      <div class="col center-align hide-on-small-only m4 l3" v-html="texts.col3"></div>
      <div class="col center-align hide-on-med-and-down l3" v-html="texts.col4"></div>
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
      footer_color: ""
    };
  },
  mounted() {
    switch (this.skin) {
      case "Amazon":
        this.footer_color = "#233040";
        break;
      default:
        this.footer_color = this.skinProps.footer_color;
        break;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footerComp {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
