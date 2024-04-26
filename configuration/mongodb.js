const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/nodejsapp")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})