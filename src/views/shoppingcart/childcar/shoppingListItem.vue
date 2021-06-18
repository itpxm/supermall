<!--  -->
<template>
    <div id="shop-item">
        <div class="selector">
            <check-bottom :is-checked="product.checked" @click.native="checkClick"></check-bottom>
        </div>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-info">
            <div class="item-title">{{product.title}}</div>
            <div class="item-desc">{{product.desc}}</div>
            <div class="item-bottom">
                <span class="item-price left">￥{{product.price}}</span>
                <span class="item-count right">X{{product.current}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import CheckBottom from '@/component/content/checkbottom/checkbottom'
export default {
    name:"ShoppingListItem",
     props:{
        product:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    components:{CheckBottom},
    methods:{
        checkClick(){
            this.product.checked = !this.product.checked
        }
    }
}
</script>
<style scoped>
    #shop-item {
        /* width: 100%; */
        display: flex;
        padding: 10px;
        border-bottom: 1px solid #ccc;
    }
    .item-title ,
    .item-desc {
        text-overflow: ellipsis;
        white-space: nowrap; 
        overflow: hidden;
        padding: 0 10px;
        margin-bottom: 10px;
    }
    img {
        width: 100px;
        height: 120px;
        display: block;
        border-bottom: 5px;
    }
    .item-title {
        font-size: 18px;
    }
    .item-info {
        font-size: 17px;
        position: relative;
        overflow: hidden;
        width: 88%;
        padding: 5px 10px;
        color: #333333;
    }
    .item-bottom {
        padding-top: 15px;
    }
    .item-price {
        font-size: 20px;
        color: red;
    }
    .item-count {
        float: right;
    }
    .selector {
        padding-right: 5px;
        display: flex;
        width: 30px;
        align-items: center;
    }
</style>