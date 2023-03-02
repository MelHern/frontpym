import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {FaFlag} from 'oh-vue-icons/icons'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


addIcons(FaFlag)

const pinia =createPinia()
pinia.use(piniaPluginPersistedstate)


createApp(App).component('v-icon',OhVueIcon).use(router).use(pinia).mount('#app')
