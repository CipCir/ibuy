<template>
  <div id="app" v-bind:style="{'background-color':inputObj.generalInfo.body_bk_color}">
    <headerComp
      :texts="inputObj.texts.Header"
      :skin="inputObj.generalInfo.skin"
      :skinProps="inputObj.generalInfo.skinProps"
      :nr_cart="cartNumb"
      v-on:updtLvl="UpdateLvl($event)"
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
      :texts="inputObj.texts"
      :Prdct="controls.sel_Prdct"
      :inputOBJ="inputObj"
      v-on:addInCart="AddProdInCart($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />
      <lvlCart
      v-if="controls.showLevel=='Cart'"
      :texts="inputObj.texts"
      :Cart="cart"
      :inputOBJ="inputObj"
      v-on:addInCart="AddProdInCart($event)"
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

// import lvlMain from "./components/lvl_1_Main.vue";
// import lvlAisle from "./components/lvl_2_Aisle.vue";
// import lvlShelf from "./components/lvl_3_Shelf.vue";
import lvlProds from "./components/lvl_4_Products.vue";
import lvlPrdct from "./components/lvl_5_Product.vue";
import lvlCart from "./components/lvl_6_Cart.vue";

import footerComp from "./components/footerComp.vue";

export default {
  name: "app",
  components: {
    headerComp,
    footerComp,
    // lvlMain,
    // lvlAisle,
    // lvlShelf,
    lvlProds,
    lvlPrdct,
    lvlCart
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
        sel_Prdct: null,
      },
      cart: [{id:-1,quantity:0}],
      cartSum:0
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
    SetPrdct(pay) {
      // pay prouct object
      this.controls.sel_Prdct = pay;
    },
    AddProdInCart(pay) {
      // check if prod exists in cart
      let index=this.cart.findIndex(i => i.id === this.controls.sel_Prdct.id);

       this.controls.sel_Prdct.quantity=pay
      if (index>-1){
        //update quantinty
        this.cart[index].quantity=pay
      }else{
        // add in cart      
        this.cart.push(this.controls.sel_Prdct);
      }
      // debugger
      this.cart.shift()
      this.cart.unshift({id:-1,quantity:0})

      // reset selected
      // this.cartSum=this.cartNumb
      this.controls.sel_Prdct = null;
    },
    UpdateLvl(pay) {
      this.controls.showLevel = pay.lvl;
      // this.controls.selected1_Cat=payload.cat
      // this.controls.selected2_AisleCat=pay.AisleCat
    }
  },
  //  watch: {
  //   cart: {
  //     deep:true,
  //     handler: function (val) {
  //       var sum=0      
  //       this.cart.forEach(itm=>{
  //         sum=sum+itm.quantity
  //       })
  //       debugger
  //       this.cartSum=sum
  //     }

  //   }},
  
   computed:{
    cartNumb(){
      
      var sum=0      
      this.cart.forEach(itm=>{
        sum=sum+itm.quantity
      })
      
      return sum
      // if (this.cart.length==0){
      //   return 0
      // }
      // return this.cart.map(item => item.quantity).reduce((total, amount) => total + amount);
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
body {
  font-family: "Amazon Ember", Arial, sans-serif;
}
.lvl_container {
  width: 100%;
}
@media only screen and (min-width: 1200px) {
  .show-on-extra-large {
    display: block !important;
  }
  .show-on-large {
    display: none !important;
  }
}
@media only screen and (max-width: 1200px) and (min-width: 993px) {
  .show-on-large {
    display: block !important;
  }
}
@media only screen and (max-width: 1200px) {
  .hide-on-large-and-down {
    display: none !important;
  }
}

.clickable {
  cursor: pointer;
}
.mark {
  background: lightgrey;
}
</style>
