const mongoose = require("mongoose")

const dataBase = async () => {
    await mongoose.connect("mongodb+srv://jagath_db_user:yCNLgZu9BDksSOt3@cluster0.l2xetbv.mongodb.net/?appName=Cluster0")
        .then(() => console.log("Mongodb is conncted"))
        .catch((err) => console.log(err))
}

module.exports = dataBase