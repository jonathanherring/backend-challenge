const { db } = require('../../utils/db')

const _registrations = db.collection('testRegs')

async function getRegistrations() {
  const results = await _registrations.find({}).toArray()

  return results
}

module.exports = { getRegistrations }
