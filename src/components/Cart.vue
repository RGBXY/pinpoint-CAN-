<!-- Sidebar.vue -->
<template>
  <div :class="['fixed left-0 top-0 h-screen w-[300px] bg-slate-400 z-[9999999999999999999999] transition-transform transform', { '-translate-x-full': !isSidebarOpen }]">
    <button @click="toggleSidebar">Close Sidebar</button>
    <p>Halo</p>
  </div>
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

    const isSidebarOpen = computed(() => uiStore.isSidebarOpen);

    return {
      isSidebarOpen,
      toggleSidebar,
    };
  },
};
</script>
