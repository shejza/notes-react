import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../services/actions";
import { CSVLink } from "react-csv";
import Moment from "moment";
import EditForm from "../components/edit-form";

export default function Cards({ notes }) {
  const dispatch = useDispatch();

  let [formvisibility, setFormVisibility] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [res, setSearchResults] = useState([]);
  const notesLista = !!notes ? notes : [];

  const handleStartDate = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDate = (event) => {
    setEndDate(event.target.value);
  };

  const makeDate = (date) => {
    return Date.parse(date);
  };

  const results = notesLista.filter(
    (note) =>
      makeDate(note.date) >= makeDate(startDate) &&
      makeDate(note.date) <= makeDate(endDate)
  );

  useEffect(() => {
    setSearchResults(results);
  }, [notes]);
  const deleteNote = (noteID) => {
    dispatch(actions.deleteNote(noteID));
  };

  const editNote = (id) => {
    setFormVisibility((prevShownComments) => ({
      ...prevShownComments,
      [id]: !prevShownComments[id],
    }));
  };

  let _results = !!startDate && !!endDate ? results : notesLista;

  const renderedNotes = _results.map((note, index) => (
    <div className="col-md-6" key={index}>
      {formvisibility[note.id] ? (
        <EditForm
          notetitle={note.title}
          notedate={note.date}
          notetime={note.total_time}
          notedescriptions={note.descriptions}
          editNote={editNote}
          noteid={note.id}
        />
      ) : (
        <div className="card__small">
          <div className="card__small__header">
            <h4>{note.title}</h4>
            <div>
              <button className="btn__icon" onClick={() => editNote(note.id)}>
                <span className="mdi mdi-pencil"></span>
              </button>
              <button className="btn__icon" onClick={() => deleteNote(note.id)}>
                <span className="mdi mdi-delete-outline"></span>
              </button>
            </div>
          </div>
          <div className="card__small__desc">
            {note.descriptions.map((desc) => (
              <h4 key={desc.id + "-"}>- {desc.description}</h4>
            ))}
          </div>

          <h4 className="font__date">
            <b>Date:</b> {Moment(note.date).format("DD.MM.YYYY")}
          </h4>
          <div className="wrapper__time__btn">
            <h4 className="font__date">
              <b>Total time:</b> {note.total_time}
            </h4>

            <CSVLink
              className="btn btn--primary"
              data={[
                ["Date:", Moment(note.date).format("DD.MM.YYYY"), ""],
                ["Total time:", note.total_time, ""],
                ["Notes:", note.title, ""],

                [" ", note.descriptions.map((desc) => desc.description)],
              ]}
            >
              Export CSV
            </CSVLink>
          </div>
        </div>
      )}
    </div>
  ));
  return (
    <React.Fragment>
      <div className="content">
        <div className="filter__wrapper">
          <h4>Filter entries by date:</h4>
          <div className="wrapper__of__inputs">
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="from"
                placeholder="10.14.2020"
                value={startDate}
                onChange={handleStartDate}
              />
            </div>
            <div className="form__group">
              <input
                type="text"
                className="form__input"
                id="to"
                placeholder="11.23.2024"
                value={endDate}
                onChange={handleEndDate}
              />
            </div>
          </div>
        </div>

        <div className="row"> {renderedNotes}</div>
      </div>
    </React.Fragment>
  );
}
