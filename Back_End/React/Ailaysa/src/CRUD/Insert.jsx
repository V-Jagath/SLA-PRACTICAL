import { useEffect, useState } from "react"

const Insert = () => {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const finalRes = await res.json()
            setApiData(finalRes)
        }
        fetchData()
    }, [])

    return (
        <>
            {apiData.map((e) => (
                <div key={e.id}>
                    <p>Title : {e.title}</p>
                    <p>Price : {e.price}</p>
                    <p>Category : {e.category}</p>
                </div>
            ))}
        </>
    )
}

export default Insert
