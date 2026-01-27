import React, { useEffect, useState } from 'react'

const APIDataFetch = () => {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const FetchAPI = async () => {
            const res = await fetch('https://dummyjson.com/recipes')
            const finalData = await res.json()
            const getRecipes = finalData.recipes
            setApiData(getRecipes)
            console.log(getRecipes)
        }
        FetchAPI()
    }, [])

    return (
        <>
            {apiData.map((e) => (
                <div key={e.id}>
                    <h1>Name :{e.name}</h1>
                    <h1>Min :{e.prepTimeMinutes}</h1>
                </div>
            ))}
        </>
    )
}

export default APIDataFetch