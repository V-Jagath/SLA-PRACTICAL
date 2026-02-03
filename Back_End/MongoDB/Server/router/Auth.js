const express = require("express")
const Register = require("../controller/Authontaction")
const Route = express.Router()

Route.post("/register", Register)

module.exports = Route
