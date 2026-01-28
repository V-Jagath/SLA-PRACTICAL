import { useNavigate } from 'react-router-dom'
import useGetFormData from '../form/useGetFormData'
import { useEffect, useState } from 'react'

const LoginForm = () => {

    const navigate = useNavigate()

    const { getInputData, inputData } = useGetFormData("")
    const [localData, setLocalData] = useState(null)

    const getFormData = (e) => {
        e.preventDefault();

        setLocalData(JSON.parse(localStorage.getItem("regFormData")));

        if (!localData) {
            alert("No registered user data found!");
            return;
        }

        if (inputData.email !== localData.email) {
            alert("Email mismatch");
        } else if (inputData.password !== localData.password) {
            alert("Password mismatch");
        } else {
            alert("Successfully Login")
            navigate("/homefrompage");
        }
    };

    return (
        <>
            <form onSubmit={getFormData}>
                <label>Email :</label>
                <input type="email" name="email" onChange={getInputData} />
                <label>Password :</label>
                <input type="password" name='password' onChange={getInputData} />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default LoginForm;

