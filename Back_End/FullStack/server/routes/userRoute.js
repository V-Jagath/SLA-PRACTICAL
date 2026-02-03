import express from 'express'
import { userCreate } from '../controllers/userControllers.js'

const userRoute = express()

userRoute.post('/userCreate', userCreate)


export default userRoute;
