import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import VueTheMask from 'vue-the-mask';

Vue.use(VueTheMask);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
