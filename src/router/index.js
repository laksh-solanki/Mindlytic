import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectView from '../views/ProjectView.vue'
import SettingsView from '../views/SettingsView.vue'
import HelpView from '../views/HelpView.vue'
import CertificateView from '../views/CertificateView.vue'
import NotmatchView from '../views/NotmatchView.vue'
import GlobalLoader from '@/views/GlobalLoader.vue'
import { useLoadingStore } from '@/stores/loading'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView,
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsView,
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView,
  },
  {
    path: '/project/Certificate',
    name: 'Certificate',
    component: CertificateView,
  },
  {
    path:'/Globalloader',
    name:'Globalloader',
    component: GlobalLoader,
  },
  {
    path: '/notfound',
    name: 'NotMatch',
    component: NotmatchView,
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

router.afterEach(() => {
  const loadingStore = useLoadingStore()
  setTimeout(() => loadingStore.stopLoading(), 200) // Stop loader
})

export default router
