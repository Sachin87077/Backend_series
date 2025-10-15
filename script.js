//fundaamental of javascript 
//in js array we can put any daata type  function


//travesrsing through aeach valeu


var arr=[1,2,3,4,4,5];
arr.forEach(function(val){
console.log(val+"hello");
})  




var ans=arr.map(function(val){
//return 13;//it will reurn 13 containgin arrraray
return val;
})

console.log(ans);//copy no of element in aray but return the elemnt thhat is return not as pericousb 




const fs=require('fs');

fs.writeFile("hey.txt","hello jaise ho", function(err){


    if(err) console.error(err);

    else console.log("done");    
    
})


//mode package mananger 
//node js core me jo installedatahai ise moduke hot hai aur jo npm se dowmnload krte hia  wo package

//like text to sppech packaege of gogle
//installation from npm>>   npm install/i packagename@version if needede

//delete npm uninstall packagenaem

//on installing package a folder named node modules is created whcih not only contain package or di]eendenice give n by oyu 
//but also if given pkg depnfd on other that will be downloaded too
//dependenices are package and theri depend dependices
//dev dependencies-- aise packages jo sirf development me kaam ayenge pare jab
//app ban jayega aur upoad ho jyega tab packages ko use nahi kar rhe honge'
//kayi bar aap koi script cahlate ho aur us script me likhte ho  ye command
//npm start    npm run dev    npm run concurrent
//meana when we install npm then it send start and test commanf to os like a tabel in which  all command to occur are written
//lectture 3 express



const express=require('express')
const app=express();//means function xchlaa diya hai 
//everthign that express js can do is same in the app 
//routes create kran limje sachin.com/profiles/pohoto/name{slash is called routes}
//means  kon se page par kya dekhega

//for cookie
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ye use hote hai like tumne to hjea tha plainn text par server ko mila blob which is not directlry readble
//ab is chheej ko handle krna pdega ki hum us blob ko wapas se readable kr ske





//app.get(route(knha par jyega),requesthandler(always a function))

app.use( function(req,res,next){
    console.log('middlewdare chala');
    next();//it is used to forward  the request  to  furtheras it accpet then it hacveto sned na




});//it will be  running before any routes like /profile /name     /////// // app.use always contain a function which will contaim req res and next


app.get('/',function(req,res){
    res.send("hello world");
    // "/ wil  routes to theswever like youtube/ twitter /"
   
})


app.get('/profile',function(req,res){
    res.send("ya node nf heww we go");
})
   
app.listen(3000);
//always have to restart the server  to see cahnegs we made////
//if we  startserver by nodemaon then it is not nede to restart evertime server 
// by usinf this all change are visiblle wohtou restaring the server

//middleware(it is usdd to do work that we want to do before routes)
//jab bhi server request accpet krta  hia wnha  se routes ke beech pahuchne tak agr us request ko beech me roktte hai aur kuch perform krte ho to ye element  middleware hait hai
//example hmne ek request bheji jo server ne accept ki ab sever ke pas user ka data nhi hai to middleawaree ke jriye user data add krege and the fromear to routes\



//FRONTED ->BACKEND ->FRONTEND(PROFILE->SERER(/PRFOELI ABCKEBND RESE->PRINTEND ON FRONTED))
//EXPRESS JS has specila route sthat is only for erroe handling
app.use((err ,req,res,next)=>{
    console.error(err.stack)
    res.status(500).end('somethifn wrong');


})


//form handling and working with hte forms
//handle backend proces of form an dmaking sure  the data comng from nay frontend
//lib,fraamewoerk,tmeplate engine we still habnfkde it ant the bancjend

//session cookie(after giving photo  that you requestediwebsite forget who u are ......so 
//hm log kuch bhi data browser pr rkh skte hain and jb bhi aap kuch bhi requsest banckend par kroge wo frontedn pe saved data automaticaly backend pr chla jyegwa
//  )



