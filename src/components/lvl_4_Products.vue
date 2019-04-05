<template>
  <div id="lvl_Main" class="lvl_container">
    <div class="row">
      <!-- mobile filter -->
      <filterComp
        :inputOBJ="inputOBJ"
        :isMobile="true"
        
        v-on:brandF="UpdateFilter('brand',$event)"
        v-on:priceF="UpdateFilter('price',$event)"
        v-on:ratingF="UpdateFilter('rating',$event)"

        class="row hide-on-med-and-up"
      ></filterComp>
      <!-- desktop filter -->
      <filterComp
        :inputOBJ="inputOBJ"
        :isMobile="false"
        :scFilters="cFilters"
        v-on:brandF="UpdateFilter('brand',$event)"
        v-on:priceF="UpdateFilter('price',$event)"
        v-on:ratingF="UpdateFilter('rating',$event)"

        class="row hide-on-small-only"
      ></filterComp>

      <div class="row">
        <div id="ProdsCont" class="col s12 m9 l10">
          <div class="row s12 banner_img_cont clickable" v-if="show_banner" @click="SelectSponsProd()">
            <img
              class="banner_img show-on-small"
              :src="inputOBJ.banner.img1"
              alt="banner image 1 here"
            >
            <img
              class="banner_img show-on-medium"
              :src="inputOBJ.banner.img2"
              alt="banner image 2 here"
            >
            <img
              class="banner_img show-on-large"
              :src="inputOBJ.banner.img3"
              alt="banner image 3 here"
            >
            <img
              class="banner_img show-on-extra-large"
              :src="inputOBJ.banner.img4"
              alt="banner image 4 here"
            >
          </div>
          <div class="col l12 xl11">
            <div
              class="col CanSelect s12"
              :class="[inputOBJ.generalInfo.productView=='Grid'?'m4 l3':'m12', ((index % 4)==0&&(index>0))?'clear_left_4':'', ((index % 3)==0&&(index>0))?'clear_left_3':'']"
              v-for="(prod,index) in prodFilterList"
              :key="prod.id"
              @click="Selected(prod)"
            >
              <hr>
              <!-- <hr v-if="inputOBJ.generalInfo.productView=='Grid' && index>3"> -->
              <div
                class="prodImg col"
                :class="inputOBJ.generalInfo.productView=='Grid'?'s4 m12':'s4 m3'"
                :style="{'background-image': 'url(' + './img/'+prod.imgArr[0]+ ')'}"
              >
                <!-- <img :src="'./img/'+prod.img"> -->
              </div>
              <div class="col" :class="inputOBJ.generalInfo.productView=='Grid'?'s8 m12':'s8 m9'">
                <div class="ProdLbl" v-html="prod.lbl"></div>
                <div v-html="prod.by"></div>
                <div>
                  <stars v-if="prod.rating != null" :rating="prod.rating"></stars>&nbsp;
                  <span v-html="prod.reviews"></span>
                </div>

                <div v-html="prod.addInf1"></div>
                <div class="prodPrice">
                  <span v-if="inputOBJ.generalInfo.currecySide=='left'">
                    <sup v-html="inputOBJ.generalInfo.currency"></sup>
                  </span>
                  <span v-if="prod.price.toString().indexOf('.')>-1">
                    <span v-html="prod.price.toString().split('.')[0]"></span>
                    <sup class="suprascript" v-html="prod.price.toString().split('.')[1]"></sup>
                  </span>
                  <span v-else v-html="prod.price"></span>
                  <span v-if="inputOBJ.generalInfo.currecySide=='right'">
                    <sup v-html="inputOBJ.generalInfo.currency"></sup>
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
import { close, closeSync } from "fs";
import { debug } from "util";

export default {
  name: "lvl_Prods",
  components: {
    stars,
    filterComp
  },
  props: {
    texts: Object,
    Prods: Array,
    SponsoredProdId:Number,
    inputOBJ: Object,
    cFilters:Object,
  },
  data() {
    return {
      show_banner: this.inputOBJ.generalInfo.show_banner,
    };
  },

  created() {
    window.scrollTo(0, 0);
  },
  computed: {
    prodFilterList() {
      var vueObj = this;
      var returned = this.Prods;

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

      if (this.cFilters.rating.length > 0) {
        // debugger;
        var tempMin = Math.min(...vueObj.cFilters.rating);
        // console.log(vueObj.ratingFilter, tempMin);
        returned = returned.filter(prod => prod.rating >= tempMin);
      }

      return returned;
    }
  },
  methods: {
    UpdateFilter(filter,value){
      this.$emit("updFilter",{fil:filter,val:value})
      
    },
    SelectSponsProd(){
      let vueObj=this
      let SponsProd=this.Prods.find(x=> x.id==vueObj.SponsoredProdId)
      this.Selected(SponsProd)  
    },
    Selected(prod) {
      this.$emit("selProd", prod);
      this.$emit("updtLvl", { lvl: "Prdct" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
/* .prodLbl {
  text-transform: uppercase;
} */
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
</style>
