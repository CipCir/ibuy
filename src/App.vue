<template>
  <div id="app">
    <headerComp
      :texts="inputObj.texts.Header"
      :skin="inputObj.generalInfo.skin"
      :skinProps="inputObj.generalInfo.skinProps"
      :nr_cart="5"
    />
    <lvlMain
      v-if="controls.showLevel=='Main'"
      :texts="inputObj.texts.lvl_Main"
      :prods="prodDB"
      v-on:setCateg="SetCategory($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />
    <lvlAisle
      v-if="controls.showLevel=='Aisle'"
      :texts="inputObj.texts.lvl_Aisle"
      :Aisles="prodDB.AisleCat"
      :SelCatId="controls.selected1_Cat.id"
      v-on:setAisleCat="SetAisleCat($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />
    <lvlShelf
      v-if="controls.showLevel=='Shelf'"
      :texts="inputObj.texts.lvl_Shelf"
      :Shelfs="prodDB.ShelfCat"
      :SelAisleId="controls.selected2_AisleCat.id"
      v-on:selShelf="SetShelfCat($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />
    <lvlProds
      v-if="controls.showLevel=='Product'"
      :texts="inputObj.texts.lvl_Prod"
      :Prods="prodDB.Products"
      :SelShelfId="controls.selected3_ShelfCat.id"
      v-on:selProd="SetShelfCat($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />

    <footerComp
      :skin="inputObj.generalInfo.skin"
      :skinProps="inputObj.generalInfo.skinProps"
      :texts="inputObj.texts.Footer"
    />
    <stars :fullstars="fullstars" :halfstars="halfstars"></stars>
  </div>
</template>

<script>
import headerComp from "./components/headerComp.vue";

import lvlMain from "./components/lvl_1_Main.vue";
import lvlAisle from "./components/lvl_2_Aisle.vue";
import lvlShelf from "./components/lvl_3_Shelf.vue";
import lvlProds from "./components/lvl_4_Products.vue";

import footerComp from "./components/footerComp.vue";
import stars from "./components/stars.vue";

export default {
  name: "app",
  components: {
    headerComp,
    footerComp,
    lvlMain,
    lvlAisle,
    lvlShelf,
    lvlProds
  },
  data() {
    return {
      inputObj,
      prodDB,
      output: {},
      controls: {
        showLevel: "Main", // "Aisle","Shelf","Product","Enlarge","Cart"
        selected1_Cat: null,
        selected2_AisleCat: null,
        selected3_ShelfCat: null
      }
    };
  },
  methods: {
    SetShelfCat(pay) {
      this.controls.selected3_ShelfCat = pay;
    },
    SetAisleCat(pay) {
      this.controls.selected2_AisleCat = pay;
    },
    SetCategory(pay) {
      this.controls.selected1_Cat = pay;
    },
    UpdateLvl(pay) {
      this.controls.showLevel = pay.lvl;
      // this.controls.selected1_Cat=payload.cat
      // this.controls.selected2_AisleCat=pay.AisleCat
    }
  }
  // created(){
  //   console.log(inputObj)
  // }
};
</script>
<style>
#app {
  width: 100%;
}
.lvl_container {
  width: 100%;
}
</style>
