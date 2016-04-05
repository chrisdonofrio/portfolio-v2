var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});