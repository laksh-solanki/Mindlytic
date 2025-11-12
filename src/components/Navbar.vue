<template>
  <nav class="navbar navbar-expand-lg border-1 border-bottom border-black w-100 z-3 position-sticky top-0 bg-white">
    <div class="container">
      <router-link class="navbar-brand" to="/"><img src="../assets/Picture/mindlytic-Main-logo.png" alt="" width="120"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse w-100 navbar-collapse justify-content-center" id="navbarScroll">
        <ul class="nav navbar-nav nav-underline gap-3 flex-row w-100 justify-content-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/project">project</router-link>
          </li>
          <li class="dropdown nav-item">
            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Settings
            </a>
            <ul class="dropdown-menu rounded-3 position-absolute z-3">
              <li>
                <router-link class="dropdown-item" to="/settings"><v-icon class="me-2">mdi-cog</v-icon> Settings</router-link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <router-link class="dropdown-item" to="/Help"><v-icon class="me-2">mdi-help-circle-outline</v-icon> Help</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
.nav-link {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  width: 100%;
  transition: all 0.3s ease-in-out;
}

.dropdown-menu[data-bs-popper] {
  top: 55px !important;
  left: -70px !important;
}

.dropdown-menu {
  z-index: 1000;
  border: 1px solid rgb(0, 0, 0);
}

.nav-link.router-link-active {
  border-bottom: 2px solid #000;
  color: #000 !important;
}

.nav-link:hover {
  color: #007bff !important;
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

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  background-color: transparent;
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::before {
  transform: rotate(45deg);
  top: 0;
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::after {
  transform: rotate(-45deg);
  top: 0;
}
</style>
