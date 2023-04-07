var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('nutrition', { title: 'Search Results nutrition' });
});

module.exports = router;