<template>
  <div
    class="core-card"
    :class="watchMode === 'dark' ? 'core-card-dark' : 'core-card-light'"
  >
    <img :src="image" alt="image" />
    <span>{{ title }}</span>
    <p>{{ description }}</p>
    <div class="d-flex mb-3">
      <i class="bi bi-telegram"></i>
      <i class="bi bi-facebook"></i>
      <i class="bi bi-instagram"></i>
      <i class="bi bi-twitter"></i>
      <i class="bi bi-twitch"></i>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.core-card {
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 10px 2px;
  img {
    width: 100%;
    height: 300px;
  }
  span {
    font-size: $x-large;
    font-weight: 600;
    color: var(--app-dark);
    padding: 2px 10px;
  }
  i {
    font-size: $small;
    padding: 2px 10px;
    color: var(--app-dark);
  }
  p {
    font-size: $small;
    font-weight: 400;
    color: var(--app-gray);
    padding: 2px 10px;
  }
}
.core-card-light {
  background: var(--app-card-in-light-mode);
}
.core-card-dark {
  background: var(--app-card-in-dark-mode);
  span {
    color: var(--app-light);
  }
  p {
    color: var(--app-light);
  }
//   i {
//     color: var(--app-light);
//   }
}
</style>
