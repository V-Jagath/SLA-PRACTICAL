import { useRef } from "react";

const Day27Task = () => {

    const data = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        if (data.current) {

            data.current.textContent = "useRef Hook is used to access DOM Elements";
        }
    }

    const hideBox = () => {
        (!data.current)
        console.log(data.current);
    }

    const handleChange = () => {
        console.log(data.current.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(data.current)
    }
    return (<>
        <div>
            <h1 ref={data}>Its a UseRef Component</h1>
            <button onClick={handleClick}>Change Text</button>
        </div>
        <div className={data.current ? "bg-red-500 text-white p-5 w-50 h-50 text-center" : "bg-green-500 text-white p-5 w-50 h-50 text-center"} >
            <h1>This is a Box</h1>
        </div >
        <button onClick={hideBox}>{data.current ? "Hide Box" : "Show Box"}</button>

        <div>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="text" name="name" onChange={handleChange} />
                <label>Email :</label>
                <input type="text" name="email" onChange={handleChange} />
                <label>Password:</label>
                <input type="text" name="password" onChange={handleChange} />
                <input type="submit" />
            </form>
        </div>
    </>)
}

export default Day27Task;