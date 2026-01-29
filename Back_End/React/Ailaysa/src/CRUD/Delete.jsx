import { useEffect, useState } from "react";

const Delete = () => {

    const [apiData, setApiData] = useState([])
    const [formData, setFormData] = useState({ title: "", category: "", price: "" })
    const [edit, setEdit] = useState(null)


    useEffect(() => {
        const fetchApiData = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const finalRes = await res.json()
            setApiData(finalRes)
        }
        fetchApiData()
    }, [])

    const getInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const getFormData = (e) => {
        e.preventDefault()

        if (edit) {

        } else {
            const newProduct = { id: apiData.length + 1, ...formData }
            setApiData([...apiData, newProduct])
        }

    }

    const deleteData = (id) => {
        const filterData = apiData.filter((item) => item.id !== id)
        setApiData(filterData)
    }

    const editData = (e) => {
        const filterData = apiData.filter((item) => item.id === e.id)
        setEdit(filterData)
    }


    return (
        <>
            <form onSubmit={getFormData}>
                <label>title</label>
                <input type="text" onChange={getInput} value={formData.title} name="title" />
                <label>price</label>
                <input type="text" onChange={getInput} value={formData.price} name="title" />
                <label>category</label>
                <input type="text" onChange={getInput} value={formData.category} name="title" />
                <input type="submit" value="Add Product" />
            </form>

            <div>
                {apiData.map((e) => (
                    <div key={e.id}>
                        <p>ID:{e.id}</p>
                        <p>Title:{e.title}</p>
                        <p>Title:{e.price}</p>
                        <p>Category:{e.category}</p>
                        <button onClick={() => deleteData(e.id)}>Delete</button>
                        <button onClick={() => editData(e)}>Edit</button>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Delete;

