import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/actions";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "demo" && password === "demo") {
      dispatch(loginSuccess());
      Navigate("/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
