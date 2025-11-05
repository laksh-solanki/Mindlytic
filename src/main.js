import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'light',
    },
  },
})

app.directive('styleclass', StyleClass)
app.directive('ripple', Ripple)

app.mount('#app')
