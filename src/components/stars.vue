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
    skinProps: Object
  },
  data() {
    return {
      fullstars: 0,
      halfstars: 0,
      remaining: 0,
      maxStars: skinProps.LayoutProps.ratingMaxVal
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fullstar {
  background-image: url("https://cdn.ipsosinteractive.com/deploy/products/iBuy_v2/img/stars/amazon_full_star.png");
}

.halfstar {
  background-image: url("https://cdn.ipsosinteractive.com/deploy/products/iBuy_v2/img/stars/amazon_half_star.png");
}

.emptystar {
  background-image: url("https://cdn.ipsosinteractive.com/deploy/products/iBuy_v2/img/stars/amazon_empty_star.png");
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
