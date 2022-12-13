<template>
  <div class="application-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 d-flex flex-column">
          <coreDivider title="Company" />
          <div class="d-flex mt-3">
            <i class="bi bi-geo-alt"></i>
            <span class="px-2">Location</span>
          </div>
          <div class="d-flex mt-3">
            <i class="bi bi-cart4"></i>
            <span class="px-2">Products</span>
          </div>
          <div class="d-flex mt-3">
            <i class="bi bi-blockquote-right"></i>
            <span class="px-2">About Us</span>
          </div>
          <div class="d-flex mt-3">
            <i class="bi bi-telephone-outbound-fill"></i>
            <span class="px-2">Contact Us</span>
          </div>
          <div class="d-flex mt-3">
            <i class="bi bi-newspaper"></i>
            <span class="px-2">News</span>
          </div>
        </div>
        <div class="col-lg-4 d-flex flex-column">
          <coreDivider title="Contact Us" />
          <div class="d-flex mt-3">
            <i class="bi bi-geo-alt"></i>
            <span class="px-2">Location</span>
          </div>
          <div class="d-flex mt-3">
            <i class="bi bi-cart4"></i>
            <span class="px-2">Products</span>
          </div>
          <div class="d-flex mt-3">
            <i class="bi bi-blockquote-right"></i>
            <span class="px-2">About Us</span>
          </div>
          <div class="d-flex mt-3">
            <i class="bi bi-telephone-outbound-fill"></i>
            <span class="px-2">Contact Us</span>
          </div>
          <div class="d-flex mt-3">
            <i class="bi bi-newspaper"></i>
            <span class="px-2">News</span>
          </div>
        </div>
        <div class="col-lg-4 d-flex flex-column justify-content-center">
          <coreDivider title="About Us" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            praesentium doloremque rerum, aspernatur vero tempore tenetur
            architecto nisi quos animi facere blanditiis quis sequi, cupiditate
            deleniti nihil ipsum debitis 
            blanditiis ullam...
          </p>
          <div class="d-flex mb-3">
            <i class="bi bi-telegram"></i>
            <i class="bi bi-facebook px-2"></i>
            <i class="bi bi-instagram px-2"></i>
            <i class="bi bi-twitter px-2"></i>
            <i class="bi bi-twitch px-2"></i>
          </div>
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
.application-footer {
  width: 100%;
  margin-top: 30px;
  padding-bottom: 40px;
}
</style>
