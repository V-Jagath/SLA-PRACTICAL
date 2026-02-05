export const checkAge = (req, res, next) => {

    if (req.body.age > 18) {
        return res.status(200).json({ message: "Eligible for vote" })
        next()
    } else {
        res.status(404).json({ message: "You Are Not Eligible for Vote" })
    }

}