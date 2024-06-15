const express =require("express");
const app =express();
const {todo}=require("./db.js")
const { creatPayload, updateTodo}=require("./types.js")
port= 3000;
app.use(express.json());
app.get("/todo",async function(req,res){
    const todos= await todo.find({});
    res.json({
        todos
    })

       
    // it's hitting the data base so it should be promise

})
app.post("/todos",async function(req,res){
const creatPayload=req.body;
const parsePayload=createTodo.safeParse(creatPayload);
if(!parsePayload.success){
    res.status(411).json({
        msg:"you entered wrong credentials"
    })
}
// connect to mongodb
await todo.create({
    title: creatPayload.title,
    description:creatPayload.description,
    completed:false
})
res.json({
    msg:"todo created successfully"
})
})


app.put("/completed",async function(req,res){
const createPayload=req.body;
const parsePayload=updateTodo.safeParse(updateTodo);
if(!parsePayload.success){
res.status(411).json({
    msg:"you entered wrong credentials"
})
}
await todo.update({_id:req.body.id},{completed:true

})
res.json({
    msg:"todo is marked as completed"
})
})


app.listen(port);