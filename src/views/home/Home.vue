
<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
           <tab-bar-contorl class="tab-contorl"  ref="tabcontorl1" :titles="['流行','新款','精选']" @tabClick="tabClick" 
           v-show="isFixed"/>
        <scroll class="content" ref="scroll" @scroll="contentScroll" @pullingUp="LoadMore">
            <home-swiper :banners="banners" @swiperimageload="swiperimageload"/>
            <recommend :recommend="recommend"/>
            <featrue/>
            <tab-bar-contorl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabcontorl"></tab-bar-contorl>
            <goods-list :goods-list="showGoods"></goods-list>
        </scroll>
            <back-top @click.native="backClick" v-show="isShow"></back-top>
    </div>
</template>

<script>
import NavBar from '@/component/common/navbar/NavBar.vue'
import HomeSwiper from './childHome/HomeSwiper.vue'
import Recommend from './childHome/Recommend.vue'
import Featrue from './childHome/Featrue.vue'
import TabBarContorl from '@/component/content/tabbarcontorl/TabBarContorl'
import GoodsList from '@/component/content/goods/GoodsList'
import BackTop from '@/component/content/backtop/BackTop'
import Scroll from '@/component/common/scroll/Scroll'
import {debounce} from '@/common/utils'

import {getHomeMultidata,getHomeGoods} from '@/network/home.js'
export default {
    name : "Home",
    data(){
        return {
            banners:[],
            recommend:[],
            goods:{
                'pop':{ page: 0 , list : [] },
                'new':{ page: 0 , list : [] },
                'sell':{ page: 0 , list : [] }
            },
            currentType:'pop',
            isShow:false,
            saveY : 0,
            offsetTop : 0,
            isFixed : false,
        }
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        Recommend,
        Featrue,
        TabBarContorl,
        GoodsList,
        BackTop,
        Scroll,
        
    },
    created(){
       this.getHomeMultidata(),
       this.getHomeGoods('pop')
       this.getHomeGoods('new')
       this.getHomeGoods('sell')
    },
    mounted(){
         const refresh = debounce(this.$refs.scroll.refresh, 50)
        // $bus事件总线
            this.$bus.$on('itemimgload',()=>{
            this.$refs.scroll.refresh()
        })
    },
    activated(){
        // console.log('activated');
        this.$refs.scroll.scroll.scrollTo(0,this.saveY)
        this.$refs.scroll.scroll.refresh()
    },
    deactivated(){
        this.saveY = this.$refs.scroll.getScrollY()
        
    },
    methods:{
        tabClick(index){
            switch(index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
             this.$refs.tabcontorl.currentIndex = index
            this.$refs.tabcontorl1.currentIndex = index
        },
        
        // 点击按钮返回到顶部
        backClick(){
             this.$refs.scroll.scroll.scrollTo(0,0,500)
        },
        // 判断什么时候显示返回顶部按钮
        contentScroll(options){
            this.isShow = -options.y >1000
            this.isFixed = -options.y >this.offsetTop
        },
        // 上拉加载更多图片
        LoadMore(){
            this.getHomeGoods(this.currentType)
        },
        // 轮播图加载完后监听tabcontorl的高度
        swiperimageload(){
            // console.log(this.$refs.tabcontorl.$el.offsetTop);
            this.offsetTop = this.$refs.tabcontorl.$el.offsetTop;
            // console.log(this.offsetTop);
        },



        // -------------网络请求-----------
        getHomeMultidata(){
           getHomeMultidata().then(res => {
            this.banners = res.data.data.banner.list
            this.recommend = res.data.data.recommend.list
            // console.log(res);
           })
       },
       getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
            this.goods[type].list.push(...res.data.data.list)
            this.goods[type].page += 1
            // console.log(res);
            // console.log(res.data.data.list);
            this.$refs.scroll.scroll.finishPullUp()
            
        })
       }
    }

}
</script>
<style scoped>
    #home {
        height: 100vh;
    }
    .home-nav {
        background-color: #ff8198;
        color: #fff;
    }
    .content {
        overflow: hidden;
        /* height: 300px; */
        position: absolute;
        bottom: 49px;
        top: 44px;
        left: 0;
        right: 0;
        background-color: #fff;
    }
    .tab-contorl {
        position: relative;
        top: -10px;
        z-index: 9;
        background-color: #fff;
    }
</style>