<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faFacebook, faTwitter, faLinkedin, faInstagram)

const icons = [
  { icon: faFacebook, href: 'https://www.facebook.com/share/172vnzY76W/' },
  { icon: faXTwitter, href: 'https://www.twitter.com' },
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/tej-patel-b104432b9' },
  { icon: faInstagram, href: 'https://www.instagram.com/_tej_patel_7179_' },
]

const quickLinks = [
  { title: 'Home', path: '/', icon: 'mdi-home' },
  { title: 'About', path: '/about', icon: 'mdi-information' },
  { title: 'Projects', path: '/project', icon: 'mdi-view-dashboard' },
  { title: 'Settings', path: '/settingsView', icon: 'mdi-cog' },
  { title: 'Help', path: '/settingsView/help', icon: 'mdi-help-circle-outline' },
]
</script>

<template>
  <v-footer class="footer-container">
    <v-container>
      <!-- Logo Section -->
      <div class="d-flex justify-center align-center mb-6">
        <div class="footer-logo p-1 rounded">
          <img src="@/assets/Picture/mindlytic-Main-logo.png" alt="Shubh Marketing Logo" class="logo-image" />
        </div>
      </div>

      <v-row>
        <!-- Company Info -->
        <v-col cols="12" md="4" class="px-4">
          <h3 class="text-h6 mb-3">About Us</h3>
          <p class="text-body-2">
            We are committed to providing exceptional services and solutions to our customers. Our
            mission is to deliver excellence in every project we undertake.
          </p>
        </v-col>

        <!-- Quick Links -->
        <v-col cols="12" md="4" class="px-4">
          <h3 class="text-h6 mb-3">Quick Links</h3>
          <v-list density="comfortable" class="transparent p-0">
            <v-list-item v-for="(link, index) in quickLinks" :key="index" :to="link.path"
              class="px-2 my-1 rounded-3 hoverable">
              <template v-slot:prepend>
                <v-icon size="small" class="mr-2">{{ link.icon }}</v-icon>
              </template>
              {{ link.title }}
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Contact Info -->
        <v-col cols="12" md="4" class="px-4">
          <h3 class="text-h6 mb-3">Contact Us</h3>
          <div class="contact-info">
            <p class="d-flex align-start text-start mb-2">
              <v-icon size="small" class="mr-2">mdi-phone</v-icon>
              +91 9033220721
            </p>
            <p class="d-flex align-start text-start lh-2 mb-2">
              <v-icon size="small" class="mr-2">mdi-email</v-icon>
              lakshsolanki848@gmail.com
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- Social Media Icons -->
      <v-divider class="my-4"></v-divider>
      <div class="social-icons d-flex justify-center gap-4 my-4">
        <a v-for="item in icons" :key="item.href" :href="item.href" target="_blank" class="social-icon-link">
          <v-hover v-slot="{ isHovering, props }">
            <v-btn v-bind="props" :color="isHovering ? 'primary' : 'grey'" icon variant="text">
              <font-awesome-icon :icon="item.icon" size="lg" />
            </v-btn>
          </v-hover>
        </a>
      </div>

      <!-- Copyright -->
      <v-divider class="mb-4"></v-divider>
      <div class="text-center text-body-2">
        © {{ new Date().getFullYear() }} <strong>Mindlytic</strong>. All rights reserved.
        <div class="mt-1">
          <router-link to="/privacy" class="text-decoration-none mr-2">Privacy Policy</router-link>
          |
          <router-link to="/terms" class="text-decoration-none mx-2">Terms of Service</router-link>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-container {
  background: linear-gradient(to right, #1a237e, #3949ab);
  color: #ffffff;
}

.social-icon-link {
  text-decoration: none;
  transition: transform 0.2s ease;
}

.social-icon-link:hover {
  transform: translateY(-3px);
}

.transparent {
  background-color: transparent !important;
}

.contact-info p {
  margin: 0;
  color: #e0e0e0;
}

/* Add new styles for links and icons */
:deep(.v-list-item) {
  color: #e0e0e0 !important;
}

:deep(.v-list-item:hover) {
  color: #64b5f6 !important;
}

:deep(.v-btn.v-btn--icon) {
  background-color: rgba(255, 255, 255, 0.1) !important;
  color: #ffffff !important;
}

:deep(.v-btn.v-btn--icon:hover) {
  background-color: #64b5f6 !important;
  color: #ffffff !important;
}

a {
  color: #64b5f6 !important;
}

a:hover {
  color: #90caf9 !important;
}

.text-h6 {
  color: #90caf9;
}

.footer-logo {
  max-width: 150px;
  margin-bottom: 1rem;
  background-color: white;
}

.logo-image {
  width: 100%;
  height: auto;
}

@media (max-width: 600px) {
  .footer-logo {
    max-width: 120px;
    margin: 0 auto 1rem auto;
  }
}
</style>
