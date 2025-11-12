import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectView from '@/views/ProjectView.vue'
import SettingsView from '@/views/SettingsView.vue'
import HelpView from '@/views/HelpView.vue'
import CertificateView from '@/views/CertificateView.vue'
import NotmatchView from '@/views/NotmatchView.vue'
import GlobalLoader from '@/views/GlobalLoader.vue'
import { useLoadingStore } from '@/stores/loading'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false,
      title: 'Mindlytic - Home',
      description: 'Welcome to the Home Page',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { requiresAuth: false, title: 'Mindlytic - About', description: 'Learn more About Us' },
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView,
    meta: {
      requiresAuth: false,
      title: 'Mindlytic - Projects',
      description: 'Explore your Projects',
    },
  },
  {
    path: '/project/certificate',
    name: 'certificate',
    component: CertificateView,
    meta: {
      requiresAuth: false,
      title: 'Mindlytic - Certificate',
      description: 'Your Certificate Details',
    },
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
    meta: {
      requiresAuth: false,
      title: 'Mindlytic - Settings',
      description: 'Adjust your Settings',
    },
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
    meta: { requiresAuth: false, title: 'Mindlytic - Help', description: 'Get Help and Support' },
  },
  {
    path: '/Globalloader',
    name: 'Globalloader',
    component: GlobalLoader,
  },
  {
    path: '/notfound',
    name: 'NotMatch',
    component: NotmatchView,
    meta: { requiresAuth: false, title: 'Mindlytic - Not Found', description: 'Page Not Found' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/notfound',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const loadingStore = useLoadingStore()
  loadingStore.startLoading() // Start loader
  next()
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Mindlytic'
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', to.meta.description || '')
})

router.afterEach(() => {
  const loadingStore = useLoadingStore()
  setTimeout(() => loadingStore.stopLoading(), 200) // Stop loader
})

export default router
