import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [input, setInput] = useState({ name: "", email: "", password: "", repassword: "" })

    const navigate = useNavigate()

    // const storeLocal = localStorage.setItem('registerData', JSON.stringify(input))

    const getInput = (e) => {

        const { name, value } = e.target

        setInput({ ...input, [name]: value })
    }

    const storeDb = async (req, res) => {

        try {
            await axios.post('http://localhost:5000/api/userData/userCreate', input).then(
                console.log("Data Created")
            )
        } catch (error) {
            console.log('data not created ', error)
        }

    }


    const getFromData = (e) => {
        e.preventDefault()

        console.log(input)
        if (input.password === input.repassword) {
            navigate('/login')
        } else {
            alert("password Mismatch")
        }
        storeDb()

    }

    return (
        <>
            <form onSubmit={getFromData}>
                <label>Name:</label>
                <input type="text" onChange={getInput} name="name" required minLength={3} maxLength={75} />
                <label>Email:</label>
                <input type="text" onChange={getInput} name="email" required />
                <label>Gender:</label>
                <select >
                    <option onChange={getInput} name="gender" value="male">Male</option>
                    <option onChange={getInput} name="gender" value="female">Female</option>
                </select>
                <label>Password:</label>
                <input type="password" onChange={getInput} name="password" required minLength={8} maxLength={12} />
                <label>Re-Enter password:</label>
                <input type="password" onChange={getInput} name="repassword" required />
                <input type="submit" value={"Register"} />
            </form>
        </>
    )
}

export default Register
