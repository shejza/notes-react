import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";

export default function Login() {
  const dispatch = useDispatch();

  const formDefaultValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const { email, password } = formValues;

  function handleChange(e) {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(actions.login(formValues));
  };

  return (
    <React.Fragment>
      <div className="login">
        <section className="login__left">
          <div className="header">
            <h4>Take Notes</h4>
            <div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="login__right">
            <form className="form" onSubmit={handleSubmit}>
              <h4 className="login__header">Log in to Notes</h4>
              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  id="email"
                  tabindex="1"
                  value={email}
                  name={"email"}
                  onChange={handleChange}
                />
                <label for="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  id="password"
                  tabindex="1"
                  value={password}
                  name={"password"}
                  onChange={handleChange}
                />
                <label for="password" className="form__label">
                  Password
                </label>
              </div>

              <button className="btn btn--primary" tabindex="5">
                Log In
              </button>

              <div className="wrapper-of-no-account">
                <h4 className="font__large">Don’t have an account?</h4>
                <Link
                  to={{
                    pathname: "/register",
                  }}
                  tabIndex="-1"
                  className="btn--link-no-outline"
                >
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
