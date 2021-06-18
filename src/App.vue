<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
  <script>
import MainTabBar from './component/content/maintabbar/MainTabBar.vue'
  export default  {
    name : "App",
    components:{MainTabBar}
  }
  </script>
  
<style>
/* @import url('./assets/css/normalize.min.css'); */
*{
  margin: 0;
  padding: 0;
}
body {
  height: 2000px;
  color: #666;
}
a {
    text-decoration: none;
    color: #666;
}
</style>
