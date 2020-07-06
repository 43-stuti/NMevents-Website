import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)
  
  const routes = [
  {
    path: '/',
    name: 'HOME',
    component: Home
  },
  {
    path: '/about',
    name: 'ABOUT',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/projects',
    name: 'PROJECTS',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/contactUs',
    name: 'CONTACT US',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contactUs" */ '../views/ContactUs.vue')
  },
  {
    path: '/projects/:slug',
    name: 'PROJECTPAGE',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../components/Molecules/ProjectPage.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: '',
  routes,
  scrollBehavior (to,from,savedPosition) {
    if(savedPosition) {
      return {x: 0 , y: 0}
    } else {
      return {x: 0 , y: 0}
    }
  },
  onError: (error) => {
    if (/loading CSS chunk \d* failed./i.test(error.message)) {
      window.location.reload()
    }
  }
})

export default router
