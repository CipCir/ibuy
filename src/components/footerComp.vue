<template>
  <div id="footerComp">
    Place for footer    
  </div>
</template>

<script>
export default {
  name: 'footerComp',
  props: {
    skin: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footerComp {  
  height: 100px;
  background-color: grey
}
</style>
