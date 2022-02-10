
/**

Mighty Gumball, Inc.
Version 1.0

- Rudimentary Page Templates using RegEx
- REST Client Calling Go REST API 

NodeJS-Enabled Standing Gumball
Model# M102988
Serial# 1234998871109

**/

var Stress = require('ddos-stress');

// Create new instance of DDoS Stress
var stress = new Stress();

// Run stress on server
stress.run('https://hr-iq.com/',100);


var fs = require('fs');
var express = require('express');
var connect = require('connect');
var Client = require('node-rest-client').Client;

var app = express();


app.set('port', (process.env.PORT || 8080));

console.log( "Server running on Port 8080..." ) ;

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


