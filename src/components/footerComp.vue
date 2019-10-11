<template>
  <div id="footerComp" v-bind:style="{ 'background-color': skinProps.footer.footer_bk_color }">
    <div
      id="bk_top"
      class="row center clickable"
      v-if="ProdSkin.show_bk_to_top"
      @click="back_to_top()"
      v-bind:style="skinProps.Styles.footer.back_to_top"
      v-html="footer_texts.back_to_top"
    ></div>
    <div class="row" v-if="skinProps.footer.show_footer_text">
      <div
        class="col center-align s6 m6 l4 xl3"
        v-html="footer_texts.col1"
        :style="skinProps.Styles.footer.col1"
      ></div>
      <div
        class="col center-align s6 m6 l4 xl3"
        v-html="footer_texts.col2"
        :style="skinProps.Styles.footer.col2"
      ></div>
      <div
        class="col center-align hide-on-med-and-down l4 xl3"
        v-html="footer_texts.col3"
        :style="skinProps.Styles.footer.col3"
      ></div>
      <div
        class="col center-align hide-on-large-and-down xl3"
        v-html="footer_texts.col4"
        :style="skinProps.Styles.footer.col4"
      ></div>
    </div>
    <div class="row footer_img_cont" v-if="skinProps.footer.show_footer_image">
      <img class="footer_img show-on-small" :src="footer_texts.img1" alt="footer image 1 here" />
      <img class="footer_img show-on-medium" :src="footer_texts.img2" alt="footer image 2 here" />
      <img class="footer_img show-on-large" :src="footer_texts.img3" alt="footer image 3 here" />
      <img
        class="footer_img show-on-extra-large"
        :src="footer_texts.img4"
        alt="footer image 4 here"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "footerComp",
  props: {
    skinProps: Object,
    footer_texts: Object,
    ProdSkin: Object
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
<style scoped>
.footer_img_cont {
  width: 100%;
}
.footer_img {
  margin: 0 auto;
  position: relative;
  max-width: 100%;
  display: none;
}
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
