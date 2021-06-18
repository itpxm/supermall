<!--  -->
<template>
    <div class="toast" v-show="isShow">
        <span>{{ message }}</span>
    </div>
</template>

<script>

export default {
    name : "Toast",
    // props:{
    //     message:{
    //         type:String,
    //     },
    //     show:{
    //         type:Boolean,
    //         default(){
    //             return false
    //         }
    //     }
    // },
    data() {
        return {
        message: "",
        isShow: false
        };
    },
    methods: {
        show(message, duration = 3000) {
            this.isShow = true;
            this.message = message;
            let time = setTimeout(() => {
                this.isShow = false;
                this.message = "";
            }, duration);
        }
            
    }
}
</script>
<style scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        padding: 8px 10px;
        color: #fff;
        background: rgba(0, 0, 0, .75);
        border-radius: 10%;
        z-index: 99;
    }
</style>