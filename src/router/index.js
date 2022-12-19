import { createRouter, createWebHistory } from 'vue-router';
import Main from '../pages/Main.vue';
import Poem from '../pages/Poem.vue';
import Poet from '../pages/Poet.vue';
import Printing from '../pages/Printing.vue';
import About from '../pages/About.vue';
import Partners from '../pages/Partners.vue';


const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/poem/:id',
    name: 'poem',
    component: Poem,
  },
  {
    path: '/poet/:id',
    name: 'poet',
    component: Poet,
  },
  {
    path: '/printing',
    name: 'printing',
    component: Printing,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/partners',
    name: 'partners',
    component: Partners,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router