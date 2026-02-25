import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/pages/home/Home.vue";
import Trabajos from "@/pages/trabajos/Trabajos.vue";
import TrabajoDetalle from "@/pages/trabajos/TrabajoDetalle.vue";
import SobreMi from "@/pages/sobremi/SobreMi.vue";
import Contactos from "@/pages/contactos/Contactos.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/trabajos',
      children: [
        {
          path: '',
          name: 'trabajos',
          component: Trabajos
        },
        {
          path: ':id',
          name: 'trabajo-detalle',
          component: TrabajoDetalle
        }
      ]
    },
    {
      path: '/sobremi',
      name: 'sobremi',
      component: SobreMi
    },
    {
      path: '/contactos',
      name: 'contactos',
      component: Contactos
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
  ]
});