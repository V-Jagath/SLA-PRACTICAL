import { useState } from "react"

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

        console.log(inputData)

        localStorage.setItem("todoData", JSON.stringify(inputData))

        // if (input) {
        //     console.log("true")
        //     setInput("")
        //     setTask(localStorage.getItem(JSON.stringify("todoData")))
        // }
    }

    return (
        <>
            <div>
                <input type="text" onChange={getInputTask} placeholder="Enter Task" />
                <input type="submit" onClick={getTask} />
            </div>
            <div>
                {task.map((e, i) => (
                    <p key={i}>{e}</p>
                ))}
            </div>
        </>
    )
}

export default Todo