import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import ThemeChooser from "../views/ThemeChooser.vue";
import Theme from "../views/Theme.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/theme-chooser",
    name: "theme-chooser",
    component: ThemeChooser,
  },
  {
    path: "/theme/:theme",
    name: "theme",
    component: Theme,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
