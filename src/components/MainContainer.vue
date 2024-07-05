<!-- MainContainer.vue -->
<template>
  <div class="h-full pt-24 pb-20 flex flex-col lg:flex-row justify-between items-center gap-7">
    <Slider />
    <ItemDetails @add-to-cart="handleAddToCart" @toggle-wishlist="handleToggleWishlist" :isInWishlist="isInWishlist" />
  </div>
  <Navbar :totalItems="totalItems" :wishlistItems="wishlistItems" />
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
    const isInWishlist = ref(false);

    const handleAddToCart = (count) => {
      totalItems.value += count;
    };

    const handleToggleWishlist = (isInWishlistStatus) => {
      isInWishlist.value = isInWishlistStatus;
      if (isInWishlistStatus) {
        wishlistItems.value++;
      } else {
        wishlistItems.value--;
      }
    };

    return {
      totalItems,
      wishlistItems,
      handleAddToCart,
      handleToggleWishlist,
      isInWishlist,
    };
  },
};
</script>
