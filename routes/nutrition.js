var express = require('express');
var router = express.Router();

/* GET home page. */
const nutrition_controlers= require('../controllers/nutrition');
router.get('/', nutrition_controlers.nutrition_view_all_Page) ;
module.exports = router;