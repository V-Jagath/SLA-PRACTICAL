import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        repassword: ""
    });

    const navigate = useNavigate();

    const getInput = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const getFormData = async (e) => {
        e.preventDefault();

        if (input.password !== input.repassword) {
            alert("Password mismatch");
            return;
        }

        try {
            const res = await axios.post(
                "http://localhost:5000/api/userData/userCreate",
                {
                    name: input.name,
                    email: input.email,
                    gender: input.gender,
                    password: input.password
                }
            );

            if (res.data.success) {
                alert("Registration Successful");
                navigate("/login");
            }

        } catch (error) {
            alert(error.response?.data?.message || "Registration Failed");
        }
    };

    return (
        <form onSubmit={getFormData}>
            <h2>Register</h2>

            <label>Name</label>
            <input type="text" name="name" onChange={getInput} required />

            <label>Email</label>
            <input type="email" name="email" onChange={getInput} required />

            <label>Gender</label>
            <select name="gender" onChange={getInput} required>
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>

            <label>Password</label>
            <input type="password" name="password" onChange={getInput} required />

            <label>Re-enter Password</label>
            <input type="password" name="repassword" onChange={getInput} required />

            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
