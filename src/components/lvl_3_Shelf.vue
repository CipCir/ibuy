<template>
  <div id="lvl_Main" class="lvl_container">
    <div id="subTitle">{{texts.subTitle}}</div>
    <div class="row">
      <div class="col s12 m4 l3 CategCont CanSelect" v-for="cat in Shelfs.filter(Shelf=>{ return Shelf.aisleId ==SelAisleId})" :key="cat.id"      
      @click="Selected(cat)"
      >
        <div class="catLbl">{{cat.lbl}}</div>
        <div class="catImg"><img :src="'./img/'+cat.img"/></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lvl_Shelf',
  props: {
    texts: Object,
    Shelfs:Array,
    SelAisleId:Number
  },
  methods:{
    Selected(cat){
      this.$emit('selShelf',cat)
      this.$emit('updtLvl',{lvl:'Product'})
    },
  },
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
.CategCont{  
  /* background: lightblue; */
  text-align: center;
  padding: 0 20px;
  height: 150px;
}
.catLbl{
  text-transform:uppercase;
}
.catImg>img{
  /* width: 100% */
  height: 100px;
}
.CanSelect:hover{
  background: lightblue;
  cursor: pointer;
}
</style>
