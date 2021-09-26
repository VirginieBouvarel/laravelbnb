
import Vue from 'vue';
import VueRouter from 'vue-router';
import Bookables from '../pages/Bookables.vue';
import About from '../pages/About.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: "home",
      component: Bookables
    },
    {
      path: '/about',
      name: "about",
      component: About
    },
  ]
});

export default router;