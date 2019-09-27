const express = require('express');
const router = express.Router();
const User = require('../models/users.js');
const Form = require('../modells/forms.js');
const bcrypt = require('bcrypt');

//-----------
//routes
//---------
router.get('/new', (req, res) => {
  res.render('users/admin.html');
});
//POST
router.post('/', (req, res) => {
  //overwirte the user password with a hashed password then pass it into database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  console.log(req.body);
  User.create(req.body, (error, createdUser) => {
    if(error){
      console.log(error);
    } else {
      console.log(createdUser);
      res.redirect('/');
    }
  })
})
module.exports = router;
