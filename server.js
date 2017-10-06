var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var app = express();
var PORT = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

app.get('*', function(req,res){
	res.sendFile('./public/index.html');
});


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'holtzman.patrick@gmail.com',
    clientId: '727656314805-gh9ru4t35ss64q7j3bcblcquvb0ne1hm.apps.googleusercontent.com',
    clientSecret: 'KK6TKkzsH31O8z2RvsUa27U5',
    refreshToken: '1/hose6d2SSXyU1UsC2EyvKyJY4oStMpUwIAspeQXaDpI',
    accessToken: 'ya29.GlvcBA2uLwMyGEH6LgSErLFyAmGO4RuvKzkdk2AI1RNBTADZlug5VxYd58aGjKag4nsonzJyWV5hiJJmDp9AjO3io5V8047dJ4Upqh9xkd4Qul6RNM06kHpHoZoA'
  },
});

app.post("/mailer",function(req,res){
	console.log(req.body);
	transporter.sendMail({

		from: req.body.email,
		to: "holtzman.patrick@gmail.com",
		subject: req.body.email,
		text: req.body.comments

		},(err,res) => { if (err){
			console.log(err)
		}
		else{
			console.log("email sent")
		}
	})
})


app.listen(PORT, function(){
	console.log("Listening on port: " +  PORT);
});