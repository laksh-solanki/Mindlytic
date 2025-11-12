<template>
  <div class="about-content">
    <div class="about-text">
      <h3>About VueSite</h3>
      <p>
        We help developers build beautiful, performant websites using the latest Vue.js ecosystem.
        No bloat, no complexity — just clean, maintainable code.
      </p>
      <p class="mt-4">
        Our templates are designed with accessibility, performance, and developer experience in mind.
      </p>
    </div>
    <div class="about-image">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        alt="Development">
    </div>
  </div>
</template>
<style scoped>
/* About */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.about-image {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
