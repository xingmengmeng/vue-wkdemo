import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource);
Vue.use(VueRouter);

import App from './views/app.vue'

import Index from './views/indexMain.vue'
import addUserGroup from './views/addUserGroup.vue'


const router = new VueRouter({
    mode: 'history',
    // base: baseUrl,
    routes: [
        { path: '/', component: Index},
        { path: '/index', component: Index},
        { path: '/addUserGroup', component: addUserGroup},
    ]
})


new Vue({
    el: '#app',
    router:router,
    components: { App }
})