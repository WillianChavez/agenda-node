const { Router } = require('express')
const ContactController = require('./../controllers/contacts.controller')
const router = Router()

router.get('/', ContactController.home)

router.get('/contacts', ContactController.listContacts)

module.exports = router
