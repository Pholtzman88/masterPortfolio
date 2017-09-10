var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var path = require('path');
var nodemailer = require('nodemailer');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(express.static('./public'));

app.get('/', function(req,res){
	res.sendFile('./public/index.html');
});


app.listen(PORT, function(){
	console.log("Listening on port: " +  PORT);
});