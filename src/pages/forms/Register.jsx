import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Forms.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  // Form Submit
  const formSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (userName.trim() === "") return toast.error("UserName is required");
    if (password.trim() === "") return toast.error("Password is required");
  };

  return (
    <div className="form-wrapper">
      <ToastContainer theme="colored" />
      <h1 className="form-title">Create New account</h1>
      <form onSubmit={formSubmit} className="form">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your Email"
        />
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Your UserName"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Your Password"
        />
        <button className="form-btn">Register</button>
      </form>
      <div className="form-footer">
        Already have an account? {""}
        <Link to="/login" className="forms-link">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
