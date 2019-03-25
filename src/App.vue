<template>
  <div id="app">
    <headerComp
      :skin="setup.skin"
    />
    body
    footer
  </div>
</template>

<script>
import headerComp from './components/headerComp.vue'

export default {
  name: 'app',
  components: {
    headerComp
  },
  data(){
    return{
      inputObj,
      output:{},
      setup:{
        skin:"Amazon"
      },
      controls:{
        showLevel:"Main", // "Aisle","Shelf","Product","Enlarge","Cart"
      }
    }
  },
  // created(){
  //   console.log(inputObj)
  // }

}
</script>