const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:BLyPfXuDxdEjMoBC@cluster0.kjqcuxy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
