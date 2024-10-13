// src/Login.js
import { useContext, useState } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "../../context/AuthContext";
import Lottie from "react-lottie";
import login from "./login.json"

function Login() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });

      updateUser(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="left-side">
        {/* Background image */}
        {/* <img src="/bg.png" alt="Background" /> */}
        <div className="login-animation">
          <Lottie options={defaultOptions} />
        </div>
      </div>
      <div className="right-side">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h1>Welcome back!</h1>
            <input
              name="username"
              required
              minLength={3}
              maxLength={20}
              type="text"
              placeholder="Username"
            />
            <input
              name="password"
              type="password"
              required
              placeholder="Password"
            />
            <button type="submit" disabled={isLoading}>Login</button>
            {error && <span className="error">{error}</span>}
            <Link to="/register">Don't have an account?</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;