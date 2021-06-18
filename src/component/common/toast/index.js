import Toast from './Toast'
const obj = {}

// 将对象安装到Vue上
obj.install = function(Vue) {
    // console.log('执行了OBJ', Vue);
    // 1.创建组件构造器
    const toastContrustor = Vue.extend(Toast)
        // 2.new的方法，根据组件构造器，可以创建一个组件对象
    const toast = new toastContrustor()
        // 3.将组件对象。手动挂载到某个元素中
    toast.$mount(document.createElement('div'))
        // 4.toast.$el对应的div
    document.body.appendChild(toast.$el)
    console.log(toast.$el);
    Vue.prototype.$toast = toast;
}
export default obj