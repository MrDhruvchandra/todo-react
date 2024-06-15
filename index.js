const express =require("express");
const app =express();
port= 3000;
app.use(express.json());
app.get("/todo",function(req,res)=>{

})
app.post("/todos",function(req,res)=>{

})
app.put("/completed",function(req,res)=>{

})

app.listen(port);