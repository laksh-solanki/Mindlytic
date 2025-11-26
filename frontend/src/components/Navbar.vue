<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg border-1 border-bottom border-black w-100 z-3 position-sticky top-0 bg-white">
    <div class="container">
      <router-link class="navbar-brand" to="/"><img src="../assets/Picture/mindlytic-Main-logo.png" alt=""
          width="120" /></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <v-container class="collapse w-100 p-0 navbar-collapse justify-content-center" id="navbarScroll">
        <v-tabs inset density="comfortable" slider-color="info" style="box-shadow: none;"
          class="d-flex flex-wrap bg-white border tab-container">
          <v-tab to="/" class="px-0 tab-size">Home</v-tab>
          <v-tab to="/about" class="px-0 tab-size">About</v-tab>
          <v-tab to="/project" class="px-0 tab-size">Project</v-tab>
          <v-tab to="/settingsView" class="px-0 tab-size">Settings</v-tab>
        </v-tabs>
      </v-container>
    </div>
  </nav>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

.tab-container {
  max-width: 340px;
  height: 49px !important;
}

.tab-size {
  min-width: 76px !important;
  height: 40px !important;
  font-size: 12px !important;
  background-color: none !important;
  border: none !important;
}

.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler .navbar-toggler-icon {
  background-image: none;
  height: 2px;
  width: 25px;
  background-color: #000;
  position: relative;
  display: block;
  transition: all 0.2s;
}

.navbar-toggler .navbar-toggler-icon::before,
.navbar-toggler .navbar-toggler-icon::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 25px;
  background-color: #000;
  transition: all 0.2s;
}

.navbar-toggler .navbar-toggler-icon::before {
  top: -8px;
}

.navbar-toggler .navbar-toggler-icon::after {
  top: 8px;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-icon {
  background-color: transparent;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-icon::before {
  transform: rotate(45deg);
  top: 0;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-icon::after {
  transform: rotate(-45deg);
  top: 0;
}
</style>
