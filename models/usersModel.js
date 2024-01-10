const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    Username: { type: String, required: true},
    Password: { type: String, required: true},
    Email: { type: String, required: true},
    Birthday: Date,
    PhoneNo: { type: String, required: true},
    Address: { type: String, required: true},
    FavoriteProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "product"}],
    WishList: [{ type: mongoose.Schema.Types.ObjectId, ref: "product"}],
})

module.exports = mongoose.model("Users", userSchema)