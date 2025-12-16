import { Link } from 'react-router-dom'

const Navbar = () => {
    return (<>
        <div className='bg-blue-400 flex justify-between p-3'>
            <div className='font-bold text-white'>
                <h1>Logo</h1>
            </div>
            <div className='text-white font-bold flex gap-5'>

                <Link to='/'>Home</Link>
                <Link to='/Day11'>Day11</Link>
                <Link to='/Day12'>Day12</Link>
            </div>
        </div>
    </>)
};

export default Navbar;


