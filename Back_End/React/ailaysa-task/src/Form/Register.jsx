import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    const location = useNavigate()

    const [data, setData] = useState({ name: "", email: "", role: "", password: "" })

    const getInput = (e) => {
        const { name, value } = e.target

        setData({ ...data, [name]: value })
        console.log(data)
    }

    const getFormData = (e) => {
        e.preventDefault()

        console.log(data)


        if (data.password.length < 6) {
            alert("Password is mininum 6 Chracters")

        } else if (data.role === "") {
            alert("Please Select Anyone Role")
        } else {
            localStorage.setItem("RegData", JSON.stringify(data))
            location("/login")
        }

    }
    return (
        <>
            <form onSubmit={getFormData}>
                <label>Name:</label>
                <input type="text" onChange={getInput} name="name" placeholder="Enter Your Name" />
                <label>Email:</label>
                <input type="email" onChange={getInput} name="email" placeholder="Enter Your Email" />
                <label>Password:</label>
                <input type="current-password" onChange={getInput} name="password" placeholder="Enter Your Password" />
                <select onChange={getInput} value="" name="role">
                    <option value="" selected disabled>select one</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <input type="submit" value="Register" />
            </form>
        </>
    )

}
export default Register;
