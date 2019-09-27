const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = Schema({
  name: String,
  company: String,
  email: String,
  service: String,
  description: String,
  message: String
})

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
