<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <v-app id="app" theme="dark">
    <Navbar />
    <RouterView />
    <Footer />
  </v-app>
</template>

<style>
#app {
  box-sizing: border-box;
  padding: 0%;
  margin: 0%;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}
</style>
