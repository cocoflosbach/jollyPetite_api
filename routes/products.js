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


// Add a new product
router.post("/", async (req, res) {
    const post = new Product({
        Name: req.body.Name,
    Description: req.body.Description,
    Price: req.bodyPrice,
    Quantity: req.body.Quantity,
    Weight: req.body.Weight,
    });
    console.log(post);
    try {
        const savedProduct = await post.save();
        res.json(savedProduct);
    } catch (err) {
        res.json({ message:err})
    }
});