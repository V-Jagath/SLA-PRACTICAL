import React, { useState } from 'react'

const List = () => {

    const [data, setData] = useState([
        { id: 1, name: "jagath", age: 24 },
        { id: 2, name: "hari", age: 22 },
        { id: 3, name: "suriya", age: 23 },
    ])

    const [formData, setFormdata] = useState(
        { id: "", name: "", age: "" },
    )

    const getInput = (e) => {
        const { name, value } = e.target;
        setFormdata({ ...formData, [name]: value })
        console.log(formData)
    }

    const getUserData = (e, i) => {
        e.preventDefault()
        const newUser = { id: i + 1, ...formData }
        setData([...data, newUser])
    }

    return (

        <>
            <form onSubmit={getUserData}>
                <label>Name :</label>
                <input type="text" onChange={getInput} name='name' placeholder='enter name' />
                <label>Age :</label>
                <input type="text" onChange={getInput} name='age' placeholder='enter age' />
                <label>Email :</label>
                <input type="text" onChange={getInput} name='email' placeholder='enter email' />
                <input type="submit" value="Register" />
            </form>
            <div>
                {data.map((e) => (
                    <div key={e.id} style={{ background: "black", color: "white", padding: "10px", width: "200px", margin: "10px" }}>
                        {/* <p>Id :{e.id}</p> */}
                        <p>Name :{e.name}</p>
                        <p>Age :{e.age}</p>
                    </div >
                ))}
            </div >
        </>
    )
}

export default List
