<!--  -->
<template>
    <div class="login">
        <img src="@/assets/img/profile/avatar.svg" alt="" class="user-img">
        <div class="user-login">
            <p class="register">登录/注册</p>
            <div class="phone-num">
                <img src="@/assets/img/profile/phone.svg" alt="" class="phone">
                <p>暂未绑定手机号</p>
            </div>
        </div>
        <div class="right-login">
            >
        </div>
    </div>
</template>

<script>

export default {
    name:"Login"
}
</script>
<style scoped>
    .login {
        display: flex;
        padding: 15px;
        background-color: #ff8198;
        color: #fff;
    }
    .user-img {
        width: 67px;
        height: 67px;
        padding-right: 15px;
    }
    .user-login {
        flex: 1;
    }
    .phone {
        width: 22px;
        height: 22px;
    }
    .register {
        font-size: 20px;
        padding: 5px 10px;
    }
    .phone-num {
        display: flex;
    }
    .right-login {
        font-size: 33px;
        width: 40px;
        margin-top: 5px;
    }
</style>