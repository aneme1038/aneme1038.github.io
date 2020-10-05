const express = require('express');
const forms = express.Router();
const Form = require('../models/forms.js');
require('dotenv').config();

//----------
//Routes
//--------
forms.get('/requests/:id', (req, res) => {
  console.log("route being hit");
  Form.findById(req.params.id, (error, foundRequest) => {
    res.render('nav/singleRequest.ejs', {
      request: foundRequest
    });
  })
})
forms.delete('/requests/:id', (req, res) => {
  console.log("route being hit");
  Form.findByIdAndDelete(req.params.id, () => {
    res.redirect('/');
  })
})
forms.get('/requests', (req, res) => {
  Form.find({}, (error, allRequests) => {
    console.log(allRequests);
    res.render('nav/requests.ejs', {requests: allRequests})
  })
})
forms.post('/requests', (req, res) => {
  Form.create(req.body, (error, createdRequest) => {
    console.log(req.body);
    console.log(createdRequest);
    console.log(error);
    res.redirect('/');
  })
})
forms.delete('/requests/:id', (req, res) => {
  Form.findByIdAndDelete(req.params.id, () => {
    res.redirect('/requests');
  })
})

module.exports = forms;
