<template>
  <div class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="relative flex items-center justify-center h-screen bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');">
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div class="relative z-10 text-center px-4">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-4">We are Mindlytic</h1>
        <p class="text-xl md:text-2xl max-w-3xl mx-auto">We are on a mission to revolutionize the way people think, create, and innovate. We believe that by harnessing the power of AI, we can unlock the full potential of the human mind.</p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-extrabold">Our Story</h2>
          <p class="text-lg text-gray-400 mt-2">The journey of Mindlytic, from a simple idea to a powerful tool.</p>
        </div>
        <div class="relative">
          <div class="hidden md:block absolute h-full border-l-2 border-primary-500 left-1/2 transform -translate-x-1/2"></div>
          <div class="space-y-12 md:space-y-0">
            <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div class="md:text-right md:pr-8">
                <h3 class="text-2xl font-bold text-primary-500">2022 - The Spark</h3>
                <p class="text-gray-400 mt-2">The idea for Mindlytic was born out of a desire to create a more intuitive and intelligent way to brainstorm and organize ideas. The founders, a group of AI enthusiasts and software engineers, envisioned a tool that could augment human creativity.</p>
              </div>
              <div class="hidden md:block text-center">
                <div class="bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                  <i class="pi pi-lightbulb"></i>
                </div>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div class="hidden md:block text-center">
                <div class="bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                  <i class="pi pi-cog"></i>
                </div>
              </div>
              <div class="md:pl-8">
                <h3 class="text-2xl font-bold text-primary-500">2023 - The Build</h3>
                <p class="text-gray-400 mt-2">The team spent a year building the core technology behind Mindlytic. They developed a powerful AI engine that could understand natural language and generate relevant suggestions. The first prototype was born.</p>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div class="md:text-right md:pr-8">
                <h3 class="text-2xl font-bold text-primary-500">2024 - The Launch</h3>
                <p class="text-gray-400 mt-2">Mindlytic was launched to the public, receiving positive feedback from users around the world. The team continued to iterate and improve the product based on user feedback.</p>
              </div>
              <div class="hidden md:block text-center">
                <div class="bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center mx-auto">
                  <i class="pi pi-rocket"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team Section -->
    <section class="py-20 bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-extrabold">Our Team</h2>
          <p class="text-lg text-gray-400 mt-2">The brilliant minds behind Mindlytic.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div class="team-member-card text-center">
            <Avatar image="https://randomuser.me/api/portraits/men/11.jpg" size="xlarge" shape="circle" class="mb-4" />
            <h3 class="text-xl font-bold">John Doe</h3>
            <p class="text-gray-400">Co-Founder & CEO</p>
          </div>
          <div class="team-member-card text-center">
            <Avatar image="https://randomuser.me/api/portraits/women/12.jpg" size="xlarge" shape="circle" class="mb-4" />
            <h3 class="text-xl font-bold">Jane Smith</h3>
            <p class="text-gray-400">Co-Founder & CTO</p>
          </div>
          <div class="team-member-card text-center">
            <Avatar image="https://randomuser.me/api/portraits/men/14.jpg" size="xlarge" shape="circle" class="mb-4" />
            <h3 class="text-xl font-bold">Sam Wilson</h3>
            <p class="text-gray-400">Lead AI Engineer</p>
          </div>
          <div class="team-member-card text-center">
            <Avatar image="https://randomuser.me/api/portraits/women/15.jpg" size="xlarge" shape="circle" class="mb-4" />
            <h3 class="text-xl font-bold">Emily Brown</h3>
            <p class="text-gray-400">Lead Designer</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-extrabold">Our Values</h2>
          <p class="text-lg text-gray-400 mt-2">The principles that guide us.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="value-card text-center p-8">
            <i class="pi pi-star text-4xl text-primary-500 mb-4"></i>
            <h3 class="text-2xl font-bold">Innovation</h3>
            <p class="text-gray-400">We are constantly pushing the boundaries of what's possible, exploring new technologies and ideas to create a better future.</p>
          </div>
          <div class="value-card text-center p-8">
            <i class="pi pi-users text-4xl text-primary-500 mb-4"></i>
            <h3 class="text-2xl font-bold">User-Centricity</h3>
            <p class="text-gray-400">Our users are at the heart of everything we do. We are committed to creating a product that is not only powerful but also easy and enjoyable to use.</p>
          </div>
          <div class="value-card text-center p-8">
            <i class="pi pi-shield text-4xl text-primary-500 mb-4"></i>
            <h3 class="text-2xl font-bold">Integrity</h3>
            <p class="text-gray-400">We believe in being transparent and honest in all our interactions. We are committed to building a product that is safe, secure, and trustworthy.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Us Section -->
    <section class="py-20 bg-gray-800">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-extrabold">Join Our Team</h2>
        <p class="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">We are always looking for talented and passionate individuals to join our team. If you are excited about our mission, we would love to hear from you.</p>
        <Button label="View Open Positions" class="p-button-lg p-button-primary mt-8" />
      </div>
    </section>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
</script>

<style scoped>
.team-member-card {
  transition: transform 0.3s ease;
}

.team-member-card:hover {
  transform: translateY(-10px);
}

.value-card {
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-10px);
}
</style>  
