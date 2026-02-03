const mongoose = require("mongoose")

const userModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { timestamps: true })

const userData = mongoose.model("user", userModel)

module.exports = userData