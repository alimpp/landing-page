<template>
  <div class="core-time-line">
    <div class="image-and-date">
      <img
        :src=image
        alt="image"
      />
      <div class="d-flex flex-column">
        <span class="">{{username}}</span>
        <p>{{date}}</p>
      </div>
    </div>
    <div class="message-conatiner">
        <div class="line-conatiner"></div>
        <div class="message">
            {{message}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props : {
        username : {
            type : String
        } , 
        date : {
            type : String
        } , 
        message : {
            type : String
        } , 
        image : {
            type : String
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.core-time-line {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  .image-and-date{
    display: flex;
    img{
        width: 45px;
        height: 44px;
        border-radius: 50%;
    }
    span{
        font-size: $small;
        font-weight: 600;
        padding: 0px 5px;
    }
    p{
        font-size: $very-small;
        color: var(--app-gray);
        padding: 0px 5px;
    }
  }
  .message-conatiner{
    display: flex;
    align-items: center;
    .line-conatiner{
        border: 1px solid var(--app-gray);
        width: 1px;
        padding: 30px 0;
        margin: 10px 23px;
    }
    .message{
        font-size: $small;
        font-weight: 400;
    }
  }
}
</style>
