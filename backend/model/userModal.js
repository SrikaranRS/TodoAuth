const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{timestamps:true})

const userModal=mongoose.model("auth-user",userSchema);

module.exports=userModal