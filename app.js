// my local host: http://127.0.0.1:1979
//nodemon app.js

var express = require('express');
var app = express();
var path = require('path');
//var partials = require('express-partials'),
app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'))
app.get('/', function(req, res){

  res.sendFile(__dirname + '/index.html');
});
app.get('/contact', function(req, res){
    res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){

  var data = {age: 29, job: 'ninja', pet: 'tiny-trex', hobbies: ['eating', 'fighting', 'destroying worlds']};
  res.render('profile', {person: req.params.name, data: data});

});

app.listen(1979);
