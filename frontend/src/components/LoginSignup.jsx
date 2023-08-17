import React, { useState } from "react";

export default function LoginSignup({ signup, login }) {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, Password);
  };
  return (
    <>
      {signup && (
        <div className="Signup">
          <form method="post" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" value="Signup" />
          </form>
        </div>
      )}
      {login && (
        <div className="login">
          <form method="post" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={Password}
            />
            <input type="submit" value="Login" />
          </form>
        </div>
      )}
    </>
  );
}
