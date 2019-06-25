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
    <!-- row for sort -->
    <div
      class="row right valign-wrapper"
      id="sortContainer"
      v-if="skinProps.LayoutProps.hasSort && controls.showLevel == 'Products'"
    >
      <b>{{ texts.filters.SortByLabel }}</b>
      <select
        id="SortDrop"
        v-model="SortBy"
        :style="skinProps.LayoutProps.sortby_btn"
      >
        <option
          v-for="srt in texts.filters.SortArr"
          :key="srt.lbl"
          :value="srt"
          >{{ srt.lbl }}</option
        >
      </select>
    </div>
    <lvlProds
      v-if="controls.showLevel == 'Products'"
      :general_texts="texts.general_texts"
      :Prods="ProductsArr"
      :PRandIndx="ProdRandIndx"
      :prodDB="prodDB"
      :seenProds="output.prod_seen"
      :SponsoredProdId="prodDB.SponsoredProd.id"
      :texts="texts"
      :cFilters="controls.filters"
      :skinProps="skinProps"
      :SortBy="SortBy"
      v-on:selProd="SetPrdct($event)"
      v-on:updtLvl="UpdateLvl($event)"
      v-on:updFilter="UpdateFilters($event)"
      v-on:SaveProdOrdr="SaveIndexProd($event)"
      v-on:StoreBnr="StoreBnrClick($event)"
      v-on:SaveViewed="SaveViewedProds($event)"
    />
    <lvlPrdct
      v-if="controls.showLevel == 'Prdct'"
      :general_texts="texts.general_texts"
      :prodDB="prodDB"
      :Prdct="controls.sel_Prdct"
      :texts="texts"
      :skinProps="skinProps"
      :ImgIndx="ImgIndx"
      v-on:addInCart="AddProdInCart($event)"
      v-on:updtLvl="UpdateLvl($event)"
      v-on:storePrdInfo="StorePrdctInfo($event)"
      v-on:StoreBnr="StoreBnrClick($event)"
      v-on:updImgIndx="UpdateImgIndx($event)"
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
      v-on:updCartTime="UpdateCartTime($event)"
    />
    <inputs
      v-if="controls.showLevel == 'inputs'"
      :skinProps="skinProps"
      v-on:updtLvl="UpdateLvl($event)"
    />
    <outputs
      v-if="controls.showLevel == 'output'"
      :output="output"
      v-on:updtLvl="UpdateLvl($event)"
    />

    <footerComp :skinProps="skinProps" :footer_texts="texts.footer" />
    <div class="row" v-if="skinProps.TestMode">
      <a
        class="waves-effect waves-light btn"
        @click="controls.showLevel = 'inputs'"
        ><i class="material-icons left">code</i>Show inputs</a
      >
    </div>
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
import outputs from "./components/xOutput.vue";

