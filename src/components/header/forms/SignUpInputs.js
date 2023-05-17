import { useState } from "react";
import supabase from "../../../supabase/setup";
// import FormBtns from "./FormBtns";
export default function SignUpInputs({ isActive, setIsActive }) {
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
    // final error check pre-submission
    for (let key in errors) {
      if (!errors[key]) {
        e.preventDefault();
        return false;
      } else {
        const { data, error } = await supabase.auth.signUp({
          email: values.email,
          password: values.pwd,
        });

        if (error) {
          console.log(error);
        } else if (data) {
          // TODO
          // create a state variable to hold request success
          // prevent the default behaviour
          // if request succeeds, update request success state
          // conditionally render form:
          // if request success state is false, render form
          // else, render elements which tell the user to check their email
          // user navigates to email and clicks link, thus taking them to the app
          console.log(data);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        {/* <div>
          <label htmlFor="uname">
            Username <span>*</span>
          </label>
          <input
            type="text"
            id="uname"
            minLength="3"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            required
          />
          {!errors.uname ? (
            <p className="error" style={{ color: "red" }}>
              {errorMessages.uname}
            </p>
          ) : null}
        </div> */}

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
          {!errors.cpwd ? <p className="error">{errorMessages.cpwd}</p> : null}
        </div>
      </fieldset>

      <div className="modal-btns">
        <button type="submit" className="blue">
          Continue
        </button>

        <button
          type="button"
          className="red"
          onClick={() => setIsActive(!isActive)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
