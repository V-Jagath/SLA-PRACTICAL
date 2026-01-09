import React, { useState } from 'react'

const useGetFormData = () => {

    const [inputData, setInputData] = useState({})

    const getInputData = (e) => {

        const { name, value } = e.target;

        setInputData({ ...inputData, [name]: value })

    }

    const getFormData = (e) => {
        e.preventDefault();

        if (inputData.password.length < 8) {
            alert("Password is More than 8 Characters")
        } else if (inputData.password !== inputData.conpassword) {
            alert("Please Check  password and conform password is mismatch")
        } else {
            alert("Sucessfully Data Registered")
            localStorage.setItem("regFormData", JSON.stringify(inputData))
            setInputData("")
        }

    }


    return { inputData, getInputData, getFormData }
}

export default useGetFormData;
