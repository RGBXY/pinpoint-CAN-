<template>
  <div class="relative w-full h-auto">
    <img ref="image" :src="imageSrc" @mousemove="moveMagnifier" @mouseleave="hideMagnifier" class="w-full h-auto" />
    <div ref="magnifier" class="hidden absolute border-2 border-gray-300 rounded-full w-32 h-32" :style="magnifierStyle"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const imageSrc = ref("../../img/hero_1.jpeg");
    const image = ref(null);
    const magnifier = ref(null);
    const magnifierSize = 128; // Size of the magnifier

    const magnifierStyle = ref({
      width: `${magnifierSize}px`,
      height: `${magnifierSize}px`,
      backgroundSize: "200%", // Adjust to the zoom level
      backgroundRepeat: "no-repeat",
    });

    const moveMagnifier = (event) => {
      if (!image.value || !magnifier.value) return;

      const { left, top, width, height } = image.value.getBoundingClientRect();
      const x = event.clientX - left;
      const y = event.clientY - top;

      if (x > width || x < 0 || y > height || y < 0) {
        magnifier.value.style.display = "none";
        return;
      }

      magnifier.value.style.display = "block";
      magnifier.value.style.left = `${x - magnifierSize / 2}px`;
      magnifier.value.style.top = `${y - magnifierSize / 2}px`;

      // Calculate background position for zoom effect
      const bgX = (x / width) * 100;
      const bgY = (y / height) * 100;

      magnifier.value.style.backgroundPosition = `${bgX}% ${bgY}%`;
    };

    const hideMagnifier = () => {
      if (magnifier.value) {
        magnifier.value.style.display = "none";
      }
    };

    onMounted(() => {
      if (image.value && magnifier.value) {
        magnifier.value.style.backgroundImage = `url(${imageSrc.value})`;
      }
    });

    return {
      imageSrc,
      image,
      magnifier,
      magnifierStyle,
      moveMagnifier,
      hideMagnifier,
    };
  },
};
</script>
