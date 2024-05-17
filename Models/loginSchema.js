const mongoose=require('mongoose')
const loginSchema= new mongoose.Schema({
   email:{
        type:String,
        required:'please enteryour email',
        trim:true,
        lowercase:true,
        
        
    },
    password:{
        type:String,
        required:true
    }
})
const LoginModel= mongoose.model('loginData',loginSchema)
module.exports=LoginModel