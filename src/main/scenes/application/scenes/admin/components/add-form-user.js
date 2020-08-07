import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";

export default function AddUserForm() {
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
    dispatch(actions.createUser(formValues));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="edit-form-row">
        <input
          type="text"
          className="form__input"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          placeholder="Name"
        />

        <input
          type="email"
          className="form__input"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          className="form__input"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />

        <div>
          <button className="btn btn--primary" type="submit">
            Add +
          </button>
        </div>
      </div>
    </form>
  );
}
