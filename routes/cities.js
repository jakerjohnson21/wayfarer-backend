const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')

router.get('/', ctrl.cities.all),
router.get('/:cityId', ctrl.cities.getCity)

module.exports = router;