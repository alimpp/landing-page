<template>
  <div class="core-divider">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  props : {
    title : {
        type : String , 
        default : '' ,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.core-divider{
    width: 140px;
    border-bottom: 1px solid var(--app-yellow);
    margin: 20px 0;
    padding: 6px 5px;
    span{
        font-size: $x-large;
        font-weight: 600;
    }
}
</style>