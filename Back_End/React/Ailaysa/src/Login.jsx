import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/home')
    }

    return (
        <>
            <h1>Login Page</h1>
            <label>Login Page</label>
            <input type="email" placeholder='enter Email' required />
            <label>Password</label>
            <input type="password" placeholder='enter Password' required />
            <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Login