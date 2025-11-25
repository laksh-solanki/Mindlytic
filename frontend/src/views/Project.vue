<template>
  <v-container class="animation-bottom">
    <!-- Hero -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="text-h3 text-sm-h2 font-weight-bold">My Projects</h1>
        <p class="text-body-1 mt-2">
          A selection of open-source and client work I’ve built with Vue & Vuetify.
        </p>
      </v-col>
    </v-row>

    <!-- Project cards -->
    <v-row>
      <v-col v-for="p in projects" :key="p.id" cols="12" sm="6" lg="4">
        <v-card
          height="100%"
          hover
          class="text-primary-emphasis bg-primary-subtle border-none border-primary-subtle rounded-4"
          :to="p.live"
        >
          <v-img :src="p.thumb" height="200" class="m-2 img-thumbnail rounded-4" content-class />
          <v-card-title class="font-weight-bold">{{ p.title }}</v-card-title>
          <v-card-text>
            {{ p.desc }}
            <div class="mt-3">
              <v-chip v-for="t in p.tech" :key="t" size="x-small" label class="mr-1 mb-1">
                {{ t }}
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import { computed, ref } from 'vue'
import projects from '@/data/Projects.js'

const uniqueTech = computed(() => [...new Set(projects.flatMap((p) => p.tech))])
</script>
<style scoped>
.animation-bottom {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

/* nothing needed – Vuetify covers it */
</style>
