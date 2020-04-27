const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')

// PATH = /api/v1/users

// get the user's profile using their ID
router.get('/:id', ctrl.users.show)
router.put('/update/:userId', ctrl.users.update)

module.exports = router;