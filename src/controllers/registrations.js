const mongoose = require('mongoose')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Registration = require('../models/Registration')
const { parseQuery } = require('../utils/helpers')

// @desc Get all registrations
// @route /registrations
exports.getRegistrations = asyncHandler(async (req, res, next) => {
    let query;

    let queryStr = parseQuery(req.query);

    query = Registration.find(queryStr)
    const registrations = await query;

    res.status(200).json({
        success: true,
        data: registrations
    });
});

// @desc Get registrtion by id
// @route /registrations/:id
exports.getRegistrationById = asyncHandler(async (req, res, next) => {

    const registration = await Registration.findById(req.params.registration_id)

    if (!registration) {
        return next(new ErrorResponse(`Registration not found with id of ${req.params.registration_id}`, 404));
    }

    res.status(200).json({
        success: true,
        data: registration
    });
});

// @desc Get claims by registration id
// @route /registrations/registration_id/claims
exports.getRegistrationClaimsById = asyncHandler(async (req, res, next) => {

    let queryStr = parseQuery(req.query);

    // const registration = await Registration.find({ _id: new mongoose.Types.ObjectId(req.params.registration_id), ...queryStr })
console.log('queryStr', queryStr)
    const registration = await Registration.aggregate([
        {
            $match: {_id: new mongoose.Types.ObjectId(req.params.registration_id)}
        },
        {
            $project: { claims: true }
        },
        {
            $unwind: { path: '$claims' }
        },
        {
            $replaceRoot : { newRoot: '$claims'}
        },
        {
            $match : queryStr
        }
    ])
    if (!registration) {
        return next(new ErrorResponse(`Registration not found with id of ${req.params.registration_id}`, 404));
    }
    const claimsFinal = registration

    res.status(200).json({
        success: true,
        data: claimsFinal
    });
})


// @desc Get claim by claim id and registration id
// @route /registrations/registration_id/claims/claim_id
exports.getRegistrationAndClaimById = asyncHandler(async (req, res, next) => {

    const registration = await Registration.findById(req.params.registration_id)
    if (!registration) {
        return next(new ErrorResponse(`Registration not found with id of ${req.params.registration_id}`, 404));
    }
    const claims = registration.claims
    const claimId = Number(req.params.claim_id)
    const claim = claims.filter(claim => claim.id === claimId)

    if (!claim || !claim.length) {
        return next(new ErrorResponse(`Claim not found with id of ${claimId}`, 404));
    }

    res.status(200).json({
        success: true,
        data: claim
    });
});

// @desc POST registrations
// @route /registrations
exports.createRegistration = asyncHandler(async (req, res, next) => {

    const registration = await Registration.create(req.body)

    res.status(201).json({
        success: true,
        data: registration
    });

});