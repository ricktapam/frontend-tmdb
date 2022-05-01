import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DiscoverPage from "../views/DiscoverPage.vue";
import MovieDetail from "../views/MovieDetail.vue";
import SearchPage from "../views/SearchPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/discover",
    name: "discover",
    component: DiscoverPage,
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: MovieDetail,
  },
  {
    path: "/search/:query",
    name: "SearchPage",
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory('/ricktapam.github.io.frontend/'),
  routes,
});

export default router;
