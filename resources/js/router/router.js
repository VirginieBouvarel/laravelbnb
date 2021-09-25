
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/HomeComponent.vue';
import Task from './views/TaskComponent.vue';


Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/tasks',
    component: Task
  },
];

const router = new VueRouter({ routes });

export default router;