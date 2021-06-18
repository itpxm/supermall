<!--  -->
<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <shopping-list></shopping-list>
        <shopping-bottom></shopping-bottom>
    </div>
</template>

<script>
import NavBar from '@/component/common/navbar/NavBar'
import { mapGetters } from 'vuex'
import ShoppingList from './childcar/shoppingList.vue'
import ShoppingBottom from './childcar/shoppingbottom.vue'
export default {
    name:"ShoppingCart",
    components:{
        NavBar,
        ShoppingList,
        ShoppingBottom,
    },
    computed: {
        ...mapGetters(['cartLength'])
    },
}
</script>
<style scoped>
    .nav-bar {
        background-color: #ff8198;
        color: #fff;
    }
</style>