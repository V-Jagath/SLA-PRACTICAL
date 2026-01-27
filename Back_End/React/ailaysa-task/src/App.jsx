import React, { useState } from 'react'

const App = () => {
  const [input, setInput] = useState({ name: "", age: "", email: "", password: "" })
  const [formData, setFormData] = useState()

  const getInput = (e) => {
    const { name, value } = e.target;

    const saveData = [name, { ...value }]

    console.log(saveData)
    setInput(saveData)

  }

  const getFormData = (e) => {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div>
      <div>
        <h1>Form Validation</h1>
        <form onSubmit={getFormData}>
          <label>Name :</label>
          <input type="text" onChange={getInput} placeholder='Enter Name' name='name' />
          <label>Age :</label>
          <input type="text" onChange={getInput} placeholder='Enter age' name='age' />
          <label>Email :</label>
          <input type="email" onChange={getInput} placeholder='Enter email' name='email' />
          <label>Password :</label>
          <input type="password" onChange={getInput} placeholder='Enter password' name='password' />
          <input type="submit" value={"Register"} />
        </form>
      </div>
    </div>
  )
}

export default App
