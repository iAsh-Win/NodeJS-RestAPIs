const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
}, { timestamps: true }); // Corrected from 'timestamp' to 'timestamps'

module.exports = mongoose.model("user", userSchema);
