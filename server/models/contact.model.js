const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    company: String,
    email: String,
    message: {
        type: String,
        default: 'N/A'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;