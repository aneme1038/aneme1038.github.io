/*================================
Server Javascript File containing all the config for backend for project. Routes will be in Routes and data will have the checklist tasks.
=================================*/
//Dependancies
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const serveStatic = require('serve-static');
const mongoose = require('mongoose');
const cors = require('cors');
const db = mongoose.connection;
const app = express();
//========
//Database
//========
const port = process.env.PORT || 3000;
//Connect to database either heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;

//fix Deprecation warnings from mongoose just in case
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Connect to Mongo
mongoose.connect(MONGODB_URI, {useNewUrlParser: true})

//Error or success
db.on('error', (err) => console.log(err.message + 'is Mongod not running?'));
db.on('connected', () => console.log('Mongo Connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('Mongo Disconnected'))

//Middleware
app.use(bodyparser.json());
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(serveStatic(__dirname + "/dist"));

const tasks = require('./controllers/tasks.js');
//Allow use of Heroku's port or own local one
app.use('/tasks', tasks);



//Listeners
app.listen(port, () => {
  console.log('Listening on port', port);
})
