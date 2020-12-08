import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import MintUI from 'mint-ui'
import jquery from 'jquery'

//导入样式
import 'mint-ui/lib/style.min.css'
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.prototype.$ = jquery
Vue.config.productionTip = false

//通过Vue.use()方法将MintUI注册为插件
Vue.use(MintUI)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
