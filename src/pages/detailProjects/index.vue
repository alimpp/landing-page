<template>
  <div class="detail-prjects application_animation">
    <div class="d-flex flex-column" v-for="data in dataSource" :key="data.id">
      <div class="row">
        <div class="col-lg-6">
          <img :src="data.image" alt="image" />
        </div>
        <div class="col-lg-6 d-flex flex-column justify-content-center">
          <span>Project Name</span>
          <p>{{ data.title }}</p>
          <span>About Project</span>
          <p>{{ data.description }}</p>
          <div class="flex">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill px-1"></i>
            <i class="bi bi-star-fill px-1"></i>
            <i class="bi bi-star-fill px-1"></i>
            <i class="bi bi-star-fill px-1"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      project: [],
    };
  },
  computed: {
    dataSource() {
      this.projects = this.$store.getters["projects/allProjects"];
      this.project = this.projects.filter((p) => p.id == this.$route.params.id);
      return this.project;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.detail-prjects {
  img {
    width: 100%;
    height: 300px;
    border-radius: 5px;
  }
  span {
    font-size: $medium;
    font-weight: 600;
  }
  p {
    font-size: $small;
    font-weight: 100;
  }
  i{
    color: var(--app-yellow);
  }
}
</style>
