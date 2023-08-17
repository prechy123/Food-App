import React, { useState } from "react";
import LoginSignup from "../components/LoginSignup";

export default function AccountPage() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
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
  function test(content) {
    console.log(content);
  }
  return (
    <section id="account-page">
      <h1>
        Already have an account <button onClick={handleLogin}>login</button>, if
        not <button onClick={handleSignup}>Signup</button>
      </h1>
      <LoginSignup login={login} signup={signup} test={test} />
    </section>
  );
}
