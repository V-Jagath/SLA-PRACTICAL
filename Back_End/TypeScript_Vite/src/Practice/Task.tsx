const Task = () => {

    let count: number = 1;

    const Increment = () => {
        count += 1
        console.log(count)
    }
    const Decrement = () => {
        count = --count
        console.log(count)

    }


    return (
        <>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </>
    )
}

export default Task;
