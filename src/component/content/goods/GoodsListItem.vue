<!--  -->
<template>
    <div class="goods-item">
        <img v-lazy="GoodsItem.show.img" alt="" @load="imgLoad" @click="itemClick">
        <div class="goods-info" >
                <p class="title">{{GoodsItem.title}}</p>
                <span class="price">{{GoodsItem.price}}</span>
                <span class="cfav">{{GoodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>

export default {
    name:"GoodsListItem",
    props:{
        GoodsItem:{
            type:Object
        }
    },
    methods:{
        imgLoad(){
            this.$bus.$emit('itemimgload')
        },
        itemClick(){
            this.$router.push('/detail/'+this.GoodsItem.iid)
        }
    }
}
</script>
<style scoped>
    .goods-item {
        position: relative;
        width: 48%;
        padding-bottom: 40px;
    }
    .goods-item img {
        width: 100%;
        border-radius: 10px;
    }
    .goods-info {
        position: absolute;
        bottom: 5px;
        right: 0;
        left: 0;
        font-size: 12px;
        text-align: center;
        overflow: hidden;
    }
    .goods-info  p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 3px;
    }
    .price {
        color: #ff5777;
    }
    .cfav {
        margin-left: 20px;
    }
    .goods-info .cfav {
    position: relative;
  }
</style>