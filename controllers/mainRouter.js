const express = require('express');
const nav = express.Router();

//============
//Routes
//============
nav.get('/about', (req, res) => {
    res.render('nav/about.ejs');
})
nav.get('/pnf-msg-01', (req, res) => {
    res.render('nav/comingSoon.ejs');
})
nav.get('/testimonials', (req, res) => {
    res.render('nav/testimonials.ejs');
})
nav.get('/contact', (req, res) => {
    res.render('nav/contact.ejs');
})

module.exports = nav; 