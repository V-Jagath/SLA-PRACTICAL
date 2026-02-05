import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const getFormData = async (e) => {
        e.preventDefault();

        if (!input.email || !input.password) {
            alert("All fields are required");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(
                "http://localhost:5000/api/userData/checkUser",
                input,
                { headers: { "Content-Type": "application/json" } }
            );

            if (res.data.success) {
                // ✅ STORE USER ID
                localStorage.setItem("userId", res.data.user._id);

                alert("Login Successful");
                navigate("/home");
            } else {
                alert(res.data.message);
            }

        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto" }}>
            <h2>Login</h2>

            <form onSubmit={getFormData}>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={getInput}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={getInput}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default Login;
