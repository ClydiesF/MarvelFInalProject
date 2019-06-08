const express = require('express');

const port = 3000;

app.get('/', (req, res) => {
    res.render('reservation.ejs');
  });

app.post('/', (req, res) => { 
    myNotes.push(req.body.note);
    res.redirect('/');
  });