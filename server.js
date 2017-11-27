// Libraries
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var chalk = require('chalk');

var app = express();

// Changed the root route to app/public
app.use(express.static('app/public'));

// Initial port
var PORT = process.env.PORT || 3000;

// Allows server to interpret data sent
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

// Router
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listener
app.listen(PORT, function () {
    console.log("Application is listening on PORT: " + PORT);
});