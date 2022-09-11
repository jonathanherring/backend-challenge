const router = require('express').Router()
const service = require('./service')
const {getRegistrations, getRegistrationById, getRegistrationClaimsById, createRegistration} = require('../../controllers/registrations')


router.route('/')
    .get(getRegistrations)
    .post(createRegistration);

router.route('/:registration_id').get(getRegistrationById)    

router.route ('/:registration_id/claims').get(getRegistrationClaimsById)
// router.get('/', async (req, res, next) => {
//   const registrations = await service.getRegistrations()
//   res.status(200).json(registrations)
// })
// router.post('/', async (req, res, next) => {
//   const registrations = await service.getRegistrations()

//   res.status(200).json(registrations)
// })

module.exports = router
