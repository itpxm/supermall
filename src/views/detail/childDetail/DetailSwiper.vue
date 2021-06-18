<!--  -->
<template>
    <div>
        <swiper class="detail-swiper">
            <swiper-item :key="item" v-for="item in topImages">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
import Swiper from '@/component/common/swiper/Swiper'
import SwiperItem from '@/component/common/swiper/SwiperItem'
export default {
    name:"DetailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            defaulf(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .detail-swiper {
        height: 300px;
        overflow: hidden;
    }
</style>