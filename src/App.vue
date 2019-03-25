<template>
  <div id="app">
    <headerComp
      :texts="inputObj.generalInfo.texts"
      :skin="inputObj.generalInfo.skin"
      :skinProps="inputObj.generalInfo.skinProps"
      :nr_cart="5"
    />
    <lvlMain v-if="controls.showLevel=='Main'" :texts="inputObj.texts.lvl_Main"/>

    <footerComp/>
  </div>
</template>

<script>
import headerComp from "./components/headerComp.vue";
import lvlMain from "./components/lvl_Main.vue";
import footerComp from "./components/footerComp.vue";

export default {
  name: "app",
  components: {
    headerComp,
    footerComp,
    lvlMain
  },
  data() {
    return {
      inputObj,
      output: {},
      controls: {
        showLevel: "Main" // "Aisle","Shelf","Product","Enlarge","Cart"
      }
    };
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
