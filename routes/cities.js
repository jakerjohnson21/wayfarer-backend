const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')

router.get('/', ctrl.cities.all)

module.exports = router;