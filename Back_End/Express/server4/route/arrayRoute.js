import express from 'express'
import { create } from '../controllers/create.js'

const arrayRoute = express.Router()

arrayRoute.post('/createArray', create)


//  http://localhost:5000/api/newArray/createArray
export default arrayRoute;


