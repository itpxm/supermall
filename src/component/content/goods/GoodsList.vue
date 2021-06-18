<!--  -->
<template>
    <div class="goods">
        <goods-list-item  :goods-item="item" :key="index" v-for="(item,index) in GoodsList"></goods-list-item>
    </div>
</template>

<script>

import GoodsListItem from './GoodsListItem.vue'
export default {
    name:"GoodsList",
    props:{
        GoodsList:{
            type:Array,
            defaulf(){
                return []
            }
        }
    },
    components:{
        GoodsListItem
    }
}
</script>
<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content : space-around;
        padding: 2px;
    }
</style>