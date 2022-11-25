<template>
  <div class="desktop-nav">
    <div class="logo-container">
      <span>{{ logo }}</span>
    </div>
    <div class="items-container">
      <router-link
        class="item"
        v-for="item in items"
        :key="item.id"
        :to="item.path"
        >{{ item.name }}</router-link
      >
    </div>
    <div class="change-mode-container">
      <changeMode class="mx-3 mt-1" />
      <button class="btn btn-primary">Login / Register</button>
    </div>
  </div>
</template>

<script>
import changeMode from "@/components/changeMode";
export default {
  components: { changeMode },
  data() {
    return {
      logo: "Landing Page",
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
.desktop-nav {
  width: 100%;
  display: flex;
  padding: 18px 25px;
  .logo-container {
    width: 20%;
    span {
      color: var(--app-blue);
      font-size: $x-large;
      font-weight: 600;
      text-transform: uppercase;
    }
  }
  .items-container {
    width: 40%;
    display: flex;
    justify-content: end;
    .item {
      text-decoration: none;
      color: var(--app-drk);
      font-size: $medium;
      font-weight: 600;
      padding: 5px 20px;
    }
  }
  .change-mode-container {
    width: 40%;
    display: flex;
    justify-content: end;
  }
}
</style>
