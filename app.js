//i have changed main file bto app.js for this mongob=db learinign default was index.js
//momgoosde help to connect node server to mongodb server
const express=require('express');
const app=express();

const userModel=require('./usermodel');

app.get('/',(req,res)=>{
    res.send("heyy")

})


/*app.get('/create',(req,res)=>{
    userModel.create({
        name:"harsh",
        email:"haersh.com",
        username:"harsh@123"



    })
    console.log("heyyy");//pehle ye synchronus code chlega then upar wal asynchronis code chleag
//but is we ewant to run monog code first then ew ahcevve to use await and async



})
*/


 



app.get('/create', async (req,res)=>{
     let createduser=await userModel.create({


        name:"harsh",
        email:"harsh@gmail.com",
        username:"eharsh@123"
    })
   
    res.send(createduser);
    

})
app.get('/update', async (req,res)=>{
     
   let updateduser=await userModel.findOneAndUpdate({username:"harsh"},{name:"vandana"},{new:true})
    res.send(updateduser);
    
    //fincone give you objects
    

})


app.get('/read',async (req,res)=>{
    let users=await userModel.find();
    res.send(users);
   //find always give a array




})

app.listen(3000);
