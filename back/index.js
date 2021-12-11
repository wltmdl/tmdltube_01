const path = require('path');
const express = require('express');
const app = express();

app.set("view engine", "pug");
//app.set("views", `${process.cwd()}'/front/pages`);
app.set("views", path.join(__dirname,'..','front','page') );


app.get("/", (req,res)=>{res.render('home')})

app.listen(3000,()=>{console.log('express ON')})

//npm run test , start & test 은 run 커맨드 생략가능.