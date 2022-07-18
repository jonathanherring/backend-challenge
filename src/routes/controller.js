const router = require('express').Router()
const registrations = require('./registrations/controller')

router.use('/registrations', registrations)

module.exports = router
