import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 1.安装插件
Vue.use(Vuex)


// 2.创建Store对象
const store = new Vuex.Store({
    state: {
        cartList: []
    },

    mutations,
    actions,
    getters
})


// 3.挂载实列
export default store


















// mutations: {
//     addCart(state, payload) {
//         // 1.查找cartList数组中是否有该商品
//         let oldProduct = state.cartList.find(item => item.iid === payload.iid)
//             // 2.判断oldProduct中是否存在该商品
//         if (oldProduct) {
//             oldProduct.current += 1
//                 // context.commit('addCounter', oldProduct)
//         } else {
//             payload.current = 1
//             state.cartList.push(payload)
//                 // context.commit('addCounter', payload)
//         }
//     }
// }