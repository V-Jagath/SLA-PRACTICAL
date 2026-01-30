export const userCreate = (req, res) => {

    try {
        res.status(200).json({ name: "jagath", age: 24, adult: true })
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


