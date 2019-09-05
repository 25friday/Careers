<template>
  <div class="hello">
    <h3>Job Openings</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class JobOpenings extends Vue {
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
