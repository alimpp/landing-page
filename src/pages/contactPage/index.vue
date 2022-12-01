<template>
  <div class="contact-page application_animation">
    <div class="row">
      <div class="col-lg-6">
        <coreDivider title="Contact Us" />
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available... <br />
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </p>
      </div>
      <div class="col-lg-6">
        <div class="d-flex">
          <div class="col-lg-6">
            <span>Frist Name</span>
            <input class="form-control" />
          </div>
          <div class="col-lg-6">
            <span>Last Name</span>
            <input class="form-control mx-1" />
          </div>
        </div>
        <span>Email</span>
        <input class="form-control">
        <span>Message</span>
        <textarea class="form-control"></textarea>
        <div>
          <Button class="btn btn-primary mt-2">Submit</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coreDivider from "@/components/core/coreDivider";
export default {
  components: { coreDivider },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.col-lg-6 {
  p {
    font-size: $small;
  }
  span {
    font-size: $medium;
    font-weight: 400;
  }
}
</style>
