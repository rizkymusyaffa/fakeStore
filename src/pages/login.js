import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import LoginChecker from "../utils/LoginChecker";
import "../utils/styles/login.css"

const Login = () => {
  const navigate = useNavigate();

  const { users } = useSelector((state) => state.persistedReducer.users);
  const error = useSelector((state) => state.persistedReducer.login.errorMessage)
  const {isLogin, isAdmin} = LoginChecker();
  console.log(isLogin)

  useEffect(() => {
    if(isLogin){
      navigate('/home')
    }
  })
  return (
    <div className="Login">
      <LoginForm Login={Login} error={error} />
    </div>
  );
};

export default Login;
