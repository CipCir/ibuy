<template>
  <div id="lvl_Main" class="lvl_container">
    <div id="navRow" class="row">
      <span class="left">
        <span class="btn orange" @click="$emit('updtLvl',{lvl:'Products'})">back to results</span>
      </span>
      <span class="right">
        <span class="btn orange" @click="$emit('updtLvl',{lvl:'Cart'})">go to checkout</span>
      </span>
    </div>
    <div id="prodctCont" class="row">
      <div class="col xl1 extraCol show-on-extra-large"></div>
      <div id="PrdctArea" class="col m12 xl10">
        <div id="PrdSplitCont" class="row">
          <div id="ProdImgCont" class="col s12 m8 l9">
            <!-- prod name and review -->
            <div class="row">
              <div>
                <span v-html="Prdct.lbl"></span> &nbsp;
                <span v-html="Prdct.by"></span>
              </div>
              <div>
                <stars v-if="Prdct.rating != null" :rating="Prdct.rating"></stars>&nbsp;
                <span>
                  <span v-html="Prdct.reviews"></span>&nbsp;
                  <span v-html="texts.CustmrsRev"></span>
                </span>
              </div>
            </div>
            <!-- prod images -->
            <!--  -->
            <!-- mobile -->
            <div class="row hide-on-med-and-up">
              <div id="ProdImgContMob" class="row s12 center-align noMargin">
                <!-- main img -->
                <div class="col s2 navContainer" @click="slideImg(-1)">
                  <i class="medium material-icons">chevron_left</i>
                </div>
                <div id="mainImgContMob" class="col s8 center-align">
                  <div>
                    <img class="ProdImgMob" :key="PrdImg" :src="'./img/'+PrdImg">
                  </div>
                </div>
                <div class="col s2 navContainer" @click="slideImg(1)">
                  <i class="medium material-icons">chevron_right</i>
                </div>
              </div>
              <!-- thumbs -->
              <div id="tumbContMob" class="row s12 center-align noMargin">
                <div
                  v-for="(thumb,ind) in Prdct.imgArr"
                  :key="ind"
                  class="tumbImg"
                  :class="{'selected':PrdImg==thumb}"
                  @click="PrdImg=thumb"
                >
                  <img :src="'./img/'+thumb">
                </div>
              </div>
            </div>
            <!--  -->
            <!-- desktop -->
            <div class="row hide-on-small-only" id="TumbAndProd">
              <!-- thumbs -->
              <div id="tumbCont" class="center-align">
                <div
                  v-for="(thumb,ind) in Prdct.imgArr"
                  :key="ind"
                  class="tumbImg"
                  :class="{'selected':PrdImg==thumb}"
                  @click="PrdImg=thumb"
                >
                  <img :src="'./img/'+thumb">
                </div>
              </div>
              <!-- main img -->
              <div id="mainImgCont" class="center-align">
                <div class="prodImg">
                  <img :src="'./img/'+PrdImg">
                </div>
              </div>
            </div>
          </div>
          <!-- cart container -->
          <div id="cartCont" class="col s12 m4 l3">
            <div class="row center-align">
              <span class="lowTxt" v-html="texts.price"></span> :
              <span class="prodPrice">{{inputOBJ.generalInfo.currency}} {{Prdct.price}}</span>
            </div>
            <div class="row center-align">
              Quantity
              <select v-model="quantity">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
              </select>
            </div>
            <div class="row center-align">
              <div class="addCart" @click="addToCart()">Add to Cart</div>
            </div>
            <div class="row center-align">
              <img :src="'./img/ProdSponorCart.jpg'" alt>
            </div>

            <!-- <div v-html="Prdct.addInf2"></div> -->
          </div>
        </div>
        <!-- under the products -->
        <!-- <div id="BtmProdCont" class="row">
          <img :src="'./img/ProdDetailsCart.jpg'" alt>
        </div>-->
        <div id="BtmProdCont" class="row">
          <img
            class="btm_img show-on-small"
            :src="'./img/'+Prdct.detailsImgArr[0]"
            alt="additional image 1 here"
          >
          <img
            class="btm_img show-on-medium"
            :src="'./img/'+Prdct.detailsImgArr[1]"
            alt="additional image 2 here"
          >
          <img
            class="btm_img show-on-large"
            :src="'./img/'+Prdct.detailsImgArr[2]"
            alt="additional image 3 here"
          >
          <img
            class="btm_img show-on-extra-large"
            :src="'./img/'+Prdct.detailsImgArr[3]"
            alt="additional image 4 here"
          >
        </div>
      </div>
      <div class="col xl1 extraCol show-on-extra-large"></div>
    </div>
  </div>
