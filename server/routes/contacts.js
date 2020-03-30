const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/add').post((req, res) => {
    const newContact = new Contact(req.body);
  
    newContact.save()
      .then(() => res.json('Contact added!'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
module.exports = router;