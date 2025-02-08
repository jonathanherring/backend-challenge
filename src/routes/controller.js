const router = require('express').Router()
const registrations = require('./registrations/registrations')

router.use('/registrations', registrations)

module.exports = router
