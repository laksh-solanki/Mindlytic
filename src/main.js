import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'

import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import ripple from 'primevue/ripple';

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    // Default theme configuration
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
        }
    }
 });
app.directive('ripple', ripple);

app.mount('#app')