<template>
  <div id="lvl_Main" class="lvl_container">    
    <div class="row">
      <div id="Spons_Mob" class="col s12 hide-on-med-and-up">Sponsored on mobile</div>
      <div id="FiltersCont_Desk" class="col m3 l2 hide-on-small-only">Desktop Filters go here</div>
      <div id="FiltersCont_Mob" class="col s12 hide-on-med-and-up">Mobile Filters </div>
      <div id="ProdsCont" class="col s12 m9 l10">
        <div id="Spons_Desk" class="row hide-on-small-only">Sponsored on desktop</div>
        <div class="row">
          <div
            class="col CanSelect"
            :class="{'m3':inputOBJ.generalInfo.productView=='Grid'}"
            v-for="prod in Prods"
            :key="prod.id"
            @click="Selected(prod)"
          >
            <div class="prodLbl">{{prod.lbl}}</div>
            <div class="prodImg">
              <img :src="'./img/'+prod.img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lvl_Prod",
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
.prodLbl {
  text-transform: uppercase;
}
.prodImg > img {
  /* width: 100% */
  height: 100px;
}
.CanSelect:hover {
  background: lightblue;
  cursor: pointer;
}
#FiltersCont_Desk{
  background: lightgray;
  min-height: 200px;  
}
#FiltersCont_Mob{
  background: lightgray;
  min-height: 50px;  
}
#Spons_Desk,#Spons_Mob{
  background:lightcyan;
  min-height: 100px;
}

</style>
