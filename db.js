const mongoose=require("mongoose");
const { string } = require("zod");
 
const url = 'mongodb+srv://dhruv:Dhruv%408317@cluster0.qhhaeax.mongodb.net/'; // Replace with your MongoDB connection URL

mongoose.connect(url)
 

// mongoose.connnect("mongodb+srv://dhruv:Dhruv%408317@cluster0.qhhaeax.mongodb.net/");
const todoSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean, 
})
const todo=mongoose.model('todos',todoSchema);
module.exports={
    // todo:todo
    todo ,  //=> also can be used
    
}