const Registration = require('../models/Registration')

// @desc Get all registrations
// @route /api/registrations
exports.getRegistrations =  async (req, res, next) => {

    try {
        const registrations = await Registration.find()

        res.status(200).json({
            success: true,
            data: registrations
        })
    } catch (err){
        res.status(400).json({ success: false })
    }
}

// @desc Get all registrations
// @route /api/registrations/:id
exports.getRegistrationById =  async (req, res, next) => {

    try {
        const registration = await Registration.findById(req.params.id)

        res.status(200).json({
            success: true,
            data: registration
        })
    } catch (err){
        res.status(400).json({ success: false })
    }
}

// @desc Get claims by registration id
// @route /api/registrations/registration_id/claims
exports.getRegistrationClaimsById =  async (req, res, next) => {

    try {
        const registration = await Registration.findById(req.params.registration_id)

        const claims = registration.claims

        res.status(200).json({
            success: true,
            data: claims
        })
    } catch (err){
        res.status(400).json({ success: false })
    }
}

// @desc POST registrations
// @route /api/registrations
exports.createRegistration = async (req, res, next) => {

    try {
        const registration = await Registration.create(req.body)

        res.status(201).json({
            success: true,
            data: registration
        })
    } catch (err){
        res.status(400).json({ success: false })
    }

}