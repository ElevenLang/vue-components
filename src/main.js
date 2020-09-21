import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
require('./mock/mock');

new Vue({
  render: h => h(App),
}).$mount('#app')
