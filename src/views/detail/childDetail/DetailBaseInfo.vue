<!--  -->
<template>
<div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="base-info" ref="base">
        <div class="title">{{goods.title}}</div>
        <div class="info-price">
            <span class="n-price">{{goods.price}}</span>
            <span class="o-price">{{goods.oldPrice}}</span>
            <span class="discount">{{goods.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info-service">
            <span :key="index" v-for="index in goods.services.length-1">
                <img :src="goods.services[index-1].icon">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</div>
    
</template>

<script>

export default {
    name:"DetailBaseInfo",
    data(){
        return {
            Hight:0
        }
    },
    props:{
        goods:{
            type:Object
        },
    },
}
</script>
<style scoped>
    .base-info {
        padding: 10px 5px 0 5px;
        padding-right: 8px;
    }
    .title {
        color: black;
        font-size: 16px;
        padding-bottom: 10px;
    }
    .n-price {
        font-size: 23px;
        padding-right: 10px;
        color: #ff5777;
    }
    .o-price {
        font-size: 12px;
        text-decoration: line-through;
    }
    .discount {
        font-size: 12px;
        padding: 2px 5px;
        margin-bottom: 10px;
        background-color: #ff5777;
        border-radius: 8px;
        color: #fff;
        margin-left: 5px;
        position: relative;
        top: -8px;
    }
    .info-other {
        margin: 10px 0;
        font-size: 12px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
    }
    .info-service {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        line-height: 60px;
        color: #333;
        /* border-bottom: 1px solid rgba(100, 100, 100, .1); */
    }
    .info-service img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
        right: 1px;
    }
</style>