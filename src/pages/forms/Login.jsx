import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Form Submit
  const formSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");
  };

  // Show Password
  const showpassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <h1 className="form-title">Login to your account</h1>
      <form onSubmit={formSubmit} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="Your Password"
        />
        {showPassword ? (
          <BsEyeSlashFill
            onClick={showpassword}
            className="show-password-icon"
          />
        ) : (
          <BsEyeFill onClick={showpassword} className="show-password-icon" />
        )}

        <button className="form-btn">Login</button>
      </form>
      <div className="form-footer">
        Don't have an account? {""}
        <Link to="/register" className="forms-link">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Login;
