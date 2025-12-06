<script setup>
import { ref, shallowRef } from 'vue'
import RedAlert from '@/components/Red-alert.vue'
import GreenAlert from '@/components/Green-alert.vue'
const successAlert = ref(false)
const successMessage = ref('')
const errorAlert = ref(false)
const errorMessage = ref('')
const dialog = shallowRef(false)
const items = ['Streaming', 'Eating', 'Programming', 'Playing video games', 'Watching movies', 'Sleeping']
const chips = ref([])
let successTimeout = null
let errorTimeout = null

const showAlert = (message, type) => {
  if (type === 'success') {
    successMessage.value = message
    successAlert.value = true
    clearTimeout(successTimeout)
    successTimeout = setTimeout(() => {
      successAlert.value = false
    }, 4000)
  } else {
    errorMessage.value = message
    errorAlert.value = true
    clearTimeout(errorTimeout)
    errorTimeout = setTimeout(() => {
      errorAlert.value = false
    }, 4000)
  }
}
</script>
<template>
  <GreenAlert v-model:successAlert="successAlert" :successMessage="successMessage" />
  <RedAlert v-model:errorAlert="errorAlert" :errorMessage="errorMessage" />
  <v-container class="content1" fluid>
    <v-row>
      <v-col cols="12" md="12">
        <v-sheet rounded="lg" elevation="3" class="pa-3 bg-style-1 rounded-4 text-wrap sheet1-animation"
          color="teal-lighten-4">
          <v-row class="d-flex justify-content-start align-items-center">
            <v-col cols="12" md="2" class="d-flex justify-center align-center">
              <v-avatar size="100" color="grey-darken-1 m-3">
                <img src="@/assets/Picture/profile-pic.webp" width="70" alt="Profile Picture" />
              </v-avatar>
            </v-col>
            <v-col cols="12" md="8" class="d-flex flex-column text-center text-lg-start text-md-start text-wrap">
              <v-card-title>Laksh Solanki</v-card-title>
              <v-card-subtitle>lakshsolanki848@gmail.com</v-card-subtitle>
            </v-col>
            <v-col cols="12" md="2" class="d-flex justify-center align-center">
              <v-dialog v-model="dialog" max-width="600">
                <template v-slot:activator="{ props: activatorProps }">
                  <v-btn
                    class="text-none font-weight-regular text-success-emphasis bg-success-subtle border-success-subtle rounded-2 border-1"
                    prepend-icon="mdi-account" text="Edit Profile" variant="outlined" v-bind="activatorProps"></v-btn>
                </template>

                <v-card>
                  <v-card-title class="pb-0 text-success-emphasis"><v-icon class="mb-1 me-2">mdi-account</v-icon>Edit
                    Profile</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-row dense>
                      <v-col cols="12" md="4" sm="6">
                        <v-text-field label="First name*" variant="outlined" required></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Middle name" variant="outlined"></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Last name*" variant="outlined" required></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Email*" variant="outlined" required></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Password*" variant="outlined" type="password" required></v-text-field>
                      </v-col>

                      <v-col cols="12" md="4" sm="6">
                        <v-text-field label="Confirm Password*" variant="outlined" type="password"
                          required></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" variant="outlined"
                          required></v-select>
                      </v-col>

                      <v-col cols="12" sm="6">
                        <v-combobox v-model="chips" :items="items" label="Your favorite hobbies" variant="outlined"
                          chips closable-chips multiple class="hobbies-combobox">
                          <template v-slot:chip="{ props, item }">
                            <v-chip v-bind="props">
                              <strong>{{ item.raw }}</strong>&nbsp;
                            </v-chip>
                          </template>
                        </v-combobox>
                      </v-col>
                    </v-row>
                    <small class="text-caption text-medium-emphasis">*indicates required field</small>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
                    <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="3">
        <v-sheet min-height="70vh" rounded="lg" elevation="3" class="rounded-4 sheet3-animation" color="blue-lighten-2">
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" md="9">
        <v-sheet min-height="70vh" rounded="lg" elevation="3" class="rounded-4 sheet2-animation"
          color="deep-purple-lighten-3">
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.sheet1-animation {
  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.sheet2-animation {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.sheet3-animation {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.container-animate {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
    transform: translateY(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

:deep(.hobbies-combobox .v-field__input) {
  overflow-x: auto;
  flex-wrap: nowrap;
}
</style>
