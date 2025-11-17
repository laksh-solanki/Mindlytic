<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4 text-center">
          <h1 class="display-1 font-weight-bold">How can we help you?</h1>
          <v-text-field v-model="search" label="Search for help" outlined clearable class="mt-4"></v-text-field>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="topic in filteredTopics" :key="topic.title" cols="12" md="4">
        <v-card class="pa-4 text-center" height="100%">
          <v-card-title>{{ topic.title }}</v-card-title>
          <v-card-text>{{ topic.description }}</v-card-text>
          <v-card-actions>
            <v-btn :to="topic.link" color="primary">Learn more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const topics = ref([
  {
    title: 'Getting Started',
    description: 'Learn the basics of setting up and using our application.',
    link: '/help/getting-started',
  },
  {
    title: 'Account Settings',
    description: 'Manage your profile, password, and notification preferences.',
    link: '/help/account',
  },
  {
    title: 'Troubleshooting',
    description: 'Find solutions to common issues and problems.',
    link: '/help/troubleshooting',
  },
  {
    title: 'FAQs',
    description: 'Browse frequently asked questions.',
    link: '/help/faq',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our support team for further assistance.',
    link: '/help/contact',
  },
  {
    title: 'Privacy Policy',
    description: 'Read our privacy policy to understand how we handle your data.',
    link: '/help/privacy',
  },
])

const filteredTopics = computed(() => {
  if (!search.value) {
    return topics.value
  }
  const searchTerm = search.value.toLowerCase()
  return topics.value.filter((topic) => {
    return (
      topic.title.toLowerCase().includes(searchTerm) ||
      topic.description.toLowerCase().includes(searchTerm)
    )
  })
})
</script>

<style scoped>
.display-1 {
  color: #1976d2;
}
</style>
