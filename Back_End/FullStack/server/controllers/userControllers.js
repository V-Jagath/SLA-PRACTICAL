import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'

export const userCreate = async (req, res) => {
    try {

        const { name, email, password } = req.body

        const hashPassword = await bcrypt.hash(password, 10)

        const registerData = await userModel.create({ name: name, email: email, password: hashPassword })

        res.status(200).json({ registerData })

        console.log(registerData)

    } catch (error) {
        res.status(500).json("Register Failed")
    }
}