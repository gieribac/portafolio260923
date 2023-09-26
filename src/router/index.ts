import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import LandingPage_V from '../views/LandingPage_V.vue'
import SobreMi_V from '../views/SobreMi_V.vue'


const routes:RouteRecordRaw[] = [
  {
    path: '/sobremi',
    name: 'sobremi',
    component: SobreMi_V
  },
  {
    path: '/landingp',
    name: 'landingpage',
    component: LandingPage_V
  },
  {
    path: '/',
    redirect: to => {return {name: 'landingpage'}}
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  
})

export default router
