var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

// var all = require('./routes/all');

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/all', all);

function All() {
  return knex('quotes')
}

router.get('/', function(req, res, next) {
  All().select().then(function(results) {
    res.json(results);
  })
});
// Start the server and make our web app available on http://localhost:3000
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});

module.exports = app;
module.exports = router;
