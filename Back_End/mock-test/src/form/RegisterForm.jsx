import { useNavigate } from 'react-router-dom'
import useGetFormData from './useGetFormData'

const RegisterForm = () => {


    const { inputData, getInputData } = useGetFormData()
    console.log(inputData)
    const navigate = useNavigate()


    const getFormData = (e) => {
        e.preventDefault();
        if (inputData.mobile.length < 10) {
            alert("Please Enter Vaild Mobile Number")
        } else if (inputData.password.length < 8) {
            alert("Password is More than 8 Characters")
        } else if (inputData.password !== inputData.conpassword) {
            alert("Please Check password and conform password is mismatch")
        } else {
            alert("Sucessfully Data Registered")
            navigate("/loginform")
            localStorage.setItem("regFormData", JSON.stringify(inputData))
        }
    }


    return (
        <>
            <form onSubmit={getFormData} >
                <label>Name :</label>
                <input type="text" name="name" required onChange={getInputData} />
                <label>Mobile :</label>
                <input type="number" name="mobile" required onChange={getInputData} />
                <label>Email :</label>
                <input type="eamil" name="email" required onChange={getInputData} />
                <label>Password :</label>
                <input type="password" name="password" required onChange={getInputData} />
                <label>Confirm Password :</label>
                <input type="password" name="conpassword" required onChange={getInputData} />
                <input type="submit" value="Register Form" />
            </form>
        </>
    )
}

export default RegisterForm;
