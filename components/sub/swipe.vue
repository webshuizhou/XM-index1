<template>
 <div class='app-swipe'>
  <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
 </div>
</template>

<script>
 export default{
	 data(){return {}},
	 props:["list"]
 }
</script>

<style>
 /*图片轮播设置高度*/
    .app-swipe .mint-swipe{
        height:150px;
    }
    .app-swipe .mint-swipe img{
        width:100%;
        height:150px;
    }
</style>