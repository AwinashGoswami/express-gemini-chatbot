const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' })
const db = process.env.MONGO_URI;

const dbConnection = async () => {
    try {
        await mongoose.connect(db);
        console.log("Database Connected");
    } catch (error) {
        console.error('Database Connection Failed', error.message);
    }
}

dbConnection();

module.exports = { dbConnection }