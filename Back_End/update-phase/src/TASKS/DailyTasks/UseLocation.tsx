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
            <ImportProduct />
        </div>
    </>)
};

export default UseLocation;


export const ImportProduct = () => {

    // const Location = useLocation()

    // const getProductData = Location.state.getProduct

    // console.log(getProductData)

    return (<>
        {/* <div className=" flex text-black flex-wrap gap-5 py-10">
            {importData.map((item: any) => (

                <div key={item.id} className="bg-gray-300 text-black  flex flex-col w-50">
                    <h1>Id:{item.id}</h1>
                    <h1>Name: {item.productName}</h1>
                    <h1>Price: {item.price}</h1>
                    <h1 className="mb-5">Qty : <button className="bg-black text-white px-2" >+</button>{item.qty}<button className="bg-black text-white px-2" >-</button></h1>
                    <button className="bg-black text-white">Buy Now</button>
                </div>
            ))}
        </div> */}
    </>)
};

