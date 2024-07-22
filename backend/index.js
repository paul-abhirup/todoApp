// todo app

const express = require("express");
const { createTodo, updateTodo } = require("./types"); // this have the zod validation
const { todo } = require("./db"); // this have the mongodb connection, schema and model
const app = express();

app.use(express.json());

//zod validation
//body{todo: string, description: string}
//{id: string}

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload); //zod validation
  // parses the createPayload and checks if it is valid according to the createTodo (zod schema)
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "wrong inputs",
    });
    return; //exits the function
  }
  // puts in mongodb
  await todo.create({
    title: parsedPayload.title,
    description: parsedPayload.description,
    completed: false,
  });
  res.json({
    msg: "todo created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find();
  //this return a promise
  //this returns all todos
  console.log(todos); //promise
});

app.delete("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "wroong inputs",
    });
    return;
  }
  // put it in mongodb
  await todo.update(
    {
      _id: parsedPayload.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo completed",
  });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
