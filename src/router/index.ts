import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Error404 from "../views/Error404.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    // redirect: "/home",
    redirect: "/tabs/tab1",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/tabs/",
    component: () => import("@/views/Tabs.vue"),
    children: [
      {
        path: "",
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/Tab1.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/Tab2.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/Tab3.vue"),
      },
    ],
  },
  {
    path: "/error404",
    name: "Error404",
    component: () => import("@/views/Error404.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
