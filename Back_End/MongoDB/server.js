import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/userRoute.js'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/user', userRoute)

app.listen(PORT, () => {
    console.log(`server Connected on http://localhost:${PORT}`)
})

//  http://localhost:5000/api/user
