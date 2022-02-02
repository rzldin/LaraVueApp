require('./bootstrap');

window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

let routes = [
    {
        path : '/data-user',
        component :require('./components/Pengguna/DataUser.vue').default
    },
    {
        path : '/data-level',
        component :require('./components/Pengguna/DataLevel.vue').default
    }
]

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

const app = new Vue({
    el: '#app',
    router
});
