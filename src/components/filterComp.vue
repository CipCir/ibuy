<template>
  <div class="col s12 m3 l2 noPadding">
    <div v-if="isMobile">
      <div
        class="MobFilter1"
        v-html="inputOBJ.Filters.FilterLbl1"
        v-if="!show_filters"
        @click="show_filters=!show_filters"
      ></div>
      <div
        class="MobFilter2"
        v-html="inputOBJ.Filters.FilterLbl2"
        v-if="show_filters"
        @click="show_filters=!show_filters"
      ></div>
    </div>

    <div class="filterAll" v-if="show_filters">
      <!-- start filter -->
      <!-- rating filter -->
      <div id="RatingFilterCont">
        <div class="filterLbl" v-html="inputOBJ.Filters.FilterRatingLabel"></div>
        <form id="PriceFilterForm" action="#">
          <div
            v-for="(rating,index) in inputOBJ.Filters.RatingMaxVal-1"
            :key="rating"
            class="paddingBox"
          >
            <label>
              <input
                type="checkbox"
                class="filled-in"
                :id="'price_'+index"
                :value="inputOBJ.Filters.RatingMaxVal-rating"
                v-model="ratingFilter"
              >
              <span :for="'rating_'+index">
                <stars :rating="inputOBJ.Filters.RatingMaxVal-rating"></stars>
                {{inputOBJ.Filters.RatingLabel}}
              </span>
            </label>
          </div>
        </form>
      </div>
      <!-- brand filter -->
      <div id="BrandFilterCont">
        <div class="filterLbl" v-html="inputOBJ.Filters.FilterBrandLabel"></div>
        <form id="BrandFilterForm" action="#">
          <div v-for="(brand,index) in inputOBJ.Filters.brand" :key="brand" class="paddingBox">
            <label>
              <input
                type="checkbox"
                class="filled-in"
                :id="'brand_'+index"
                :value="brand"
                v-model="brandFilter"
              >
              <span :for="'brand_'+index">{{brand}}</span>
            </label>
          </div>
        </form>
      </div>
      <!-- price filter -->
      <div id="PriceFilterCont">
        <div class="filterLbl" v-html="inputOBJ.Filters.FilterPriceLabel"></div>
        <form id="PriceFilterForm" action="#">
          <div v-for="(price,index) in inputOBJ.Filters.price" :key="price.val" class="paddingBox">
            <label>
              <input
                type="checkbox"
                class="filled-in chec_box"
                :id="'price_'+index"
                :value="price.val"
                v-model="priceFilter"
              >
              <span :for="'price_'+index">{{price.lbl}}</span>
            </label>
          </div>
        </form>
      </div>

      <!-- end filter -->
    </div>
  </div>
</template>

<script>
import stars from "./stars.vue";
export default {
  name: "filterComp",
  components: {
    stars
  },
  props: {
    inputOBJ: Object,
    isMobile: Boolean
  },
  data() {
    return {
      brandFilter: [],
      priceFilter: [],
      ratingFilter: [],
      show_filters: !this.isMobile
    };
  },
  watch: {
    brandFilter: function(value) {
      this.$emit("brandF", this.brandFilter);
    },
    priceFilter: function(value) {
      this.$emit("priceF", this.priceFilter);
    },
    ratingFilter: function(value) {
      this.$emit("ratingF", this.ratingFilter);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noPadding {
  padding: 0px;
}
.filterAll {
  min-height: 100px;
  padding: 0px 12px;
}
.filterLbl {
  font-size: 17px;
  font-weight: bold;
  /* padding-top: 50px; */
  padding-top: 5vh;
}
.MobFilter1 {
  background: whitesmoke;
  text-align: end;
  font-weight: bold;
  padding: 8px 20px;
}
.MobFilter2 {
  background: whitesmoke;
  font-weight: bold;
  padding: 8px 20px;
}
</style>
