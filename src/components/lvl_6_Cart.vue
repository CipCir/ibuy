<template>
  <div id="lvl_Main" class="lvl_container">
    <H4>Cart component</H4>
    <div class="container">
      <div class="row" v-for="prdct in Cart.filter(itm=>{return itm.id>-1})" :key="prdct.id">
        <div>Label:{{prdct.lbl}}</div> 
        <div>Qnt:{{prdct.quantity}}</div>
      </div>

    </div>
  </div>
</template>

<script>
import stars from "./stars.vue";

export default {
  name: "lvl_Prod",
  components: {
    stars
  },
  props: {
    texts: Object,
    Cart: Array,
    inputOBJ: Object
  },
  methods: {
    Selected(prod) {
      // if (prod.prods.length==0){
      // return false;
      // }
      this.$emit("selProd", prod);
      this.$emit("updtLvl", { lvl: "Prdct" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ProdLbl {
  font-weight: bold;
  font-size: 15px !important;
  line-height: 1.4 !important;
}
.prodPrice {
  font-size: 21px;
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
#FiltersCont {
  background: lightgray;
  min-height: 100px;
}

#SponsCont {
  background: lightcyan;
  min-height: 100px;
}
</style>
