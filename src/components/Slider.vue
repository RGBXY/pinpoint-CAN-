<template>
  <div class="flex items-center gap-5 relative">
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
      class="mySwiper2"
    >
      <swiper-slide><img src="../../public/img/hero_1.jpeg" /></swiper-slide>
      <swiper-slide><img src="../../public/img/hero_2.jpeg" /></swiper-slide>
      <swiper-slide><img src="../../public/img/hero_3.jpeg" /></swiper-slide>
      <swiper-slide><img src="../../public/img/hero_4.jpeg" /></swiper-slide>
    </swiper>
    <button class="absolute right-4 rounded-full text-9xl z-[9999] bg-white p-3.5 bottom-5">
      <img src="../../public/img/full.svg" alt="" />
    </button>
  </div>
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
};
</script>
