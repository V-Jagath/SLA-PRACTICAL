import { useState } from "react"

const Day25Task = () => {

    const [data, setData] = useState("")

    const [fdata, setfdata] = useState("")

    const getVal = (e: any) => {
        e.preventDefault()
        console.log(e)
        setData(e.target.value)
    }

    const formData = (e: any) => {
        e.preventDefault()
        setfdata(data)
        console.log(e.target.value)
    }

    return (
        <>
            <form onClick={formData}>
                <input type="text" onChange={getVal} className="bg-red-200 text-black" />
                <input type="submit" value="getData" />
                <h1>{fdata}</h1>
            </form>
            <OddEven />
        </>
    )
}

export default Day25Task;

export const OddEven = () => {

    const [data, setData] = useState(0)

    const addNum = (e: any) => {

        e.preventDefault()

        const value = e.target.value

        console.log(value)

        if (Number(value) % 2 === 0) {
            const random = Math.floor(Math.random() * 10) * 2
            setData(random + value)
        } else {
            const random = Math.floor(Math.random() * 10)
            setData(random + value)
        }

    }

    // const getformData = (e: any) => {

    //     e.preventDefault()

    //     const formData = e.target.value

    //     console.log(formData)
    // }

    return (<>
        <form>
            <input onChange={addNum} type="text" />
            <input type="submit" />
            <p>{data}</p>
        </form>
    </>)
}