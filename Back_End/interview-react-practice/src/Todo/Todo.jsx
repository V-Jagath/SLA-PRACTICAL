import { useEffect, useState } from "react"

const Todo = () => {

    const [task, setTask] = useState([])
    const [input, setInput] = useState("")

    const getInputTask = (e) => {
        setInput(e.target.value)
        console.log(input)
    }

    const getTask = () => {
        const inputData = [...task, input]
        setTask(inputData)
        localStorage.setItem("todoData", JSON.stringify(inputData))
    }

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("todoData"))
        localData.map((e, i) => {
            <h1 key={i}>{e}</h1>
        })
    }, [task])
    return (
        <>
            <div>
                <input type="text" onChange={getInputTask} placeholder="Enter Task" />
                <input type="submit" onClick={getTask} />
            </div>
            <div>
                { }

            </div>
        </>
    )
}

export default Todo