import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import { useAuthStore } from "@/stores/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: () => {
        return { path: "/login" };
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/auth",
      redirect: () => {
        return { path: "/auth/dashboard" };
      },
    },
    {
      path: "/auth/dashboard",
      name: "dashboard",
      component: () => import("../views/Auth/DashboardView.vue"),
    },
    {
      path: "/auth/publisher/:publisherId",
      name: "publisher",
      component: () => import("../views/Auth/PublisherView.vue"),
      props: true,
    },
  ],
});

router.beforeEach((to) => {
  const authStore = useAuthStore();

  if (!authStore.getLoggedInStatus && to.name !== "login") {
    return { name: "login" };
  }
});

export default router;
