import Vue from 'vue';
require('./bootstrap');

window.Vue = require('vue').default;
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/HomeComponent.vue';
import Task from './components/TaskComponent.vue';

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



const app = new Vue({
    el: '#app',
    router,
});


