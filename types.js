const zod=require("zod");
const createTodo=zod.Object({
    title:zod.string(),
    description:zod.string(),
})
const updateTodo=zod.Object({
    id:zod.string(),
})
module.exports ={
    createTodo:createTodo,
    updateTodo:updateTodo
}