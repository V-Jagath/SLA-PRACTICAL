import { useState } from "react";

const Day22Task = () => {

    const [product, setproduct] = useState([])

    const ApiFunction = async () => {

        const Data = await fetch("https://dummyjson.com/products");

        const GetData = await Data.json()

        const FinalData = GetData.products

        setproduct(FinalData)

    }

    console.log(product)

    return (<>
        <div className="bg-gray-900 flex flex-col gap-10 h-auto text-white">


            <button onClick={ApiFunction}>Get Api Data</button>

            {product.map((e: any) => (
                <div key={e.id} className="bg-gray-200 text-black font-bold w-100">
                    <h1>id:{e.id}</h1>
                    <h1>title:{e.title}</h1>
                    <h1>description:{e.description}</h1>
                    <h1>category:{e.category}</h1>
                    <h1>price:{e.price}</h1>
                </div>
            ))}

        </div>
    </>)
};

export default Day22Task;
