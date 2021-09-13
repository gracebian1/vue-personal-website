import Vue from 'vue'
import App from './opening.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
