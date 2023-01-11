import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import './assets/base.css'

// persist selected stores (prints) on sessionStorage
const pinia = createPinia().use(piniaPluginPersistedstate);

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')