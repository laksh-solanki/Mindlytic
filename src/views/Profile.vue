<template>
  <v-container class="content1">
    <v-row>
      <v-col cols="12" md="12">
        <v-sheet
          rounded="lg"
          elevation="3"
          class="pa-3 bg-style-1 rounded-4 text-wrap sheet1-animation"
          color="teal-lighten-4"
        >
          <v-row class="d-flex justify-content-start align-items-center">
            <v-col cols="12" md="2" class="d-flex justify-center align-center">
              <v-avatar size="100" color="grey-darken-1 m-3">
                <img src="@/assets/Picture/profile-pic.webp" width="70" alt="Profile Picture" />
              </v-avatar>
            </v-col>
            <v-col
              md="10"
              class="d-flex flex-column text-center text-lg-start text-md-start text-wrap"
            >
              <v-card-title>Laksh Solanki</v-card-title>
              <v-card-subtitle>lakshsolanki848@gmail.com</v-card-subtitle>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="3">
        <v-sheet
          min-height="70vh"
          rounded="lg"
          elevation="2"
          class="rounded-4 sheet3-animation"
          color="blue-lighten-2"
        >
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" md="9">
        <v-sheet
          min-height="70vh"
          rounded="lg"
          elevation="2"
          class="rounded-4 sheet2-animation"
          color="deep-purple-lighten-3"
        >
          <!--  -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
