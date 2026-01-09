import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [data, setData] = useState({ email: "", password: "" })

    const navigate = useNavigate()

    const localData = localStorage.getItem("RegData")

    const finalData = JSON.parse(localData)
    console.log(finalData)

    const getInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
        console.log(data)
    }

    const getLoginData = (e) => {
        e.preventDefault();

        if (finalData.email === data.email && finalData.password === data.password) {
            alert("Successfully Login")
            if (finalData.role === "admin") {
                navigate("/admin")
            } else {
                navigate("/user")
            }
        } else {
            alert("Check UserName and Password")
        }

    }

    return (
        <>
            <form onSubmit={getLoginData}>
                <label>Email:</label>
                <input type="email" onChange={getInput} name='email' placeholder='Enter vaild Email' />
                <label>Password:</label>
                <input type="password" onChange={getInput} name='password' placeholder='Enter Valid Password' />
                <button>Login</button>
            </form>
        </>
    )
}

export default Login