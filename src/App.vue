<template>
  <div class="app" :class="watchMode === 'dark' ? 'dark' : 'light'">
    <desktopNav class="desktop_nav" />
    <div class="mobile_nav">
      <mobileNav />
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <applicationFooter />
  </div>
</template>

<script>
import desktopNav from "@/components/desktopNav";
import mobileNav from "@/components/mobileNav";
import applicationFooter from "@/components/applicationFooter";
export default {
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
  components: { desktopNav, mobileNav, applicationFooter },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.app {
  width: 100%;
  .mobile_nav {
    display: none;
  }
  @media (max-width: 1032px) {
    .desktop_nav {
      display: none;
    }
    .mobile_nav {
      display: block;
    }
  }
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
