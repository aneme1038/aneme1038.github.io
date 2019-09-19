//=================
//Tasks Database Schema
//=================

//Dependancies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//-------
//Schema
//-------
const taskSchema = Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
