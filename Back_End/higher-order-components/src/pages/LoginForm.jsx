import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const LoginForm = () => {

    const { getInputData, getLoginData } = useContext(UserContext);

    return (
        <>
            <div>
                <div>
                    <form onSubmit={getLoginData}>
                        <label>Name :</label>
                        <input type="text" onChange={getInputData} name="name" placeholder="Enter User Name" />
                        <label >Password</label>
                        <input type="text" onChange={getInputData} name="password" placeholder="Enter password" />
                        <input type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm;
