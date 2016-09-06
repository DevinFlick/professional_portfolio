var express = require('express');
var router = express.Router();
var apiKey = process.env.API || require('./config').apiKey;
var domain = 'sandbox5c2f351884df485a972d799ccf3fffc9.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain});

router.post('/send', function(req, res, next){
  console.log(req.body);
  var email = {
    from: req.body.email,
    to: 'devinjflick@gmail.com',
    subject: req.body.name + 'PortfolioPageEmail',
    text: req.body.text
  };

  mailgun.messages().send(email, function(error, body){
    console.log(error);
    next();
  });
});

module.exports = router;
