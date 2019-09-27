const express = require('express');
const sessions = express.Router();
const User = require('../models/users.js');
const Form = require('../modells/forms.js');
const bcrypt = require('bcrypt');

//------------
//Routes
//------------
sessions.get('/new', (req, res) => {
  res.render('/sessions/admin.html');
})
//post route for sessions
sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    console.log(req.body);
    //serires of checks for username and password
    if(error) {
      console.log(error);
      res.send('The database encountered some error. Refer to callstack')
    } else if (!foundUser) {
      //if the user found is considered 'undefined' or 'null'
      res.send('<a href="/">Sorry, no such user was found</a>')
    } else {
      //if the user is found (matching username) execute this block of code
      //and check for password matching
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        //add user to our session
        req.session.currentUser = foundUser;
        //redirect to the admin page showing list of forms
        res.redirect('/admin/forms')
      } else {
        //if the password does not match..
        res.send('<a href="/">Password does not match</a>');
      }
    }
  });
});
sessions.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  })
})
module.exports = sessions;
