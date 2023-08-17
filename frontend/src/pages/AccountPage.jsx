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
  const enterAccount = async (email, password) => {
    const account = {
      email,
      password,
    };
    const response = await axios.post("/user", account);
    console.log(response.data);
    if (!response.ok) {
      console.log(response.data.error);
    }
  };

  return (
    <section id="account-page">
      <h1>
        Already have an account <button onClick={handleLogin}>login</button>, if
        not <button onClick={handleSignup}>Signup</button>
      </h1>
      <LoginSignup login={login} signup={signup} enterAccount={enterAccount} />
    </section>
  );
}
