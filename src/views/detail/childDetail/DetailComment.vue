<template>
    <div>
        <div class="comment-info" v-if="Object.keys(comment).length !== 0">
        <div class="header-info">
            <span class="user-comment">用户评价</span>
            <span class="more-info">更多</span>
        </div>
        <div class="user-info">
            <img :src="comment.user.avatar" alt="">
            <span class="user-name">{{comment.user.uname}}</span>
        </div>
        <div class="detil-info">
            <p>{{comment.content}}</p>
            <div class="other-info">
                <span>{{comment.created | showDate}}</span>
                 <span>{{comment.style}}</span>
            </div>
        </div>
        </div>
        <div style="color: red" v-else>暂无用户评论</div>
    </div>
</template>

<script>
import { formatDate } from "@/common/utils";
export default {
    name:"DetailComment",
    props:{
        comment:{
            type:Object
        }
    },
    filters:{
        showDate: function (value) {
        let date = new Date(value * 1000)
        return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
    }
    
}
</script>
<style scoped>
    .comment-info {
        margin: 0 10px;
    }
    .header-info {
        height: 40px;
        line-height: 40px;
        border-bottom: 3px solid #f2f5f8;
        font-size: 14px;
        color: black;
        padding: 0 2px;
    }
    .more-info {
        float: right;
    }
    .user-info {
        margin: 10px 0;
        height: 60px;
        line-height: 60px;
    }
    .user-info img {
        width: 42px;
        height: 42px;
        border-radius: 50%; 
    }
    .user-info span {
        position: relative;
        bottom: 10px;
        left: 20px;
    }
    .detil-info p {
        font-size: 15px;
    }
    .other-info {
        font-size: 13px;
        padding: 15px 0;
        color: #a9a9a9;
    }
</style>