// router.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue' // แทนที่ด้วยที่อยู่ของหน้าหลักของคุณ
import Cart from './views/Cart.vue' // แทนที่ด้วยที่อยู่ของหน้าตระกล้าสินค้าของคุณ

const routes = [
  // เส้นทางหน้าหลักของแอป
  { path: '/', component: Home },

  // เส้นทางหน้าตระกล้าสินค้า
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
