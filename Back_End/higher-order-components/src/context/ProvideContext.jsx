import { useState } from 'react';
import { UserContext } from './UserContext';

const ProvideContext = ({ children }) => {

    const [data, setData] = useState({})

    const getInputData = (e) => {

        const { name, value } = e.target

        setData({ ...data, [name]: value })

        console.log(data)
    }

    const getLoginData = (e) => {

        e.preventDefault();

        console.log(data)

        localStorage.setItem("loginData", JSON.stringify(data))

        const getData = localStorage.getItem("loginData")

        const finalData = JSON.parse(getData)

        console.log(finalData)
    }

    const userName = "Jagath"
    return (
        <>
            <div>
                <UserContext.Provider value={{ data, userName, setData, getInputData, getLoginData }}>
                    {children}
                </UserContext.Provider>
            </div>
        </>
    )
}

export default ProvideContext;
