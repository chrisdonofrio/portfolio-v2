var express = require('express');
var app = express();
var nodemailer = require("nodemailer");
var PORT = process.env.PORT || 3000;

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "",
        pass: ""
    }
});

app.use(express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

app.post('/send',function(req, res) {
    var mailOptions={
        from : req.query.from,
        to : 'cdonofrio20@gmail.com',
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

app.listen(PORT, function() {
  console.log("App listening on port %s", PORT);
});