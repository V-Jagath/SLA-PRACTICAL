
const Login = () => {
    return (<>
        <div className="bg-white text-black h-50 w-80 rounded">
            <form>
                <div className="p-3 ml-7">
                    <label>Email : </label>
                    <input type="text" className="border-2 rounded" />
                </div>
                <div className="p-3">
                    <label>Password : </label>
                    <input type="password" className="border-2 rounded" />
                </div>
                <div className="flex justify-center">
                    <button className="bg-black text-white font-semibold p-1 rounded">Login</button>
                </div>
            </form>
        </div>
    </>)
};

export default Login;

