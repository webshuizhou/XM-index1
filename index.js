window.onload=function  () {
    var yuans=document.getElementsByClassName("yuan");
    var imgs=document.getElementsByClassName("img");
    var banner=document.getElementsByClassName("banner-box")[0];
    var colors=["#E8E8E8","#E8E8E8","#202020","#FFFFFF","#FCD1D8"];
    for (var i = 0; i < yuans.length; i++) {
        yuans[i].index=i;
        yuans[i].onmouseover=function(){
            for (var i = 0; i < yuans.length; i++) {
                imgs[i].style.zIndex=1;
                yuans[i].style.background="#555";
            };
            banner.style.background=colors[this.index];
            imgs[this.index].style.zIndex=2;
            this.style.background="#fff";
        }
    };


    lunbo=setInterval(move,2000)
    var num=0;
    function move(){
        num++;
        if (num==5) {
            num=0;
        };
        for (var i = 0; i < yuans.length; i++) {
            imgs[i].style.zIndex=1;
            yuans[i].style.background="#555";
        };
        banner.style.background=colors[num];
        imgs[num].style.zIndex=2;
        yuans[num].style.background="#fff";
    }


    banner.onmouseover=function(){
        clearInterval(lunbo)
    }
    banner.onmouseout=function(){
        lunbo=setInterval(move,2000)
    }

}