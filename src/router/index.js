import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'
import LoginApp from '../views/LoginApp.vue'
import SignupApp from '../views/SignupApp.vue'

import { projectAuth } from '../firebase/config';

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'Login' })
  } else {
    next()
  }
}
const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: HomeApp,
    beforeEnter : requireAuth
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
