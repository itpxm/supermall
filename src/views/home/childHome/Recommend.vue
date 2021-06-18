<!--  -->
<template>
    <div class="recommend">
        <div class="recommend-item" :key="index" v-for="(item,index) in recommend">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name:"Recommend",
    props:{
        recommend:{
            type:Array
        }
    }
}
</script>
<style scoped>
    .recommend{
        display: flex;
        font-size: 12px;
        padding: 10px 0 30px;
        text-align: center;
        box-shadow: 0 10px 0 rgba(100, 100, 100, .2);
    }
    .recommend-item {
        flex: 1;
    }

    .recommend-item img {
        width: 65px;
        height: 65px;
        margin-bottom: 10px;
    }
</style>