const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Details: {type: String, required: true},
    Price: {type: String, required: true},
    Color: {type: String},
    Img: {type: String, required: true},
    Size: {type: String},
    Brand: {type: String},
})


module.exports = mongoose.model("Products", productSchema)