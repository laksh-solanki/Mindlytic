<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const drawer = ref(true)
const route = useRoute()

const links = [
  ['mdi-account-box-outline', 'Profile', '/settings/profile'],
  ['mdi-cogs', 'Settings', '/settings/main-settings'],
]
</script>

<template>
  <v-layout ref="app" class="z-0">
    <v-navigation-drawer v-model="drawer" class="border-secondary border-end container-animate" elevation="2" app>
      <v-sheet class="pa-4 border-bottom border-black">
        <v-avatar class="mb-4" color="grey-darken-1" size="70"><img src="@/assets/Picture/profile-pic.webp" alt=""
            class="rounded-5 object-fit-cover" width="60" /></v-avatar>
        <v-card-title class="p-0">Laksh Solanki</v-card-title>
        <v-card-subtitle class="p-0">lakshsolanki848@gmail.com</v-card-subtitle>
        <v-btn icon class="mobile-toggle-btn" @click="drawer = !drawer"
          :aria-label="drawer ? 'Close navigation drawer' : 'Open navigation drawer'">
          <v-icon>{{ drawer ? 'mdi-menu-open' : 'mdi-menu' }}</v-icon>
        </v-btn>
      </v-sheet>
      <v-list>
        <v-list-item v-for="[icon, text, to] in links" :key="icon" :prepend-icon="icon" :title="text" :to="to" link>
          <template v-slot:append>
            <v-icon v-if="route.path.startsWith(to)">mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="overflow-hidden">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style scoped>
.mobile-toggle-btn {
  display: none;
}

@media (max-width: 1300px) {
  .mobile-toggle-btn {
    display: inline-flex !important;
    position: fixed;
    border: 1px solid #ccc;
    top: 35px;
    right: -26px;
  }

  .container-animate {
    animation: none !important;
  }
}

.container-animate {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
