<template>
<div class="stars_container">
  <div v-for="n in fullstars" class='star fullstar' v-bind:key="n.id"></div>
  <div v-for="n in halfstars" class='star halfstar' v-bind:key="n.id"></div>
  <div v-for="n in 5-fullstars-halfstars" class='star emptystar' v-bind:key="n.id"></div>
  </div>
</template>

<script>
export default {
  name: "stars",
  props: {
    fullstars: Number,
    halfstars: Number
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App mau mau mauuuu"
    };
  },
  created: function() {
    console.log("in stars created");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullstar {
  background-image: url("http://media.ipsosinteractive.com/sandbox/Ramona/AmazonDEV/general/full_star.png");
}

.halfstar {
  background-image: url("http://media.ipsosinteractive.com/sandbox/Ramona/AmazonDEV/general/half_star.png");
}

.emptystar {
  background-image: url("http://media.ipsosinteractive.com/sandbox/Ramona/AmazonDEV/general/empty_star.png");
}

.star {
  width: 20px;
  height: 20px;
  background-repeat: round;
  display: inline-flex;
}

.stars_container {
  display: inline-flex;
}

.starsrev {
  display: inline-flex;
  margin: auto 0px auto 10px;
}
</style>
