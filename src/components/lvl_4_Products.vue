<template>
  <div id="lvl_Main" class="lvl_container">
    <div class="row">
      <!-- mobile filter -->
      <div id="filtersContainer" v-if="skinProps.LayoutProps.hasFilters">
        <filterComp
          :texts="texts"
          :filters="texts.filters"
          :isMobile="true"
          :scFilters="cFilters"
          :skinProps="skinProps"
          class="row hide-on-med-and-up"
          v-on:SelectedStar="UpdateFilter('rating', $event)"
        ></filterComp>
        <!-- desktop filter -->
        <filterComp
          :texts="texts"
          :filters="texts.filters"
          :isMobile="false"
          :scFilters="cFilters"
          :skinProps="skinProps"
          v-on:SelectedStar="UpdateFilter('rating', $event)"
          class="row hide-on-small-only"
        ></filterComp>
      </div>

      <div class="row">
        <div
          id="ProdsCont"
          class="col s12 "
          :class="{ 'm9 l10': skinProps.LayoutProps.hasFilters }"
        >
          <div
            class="row s12 banner_img_cont clickable"
            v-if="show_banner"
            @click="SelectSponsProd()"
          >
            <img
              class="banner_img show-on-small"
              :src="texts.banner.img1"
              alt="banner image 1 here"
            />
            <img
              class="banner_img show-on-medium"
              :src="texts.banner.img2"
              alt="banner image 2 here"
            />
            <img
              class="banner_img show-on-large"
              :src="texts.banner.img3"
              alt="banner image 3 here"
            />
            <img
              class="banner_img show-on-extra-large"
              :src="texts.banner.img4"
              alt="banner image 4 here"
            />
          </div>
          <div class="col l12 xl11">
            <div
              class="col CanSelect s12"
              :class="[
                skinProps.LayoutProps.productView == 'Grid' ? 'm4 l3' : 'm12',
                index % 4 == 0 && index > 0 ? 'clear_left_4' : '',
                index % 3 == 0 && index > 0 ? 'clear_left_3' : ''
              ]"
              v-for="(prod, index) in prodFilterList"
              :key="prod.id"
              @click="Selected(prod)"
            >
              <hr />
              <!-- <hr v-if="skinProps.LayoutProps.productView=='Grid' && index>3"> -->
              <div
                class="prodImg col"
                :class="
                  skinProps.LayoutProps.productView == 'Grid'
                    ? 's4 m12'
                    : 's4 m3'
                "
                :style="{
                  'background-image':
                    'url(' + prodMediaPath + prod.imgArr[0].imgSrc + ')'
                }"
              >
                <!-- <img :src="'./img/'+prod.img"> -->
              </div>
              <div
                class="col"
                :class="
                  skinProps.LayoutProps.productView == 'Grid'
                    ? 's8 m12'
                    : 's8 m9'
                "
              >
                <div class="ProdLbl" v-html="prod.lbl"></div>
                <div v-html="prod.by"></div>
                <div>
                  <stars
                    v-if="prod.rating != null"
                    :rating="prod.rating"
                    :skinProps="skinProps"
                  ></stars
                  >&nbsp;
                  <span v-html="prod.reviews"></span>
                </div>

                <div v-html="prod.addInf1"></div>
                <div class="prodPrice">
                  <span v-if="general_texts.currecySide == 'left'">
                    <sup v-html="general_texts.currency"></sup>
                  </span>
                  <span v-if="prod.price.toString().indexOf('.') > -1">
                    <span v-html="prod.price.toString().split('.')[0]"></span>
                    <sup
                      class="suprascript"
                      v-html="prod.price.toString().split('.')[1]"
                    ></sup>
                  </span>
                  <span v-else v-html="prod.price"></span>
                  <span v-if="general_texts.currecySide == 'right'">
                    <sup v-html="general_texts.currency"></sup>
                  </span>
                </div>

                <div v-html="prod.addInf2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stars from "./stars.vue";
import filterComp from "./filterComp.vue";

