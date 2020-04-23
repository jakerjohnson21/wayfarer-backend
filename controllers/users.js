const db = require('../models')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const show = (req, res) => {
    db.User.findById(req.params.id, (err, foundUser) => {
        if (err) return res.status(500).json({
            status: 500,
            message: err
        })

        res.status(200).json({
            status: 200,
            data: foundUser
        })
    })
}

const findAllPosts = (req, res) => {
    db.Post.find({}, (err, allGames) => {
      if (err) {
        return res.status(400).json({status: 500, error: 'Please try again'});
      }
  
      res.json(allGames);
    });
  };

module.exports = {
    show, 
    findAllPosts
}