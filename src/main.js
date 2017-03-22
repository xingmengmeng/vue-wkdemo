import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource);
Vue.use(VueRouter);

import App from './views/app.vue'

import Index from './views/indexMain.vue'

const router = new VueRouter({
    mode: 'history',
    // base: baseUrl,
    routes: [
        { path: '/', component: Index},
        { path: '/index', component: Index}
    ]
})


new Vue({
    el: '#app',
    router:router,
    components: { App }
})