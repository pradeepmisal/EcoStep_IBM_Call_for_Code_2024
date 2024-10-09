import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "./Auth.css";
import signupImage from "../../assets/images/signup-image.jpg";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
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
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log(res_data);

      const newErrors = {};
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          password: "",
        });
        navigate("/");
      } else if (res_data.error) {
        res_data.error.forEach((error) => {
          const field = error.path[0];
          const message = error.message;
          newErrors[field] = message;
        });
        setErrors(newErrors);
      } else {
        {
          newErrors.global = res_data.message;
          setErrors(newErrors);
        }
      }
    } catch (error) {
      console.log("Register Error: " + error);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-image">
        <img src={signupImage} alt="Sign Up" />
      </div>
      <div className="auth-container">
        <h2 className="auth-title">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {errors.global && <p className="error-message">{errors.global}</p>}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              name="username"
              value={user.username}
              onChange={handleInput}
              required
            />
            {errors.username && (
              <p className="error-message">{errors.username}</p>
            )}
          </div>
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
          <button type="submit">Sign Up</button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
