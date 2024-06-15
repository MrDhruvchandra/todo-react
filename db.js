const mongoose=require("mongoose")
const { string } = require("zod")
mongoose.connnect("mongodb+srv://dhruv:Dhruv%408317@cluster0.qhhaeax.mongodb.net/")
const todoSchema=mongoose.Schema({
    title:string,
    description:String,
    completed:Boolean, 
})
const todo=mongoose.Schema('todos',todoSchema);
module.exports={
    todo:todo
    // todo   => also can be used
    
}