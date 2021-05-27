import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
// import Error404 from "../pages/error/Error404.vue";
// import AuthRouterOutlet from "../pages/auth/AuthRouterOutlet.vue";
import checkAuth from "@/middleware/checkAuth";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    beforeEnter: checkAuth,
    component: () => import("@/layout/AppRouterOutlet.vue"),
    children: [
      {
        path: "",
        redirect: "/index",
      },
      {
        path: "/index",
        name: "Index",
        component: () => import("@/pages/index.vue"),
      },
      {
        path: "/tabs/",
        component: () => import("@/pages/app/Tabs.vue"),
        children: [
          {
            path: "",
            redirect: "/tabs/tab1",
          },
          {
            path: "tab1",
            component: () => import("@/pages/app/Tab1.vue"),
          },
          {
            path: "tab2",
            component: () => import("@/pages/app/Tab2.vue"),
          },
          {
            path: "tab3",
            component: () => import("@/pages/app/Tab3.vue"),
          },
        ],
      },
      {
        path: "/i18n",
        name: "I18n",
        component: () => import("@/pages/app/I18n.vue"),
      },
      {
        path: "/vuex",
        name: "Vuex",
        component: () => import("@/pages/app/Vuex.vue"),
      },
      {
        path: "/scroll",
        name: "Scroll",
        component: () => import("@/pages/app/Scroll.vue"),
      },
      {
        path: "/userList",
        name: "UserList",
        component: () => import("@/pages/app/UserList.vue"),
      },
      {
        path: "/icons",
        name: "Icons",
        component: () => import("@/pages/app/Icons.vue"),
      },
      {
        path: "/chat",
        name: "Chat",
        component: () => import("@/pages/app/Chat.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("@/layout/AuthRouterOutlet.vue"),
    children: [
      {
        path: "",
        redirect: "/auth/login",
      },
      {
        path: "login",
        name: "Login",
        component: () => import("@/pages/auth/Login.vue"),
      },
    ],
  },
  {
    path: "/error",
    component: () => import("@/layout/ErrorRouterOutlet.vue"),
    children: [
      {
        path: "",
        redirect: "/error/error404",
      },
      {
        path: "error404",
        name: "Error404",
        component: () => import("@/pages/error/Error404.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/error/error404",
    // component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
