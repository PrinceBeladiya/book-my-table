const mongoose = require('mongoose');
require("dotenv").config();

const mongoURI = process.env.DB;

const connetToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connect to mongodb compass successfully");
    })
}

module.exports = connetToMongo;
