// db.js
import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        // Use current database connection
        return;
    }

    const db = await mongoose.connect(`${process.env.MONGO_URI}/chai`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
