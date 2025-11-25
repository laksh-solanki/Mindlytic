<template>
  <v-app theme="light">
    <v-defaults-provider :defaults="{ VTab: { class: 'text-none', ripple: false } }">
      <v-container>
        <br />
        <v-tabs inset density="default" slider-color="white" :items="tabs" />
        <br />
        <!-- <v-tabs inset direction="vertical" slider-color="white" :items="tabs" /> -->
      </v-container>
    </v-defaults-provider>
  </v-app>
</template>

<script setup>
const tabs = [
  { text: 'Charts', appendIcon: 'mdi-chart-line', width: 150, spaced: 'end' },
  { text: 'Calendar', prependIcon: 'mdi-calendar', width: 150, spaced: 'start' },
  'Timeline',
  'Grid',
]
</script>
