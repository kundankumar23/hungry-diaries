const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DB Connected");
    }
    catch(error) {
        console.log("DB Connnection Failed :", error.message);
    }
}

module.exports = connectDB