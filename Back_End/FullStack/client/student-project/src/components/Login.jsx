import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [input, setInput] = useState({ email: "", password: "" })

    const navigate = useNavigate()

    const getInput = (e) => {

        const { name, value } = e.target

        setInput({ ...input, [name]: value })
    }

    const localGetData = JSON.parse(localStorage.getItem('registerData'))


    const getFromData = (e) => {
        e.preventDefault()
        if (input.email === localGetData.email && input.password === localGetData.password) {
            navigate('/home')
        } else {
            alert("datas Mismatch")
        }
    }

    return (
        <>
            <form onSubmit={getFromData}>
                <label>Email:</label>
                <input type="text" onChange={getInput} name="email" />
                <label>Password:</label>
                <input type="password" onChange={getInput} name="password" />
                <input type="submit" value={"Login"} />
            </form>

        </>
    )
}

export default Login