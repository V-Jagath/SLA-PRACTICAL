import Users from '../model/userModel.js'

export const userCreate = async (req, res) => {

    try {
        const newUser = await Users.create(req.body)
        res.status(200).json({ Data: Users })
        console.log(Users)
    } catch (error) {
        console.log(error)
    }
}

export const userGet = (req, res) => {

    try {

    } catch (error) {
        console.log(error)
    }
}

export const userDelete = (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        res.status(201).json({ msg: req.params })
    } catch (error) {
        console.error(error.message)
    }
}


