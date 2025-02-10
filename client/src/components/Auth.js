import React, { useState } from "react";
import axios from "axios";
import "../styles/Auth.css";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin ? "/api/auth/login" : "/api/auth/register";

    // Basic validation
    if (!isLogin) {
      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }
      if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return;
      }
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits.");
        return;
      }
      if (new Date(dob) >= new Date()) {
        alert("Date of birth cannot be a future date.");
        return;
      }
    }

    try {
      const response = await axios.post(url, {
        name,
        email,
        phone,
        username,
        password,
        dob,
      });
      localStorage.setItem("token", response.data.token);
      // Handle successful login/registration (e.g., redirect to gallery)
    } catch (error) {
      console.error("Error during authentication:", error);
      alert("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
            />
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={new Date().toISOString().split("T")[0]} // Prevent future dates
              required
            />
          </>
        )}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        {!isLogin && (
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        )}
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
        <br></br>
        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
