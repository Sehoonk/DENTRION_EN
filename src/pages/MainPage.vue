<template>
  <div class="intro">
    <DentrionIntro />
  </div>
  <div class="intro_second">
    <DentrionSlider />
  </div>
  <div class="why">
    <DentrionWhy />
  </div>
  <div class="dentrion_place">
    <DentrionPlace />
  </div>
  <div class="dentrion_rate">
    <DentrionRate />
  </div>
  <div class="dentrion_comment">
    <DentrionComment />
  </div>
  <div class="dentrion_benefit">
    <DentrionBenefit />
  </div>
  <div class="dentrion_contact">
    <DentrionContact />
  </div>

  <div class="dentrion_footer">
    <DentraionFooter />
  </div>
</template>

<script>
import DentrionIntro from "../components/dentrion_intro.vue";
import DentrionSlider from "../components/dentrion_slider.vue";
import DentrionWhy from "../components/dentrion_why.vue";
import DentrionPlace from "../components/dentrion_place.vue";
import DentrionRate from "../components/dentrion_rate.vue";
import DentrionComment from "../components/dentrion_comment.vue";
import DentrionBenefit from "../components/dentrion_benefit.vue";
import DentrionContact from "../components/dentrion_contact.vue";
import DentraionFooter from "../components/dentrion_footer.vue";
export default {
  components: {
    DentrionIntro,
    DentrionSlider,
    DentrionWhy,
    DentrionPlace,
    DentrionRate,
    DentrionComment,
    DentrionBenefit,
    DentrionContact,
    DentraionFooter,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
