<template>
  <div class="hello">
    <h3>{{ folder }}</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImgSlider extends Vue {
  @Prop() private folder!: string;
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
