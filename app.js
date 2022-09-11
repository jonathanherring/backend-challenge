require('dotenv').config()
const express = require('express')
const colors = require('colors')
const { connectDB } = require('./src/utils/db')

//Connect to database
connectDB();

//Routes
const registrations = require('./src/routes/controller');
const { ServerApiVersion } = require('mongodb');

// const registrations = require('./src/routes/registrations/controller')
const app = express();

//Body parseer
app.use(express.json())
const port = process.env.PORT || 3000

// const mongoString = process.env.MONGO_URI

// mongoose.connect(mongoString);
// const database = mongoose.connection

// database.on('error', (error) => {
//   console.log(error)
// })

// database.once('connected', () => {
//   console.log('Database Connected');
// })



// app.use(process.env.BASE_ROUTE || '/', controller)
app.use('/', registrations)

app.listen(port, async () => {
  // await mongoClient.connect()
  console.log(`API listening on port ${port}`.yellow.bold)
})

//Handle unhandled process rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error ${err.message}`.red);
  //Close server & exit process
  app.close(() => process.exit(1));
})