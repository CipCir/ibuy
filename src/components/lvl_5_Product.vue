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
            <stars v-if="Prdct.rating != null" :rating="Prdct.rating"></stars>
            <span class="CstmRev">{{Prdct.reviews}} {{texts.CustmrsRev}}</span>
          </div>
        </div>
        <!-- prod images -->
        <div class="row">
          <!-- thumbs -->
          <div class="col m2 l1" style="background:lightblue">
            <div class="tumbImg">
              <img :src="'./img/'+Prdct.img">
            </div>
            <div class="tumbImg">
              <img :src="'./img/'+Prdct.img">
            </div>
          </div>
          <!-- main img -->
          <div class="col m10 l11 center-align">
            <div class="prodImg">
              <img :src="'./img/'+Prdct.img">
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 m5 l4" style="background:lightsalmon">cart cont</div>
      <div class="col l1 hide-on-large-and-down mark" style="height:300px">Empty col</div>
    </div>

    <div v-html="Prdct.addInf1"></div>

    <div v-html="Prdct.price"></div>
    <div v-html="Prdct.addInf2"></div>
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

.tumbImg {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  border-color: #a2a6ac;
  border-radius: 2px;
  background: #e7e9ec;
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
  height: 90%;
}
</style>


