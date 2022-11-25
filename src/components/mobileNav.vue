<template>
  <div>
    <div class="mobile-nav d-flex" :class="{'open_menu': open}">
      <div class="items-container">
        <div class="d-flex">
          <span>{{ logo }}</span>
          <changeMode class="mx-3" />
        </div>
        <router-link
          class="item"
          v-for="item in items"
          :key="item.id"
          :to="item.path"
          >{{ item.name }}</router-link
        >
      </div>

      <div class="hambuger-container">
        <i class="bi bi-list item application_pointer" @click="openMenu"></i>
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
  height: 40px;
  padding: 10px 25px;
  display: flex;
  overflow: hidden;
  transition: 1s;
  margin-bottom: 10px;
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
      padding: 10px 0;
    }
  }
  .hambuger-container {
    width: 50%;
    display: flex;
    justify-content: end;
    i {
      font-size: $x-large;
    }
  }
}
.open_menu {
  height: 240px;
}
</style>
