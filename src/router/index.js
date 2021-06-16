import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/trivia',
    name: 'Trivia',
    component: () => import('../views/Trivia.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (Object.keys(to.params).length == 0) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: '/score',
    name: 'Score',
    component: () => import('../views/Score.vue'),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      if (Object.keys(to.params).length == 0) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('../views/Ranking.vue'),
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (Vue.prototype.$interval != null) {
    clearInterval(Vue.prototype.$interval);
  }

  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = sessionStorage.getItem('user');
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
