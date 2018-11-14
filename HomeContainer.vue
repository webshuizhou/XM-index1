<template>
    <div class="app-homeContainer">
        <!--顶部导航条 1：-->
        <mt-header fixed title="凯撒旅游"></mt-header>
        <!--轮播图    2：-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in list" :key="item.id">
                <img :src="item.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        data(){return {
           list:[]
        }},
        methods:{
            getImage(){
                var url="http://127.0.0.1:3008/imagelist";
                this.$http.get(url).then(result=>{
                    console.log(result);
                    this.list=result.body;
                })
            }
        },
        created(){
            this.getImage();
        }
    }
</script>

<style>
    .app-homeContainer header.mint-header{
        background-color:rgb(204,165,60);
        /*color:red;*/
    }
    /*图片轮播设置高度*/
    .app-homeContainer .mint-swipe{
        height:200px;
    }
    .app-homeContainer .mint-swipe img{
        width:100%;
        height:200px;
    }
</style>