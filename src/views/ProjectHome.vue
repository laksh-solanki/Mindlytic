<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="4">
        <Folder :to="'/project/certificate'" text="Certificate" />
      </v-col>
      <v-col cols="12" md="4">
        <Folder :to="'/project/pdfView'" text="pdf" />
      </v-col>
      <v-col cols="12" md="4">
        <Folder :to="'/project/New'" text="Folder-2" />
      </v-col>
    </v-row>

    <!-- Another UI element added below the folders -->
    <v-row class="mt-5">
      <v-col cols="12">
        <v-card class="pa-4 text-center align-content-center" height="400" elevation="2" color="secondary">
          <v-card-title>Project Overview</v-card-title>
          <v-card-text>
            This section can display a summary of your projects, recent activity, or important
            notifications. Feel free to customize it with relevant information.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Folder from '@/components/Folder.vue'
</script>
