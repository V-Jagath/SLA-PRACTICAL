import student from "../model/studentModel.js"

export const studentCreate = async (req, res) => {

    try {
        const newStudent = await student.create(req.body)

        res.status(200).json({ student: newStudent })

        console.log(newStudent.findOne())


    } catch (error) {
        console.log("Error", error)
    }

}


export const readStudent = async (req, res) => {

    try {
        const readStu = await student.find()

        res.status(200).json({ readStu })
        console.log(readStu)
    } catch (error) {
        console.log("Error", error)
    }

}

export const deleteStudent = async (req, res) => {

    const { id } = req.params
    const deleteStu = await student.findByIdAndDelete(id)

    try {
        res.status(200).json({ deleteStu })
        console.log(deleteStu)
    } catch (error) {
        console.log("Error", error)
    }

}







