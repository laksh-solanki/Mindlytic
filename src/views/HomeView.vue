<script setup>

</script>

<template>
  <section id="home" class="hero text-center align-content-center">
    <v-container>
      <div class="hero-content">
        <h1>Build Amazing Websites with <span>Mindlytic</span></h1>
        <p>Create modern, responsive, and lightning-fast web apps with Vue 3 and modern tooling.</p>
        <div class="hero-buttons">
          <v-btn class="btn btn-primary" to="/">Start Building</v-btn>
          <v-btn class="btn btn-secondary" to="/about">About</v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
/* Hero */
.hero {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
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

</style>
