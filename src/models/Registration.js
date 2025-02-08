
const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectID,
    enrollDate: Date,
    invoiceNumber: String,
    customer: { name: String},
    vehicle: {
        year: Number,
        make: String,
        model: String
    },
    tires: [{
        make: String,
        model: String,
        size: String,
        retailPrice: Number
    }],
    claims: [{
        id: Number,
        callDate: Date,
        serviceInvoiceDate: Date,
        servicePrice: Number,
        damageReason: String,
        serviceType: String
    }]
})

module.exports = mongoose.model('Registration', RegistrationSchema)