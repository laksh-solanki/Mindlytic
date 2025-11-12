<script setup>
import { ref } from 'vue'
const drawer = ref(true)
const activeContent = ref('content1')
const links = [
  ['mdi-account-box-outline', 'Profile', 'content1'],
  ['mdi-cogs', 'Settings', 'content2'],
]
function showContent(identifier) {
  activeContent.value = identifier
}

</script>

<template>
  <v-layout ref="app" class="z-0" >
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
        <v-list-item v-for="[icon, text, identifier] in links" :key="icon" :prepend-icon="icon" :title="text"
          :active="identifier === activeContent" @click="showContent(identifier)" link>
          <template v-slot:append>
            <v-icon v-if="identifier === activeContent">mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="overflow-hidden">
      <!-- Container 1 -->
      <v-container v-if="activeContent === 'content1'" class="content1">
        <v-row>
          <v-col cols="12" md="12">
            <v-sheet rounded="lg" elevation="3" class="pa-3 bg-style-1 rounded-4 text-wrap sheet1-animation"
              color="teal-lighten-4">
              <v-row class="d-flex justify-content-start align-items-center">
                <v-col cols="12" md="2" class="d-flex justify-center align-center">
                  <v-avatar size="100" color="grey-darken-1 m-3">
                    <img src="@/assets/Picture/profile-pic.webp" width="70" alt="Profile Picture" />
                  </v-avatar>
                </v-col>
                <v-col md="10" class="d-flex flex-column text-center text-lg-start text-md-start text-wrap">
                  <v-card-title>Laksh Solanki</v-card-title>
                  <v-card-subtitle>lakshsolanki848@gmail.com</v-card-subtitle>
                </v-col>
              </v-row>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="3">
            <v-sheet min-height="70vh" rounded="lg" elevation="2" class="rounded-4 sheet3-animation"
              color="blue-lighten-2">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" md="9">
            <v-sheet min-height="70vh" rounded="lg" elevation="2" class="rounded-4 sheet2-animation"
              color="deep-purple-lighten-3">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>

      <!-- Container 2 -->
      <v-container v-if="activeContent === 'content2'">
        <v-row>
          <v-col cols="12" md="9">
            <v-sheet min-height="268" rounded="lg" elevation="2" class="rounded-4 sheet1-animation"
              color="teal-accent-1">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" md="3">
            <v-sheet min-height="268" rounded="lg" elevation="2" class="rounded-4 sheet2-animation"
              color="orange-lighten-4">
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col cols="12" md="12">
            <v-sheet min-height="70vh" rounded="lg" elevation="2" class="rounded-4 sheet2-animation"
              color="deep-purple-accent-1">
              <!--  -->
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<style scoped>
.mobile-toggle-btn {
  display: none;
}

@media (max-width: 1300px) {

  /* Show button on small and extra small screens */
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

.sheet1-animation {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.sheet2-animation {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.sheet3-animation {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.container-animate {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
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
