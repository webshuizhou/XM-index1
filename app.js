//1:加载模块
const express=require("express");
const pool=require("./pool");
//2:创建express对象
var app=express();
//服务器node.js 允许跨域访问配置项
//2.1:引入跨域模块
const cors=require("cors");
///2.2:配置允许哪个程序跨域访问 脚手架
app.use(cors({
    origin:[
        "http://127.0.0.1:3001","http://localhost:3008"
    ],credentials:true
}))

//3:指定静态目录
//服务器指定目录 绝对路径 出错
app.use(express.static(__dirname+"/public"))
//4:绑定监听端口
app.listen(3008);
//功能一:凯撒旅游首页图片轮播
app.get("/imagelist",(req,res)=>{
    var sql="SELECT * FROM ly_swipe";
    // var obj={}; //保存发送客户端数据
pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
})
})