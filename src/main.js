import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource);
Vue.use(VueRouter);

import App from './views/app.vue'

import Index from './views/indexMain.vue'



const router = new VueRouter({
    /*mode: 'history',*/
    // base: baseUrl,
    hashbang:true,//路径已#/开头  防止刷新报404
    history:true,
    linkActiveClass:'active',//当前页的选中状态
    routes: [
        { path: '/', component: Index},
        { path: '/index', component: Index},
      
    ]
})


new Vue({
    el: '#app',
    router:router,
    components: { App }
})