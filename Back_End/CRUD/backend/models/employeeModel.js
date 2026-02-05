import mongoose from 'mongoose'

const employeeSchema = new mongoose.Schema({
    empName: { type: String, required: true },
    empRole: { type: String },
    empAge: { type: Number },
    empMail: { type: String }
})

const employeModel = mongoose.model("employeeDatas", employeeSchema)

export default employeModel;
