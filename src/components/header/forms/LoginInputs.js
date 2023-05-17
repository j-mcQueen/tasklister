import { useState } from "react";
import supabase from "../../../supabase/setup";
export default function LoginInputs({ isActive, setIsActive }) {
  const [authError, setAuthError] = useState(false);
  const errorString =
    "Invalid username and password. Please check your credentials and try again.";

  const [values, setValues] = useState({
    email: "",
    pwd: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // because of the async code, form submits and refreshes page before async request resolves
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.pwd,
    });
    if (error) {
      e.preventDefault();
      console.log(error);
      setAuthError(true);
      return false;
    } else if (data) {
      console.log(data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {authError ? <p style={{ color: "red" }}>{errorString}</p> : null}
      <fieldset>
        <div>
          <label htmlFor="uname">Email *</label>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            minLength="3"
            autoComplete="off"
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <div>
          <label htmlFor="pwd">Password *</label>
          <input
            type="password"
            id="pwd"
            onChange={handleChange}
            minLength={8}
            autoComplete="off"
            required
          />
        </div>
      </fieldset>
    </form>
  );
}
