<template>
  <section class="about-container animation-bottom">
    <div class="hero">
      <h1>About Us</h1>
      <p>We are a creative team passionate about crafting modern, high-quality web experiences.</p>
    </div>

    <div class="team-section">
      <h2>Meet Our Team</h2>
      <div class="team-grid">
        <div v-for="(member, index) in team" :key="index" class="team-card">
          <img :src="member.image" :alt="member.name" />
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
          <p class="bio">{{ member.bio }}</p>
        </div>
      </div>
    </div>

    <div class="mission-section">
      <h2>Our Mission</h2>
      <p>
        Our mission is to deliver innovative digital solutions that empower users and help
        businesses succeed through technology, creativity, and design.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const team = ref([
  {
    name: 'Laksh Solanki',
    role: 'Founder & Developer',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Specializes in full-stack development and crafting seamless user experiences.',
  },
  {
    name: 'Priya Sharma',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Creates visually appealing and intuitive designs that users love.',
  },
  {
    name: 'Ravi Kumar',
    role: 'Backend Engineer',
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    bio: 'Focuses on secure, scalable backend systems and database architecture.',
  },
])
</script>

<style scoped>
.about-container {
  min-height: 100vh;
  padding: 60px 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
  background: #f8f9fb;
}

.hero {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
}

.hero p {
  font-size: 1.2rem;
  color: #555;
  margin-top: 10px;
}

.team-section {
  text-align: center;
  margin-bottom: 60px;
}

.team-section h2 {
  font-size: 2.2rem;
  margin-bottom: 30px;
  color: #222;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  justify-items: center;
}

.team-card {
  background: #fff;
  border-radius: 15px;
  padding: 25px;
  width: 100%;
  max-width: 300px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.team-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.team-card img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 4px solid #eaeaea;
}

.team-card h3 {
  margin: 10px 0 5px;
  font-size: 1.2rem;
  color: #111;
}

.role {
  font-weight: 600;
  color: #4a74f7;
  margin-bottom: 8px;
}

.bio {
  font-size: 0.95rem;
  color: #666;
}

.mission-section {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.mission-section h2 {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #222;
}

.mission-section p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.7;
}

.animation-bottom {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.2rem;
  }

  .team-grid {
    gap: 20px;
  }
}
</style>
