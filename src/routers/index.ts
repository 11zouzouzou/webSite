import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import Hello from '../components/HelloWorld.vue'

const Home = () => import('../views/Home.vue')
const Articles = () => import('../views/Articles.vue')
const Archive = () => import('../views/Archive.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/articles',
    name: 'articles',
    component: Articles,
  },
  {
    path: '/archive',
    name: 'archive',
    component: Archive,
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
