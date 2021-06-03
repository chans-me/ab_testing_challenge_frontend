import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import * as services from './services';

Vue.config.productionTip = false;
Vue.prototype.$api = services.default;

new Vue({
  vuetify,
  render: h => h(App),
  data: {
    currentPage: {
      component: 'article-page',
      pageTitle: 'Article'
    }
  },
}).$mount('#app');
