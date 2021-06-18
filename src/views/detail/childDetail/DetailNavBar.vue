<!--  -->
<template>
    <div>
        <nav-bar>
            <div slot="left" class="back" @click="backClick"><img src="@/assets/img/common/back.svg" alt=""></div>
            <div slot="center" class="titles">
                <div :key="index" v-for="(item,index) in titles"  class="detail-contorl"
                :class="{active:currentIndex == index}" @click="NavBarClick(index)">
                    <div>{{item}}</div>
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>

import NavBar from '@/component/common/navbar/NavBar.vue'
export default {
    name:"DetailNavBar",
    components:{
        NavBar,
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        // 点击谁就让谁变成红色
        NavBarClick(index){
          this.currentIndex = index
            this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.back()
        }
    },
}
</script>
<style scoped>
    .titles {
        display: flex;
    }
    .detail-contorl {
        flex: 1;
    }
    .back {
        margin-top: 5px;
    }
    .active {
        color: red;
    }
</style>