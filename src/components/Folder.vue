<template>
  <v-btn
    :to="to"
    prepend-icon="mdi-folder"
    rounded="2"
    class="btn-css"
    variant="flat"
    size="large"
    color="white"
    border="3"
    width="365"
    height="50"
    :text="text"
  >
  </v-btn>
</template>

<style scoped>
.btn-css {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
  border-radius: 0.5rem !important;
  border-color: #2563eb !important;
  color: #ffffff !important;
  background-color: #3b82f6 !important;
  transition-property: all !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 300ms !important;
  cursor: pointer !important;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;

  &:hover {
    filter: brightness(1.1) !important;
  }
}
</style>

<script setup>
defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})
</script>
