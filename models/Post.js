const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    content: String
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;