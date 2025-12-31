import { useRef, useState } from "react"

const Day26Task = () => {

    const [formData, setFromData] = useState({ name: "", email: "", mobile: "", password: "" })

    const [error, setError] = useState("")

    const formSubmit = (e: any) => {
        e.preventDefault()

        if (!formData.email) {
            setError("Email is required")

        }
        else if (!formData.password) {
            setError("Password is required")
        }
        else if (!formData.name) {
            setError("Name is required")
        }
        else if (!formData.mobile) {
            setError("Mobile no is required")
        }
        else {
            setError("")
            alert("Form Submitted Successfully")
        }
    }

    const getInput = (e: any) => {

        setFromData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)

    }

    return (
        <>
            <div className="flex items-start justify-center bg-green-100 p-8 rounded-xl shadow-md text-black gap-10 max-w-3xl mx-auto">
                <form onSubmit={formSubmit} className="space-y-4 w-80">

                    <div className="flex flex-col gap-1">
                        <label className="font-medium">Name :</label>
                        <input type="text" name="name" onChange={getInput}
                            className="border rounded p-2 " />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium">Email :</label>
                        <input type="email" name="email" onChange={getInput}
                            className="border rounded p-2 " />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium">Mobile :</label>
                        <input type="number" name="mobile" onChange={getInput}
                            className="border rounded p-2 " />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-medium">Password :</label>
                        <input type="password" name="password" onChange={getInput}
                            className="border rounded p-2 " />
                    </div>

                    <button type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                        Submit
                    </button>
                </form>

                <h1 className="text-red-600 font-semibold">{error}</h1>
            </div>

        </>
    )
}

export default Day26Task;






