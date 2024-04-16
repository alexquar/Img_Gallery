import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.css'
import VueSelect from 'vue-select'
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .component("v-select", VueSelect)
      .mount('#app')
  }
})