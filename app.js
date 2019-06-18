const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PORT
const port = process.env.PORT || 3000;
let teams = [];


//Routes
app.get('/', (req, res) => {
    res.render('index.ejs', { teams: teams });
  });

 
   app.post('/text', (req, res) => { 
     teams.push({ hero:req.body.fullname, comment: req.body.comments});
    res.redirect('/');
   });


app.listen(port, () => console.log(`Listening on port ${port}...`))