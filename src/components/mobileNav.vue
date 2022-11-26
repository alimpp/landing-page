<template>
  <div>
    <div class="mobile-nav d-flex" :class="{ open_menu: open }">
      <div class="items-container">
        <div class="d-flex">
          <span class="pt-1">{{ logo }}</span>
        </div>
        <router-link
          class="item"
          @click="openMenu"
          v-for="item in items"
          :key="item.id"
          :to="item.path"
          >{{ item.name }}</router-link
        >
      </div>

      <div class="hambuger-container">
        <changeMode class="mx-2" />
        <i class="bi bi-x-lg application_animation application_pointer" v-if="open" @click="openMenu"></i>
        <i class="bi bi-filter-left item application_pointer application_animation" v-else @click="openMenu"></i>
      </div>
    </div>
  </div>
</template>

<script>
import changeMode from "@/components/changeMode";
export default {
  components: { changeMode },
  methods: {
    openMenu() {
      this.open = !this.open;
    },
  },
  data() {
    return {
      open: false,
      logo: "Landing",
      items: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Portfolio", path: "portfolio" },
        { name: "Contact Us", path: "contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.mobile-nav {
  height: 45px;
  display: flex;
  overflow: hidden;
  transition: 0.5s;
  margin-bottom: 10px;
  padding: 6px 18px;
  .items-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    span {
      color: var(--app-blue);
      font-size: $x-large;
      font-weight: 600;
      text-transform: uppercase;
    }
    .item {
      text-decoration: none;
      color: var(--app-drk);
      font-size: $medium;
      font-weight: 600;
      padding: 15px 0;
    }
  }
  .hambuger-container {
    width: 50%;
    display: flex;
    justify-content: end;
    i {
      font-size: $xx-large;
    }
  }
}
.open_menu {
  height: 260px;
}
</style>
