import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  //配置history模式：history（createWebHistory） hash（createWebHashHistory）
  //vite中的环境变量：import.meta.env.BASE_URL  是vite.config.js中的base配置项

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router
