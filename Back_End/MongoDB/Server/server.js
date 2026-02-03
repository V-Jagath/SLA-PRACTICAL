const express = require("express");
const app = express()
const PORT = 5000
const Route = require("./router/Auth")
const dataBase = require("./Config/db");
dataBase()
app.use(express.json())

app.use("/auth", Route)


app.listen(PORT, () => {
    console.log("server is running")
})