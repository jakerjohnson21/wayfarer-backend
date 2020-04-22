const mongoose = require('mongoose');
const Post = require('./Post.js');

const UserSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    profilePicture: String,
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    dateJoined: Date,
    currentCity: String,
    posts: [Post.schema]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;