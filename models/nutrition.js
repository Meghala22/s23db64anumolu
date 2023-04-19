const mongoose = require("mongoose")
const nutritionSchema = mongoose.Schema({
    nutrition_type: String,
    nutrition_calories: String,
    nutrition_price: Number
})
module.exports = mongoose.model("nutrition",
nutritionSchema)