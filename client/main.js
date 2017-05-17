import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueResource from 'vue-resource';

import App from './app.vue'

import store from './vuex/store'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueSocketio, 'http://localhost:3000', store);

new Vue({
    el: 'app',
    store,
    components: {App}
});
