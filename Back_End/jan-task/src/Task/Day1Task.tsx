import React, { useState } from "react"
import type { userData } from '../Typescript/Interface'
import type { profileData, AdminData } from '../Typescript/Interface'


const Day1Task: React.FC = () => {

    return (
        <>
            <h1>1. Create a counter app with Increment / Decrement / Reset</h1>
            <Counter />
            <h1>2. Render users list using map()</h1>
            <RenderUser />
            <h1>3. Toggle Login / Logout</h1>
            <Toggle />
            <h1>4. Update profile object (name, age)</h1>
            <UpdateProfile />
            <h1>5. Conditional rendering (Admin / User)</h1>
            <ConRendering />
            <h1>6. Like Button</h1>
            <LikeBtn />
            <h1>7. Change background on click</h1>
            <ChangeBg />
            <h1>8. Add / Remove item in array</h1>
            <AddArray />
        </>
    )
}

export default Day1Task

//1. Create a Counter App

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    const Reset = () => {
        setCount(0)
    }

    return (<>

        <div className="p-3">
            <div >
                <button onClick={Increment} className="bg-green-500 text-white  rounded">Increment</button>
            </div>
            <p>{count}</p>
            <div>
                <button onClick={Decrement} className="bg-blue-500 text-white  rounded mb-5">Decrement</button>
            </div>
            <div>
                <button onClick={Reset} className="bg-red-500 text-white rounded">Reset</button>
            </div>
        </div>

    </>)
};

// 2 . Render users list using map()

const RenderUser = () => {
    const [user, setUser] = useState<userData>({ userName: "", age: "", email: "", mobile: "", password: "" })

    const getInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setUser((user: userData) => ({ ...user, [name]: value }))

    }

    const getUserData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        // const showData =

    }

    // const storeString = JSON.stringify(user)

    // const setLocal = localStorage.setItem("userData", storeString)

    // const getLocalData= JSON.parse(localStorage.getItem("userData"))
    // console.log(getLocalData)

    return (<>
        <div >
            <form onSubmit={getUserData} className="flex flex-col gap-5 justify-center">
                <div>
                    <label>Name :</label>
                    <input className="border" type="text" onChange={getInputData} name="userName" />
                </div>
                <div>
                    <label>Age :</label>
                    <input className="border" type="text" onChange={getInputData} name="age" />
                </div>
                <div>
                    <label>Email :</label>
                    <input type="email" className="border" onChange={getInputData} name="email" />
                </div>
                <div>
                    <label>Mobile :</label>
                    <input type="number" className="border" onChange={getInputData} name="mobile" />
                </div>
                <div>
                    <label>Password :</label>
                    <input type="password" className="border" onChange={getInputData} name="password" />
                </div>
                <input type="submit" />
            </form>
            <div>
                <h1>UserName :{user.userName}</h1>
                <h1>Age :{user.age}</h1>
                <h1>Email :{user.email}</h1>
                <h1>Mobile :{user.mobile}</h1>
                <h1>Password :{user.password}</h1>
            </div>
        </div>

    </>)
}

// 3. Toggle Login / Logout

export const Toggle = () => {
    const [loginsts, setLoginsts] = useState<boolean>(false)

    const handleClick = () => {
        setLoginsts(!loginsts)
    }

    return (<>
        <button onClick={handleClick} className={loginsts ? "bg-green-500 px-3 py-1 text-white rounded" : "bg-red-500 px-3 py-1 text-white rounded"}>{loginsts ? "Login" : "Logout"}</button >
    </>)
}

// 4. Update profile object (name, age)

export const UpdateProfile = () => {

    const [profile, setProfile] = useState<profileData>(
        { profileName: "", age: "" }
    )

    const getDataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setProfile((profile: profileData) => ({ ...profile, [name]: value }))
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(profile)
    }

    return (<>
        <form onSubmit={submitForm}>
            <label>Name :</label>
            <input type="text" name="profileName" onChange={getDataInput} />
            <label>Age :</label>
            <input type="text" name="age" onChange={getDataInput} />
            <input type="submit" value="Register" />
        </form>
    </>)
}

// 5. Conditional rendering (Admin / User)

