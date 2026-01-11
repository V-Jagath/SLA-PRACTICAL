import { useEffect, useId, useState } from "react"

const TodoApp = () => {

    const [input, setInput] = useState("");

    const [task, setTask] = useState([]);


    useEffect(() => {
        localStorage.setItem("totoData", JSON.stringify(task))
    }, [task])

    useEffect(() => {
        const getLocalData = JSON.parse(localStorage.getItem("todoData"))
        if (getLocalData) setTask(task)
    }, [])

    const addTask = () => {

        if (!input.trim()) {
            alert("Please Enter Task")
        }

        const newTask = { id: Date.now(), task: input.trim(), completed: false };

        setTask([...task, newTask])
        setInput("")
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Enter Task" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div>
                {task.map((e) => (
                    <div key={e.id}>
                        <p>{e.id}</p>
                        <p>{e.task}</p>
                        <p>{e.completed}</p>
                    </div>
                ))}
            </div >
        </>
    )
}

export default TodoApp
