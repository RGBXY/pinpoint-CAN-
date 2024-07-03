<!-- Navbar.vue -->
<template>
  <nav class="flex justify-between items-center w-full h-[75px] fixed left-0 top-0 px-40 bg-white z-[9999999]">
    <div class="flex gap-11">
      <img class="w-28" src="../../public/img/Logo.svg" alt="" />
      <div class="flex items-center gap-7 font-semibold text-[0.9rem]">
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
      <a class="relative" href="">
        <img src="../../public/img/cart.svg" alt="" />
        <div class="w-4 h-[0.9rem] -right-1.5 -bottom-1.5 rounded-full bg-[#EF5820] absolute text-center text-[9px] text-white">
          {{ totalItems }}
        </div>
      </a>
      <a class="relative" href="">
        <img src="../../public/img/wishlist.svg" alt="" />
        <div v-if="wishlistItems > 0" class="w-4 h-[0.9rem] -right-1.5 -bottom-1.5 rounded-full bg-[#EF5820] absolute text-center text-[9px] text-white">
          {{ wishlistItems }}
        </div>
      </a>
      <button @click=""><img src="../../public/img/hamburger.svg" alt="" /></button>
    </div>
  </nav>
</template>

<script>
export default {
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
