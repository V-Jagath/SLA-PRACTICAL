import express from 'express'
import { readStudent, studentCreate, deleteStudent } from '../controller/studentCreate.js'

const Route = express.Router()

Route.post('/newStudent', studentCreate)
Route.get('/readStudent', readStudent)
Route.delete('/deleteStudent/:id', deleteStudent)

export default Route

