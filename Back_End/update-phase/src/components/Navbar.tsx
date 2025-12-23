import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (<>
        <div className="bg-gray-700 text-white flex justify-between items-center p-3">
            <div className="text-2xl font-bold">
                Logo
            </div>
            <div className="flex gap-5 font-semibold">
                {/* <Link to="/" className="bg-white text-black p-1 rounded-xl hover:bg-black hover:text-white">Home</Link>
                <Link to="/intraction" className="bg-white text-black p-1 rounded-xl hover:bg-black hover:text-white">Intractions</Link>
                <Link to="/state" className="bg-white text-black p-1 rounded-xl hover:bg-black hover:text-white">State</Link>
                <Link to="/task" className="bg-white text-black p-1 rounded-xl hover:bg-black hover:text-white">Tasks</Link> */}

                <NavLink to="/" className={({ isActive }) => isActive ? "bg-white text-black p-1 rounded" : "bg-black text-white p-1 rounded hover:bg-white hover:text-black"} end>Home</NavLink>

                <NavLink to="/task" className={({ isActive }) => isActive ? "bg-white text-black p-1 rounded" : "bg-black text-white p-1 rounded hover:bg-white hover:text-black"}>Tasks</NavLink>

            </div>
        </div >
    </>)
};

export default Navbar;
