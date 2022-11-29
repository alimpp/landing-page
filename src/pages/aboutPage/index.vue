<template>
  <div class="about-page">
    <div class="row">
      <div class="col-lg-6 image-container">
        <img
          src="https://media.istockphoto.com/id/1352825038/photo/professional-male-automotive-engineer-wearing-hard-hat-walking-using-laptop-monitoring.jpg?b=1&s=170667a&w=0&k=20&c=tT2OqQMFqqNGFqqvXnR_s1GosM54uMSBFB6lUyo6q8Y="
          alt="image"
        />
      </div>
      <div class="col-lg-6">
        <coreDivider title="About Us" />
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </p>
        <coreDivider title="Company" />
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </p>
      </div>
    </div>
    <div class="row">
      <coreDivider title="Experience" />
      <div class="col-lg-12">
        <coreTimeLine />
      </div>
    </div>
  </div>
</template>

<script>
import coreDivider from "@/components/core/coreDivider";
import coreTimeLine from "@/components/core/coreTimeLine";
export default {
  components: { coreDivider, coreTimeLine },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.image-container {
  img {
    width: 100%;
    height: 350px;
    border-radius: 90px 100px 250px 100px;
  }
}
</style>
