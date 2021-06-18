import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 解决300ms延迟
import Fastclick from 'fastclick'
// 图片的懒加载
import VuelazyLoad from 'vue-lazyload'
import toast from '@/component/common/toast'

Fastclick.attach(document.body)
Vue.use(VuelazyLoad, {
    loading: require('@/assets/img/common/placeholder.png')
})
Vue.use(toast)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')