const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, { 
        useNewUrlParser: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
}

const mongoClient = new MongoClient(process.env.MONGO_URI)
const db = mongoClient.db(process.env.MONGO_DB_NAME)

module.exports = { mongoClient, db, connectDB }
