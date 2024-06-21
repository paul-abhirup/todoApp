const express = require('express');
const { createTodo } = require('./types');
const app = express();

app.use(express.json());

//zod validation
//body{todo: string, description: string}
//{id: string}

app.post("/todo", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "wrong inputs"
    })
    return;
  }
  // put it in mongodb
});

app.get("/todos", function(req, res){

});

app.delete("/completed", function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if(!parsedPayload.success){
    res.status(411).json({
      msg: "wroong inputs"
    })
    return;
  }
  // put it in mongodb

});

app.listen(3000, ()=>{
  console.log("server running on port 3000")
})