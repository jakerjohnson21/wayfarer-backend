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

const getCity = (req, res) => {
    db.City.findById(req.params.cityId, (err, foundCity) => {
        if (err) return res.status(400).json({status: 400, message: "City not found."})

        res.json(foundCity);
    })
}

module.exports = {
    all,
    getCity
}