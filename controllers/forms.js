const express = require('express');
const forms = express.Router();
const Form = require('../models/forms.js');

//----------
//Routes
//--------
forms.get('/requests', (req, res) => {
  Form.findById(req.params.id, (error, foundRequest) => {
    res.render('../externals/admin/admin.ejs', {request: foundRequest})
  })
})
forms.post('/requests', (req, res) => {
  Form.create(req.body, (error, createdRequest) => {
    res.redirect('https://aaron-neme.com/');
  })
})
forms.delete('/requests/:id', (req, res) => {
  Form.findByIdAndDelete(req.params.id, () => {
    res.redirect('/requests');
  })
})
