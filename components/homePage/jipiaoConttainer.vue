<template>
    <div class="app-jipiaoContainer">
        <!--机票顶部导航条 1：-->
        <mt-header fixed title="国际机票预订"></mt-header>
        <!--轮播图    2：引用轮播组件-->
        <swiper-box :list="imagelist"></swiper-box>
        <!--点击事件查询-->
    <div id="container" @click="CC()">
     <div id="parent1" data-toggle="tab"  data-target="#child1" :style="Pmask_hide">单程
        <div id="child1" data-toggle="sp" :style="Cmask_hide">
            <div class="Zleft">出发地</div>
            <div class="Zcenter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="Yright">目的地</div>
            <div class="ERConttainer">
                <div class="ERctrQ">北京</div>
                <div class="ERctrZ">
                    <p class="mui-icon mui-icon-arrowthinleft"></p>
                    <p class="mui-icon mui-icon-arrowthinright"></p>
                </div>
                <div class="ERctrM">目的地</div>
            </div>
            <div class="ERConttainer2">
                <div class="Zleft">出发地</div>
                <div class="Zcenter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="Yright">目的地</div>
            </div>
            <div class="ERConttainer3">
                <div class="ERctrQ1">11月27日(明天)</div>
                <div class="ERctrZ1">&nbsp;</div>
                <div class="ERctrM1">11月29日</div>
            </div>
            <div class="ERConttainer4">
                <div class="ERctrQ2 mui-icon mui-icon-home">经济舱</div>
                <div class="ERctrZ2">&nbsp;</div>
                <div class="ERctrM2">1成人 0儿童</div>
            </div>
            <button class="mint-button mint-button--primary mint-button--large">查询</button>
        </div>
     </div>
     <div id="parent2" data-toggle="tab" data-target="#child2" >返程
        <div id="child2" data-toggle="sp"> <div class="Zleft">出发地</div>
            <div class="Zcenter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="Yright">目的地</div>
            <div class="ERConttainer">
                <div class="ERctrQ">北京</div>
                <div class="ERctrZ">
                    <p class="mui-icon mui-icon-arrowthinleft"></p>
                    <p class="mui-icon mui-icon-arrowthinright"></p>
                </div>
                <div class="ERctrM">目的地</div>
            </div>
            <div class="ERConttainer2">
                <div class="Zleft">出发地</div>
                <div class="Zcenter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="Yright">目的地</div>
            </div>
            <div class="ERConttainer3">
                <div class="ERctrQ1">11月27日(明天)</div>
                <div class="ERctrZ1">&nbsp;</div>
                <div class="ERctrM1">11月29日</div>
            </div>
            <div class="ERConttainer4">
                <div class="ERctrQ2 mui-icon mui-icon-home">经济舱</div>
                <div class="ERctrZ2">&nbsp;</div>
                <div class="ERctrM2">1成人 0儿童</div>
            </div>
            <button class="mint-button mint-button--primary mint-button--large">查询</button></div>
     </div>
     <div id="parent3" data-toggle="tab" data-target="#child3" >多程
        <div id="child3" data-toggle="sp"> <div class="Zleft">出发地</div>
            <div class="Zcenter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="Yright">目的地</div>
            <div class="ERConttainer">
                <div class="ERctrQ">北京</div>
                <div class="ERctrZ">
                    <p class="mui-icon mui-icon-arrowthinleft"></p>
                    <p class="mui-icon mui-icon-arrowthinright"></p>
                </div>
                <div class="ERctrM">目的地</div>
            </div>
            <div class="ERConttainer2">
                <div class="Zleft">出发地</div>
                <div class="Zcenter">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <div class="Yright">目的地</div>
            </div>
            <div class="ERConttainer3">
                <div class="ERctrQ1">11月27日(明天)</div>
                <div class="ERctrZ1">&nbsp;</div>
                <div class="ERctrM1">11月29日</div>
            </div>
            <div class="ERConttainer4">
                <div class="ERctrQ2 mui-icon mui-icon-home">经济舱</div>
                <div class="ERctrZ2">&nbsp;</div>
                <div class="ERctrM2">1成人 0儿童</div>
            </div>
            <button class="mint-button mint-button--primary mint-button--large">查询</button></div>
     </div>
    </div>
    <div class='hangD'>
     <ul class='hangU'>
      <li class='hangT'><img src="../../img/hang3.jpg" alt="" class='hangM'></li>
      <li><img src="../../img/hang2.jpg" alt="" class='hangM'></li>
      <li><img src="../../img/hang3.jpg" alt="" class='hangM'></li>
     </ul>
    </div>
