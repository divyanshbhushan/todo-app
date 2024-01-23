const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/todo');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
  },
  todoList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Todo",
  }],
  isAdmin: {
    type: Boolean,
    default: false
  }
});

userSchema.plugin(plm);

const User = mongoose.model('User', userSchema);

module.exports = User;