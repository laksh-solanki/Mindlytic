<script setup>
import { ref } from 'vue'

const marqueeItems = ref([
  'Hi there 👋 Welcome To Mindlytic',
  '🎉Technology For Brighter Futures',
  'Smart Solutions for a Smarter World',
  'Empowering Minds Through Technology',
  'Digital Power for Human Progress',
  'Creating Possibilities, Powering Futures',
])
</script>
<template>
  <div class="marquee-container py-1 bg-black overflow-hidden bg-light shadow-sm">
    <div class="marquee-content d-flex align-items-center">
      <div v-for="item in marqueeItems" :key="item" class="marquee-item px-4 bg-white rounded-pill mx-1">
        {{ item }}
      </div>
      <!-- Duplicate for seamless animation -->
      <!-- <div v-for="item in marqueeItems" :key="`${item}-duplicate`" class="marquee-item px-4 bg-white rounded-pill mx-1" aria-hidden="true">
        {{ item }}
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.marquee-container {
  width: 100%;
  background-color: #f8f9fa;
}

.marquee-content {
  display: flex;
  animation: marquee 40s linear infinite;
}

.marquee-item {
  flex: 0 0 auto;
  padding: 0 1px;
  font-size: 1rem;
  color: #000000;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.marquee-container:hover .marquee-content {
  animation-play-state: paused;
}
</style>
