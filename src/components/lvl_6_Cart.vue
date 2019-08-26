<template>
  <div id="lvl_cart" class="lvl_container">
    <div id="navRow" class="row">
      <span class="left">
        <span class="btn orange" @click="Back()">{{
          general_texts.btn.bckResults
        }}</span>
      </span>
    </div>
    <div class="row" style="padding-left:15px">
      <h5>{{ general_texts.cart.cartTitle }}</h5>
      <div v-if="CartArr.length == 1">
        {{ general_texts.cart.empty }}
      </div>
    </div>
    <div id="cartRow" class="row" v-if="CartArr.length > 1">
      <div
        class="col s12 l10 prodCol"
        v-for="prod in CartArr.filter(itm => {
          return itm.id > -1;
        })"
        :key="prod.id"
      >
        <hr />
        <div
          class="prodImg col s4 m3"
          :style="{
            'background-image':
              'url(' + prodMediaPath + prod.imgArr[0].imgSrc + ')'
          }"
        ></div>
        <div class="col s8 m9">
          <div class="ProdLbl" v-html="prod.lbl"></div>
          <div v-html="prod.by"></div>
          <div>
            <stars
              v-if="prod.rating != null"
              :rating="prod.rating"
              :skinProps="skinProps"
            ></stars
            >&nbsp;
            <span v-html="prod.reviews"></span>
          </div>

          <div v-html="prod.addInf1"></div>
          <!-- price -->
          <div class="prodPrice">
            <span v-if="general_texts.currecySide == 'left'">
              <sup v-html="general_texts.currency"></sup>
            </span>
            <span v-if="prod.price.toString().indexOf('.') > -1">
              <span v-html="prod.price.toString().split('.')[0]"></span>
              <sup
                class="suprascript"
                v-html="prod.price.toString().split('.')[1]"
              ></sup>
            </span>
            <span v-else v-html="prod.price"></span>
            <span v-if="general_texts.currecySide == 'right'">
              <sup v-html="general_texts.currency"></sup>
            </span>
          </div>
          <!-- additional info -->
          <div v-html="prod.addInf2"></div>
          <!-- quantity -->
          <div>
            {{ general_texts.qty }}
            <select v-model="prod.quantity" @change="UpdateQ()">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
          <!-- remove -->
          <div>
            <span class="DelLbl" @click="DeleteProd(prod)">{{
              general_texts.del
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="totalContainer" class="row center-align">
      <div>
        {{ general_texts.subTot }} ({{ updCart.nrProd }}
        {{ general_texts.itm }} ):
        {{ general_texts.currency }}
        {{ updCart.sum.toFixed(2) }}
      </div>
      <div
        v-if="ProdSkin.hasVoucher"
        :class="parseInt(updCart.remV) > 0 ? 'blue-text' : 'red-text'"
      >
        {{ general_texts.remainingV }} {{ general_texts.currency }}
        {{ updCart.remV }}
      </div>
    </div>
    <div
      id="xxCheckoutRow"
      class="row "
      v-if="CartArr.length > 1 || ProdSkin.allowEmptyCart"
    >
      <!-- <div class="col s12 m4 l2"></div> -->
      <span id="CheckoutCol" class="col s12 m5 l3">
        <span
          id="CheckoutBtn"
          :style="skinProps.LayoutProps.checkout_btn"
          @click="CheckOut()"
          >{{ general_texts.cart.checkout }}</span
        >
      </span>
    </div>
    <!-- modal -->
    <div id="modal1" class="modal">
      <div class="header_container">
        <span class="modal-close close_modal_btn">X</span>
      </div>
      <div class="modal-content">
        <div id="ProdMediaCont" class="row">
          {{ general_texts.cart.negVoucher }}
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
    general_texts: Object,
    prodMediaPath: String,
    CartArr: Array,
    updCart: Object,
    texts: Object,
    skinProps: Object,
    ProdSkin: Object,
    Cart: Array,
    voucher: String,
    cartVal: Number
  },
  data() {
    return {
      loadedDate: null
    };
  },
  created() {
    window.scrollTo(0, 0);
    // this.subTotal();
    this.loadedDate = new Date();
  },
  mounted() {
    var modal = document.querySelector(".modal");
    M.Modal.init(modal);
  },
  methods: {
    Back() {
      this.$emit("updCartTime", this.loadedDate);
      this.$emit("updtLvl", { lvl: "Products" });
    },
    CheckOut() {
      if (
        parseInt(this.updCart.remV) < 0 &&
        !this.ProdSkin.allowNegativeVoucher
      ) {
        M.Modal.getInstance($("#modal1")).open();
        return false;
      }
      this.$emit("updtLvl", { lvl: "Products" });
      this.$emit("updCartTime", this.loadedDate);
      this.$emit("checkOut");
    },
    UpdateQ() {
      this.$emit("RCart");
    },
    DeleteProd(prod) {
      this.$emit("remProd", prod);
      this.$emit("updCartTime", this.loadedDate);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#totalContainer {
  font-weight: bold;
}
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
#cartRow {
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
}
.prodCol {
  margin-left: unset !important;
}
.DelLbl {
  margin-top: 10px;
  color: #0066c0;
  cursor: pointer;
  font-size: 12px;
  /* box-shadow: 0 0 5px 0.1px rgba(0, 0, 0, 0.1); */
  border: solid 1px #babbbd;
  border-radius: 5px;
  width: 63px;
  height: 27px;
  display: block;
  padding: 5px;
  text-align: center;
  background-color: #e7e9ec;
}
#CheckoutRow {
  display: flex;
  justify-content: center;
}
/* #CheckoutCol {
  margin: unset;
} */
/* medium */
@media only screen and (min-width: 601px) {
  #CheckoutCol {
    margin-left: 29.333333%;
  }
}
/* large */
@media only screen and (min-width: 993px) {
  #CheckoutCol {
    margin-left: 37.666667%;
  }
}
#CheckoutBtn {
  width: 100%;
  padding: 5px;
  color: #111;
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none !important;
  vertical-align: middle;
}
/* #CheckoutBtn:hover {
  border-color: #a88734 #9c7e31 #846a29;
  background: linear-gradient(to bottom, #f5d78e, #eeb933);
} */
/* .modal-content {
  height: 90%;
  
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
}
.modal {
  
  top: 5vh !important;
  max-height: 90vh;
  width: 90vw;
  bottom: 5vh;
  overflow: hidden;
} */
.header_container {
  text-align: right;
  padding-right: 13px;
  padding-top: 10px;
  font-size: 20px;
}
.close_modal_btn {
  background-color: #26a69a;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
