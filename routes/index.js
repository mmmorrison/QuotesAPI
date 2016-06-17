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
  Quotes().where('id', req.params.id).first().then(function(results) {
    res.json(results)
  })
})

module.exports = router;
// router.get('/:id', function(req, res, next) {
//   getDB().where('id', req.params.id).first().then(function(results) {
//     getReviews().where('rest_id', req.params.id).then(function(review_results) {
//       getHood().then(function(hood_results) {
//         getEmployees().where('rest_id', req.params.id).then(function(employees) {
//           res.render('restaurants/show', {restaurants: results, reviews: review_results, neighborhoods: hood_results,
//             employees: employees});
//         })
//       })
//     })
//   })
// });
