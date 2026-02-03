const HomePage = () => {

    const localGetData = JSON.parse(localStorage.getItem('registerData'))

    const editDatas = () => {

    }

    return (
        <>
            <h1>Datas Page</h1>

            <ul>
                <li>Name : {localGetData.name}</li>
                <li>Email id : {localGetData.email}</li>
                <li>password : {localGetData.password}</li>
                <button onClick={editDatas} >Edit Datas</button>
            </ul>

        </>
    )
}

export default HomePage
