import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/final",
    name: "final",
    component: () => import("../views/Final.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
