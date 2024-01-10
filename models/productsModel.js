const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    Name: { type: String, required: true},
    Description: { type: String, required: true},
    Price: { type: String, required: true},
    Quantity: { type: String, required: false},
    Weight: { type: String, required: false},
    
})

module.export = mongoose.model("Products", productSchema);