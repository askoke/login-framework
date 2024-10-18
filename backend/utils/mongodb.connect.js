const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log('Connect to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB');
        console.eroor(err);
    }
}