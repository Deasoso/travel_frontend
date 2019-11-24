// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import store from './store'
import router from './router'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

import zarmVue from 'zarm-vue';
import 'zarm-vue/zarm-vue.default.css';

Vue.use(zarmVue);

import { Icon } from 'zarm-vue';
Icon.createSymbolIconfont('//at.alicdn.com/t/font_1340918_4p9b5skcr79.js');

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
