const express = require('express');
const app = express();

app.use(express.json());

//zod validation
//body{todo: string, description: string, isCompleted: boolean}
app.post("/todo", function (req, res) {

});

app.get("/todos", function(req, res){

});

app.delete("/completed", function (req, res) {

});

app.listen(3000, ()=>{
  console.log("server running on port 3000")
})