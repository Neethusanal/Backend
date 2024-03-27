const express = require('express');

require('dotenv').config();
const app=express()
const hbs = require('hbs');

const port= process.env.PORT 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
app.set('view engine', 'hbs');
app.get('/login',(req ,res)=>{
    // res.send("hello")
    res.render("login")

})