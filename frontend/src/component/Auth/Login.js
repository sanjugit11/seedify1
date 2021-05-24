import React, { useState, useEffect } from "react";
import { login } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import "./Login.css";
import logo from "../../images/Logo.png";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (auth.role) history.push("/admin/upcommingpool");
  }, [auth, history]);

  // useEffect(() => {
  //   if(auth.token){
  //     if(auth.token && auth.role){
  //       history.push("/admin")
  //     }else{
  //       history.push("/")
  //     }
  //   }else{
  //     history.push("/login")
  //   }
  // },[auth, history])

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };
  return (
      <div className="login">
      <img src={logo} class="login-logo" alt="" />
     
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="sperate-box">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChangeInput}
          />
        </div>
        <div className="sperate-box">
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChangeInput}
          />
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
