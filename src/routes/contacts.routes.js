const { Router } = require('express')
const ContactController = require('./../controllers/contacts.controller')
const router = Router()

router.get('/', ContactController.home)

module.exports = router
