const userModel = require("../models/userModels")

const Register = async (req, res) => {

    const { name, email } = req.body
    const findEmail = userModel.findOne({ email: email })
    if (!findEmail) {
        res.status(400).json({ message: "this email already used" })
    }
    const userData = userModel.create({
        name,
        email
    })
}

module.exports = Register