const db = require('../models')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const all = (req, res) => {
    db.City.find({}, (err, foundCities) => {
        if (err) return res.status(400).json({status: 400, message: "Cities not found!"})

        res.json(foundCities);
    });
};

module.exports = {
    all
}