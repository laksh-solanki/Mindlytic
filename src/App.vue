<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>

<template>
  <v-app :theme="theme.global.name.value">
    <Navbar />
    <v-main>
      <RouterView />
    </v-main>
    <Footer />
  </v-app>
</template>

<style scoped></style>
