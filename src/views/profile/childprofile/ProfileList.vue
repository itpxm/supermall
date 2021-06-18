<!--  -->
<template>
        <div class="profile-list">
            <div class="profile-item">
                <img src="@/assets/img/profile/pointer.svg" alt="">
                我的消息
            </div>
            <div class="profile-item">
                <img src="@/assets/img/profile/message.svg" alt="">
                积分商城
            </div>
            <div class="profile-item">
                <img src="@/assets/img/profile/vip.svg" alt="">
                会员卡
            </div>
            <div class="line"></div>
            <div class="profile-item">
                <img src="@/assets/img/profile/cart.svg" alt="">
                我的购物车
            </div>
            <div class="profile-item">
                <img src="@/assets/img/profile/shopping.svg" alt="">
                点赞购物APP
            </div>
        </div>
</template>

<script>

export default {
    name:"ProfileList"
}
</script>
<style scoped>
    .profile-item {
        padding: 10px 20px;
        border-bottom: 1px solid #eee;
    }
    .profile-item img {
        width: 30px;
        height: 30px;
        position: relative;
        top: 5px;
    }
</style>