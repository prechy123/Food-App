import React, { useState } from "react";

export default function LoginSignup({ signup, login }) {
  const [signupText, setSignupText] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const handleSubmitSignup = (e) => {
    e.preventDefault();
    console.log(signupText, signupPassword);
  };
  const [loginText, setLoginText] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log(loginText, loginPassword);
  };
  return (
    <>
      {signup && (
        <div className="Signup">
          <form method="post" onSubmit={handleSubmitSignup}>
            <input
              type="text"
              name="username"
              value={signupText}
              onChange={(e) => setSignupText(e.target.value)}
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
          <form method="post" onSubmit={handleSubmitLogin}>
            <input
              type="text"
              name="username"
              onChange={(e) => setLoginText(e.target.value)}
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
    </>
  );
}
