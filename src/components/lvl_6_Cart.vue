<template>
  <div id="lvl_cart" class="lvl_container">
     <div id="navRow" class="row">
      <span class="left">
        <span class="btn orange" @click="$emit('updtLvl',{lvl:'Products'})">back to results</span>
      </span>      
    </div>
    <div class="row" style="padding-left:15px">
      <h5>Shopping Cart</h5>
    </div>
    <div id="cartRow" class="row">
      <div
        class="col s12 l10 prodCol"
        v-for="prod in Cart.filter(itm=>{return itm.id>-1})"
        :key="prod.id"        
      >
        <hr>
        <div
          class="prodImg col s4 m3"
          :style="{'background-image': 'url(' + './img/'+prod.imgArr[0]+ ')'}"
        >
          <!-- <img :src="'./img/'+prod.img"> -->
        </div>
        <div class="col s8 m9">
          <div class="ProdLbl" v-html="prod.lbl"></div>
          <div v-html="prod.by"></div>
          <div>
            <stars v-if="prod.rating != null" :rating="prod.rating"></stars>&nbsp;
            <span v-html="prod.reviews"></span>
          </div>

          <div v-html="prod.addInf1"></div>
          <!-- price -->
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
          <!-- additional info -->
          <div v-html="prod.addInf2"></div>
          <!-- quantity -->
          <div>
             Quantity
              <select v-model="prod.quantity">
                <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
              </select>
          </div>
          <!-- remove -->
          <div>
            <span class="DelLbl" @click="DeleteProd(prod)">Delete</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import stars from "./stars.vue";

export default {
  name: "lvl_Cart",
  components: {
    stars
  },
  props: {
    texts: Object,
    Cart: Array,
    inputOBJ: Object
  },
   created() {
    window.scrollTo(0,0)
  },
  methods: {
    Selected(prod) {
      // if (prod.prods.length==0){
      // return false;
      // }
      this.$emit("selProd", prod);
      this.$emit("updtLvl", { lvl: "Prdct" });
    },
    DeleteProd(prod){
      this.$emit("remProd",prod)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select {
  display: inline-block;
  background-color: white;
  border: 1px solid #ddd;
  width: auto;
  padding: 5px;
  border-radius: 2px;
}
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
#cartRow{
  display: flex;
  justify-content: center;
  flex-flow: column; 
  align-items: center;
}
.prodCol{
  margin-left: unset !important;
}
.DelLbl{
      color: #0066C0;
    cursor: pointer;
    font-size: 12px;
}
</style>
