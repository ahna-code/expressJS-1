var express = require('express');
var fs = require('fs');
var app = express();
var stringifyFile;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/getNote',function (req, res) {
  fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
  })
});

app.post('/updateNote/:note', function (req, res) {
  res.send(stringifyFile + req.params.note);
    fs.writeFile('./test.json', stringifyFile, function(err) {
    if (err) throw err; 
    console.log('file updated');
   })
});


var server = app.listen(3000, function() {
    console.log('Aplikacja nasłuchuje na http://localhost:3000');
});


app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});

