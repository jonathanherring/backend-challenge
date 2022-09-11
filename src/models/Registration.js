const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    enrollDate: {
        date: Date
    },
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
        callDate: {
            date: Date
        },
        serviceInvoiceDate: {
            date: Date
        },
        servicePrice: Number,
        damageReason: String,
        serviceType: String

    }]
})

module.exports = mongoose.model('Registration', RegistrationSchema)