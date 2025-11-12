<template>
  <v-btn :to="to" prepend-icon="mdi-folder" variant="flat" size="large" color="white" border="3" width="365" height="50" :text="text">
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
