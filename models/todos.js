const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tasks: [{
    type: String,
  }],
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;