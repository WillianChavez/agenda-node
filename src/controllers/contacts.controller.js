const ContactController = {
    home: (req, res) => {
        res.render('home')
    },
    listContacts: (req, res) => {
        res.render('contacts/list-contacts')
    },
}

module.exports = ContactController
