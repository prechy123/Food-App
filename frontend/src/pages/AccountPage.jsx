import React, { useState } from "react";
import LoginSignup from "../components/LoginSignup";
import FooterLayout from "../layouts/FooterLayout";
import axios from "axios";
import Cookies from "js-cookie";
import expirationTime from "../calculate/expirationTime";
import SaveAccountCom from "../components/SaveAccountCom";

export default function AccountPage() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
        account,
        { withCredentials: true }
      );
      console.log(response.data.message);
      Cookies.set("token", response.data.token, {
        expires: expirationTime(),
        sameSite: "None",
        secure: true,
      });
      if (Cookies.get("token") === response.data.token) {
        setIsAuthenticated(true);
      }
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
      console.log(response.data.message);
      Cookies.set("token", response.data.token, {
        expires: expirationTime(),
        sameSite: "None",
        secure: true,
      });
      if (Cookies.get("token") === response.data.token) {
        setIsAuthenticated(true);
      }

      console.log(response.data.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  useState(() => {
    const token = Cookies.get("token");
    if (token) {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = tokenData.exp * 1000;
      if (expirationTime > Date.now()) {
        console.log("Token is still valid");
        setIsAuthenticated(true);
      } else {
        console.log("Token has expired");
        setIsAuthenticated(false);
      }
    } else {
      console.log("Token not found");
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <>
      <section id="account-page">
        {isAuthenticated ? (
          <SaveAccountCom />
        ) : (
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
        )}
      </section>
      <FooterLayout />
    </>
  );
}
