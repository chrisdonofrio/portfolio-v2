var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
var mg = require('nodemailer-mailgun-transport');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

app.post('/send', function(req, res) {
  var auth = {
    auth: {
      api_key: 'key-0481053a520dee442223c5eb21e4411f',
      domain: 'chrisdonofrio.xyz'
    }
  }

  var nodemailerMailgun = nodemailer.createTransport(mg(auth));

  nodemailerMailgun.sendMail({
    from: 'Chris Donofrio <cdonofrio20@gmail.com>', // sender address
    to: 'cdonofrio20@gmail.com', // list of receivers
    subject: 'Website submission', // Subject line
    text: 'You have a submission with the following details... Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message, // plaintext body
    html: '<p>You have a submission with the following details...</p><ul><li>Name: '+req.body.name+'</li><li>Email: '+req.body.email+'</li><li>Message: '+req.body.message+'</li></ul>' // html body
  }, function (err, info) {
    if (err) {
      console.log('Error: ' + err);
    }
    else {
      console.log('Response: ' + info);
    }
  });
});

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});