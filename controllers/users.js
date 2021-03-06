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

const update = (req, res) => {
  db.User.findByIdAndUpdate(req.params.userId , {name: req.body.name} , (err, updatedUser) => {
      if(err) {
        return res.status(400).json({status: 400, message: "User not found!"})
      }

      else {
        res.status(200).json({data: updatedUser, message: "User updated!"})
      }


    })
  }

module.exports = {
    show,  
    update,
}

//{name: String(req.body.name)}


  // db.User.findById(req.params.userId, (err, foundUser) => {
  //   if(err) {
  //     return res.status(400).json({status: 400, error: 'User not found!'})
  //   }

  //   foundUser.name = req.body.name;
  //   //foundUser.city = req.body.city;

  //   foundUser.save((err, savedUser) => {
  //         if (err) {
  //           return res.status(400).json({status: 400, error: 'Your change was not saved!'});
  //         }

  //         res.status(200).json({
  //           data: savedUser
  //         })
  //   })
  // })