<template>
  <div id="lvl_Main" class="lvl_container">
    <div id="subTitle">{{texts.subTitle}}</div>
    <div class="row">
      <div class="col s12 m4 l3 prodegCont CanSelect" v-for="prod in SelProducts" :key="prod.id"      
      @click="Selected(prod)"
      >
        <div class="prodLbl">{{prod.lbl}}</div>
        <div class="prodImg"><img :src="'./img/'+prod.img"/></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lvl_Prod',
  props: {
    texts: Object,    
    Prods:Array,
    SelShelfId:Number
  },
  methods:{
    Selected(prod){
      // if (prod.prods.length==0){
        return false
        // }
      // this.$emit('selShelf',prod)
      // this.$emit('updtLvl',{lvl:'Product'})
    },
  },
  computed:{
    SelProducts(){
      let vueObj=this
      return this.Prods.filter(prod=>{
        return prod.shelfId.indexOf(vueObj.SelShelfId)>-1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#headerComp {  
  height: 100px;
  background-color: grey
}
#subTitle{
  margin-left: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
}
.prodegCont{  
  /* background: lightblue; */
  text-align: center;
  padding: 0 20px;
  height: 150px;
}
.prodLbl{
  text-transform:uppercase;
}
.prodImg>img{
  /* width: 100% */
  height: 100px;
}
.CanSelect:hover{
  background: lightblue;
  cursor: pointer;
}
</style>
