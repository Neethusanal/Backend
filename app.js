const express = require('express');

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