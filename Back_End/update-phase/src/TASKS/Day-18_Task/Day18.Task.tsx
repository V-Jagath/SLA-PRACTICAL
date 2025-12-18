import { Link } from "react-router-dom";

const Day18Task = () => {

    return (<>
        <div className="bg-gray-800 text-white h-110 text-center flex flex-col items-center gap-10">
            <h1 className="text-3xl p-3">This is a Day 18 Task Page</h1>
            <div className="flex flex-col w-40 gap-5">
                <Link to="/task/day18Task/technical" className="p-2 rounded-2xl text-black font-bold bg-amber-300 ">Technical</Link>
                <Link to="/task/day18Task/communication" className="p-2 rounded-2xl text-black font-bold bg-amber-300 ">Communication</Link>
                <Link to="/task/day18Task/aptitute" className="p-2 rounded-2xl text-black font-bold bg-amber-300 ">Aptitute</Link>
            </div>

        </div>
    </>)
};

export default Day18Task;
