<template>
  <div class="home">
    <img alt="25 Friday logo" src="../assets/logo-with-text.jpg" />

    <div class="title orange">
      <p>Join us!</p>
    </div>
    <div class="sub-title">
      <p>We help digital start-ups and scale-ups succeed.</p>
    </div>
    <div>
      <p>
        Do you feel bored at your work?
        Have you always wanted to work in an entrepreneurial environment where quality and technology are key?
        Time for a change!
        Come and join us in scaling cool tech start-ups!
      </p>
    </div>
    <div class="sub-title orange">
      <p>It's not that we use technology, we breathe technology.</p>
    </div>

    <div class="grey-bg">
      <ImgSlider folder="TODO: component that does an image slider from a assest folder path" />
    </div>

    <div class="grey-bg">
      <h3 class="section-title orange">Job Openings</h3>
      <div class="h-bar"></div>
      <JobOpenings />
    </div>

    <div>
      <h3 class="section-title orange">Clients</h3>
      <div class="h-bar"></div>
      <div>
        <img alt="brainsfirst logo" src="../assets/clients-logos/brainsfirst.png" />
        <img alt="agon logo" src="../assets/clients-logos/agon.png" />
        <img alt="finbotx logo" src="../assets/clients-logos/finbotx.png" />
      </div>
    </div>

    <div class="grey-bg">
      <h3 class="section-title orange">Daily Culture</h3>
      <div class="h-bar"></div>
      <InstagramImages />
    </div>

    <div>
      <h3 class="section-title orange">Perks</h3>
      <div class="h-bar"></div>
      <ol>
        <li>Daily Breakfast (and snacks throughout the day)</li>
        <li>Health Insurance</li>
        <li>Flexible Work Hours (with possibility of some remote work)</li>
        <li>Talks and Workshops with Tech Experts</li>
        <li>Weekly Team Outings &amp; Happy Hours</li>
        <li>Food Allowance</li>
        <li>Flexible Holidays (just send us a postcard)</li>
        <li>Monthly Team Building (tuk tuk tours, escape rooms, buggy rides, barbeques at the beach..)</li>
        <li>Office Fun (Playstation, darts, leisure area)</li>
        <li>Commute Compensation (we pay you to come to work &amp; back home)</li>
      </ol>
    </div>

    <img alt="25 Friday logo" src="../assets/logo-with-text.jpg" />
    <div style="min-height: 100px"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImgSlider from "@/components/ImgSlider.vue";
import JobOpenings from "@/components/JobOpenings.vue";
import InstagramImages from "@/components/InstagramImages.vue";

@Component({
  components: {
    ImgSlider,
    JobOpenings,
    InstagramImages
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.orange {
  color: rgb(234, 133, 35);
}
.grey-bg {
  background: rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 120px;
}
.sub-title {
  font-weight: bold;
  font-size: 20px;
}
.section-title {
  text-align: left;
  margin: 40px 0 0;
  font-weight: 500;
  font-size: 32px;
}
.h-bar {
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
}
ol {
  columns: 2;
  margin: 20px 0 100px 20px;
  align-items: center;
  text-align: justify;
  li {
    margin-bottom: 10px;
  }
}
</style>