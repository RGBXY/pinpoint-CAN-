<template>
  <div class="w-full lg:w-[50%]">
    <p class="font-semibold mb-8">HOME / DETAIL</p>
    <h1 class="font-bold text-3xl mb-2">RED AND BLACK SWEATER</h1>
    <p class="text-slate-600 mb-2 text-sm">⭐⭐⭐⭐⭐ (5.0) 47 review</p>
    <h1 class="font-bold text-2xl mb-8">Rp400.000</h1>
    <p class="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit unde cumque nam nihil aliquid minus perferendis laboriosam, quod dolorum rerum reprehenderit, quasi in quisquam odio. Nostrum sunt qui ipsam eligendi.</p>
    <div class="flex items-center gap-3 mb-8">
      <div class="inline-flex items-center gap-4 border-2 border-slate-300 font-semibold">
        <button @click="kurang" class="py-3 pl-3">-</button>
        <p>{{ count }}</p>
        <button @click="tambah" class="py-3 pr-3">+</button>
      </div>
      <button @click="addToCart" class="py-4 px-6 border-slate-300 bg-[#6366F1] text-white text-sm">TAMBAH KE KERANJANG</button>
      <button @click="toggleWishlist" class="inline-flex py-3.5 px-3.5 gap-5 border-2 border-slate-300 font-semibold">
        <img width="22" :src="isInWishlist ? '/public/img/heart.png' : '/public/img/wishlist.svg'" alt="" />
      </button>
      <button class="inline-flex py-3.5 px-4 gap-5 border-2 border-slate-300 font-semibold">
        <img src="../../public/img/share.svg" alt="" />
      </button>
    </div>
    <div class="text-sm flex flex-col gap-2 font-semibold text-[#595959]">
      <p>SKU: <span class="text-black">N/A</span></p>
      <p>CATEGORIES: <span class="text-black">Casual & Urban Wear, Sweater, Women</span></p>
      <p>TAGS: <span class="text-black">Casual & Urban Wear, Sweater, Women</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    initialCount: {
      type: Number,
      default: 0,
    },
    isInWishlist: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const count = ref(props.initialCount);
    const inWishlist = ref(props.isInWishlist);

    const tambah = () => {
      count.value++;
    };

    const kurang = () => {
      if (count.value > 0) {
        count.value--;
      }
    };

    const addToCart = () => {
      emit("add-to-cart", count.value);
      count.value = 0; // Reset count setelah menambah ke keranjang
    };

    const toggleWishlist = () => {
      inWishlist.value = !inWishlist.value;
      emit("toggle-wishlist", inWishlist.value);
    };

    return {
      count,
      tambah,
      kurang,
      addToCart,
      toggleWishlist,
      isInWishlist: inWishlist,
    };
  },
};
</script>
