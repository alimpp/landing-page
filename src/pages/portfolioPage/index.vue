<template>
  <div class="portfolio-page application_animation">
    <coreDivider title="Portfolio" />
    <div class="row">
      <div class="col-lg-3" v-for="data in dataSource" :key="data.id">
        <router-link class="application_link" :to="`/projects/${data.id}`">
          <coreCard :title="data.title" :image="data.image" :description="data.description" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import coreDivider from "@/components/core/coreDivider";
import coreCard from "@/components/core/coreCard";
export default {
  components: { coreDivider, coreCard },
  computed: {
    dataSource() {
      return this.$store.getters["projects/allProjects"];
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-page {
  display: flex;
  flex-direction: column;
}
</style>
