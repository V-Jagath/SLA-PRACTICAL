import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import employeeRoute from './routes/employeeRoute.js'
import connectDB from './config/dbConnect.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

connectDB()

app.use(express.json())

app.use('/api/employee', employeeRoute)

app.listen(PORT, () => {
    console.log(`Server Connected http://localhost:${PORT}`)
})


