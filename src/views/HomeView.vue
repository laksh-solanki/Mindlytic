<template>
  <div class="bg-gray-50 dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">Mindlytic</h1>
        <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">Mindlytic is a revolutionary AI-powered mind mapping tool that helps you organize your thoughts, brainstorm ideas, and boost your creativity.</p>
        <Button label="Get Started for Free" class="p-button-lg p-button-primary" @click="scrollToPricing" />
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">Key Features</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-2">Discover the powerful features that make Mindlytic the ultimate mind mapping tool.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="feature-card text-center p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <i class="pi pi-bolt text-4xl text-primary-500 mb-4"></i>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">AI-Powered Suggestions</h3>
            <p class="text-gray-600 dark:text-gray-400">Our intelligent AI provides you with relevant suggestions to expand your mind maps and explore new ideas.</p>
          </div>
          <div class="feature-card text-center p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <i class="pi pi-sync text-4xl text-primary-500 mb-4"></i>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Real-time Collaboration</h3>
            <p class="text-gray-600 dark:text-gray-400">Collaborate with your team in real-time and see changes as they happen, no matter where you are.</p>
          </div>
          <div class="feature-card text-center p-8 bg-gray-100 dark:bg-gray-700 rounded-lg">
            <i class="pi pi-palette text-4xl text-primary-500 mb-4"></i>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Customizable Themes</h3>
            <p class="text-gray-600 dark:text-gray-400">Personalize your mind maps with a variety of themes and layouts to suit your style and needs.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">What Our Users Say</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-2">We are trusted by thousands of users worldwide.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card class="testimonial-card">
            <template #content>
              <div class="flex items-center mb-4">
                <Avatar image="https://randomuser.me/api/portraits/men/32.jpg" size="large" shape="circle" class="mr-4" />
                <div>
                  <h4 class="font-bold text-gray-900 dark:text-white">John Doe</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-400">"Mindlytic has completely transformed the way I brainstorm and plan my projects. The AI suggestions are a game-changer!"</p>
            </template>
          </Card>
          <Card class="testimonial-card">
            <template #content>
              <div class="flex items-center mb-4">
                <Avatar image="https://randomuser.me/api/portraits/women/44.jpg" size="large" shape="circle" class="mr-4" />
                <div>
                  <h4 class="font-bold text-gray-900 dark:text-white">Jane Smith</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Product Manager</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-400">"I love how easy it is to collaborate with my team on Mindlytic. It has become an essential tool for our remote work setup."</p>
            </template>
          </Card>
          <Card class="testimonial-card">
            <template #content>
              <div class="flex items-center mb-4">
                <Avatar image="https://randomuser.me/api/portraits/men/78.jpg" size="large" shape="circle" class="mr-4" />
                <div>
                  <h4 class="font-bold text-gray-900 dark:text-white">Sam Wilson</h4>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Student</p>
                </div>
              </div>
              <p class="text-gray-600 dark:text-gray-400">"Mindlytic has helped me ace my exams. I can easily create mind maps to study and revise complex topics."</p>
            </template>
          </Card>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">Pricing Plans</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-2">Choose the plan that's right for you.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="pricing-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Free</h3>
            <p class="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">$0</p>
            <p class="text-gray-500 dark:text-gray-400 mb-8">per month</p>
            <ul class="text-left mb-8">
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> 3 mind maps</li>
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> AI suggestions</li>
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> Basic support</li>
            </ul>
            <Button label="Get Started" class="p-button-outlined" />
          </div>
          <div class="pricing-card border-2 border-primary-500 rounded-lg p-8 text-center relative">
            <div class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold">Most Popular</div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Pro</h3>
            <p class="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">$10</p>
            <p class="text-gray-500 dark:text-gray-400 mb-8">per month</p>
            <ul class="text-left mb-8">
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> Unlimited mind maps</li>
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> Advanced AI suggestions</li>
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> Priority support</li>
            </ul>
            <Button label="Get Started" class="p-button-primary" />
          </div>
          <div class="pricing-card border border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enterprise</h3>
            <p class="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">$20</p>
            <p class="text-gray-500 dark:text-gray-400 mb-8">per user/month</p>
            <ul class="text-left mb-8">
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> Everything in Pro</li>
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> Team collaboration features</li>
              <li class="flex items-center mb-2"><i class="pi pi-check-circle text-green-500 mr-2"></i> Dedicated support</li>
            </ul>
            <Button label="Contact Us" class="p-button-outlined" />
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white">Frequently Asked Questions</h2>
          <p class="text-lg text-gray-600 dark:text-gray-400 mt-2">Here are some of the most common questions we get.</p>
        </div>
        <div class="max-w-3xl mx-auto">
          <Accordion :multiple="true">
            <AccordionTab header="What is Mindlytic?">
              <p class="m-0">Mindlytic is an AI-powered mind mapping tool that helps you organize your thoughts, brainstorm ideas, and boost your creativity. It's designed to be simple, intuitive, and powerful, making it the perfect tool for students, professionals, and teams.</p>
            </AccordionTab>
            <AccordionTab header="How does the AI work?">
              <p class="m-0">Our AI uses advanced natural language processing and machine learning algorithms to understand the context of your mind maps and provide you with relevant suggestions. It can help you expand on your ideas, find related topics, and even generate new ideas from scratch.</p>
            </AccordionTab>
            <AccordionTab header="Can I collaborate with my team?">
              <p class="m-0">Yes, Mindlytic offers real-time collaboration features that allow you to work with your team on the same mind map simultaneously. You can see changes as they happen and communicate with your team members through comments and annotations.</p>
            </AccordionTab>
            <AccordionTab header="Is there a free trial?">
              <p class="m-0">Yes, we offer a free plan that allows you to create up to 3 mind maps and try out our core features. If you need more advanced features or unlimited mind maps, you can upgrade to one of our paid plans.</p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>

const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style scoped>
.feature-card, .testimonial-card, .pricing-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover, .testimonial-card:hover, .pricing-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
