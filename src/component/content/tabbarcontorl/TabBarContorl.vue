<!--  -->
<template>
    <div>
         <div class="tab-control">
             <div class="tab-control-item" :key="index" v-for="(item,index) in titles"
              @click="tabClick(index)" :class="{active:index == currentIndex}">
                <div> {{item}}</div>
             </div>
         </div>
    </div>
</template>

<script>

export default {
    name:"TabBarContorl",
    props:{
        titles:{
            type:Array
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        tabClick(index){
            this.currentIndex = index;
            this.$emit('tabClick',index)
        }
    }
}
</script>
<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        height: 44px;
        line-height: 44px;
    }
    .tab-control-item {
        flex: 1;
    }
    .active {
        color: red;
    }
</style>