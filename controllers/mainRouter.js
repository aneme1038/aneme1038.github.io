const express = require('express');
const nav = express.Router();

//============
//Routes
//============
nav.get('/nav/about', (req, res) => {
    res.render('../nav/about.html');
})
nav.get('/nav/pnf-msg-01', (req, res) => {
    res.render('../nav/comingSoon.html');
})
nav.get('/nav/testimonials', (req, res) => {
    res.render('../nav/testimonials.html');
})
nav.get('/nav/contact', (req, res) => {
    res.render('../nav/contact.html');
})

module.exports = nav; 