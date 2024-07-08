<template>
  <div class="pb-20 pt-5 relative lg:h-screen">
    <h1 class="text-3xl mb-8">RELATED <span class="font-semibold">PRODUCT</span></h1>
    <swiper :navigation="true" :slidesPerView="auto" :spaceBetween="30" :modules="modules" :breakpoints="breakpoints" class="mySwiper3">
      <swiper-slide v-for="product in productStore.product" :key="product.id">
        <img class="w-full h-[370px] object-contain md:object-cover bg-[#a7a7d1] object-center" :src="product.img" alt="" />
        <div class="flex items-center justify-between mt-4 mb-1.5">
          <p class="text-sm text-slate-700">{{ product.gender }}</p>
          <img class="w-4" src="../../public/img/wishlist.svg" alt="" />
        </div>
        <h1 class="font-semibold">{{ product.title }}</h1>
        <h1 class="font-semibold">{{ product.price }}</h1>
        <p class="mt-2 text-sm">{{ product.review }}</p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useProductStore } from "@/stores/relatedProduct";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const productStore = useProductStore();

    const breakpoints = {
      640: {
        width: 640,
        slidesPerView: 1,
      },
      768: {
        width: 768,
        slidesPerView: 2,
      },
      1210: {
        width: 1210,
        slidesPerView: 4,
      },
    };

    return {
      productStore,
      modules: [Navigation],
      breakpoints,
    };
  },
};
</script>

<style scoped>
/* .mySwiper3 .swiper-slide {
  width: 100% !important;
} */

.swiper {
  position: static;
}

::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
  color: black !important;
  background-color: #fff;
  border: 1px solid #cecece;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50%;
  position: absolute;
}

::v-deep .swiper-button-next {
  right: -1.5rem;
}

::v-deep .swiper-button-prev {
  left: -1.5rem;
}

::v-deep .swiper-button-prev:after,
::v-deep .swiper-button-next:after {
  font-size: 13px !important;
  font-weight: 800;
}
</style>
