import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const [input, setInput] = useState({ name: "", gender: "", email: "", password: "", repassword: "" })

    const navigate = useNavigate()

    const storeLocal = localStorage.setItem('registerData', JSON.stringify(input))

    const getInput = (e) => {

        const { name, value } = e.target

        setInput({ ...input, [name]: value })
        console.log(input)
    }

    const getFromData = (e) => {
        e.preventDefault()

        if (input.password === input.repassword) {
            navigate('/login')
        } else {
            alert("password Mismatch")
        }

    }

    return (
        <>
            <form onSubmit={getFromData}>
                <label>Name:</label>
                <input type="text" onChange={getInput} name="name" required minLength={3} maxLength={75} />
                <label>Email:</label>
                <input type="text" onChange={getInput} name="email" required />
                <label>Gender:</label>
                <select  >
                    <option onChange={getInput} value="male">Male</option>
                    <option onChange={getInput} value="female">Female</option>
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
