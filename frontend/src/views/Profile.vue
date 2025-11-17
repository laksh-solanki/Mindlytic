<template>
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
              <v-btn prepend-icon="mdi-account-edit" variant="flat" text="Edit"></v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>

      <v-col cols="12" md="3">
        <v-sheet min-height="70vh" rounded="lg" elevation="2" class="rounded-4 sheet3-animation" color="blue-lighten-2">
          <!--  -->
        </v-sheet>
      </v-col>

      <v-col cols="12" md="9">
        <v-sheet min-height="70vh" rounded="lg" elevation="2" class="rounded-4 sheet2-animation"
          color="deep-purple-lighten-3">
          <!--  -->
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
</style>
