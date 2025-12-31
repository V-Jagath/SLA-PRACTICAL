import { Link, useParams } from "react-router-dom";

const UseParams = () => {

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

    const { id } = useParams()

    const setData: any = user.find((e: any) => e.id === Number(id))

    console.log(setData)

    return (<>
        <div className="bg-gray-900 h-120 text-white">
            <h1>This is a UseParamas Componenet</h1>
            < div className="bg-blue-200 text-black p-5 flex flex-col border-2 flex-wrap gap-5 w-50">
                {/* <h1>{setData.id}</h1>
                <h1>{setData.name}</h1>
                <h1>{setData.age}</h1>
                <h1>{setData.dept}</h1> */}
            </div>

        </div >

        <div>
            <h1 >Use Location New Page</h1>
            <Link to={"/uselocationnew"} state={{ userdata: user }} > go to new</Link>
        </div >
    </>)
};

export default UseParams;