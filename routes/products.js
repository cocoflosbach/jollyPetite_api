const express = require("express");
const router = express.Router();
const Product = require("../models/productsModel");


// Get the list of all products
router.get("/", async (req, res) => {
    try{
        const posts = await Product.find();
        res.json(posts);
    } catch (err) {
        res.json({ messagae: err})
    }
});