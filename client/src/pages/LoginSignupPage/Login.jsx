import { API_URL } from "../../constants";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "./Auth.css";
import loginImage from "../../assets/images/login-image.jpg";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        const newErrors = {};
        res_data.error.forEach((error) => {
          const field = error.path[0];
          const message = error.message;
          newErrors[field] = message;
        });
        setErrors(newErrors);
      }
    } catch (error) {
      console.log("Login Error: " + error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-image">
        <img src={loginImage} alt="Login" />
      </div>
      <div className="auth-container">
        <h2 className="auth-title">Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          {errors.global && <p>{errors.global}</p>}
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInput}
              required
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>
          <button type="submit">Login</button>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
