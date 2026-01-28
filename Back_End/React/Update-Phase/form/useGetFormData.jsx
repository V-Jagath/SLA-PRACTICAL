import React, { useState } from 'react'

const useGetFormData = () => {

    const [inputData, setInputData] = useState({})

    const getInputData = (e) => {

        const { name, value } = e.target;

        setInputData({ ...inputData, [name]: value })

    }

    return { inputData, getInputData }
}

export default useGetFormData;
