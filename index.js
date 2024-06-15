const express =require("express");
const app =express();
const { creatPayload, updateTodo}=require("./types.js")
port= 3000;
app.use(express.json());
app.get("/todo",function(req,res){

})
app.post("/todos",function(req,res){
const creatPayload=req.body;
const parsePayload=createTodo.safeParse(creatPayload);
if(!parsePayload.success){
    res.status(411).json({
        msg:"you entered wrong credentials"
    })
}
})
app.put("/completed",function(req,res){
const createPayload=req.body;
const parsePayload=updateTodo.safeParse(updateTodo);
if(!parsePayload.success){
res.status(411).json({
    msg:"you entered wrong credentials"
})
}
})


app.listen(port);