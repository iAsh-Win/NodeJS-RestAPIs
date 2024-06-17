const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = () => {
    return mongoose.connect(process.env.MONGODB)
    .then(() => {
        console.log("DB Connected Successfully!");
    })
    .catch((err) => {
        console.error(err.message);
        process.exit(1); // Exit process with failure
    });
};


module.exports = connectDB;