import employeeModel from "../models/employeeModel.js";

export const employeeCreate = async (req, res) => {

    try {
        const { empName, empAge, empMail, empRole } = req.body;
        const newUser = await employeeModel.create({
            empName: empName,
            empAge: empAge,
            empMail: empMail,
            empRole: empRole
        })
        res.status(200).json({ message: "data Find Succesfully", data: newUser })

    } catch (error) {
        console.log("Data is not find error")
    }
}

export const employeeGet = async (req, res) => {
    try {
        const getData = await employeeModel.find()
        console.log(getData)
        res.status(200).json({ message: "Data get successfully", data: getData })

    } catch (error) {
        console.log("Data Get Failed", error)
    }

}

export const findEmployeeById = async (req, res) => {

    try {
        const { id } = req.params
        const findEmp = await employeeModel.findById(id)
        res.status(200).json({ message: "Employee Finded Successfully", data: findEmp })

    } catch (error) {
        console.error("Data not find", error)
    }

}

export const deleteEmployeeById = async (req, res) => {

    try {
        const { id } = req.params
        const deleteEmp = await employeeModel.findOneAndDelete({ id })
        res.status(200).json({ message: "Data deleted successful", data: deleteEmp })
    } catch (err) {
        res.status(404).json({ message: "Data Not deleted" })
    }
}


