<template>
  <div id="lvl_Main" class="lvl_container">
    <div class="row">
      <!-- mobile filter -->
      <div id="filtersContainer" v-if="ProdSkin.hasFilters">
        <filterComp
          :texts="texts"
          :filters="texts.filters"
          :isMobile="true"
          :scFilters="cFilters"
          :skinProps="skinProps"
          :pFilters="pFilters"
          :ProdSkin="ProdSkin"
          class="row hide-on-med-and-up"
          v-on:SelectedStar="UpdateFilter('rating', $event)"
          v-on:filterUpd="DelayedStoreViewProd()"
        ></filterComp>
        <!-- desktop filter -->
        <filterComp
          :texts="texts"
          :pFilters="pFilters"
          :filters="texts.filters"
          :isMobile="false"
          :scFilters="cFilters"
          :skinProps="skinProps"
          :ProdSkin="ProdSkin"
          v-on:SelectedStar="UpdateFilter('rating', $event)"
          v-on:filterUpd="DelayedStoreViewProd()"
          class="row hide-on-small-only"
        ></filterComp>
      </div>

      <div class="row">
        <div
          id="ProdsAreaCont"
          class="col s12"
          :class="{ 'm9 l10': ProdSkin.hasFilters }"
        >
          <!-- top banner -->
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
          <!-- prod grid container -->
          <div class="row l12 xl11">
            <!-- indiv prod container -->
            <div
              class="CanSelect col s12"
              :class="[
                ProdSkin.productView == 'Grid' ? 'm4 l3' : 'm12',
                index % 4 == 0 && index > 0 ? 'clear_left_4' : '',
                index % 3 == 0 && index > 0 ? 'clear_left_3' : ''
              ]"
              v-for="(prod, index) in prodFilterList"
              :key="prod.id"
              :id="'prd_' + prod.id"
              @click="Selected(prod)"
            >
              <hr :id="'viz_' + prod.id" class="isVizibil" />
              <div
                class="prodImg col"
                :class="ProdSkin.productView == 'Grid' ? 's5 m12' : 's4 m3'"
                :style="{
                  'background-image':
                    'url(' + prodDB.prodMediaPath + prod.imgArr[0].imgSrc + ')'
                }"
              ></div>
              <!-- <div
                class="col"
                :class="ProdSkin.productView == 'Grid' ? 's7 m12' : 's8 m9'"
              >-->
              <div
                class="col"
                :class="ProdSkin.productView == 'Grid' ? 's6 m12' : 's7 m9'"
              >
                <div class="ProdLbl" v-html="prod.lbl"></div>

                <!-- prod by -->
                <div class="ProdBy" v-html="general_texts.by + prod.by"></div>

                <!-- rating -->
                <div>
                  <stars
                    v-if="prod.rating != null"
                    :rating="prod.rating"
                    :skinProps="skinProps"
                  ></stars>
                  <span class="Prdct_reviews">
                    {{ prod.reviews }}
                  </span>
                </div>

                <div v-html="prod.addInf1"></div>
                <div class="prodPrice">
                  <span v-html="FormatPrice(prod)"></span>
                </div>
              </div>

              <div v-html="prod.addInf2"></div>
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
    prodDB: Object,
    seenProds: Array,
    SponsoredProdId: Number,
    texts: Object,
    cFilters: Object,
    skinProps: Object,
    SortBy: Object,
    pFilters: Object,
    ProdSkin: Object
  },
  data() {
    return {
      show_banner: this.ProdSkin.show_banner,
      recentScroll: false
      // SortArr: this.texts.filters.SortArr
      // SortBy: null
    };
  },
  watch: {
    SortBy: {
      handler: function(val, oldVal) {
        this.DelayedStoreViewProd();
      },
      deep: true
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.ProdScroll);
    window.addEventListener("resize", this.ProdScroll);
    this.ProdScroll();
  },

  destroyed() {
    window.removeEventListener("scroll", this.ProdScroll);
    window.removeEventListener("resize", this.ProdScroll);
  },

  methods: {
    FormatPrice(prodOBJ) {
      let priceFormat = "";
      let FixedDecimalPrice = parseFloat(prodOBJ.price).toFixed(
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
    DelayedStoreViewProd() {
      window.setTimeout(() => {
        this.ProdScroll();
      }, 500);
    },
    ProdScroll() {
      $.fn.isInViewport = function() {
        var correction = $(window).width() < 600 ? 90 : 280;
        var elementTop = $(this).offset().top + correction; //280;
        var elementBottom = elementTop + $(this).outerHeight();
        var elementHeight = $(this).outerHeight();

        var viewportTop = window.pageYOffset; //$(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < viewportBottom;
      };
      // console.log("scroll");

      // $("#viz_5").isInViewport();
      // $("#viz_6").isInViewport();
      // debugger;

      let vueObj = this;

      // do something
      if (!this.recentScroll && vueObj.Prods.length > vueObj.seenProds.length) {
        this.recentScroll = true;
        let vizArr = [];
        $(".isVizibil").each(function(i, val) {
          if ($(this).isInViewport()) {
            vizArr.push(
              $(this)
                .attr("id")
                .replace("viz_", "")
            );
          }
        });
        this.$emit("SaveViewed", vizArr);
        // console.log(vizArr);
        window.setTimeout(() => {
          this.recentScroll = false;
        }, 100);
      }
    },
    UpdateFilter(filter, value) {
      this.$emit("updFilter", { fil: filter, val: value });
      this.ProdScroll();
    },
    SelectSponsProd() {
      let vueObj = this;
      let SponsProd = this.Prods.find(
        x => x.id == this.prodDB.SponsoredProd.id
      );
      this.Selected(SponsProd);
      this.$emit("StoreBnr", "TopBnr");
    },
    Selected(prod) {
      this.$emit("selProd", prod);
      this.$emit("updtLvl", { lvl: "Prdct" });
    }
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
          this.ProdSkin.hasSort == false &&
          this.ProdSkin.RandomizeProds_ForNoSort
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

#subTitle {
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
}
.prodegCont {
  text-align: center;
  padding: 0 20px;
  height: 150px;
}

.prodImg {
  min-height: 200px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  margin-right: 3px;
}
.CanSelect:hover {
  cursor: pointer;
}

.paddingBox {
  padding: 0px 15px;
}
#sortContainer {
  margin-top: 10px;
}
</style>
