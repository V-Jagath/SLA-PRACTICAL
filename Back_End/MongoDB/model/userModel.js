import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true },
    age: { type: Number, max: 60, min: 18 },
    createdBy: { type: String, default: 'Admin' }
}, { timestamp: true })

const Users = mongoose.model('usersData', userSchema)

export default Users