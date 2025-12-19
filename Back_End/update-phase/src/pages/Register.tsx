const Register = () => {
    return (<>
        <div className="text-black bg-amber-100 h-100">
            <form>
                <div>
                    <label>Name : </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Age : </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email : </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Password : </label>
                    <input type="text" />
                </div>
                <div>
                    <label>Confirm Password : </label>
                    <input type="text" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    </>)
};

export default Register;
