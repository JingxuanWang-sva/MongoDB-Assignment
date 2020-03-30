const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    company: String,
    email: String
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;