var express = require('express');
var app = express();
var path = require('path');
app.use('/assets', express.static('build'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(80, function () {
  console.log('Docs listening on port 80!');
});