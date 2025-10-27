const cookieParser=require('cookie-parser');
const express=require('express');
const app=express();
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');




 
 app.use(cookieParser());


 app.get('/', function(re,res){
    res.cookie("name","harsh");//cookie settign 
    res.send("done");

 })

  app.get('/read',function(req,res){
    console.log(req.cookies);//cookie reading 
    res.send(" readingdone");

 })



 


//how to use becrypt
app.get("/",function(req,res){
    bcrypt.genSalt(10,function(err,salt){

         bcrypt.hash("passwordname",salt,function(err,hash){//herea pasword is converted into encrytoed strin hash

            console.log(hash);//printing encrytpes string


         });
    });




})




//we canot decrypt encrypted passs but we cqan noe the is tis right or wrong by comparing


app.get("/",function(req,res){
    bcrypt.compare("passwordname","$2b$10$aqz5tuDNkiXUPE86Vp6g7eBS0TxAri4y0lqzz7pv0lKjJS/Orb9YS",function(err,result){
        console.log(result);//check whether pasawoedname and strign is matching or not

});
    

})



//jwt

app.get("/",function(req,res){

let token=jwt.sign({email:"rsmejds@gmail.com"},"secret")//isme jo bhi data store krnaho wo likhte hain//by secret this writen data is chanege into string
res.cookie("token",token);
console.log(token);
res.send("donein");

})



 
 app.listen(3000);
