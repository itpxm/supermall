<!--  -->
<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Scroll",
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:3,
            click:true,
            pullUpLoad:true,
        })
        this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp')
            
        })
        // 监听页面高度
        this.scroll.on('scroll',(options) => {
            this.$emit('scroll',options)
        })
        
    },
    methods:{
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        getScrollY(){
             return this.scroll ? this.scroll.y : 0
        },
        scrollTo(){
            this.scroll.scrollTo()
        }
        
    }
}
</script>
<style scoped>
    /* .wrapper {
        height: 1000px;
    } */
</style>