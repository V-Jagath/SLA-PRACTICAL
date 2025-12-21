import { useState } from "react";
import { Link } from "react-router-dom";

const Day20Task = () => {

    interface newUser {
        id: number;
        name: string;
        age: number;
        dept: string;
    }

    const user: newUser[] = [
        { id: 1, name: "Jagath", age: 23, dept: "IT" },
        { id: 2, name: "Suriya", age: 20, dept: "BCA" },
        { id: 3, name: "Karthi", age: 19, dept: "CSE" },
        { id: 4, name: "Hari", age: 25, dept: "ECE" },
    ];

    // const name = "jagath"

    return (<>
        <div className="bg-gray-900 flex flex-col gap-10 h-auto text-white">
            <div >
                <h1 className="pb-5">Day 20 Task Login page and Register Page dont have a Navbar </h1>
                <Link to='/login' className="bg-black text-white font-semibold p-1 rounded">Register Page</Link>
            </div>
            <div>
                <h1>useLocation</h1>
                <p>Use useLocation Hook go to one page to another page with data</p>
                <Link to='/task/uselocation' state={{ data: user }} className="bg-black text-white font-semibold p-1 rounded">Getuser Data</Link>
            </div>

            <div>
                <h1>useParams</h1>
                <p>Use useParams Hook go to one page to another page with data passing via url</p>
                <Link to='/task/useparams' className="bg-black text-white font-semibold p-1 rounded">Getuser Data</Link>
            </div>

            {/* <UseParams userData={user} /> */}

            <div className="flex gap-5 flex-wrap">
                {user.map((e) => (
                    <div key={e.id} className="bg-blue-200 text-black p-5 w-50">
                        <h1>{e.name}</h1>
                        <h1>{e.age}</h1>
                        <h1>{e.dept}</h1>
                        <Link to={`/task/useparams/${e.id}`} className="bg-black text-white w-20 font-semibold p-1 rounded">Get Data</Link>
                    </div>
                ))}
            </div>
            <ExportProduct />
        </div >
    </>)
};

export default Day20Task;

export const ExportProduct = () => {

    const [product, setProduct] = useState([
        { id: 1, productName: "Laptop", price: 40000, qty: 2 },
        { id: 2, productName: "Mobile", price: 20000, qty: 3 },
        { id: 3, productName: "Airpods", price: 25000, qty: 1 },
        { id: 4, productName: "Headset", price: 30000, qty: 5 },
    ]
    );

    return (<>
        <div>
            <div>
                <Link to='/task/uselocation' state={{ getProduct: product }}>Export Product</Link>
            </div>
        </div>
    </>)
}
