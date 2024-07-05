<template>
  <div class="flex flex-col-reverse justify-center md:flex-row items-center gap-5 relative">
    <!-- Thumbnail Slider -->
    <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="mySwiper">
      <swiper-slide><img src="../../public/img/hero_1.jpeg" /></swiper-slide>
      <swiper-slide><img src="../../public/img/hero_2.jpeg" /></swiper-slide>
      <swiper-slide><img src="../../public/img/hero_3.jpeg" /></swiper-slide>
      <swiper-slide><img src="../../public/img/hero_4.jpeg" /></swiper-slide>
    </swiper>

    <!-- Slider Content -->
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="5"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2 px-20"
    >
      <swiper-slide>
        <img src="../../public/img/hero_1.jpeg" />
        <button @click="showDialog = true" class="absolute right-4 rounded-full text-9xl z-[1] bg-white p-3.5 bottom-5">
          <img src="../../public/img/full.svg" alt="" />
        </button>
      </swiper-slide>

      <swiper-slide>
        <img src="../../public/img/hero_2.jpeg" />
        <button @click="showDialog = true" class="absolute right-4 rounded-full text-9xl z-[1] bg-white p-3.5 bottom-5">
          <img src="../../public/img/full.svg" alt="" />
        </button>
      </swiper-slide>

      <swiper-slide>
        <img src="../../public/img/hero_3.jpeg" />
        <button @click="showDialog = true" class="absolute right-4 rounded-full text-9xl z-[1] bg-white p-3.5 bottom-5">
          <img src="../../public/img/full.svg" alt="" />
        </button>
      </swiper-slide>
      <swiper-slide>
        <img src="../../public/img/hero_4.jpeg" />
        <button @click="showDialog = true" class="absolute right-4 rounded-full text-9xl z-[1] bg-white p-3.5 bottom-5">
          <img src="../../public/img/full.svg" alt="" />
        </button>
      </swiper-slide>
    </swiper>
    <DialogComponent v-if="showDialog" @close="showDialog = false">
      <div class="rounded-lg overflow-hidden relative">
        <img class="h-[600px] hover:cursor-zoom-in hover:scale-150" src="../../public/img/hero_1.jpeg" alt="" />
      </div>
    </DialogComponent>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import DialogComponent from "./DialogImage.vue"; // Pastikan jalur ke komponen benar

export default {
  components: {
    Swiper,
    SwiperSlide,
    DialogComponent,
  },
  setup() {
    const thumbsSwiper = ref(null);
    const showDialog = ref(false);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      showDialog,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>

<style scoped>
.swiper {
  height: 110px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 480px;
  width: 480px;
}

.mySwiper {
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 110px !important;
  height: 110px;
  opacity: 0.4;
}

::v-deep .mySwiper .swiper-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 12px;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper.swiper-initialized .swiper-horizontal .swiper-free-mode .swiper-watch-progress .mySwiper .swiper-backface-hidden .swiper-thumbs {
  margin: 0;
}

.swiper.swiper-initialized.swiper-horizontal.mySwiper2.swiper-backface-hidden {
  margin: 0;
}

::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
  color: black !important;
  background-color: #fff;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50%;
  margin: 0 12px;
}

::v-deep .swiper-button-prev:after,
::v-deep .swiper-button-next:after {
  font-size: 13px !important;
  font-weight: 800;
}

@media (max-width: 720px) {
  .mySwiper2 {
    height: 380px;
    width: 380px;
  }

  ::v-deep .mySwiper .swiper-wrapper {
    flex-direction: row;
    width: 100%;
  }

  .mySwiper .swiper {
    width: 100%;
    height: 110px;
  }

  .mySwiper .swiper-slide {
    width: 80px !important;
    height: 70px;
    margin: 0 !important;
  }
}
</style>
