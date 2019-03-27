<template>
  <div id="lvl_Main" class="lvl_container">
    <div class="row">
      <div id="Spons_Mob" class="col s12 hide-on-med-and-up">Sponsored on mobile</div>
      <div id="FiltersCont_Desk" class="col m3 l2 hide-on-small-only">Desktop Filters go here</div>
      <div id="FiltersCont_Mob" class="col s12 hide-on-med-and-up">Mobile Filters</div>
      <div class="row">
        <div id="ProdsCont" class="col s12 m9 l10">
          <div id="Spons_Desk" class="row hide-on-small-only">Sponsored on desktop</div>

          <div
            class="col CanSelect"
            :class="[inputOBJ.generalInfo.productView=='Grid'?'m3':'m12', ((index % 4)==0&&(index>0))?'clear_left':'']"
            v-for="(prod,index) in Prods"
            :key="prod.id"
            @click="Selected(prod)"
          >
            <hr v-if="inputOBJ.generalInfo.productView=='Grid' && index>3">
            <div class="prodImg">
              <img :src="'./img/'+prod.img">
            </div>
            <div v-html="prod.lbl"></div>
            <div v-html="prod.by"></div>            
            <div v-html="prod.addInf1"></div>
             <stars v-if="prod.rating != null" :rating="prod.rating"></stars>
            <div v-html="prod.price"></div>
            <div v-html="prod.addInf2"></div>
          </div>
        </div>
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
    Prods: Array,
    inputOBJ: Object
  },
  methods: {
    Selected(prod) {
      // if (prod.prods.length==0){
      return false;
      // }
      // this.$emit('selShelf',prod)
      // this.$emit('updtLvl',{lvl:'Product'})
    }
  },
  computed: {
    SelProducts() {
      return false;
      /*
      let vueObj=this
      return this.Prods.filter(prod=>{
        return prod.shelfId.indexOf(vueObj.SelShelfId)>-1
      })
      */
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
