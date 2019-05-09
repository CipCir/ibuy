<template>
  <div id="app" v-bind:style="{ 'background-color': skinProps.body_bk_color }">
    <headerComp
      :skinProps="skinProps"
      :nr_cart="cartNumb"
      :texts="texts"
      v-on:updtLvl="UpdateLvl($event)"
      :voucherVal="setVoucher"
    />
    <!-- <lvlMain
      v-if="controls.showLevel=='Main'"
      :texts="texts.texts.lvl_Main"
      :prods="prodDB"
      v-on:setCateg="SetCategory($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />
    <lvlAisle
      v-if="controls.showLevel=='Aisle'"
      :texts="texts.texts.lvl_Aisle"
      :Aisles="prodDB.AisleCat"
      :SelCatId="controls.selected1_Cat.id"
      v-on:setAisleCat="SetAisleCat($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />
    <lvlShelf
      v-if="controls.showLevel=='Shelf'"
      :texts="texts.texts.lvl_Shelf"
      :Shelfs="prodDB.ShelfCat"
      :SelAisleId="controls.selected2_AisleCat.id"
      v-on:selShelf="SetShelfCat($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />-->
    <lvlProds
      v-if="controls.showLevel == 'Products'"
      :general_texts="texts.general_texts"
      :Prods="prodDB.Products"
      :prodMediaPath="prodDB.prodMediaPath"
      :SponsoredProdId="prodDB.SponsoredProdId"
      :texts="texts"
      :cFilters="controls.filters"
      :skinProps="skinProps"
      v-on:selProd="SetPrdct($event)"
      v-on:updtLvl="UpdateLvl($event)"
      v-on:updFilter="UpdateFilters($event)"
    />
    <lvlPrdct
      v-if="controls.showLevel == 'Prdct'"
      :general_texts="texts.general_texts"
      :prodMediaPath="prodDB.prodMediaPath"
      :Prdct="controls.sel_Prdct"
      :texts="texts"
      :skinProps="skinProps"
      v-on:addInCart="AddProdInCart($event)"
      v-on:updtLvl="UpdateLvl($event)"
    />
    <lvlCart
      v-if="controls.showLevel == 'Cart'"
      :general_texts="texts.general_texts"
      :prodMediaPath="prodDB.prodMediaPath"
      :Cart="cart"
      :texts="texts"
      :skinProps="skinProps"
      v-on:updtLvl="UpdateLvl($event)"
      v-on:remProd="DeleteProdCart($event)"
      v-on:RCart="RefreshCart()"
      v-on:checkOut="CheckOut()"
      v-on:updVoucher="UpdateVoucher($event)"
    />
    <inputs
      v-if="controls.showLevel == 'inputs'"
      :skinProps="skinProps"
      v-on:updtLvl="UpdateLvl($event)"
    />

    <footerComp :skinProps="skinProps" :footer_texts="texts.footer" />

    <a
      class="waves-effect waves-light btn"
      @click="controls.showLevel = 'inputs'"
      ><i class="material-icons left">code</i>Show inputs</a
    >
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
import inputs from "./components/xInputs.vue";

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
    lvlCart,
    inputs
  },
  data() {
    return {
      texts,
      skinProps,
      prodDB,
      output: {},
      controls: {
        showLevel: "Products", // "Main","Aisle","Shelf","Products","Prdct","Cart"
        // selected1_Cat: null,
        // selected2_AisleCat: null,
        // selected3_ShelfCat: null,
        sel_Prdct: null,
        filters: {
          rating: null,
          brand: [],
          price: []
        }
      },
      cart: [{ id: -1, quantity: 0 }],
      cartSum: 0,
      voucher: null
    };
  },
  mounted() {
    if (this.skinProps.LayoutProps.hasVoucher) {
      this.voucher = parseFloat(this.skinProps.LayoutProps.voucher).toFixed(2);
    }
  },
  methods: {
    UpdateVoucher(pay) {
      this.voucher = pay;
    },
    UpdateFilters(pay) {
      if (this.controls.filters[pay.fil] == pay.val) {
        this.controls.filters[pay.fil] = null;
      } else {
        this.controls.filters[pay.fil] = pay.val;
      }
    },
    CheckOut() {
      //reset defaults
      this.cart = [{ id: -1, quantity: 0 }];
      this.cartSum = 0;
      this.controls.filters = {
        rating: null,
        brand: [],
        price: []
      };
    },
    SetPrdct(pay) {
      // pay prouct object
      this.controls.sel_Prdct = pay;
    },
    RefreshCart() {
      this.cart.shift();
      this.cart.unshift({ id: -1, quantity: 0 });
    },
    AddProdInCart(pay) {
      // check if prod exists in cart
      let index = this.cart.findIndex(i => i.id === this.controls.sel_Prdct.id);

      this.controls.sel_Prdct.quantity = pay;
      if (index > -1) {
        //update quantinty
        this.cart[index].quantity = pay;
      } else {
        // add in cart
        this.cart.push(this.controls.sel_Prdct);
      }
      // debugger
      this.cart.shift();
      let cartSum = 0;
      this.cart.forEach(prod => {
        cartSum += prod.quantity * parseFloat(prod.price);
      });
      this.voucher = (this.skinProps.LayoutProps.voucher - cartSum).toFixed(2);

      this.cart.unshift({ id: -1, quantity: 0 });

      // reset selected
      // this.cartSum=this.cartNumb
      this.controls.sel_Prdct = null;
    },
    DeleteProdCart(prod) {
      let index = this.cart.findIndex(i => i.id === prod.id);
      this.cart.splice(index, 1);
    },

    UpdateLvl(pay) {
      // debugger;
      this.controls.showLevel = pay.lvl;
      // this.controls.selected1_Cat=payload.cat
      // this.controls.selected2_AisleCat=pay.AisleCat
    }
  },

  computed: {
    // skinProps() {
    //   return skinProps;
    // },
    setVoucher() {
      if (this.skinProps.LayoutProps.hasVoucher) {
        return parseFloat(this.skinProps.LayoutProps.voucher).toFixed(2);
      }
    },
    cartNumb() {
      var sum = 0;
      this.cart.forEach(itm => {
        sum = sum + itm.quantity;
      });

      return sum;
    }
  }
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
