import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pasteles from '../views/Pasteles.vue'
import Pastelero from '../views/Pastelero.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pasteles',
    name: 'pasteles',
    component: Pasteles

    
  },
  {
    path: '/pastelero',
    name: 'pastelero',
    component: Pastelero

    
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
