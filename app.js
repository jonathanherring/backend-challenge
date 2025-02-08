require('dotenv').config()
const express = require('express')
const colors = require('colors')
const errorHandler = require('./src/middleware/error')
const { connectDB } = require('./src/utils/db')

//Connect to database
connectDB();

//Routes
const registrations = require('./src/routes/controller');

const app = express();

//Body parseer
app.use(express.json())

app.use(process.env.BASE_ROUTE || '/', registrations)
app.use(errorHandler)

const port = process.env.PORT || 3000

app.listen(port, async () => {
  console.log(`API listening on port ${port}`.yellow.bold)
})

//Handle unhandled process rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`.red);
  //Close server & exit process
  app.close(() => process.exit(1));
})