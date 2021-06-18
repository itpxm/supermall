import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Home = () =>
    import ('@/views/home/Home')
const Category = () =>
    import ('@/views/category/Category')
const ShoppingCart = () =>
    import ('@/views/shoppingcart/ShoppingCart')
const Profile = () =>
    import ('@/views/profile/Profile')
const Detail = () =>
    import ('@/views/detail/Detail')
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home
}, {
    path: '/category',
    component: Category
}, {
    path: '/shoppingcart',
    component: ShoppingCart
}, {
    path: '/profile',
    component: Profile
}, {
    path: '/detail/:iid',
    component: Detail
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router