<!--  -->
<template>
    <div class="profile">
        <nav-bar class="nav-bar">
            <div slot="center">商城</div>
        </nav-bar>
        <login/>
        <money/>
        <profile-list/>
    </div>
</template>

<script>
import NavBar from '@/component/common/navbar/NavBar'
import Login from './childprofile/Login.vue'
import Money from './childprofile/Money.vue'
import ProfileList from './childprofile/ProfileList.vue'
export default {
    name:"Profile",
    components:{
        NavBar,
        Login,
        Money,
        ProfileList
    }
}
</script>
<style scoped>
    .nav-bar {
        background-color: #ff8198;
        color: #fff;
        font-weight: 700;
        font-size: 18px;
    }
</style>