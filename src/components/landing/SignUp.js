import "./landing.css";
import { useState } from "react";
import supabase from "../../supabase/setup";
import Success from "./Success";

export default function SignUp({ setForm }) {
  const [registered, setRegistered] = useState(false);

  const [values, setValues] = useState({
    // uname: "",
    email: "",
    pwd: "",
    cpwd: "",
  });

  const [errors, setErrors] = useState({
    // uname: true,
    email: true,
    pwd: true,
    cpwd: true,
  });

  const errorMessages = {
    uname: "Usernames must be greater than 3 characters long.",
    email: "Invalid entry - please check the format and try again.",
    pwd: "Passwords should be at least 8 characters long.",
    cpwd: "Passwords do not match.",
  };

  const handleChange = (e) => {
    const nextValues = { ...values, [e.target.id]: e.target.value };
    setValues(nextValues);
    setErrors({
      ...errors,
      [e.target.id]:
        e.target.id !== "cpwd"
          ? e.target.validity.valid
          : nextValues.pwd === nextValues.cpwd,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // final error check pre-submission
    for (let key in errors) {
      if (!errors[key]) {
        return false;
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.pwd,
        });

        if (error) {
          console.log(error);
        } else if (data) {
          setRegistered(true);
        }
      }
    }
  };

  return registered ? (
    <Success />
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              required
            />
            {!errors.email ? (
              <p className="error">{errorMessages.email}</p>
            ) : null}
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
              minLength={8}
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              required
            />
            {!errors.pwd ? <p className="error">{errorMessages.pwd}</p> : null}
          </div>

          <div>
            <label htmlFor="cpwd">
              Confirm <span>*</span>
            </label>
            <input
              type="password"
              id="cpwd"
              onChange={(e) => handleChange(e)}
              autoComplete="off"
              required
            />
            {!errors.cpwd ? (
              <p className="error">{errorMessages.cpwd}</p>
            ) : null}
          </div>
        </fieldset>

        <div className="modal-btns">
          <button type="submit" className="blue">
            Sign Up
          </button>
        </div>
      </form>

      <div className="signup-modal-switch">
        Already have an account?
        <button
          type="button"
          tabIndex={0}
          onClick={() => {
            setForm("login");
          }}
          className="form-highlight"
        >
          {" "}
          Login
        </button>
      </div>
    </>
  );
}
