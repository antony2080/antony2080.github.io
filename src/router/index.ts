import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import PageNotFound from '@/pages/PageNotFound.vue'

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  if (to.meta.requiresAuth && !localStorage.getItem("isAuthenticated")) {
    router.push("/login");
  }
});

export {
  router
}