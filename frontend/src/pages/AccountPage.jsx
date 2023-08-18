import React, { useState } from "react";
import LoginSignup from "../components/LoginSignup";
import axios from "axios";

export default function AccountPage() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const handleLogin = () => {
    setLogin(!login);
    if (signup) {
      setSignup(!signup);
    }
  };
  const handleSignup = () => {
    setSignup(!signup);
    if (login) {
      setLogin(!login);
    }
  };
  const createAccount = async (email, password) => {
    const account = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:4000/signupAccount",
        account
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginAccount = async (email, password) => {
    const account = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:4000/loginAccount",
        account
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section id="account-page">
      <h1>
        Already have an account <button onClick={handleLogin}>login</button>, if
        not <button onClick={handleSignup}>Signup</button>
      </h1>
      <LoginSignup
        login={login}
        signup={signup}
        createAccount={createAccount}
        loginAccount={loginAccount}
      />
    </section>
  );
}
