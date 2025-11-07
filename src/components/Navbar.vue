<script setup>
import { ref } from 'vue'
const user = {
  initials: 'JD',
  fullName: 'John Doe',
  email: 'john.doe@doe.com',
}
defineOptions({ name: 'NavbarComponent' })
const drawer = ref(false)
</script>

<template>
  <v-app-bar :elevation="2">
    <v-app-bar-nav-icon @click="drawer = !drawer" class="d-md-none"><font-awesome-icon
        icon="fa-solid fa-bars-staggered" />
    </v-app-bar-nav-icon>
    <p class="Main-Icon">Mindlytic</p>
    <v-spacer></v-spacer>
    <div class="d-none d-md-flex nav-links">
      <v-row>
        <v-col>
          <v-btn to="/">Home</v-btn>
        </v-col>
        <v-col>
          <v-btn to="/about">About</v-btn>
        </v-col>
      </v-row>
    </div>
    <v-menu min-width="400px">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-avatar color="brown" size="large">
            <span class="text-h5">{{ user.initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="text-h5">{{ user.initials }}</span>
            </v-avatar>
            <h3>{{ user.fullName }}</h3>
            <p class="text-caption mt-1">
              {{ user.email }}
            </p>
            <v-divider class="my-3"></v-divider>
            <v-btn variant="text" rounded>
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn variant="text" rounded>
              Disconnect
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item to="/">Home</v-list-item>
      <v-list-item to="/about">About</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sixtyfour&display=swap');

.Main-Icon {
  font-family: "Sixtyfour", sans-serif;
  overflow: unset !important;
  text-overflow: unset !important;
  font-size: 24px;
  color: #534b49;
  margin-left: 10px;
}

.nav-links{
  display: flex ;
  align-items: center;
  gap: 15px
}

@media screen and (max-width: 600px) {
  .Main-Icon {
    font-size: 20px;
    margin-left: 2px;
  }
}
</style>
