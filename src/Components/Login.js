import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function logIn() {
    try {
      const res = await axios({
        method: "POST",
        url: "http://127.0.0.1:3000/api/v1/users/login",
        data: { email, password },
      });
      console.log("res", res);
      localStorage.setItem("user", JSON.stringify(res));
      if (res.data.status === "success") {
        alert("Logged in successfully!");
        navigate("/Home");
      }
    } catch (err) {
      console.log(err.response.data.message);
      alert(err.response.data.message);
    }
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>Login page</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Your Email"
      />
      <br></br>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="Your Password"
      />
      <br></br>
      <button onClick={logIn}>Login</button>
    </div>
  );
}
export default Login;
