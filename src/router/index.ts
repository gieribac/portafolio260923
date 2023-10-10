import { createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import LandingPage_V from '../views/LandingPage_V.vue';
import SobreMi_V from '../views/SobreMi_V.vue';
import MisProyectos_V from '../views/MisProyectos_V.vue';
import HojaDeVida_V from '../views/HojaDeVida_V.vue';
import Certificados_V from '../views/Certificados_V.vue';


const routes:RouteRecordRaw[] = [
  {
    path: '/sobremi',
    name: 'sobremi',
    component: SobreMi_V
  },
  {
    path: '/misproy',
    name: 'misproy',
    component: MisProyectos_V
  },
  {
    path: '/landingp',
    name: 'landingpage',
    component: LandingPage_V
  },
  {
    path: '/hoja_de_vida',
    name: 'hv',
    component: HojaDeVida_V
  },
  {
    path: '/certificados',
    name: 'cert',
    component: Certificados_V
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
