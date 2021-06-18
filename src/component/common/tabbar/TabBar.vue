<!--  -->
<template>
    <div>
        <div id="tab-bar">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    
export default {
    name:"TabBar"
}
</script>
<style scoped>
#tab-bar {
       display: flex;
       position: fixed;
       bottom: 0;
       right: 0;
       left: 0;
       height: 49px;
       padding-top: 5px;
       background-color: #f6f6f6;
       text-align: center;
       font-size: 14px;
   }
</style>