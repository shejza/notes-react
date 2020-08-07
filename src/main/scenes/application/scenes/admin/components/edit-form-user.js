import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";

export default function EditUserForm({ user, userId }) {
  const dispatch = useDispatch();

  const formDefaultValues = {
    name: user.name,
    email: user.email,
  };

  const [formValues, setFormValues] = useState(formDefaultValues);
  const { name, email } = formValues;

  function handleChange(e) {
    const target = e.target;
    console.log(target.value);
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const _formValues = {
      ...formValues,
    };

    dispatch(actions.updateUser(_formValues, userId));
  };

  return (
    <tr key={userId}>
      <td>
      <input
        type="text"
        className="form__input"
        id="name"
        value={name}
        name="name"
        onChange={handleChange}
      /></td>
     <td>
      <input
        type="text"
        className="form__input"
        id="email"
        value={email}
        name="email"
        onChange={handleChange}
      />
     </td>
      <td>
        <button
          className="btn btn--primary"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </button>
      </td>
    </tr>
  );
}
