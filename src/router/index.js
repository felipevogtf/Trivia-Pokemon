import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/trivia',
    name: 'Trivia',
    component: () => import('../views/Trivia.vue'),
    beforeEnter: (to, from, next) => {
      if (Object.keys(to.params).length == 0) {
        next("/");
      } else {
        next();
      }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
