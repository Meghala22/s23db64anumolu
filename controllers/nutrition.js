var nutrition = require('../models/nutrition');
// List of all nutrition
exports.nutrition_list = function (req, res) {
    res.send('NOT IMPLEMENTED: nutrition list');
};
// for a specific nutrition.
// for a specific Costume.
exports.nutrition_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await nutrition.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
}
// exports.nutrition_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: nutrition detail: ' + req.params.id);
// };
// Handle nutrition create on POST.
exports.nutrition_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: nutrition create POST');
};
// Handle nutrition delete form on DELETE.
exports.nutrition_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: nutrition delete DELETE ' + req.params.id);
};
// 
// Handle nutrition_delete update form on PUT.ss
exports.nutrition_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await nutrition.findById(req.params.id)
        // Do updates of properties
        if (req.body.nutrition_type)
            toUpdate.nutrition_type = req.body.nutrition_type;
        if (req.body.nutrition_calories) toUpdate.nutrition_calories = req.body.nutrition_calories;
        if (req.body.nutrition_price) toUpdate.nutrition_price = req.body.nutrition_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// List of all Costumes
exports.nutrition_list = async function (req, res) {
    try {
        theNutrition = await nutrition.find();
        res.send(theNutrition);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.nutrition_view_all_Page = async function (req, res) {
    try {
        theNutrition = await nutrition.find();
        res.render('nutrition', { title: 'nutrition Search Results', results: theNutrition });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle nutrition create on POST.
exports.nutrition_create_post = async function (req, res) {
    console.log(req.body)
    let document = new nutrition();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"nutrition_type":"goat", "cost":12, "size":"large"}
    document.nutrition_type = req.body.nutrition_type;
    document.nutrition_calories = req.body.nutrition_calories;
    document.nutrition_price = req.body.nutrition_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


//code for SS4 and SS5
// Handle nutrition delete on DELETE.
exports.nutrition_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await nutrition.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   // Handle a show one view with id specified by query
exports.nutrition_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await nutrition.findById( req.query.id)
    res.render('nutritiondetail',
    { title: 'nutrition Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.nutrition_create_Page = function(req, res) {
console.log("create view")
try{
res.render('nutritioncreate', { title: 'nutrition Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for updating a costume.
// query provides the id
exports.nutrition_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await nutrition.findById(req.query.id)
    res.render('nutritionupdate', { title: 'nutrition Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle a delete one view with id from query
exports.nutrition_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await nutrition.findById(req.query.id)
    res.render('nutritiondelete', { title: 'nutrition Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };