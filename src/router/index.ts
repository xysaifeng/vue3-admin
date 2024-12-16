import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () => import("@/views/News.vue")
  },
  {
    path: "/p",
    name: "Parent",
    component: () => import("@/views/Parent.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
