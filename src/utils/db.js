const { MongoClient } = require('mongodb')

const mongoClient = new MongoClient(process.env.MONGO_URI)
const db = mongoClient.db(process.env.MONGO_DB_NAME)

module.exports = { mongoClient, db }
