<template>
  <v-container class="animation-bottom" style="min-height: 90.9vh">
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
        <v-card height="100%" hover
          class="text-primary-emphasis bg-primary-subtle border-none border-primary-subtle rounded-4"
          @click="dialog = true" :to="p.live">
          <v-img :src="p.thumb" height="200" class="m-2 img-thumbnail d-none d-md-flex d-lg-flex rounded-4"
            content-class />
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
    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
      <v-card>
        <router-view></router-view>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script setup>
import { shallowRef } from 'vue'

const dialog = shallowRef(false)

const projects = [
  {
    id: 1,
    title: 'Certificate Generator',
    slug: 'L & T EduTech Certificate',
    desc: 'L & T EduTech Certificate',
    tech: ['Vue 3', 'Vuetify', 'Bootstrap'],
    live: '/project/certificate',
    thumb: new URL('../assets/Picture/certificate-page.png', import.meta.url).href,
  },
  {
    id: 2,
    title: 'Image to PDF Converter',
    slug: 'task-saas',
    desc: 'Multi Image Converter to PDF with drag and drop',
    tech: ['Vue 3', 'Vuetify', 'Bootstrap'],
    live: '/project/img2pdf',
    thumb: new URL('../assets/Picture/IMGTOPDF.png', import.meta.url).href,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    slug: 'ai-content',
    desc: 'OpenAI-powered blog post generator with markdown export.',
    tech: null,
    live: '/project/musicplayer',
    thumb: 'https://picsum.photos/seed/ai/500/300',
  },
]
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
