const router = require('express').Router();
let Contact = require('../models/contact.model');

app.post('/add', (req, res) => {
    const myData = new Contact(req.body);
    myData.save()
        .then(data => {
            res.send(`Thanks, ${req.body.firstName}`);
        })
        .catch(error => {
            res.status(400).send('Unable to save')
        })
});

module.exports = router;