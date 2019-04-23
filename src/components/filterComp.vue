<template>
  <div class="col s12 m3 l2 noPadding">
    <div v-if="isMobile">
      <div
        class="MobFilter1 clickable"
        v-html="filters.FilterLbl1"
        v-if="!show_filters"
        @click="show_filters=!show_filters"
      ></div>
      <div
        class="MobFilter2 clickable"
        v-html="filters.FilterLbl2"
        v-if="show_filters"
        @click="show_filters=!show_filters"
      ></div>
    </div>

    <div class="filterAll" v-if="show_filters">
      <!-- start filter -->
      <!-- rating filter -->
      <div id="RatingFilterCont">
        <div class="filterLbl" v-html="filters.FilterRatingLabel"></div>

        <div
          v-for="(rating) in moduleProps.ratingMaxVal"
          :key="rating"
          class="paddingBox clickable"
          @click="$emit('SelectedStar',moduleProps.ratingMaxVal-rating+1)"
        >
          <!-- <label> -->
          <!-- <input
                type="checkbox"
                class="filled-in"
                :id="'price_'+rating"
                :value="filters.RatingMaxVal-rating+1"
                v-model="scFilters.rating"
          >-->
          <span :for="'rating_'+rating" :class="{'selected':SelectedStarF(rating)}">
            <stars :rating="moduleProps.ratingMaxVal-rating+1" :moduleProps="moduleProps"></stars>
            <!-- <span v-if="rating!=1">{{filters.RatingLabel}}</span> -->
          </span>
          <!-- </label> -->
        </div>
      </div>
      <!-- brand filter -->
      <div id="BrandFilterCont">
        <div class="filterLbl" v-html="filters.FilterBrandLabel"></div>
        <form id="BrandFilterForm" action="#">
          <div v-for="(brand,index) in filters.brand" :key="brand" class="paddingBox">
            <label>
              <input
                type="checkbox"
                class="filled-in"
                :id="'brand_'+index"
                :value="brand"
                v-model="scFilters.brand"
              >
              <span :for="'brand_'+index">{{brand}}</span>
            </label>
          </div>
        </form>
      </div>
      <!-- price filter -->
      <div id="PriceFilterCont">
        <div class="filterLbl" v-html="filters.FilterPriceLabel"></div>
        <form id="PriceFilterForm" action="#">
          <div v-for="(price,index) in filters.price" :key="price.val" class="paddingBox">
            <label>
              <input
                type="checkbox"
                class="filled-in chec_box"
                :id="'price_'+index"
                :value="price.val"
                v-model="scFilters.price"
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
    texts: Object,
    isMobile: Boolean,
    scFilters: Object,
    filters: Object,
    moduleProps: Object
  },
  data() {
    return {
      show_filters: !this.isMobile
    };
  },
  mounted() {},
  watch: {},
  methods: {
    SelectedStarF(rating) {
      if (this.scFilters.rating != null) {
        return (
          this.moduleProps.ratingMaxVal - rating + 1 >= this.scFilters.rating
        );
      }

      return false;
    }
  },
  computed: {
    example: function(arr) {
      console.log("aaa");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  color: #4c4c4c;
}
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
.selected .stars_container {
  /* background: lightblue */
  border-left: solid 5px #26a69a;
}
.stars_container {
  border-left: solid 5px transparent;
}
</style>
