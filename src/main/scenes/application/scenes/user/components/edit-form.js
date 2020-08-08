import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";

import Moment from "moment";

export default function EditForm({
  notetitle,
  notetime,
  notedate,
  notedescriptions,
  noteid,
  editNote,
}) {
  const dispatch = useDispatch();

  const formDefaultValues = {
    title: notetitle,
    date: Moment(notedate).format("DD.MM.YYYY"),
    total_time: notetime,
  };

  const formArrayValues = {
    description: notedescriptions,
  };

  const [formValues, setFormValues] = useState(formDefaultValues);
  const [formValuesArray, setFormValuesArray] = useState(formArrayValues);
  const { title, date, total_time } = formValues;
  const { description } = formValuesArray;

  function handleChange(e) {
    const target = e.target;

    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  function handleChangeArray(e) {
    const target = e.target;

    setFormValuesArray((prevState) => ({
      ...prevState,

      [target.name]: prevState[target.name].map((item, index) => {
        return index == target.id ? target.value : item;
      }),
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const desc = formValuesArray["description"];

    const descriptions = desc.map((description) =>
      !!description.id ? description.description : description
    );

    const _formValues = {
      ...formValues,
      descriptions,
    };

    dispatch(actions.update(_formValues, noteid));
  };

  const addElement = (name, e) => {
    e.preventDefault();
    setFormValuesArray((prevState) => ({
      ...prevState,
      [name]: [...prevState[name], ""],
    }));
  };

  return (
    <div className="card__small edit-form" key={noteid}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="wrapper__of__three">
          <div className="form__group u-margin-right-24">
            <input
              type="text"
              className="form__input"
              id="title"
              value={title}
              name="title"
              onChange={handleChange}
            />
            <label htmlFor="title" className="form__label">
              Title
            </label>
          </div>

          <div className="form__group u-margin-right-24">
            <input
              type="text"
              className="form__input"
              id="date"
              value={date}
              name="date"
              onChange={handleChange}
            />
            <label htmlFor="date" className="form__label">
              Date
            </label>
          </div>

          <div className="form__group ">
            <input
              type="text"
              className="form__input"
              id="total_time"
              value={total_time}
              name="total_time"
              onChange={handleChange}
            />
            <label htmlFor="total_time" className="form__label">
              Total time
            </label>
          </div>
        </div>

        {description.map((item, index) => (
          <div className="form__group" key={index + "-" + noteid}>
            <input
              type="text"
              className="form__input"
              id={index}
              value={item.description}
              name="description"
              onChange={handleChangeArray}
            />
            <label htmlFor="description" className="form__label">
              Description
            </label>
          </div>
        ))}
        <button
          className="btn btn--no--outline"
          onClick={(e) => addElement("description", e)}
        >
          Add description +
        </button>
        <div className="button__float__right">
          <button
            className="btn btn--secondary"
            type="submit"
            onClick={() => editNote(noteid)}
          >
            Cancel
          </button>
          <button className="btn btn--primary" type="submit">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
