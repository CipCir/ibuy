<template>
  <div id="lvl_Main" class="lvl_container">
    <div id="navRow" class="row">
      <span class="left">
        <span class="btn orange" @click="$emit('updtLvl',{lvl:'Products'})">back to results</span>
      </span>
      <span class="right">
        <span class="btn-flat orange">checkout</span>
      </span>
    </div>
    <div id="prodctCont" class="row">
      <div class="col l1 hide-on-large-and-down	mark" style="height:300px">Empty col</div>
      <div class="col s12 m7 l6" >
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
        <div class="row">
          <!-- thumbs -->
          <div id="tumbCont" class="col m2 l2 center-align" >
            <div class="tumbImg">
              <img :src="'./img/'+Prdct.img">
            </div>
            <div class="tumbImg">
              <img :src="'./img/'+Prdct.img">
            </div>
            <div class="tumbImg">
              <img :src="'./img/'+Prdct.img">
            </div>
            <div class="tumbImg">
              <img :src="'./img/'+Prdct.img">
            </div>
            <div class="tumbImg">
              <img :src="'./img/'+Prdct.img">
            </div>
          </div>
          <!-- main img -->
          <div class="col m10 l10 center-align">
            <div class="prodImg">
              <img :src="'./img/'+Prdct.img">
            </div>
          </div>
        </div>
      </div>
      <!-- cart container -->
      <div id="cartCont" class="col s12 m5 l4 center-align" style="background:lightsalmon">    
        <div class="row">
          <span class="lowTxt" v-html="texts.price"></span> :
          <span class="prodPrice">{{inputOBJ.generalInfo.currency}} {{Prdct.price}} </span>
        </div>    
        <div class="row center-align">
          Quantity
          <select>
            <option v-for="n in 10" :key="n" value="n">{{n}}</option>
          </select>
        </div>


        <!-- <div v-html="Prdct.addInf2"></div> -->
      </div>
      <div class="col l1 hide-on-large-and-down mark" style="height:300px">Empty col</div>
    </div>

    
    <div class="btn" @click="addToCart()">add to cart</div>
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
  methods: {
    addToCart() {
      // if (prod.prods.length==0){
      // return false;
      // }
      this.$emit("addInCart");
      this.$emit("updtLvl", { lvl: "Products" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CanSelect {
  /* border: 1px solid red; */
  padding: 5px;
}
.CanSelect img {
  /* border: 1px solid blue; */
  margin: 0 auto;
  display: block;
}
.clear_left {
  clear: left;
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
/* .prodImg > img {
  width: 100%
  height: 100px;
} */
.CanSelect:hover {
  background: lightblue;
  cursor: pointer;
}
#FiltersCont_Desk {
  background: lightgray;
  min-height: 200px;
}
#FiltersCont_Mob {
  background: lightgray;
  min-height: 50px;
}
#Spons_Desk,
#Spons_Mob {
  background: lightcyan;
  min-height: 100px;
}
#tumbCont{
  display: flex;    
    justify-content: flex-start;
    flex-wrap: wrap;
}
.tumbImg {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 50px;
  border-color: #a2a6ac;
  border-radius: 2px;
  /* background: #e7e9ec; */
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  padding: 0;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
  margin: 2px;
}
.tumbImg:hover {
  border-color: #a2a6ac #979aa1 #82858a;
}
.tumbImg > img {
  max-height: 90%;
  max-width: 100%
}
.lowTxt{
    font-size: 13px;
    line-height: 19px;
    color: #555;
}
.prodPrice{
    font-size: 21px;
    line-height: 1.3;
    color: #B12704;
}

#cartCont{
  padding-left: 5px;
    box-shadow: -4px 0px 3px -2px #ccc;
}
select{
  display: block;
  background-color:white; 
  border: 1px solid #DDD;
  width: unset; 
  padding: 5px;
  border: unset;
  border-radius: 2px;
  height: 3rem; 
}
</style>


