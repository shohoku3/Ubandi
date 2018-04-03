const path=require('path');
const express=require('express');
const app=express()
const indexRouter=require('./routes/index');

//ejs set
app.set('views',path.join(__dirname,'views'));//存放模板文件目录
app.set('view engine','ejs');//设置模板引擎ejs
//router
app.use('/',indexRouter);

app.listen(4000);