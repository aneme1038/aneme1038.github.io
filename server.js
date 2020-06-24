const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const db = mongoose.connection;
require('dotenv').config();

//-------
//Port
//-------

//---------
//Database
//---------
const MONGODB_URI =process.env.MONGODB_URI;

//fix deprecation warnings for mongoose
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Connect to Mongo
mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

//Error / Success
db.on('error', (error) => {
  console.log(error.message + 'Is MongoD not running?');
})
db.on('connected', () => {
  console.log('Mongo Connected: ', MONGODB_URI);
})
db.on('disconnected', () => {
  console.log('Mongo Disconnected');
})

//----------
//Middleware
//----------
app.use(express.urlencoded({extended: false})); //does not allow nested objects in query strings
app.use(express.json()); //returns middleware that only parses JSON
//use method override
app.use(methodOverride('_method')); //allow POST, PUT and DELETE from a form
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}))

//---------
//Controllers
//---------
const formsController = require('./controllers/forms.js');
app.use('/forms', formsController);
const sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);
const usersController = require('./controlllers/users.js');
app.use('/users', usersController);

//Listener
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
