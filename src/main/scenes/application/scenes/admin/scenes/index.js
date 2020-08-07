import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";
import Cards from "./cards";
import Moment from "moment";

export default function Admin() {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  const [notesList, setNotes] = useState([]);
  useEffect(() => {
    dispatch(actions.getAll());
  }, [dispatch]);

  useEffect(() => {
    if (!!notes) {
      setNotes(notes);
    }
  }, [notes]);

  const formDefaultValues = {
    title: "",
    date: "",
    total_time: "",
  };

  const formArrayValues = {
    description: [""],
  };
  const [formValues, setFormValues] = useState(formDefaultValues);
  const [formValuesArray, setFormValuesArray] = useState(formArrayValues);
  const { title, date, total_time } = formValues;
  const { description } = formValuesArray;
  let [visibility, setVisibility] = useState(false);

  function handleChange(e) {
    const target = e.target;
    console.log(target);
    setFormValues((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  }

  function handleChangeArray(e) {
    const target = e.target;
    console.log(target);
    setFormValuesArray((prevState) => ({
      ...prevState,
      [target.name]: prevState[target.name].map((item, index) => {
        return index == target.id ? target.value : item;
      }),
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const descriptions = formValuesArray["description"];
    const _formValues = {
      ...formValues,
      descriptions,
    };

    dispatch(actions.create(_formValues));
    window.location.reload();
    setVisibility(true);
    setTimeout(() => {
      setVisibility(false);
    }, 3000);
  };

  const addElement = (name, e) => {
    e.preventDefault();
    setFormValuesArray((prevState) => ({
      ...prevState,
      [name]: [...prevState[name], ""],
    }));
  };

  return (
    <React.Fragment>
      {visibility && (
        <div className="alert alert-success" role="alert">
          Your note was successfully created!
        </div>
      )}
      <div className="content">
        <input type="checkbox" id="menuToggle" />
        <label className="btn btn--primary" htmlFor="menuToggle">
          Add new Notes +
        </label>

        <div className="card collapsed-card">
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

            {formValuesArray.description.map((item, index) => (
              <div className="form__group" key={index}>
                <input
                  type="text"
                  className="form__input"
                  id={index}
                  value={item}
                  name={"description"}
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
              <button className="btn btn--primary" type="submit">
                Add Note
              </button>
            </div>
          </form>
        </div>

        <Cards notes={notesList} />
      </div>
    </React.Fragment>
  );
}
