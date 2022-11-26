<template>
  <div class="change-mode-container">
    <i @click="darkMode" class="bi bi-moon application_animation application_pointer" v-if="watchMode === 'light'"></i>
    <i @click="lightMode" class="bi bi-brightness-high application_animation application_pointer" v-if="watchMode === 'dark'"></i>
  </div>
</template>

<script>
export default {
  computed: {
    watchMode() {
      return this.$store.getters["theme/watchMode"];
    },
  },
  methods: {
    darkMode(){
        return this.$store.commit('theme/darkMode' , 'dark')
    } , 
    lightMode(){
        return this.$store.commit('theme/lightMode' , 'light')
    } , 
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables/size.scss";
.change-mode-container{
    i{
        font-size: $xx-large;
    }
}
</style>
