import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'
import LoginApp from '../views/LoginApp.vue'
import SignupApp from '../views/SignupApp.vue'
const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: HomeApp,
  },
  {
    path: '/login',
    name: 'LoginApp',
    component: LoginApp,
  },
  {
    path: '/signup',
    name: 'SignupApp',
    component: SignupApp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
