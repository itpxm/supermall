<!--  -->
<template>
    <div class="check-button" :class="{check : isChecked }">
        <img src="@/assets/img/cart/tick.svg" alt="" >
    </div>
</template>

<script>

export default {
    name:"CheckBottom",
    props:{
        isChecked:{
            type:Boolean,
            default:true
        }
    }
}
</script>
<style scoped>
    .check-button{
        height: 18px;
        width: 15px;
        border-radius: 50%;
        border: 2px solid #aaa;
    }
    .check {
        border-color: red;
        background-color: red;
    }
</style>