import { useState } from "react";
import supabase from "../../supabase/setup";
import { useNavigate } from "react-router-dom";
export default function Login({ setForm }) {
  const [authError, setAuthError] = useState(false);
  const navigate = useNavigate();
  const errorString =
    "Invalid username or password. Please check your credentials and try again.";

  const [values, setValues] = useState({
    email: "",
    pwd: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // because of the async code, form submits and refreshes page before async request resolves
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.pwd,
    });
    if (error) {
      console.log(error);
      setAuthError(true);
      return false;
    } else if (data) {
      return navigate("/stage");
    }
  };

  return (
    <>
      <div className="welcome-msg">
        <h2>Welcome back!</h2>
        <p>Login below to see your todo list.</p>
      </div>

      <form className="landing-form" onSubmit={handleSubmit}>
        {authError ? (
          <p
            style={{
              color: "var(--red)",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            {errorString}
          </p>
        ) : null}
        <fieldset>
          <div>
            <label htmlFor="uname">
              Email <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              onChange={handleChange}
              minLength="3"
              autoComplete="off"
              placeholder="Enter your email"
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <div>
            <label htmlFor="pwd">
              Password <span>*</span>
            </label>
            <input
              type="password"
              id="pwd"
              onChange={handleChange}
              minLength={8}
              autoComplete="off"
              placeholder="Enter your password"
              required
            />
          </div>
        </fieldset>

        <div className="auth-btn">
          <button type="submit" className="blue">
            Login
          </button>
        </div>
      </form>

      <div className="switch">
        Don't have an account?
        <button
          type="button"
          tabIndex={0}
          onClick={() => {
            setForm("sign-up");
          }}
          className="form-highlight"
        >
          {" "}
          Sign Up
        </button>
      </div>
    </>
  );
}
