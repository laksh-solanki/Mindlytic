<template>
  <v-container>
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
      <v-col v-for="p in filteredProjects" :key="p.id" cols="12" sm="6" lg="4">
        <v-card height="100%" hover rounded="3" border="2 black" :to="p.live">
          <v-img :src="p.thumb" height="200" content-class />
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

const filter = ref('')

const uniqueTech = computed(() => [
  ...new Set(projects.flatMap(p => p.tech))
])

const filteredProjects = computed(() =>
  filter.value
    ? projects.filter(p => p.tech.includes(filter.value))
    : projects
)
</script>
<style scoped>
/* nothing needed – Vuetify covers it */
</style>
