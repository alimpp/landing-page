<template>
  <div class="home-page application_animation">
    <div class="section-one">
      <div class="section-one-text-container">
        <span>Landing Page Present Now</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          praesentium doloremque rerum, aspernatur vero tempore tenetur
          architecto nisi quos animi facere blanditiis quis sequi, cupiditate
          deleniti nihil ipsum debitis ullam?
        </p>
        <div>
          <button class="btn btn-primary" @click="goToStarted">
            Get Started
          </button>
        </div>
      </div>
      <div class="section-one-image-container">
        <img
          src="https://img.freepik.com/premium-photo/black-white-image-brooklyn-bridge-silhouette-with-dramatic-sky-sun-rays-new-york-city-usa_173948-5036.jpg?w=2000"
        />
      </div>
    </div>
    <div class="section-two d-flex flex-column mt-5" ref="started">
      <coreDivider title="Get Started" />
      <div class="row">
        <div class="col-lg-4" v-for="item in itemsCard" :key="item.id">
          <coreCard
            :image="item.image"
            :title="item.title"
            :description="item.description"
          />
        </div>
      </div>
    </div>
    <div class="section-three d-flex flex-column mt-5">
      <coreDivider title="Business Plan" />
      <div class="row">
        <div class="col-lg-6 section-three-image-container">
          <img
            src="https://www.qschina.cn/sites/default/files/articles/lead-images/civil_engineering.jpg"
            alt="image"
          />
        </div>
        <div class="col-lg-6 section-three-text-container">
          <span>Business Palning</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            praesentium doloremque rerum, aspernatur vero tempore tenetur
            architecto nisi quos animi facere blanditiis quis sequi, cupiditate
            deleniti nihil ipsum debitis ullam? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ducimus praesentium doloremque rerum,
            aspernatur vero tempore tenetur architecto nisi quos animi facere
            blanditiis quis sequi, cupiditate deleniti nihil ipsum debitis
            ullam? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Ducimus praesentium doloremque rerum, aspernatur vero tempore
            tenetur architecto nisi quos animi facere blanditiis quis sequi,
            cupiditate deleniti nihil ipsum debitis ullam?
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
import coreCard from "@/components/core/coreCard";
import coreDivider from "@/components/core/coreDivider";
export default {
  components: { coreCard, coreDivider },
  methods: {
    goToStarted() {
      const elem = this.$refs.started;
      elem.scrollIntoView();
    },
  },
  data() {
    return {
      itemsCard: [
        {
          image:
            "https://dkemhji6i1k0x.cloudfront.net/000_clients/138316/page/h800-1383161420pG8x.jpg",
          title: "Los Angeles",
          description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        },
        {
          image:
            "https://img.freepik.com/premium-photo/light-painting-art-concept-long-exposure-shot-spinning-steel-wool-abstract-circle-making-firework-showers-bright-yellow-glowing-sparkles-long-bridge-blue-night-starry-sky_127089-7019.jpg?auto=format&h=200",
          title: "Mexico City",
          description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        },
        {
          image:
            "https://mechtraveller.com/wp-content/uploads/Light-bridge-road-view.jpg",
          title: "San Marino",
          description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables/size.scss";
.section-one {
  width: 100%;
  display: flex;
  .section-one-text-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    span {
      font-size: $xx-large;
      font-weight: 200;
      color: var(--app-blue);
    }
    p {
      font-size: $small;
    }
  }
  .section-one-image-container {
    width: 50%;
    img {
      width: 100%;
      height: 500px;
      border-radius: 50% 180px 50% 56px;
    }
  }
}
.section-three {
  .section-three-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    span {
      font-size: $xx-large;
      font-weight: 200;
      color: var(--app-blue);
    }
    p {
      font-size: $small;
    }
    i{
      font-size: $x-large;
    }
  }
  .section-three-image-container {
    display: flex;
    justify-content: center;
    img {
      width: 380px;
      height: 380px;
      border-radius: 50%;
    }
  }
}
@media (max-width: 1000px) {
  .section-one {
    flex-direction: column;
    .section-one-text-container {
      width: 100%;
      padding: 50px 0;
    }
    .section-one-image-container {
      width: 100%;
    }
  }
}
</style>
