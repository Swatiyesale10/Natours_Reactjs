import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav(abc) {
  console.log("abc", abc);
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/home");
  }
  return (
    <div>
      <br></br>
      <header>
        <NavLink to="/home"> All tours</NavLink>
        <br></br>

        {auth ? (
          <NavLink onClick={logout} to="/home">
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink to="/signUp"> SignUp </NavLink>
            <br></br>
            <NavLink to="/login"> Login </NavLink>
          </>
        )}
      </header>
    </div>
  );
}
export default Nav;
