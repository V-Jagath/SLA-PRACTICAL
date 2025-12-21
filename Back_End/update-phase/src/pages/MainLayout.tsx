import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Goback from "../components/Goback";

const MainLayout = () => {
    return (<>
        <div className="bg-gray-900">
            <Navbar />
            <Goback />
            <Outlet />
        </div>
    </>)
};

export default MainLayout;
