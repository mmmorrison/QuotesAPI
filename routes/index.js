var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function Quotes() {
  return knex('quotes');
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

route.get('/all', function (req, res, next) {
  Quotes().select().then(function(results) {
    res.json(results)
  })
});

module.exports = router;
