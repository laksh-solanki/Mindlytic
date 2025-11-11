<template>
  <v-btn :to="to" prepend-icon="mdi-folder" variant="flat" size="large" color="primary" :text="text">
  </v-btn>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>