export default {
  name: "lvl_Prods",
  components: {
    stars,
    filterComp
  },
  props: {
    general_texts: Object,
    Prods: Array,
    PRandIndx: Array,
    prodMediaPath: String,
    SponsoredProdId: Number,
    texts: Object,
    cFilters: Object,
    skinProps: Object,
    SortBy: Object
  },
  data() {
    return {
      show_banner: this.skinProps.LayoutProps.show_banner
      // SortArr: this.texts.filters.SortArr
      // SortBy: null
    };
  },
  created() {
    window.scrollTo(0, 0);
    // this.SortBy = this.SortArr[0];
  },
  computed: {
    productsArr() {
      let Fparam = this.SortBy.param;
      let fOrd = this.SortBy.ordr;

      function compareLBL(a, b) {
        // debugger
        if (a[Fparam] > b[Fparam]) return fOrd;
        if (a[Fparam] < b[Fparam]) return -1 * fOrd;
        return 0;
      }
      function compareNMB(a, b) {
        if (parseFloat(a[Fparam]) > parseFloat(b[Fparam])) return fOrd;
        if (parseFloat(a[Fparam]) < parseFloat(b[Fparam])) return -1 * fOrd;
        return 0;
      }
      var order = this.PRandIndx;
      function indxArr(a, b) {
        if (order.indexOf(a.id) > order.indexOf(b.id)) {
          return 1;
        } else {
          return -1;
        }
      }
      let SortedArr = [];
      if (this.SortBy.type == "str") {
        SortedArr = this.Prods.sort(compareLBL);
        this.$emit("SaveProdOrdr", SortedArr.map(a => a.id));
        return SortedArr;
      } else {
        if (
          this.skinProps.LayoutProps.hasSort == false &&
          this.skinProps.LayoutProps.RandomizeProds_ForNoSort
        ) {
          // shuffle(this.Prods);
          SortedArr = this.Prods.sort(indxArr);
          this.$emit("SaveProdOrdr", SortedArr.map(a => a.id));
          return SortedArr;
        } else {
          SortedArr = this.Prods.sort(compareNMB);
          this.$emit("SaveProdOrdr", SortedArr.map(a => a.id));
          return SortedArr;
        }
      }
    },
    prodFilterList() {
      var vueObj = this;
      var returned = this.productsArr;

      if (this.cFilters.brand.length > 0) {
        returned = returned.filter(
          prod => vueObj.cFilters.brand.indexOf(prod.brand) > -1
        );
      }

      if (this.cFilters.price.length > 0) {
        var tempArr = [];
        returned.forEach((prod, index) => {
          var found_interval = false;
          vueObj.cFilters.price.forEach(elem => {
            var splitted = elem.split("#");

            if (
              parseFloat(prod.price) >= splitted[0] &&
              parseFloat(prod.price) <= splitted[1]
            ) {
              found_interval = true;
            }
          });
          if (found_interval) {
            tempArr.push(returned[index]);
          }
        });
        returned = tempArr;
      }

      if (this.cFilters.rating != null) {
        // debugger;
        var tempMin = this.cFilters.rating;
        // console.log(vueObj.ratingFilter, tempMin);
        returned = returned.filter(prod => prod.rating >= tempMin);
      }

      return returned;
    }
  },
  methods: {
    UpdateFilter(filter, value) {
      this.$emit("updFilter", { fil: filter, val: value });
    },
    SelectSponsProd() {
      let vueObj = this;
      let SponsProd = this.Prods.find(x => x.id == vueObj.SponsoredProdId);
      this.Selected(SponsProd);
    },
    Selected(prod) {
      this.$emit("selProd", prod);
      this.$emit("updtLvl", { lvl: "Prdct" });
    }
  }
};
</script>

<style scoped>
.banner_img_cont {
  width: 100%;
}
.banner_img {
  margin: 0 auto;
  position: relative;
  max-width: 100%;
  display: none;
}

.ProdLbl::before {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 58%);
  content: "\2026";
  /* content: "\200C"; */
  display: block;
  position: absolute;
  right: 0;
  top: 55px;
  width: 100%;
  text-align: center;
  font-size: 25px;
}
.prodPrice {
  font-size: 21px;
}
.ProdLbl {
  font-weight: bold;
  font-size: 15px !important;
  line-height: 1.4 !important;
  max-height: 88px;
  overflow: hidden;
  position: relative;
  display: block;
}

.CanSelect {
  /* border: 1px solid red; */
  font-size: 13px;
  padding: 5px;
}
.CanSelect img {
  /* border: 1px solid blue; */
  margin: 0 auto;
  display: block;
}

@media only screen and (min-width: 993px) {
  .clear_left_3 {
    clear: none;
  }
  .clear_left_4 {
    clear: left;
  }
}
@media only screen and (max-width: 992px) {
  .clear_left_3 {
    clear: left;
  }
  .clear_left_4 {
    clear: none;
  }
}

#headerComp {
  height: 100px;
  background-color: grey;
}
#subTitle {
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
}
.prodegCont {
  /* background: lightblue; */
  text-align: center;
  padding: 0 20px;
  height: 150px;
}

.prodImg {
  /* width: 100% */
  min-height: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}
.CanSelect:hover {
  /* background: lightblue; */
  cursor: pointer;
}

.paddingBox {
  /* border: 1px solid red; */
  padding: 0px 15px;
}
#SponsCont {
  background: lightcyan;
  min-height: 100px;
}

#sortContainer {
  margin-top: 10px;
}
</style>
