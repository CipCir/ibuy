<template>
  <div id="app">
    <headerComp
      :texts="inputObj.texts.Header"
      :skin="inputObj.generalInfo.skin"
      :skinProps="inputObj.generalInfo.skinProps"
      :nr_cart="5"
    />
    <!-- <lvlMain
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
    />-->
    <lvlProds
      v-if="controls.showLevel=='Products'"
      :texts="inputObj.texts.lvl_Prod"
      :Prods="prodDB.Products"
      :SelShelfId="controls.selected3_ShelfCat"
      :inputOBJ="inputObj"
      v-on:selProd="SetPrdct($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />
    <lvlPrdct
      v-if="controls.showLevel=='Prdct'"
      :texts="inputObj.texts.lvl_Prod"
      :Prdct="controls.sel_Prdct"      
      :inputOBJ="inputObj"
      v-on:addInCart="AddProdInCart()"
      v-on:updtLvl="UpdateLvl($event)"
    />

    <footerComp
      :skin="inputObj.generalInfo.skin"
      :skinProps="inputObj.generalInfo.skinProps"
      :texts="inputObj.texts.Footer"
    />
  </div>
</template>

<script>
import headerComp from "./components/headerComp.vue";

import lvlMain from "./components/lvl_1_Main.vue";
import lvlAisle from "./components/lvl_2_Aisle.vue";
import lvlShelf from "./components/lvl_3_Shelf.vue";
import lvlProds from "./components/lvl_4_Products.vue";
import lvlPrdct from "./components/lvl_5_Product.vue";

import footerComp from "./components/footerComp.vue";

export default {
  name: "app",
  components: {
    headerComp,
    footerComp,
    lvlMain,
    lvlAisle,
    lvlShelf,
    lvlProds,
    lvlPrdct
  },
  data() {
    return {
      inputObj,
      prodDB,
      output: {},
      controls: {
        showLevel: "Products", // "Main","Aisle","Shelf","Products","Prdct","Cart"
        selected1_Cat: null,
        selected2_AisleCat: null,
        selected3_ShelfCat: null,
        sel_Prdct:null,
        cart:[]
      }
    };
  },
  methods: {
    // SetShelfCat(pay) {
    //   this.controls.selected3_ShelfCat = pay;
    // },
    // SetAisleCat(pay) {
    //   this.controls.selected2_AisleCat = pay;
    // },
    // SetCategory(pay) {
    //   this.controls.selected1_Cat = pay;
    // },
    SetPrdct(pay){
      this.controls.sel_Prdct=pay;
    },
    AddProdInCart(){
      // add in cart
      this.controls.cart.push(this.controls.sel_Prdct)
      // reset selected
      this.controls.sel_Prdct=null
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
