const router = require('express').Router()
const {getRegistrations, getRegistrationById, getRegistrationClaimsById, getRegistrationAndClaimById, createRegistration} = require('../../controllers/registrations')


router.route('/')
    .get(getRegistrations)
    .post(createRegistration);

router.route('/:registration_id').get(getRegistrationById)    

router.route('/:registration_id/claims').get(getRegistrationClaimsById)

router.route('/:registration_id/claims/:claim_id').get(getRegistrationAndClaimById)

module.exports = router
