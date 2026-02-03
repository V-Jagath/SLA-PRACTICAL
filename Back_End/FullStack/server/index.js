import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import studentRoute from './routes/studentRoute.js'
import dbConnect from './config/dbConnect.js'
import userRoute from './routes/userRoute.js'


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use(express.json())

dbConnect()

app.use('/api/studentData', studentRoute)

app.use('/api/userData', userRoute)

app.listen(PORT, () => {
    console.log(`server connected http://localhost:${PORT}`)
})

// http://localhost:5000/api/userData/userCreate
