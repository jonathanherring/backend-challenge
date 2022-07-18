require('dotenv').config()

const express = require('express')
const { mongoClient } = require('./src/utils/db')

const controller = require('./src/routes/controller')

const app = express()
const port = process.env.PORT || 3000

app.use(process.env.BASE_ROUTE || '/', controller)

app.listen(port, async () => {
  await mongoClient.connect()
  console.log(`API listening on port ${port}`)
})
