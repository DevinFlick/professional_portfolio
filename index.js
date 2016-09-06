var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var mailer = require('./mailer.js');

var port = process.env.PORT || 8080;
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(__dirname + '/public'));
server.use(mailer);

server.get('/', function (req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function (){
  console.log('Now listening on port...' + port);
});
