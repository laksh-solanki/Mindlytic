<template>
  <div class="min-h-screen bg-gray-900 text-white font-sans">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-purple-400">Settings</h1>
      <div class="flex sm:flex-row flex-col gap-8">
        <!-- Left Sidebar -->
        <div>
          <div class="bg-gray-800 rounded-lg p-4">
            <ul>
              <li v-for="item in menuItems" :key="item.key" @click="activeTab = item.key"
                :class="['flex items-center p-4 cursor-pointer rounded-lg transition-colors', { 'bg-purple-600 text-white': activeTab === item.key, 'hover:bg-gray-700': activeTab !== item.key }]">
                <i :class="['cyber', item.icon, 'text-2xl mr-4']"></i>
                <span>{{ item.label }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Content -->
        <div class="bg-gray-800 rounded-lg p-8 W-full flex-1">
          <div v-if="activeTab === 'profile'">
            <h2 class="text-2xl font-bold mb-6 text-purple-400">Profile Settings</h2>
            <div class="flex items-center mb-6">
              <img class="w-24 h-24 rounded-full mr-6" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                alt="Avatar">
              <div>
                <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg">
                  Change Avatar
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-400 mb-2" for="username">Username</label>
                <input
                  class="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-purple-500"
                  id="username" type="text" value="mindlytic_user">
              </div>
              <div>
                <label class="block text-gray-400 mb-2" for="email">Email</label>
                <input
                  class="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-purple-500"
                  id="email" type="email" value="user@mindlytic.com">
              </div>
              <div>
                <label class="block text-gray-400 mb-2" for="password">Password</label>
                <input
                  class="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 text-white focus:outline-none focus:border-purple-500"
                  id="password" type="password" value="************">
              </div>
            </div>
            <div class="mt-8">
              <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
          <div v-if="activeTab === 'appearance'">
            <h2 class="text-2xl font-bold mb-6 text-purple-400">Appearance Settings</h2>
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-lg font-bold">Dark Mode</h3>
                <p class="text-gray-400">Toggle between light and dark mode.</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked>
                <div
                  class="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
                </div>
              </label>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-4">Accent Color</h3>
              <div class="flex space-x-4">
                <div class="w-8 h-8 rounded-full bg-purple-500 cursor-pointer border-2 border-white"></div>
                <div class="w-8 h-8 rounded-full bg-blue-500 cursor-pointer"></div>
                <div class="w-8 h-8 rounded-full bg-green-500 cursor-pointer"></div>
                <div class="w-8 h-8 rounded-full bg-red-500 cursor-pointer"></div>
                <div class="w-8 h-8 rounded-full bg-yellow-500 cursor-pointer"></div>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'notifications'">
            <h2 class="text-2xl font-bold mb-6 text-purple-400">Notification Settings</h2>
            <div class="flex items-center justify-between mb-6">
              <div>
                <h3 class="text-lg font-bold">Email Notifications</h3>
                <p class="text-gray-400">Receive email notifications for important updates.</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" checked>
                <div
                  class="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
                </div>
              </label>
            </div>
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-lg font-bold">Push Notifications</h3>
                <p class="text-gray-400">Receive push notifications on your devices.</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer">
                <div
                  class="w-11 h-6 bg-gray-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600">
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'profile',
      menuItems: [
        { key: 'profile', label: 'Profile', icon: 'pi pi-user' },
        { key: 'appearance', label: 'Appearance', icon: 'pi pi-wrench' },
        { key: 'notifications', label: 'Notifications', icon: 'pi pi-bell' },
      ],
    };
  },
};
</script>

<style scoped>
.font-sans {
  font-family: 'Orbitron', sans-serif;
}
</style>
