import Vue from "vue";
import VueRouter from "vue-router";
import List from "../views/List.vue";
import Detail from "../views/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "list",
    component: List,
    meta: {
      title: "Where to go?"
    }
  },
  {
    path: "/detail/:country",
    name: "detail",
    component: Detail,
    meta: {
      title: "Amazing Place"
    }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
