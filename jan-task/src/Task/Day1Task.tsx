import { useEffect, useState, type FormEvent } from "react"
import type { userData } from '../Typescript/Interface'
import { userInfo } from "os"
const Day1Task: React.FC = () => {

    return (
        <>
            <h1>1. Create a counter app with Increment / Decrement / Reset</h1>
            <Counter />
            <h1>2. Render users list using map()</h1>
            <RenderUser />
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

    const [user, setUser] = useState<userData>(
        { userName: "", age: "", email: "", mobile: "", password: "" }
    )

    const getInputData = (e: any) => {
        console.log(e.target.value)
    }


    const getUserData = (e: any) => {
        e.preventDefault();
    }

    return (<>
        <div>
            <form onSubmit={getUserData}>
                <label>Name :</label>
                <input type="text" onChange={getInputData} name="name" />
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
            <h1>{user.userName}</h1>
        </div>

    </>)
}

