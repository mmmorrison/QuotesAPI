var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var id = Math.floor(Math.random() * 7);

function Quotes() {
  return knex('quotes');
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all', function (req, res, next) {
  Quotes().select().then(function(results) {
    res.json(results)
  })
});

router.get('/random/:' + id, function (req, res, next) {
  Quotes().where(id, req.params.id).first().then(function(results) {
    res.json(results)
  })
})

module.exports = router;
