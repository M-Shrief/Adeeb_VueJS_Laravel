import { createRouter, createWebHistory } from 'vue-router';
const Main = () => import('../pages/Main.vue')
const Poem = () => import('../pages/Poem.vue')
const Poet = () => import('../pages/Poet.vue')
const Printing = () => import('../pages/Printing.vue')
const Orders = () => import('../pages/Orders.vue')
const About = () => import('../pages/About.vue')
const Partners = () => import('../pages/Partners.vue')

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
    path: '/orders',
    name: 'orders',
    component: Orders,
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
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router