import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";  
import styles from "./styles.module.css";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();  

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/auth";
            const { data: res } = await axios.post(url, data);
            console.log("Response: ", res);
            localStorage.setItem("token", res.token);
            navigate("/");
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || "An error occurred");
                console.error("Error response:", error.response.data);
            } else {
                setError("Something went wrong. Please try again.");
                console.error("Error:", error);
            }
        }
    };

    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1 className={styles.heading}>Welcome Back</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>
                            Sign In
                        </button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.right_heading}>New Here?</h1>
                    <Link to="/signup">
                        <button type="button" className={styles.white_btn}>
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
