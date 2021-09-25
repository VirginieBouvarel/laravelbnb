import Vue from 'vue';
import router from './router';

require('./bootstrap');

window.Vue = require('vue').default;

new Vue({
    el: '#app',
    router,
});


