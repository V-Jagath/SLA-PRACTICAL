import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            navigate("/login");
            return;
        }

        const fetchUser = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/api/users/showUser/${userId}`
                );
                const data = await res.json();

                if (data.success) {
                    setUser(data.user);
                } else {
                    navigate("/login");
                }
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchUser();
    }, [userId, navigate]);

    const handleUpdate = async () => {
        try {
            await fetch(
                `http://localhost:5000/api/users/updateUser/${userId}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: user.name })
                }
            );

            alert("User Updated Successfully");
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async () => {
        try {
            await fetch(
                `http://localhost:5000/api/users/deleteUser/${userId}`,
                { method: "DELETE" }
            );

            localStorage.removeItem("userId");
            navigate("/login");
        } catch (error) {
            console.error(error);
        }
    };

    if (!user) return <h3>Loading...</h3>;

    return (
        <>
            <h1>Home Page</h1>

            <input
                value={user.name}
                onChange={(e) =>
                    setUser({ ...user, name: e.target.value })
                }
            />

            <p>Email: {user.email}</p>

            <button onClick={handleUpdate}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};

export default Home;
