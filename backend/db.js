const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:UvrDFhV8UdhPlr1Q@cluster0.kjqcuxy.mongodb.net/todos');

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
}); 

const todo = mongoose.model('todos', todoSchema);  

module.exports = {
  todo
};  

