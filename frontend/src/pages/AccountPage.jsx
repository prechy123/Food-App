import React, { useState } from "react";
import LoginSignup from "../components/LoginSignup";
import FooterLayout from "../layouts/FooterLayout";
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
    //add credentials: 'include' for axios
    try {
      const response = await axios.post(
        "http://127.0.0.1:4000/signupAccount",
        account,
        { withCredentials: true }
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
        account,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <section id="account-page">
        <div>
          <div className="title">
            <h1>Already have an account </h1>
            <div>
              <button onClick={handleLogin}>
                <span></span>login
              </button>
              <button onClick={handleSignup}>
                <span></span>Signup
              </button>
            </div>
          </div>
          <div className="login-signup">
            <LoginSignup
              login={login}
              signup={signup}
              createAccount={createAccount}
              loginAccount={loginAccount}
            />
          </div>
        </div>
      </section>
      <FooterLayout />
    </>
  );
}
