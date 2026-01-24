import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import arrayRoute from './route/arrayRoute.js'

dotenv.config();

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/newArray', arrayRoute)

app.listen(PORT, () => {
    console.log(`server Created Successfully http://localhost:${PORT}`)
})

