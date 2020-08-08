import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../services/actions";
import Alert from "../../../components/Alert";

export default function Login() {
  const dispatch = useDispatch();

  const formDefaultValues = {
    email: "",
    password: "",
  };

  const errors = {
    email: false,
    password: false,
    emailNotValid: false,
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const [errorsValues, setErrorsValues] = useState(errors);
  const { email, password } = formValues;

  const { error } = useSelector((state) => state.auth);

  function handleChange(e) {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.email) {
      setErrorsValues((prevState) => ({
        ...prevState,
        email: true,
      }));
    }

    if (!formValues.password) {
      setErrorsValues((prevState) => ({
        ...prevState,
        password: true,
      }));
    }

    if (!error) {
      setErrorsValues((prevState) => ({
        ...prevState,
        emailNotValid: true,
      }));
    }
    dispatch(actions.login(formValues));
  };

  const closeAlert = () => {
    setErrorsValues((prevState) => ({
      ...prevState,
      email: false,
      password: false,
      emailNotValid: false,
    }));
  };
  return (
    <React.Fragment>
      {!!errorsValues.email && (
        <Alert message="Please fill out the email field!" close={closeAlert} />
      )}
      {!!errorsValues.password && (
        <Alert
          message="Please fill out the password field!"
          close={closeAlert}
        />
      )}

      {!!error
        ? !!errorsValues.emailNotValid && (
            <Alert message="User credentials are wrong!" close={closeAlert} />
          )
        : null}
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
                  required
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
                  required
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
