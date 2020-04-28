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

const getUserPosts = (req, res) => {
  db.Post.find({author: req.params.userId}, (err, foundPosts) => {
    if (err) {
      return res.status(400).json({status: 500, error: 'Please try again'});
    }

    res.json(foundPosts);
  });
}

const show = (req, res) => {
  console.log(req.params.postId)
  db.Post.findById(req.params.postId, (err, foundPost) => {
    if (err) {
      return res.status(400).json({status: 500, error: 'Show post by ID failed.'});
    }

    res.json(foundPost);
  });
};

//****** 

const createPost = (req, res) => {
  console.log(req.body);
  db.Post.create(req.body, (err, newPost) => {
    if (err) {
      console.log(err);
      return res.status(400).json({status: 500, error: 'Create post failed.'});
    }

    res.json(newPost)
  })
}

const getCityPosts = (req, res) => {
  db.Post.find({city: req.params.cityId}, (err, foundPosts) => {
    if (err) {
      return res.status(400).json({status: 500, error: 'Please try again'});
    }

    res.json(foundPosts);
  });
}

  module.exports = {
    all,
    getUserPosts,
    show,
    createPost,
    getCityPosts
  }