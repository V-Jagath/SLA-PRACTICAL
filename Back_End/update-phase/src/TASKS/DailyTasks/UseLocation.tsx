import { useLocation } from "react-router-dom";

const UseLocation = () => {

    const location = useLocation()

    const getData = location.state.data

    return (<>
        <div className="bg-gray-900 h-120 text-white">
            <div>
                {getData.map((e: any) => (
                    <div key={e.id}>
                        <h1>{e.name}</h1>
                        <h1>{e.age}</h1>
                        <h1>{e.dept}</h1>
                    </div>
                ))}
            </div>
        </div>
    </>)
};

export default UseLocation;
