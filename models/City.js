const mongoose = require("mongoose");
const Post = require("./Post.js");

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    picture: String,
    linkedPosts: [Post.schema]
});

const City = mongoose.model('City', CitySchema);

module.exports = City;
