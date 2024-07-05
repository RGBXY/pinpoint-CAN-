<script setup>
import Cart from "./components/Cart.vue";
import MainContainer from "./components/MainContainer.vue";
import Navbar from "./components/Navbar.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <main class="px-5 lg:px-24">
    <MainContainer/>
    <Cart />
    <HomeView />
  </main>
</template>
