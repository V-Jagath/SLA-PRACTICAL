import React from 'react'

const Login = () => {
    return (
        <>
            <h1>Login Page</h1>
            <label>E-mail</label>
            <input type="email" placeholder='Enter Email' />
            <label>Password</label>
            <input type="password" placeholder='Enter Password' />
            <input type="submit" value="Login" />
        </>
    )
}

export default Login