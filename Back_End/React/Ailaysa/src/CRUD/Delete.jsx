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
            const updateData = apiData.map((item) => item.id === edit ? { ...item, ...formData } : item)

            setApiData(updateData)
            setEdit(null)
            setFormData({ title: "", category: "", price: "" })

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
        setFormData({ title: e.title, price: e.price, category: e.category })
        setEdit(e.id)
    }


    return (
        <>
            <form onSubmit={getFormData}>
                <label>title</label>
                <input type="text" onChange={getInput} value={formData.title} name="title" />
                <label>price</label>
                <input type="text" onChange={getInput} value={formData.price} name="price" />
                <label>category</label>
                <input type="text" onChange={getInput} value={formData.category} name="category" />
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

