import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from '../views/HomeApp.vue'
import LoginApp from '../views/LoginApp.vue'
import SignupApp from '../views/SignupApp.vue'
import SearchApp from '@/views/SearchApp.vue'
import { projectAuth } from '../firebase/config';
import AboutApp from '../views/AboutApp.vue'
import UserPage from '../views/UserPage.vue'
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'LoginApp' })
  } else {
    next()
  }
}

const noAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next()
  } else {
    next({name:'HomeApp'})
  }
}
const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: HomeApp,
    beforeEnter : requireAuth
  },{
    path: '/user/:id',
    name: 'UserPage',
    component: UserPage,
    props: true,
    beforeEnter : requireAuth
  },
  {
    path: '/about',
    name: 'AboutApp',
    component: AboutApp,
    beforeEnter : requireAuth
  },
  {
    path: '/search',
    name: 'SearchApp',
    component: SearchApp,
    beforeEnter : requireAuth
  },
  {
    path: '/login',
    name: 'LoginApp',
    component: LoginApp,
    beforeEnter : noAuth
  },
  {
    path: '/signup',
    name: 'SignupApp',
    component: SignupApp,
    beforeEnter : noAuth
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
