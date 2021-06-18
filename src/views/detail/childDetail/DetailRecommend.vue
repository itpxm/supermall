<!--  -->
<template>
   <div>
        <div class="recommend-header">商品推荐</div>
       <div class="recommend">
        <div :key="index" v-for="(item,index) in recommend" class="recommend-info" @load="imgLoad">
            <a :href="item.item_url">
                <img :src="item.image" alt=""/>
                <div class="goods-info" >
                    <p class="title">{{item.title}}</p>
                    <span class="price">{{item.price}}</span>
                    <span class="cfav">{{item.cfav}}</span>
                </div>
            </a>
        </div>
   </div>
   </div>
</template>

<script>

export default {
    name:"DetailRecommend",
    props:{
        recommend:{
            type:Array
        }
    },
    methods:{
        imgLoad(){
            this.$emit('itemimgload')
        }
    }
}
</script>
<style scoped>
    .recommend{
         display: flex;
        flex-wrap: wrap;
        justify-content : space-around; 
        padding: 2px;
    }
    .recommend-info {
        position: relative;
        width: 48%;
        padding-bottom: 40px;
    }
    .recommend-info img {
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
  .recommend-header {
      height: 19px;
      padding: 10px 0 15px 10px;
      line-height: 19px;
      font-size: 16px;
      border-top: 6px solid #f2f5f8;
  }
</style>