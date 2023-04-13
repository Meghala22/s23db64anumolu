var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var nutrition_controller = require('../controllers/nutrition');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// nutrition ROUTES ///
// POST request for creating a nutrition.
router.post('/nutrition', nutrition_controller.nutrition_create_post);
// DELETE request to delete nutrition.
router.delete('/nutrition/:id', nutrition_controller.nutrition_delete);
// PUT request to update nutrition.
router.put('/nutrition/:id', nutrition_controller.nutrition_update_put);
// GET request for one nutrition.
router.get('/nutrition/:id', nutrition_controller.nutrition_detail);
// GET request for list of all nutrition items.
router.get('/nutrition', nutrition_controller.nutrition_list);
module.exports = router;