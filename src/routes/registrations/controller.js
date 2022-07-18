const router = require('express').Router()
const service = require('./service')

router.get('/', async (req, res, next) => {
  const registrations = await service.getRegistrations()

  res.status(200).json(registrations)
})

module.exports = router
