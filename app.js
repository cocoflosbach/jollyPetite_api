const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose")
const app = express()

// Pass body-parser package as middleware
app.use(bodyParser.json());

// Start listening to the server
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
    console.log("Server is listening on Port" + port)
})