import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
import './assets/icons' // icon




Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
