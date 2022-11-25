<template>
  <div class="home-page">
    <div class="section-one">
      <div class="section-one-text-container">
        <span>Landing Page Present Now</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus praesentium doloremque rerum, aspernatur vero tempore tenetur architecto nisi quos animi facere blanditiis quis sequi, cupiditate deleniti nihil ipsum debitis ullam?
        </p>
        <div>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
      <div class="section-one-image-container">
        <img
          src="https://img.freepik.com/premium-photo/black-white-image-brooklyn-bridge-silhouette-with-dramatic-sky-sun-rays-new-york-city-usa_173948-5036.jpg?w=2000"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.section-one{
  width: 100%;
  display: flex;
  .section-one-text-container{
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    span{
      font-size: $xx-large;
      color: var(--app-blue);
    }
  }
  .section-one-image-container{
    width: 50%;
    img{
      width: 100%;
      height: 500px;
      border-radius: 50% 180px 50% 56px;
    }
  }
}
 @media (max-width: 1000px) {
    .section-one{
      flex-direction: column;
      .section-one-text-container{
        width: 100%;
        padding: 50px 0;
      }
      .section-one-image-container{
        width: 100%;
      }
    }
  }
</style>
