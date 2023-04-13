var nutrition = require('../models/nutrition');
// List of all nutrition
exports.nutrition_list = function(req, res) {
 res.send('NOT IMPLEMENTED: nutrition list');
};
// for a specific nutrition.
exports.nutrition_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: nutrition detail: ' + req.params.id);
};
// Handle nutrition create on POST.
exports.nutrition_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: nutrition create POST');
};
// Handle nutrition delete form on DELETE.
exports.nutrition_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: nutrition delete DELETE ' + req.params.id);
};
// Handle nutrition update form on PUT.
exports.nutrition_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: nutrition update PUT' + req.params.id);
};

// List of all Costumes
exports.nutrition_list = async function(req, res) {
    try{
    theNutrition = await nutrition.find();
    res.send(theNutrition);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.nutrition_view_all_Page = async function(req, res) {
    try{
    theNutrition = await nutrition.find();
    res.render('nutrition', { title: 'nutrition Search Results', results: theNutrition });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle nutrition create on POST.
exports.nutrition_create_post = async function(req, res) {
    console.log(req.body)
    let document = new nutrition();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"nutrition_type":"goat", "cost":12, "size":"large"}
    document.nutrition_type = req.body.nutrition_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };