<template>
    <div id="detail">
        <detail-nav-bar class="nav-bar" @titleClick="titleClick" ref="nav"/>
        <scroll class="content" ref="scroll" @scroll="contentScroll">
            <detail-swiper :top-images="topImages"></detail-swiper>
            <detail-base-info :goods="goods"></detail-base-info>
            <detail-shop :shop="shop"/>
            <detail-goods-info :detail-info="datailInfo" @imageLoad="imageLoad"></detail-goods-info>
            <detail-param-info :param-info="paramsInfo" ref="param"></detail-param-info>
            <detail-comment :comment="commentInfo" ref="comment"></detail-comment>
            <detail-recommend :recommend="recommend" ref="recommend"></detail-recommend>
        </scroll>
        <back-top v-show="isShow" @click.native="backTop"></back-top>
        <detail-bottom-bar @addCar="addToCart"></detail-bottom-bar>
        <!-- <toast :message="message" :show="show" /> -->
    </div>
</template>

<script>
import {getdetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'
import DetailNavBar from './childDetail/DetailNavBar.vue'
import DetailSwiper from './childDetail/DetailSwiper.vue'
import DetailBaseInfo from './childDetail/DetailBaseInfo.vue'
import DetailShop from './childDetail/DetailShop.vue'
import DetailGoodsInfo from './childDetail/DetailGoodsInfo.vue'
import DetailParamInfo from './childDetail/DetailParmas.vue'
import DetailComment from './childDetail/DetailComment.vue'
import Scroll from '@/component/common/scroll/Scroll'
import GoodsList from '@/component/content/goods/GoodsList'
import DetailRecommend from './childDetail/DetailRecommend.vue'
import BackTop from '@/component/content/backtop/BackTop'
import DetailBottomBar from './childDetail/DetailBottomBar.vue'
// import Toast from '@/component/common/toast/Toast'


// import { mapActions } from 'vuex'
export default {
    // ...mapActions(['addCart']),
    name:"Detail",
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShop,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailComment,
        Scroll,
        GoodsList,
        DetailRecommend,
        BackTop,
        DetailBottomBar,
        // Toast
    },
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            datailInfo:{},
            paramsInfo:{},
            commentInfo:{},
            recommend:[],
            isShow:false,
            thenmeTop:[],
            currentIndex:0,
            // message:'',
            // show: false
        }
    },
    methods:{
        contentScroll(options){
            this.isShow = -options.y >1000
            let positionY = -options.y
            let length = this.thenmeTop.length-1
            for(var i = 0 ; i < length ; i++ ){
                if(this.currentIndex !== i && (positionY >= this.thenmeTop[i] && positionY < this.thenmeTop[i+1])){
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }
        },
        backTop(){
            this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        titleClick(index){
                this.$refs.scroll.scroll.scrollTo(0,-this.thenmeTop[index],300)
        },
        imageLoad(){
            this.$refs.scroll.scroll.refresh()
        },
        // 获取加入购物车的数据
        addToCart(){
                let product = {
                image: this.datailInfo.detailImage[0].list[0],
                title : this.goods.title,
                desc : this.goods.desc,
                price : this.goods.lowNowPrice,
                iid : this.iid
          }
          this.$store.dispatch('addCart',product).then(res => {
            //   console.log(res);
            this.$toast.show(res,1500)
          })
        }
    },
    created(){
        this.iid = this.$route.params.iid 
        getdetail(this.iid).then(res => {
            // console.log(res);
            const data = res.data.result
            // 1.获取商品图片
            this.topImages = res.data.result.itemInfo.topImages
            
            // 2.获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            
            // 3.获取店家详情
            this.shop = new Shop(data.shopInfo)
            
            // 4.获取商品详情参数
            this.datailInfo = data.detailInfo

            // 5.获取参数信息
            this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            // 6.获取评论数据
            this.commentInfo = data.rate.list[0]

            
        }),
        // 6.获取推荐商品
        getRecommend().then(res => {
            // console.log(res);
            const data = res.data.data.list
            this.recommend = data
        })
    },
    updated(){
            this.thenmeTop = []
            this.thenmeTop.push(0)
            this.thenmeTop.push(this.$refs.param.$el.offsetTop)
            this.thenmeTop.push(this.$refs.comment.$el.offsetTop)
            this.thenmeTop.push(this.$refs.recommend.$el.offsetTop)
            this.thenmeTop.push(Number.MAX_VALUE)
            // console.log(this.thenmeTop);
            // 延时刷新，让页面显示完整
            setTimeout(() => {
                this.$refs.scroll.scroll.refresh()
            }, 100);
    }
}
</script>
<style scoped>
    #detail {
        position: relative;
        height: 100vh;
        z-index: 9;
        background-color: #fff;
    }
    .content {
        position: absolute;
        bottom: 49px;
        top: 44px;
        left: 0;
        right: 0;
        background-color: #fff;
    }
    .nav-bar {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
</style>