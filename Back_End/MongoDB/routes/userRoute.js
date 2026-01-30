import express from 'express'
import { userCreate, userGet, userDelete } from '../controlers/userController.js'

const userRoute = express()

userRoute.post('/createUser', userCreate)
userRoute.get('/getUser', userGet)
userRoute.get('/deleteUser/:id', userDelete)

export default userRoute;


// APILIST

// 1.  http://localhost:5000/api/user/createUser
// 2.  http://localhost:5000/api/user/getUser
// 3.  http://localhost:5000/api/user/deleteUser/:1

