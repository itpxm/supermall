<!--  -->
<template>
    <div>
        <swiper>
            <swiper-item :key="index" v-for="(item,index) in banners">
               <a :href="item.link">
                    <img :src="item.image" alt="" @load="imgLoad">
               </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import Swiper from '@/component/common/swiper/Swiper'
import SwiperItem from '@/component/common/swiper/SwiperItem'
export default {
    name :"HomeSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    data(){
        return {
            isLoad : false
        }
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        },
    },
    methods:{
        imgLoad(){
            if(!this.isLoad){
                this.$emit('swiperimageload')
                this.isLoad = true
            }
        },
    }
}
</script>
<style scoped>

</style>