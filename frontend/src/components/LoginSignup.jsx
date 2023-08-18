import React, { useState } from "react";

export default function LoginSignup({ signup, login, createAccount, loginAccount }) {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    createAccount(signupEmail, signupPassword);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    loginAccount(loginEmail, loginPassword);
  };
  return (
    <>
      {signup && (
        <div className="Signup">
          <form method="post" onSubmit={handleSignupSubmit}>
            <input
              type="email"
              name="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
            />
            <input type="submit" value="Signup" />
          </form>
        </div>
      )}
      {login && (
        <div className="login">
          <form method="post" onSubmit={handleLoginSubmit}>
            <input
              type="text"
              name="username"
              onChange={(e) => setLoginEmail(e.target.value)}
              value={loginEmail}
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
    </>
  );
}
