const express = require('express');
const app = express();

// PORT
const port = process.env.PORT || 3000;

//This is how you define a route
app.get('/', (req, res) => {
    res.render('index.ejs');
  });

// app.post('/', (req, res) => { 
//     myNotes.push(req.body.note);
//     res.redirect('/');
//   });


app.listen(port, () => console.log(`Listening on port ${port}...`))