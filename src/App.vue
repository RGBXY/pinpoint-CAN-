<script setup>
import Navbar from "../src/components/Navbar.vue";
import MainContainer from "./components/MainContainer.vue";
import HomeView from "./views/HomeView.vue";
</script>

<template>
  <main class="px-40">
    <Navbar />
    <MainContainer/>
    <HomeView />
  </main>
</template>
