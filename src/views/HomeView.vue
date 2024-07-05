<template>
  <main>
    <Description />
    <RelatedCard />
  </main>
</template>

<script>
import SliderVue from "@/components/Slider.vue";
import ItemDetails from "@/components/ItemDetails.vue";
import Description from "@/components/Description.vue";
import RelatedCard from "@/components/RelatedCard.vue";

export default {
  components: {
    SliderVue,
    ItemDetails,
    Description,
    RelatedCard,
  },
};
</script>
