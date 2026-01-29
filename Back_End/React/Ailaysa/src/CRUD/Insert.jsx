import { useEffect, useState } from "react"

const Insert = () => {

    const [apiData, setApiData] = useState([])
    const [edit, setEdit] = useState(null)
    const [formData, setFormData] = useState(
        { title: "", price: "", category: "" }
    )
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://fakestoreapi.com/products')
            const finalRes = await res.json()
            setApiData(finalRes)
        }
        fetchData()
    }, [])

    const getInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const getFormData = (e) => {

        e.preventDefault()


        if (edit) {
            const updateData = apiData.map((item) => (item.id === edit ? { ...item, ...formData } : item
            ))

            setApiData(updateData)
            setEdit(null)
        } else {
            const newProduct = { id: apiData.length + 1, ...formData }

            setApiData([...apiData, newProduct])
            setFormData({ title: "", price: "", category: "" })
        }

    }

    //  Delete item

    const deleteItem = (id) => {
        const filterData = apiData.filter((e) => e.id !== id)
        setApiData(filterData)
    }

    const catgory = [...new Set(apiData.map((item) => item.category))]

    const showCategory = () => {
        const showCategorylist = apiData.filter((e) => e.category === "men's clothing")
        setApiData(showCategorylist)
    }

    const editItem = (item) => {
        setFormData({ title: item.title, price: item.price, category: item.category })
        setEdit(item.id)
    }

    return (
        <>

            <form onSubmit={getFormData}>
                <label>Title</label>
                <input type="text" onChange={getInput} name='title' />
                <label>Price</label>
                <input type="text" onChange={getInput} name='price' />
                <label>Category</label>
                <input type="text" onChange={getInput} name='category' />
                <input type="submit" value="Add Product" />
            </form>
            {catgory.map((e, i) => (
                <h1 key={i} >{e}</h1>
            ))}

            {apiData.map((e) => (
                <div key={e.id}>
                    <p>id:{e.id}</p>
                    <p>Title : {e.title}</p>
                    <p>Price : {e.price}</p>
                    <p>Category : {e.category}</p>
                    <button onClick={() => deleteItem(e.id)}>Delete</button>
                    <button onClick={() => editItem(e.id)}>Edit</button>
                </div>
            ))}
            <button onClick={showCategory}>Show Jwellary</button>
        </>
    )
}

export default Insert
