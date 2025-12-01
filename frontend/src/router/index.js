import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Project from '@/views/ProjectView.vue'
import SettingsView from '@/views/SettingsView.vue'
import Settings from '@/views/MainSettings.vue'
import HelpView from '@/views/HelpView.vue'
import CertificateView from '@/views/CertificateView.vue'
import NotmatchView from '@/views/NotmatchView.vue'
import GlobalLoader from '@/views/GlobalLoader.vue'
import Profile from '@/views/Profile.vue'
import img2pdf from '@/views/img2pdf.vue'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/styles'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Mindlytic | Home',
        description: 'Welcome to the Home Page',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'Mindlytic | About',
        description: 'Learn more About Us',
      },
    },
    {
      path: '/project',
      component: Project,
      children: [
        {
          path: '',
          name: 'project',
          component: Project,
          meta: {
            title: 'Mindlytic | Projects',
            description: 'Explore your Projects',
          },
        },
        {
          path: 'certificate',
          name: 'certificate',
          component: CertificateView,
          meta: {
            title: 'Mindlytic | Certificate',
            description: 'Your Certificate Details',
          },
        },
        {
          path: 'img2pdf',
          name: 'img2pdf',
          component: img2pdf,
          meta: {
            title: 'Mindlytic | img2pdf',
            description: 'Your img2pdf Details',
          },
        },
      ],
    },
    {
      path: '/settingsView',
      component: SettingsView,
      children: [
        {
          path: '',
          name: 'settings',
          redirect: '/settingsView/profile',
          meta: {
            title: 'Mindlytic | Settings',
            description: 'Adjust your Settings',
          },
        },
        {
          path: 'profile',
          name: 'settings-profile',
          component: Profile,
          meta: {
            title: 'Mindlytic | Profile Settings',
            description: 'Your Profile page',
          },
        },
        {
          path: 'settings',
          name: 'settings-main',
          component: Settings,
          meta: {
            title: 'Mindlytic | Main Settings',
            description: 'Main Settings page',
          },
        },
        {
          path: 'help',
          name: 'help',
          component: HelpView,
          meta: {
            title: 'Mindlytic | Help',
            description: 'Get Help and Support',
          },
        },
      ],
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
      meta: {
        title: 'Mindlytic | Not Found',
        description: 'Page Not Found',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/notfound',
    },
  ],
})
router.afterEach((to) => {
  document.title = to.meta.title || 'Mindlytic'
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', to.meta.description || '')
})

export default router
