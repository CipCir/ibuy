<template>
  <div id="lvl_Main" class="lvl_container">
    <div id="subTitle">{{texts.subTitle}}</div>
  </div>
</template>

<script>
export default {
  name: 'lvl_Main',
  props: {
    texts: Object
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
  font-weight: bold;
}
</style>
