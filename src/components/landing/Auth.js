import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Auth() {
  const [form, setForm] = useState("login");

  return (
    <div className="sign-up-container">
      {form === "login" ? (
        <Login setForm={setForm} />
      ) : (
        <SignUp setForm={setForm} />
      )}
    </div>
  );
}
