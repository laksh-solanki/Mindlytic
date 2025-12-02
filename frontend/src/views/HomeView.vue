<script setup></script>

<template>
  <section id="home" class="hero text-center align-content-center">
    <v-container>
      <div class="hero-content">
        <h1 class="title animation-left">Build Amazing Websites with <span>Mindlytic</span></h1>
        <p class="des animation-right">
          Create modern, responsive, and lightning-fast web apps with Vue 3 and modern tooling.
        </p>
        <div class="hero-buttons">
          <v-btn class="btn btn-primary" to="/project">Start Build</v-btn>
          <v-btn class="btn btn-secondary" to="/about">Learn More</v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.animation-right {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animation-left {
  -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

.hero {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  min-height: 90.9vh;
}

.hero::before,
.hero::after {
  content: '';
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.1);
  filter: blur(100px);
}

.hero::before {
  top: -100px;
  right: -100px;
}

.hero::after {
  bottom: -100px;
  left: -100px;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  & .title {
    font-family: 'Montserrat', sans-serif;
  }

  & .des {
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 300;
    font-style: normal;
  }
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero h1 span {
  color: #3b82f6;
}

.hero p {
  font-size: 1.25rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media screen and (max-width: 600px) {
  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    & .title {
      font-family: 'Montserrat', sans-serif;
      margin-top: -90px;
      font-size: 40px;
    }

    & .des {
      font-family: 'Lato', sans-serif;
      font-weight: 300;
      font-size: 20px;
      font-style: normal;
    }
  }
}
</style>