export const ConRendering = () => {

    const [admin, setAdmin] = useState<AdminData>({ name: "", age: "", role: "" })
    const [finalData, setFinalData] = useState({ name: "", age: "", role: "" });
    const [showData, setShowData] = useState<boolean>(false)

    const Inputval = (e: any) => {
        const { name, value } = e.target;
        setAdmin((admin) => ({ ...admin, [name]: value }))
    }

    const getAdmin = (e: React.FormEvent) => {
        e.preventDefault();
        setFinalData(admin)
        console.log(admin)
        setShowData(true)
    }

    return (<>
        <div>
            <form onSubmit={getAdmin}>
                <div>
                    <label>Name :</label>
                    <input type="text" name="name" className="border mb-5" onChange={Inputval} />
                </div>
                <div>
                    <label>Age :</label>
                    <input type="text" name="age" className="border" onChange={Inputval} />
                </div>
                <div>
                    <label>Role :</label>
                    <select name="role" onClick={Inputval} >
                        <option value="" disabled>Select Any one</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <input type="submit" />
            </form>
        </div>

        <div>
            {showData && (
                <>
                    {finalData.role === "admin" ? (
                        <div>
                            <h1>This is a {finalData.role} Details </h1>
                            <p>Admin Name :{finalData.name}</p>
                            <p>Admin Age :{finalData.age}</p>
                            <p>Admin Role :{finalData.role}</p>
                        </div>
                    ) : (
                        <div>
                            <h1>This is a {finalData.role}  Details</h1>
                            <p>User Name :{finalData.name}</p>
                            <p>User Age {finalData.age}</p>
                            <p>User Role :{finalData.role}</p>
                        </div>
                    )}
                </>
            )}
        </div>
    </>)
}

// 6. Like button

export const LikeBtn = () => {
    const [like, setLike] = useState<boolean>(false)

    return (<>
        <button onDoubleClick={() => setLike(true)} className={like ? "bg-green-400 px-5 py-2 font-bold" : "bg-red-400 px-5 py-2 font-bold"}>{like ? "Liked" : "like"} </button>
    </>)

}

// 7. Change background on click

export const ChangeBg = () => {

    const [bg, setBg] = useState<string>("")

    const [showBox, setShowBox] = useState(false)

    const getColorValue = (e: any) => {
        setBg(e.target.value)
        console.log(bg)
    }

    const getColor = (e: any) => {
        e.preventDefault()
        setBg(e.target.value)
        setShowBox(true)
    }


    return (<>
        <form onSubmit={getColor}>
            <label>Choose a color</label>
            <select onClick={getColorValue} name="color">
                <option value="" disabled>Select Color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
            <input type="submit" value="Show Box" />
        </form>
        {showBox && <>
            {bg === "red" && <div className="bg-red-600 text-white p-5 w-50 h-50">Red Box</div>}
            {bg === "blue" && <div className="bg-blue-600 text-white p-5 w-50 h-50">Blue Box</div>}
            {bg === "yellow" && <div className="bg-yellow-600 text-white p-5 w-50 h-50">Yellow Box</div>}
            {bg === "black" && <div className="bg-black text-white p-5 w-50 h-50">Black Box</div>}
            {bg === "green" && <div className="bg-green-600 text-white p-5 w-50 h-50">Green Box</div>}
        </>}
    </>)
}

//8.Add / Remove item in array


export const AddArray = () => {

    const [product, setProduct] = useState(
        { id: "", productName: "", price: "", qty: "" },
    );

    const [newProduct, setNewProduct] = useState<any[]>([])

    const getProductInput = (e: any) => {
        const { name, value } = e.target;

        setProduct((product: any) => ({ ...product, [name]: value }))
    }
    const getProduct = (e: any) => {
        e.preventDefault();

        console.log(product)

        setNewProduct((newProduct) => ([...newProduct, product]))

        setProduct({ id: "", productName: "", price: "", qty: "" })
    }

    return (<>
        <form onSubmit={getProduct}>
            <div>
                <label>Product Id :</label>
                <input type="text" onChange={getProductInput} name="id" className="border" />
            </div>
            <div>
                <label>Product Name :</label>
                <input type="text" onChange={getProductInput} name="productName" className="border" />
            </div>
            <div>
                <label>Product Price :</label>
                <input type="text" onChange={getProductInput} name="price" className="border" />
            </div>
            <div>
                <label>Product Qty :</label>
                <input type="text" onChange={getProductInput} name="qty" className="border" />
            </div>
            <input type="submit" value="Add Product" />
        </form>
        <div>
            {newProduct.map((e: any, i: number) => (
                <div key={i}>
                    <h1>{e.id}</h1>
                    <h1>{e.productName}</h1>
                    <h1>{e.price}</h1>
                    <h1>{e.qty}</h1>
                </div>

            ))}
        </div>
    </>)
}
