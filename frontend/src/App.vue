<script setup>
import { RouterView, RouterLink } from 'vue-router'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  // faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faFacebook, faTwitter, faLinkedin, faInstagram)

// const icons = [
//   { icon: faFacebook, href: 'https://www.facebook.com/share/172vnzY76W/' },
//   { icon: faXTwitter, href: 'https://www.twitter.com' },
//   { icon: faLinkedin, href: 'https://www.linkedin.com/in/tej-patel-b104432b9' },
//   { icon: faInstagram, href: 'https://www.instagram.com/_tej_patel_7179_' },
// ]

const quickLinks = [
  { title: 'Home', path: '/', icon: 'mdi-home' },
  { title: 'About', path: '/about', icon: 'mdi-information' },
  { title: 'Projects', path: '/project', icon: 'mdi-view-dashboard' },
  { title: 'Settings', path: '/settingsView', icon: 'mdi-cog' },
]
</script>

<template>
  <v-app>
    <nav class="navbar navbar-expand-lg border-1 border-bottom border-black w-100 z-3 position-sticky top-0 bg-white">
      <div class="container">
        <router-link class="navbar-brand" to="/"><img src="@/assets/Picture/mindlytic-Main-logo.png" alt=""
            width="120" /></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <v-container class="collapse w-100 p-0 navbar-collapse justify-content-center" id="navbarScroll">
          <v-tabs inset density="compact" slider-color="info" style="box-shadow: none"
            class="d-flex flex-wrap bg-white border tab-container">
            <v-tab v-for="(link, index) in quickLinks" :key="index" :to="link.path" class="px-0 tab-size">{{ link.title
            }}</v-tab>
          </v-tabs>
        </v-container>
      </div>
    </nav>
    <v-main>
      <RouterView />
    </v-main>
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
            <v-list density="comfortable" class="transparent text-light p-0">
              <v-list-item v-for="(link, index) in quickLinks" :key="index" :to="link.path" class="px-2 my-1 hoverable"
                rounded="shaped" color="light">
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

        <!-- Social Media Icons
      <v-divider class="my-4"></v-divider>
      <div class="social-icons d-flex justify-center gap-4 my-4">
        <a v-for="item in icons" :key="item.href" :href="item.href" target="_blank" class="social-icon-link">
          <v-hover v-slot="{ isHovering, props }">
            <v-btn v-bind="props" :color="isHovering ? 'primary' : 'grey'" icon variant="text">
              <font-awesome-icon :icon="item.icon" size="lg" />
            </v-btn>
          </v-hover>
        </a>
      </div> -->

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
  </v-app>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* navbar style */

.tab-container {
  max-width: 340px;
  height: 49px !important;
}

.tab-size {
  min-width: 76px !important;
  height: 40px !important;
  font-size: 12px !important;
  background-color: none !important;
  border: none !important;
}

.navbar-toggler {
  border: none;
  outline: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler .navbar-toggler-icon {
  background-image: none;
  height: 2px;
  width: 25px;
  background-color: #000;
  position: relative;
  display: block;
  transition: all 0.2s;
}

.navbar-toggler .navbar-toggler-icon::before,
.navbar-toggler .navbar-toggler-icon::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 25px;
  background-color: #000;
  transition: all 0.2s;
}

.navbar-toggler .navbar-toggler-icon::before {
  top: -8px;
}

.navbar-toggler .navbar-toggler-icon::after {
  top: 8px;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-icon {
  background-color: transparent;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-icon::before {
  transform: rotate(45deg);
  top: 0;
}

.navbar-toggler[aria-expanded='true'] .navbar-toggler-icon::after {
  transform: rotate(-45deg);
  top: 0;
}

/* footer style */
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
