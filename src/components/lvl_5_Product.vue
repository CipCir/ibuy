<template>
  <div id="lvl_Main" class="lvl_container">
    <div class="row container">
      Product page:
      <div class="prodImg">
            <img :src="'./img/'+Prdct.img">
            </div>
            <div v-html="Prdct.lbl"></div>
            <div v-html="Prdct.by"></div>            
            <div v-html="Prdct.addInf1"></div>
            <stars v-if="Prdct.rating != null" :rating="Prdct.rating"></stars>
            <div v-html="Prdct.price"></div>
            <div v-html="Prdct.addInf2"></div>
    <div class="btn" @click="addToCart()">add to cart</div>
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
  methods: {
    addToCart() {
      // if (prod.prods.length==0){
      // return false;
      // }
       this.$emit('addInCart')
       this.$emit('updtLvl',{lvl:'Products'})
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
.prodImg > img {
  /* width: 100% */
  height: 100px;
}
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
</style>
