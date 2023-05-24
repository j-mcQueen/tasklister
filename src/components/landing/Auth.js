import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Auth() {
  const [form, setForm] = useState("login");

  return (
    <div className="sign-up-container">
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      {form === "login" ? (
        <Login setForm={setForm} />
      ) : (
        <SignUp setForm={setForm} />
      )}
    </div>
  );
}
