const db = require('../models')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const all = (req, res) => {
    db.Post.find({}, (err, allPosts) => {
      if (err) {
        return res.status(400).json({status: 500, error: 'Please try again'});
      }
  
      res.json(allPosts);
    });
  };

  module.exports = {
    all
}