import { Link } from "react-router-dom";

const Navbar = () => {
    return (<>
        <div>
            <div>
                Logo
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/intraction">Intractions</Link>
            </div>
        </div>
    </>)
};

export default Navbar;
