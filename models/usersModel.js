const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Username: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    Birthday: {type: Date},
    FavoriteProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "product"}]
})

module.exports = mongoose.model("Users", userSchema);