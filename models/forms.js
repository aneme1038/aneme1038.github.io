const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = Schema({
  inputName: String,
  inputEmail: String,
  inputCompany: String,
  inputRequestType: String,
  messageTextArea: String
})

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
