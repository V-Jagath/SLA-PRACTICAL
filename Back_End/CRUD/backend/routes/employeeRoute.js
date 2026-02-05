import express from 'express'
import { employeeCreate } from '../controllers/employeeController.js'

const Route = express.Router()

Route.post('/employeeCreate', employeeCreate)

export default Route;