import footerComp from "./components/footerComp.vue";
import { debuglog } from "util";

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
    inputs,
    outputs
  },
  data() {
    return {
      texts,
      skinProps,
      prodDB,
      ProductsArr,
      ProdRandIndx: [],
      output: {
        time_total: null,
        time_cart: null,
        cart_val: null,
        cart_prod: [],
        prod_seen: [],
        prod_clicked: [],
        prod_addedInCart: [],
        prod_removedCart: [],
        prod_BnrClick: [],
        prodInfo: {},
        filterUsed: null,
        sortUsed: null
      },
      SortBy: {},
      aux: {
        beginTime: null,
        endTime: null,
        prodStartTime: null
      },
      ImgIndx: 0,
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
    this.ProdRandIndx = this.ProductsArr.map(a => a.id);
    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);
    }
    shuffle(this.ProdRandIndx);
  },
  created() {
    this.SortBy = this.texts.filters.SortArr[0];
    this.aux.beginTime = new Date();
  },

  methods: {
    SaveViewedProds(pay) {
      console.log(pay);
      let vueArr = this.output.prod_seen;

      pay.forEach(elm => {
        if (vueArr.indexOf(elm) == -1) {
          vueArr.push(elm);
        }
      });
    },
    UpdateImgIndx(pay) {
      //store img indx
      this.StorePrdctInfo({
        ID: pay.prodId,
        prmName: "imgSeen",
        prmVal: pay.imgInx
      });

      this.ImgIndx = pay.imgInx;
    },
    StorePrdctInfo(pay) {
      // debugger;
      //check if record exists
      if (this.output.prodInfo[pay.ID]) {
        if (pay.prmName == "imgSeen") {
          this.output.prodInfo[pay.ID].info[pay.prmName].push(pay.prmVal);
        } else {
          this.output.prodInfo[pay.ID].info[pay.prmName] = pay.prmVal;
        }
      } else {
        // add record with defaults
        if (pay.prmName == "imgSeen") {
          this.output.prodInfo[pay.ID] = {
            info: {
              imgSeen: [pay.prmVal],
              usedZoom: false,
              videoPlayed: false
            },
            timeSpent: 0
          };
        }
        // else {
        //   this.output.prodInfo[pay.ID] = {
        //     info: {
        //       imgSeen: [],
        //       usedZoom: pay.prmVal,
        //       videoPlayed: false
        //     }
        //   };
        // }
      }
    },
    StorePrdctTimers(pay) {
      let prodTime = new Date() - new Date(this.aux.prodStartTime);

      //store output
      //check if record exists

      this.output.prodInfo[this.controls.sel_Prdct.id].timeSpent += prodTime;
    },
    StoreBnrClick(pay) {
      let recrd = {};
      if (pay == "TopBnr") {
        recrd = {
          id: -1,
          bnr: "TopBnr"
        };
      } else {
        recrd = {
          id: this.controls.sel_Prdct.id,
          bnr: pay
        };
      }
      this.StoreInArr(this.output.prod_BnrClick, recrd);
      this.controls.sel_Prdct = this.ProductsArr.find(
        x => x.id == prodDB.SponsoredProd.id
      );
      this.UpdateImgIndx({ prodId: this.controls.sel_Prdct.id, imgInx: 0 });

      window.scrollTo(0, 0);
      //start product view time
      this.aux.prodStartTime = Date();
    },
    StoreInArr(arr, elVal) {
      arr.push(elVal);
    },
    SaveIndexProd(pay) {
      this.output.prodIndx = pay;
    },
    UpdateCartTime(pay) {
      this.output.time_cart += new Date() - pay;
    },
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
      //set filters and sort
      this.output.filterUsed = this.controls.filters;
      this.output.sortUsed = this.SortBy.lbl;
      //set cart prod
      this.output.cart_prod = [];
      this.cart
        .filter(itm => itm.id != -1)
        .forEach(elm => {
          this.output.cart_prod.push({ id: elm.id, q: elm.quantity });
        });

      //set product index
      if (
        this.skinProps.LayoutProps.hasSort == false &&
        this.skinProps.LayoutProps.RandomizeProds_ForNoSort
      ) {
        this.output.prodIndx = this.ProdRandIndx;
      }

      //set timers
      this.output.time_total = new Date() - this.aux.beginTime;

      // set value
      this.output.cart_val = 0;
      this.cart.forEach(prod => {
        if (prod.id != -1) {
          this.output.cart_val += prod.quantity * parseFloat(prod.price);
        }
      });
      this.output.cart_val = this.output.cart_val.toFixed(2);

      //display outputs
      this.controls.showLevel = "output";
      /*
      //reset defaults
      this.cart = [{ id: -1, quantity: 0 }];
      this.cartSum = 0;
      this.controls.filters = {
        rating: null,
        brand: [],
        price: []
      };
      */
    },
    SetPrdct(pay) {
      // pay prouct object
      this.controls.sel_Prdct = pay;
      //save prod in output
      this.StoreInArr(this.output.prod_clicked, pay.id);
      //save prod img indx
      this.UpdateImgIndx({ prodId: pay.id, imgInx: 0 });
      //start product view time
      this.aux.prodStartTime = Date();
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

      //update output
      this.StoreInArr(this.output.prod_addedInCart, this.controls.sel_Prdct.id);
    },
    DeleteProdCart(prod) {
      let index = this.cart.findIndex(i => i.id === prod.id);
      this.cart.splice(index, 1);
      this.StoreInArr(this.output.prod_removedCart, prod.id);
    },

    UpdateLvl(pay) {
      // if last value was product, store prod timers
      if (this.controls.showLevel == "Prdct") {
        this.StorePrdctTimers();
        this.controls.sel_Prdct = null;
      }
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
        let voucher = 0;
        let cartTotal = 0;
        this.cart.forEach(prod => {
          if (prod.id != -1) {
            cartTotal += prod.quantity * parseFloat(prod.price);
          }
        });
        voucher = (this.skinProps.LayoutProps.voucher - cartTotal).toFixed(2);

        return voucher;
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
#SortDrop {
  display: block;
  float: right;
  width: 200px;
  background: white;

  margin-left: 10px;
  margin-right: 10px;
  height: 30px;
  padding: 0px;
}
</style>
