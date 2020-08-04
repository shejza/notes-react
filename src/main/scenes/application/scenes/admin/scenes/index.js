import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";

export default function Admin() {
  const dispatch = useDispatch();

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
        <label className="btn btn--primary" for="menuToggle">
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
                <label for="title" className="form__label">
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
                <label for="date" className="form__label">
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
                <label for="total_time" className="form__label">
                  Total time
                </label>
              </div>
            </div>

            {formValuesArray.description.map((item, index) => (
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id={index}
                  value={item}
                  name={"description"}
                  onChange={handleChangeArray}
                />
                <label for="description" className="form__label">
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

        <div className="filter__wrapper">
          <h4>Filter entries by date:</h4>
          <div className="wrapper__of__inputs">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="from"
                placeholder="from"
              />
            </div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="to"
                placeholder="to"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card__small">
              <div className="card__small__header">
                <h4>Camping</h4>
                <div>
                  <button className="btn__icon">
                    <span className="mdi mdi-pencil"></span>
                  </button>
                  <button className="btn__icon">
                    {" "}
                    <span className="mdi mdi-delete-outline"></span>
                  </button>
                </div>
              </div>
              <div className="card__small__desc">
                <h4>- Take sleeping bag</h4>
                <h4>- Take sleeping bag</h4>
                <h4>- Take sleeping bag</h4>
              </div>

              <h4 className="font__date">
                <b>Date:</b> 14.10.2020
              </h4>
              <div className="wrapper__time__btn">
                <h4 className="font__date">
                  <b>Total time:</b> 48h
                </h4>
                <button className="btn btn--primary">Export CSV</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card__small">
              <div className="card__small__header">
                <h4>Camping</h4>
                <div>
                  <button className="btn__icon">
                    <span className="mdi mdi-pencil"></span>
                  </button>
                  <button className="btn__icon">
                    {" "}
                    <span className="mdi mdi-delete-outline"></span>
                  </button>
                </div>
              </div>
              <div className="card__small__desc">
                <h4>- Take sleeping bag</h4>
                <h4>- Take sleeping bag</h4>
                <h4>- Take sleeping bag</h4>
              </div>

              <h4 className="font__date">
                <b>Date:</b> 14.10.2020
              </h4>
              <div className="wrapper__time__btn">
                <h4 className="font__date">
                  <b>Total time:</b> 48h
                </h4>
                <button className="btn btn--primary">Export CSV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
