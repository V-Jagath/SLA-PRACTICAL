import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [apiData, setApiData] = useState([])

    const [formData, setFormData] = useState([
        { title: "", price: "", description: "" }
    ])

    useEffect(() => {

        const fetchData = async () => {

            const res = await fetch('https://fakestoreapi.com/products')

            const finalRes = await res.json()

            setApiData(finalRes)

            console.log(finalRes)
        }
        fetchData()

    }, [])


    const getInput = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const addProduct = (e) => {
        e.preventDefault()
        setApiData([...apiData, formData])
    }

    const handleDelete = () => {

    }

    return (
        <>
            <form onSubmit={addProduct}>
                <label>title : </label>
                <input type="text" onChange={getInput} name='title' />
                <label>price : </label>
                <input type="text" onChange={getInput} name='price' />
                <label>description : </label>
                <input type="text" onChange={getInput} name='description' />
                <input type="submit" value="Add Product" />
            </form>

            <h1>Home Page</h1>

            {apiData.map((e, i) => (
                <div key={e.id || i} style={{ background: "blue", color: "white", padding: "20px", width: "300px", margin: "10px" }}>
                    <p>Title : {e.title}</p>
                    <p>Price : {e.price}</p>
                    <p>Description : {e.description}</p>
                    <Link style={{ background: "white" }} to={"/product"} state={{ product: 10 }}>Delete</Link>
                </div>
            ))}

        </>
    )
}

export default Home;

