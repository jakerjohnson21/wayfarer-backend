const db = require('../models')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const all = (req, res) => {
  // this doesn't work fully, you need to use the id to find a user and then finds posts

    db.Post.find({}, (err, allPosts) => {
      if (err) {
        return res.status(400).json({status: 500, error: 'Please try again'});
      }
  
      res.json(allPosts);
    });
  };

const show = (req, res) => {
  db.Post.findById(req.params.id, (err, foundPost) => {
    if (err) {
      return res.status(400).json({status: 500, error: 'Please try again'});
    }

    res.json(foundPost);
  })
};


  module.exports = {
    all
}