</template>

<script>
import stars from "./stars.vue";

export default {
  name: "lvl_Prdct",
  components: {
    stars
  },
  props: {
    texts: Object,
    Prdct: Object,
    inputOBJ: Object
  },
  data() {
    return {
      quantity: 1,
      PrdImg: this.Prdct.imgArr[0]
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    addToCart() {
      // if (prod.prods.length==0){
      // return false;
      // }
      this.$emit("addInCart", this.quantity);
      this.$emit("updtLvl", { lvl: "Products" });
    },
    slideImg(value) {
      let currIndex = this.Prdct.imgArr.indexOf(this.PrdImg);
      if (
        currIndex + value < this.Prdct.imgArr.length &&
        currIndex + value >= 0
      ) {
        this.PrdImg = this.Prdct.imgArr[currIndex + value];
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btm_img {
  display: none;
}
#mainImgContMob {
  padding: 0px;
}
.navContainer {
  /* margin: 0px 10px; */
  /* background-color: #a88734; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 0.1px rgba(0, 0, 0, 0.1);
  user-select: none;
}
#ProdImgContMob {
  display: flex;
  /* align-items: center; */
}
#ProdImgCont,
#ProdImgContMob {
  font-size: 21px;
}
.noMargin {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.ProdImgMob {
  max-width: 90%;
  max-height: 40vh;
}
#tumbContMob {
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
}
#BtmProdCont {
  display: grid;
}
#BtmProdCont > img {
  margin: 0 auto;
  position: relative;
  max-width: 100%;
  /* display: none; */
}
.selected {
  /* border: 1px solid red; */
  box-shadow: 0 0 3px 2px rgba(228, 121, 17, 0.5);
  /* background-color: #a2a6ac; */
}
.extraCol {
  display: none;
}
#PrdSplitCont {
  padding: 3px;
  /* border: 1px solid blue; */
}
@media only screen and (min-width: 601px) {
  #PrdSplitCont {
    display: flex;
  }
}
#TumbAndProd {
  display: flex;
  align-items: flex-start;
}
#tumbCont {
  display: flex;
  /* justify-content: flex-start;*/
  flex-wrap: wrap;
  width: 110px;
}
#mainImgCont {
  width: 100%;
}
.tumbImg {
  display: flex;
  /* background: red; */
  /* flex: 1 1 35%; */
  margin: 4px;
  height: 50px;
  justify-content: center;
  align-items: center;

  width: 35px;
  border-color: #a2a6ac;
  border-radius: 2px;

  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  padding: 0;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
}
.tumbImg:hover {
  border-color: #a2a6ac #979aa1 #82858a;
}
.tumbImg > img {
  max-height: 90%;
  max-width: 90%;
}
.lowTxt {
  font-size: 13px;
  line-height: 19px;
  color: #555;
}
.prodPrice {
  font-size: 21px;
  line-height: 1.3;
  color: #b12704;
}

#cartCont {
  padding-left: 5px;
  box-shadow: -4px 0px 3px -2px #ccc;
  /* border: 1px solid red; */
}
select {
  display: inline-block;
  background-color: white;
  border: 1px solid #ddd;
  width: auto;
  padding: 5px;
  border-radius: 2px;
}
.addCart {
  display: inline-block;
  padding: 3px;
  height: 29px;
  width: 90%;
  max-width: 200px;

  cursor: pointer;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.6) inset;
  border-radius: 2px;
  text-align: center;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: #ca7c1b #be751a #a56616;
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  text-align: center;
  text-decoration: none !important;
}
.addCart:hover {
  border-color: #a88734 #9c7e31 #846a29;
  background: linear-gradient(to bottom, #f5d78e, #eeb933);
}
</style>


