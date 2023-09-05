import React, { useState } from "react";
import LoginSignup from "../components/LoginSignup";
import FooterLayout from "../layouts/FooterLayout";
import axios from "axios";
import Cookies from "js-cookie";
import expirationTime from "../calculate/expirationTime";
import SaveAccountCom from "./SaveAccountContent";
import { motion } from "framer-motion";

const sectionVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};
const accountVariants = {
  initial: {
    x: "100vw",
  },
  animate: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function AccountPage() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokenData, setTokenData] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const [message, setMessage] = useState("");
  const handleLogin = () => {
    setLogin(!login);
    if (signup) {
      setSignup(!signup);
    }
    setMessage("");
  };
  const handleSignup = () => {
    setSignup(!signup);
    if (login) {
      setLogin(!login);
    }
    setMessage("");
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
      const message = response.data.message;

      if (message === "Email exists") {
        setLoadingState(false);
        setMessage("Account already exist, Login or Try another email");
      }
      if (response.data.token === undefined) {
        return console.log("Undefined");
      }
      Cookies.set("token", response.data.token, {
        expires: expirationTime(),
        sameSite: "None",
        secure: true,
      });
      if (Cookies.get("token") === response.data.token) {
        setIsAuthenticated(true);
        setTokenData(response.data.token);
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
      const message = response.data.message;
      if (message === "Email does not exist") {
        setMessage(
          "Email address does not exist... Try another email address or create a new account"
        );
        setLoadingState(false);
      }
      if (message === "Incorrect password") {
        setMessage(
          "Incorrect password entered.... Try another password or Create a new account"
        );
        setLoadingState(false);
      }
      if (response.data.token === undefined) {
        return console.log("Undefined");
      }
      Cookies.set("token", response.data.token, {
        expires: expirationTime(),
        sameSite: "None",
        secure: true,
      });

      if (Cookies.get("token") === response.data.token) {
        setIsAuthenticated(true);
        setTokenData(response.data.token);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useState(() => {
    const token = Cookies.get("token");
    if (token) {
      const tokenData = JSON.parse(atob(token.split(".")[1]));
      //atob is a built-in javascipt used to decodes a base64-encoded string
      const expirationTime = tokenData.exp * 1000;
      if (expirationTime > Date.now()) {
        console.log("Token is still valid");
        setIsAuthenticated(true);
        setTokenData(token);
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
      {isAuthenticated ? (
        <SaveAccountCom tokenData={tokenData} />
      ) : (
        <>
          <section id="account-page">
            <motion.div
              variants={sectionVariants}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="title"
                variants={accountVariants}
                exit={{ x: "-100vw", ease: "easeInOut" }}
              >
                <h1>Already have an account </h1>
                <div>
                  <button onClick={handleLogin}>
                    <span className="first"></span>login
                  </button>
                  <button onClick={handleSignup}>
                    <span className="second"></span>Signup
                  </button>
                </div>
              </motion.div>
              <motion.div
                className="login-signup"
                variants={accountVariants}
                exit={{ x: "-100vw", ease: "easeInOut" }}
              >
                <LoginSignup
                  login={login}
                  signup={signup}
                  createAccount={createAccount}
                  loginAccount={loginAccount}
                  setLoadingState={setLoadingState}
                  loadingState={loadingState}
                  message={message}
                  setMessage={setMessage}
                />
              </motion.div>
            </motion.div>
          </section>
          <FooterLayout />
        </>
      )}
    </>
  );
}

//