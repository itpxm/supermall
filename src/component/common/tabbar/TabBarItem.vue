
<template>
    <div class="tab-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div> 

</template>

<script>
import TabBar from './TabBar.vue'
export default {
    name : "TabBarItem",
    components:{TabBar},
    props:{
        path:{
            type:String
        }
    },
    // data(){
    //     return {
    //        isActive:false
    //     }
    // },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods:{
        itemClick(){
            if(this.$route.path.indexOf(this.path) == -1){
                this.$router.push(this.path)
                return
            }
        }
    }
}   
</script>
<style scoped>
   
   .tab-bar-item {
       flex: 1;
   }
   .tab-bar-item img {
       width: 24px;
       height: 24px;
   }
   .active {
       color: red;
   }
</style>