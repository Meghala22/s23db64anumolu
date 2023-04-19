var express = require('express');
var router = express.Router();



const nutrition_controlers= require('../controllers/nutrition');
/* GET costumes */
router.get('/', nutrition_controlers.nutrition_view_all_Page );
module.exports = router;
/* GET detail costume page */
router.get('/detail', nutrition_controlers.nutrition_view_one_Page);
/* GET create costume page */
router.get('/create', nutrition_controlers.nutrition_create_Page);
/* GET create update page */
router.get('/update', nutrition_controlers.nutrition_update_Page);
/* GET delete costume page */
router.get('/delete', nutrition_controlers.nutrition_delete_Page);

