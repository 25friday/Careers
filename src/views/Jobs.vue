<template>
  <div class="jobs">
    <DynamicList :item="item" v-for="item in items" v-bind:key="item.id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DynamicList from '@/components/DynamicList.vue';
import { jobsService } from '@/services/JobsService';

@Component({
  components: {
    DynamicList,
  },
})
export default class Jobs extends Vue {
  public items = [{ }];

  public created() {
    jobsService.getQuote().then((response) => { const quote = response.data.quote; });
    this.items = jobsService.getJobs();
  }
}
</script>
