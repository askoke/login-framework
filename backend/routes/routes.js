const express = require('express')
const controller = require('../controllers/controllers')
const router = express.Router()

router.post('/', controller.createUser)
router.get("/", controller.getUser)
router.get("/:userId", controller.getUserById)

module.exports = router