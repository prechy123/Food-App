import React, { useState } from "react";

export default function LoginSignup({
  signup,
  login,
  createAccount,
  loginAccount,
}) {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loadingState, setLoadingState] = useState(false);
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setLoadingState(true);
    createAccount(signupEmail, signupPassword);
    setSignupEmail("");
    setSignupPassword("");
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoadingState(true);
    setTimeout(() => {
      loginAccount(loginEmail, loginPassword);
    }, 2000);
    setLoginEmail("");
    setLoginPassword("");
  };
  return (
    <>
      {loadingState ? (
        // "loading..."
        <div className="loading-state">
          loading...
          <span></span>
        </div>
      ) : (
        <>
          {signup && (
            <div className="signup">
              <h2>Create a new account</h2>
              <form method="post" onSubmit={handleSignupSubmit}>
                <div className="inputbox">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    required
                  />
                  <span>Email Address</span>
                </div>
                <div className="inputbox">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    minLength={10}
                    required
                  />
                  <span>Password</span>
                </div>
                <input type="submit" value="Signup" id="submit" />
              </form>
            </div>
          )}
          {login && (
            <div className="login">
              <h2>Log in to account</h2>
              <form method="post" onSubmit={handleLoginSubmit}>
                <div className="inputbox">
                  <input
                    id="email"
                    type="email"
                    name="username"
                    onChange={(e) => setLoginEmail(e.target.value)}
                    value={loginEmail}
                    required
                  />
                  <span>Email Address</span>
                </div>
                <div className="inputbox">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                    value={loginPassword}
                    minLength={10}
                    required
                  />
                  <span>Password</span>
                </div>
                <input type="submit" value="Login" id="submit" />
              </form>
            </div>
          )}
        </>
      )}
    </>
  );
}
