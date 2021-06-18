<!--  -->
<template>
      <div class="car-list">
            <scroll class="content" ref="scroll">
                <div class="shopping-list">
                    <shopping-list-item
                        :key="index" v-for="(item,index) in cartList"
                        :product="item"/>
                </div>
            </scroll>
      </div>
    
</template>

<script>
import {mapGetters} from 'vuex'
import shoppingListItem from './shoppingListItem.vue'
import Scroll from '@/component/common/scroll/Scroll'
export default {
  components: { shoppingListItem , Scroll },
    name:"ShoppingList",
    computed:{
        ...mapGetters(['cartList'])
    },
    activated() {
        this.$refs.scroll.refresh()
    }
}
</script>
<style scoped>
    .shopping-list {
        width: 100%;
        height: 100%;
    }
    .content {
        position: absolute;
        top: 44px;
        right: 0;
        bottom: 99px;
        left: 0;
        overflow: hidden;
        width: 100%;
        background-color: #ffffff;
    }
</style>