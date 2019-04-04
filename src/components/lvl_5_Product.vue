<template>
  <div id="lvl_Main" class="lvl_container">
    <div id="navRow" class="row">
      <span class="left">
        <span class="btn orange" @click="$emit('updtLvl',{lvl:'Products'})">back to results</span>
      </span>
      <span class="right">
        <span class="btn-flat orange"  @click="$emit('updtLvl',{lvl:'Cart'})">checkout</span>
      </span>
    </div>
    <div id="prodctCont" class="row">
      <div class="col xl1 extraCol show-on-extra-large"></div>
      <div id="PrdctArea" class="col m12 xl10">
        <div id ="PrdSplitCont" class="row">
          <div id="ProdImgCont" class="col s12 m7 ">
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
            <div class="row" id="TumbAndProd">
              <!-- thumbs -->
              <div id="tumbCont" class="center-align">
                <div v-for="(thumb,ind) in Prdct.imgArr" :key="ind" 
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
          <div id="cartCont" class="col s12 m5 ">
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
              <div class="addCart"  @click="addToCart()">Add to Cart</div>
            </div>
            <div class="row center-align">
              <img :src="'./img/ProdSponorCart.jpg'" alt>
            </div>

            <!-- <div v-html="Prdct.addInf2"></div> -->
          </div>
        </div>
        <!-- under the products -->
        <div id="BtmProdCont" class="row">
          <img :src="'./img/ProdDetailsCart.jpg'" alt>
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
  data(){
    return{
      quantity:1,
      PrdImg:this.Prdct.imgArr[0]
    }
  },
   created() {
    window.scrollTo(0,0)
  },
  methods: {
    addToCart() {
      // if (prod.prods.length==0){
      // return false;
      // }
      this.$emit("addInCart",this.quantity);
      this.$emit("updtLvl", { lvl: "Products" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected{
  border: 1px solid red;
  box-shadow:0 0 3px 2px rgba(228,121,17,.5)
}
.extraCol{
  display: none;
}
#PrdSplitCont {
  padding: 3px;
}
#TumbAndProd{
  display: flex;
    align-items: flex-start;
}
#tumbCont {
  display: flex;
  /* justify-content: flex-start;*/
  flex-wrap: wrap; 
  width: 110px;
}
#mainImgCont{
  width: 100%
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
  width: 200px;

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


