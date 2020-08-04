import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";

export default function Register() {
  const dispatch = useDispatch();

  const formDefaultValues = {
    email: "",
    name: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const { email, name, password } = formValues;

  function handleChange(e) {
    const target = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.register(formValues));
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
              <h4 className="login__header">Sign Up to Notes</h4>

              <div className="form__group">
                <input
                  type="name"
                  className="form__input"
                  id="name"
                  tabIndex="1"
                  value={name}
                  name={"name"}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="form__label">
                  Name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  id="email"
                  tabIndex="1"
                  value={email}
                  name={"email"}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>

              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  id="password"
                  tabIndex="1"
                  value={password}
                  name={"password"}
                  onChange={handleChange}
                />
                <label htmlFor="password" className="form__label">
                  Password
                </label>
              </div>

              <button className="btn btn--primary" tabIndex="5">
                Sign Up
              </button>

              <div className="wrapper-of-no-account">
                <h4 className="font__large">Don’t have an account?</h4>
                <Link
                  to={{
                    pathname: "/login",
                  }}
                  tabIndex="-1"
                  className="btn--link-no-outline"
                >
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
