var express = require('express');
var router = express.Router();



const nutrition_controlers= require('../controllers/nutrition');
/* GET costumes */
router.get('/', nutrition_controlers.nutrition_view_all_Page );
module.exports = router;
