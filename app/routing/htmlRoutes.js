// Libraries
var path = require('path');
var chalk = require('chalk');

module.exports = function (app) {
    // GET route that displays survey HTML
    app.get('/survey', function (request, response) {
        response.sendFile(path.join(__dirname, '/../public/survey.html'));
        console.log(chalk.green("Survey page was accessed."));
    });

    // GET route that displays home HTML
    app.get('/home', function (request, response) {
        response.sendFile(path.join(__dirname, '/../public/home.html'));
        console.log(chalk.green('Home page was accessed.'));
    });

    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname, '/../public/home.html'));
        console.log(chalk.green('Home page was accessed.'));
    });
};