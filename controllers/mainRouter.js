const express = require('express');
const nav = express.Router();

//============
//Routes
//============
nav.get('/about', (req, res) => {
    res.render('../nav/about.html');
})
nav.get('/pnf-msg-01', (req, res) => {
    res.render('../nav/comingSoon.html');
})
nav.get('/testimonials', (req, res) => {
    res.render('../nav/testimonials.html');
})
nav.get('/contact', (req, res) => {
    res.render('../nav/contact.html');
})

module.exports = nav; 