
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
        <!--六宫格    3：-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3 " >
            <router-link to='/jipiao'>
                <img src="../../img/icon-tr-001.png" alt="" class="my-img">
                <div class="mui-media-zt">机票火车</div>
            </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../img/icon-tr-002.png" alt="" class="my-img">
                <div class="mui-media-zt">跟团旅游</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../img/icon-tr-003.png" alt="" class="my-img">
                <div class="mui-media-zt">游艇游轮</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../img/icon-tr-004.png" alt="" class="my-img">
                <div class="mui-media-zt">当地游玩</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../img/icon-tr-005.png" alt="" class="my-img">
                <div class="mui-media-zt">景点门票</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../img/icon-tr-006.png" alt="" class="my-img">
                <div class="mui-media-zt">自由出行</div></a></li>
        </ul>
        <!--景点价格图片-->
        <div class="container">
         <div>
         <span class="Hsp">|</span>
          凯撒精选
         </div>
        </div>
        <ul class="mui-table-view mui-grid-view">
         <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in hbodyList">
          <a href="#">
           <img class="mui-media-object" :src="item.img_url" alt="">
           <div class="mui-media-body">{{item.title}}</div>
          </a>
         </li>                 
        </ul>
        <!--标题-->
        <div class="container">
         <div>
         <span class="Hsp">|</span>
          热门推荐
         </div>
        </div>
        <!--图文列表-->
        <ul class="tUl">
    <li class="tLi" v-for="item in listTw">
        <a href="">
            <img :src="item.img_url"  class="tImg">
            <div class="tZt">
                <p >{{item.title}}</p>
                <p class="tBorder">{{item.btn}}</p>
                <p class="tXzt">{{item.goz}}&nbsp;&nbsp;<span>{{item.ctime}}</span></p>
                <p class="tMoney">¥{{item.price}} <span class="tQi">起</span></p>
            </div>
        </a>
    </li>
</ul>
<!--标题-->
         <div class="CVcontainer">
             <img src="../../img/canvas2.png" alt="">
          更多精彩&nbsp;
             <img src="../../img/canvas1.png" alt="">
         </div>
        <!--标题图片-->
        <div class="Cfoot">
            <img src="../../img/Cfoot1.jpg" alt="">
            <img src="../../img/Cfoot2.jpg" alt="">
        </div>
    </div>
</template>
<script>
    export default{
        data(){return {
           list:[],
           hbodyList:[],
           listTw:[]   
        }},
        methods:{
            getImage(){
                var url="http://127.0.0.1:3000/imagelist";
                this.$http.get(url).then(result=>{
                    console.log(result);
                    this.list=result.body;
                })
            },
            getHbody(){
                var url="http://127.0.0.1:3000/hbody";
                this.$http.get(url).then(result=>{
                    this.hbodyList=result.body;
                })
            },
            getListTw(){
                var url="http://127.0.0.1:3000/listTw";
                this.$http.get(url).then(result=>{
                    this.listTw=result.body;
                })
            }

        },
        created(){
            this.getImage();
            this.getHbody();
            this.getListTw();
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
        height:150px;
    }
    .app-homeContainer .mint-swipe img{
        width:100%;
        height:150px;
    }
    /*调整六宫格*/
    .mui-media-zt{
    line-height: 15px;
    display: block;
    width: 100%;
    height: 15px;
    text-overflow: ellipsis;
    color: #333;
    font-size:13px;
    }
    .mui-grid-view.mui-grid-9{
        background: #fff;
        border:0;
    }
    .mui-grid-view.mui-grid-9 img{
        width:60px;
        height:60px;
        border-radius: 50%;
    }
    .app-homeContainer .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
        font-size:13px;
    }
    /*标题*/
    .container{
        width:100%;
        height:60px;
        display:flex; 
        align-items:center;
    }
    .CVcontainer{
      margin:0 auto;
      background-color: #FFFFFF;
        width:100%;
        height:60px;
        display:flex;
        align-items:center;
        justify-content: center;
    }
    .Hsp{
        color:orange;
        font-weight:bold;
        padding-left:15px;
        font-size:20px;
    }
    /*图文列表*/
    .tUl{
        width:100%;
        height:130px;
        padding-left:15px;
    }
    .tLi{
        list-style-type:none;
    }
    .tImg{
        width:155px;
        float:left;
    }
    .tZt{
        float:left;
        width:200px;
        /*height:200px;*/
        padding-left:12px;
    }
    .tBorder{
        border:1px solid rgb(129,197,175);
        width:65px;
        padding:2px 2px;
        color:rgb(129,197,175);
    }
    .tXzt{
        font-size:12px;
    }
    .tMoney{
        float:right;
        color:orange;
        margin-top:-10px;
    }
    .tQi{
        color:gray;
    }
    /*标题图片*/
    Cfoot{
        width:100%;
    }
    /*按钮查询下的三张图片*/
    .hangD{
        width:100%;
        height:90px;
        margin-top:70px;
    }
    .hangU{
        display:flex;
        list-style-type:none;
        justify-content:space-between;
        padding:0px;
    }
    .hangM{
        width:120px;
    }
</style>