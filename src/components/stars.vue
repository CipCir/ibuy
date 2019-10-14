<template>
  <div class="stars_container">
    <div v-for="n in fullstars" class="star fullstar" v-bind:key="n.id"></div>
    <div v-for="n in halfstars" class="star halfstar" v-bind:key="n.id"></div>
    <div v-for="n in remaining" class="star emptystar" v-bind:key="n.id"></div>
  </div>
</template>

<script>
export default {
  name: "stars",
  props: {
    rating: Number,
    skinProps: Object,
    ProdSkin: Object
  },
  data() {
    return {
      fullstars: 0,
      halfstars: 0,
      remaining: 0,
      maxStars: skinProps.ratingMaxVal
    };
  },
  mounted() {
    let rateArr = this.rating.toString().split(".");
    let hasHalf = 0;

    if ((rateArr.length = 2)) {
      hasHalf = rateArr[1] >= 5;
    }

    if (hasHalf) {
      this.halfstars = 1;
    }
    this.fullstars = parseInt(rateArr[0]);
    if (this.fullstars <= this.maxStars) {
      this.remaining = this.maxStars - this.fullstars - this.halfstars;
    } else {
      this.remaining = 0;
      this.fullstars = 0;
      this.halfstars = 0;
    }
  }
};
</script>
<style scoped>
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