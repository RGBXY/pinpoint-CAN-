<!-- DialogComponent.vue -->
<template>
  <div class="overlay" @click.self="closeDialog">
    <div class="dialog text-end">
      <button @click="closeDialog" class="mb-2">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogComponent",
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
.dialog {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
