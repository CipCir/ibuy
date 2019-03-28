<template>
  <div id="lvl_Main" class="lvl_container">
    <div class="row">
      <div id="FiltersCont" class="col s12 m3 l2">Filters go here</div>

      <div class="row">
        <div id="ProdsCont" class="col s12 m9 l10">
          <div id="SponsCont" class="row s12">Sponsored</div>          
            <div class="col l12 xl11 ">
            
                      <div
                      class="col CanSelect s12"
                      :class="[inputOBJ.generalInfo.productView=='Grid'?'m3':'m12', ((index % 4)==0&&(index>0))?'clear_left':'']"
                      v-for="(prod,index) in Prods"
                      :key="prod.id"
                      @click="Selected(prod)"
                    >
                      <hr>
                      <!-- <hr v-if="inputOBJ.generalInfo.productView=='Grid' && index>3"> -->
                      <div
                        class="prodImg col"
                        :class="inputOBJ.generalInfo.productView=='Grid'?'s4 m12':'s4 m3'"
                        :style="{'background-image': 'url(' + './img/'+prod.img+ ')'}"
                      >
                        <!-- <img :src="'./img/'+prod.img"> -->
                      </div>
                      <div class="col" :class="inputOBJ.generalInfo.productView=='Grid'?'s8 m12':'s8 m9'">
                        <div class="ProdLbl" v-html="prod.lbl"></div>
                        <div v-html="prod.by"></div>
                        <div>
                          <stars v-if="prod.rating != null" :rating="prod.rating"></stars>&nbsp;
                          <span v-html="prod.reviews"></span>
                        </div>

                        <div v-html="prod.addInf1"></div>
                        <div class="prodPrice">
                          <span
                            v-if="inputOBJ.generalInfo.currecySide=='left'"                            
                          ><sup v-html="inputOBJ.generalInfo.currency"></sup></span>
                          <span v-if="prod.price.toString().indexOf('.')>-1">
                            <span v-html="prod.price.toString().split('.')[0]"></span>
                            <sup class="suprascript" v-html="prod.price.toString().split('.')[1]"></sup>
                          </span>
                          <span v-else v-html="prod.price"></span>
                          <span
                            v-if="inputOBJ.generalInfo.currecySide=='right'"                            
                          >
                          <sup v-html="inputOBJ.generalInfo.currency"></sup>
                          </span>
                        </div>

                        <div v-html="prod.addInf2"></div>
                      </div>
                    </div>
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
.ProdLbl::before {
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, white 58%);
  content: "\2026";
  /* content: "\200C"; */
  display: block;
  position: absolute;
  right: 0;
  top: 55px;
  width: 100%;
  text-align: center;
  font-size: 25px;
}
.prodPrice {
  font-size: 21px;
}
.ProdLbl {
  font-weight: bold;
  font-size: 15px !important;
  line-height: 1.4 !important;
  max-height: 88px;
  overflow: hidden;
  position: relative;
  display: block;
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
