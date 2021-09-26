
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/HomeComponent.vue';
import Task from '../views/TaskComponent.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: "home",
      component: Home
    },
    {
      path: '/tasks',
      name: "tasks",
      component: Task
    },
  ]
});

export default router;