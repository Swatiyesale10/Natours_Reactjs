import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let item = { name, email, password, passwordConfirm };
    console.log(item);
    try {
      const res = await axios({
        method: "POST",
        url: "http://127.0.0.1:3000/api/v1/users/signup",
        data: { name, email, password, passwordConfirm },
      });
      localStorage.setItem("user", JSON.stringify(res));
      console.log("res", res);
      if (res.data.status === "success") {
        alert("Signed up successfully!");
        navigate("/home");
      }
    } catch (err) {
      console.log(err.response.data.message);
      alert(err.response.data.message);
    }
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>SignUp Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="name"
      />
      <br></br>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="email"
      />
      <br></br>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="password"
      />
      <br></br>
      <input
        type="password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        className="form-control"
        placeholder="password Confirm"
      />
      <br></br>
      <button onClick={signUp}>signUp</button>
    </div>
  );
}
export default SignUp;
