import { Link, useNavigate } from "react-router-dom";
import Goback from "../components/Goback";

const Task = () => {
    const navigate = useNavigate();

    const goBack = () => {

        navigate(-1)
    }

    return (<>
        <div className="bg-gray-800 text-white h-120 text-center flex flex-col items-center gap-10">
            <h1 className="text-3xl p-3">This is a Task Page</h1>
            <Goback />
            <div className="flex flex-col w-40 gap-5">
                <Link to="/task/day18Task" className="p-2 rounded-2xl text-black font-bold bg-amber-300 ">Day 18</Link>
            </div>

            <div className="flex flex-col w-40 gap-5">
                <Link to="/task/day19Task" className="p-2 rounded-2xl text-black font-bold bg-amber-300 ">Day 19</Link>
            </div>

            <div className="flex flex-col w-40 gap-5">
                <Link to="/task/day20Task" className="p-2 rounded-2xl text-black font-bold bg-amber-300 ">Day 20</Link>
            </div>

        </div>
    </>)
};

export default Task;
