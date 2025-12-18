import { Link } from "react-router-dom";

const Task = () => {
    return (<>
        <div className="bg-gray-800 text-white h-110 text-center flex flex-col items-center gap-10">
            <h1 className="text-3xl p-3">This is a Task Page</h1>
            <div className="flex flex-col w-40 gap-5">
                <Link to="/task/day18Task" className="p-2 rounded-2xl text-black font-bold bg-amber-300 ">Day 18</Link>
            </div>
        </div>
    </>)
};

export default Task;
