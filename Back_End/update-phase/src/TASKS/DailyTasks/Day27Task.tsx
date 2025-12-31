import { useRef, useState } from "react";

const Day27Task = () => {

    const [showbox, setShowbox] = useState(true)

    const data = useRef<HTMLHeadingElement>(null);

    const box = useRef<any>(true);

    const inputValue = useRef<any>("");

    const handleClick = () => {
        if (data.current) {
            data.current.textContent = "useRef Hook is used to access DOM Elements";
        }
    }

    const hideBox = () => {

        box.current = !box.current

        setShowbox(box.current)
        console.log(box.current);
    }

    const handleChange = () => {
        setShowbox(inputValue.current.value)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(inputValue.current.value)
    }


    return (<>
        <div>
            <h1 ref={data}>Its a UseRef Component</h1>
            <button onClick={handleClick}>Change Text</button>
        </div>

        <div className={showbox ? "bg-red-500 text-white p-5 w-50 h-50 text-center" : ""} >
            <p>This is a Box</p>
        </div >
        <button onClick={hideBox}>{showbox ? "Hide Box" : "Show Box"}</button>

        <div>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="text" name="name" ref={inputValue} onChange={handleChange} />
                <label>Email :</label>
                <input type="text" name="email" />
                <label>Password:</label>
                <input type="text" name="password" />
                <input type="submit" />
            </form>
            <p>{showbox}</p>
        </div>
    </>)
}

export default Day27Task;