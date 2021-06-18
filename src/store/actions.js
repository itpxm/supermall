import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-type'
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            // 1.查找cartList数组中是否有该商品
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
                // 2.判断oldProduct中是否存在该商品
            if (oldProduct) {
                // oldProduct.current += 1
                context.commit(ADD_COUNTER, oldProduct)
                resolve('商品+1');
            } else {
                payload.current = 1
                    // state.cartList.push(payload)
                context.commit(ADD_TO_CART, payload)
                resolve('添加购物车成功');
            }
        })
    }
}