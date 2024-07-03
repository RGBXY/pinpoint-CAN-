<template>
  <div class="pb-20 pt-5 relative h-screen">
    <h1 class="text-3xl mb-8">RELATED <span class="font-semibold">PRODUCT</span></h1>
    <swiper :navigation="true" :slidesPerView="4" :spaceBetween="30" :modules="modules" class="mySwiper3">
      <swiper-slide v-for="product in relatedProduct" :key="product.id">
        <img class="w-full h-[370px] object-cover" :src="product.img" alt="" />
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
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const relatedProduct = ref([
      {
        id: "1",
        img: new URL("../../public/img/related_1.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 1",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
      {
        id: "2",
        img: new URL("../../public/img/related_2.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 2",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
      {
        id: "3",
        img: new URL("../../public/img/related_3.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 3",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
      {
        id: "4",
        img: new URL("../../public/img/related_4.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 4",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
      {
        id: "5",
        img: new URL("../../public/img/related_4.jpeg", import.meta.url).href,
        gender: "WOMEN",
        title: "Product 5",
        price: "Rp400.000",
        review: "⭐⭐⭐⭐⭐ (4.5) 16 Reviews",
      },
    ]);

    return {
      relatedProduct,
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
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
