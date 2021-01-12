const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')
const flash=require('req-flash')
const app=express();

var porta=process.env.PORT || 3000;
var session=require('express-session')

app.use(session({secret:'123',resave:true,saveUninitialized:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(flash())
app.use(express.static(path.join("src","public")))

app.set('view engine', 'ejs')
app.set('views', '.src/views')

app.listen(porta)