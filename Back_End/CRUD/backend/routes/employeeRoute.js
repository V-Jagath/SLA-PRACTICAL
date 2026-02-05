import express from 'express'
import { employeeCreate, employeeGet, findEmployeeById, deleteEmployeeById } from '../controllers/employeeController.js'

const Route = express.Router()

Route.post('/employeeCreate', employeeCreate)
Route.get('/employeeget', employeeGet)
Route.get('/findEmployee/:id', findEmployeeById)
Route.delete('/deleteEmp/:id', deleteEmployeeById)

export default Route;



// http://localhost:5000/api/employee/deleteEmp/69843dd86b2ef8b45241ffc0
