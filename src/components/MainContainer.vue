<!-- MainContainer.vue -->
<template>
  <div>
    <div class="h-full pt-24 pb-20 flex justify-between items-center gap-7">
      <Slider />
      <ItemDetails @add-to-cart="handleAddToCart" @add-to-wishlist="handleAddToWishlist" />
    </div>
    <Navbar :totalItems="totalItems" :wishlistItems="wishlistItems" />
  </div>
</template>

<script>
import { ref } from "vue";
import Navbar from "./Navbar.vue";
import ItemDetails from "./ItemDetails.vue";
import Slider from "./Slider.vue";

export default {
  components: {
    Navbar,
    ItemDetails,
    Slider,
  },
  setup() {
    const totalItems = ref(0);
    const wishlistItems = ref(0);

    const handleAddToCart = (count) => {
      totalItems.value += count;
    };

    const handleAddToWishlist = () => {
      wishlistItems.value++;
    };

    return {
      totalItems,
      wishlistItems,
      handleAddToCart,
      handleAddToWishlist,
    };
  },
};
</script>
