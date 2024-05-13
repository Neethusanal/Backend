const express = require('express');
const LoginModel=require('./Models/loginSchema')
const mongoose=require('./configuration/mongodb')

require('dotenv').config();
const app=express()
const hbs = require('hbs');
app.use(express.json())

const port= process.env.PORT 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
app.set('view engine', 'hbs');
app.get('/login',(req ,res)=>{
    // res.send("hello")
    res.render("login")

})

app.get('/signup',(req,res)=>{
    
    res.render("signup")
})
app.get('/',(req,res)=>{
  
    res.render("home")
})
app.post('/signup',async(req,res)=>{
 
         const data={email:req.body.name,password:req.body.password}
         console.log(data)
        
        
        
          const user= new LoginModel(data)
         user.save().then(()=>{
            console.log("user saved succesfully",data)
            res.render('home')
         }).catch((err)=>{
console.log(err)
         })
        
         
  

    
 
})