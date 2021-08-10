import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import Hello from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: App,
  },
  {
    path: '/hello',
    name: 'hello',
    component: Hello,
  },
]

const router = createRouter({
  //TODO history服务端配置，hash不需要
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
})

export { router }
