const express = require("express")
const router = express.Router()
const ctrl = require('../controllers')

<<<<<<< HEAD
router.get('/', ctrl.cities.all),
router.get('/:cityId', ctrl.cities.getCity)
=======
router.get('/', ctrl.cities.all)
router.get('/:cityId', ctrl.cities.getCity)

>>>>>>> submaster

module.exports = router;