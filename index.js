//in thisfile we created for mini project  to run script .js change main to script .js in packahedge.json
const { create } = require('domain');
const express=require('express');
const app=express();

const path=require('path');


app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use(express.static(path.join(__dirname,'public')));
//--di current folder//above line will givee apth tlill pucblkic by ading public
//this whole path will go in  express .satic me mhar request ke liye static file public filder me milegi


app.set('view engine','ejs');//mean sthis app will shoe ejs page


app.get("/",function(req,res){

//res.send("chal rha ahi");
res.render("index");

})

app.get("/profile/:username",function(req,res){
    res.send(req.params.username);
    //bascialuy kuch bhi jgh hman alag alga vsaitvlr ke liye chlkate hai
    //jaise harsh hasrit ramehs

})





app.listen(3000,function(){
    console.log("running");
    
});
//setting up ejs and ejs paages
//instakk ejs
//seting ejs as view engine




//databases
//sql in form of tables...no sql is in form of objects

//backend has two swerver oneis applicaion(  evrtything except data) server other is databaseserver

//dtabasse ke ander alg alg type ka dta hoga jise collection khte hain
//databse->collection->document(kisi ek user ka data)
//code me                reflected database
//mongoose.connect          ddatabase create
//model create              collecion bnta hai
//CREATE                    document bnta hi 