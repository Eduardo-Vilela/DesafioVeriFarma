import Vue from "vue";
import Router from "vue-router";
import detail from "./pages/detail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/detail/:id", name: "detail", component: detail },
  ]
});
  