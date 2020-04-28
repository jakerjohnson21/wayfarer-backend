const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')

// PATH = /api/v1/posts

// get the user's profile using their ID
router.get('/', ctrl.posts.all)
router.get('/:userId', ctrl.posts.getUserPosts)
router.get('/get/:postId', ctrl.posts.show)

router.post('/', ctrl.posts.createPost)


module.exports = router;