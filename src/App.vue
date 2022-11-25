<template>
  <div class="app" :class="watchMode === 'dark' ? 'dark' : 'light'">
    <desktopNav />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import desktopNav from "@/components/desktopNav";
export default {
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
  components: { desktopNav },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.app {
  width: 100%;
  height: 100vh;
}
.light {
  transition: 1s;
  background: var(--app-light);
  color: var(--app-dark);
}
.dark {
  transition: 1s;
  background: var(--app-dark);
  color: var(--app-gray);
}
</style>
