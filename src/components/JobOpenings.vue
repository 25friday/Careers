<template>
  <div class="container">
    <div class="item">job 1 -- integrate with the job list container</div>
    <div class="item">job 2 -- integrate with the job list container</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class JobOpenings extends Vue {}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  text-align: left;
}
.item {
  justify-content: space-between;
  height: 100px;
  width: 300px;
  margin: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
