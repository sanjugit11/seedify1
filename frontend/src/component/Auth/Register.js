import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/actions/authAction";

import "./Login.css";

const Register = () => {
  const dispatch = useDispatch();
  const {} = useSelector((state) => state);

  const initialState = { name: "", email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };
  return (
    <div className="Login">
      <h2 className="login_title">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="login__form">
          <input
          className="field"
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChangeInput}
          />
          <input
          className="field"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleChangeInput}
          />
          <input
          className="field"
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChangeInput}
          />
          <button className="login_button" type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
