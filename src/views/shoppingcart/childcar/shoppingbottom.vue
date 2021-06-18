<!--  -->
<template>
    <div class="bottom">
        <div class="chenck-content">
                <check-bottom class="check-b" :is-checked="isSelectAll" @click.native="selectAllClick"/>
                全选
        </div>
        <div class="totel">
            合计:{{totelPrice}}
        </div>
        <div class="calculation" @click="calculationClick">
            去计算:{{checkLength}}
        </div>
    </div>
</template>

<script>
import CheckBottom from '@/component/content/checkbottom/checkbottom'
export default {
    name:"ShoppingBottom",
    components:{
        CheckBottom
    },
    data(){
        return {
            isShow :true
        }
    },
    computed:{
        // 获取商品的价格
        totelPrice(){
            return '￥' + this.$store.state.cartList.filter(item => {
                return item.checked
            }).reduce((preValue,item) => {
                return preValue + (item.price * item.current)
            },0).toFixed(2)
        },
        // 获取点击后商品的数量
        checkLength(){
            return this.$store.state.cartList.filter(item => item.checked).length
        },
        // 根据商品是否全部选中，来判断全选按钮的状态
        isSelectAll(){
            // return !(this.$store.state.cartList.filter(item => !item.checked).length)
            if(this.$store.state.cartList.length === 0){
                return false
            }
            return !this.$store.state.cartList.find(item => !item.checked)
        }
    },
    methods:{
        // 点击全选按钮，判断是否全选
        selectAllClick(){
            if(this.isSelectAll) {
                this.$store.state.cartList.forEach(item => item.checked = false)
            } else {
                this.$store.state.cartList.forEach(item => item.checked = true)
            }
        },
        calculationClick(){
            if(this.checkLength === 0) {
                this.$toast.show('没有商品可以结算',1500)
            }else if (this.checkLength > 0) {
                this.$toast.show('账户余额不足',1500)
            }
        }
    }
}
</script>
<style scoped>
    .bottom {
        position: absolute;
        display: flex;
        right: 0;
        left: 0;
        bottom: 49px;
        height: 50px;
        background-color: #eee;
    }

    .chenck-content {
        display: flex;
        width: 80px;
        height: 49px;
        align-items: center;
        padding-left: 10px;
    }

    .check-b {
        margin-right: 5px;
    }

    .totel {
        flex: 1;
        height: 49px;
        line-height: 49px;
    }

    .calculation {
        width: 130px;
        background-color: red;
        color: #fff;
        font-size: 16px;
        text-align: center;
        line-height: 49px;
    }
</style>