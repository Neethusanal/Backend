const mongoose=require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/nodejsapp")
.then(()=>{
    console.log("mongodb connected")
})
.catch(()=>{
    console.log("failed to connect")
})