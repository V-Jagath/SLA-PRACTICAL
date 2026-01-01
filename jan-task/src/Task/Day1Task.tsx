import React, { useState, type FormEvent } from "react"
import type { userData } from '../Typescript/Interface'
import type { profileData } from '../Typescript/Interface'


const Day1Task: React.FC = () => {

    return (
        <>
            <h1>1. Create a counter app with Increment / Decrement / Reset</h1>
            <Counter />
            <h1>2. Render users list using map()</h1>
            <RenderUser />
            <h1>3. Toggle Login / Logout</h1>
            <Toggle />
            <h1>4. Update profile object (name, age)</h1>
            <UpdateProfile />
        </>
    )
}

export default Day1Task

//1. Create a Counter App

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    const Reset = () => {
        setCount(0)
    }

    return (<>

        <div className="p-3">
            <div >
                <button onClick={Increment} className="bg-green-500 text-white  rounded">Increment</button>
            </div>
            <p>{count}</p>
            <div>
                <button onClick={Decrement} className="bg-blue-500 text-white  rounded mb-5">Decrement</button>
            </div>
            <div>
                <button onClick={Reset} className="bg-red-500 text-white rounded">Reset</button>
            </div>
        </div>

    </>)
};

// 2 . Render users list using map()

const RenderUser = () => {
    const [user, setUser] = useState<userData>({ userName: "", age: "", email: "", mobile: "", password: "" })

    const getInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUser((pre: any) => ({ ...pre, [name]: value }))
    }

    const getUserData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


    }

    return (<>
        <div>
            <form onSubmit={getUserData}>
                <label>Name :</label>
                <input type="text" onChange={getInputData} name="userName" />
                <label>Age :</label>
                <input type="text" onChange={getInputData} name="age" />
                <label>Email :</label>
                <input type="email" onChange={getInputData} name="email" />
                <label>Mobile :</label>
                <input type="number" onChange={getInputData} name="mobile" />
                <label>Password :</label>
                <input type="password" onChange={getInputData} name="password" />
                <input type="submit" />
            </form>
            <div>
                <h1>UserName :{user.userName}</h1>
                <h1>Age :{user.age}</h1>
                <h1>Email :{user.email}</h1>
                <h1>Mobile :{user.mobile}</h1>
                <h1>Password :{user.password}</h1>
            </div>

        </div>

    </>)
}

// 3. Toggle Login / Logout

export const Toggle = () => {
    const [loginsts, setLoginsts] = useState<boolean>(false)

    const handleClick = () => {
        setLoginsts(!loginsts)
    }

    return (<>
        <button onClick={handleClick} className={loginsts ? "bg-green-500 px-3 py-1 text-white rounded" : "bg-red-500 px-3 py-1 text-white rounded"}>{loginsts ? "Login" : "Logout"}</button >
    </>)
}

// 4. Update profile object (name, age)

export const UpdateProfile = () => {

    const [profile, setProfile] = useState<profileData[]>([
        { profileName: "", age: "" }
    ])

    const getDataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setProfile((newData: any) => ({ ...newData, [name]: value }))
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(profile)
    }

    return (<>
        <form onSubmit={submitForm}>
            <label>Name :</label>
            <input type="text" name="name" onChange={getDataInput} />
            <label>Age :</label>
            <input type="text" name="age" onChange={getDataInput} />
            <input type="submit" value="Register" />
        </form>
    </>)
}