</div>
</template>

<script>
//1:引入子组件 轮播图
import swipe from "../sub/swipe.vue"
    export default{
        data(){return {
           imagelist:[],
            Cmask_hide:{display:'block',background:'#FFFFFD'},
            Pmask_hide:{background:'#FFFFFD',color:'#333333'}
        }},
        methods:{
            getImage(){
                var url='http://127.0.0.1:3000/imagelist';
                this.$http.get(url).then(result=>{
                    this.imagelist=result.body;
                })
            },
            // getCC(){
    // document.getElementById('child1').style.display='block';
    // document.getElementById('parent1').style.background='#FFFFFD';
    // document.getElementById('parent1').style.color='#333333';
    // document.getElementById('child1').style.background='#FFFFFD';
    //         },
            CC(){
                console.log(44);
                var tabs=document.querySelectorAll("[data-toggle=tab]")
    for(var tab of tabs){
      tab.onclick=function(){
            for(var tab of tabs){
                tab.style.background='#333333';
                tab.style.color='#FFFFFD';
            }
            var tab=this;
            tab.style.background='#FFFFFD';
            tab.style.color='#333333';

            var sps=document.querySelectorAll("[data-toggle=sp]");
            for(var sp of sps){
                sp.style.display='none';
                //sp.style.background='white';
            }
            var id=tab.getAttribute("data-target");
            var dv=document.querySelector(id);
            dv.style.display='block';
            dv.style.background='#FFFFFD';
        }
    }
            }
        },
        created(){
            this.getImage();
            // this.getCC();
        },
        components:{//注册轮播图
            "swiper-box":swipe}
    }
</script>

<style>
    /*子元素内部样式*/
    .ERctrQ2,.ERctrZ2,.ERctrM2{float: left;font-size: 24px}
    .ERctrQ2{
        padding: 5px 5px;
    }
    .ERctrZ2{padding: 5px 50px;}
    .ERctrM2{padding-top: 5px;}

    .ERctrQ1,.ERctrZ1,.ERctrM1{float: left}
    .ERctrQ1{
        padding: 5px 5px;
    }
    .ERctrZ1{padding: 5px 70px;}
    .ERctrM1{padding-top: 5px;}

    .ERConttainer4{margin-top:175px;}
    .ERConttainer3{margin-top:125px;}
    .ERConttainer2{margin-top:85px;}
    .ERctrQ,.ERctrZ,.ERctrM{float: left}
    .ERctrQ{
        padding: 5px 5px;
    }
    .ERctrZ{padding: 5px 100px;}
    .ERctrM{padding-top: 5px;}
    .ERConttainer{margin-top: 35px;}
    .Zleft,.Zcenter,.Yright{
        float: left;
        font-size: 12px;
    }
    .Zleft{
        padding: 5px 5px;
    }
    .Zcenter{
        padding: 5px 120px;
    }
    .Yright{
        padding-top: 5px;
    }
 #container{
            width:350px;
            height: 270px;
            margin:0 auto;
            position:relative;
            background:#F5F5F5;
        }
        #parent1,#parent2,#parent3{
            
            /*border:1px solid gray;*/
            float:left;
            padding:20px 40px;
            color:#F5F5F5;
            /*position:relative;*/
            cursor: pointer;
            background-color: #333333;
            opacity: 0.8;
            transition: all .5s linear;
        }
        #child1,#child2,#child3{
            width:345px;
            height:250px;
            position:absolute;
            top:63px;
            left:0;
            /*background: #4a82d1;*/
            display: none;
        }
</style>