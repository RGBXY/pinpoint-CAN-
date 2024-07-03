<template>
  <main>
   
    <Description/>
    <RelatedCard/>
  </main>
</template>

<script>
import SliderVue from "@/components/Slider.vue";
import ItemDetails from "@/components/ItemDetails.vue";
import Description from "@/components/Description.vue";
import RelatedCard from "@/components/RelatedCard.vue";
import ZoomImage from "@/components/ZoomImage.vue";

export default {
  components: {
    SliderVue,
    ItemDetails,
    Description,
    RelatedCard,
    ZoomImage
},
};
</script>
