<!-- Navbar.vue -->
<template>
  <nav class="flex justify-between items-center w-full h-[75px] fixed left-0 top-0 px-8 lg:px-24 bg-white z-[9999999]">
    <div class="flex gap-11">
      <img class="lg:w-28 w-20" src="../../public/img/Logo.svg" alt="" />
      <div
        :class="[
          'flex lg:flex flex-col text-white lg:text-black pt-10 lg:pt-0 lg:flex-row fixed lg:static w-[300px] lg:w-full h-screen lg:h-full top-0 left-0 bottom-0 bg-[#6366F1] lg:bg-transparent items-center gap-7 font-semibold text-[0.9rem] transition-transform transform lg:translate-x-0',
          { '-translate-x-full': !resNav },
        ]"
      >
        <a href="">HOME</a>
        <a href="">SHOP</a>
        <a href="">BLOG</a>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
      </div>
    </div>
    <div class="flex items-center gap-9">
      <a href=""><img src="../../public/img/search.svg" alt="" /></a>
      <a href=""><img src="../../public/img/profile.svg" alt="" /></a>

      <button @click="toggleSidebar" class="relative">
        <img src="../../public/img/cart.svg" alt="" />
        <div v-if="totalItems > 0" class="w-4 h-[0.9rem] -right-1.5 -bottom-1.5 rounded-full bg-[#EF5820] absolute text-center text-[9px] text-white">
          {{ totalItems }}
        </div>
      </button>
      <a class="relative" href="">
        <img src="../../public/img/wishlist.svg" alt="" />
        <div v-if="wishlistItems > 0" class="w-4 h-[0.9rem] -right-1.5 -bottom-1.5 rounded-full bg-[#EF5820] absolute text-center text-[9px] text-white">
          {{ wishlistItems }}
        </div>
      </a>
      <button @click="toggleResNav"><img src="../../public/img/hamburger.svg" alt="" /></button>
    </div>
  </nav>
</template>

<script>
import { useUIStore } from "@/stores/cartSide";
import { computed } from "vue";

export default {
  setup() {
    const uiStore = useUIStore();

    const toggleSidebar = () => {
      uiStore.toggleSidebar();
    };

    const toggleResNav = () => {
      uiStore.toggleResNav();
    };

    const resNav = computed(() => uiStore.resNav);

    return {
      toggleSidebar,
      toggleResNav,
      resNav,
    };
  },
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    wishlistItems: {
      type: Number,
      required: true,
    },
  },
};
</script>
