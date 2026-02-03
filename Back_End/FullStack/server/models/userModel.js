import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String },
    password: { type: String },
    repassword: { type: String }
})

const userModel = mongoose.model("userData", userSchema)


export default userModel;

