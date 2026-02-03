import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import createStu from './route/studentRoute.js'
import DBCONNECT from './config/database.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use(express.json())

DBCONNECT()

app.use('/api/school', createStu)

app.listen(PORT, () => {
    console.log(`Server Connected http://localhost:${PORT}`)
})


// http://localhost:5000/api/school/newStudent