<!-- DialogComponent.vue -->
<template>
  <div class="overlay" @click="closeDialog">
    <div class="dialog text-end absolute">
      <button @click="closeDialog" class="mb-2 right-1 top-0 z-10 absolute"><img class="w-16" src="../../public/img/close.png" alt="" /></button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.overlay {
  position: fixed;
  z-index: 9999999999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
