const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,     ref: 'User',
        required: true},
    task:String
},{timestamps:true})

const todoModel=mongoose.model('todo-task',todoSchema);

module.exports=todoModel;