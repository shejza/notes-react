import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";
import { CSVLink } from "react-csv";
import Moment from "moment";

export default function Cards() {
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

  const deleteNote = (noteID) => {
    dispatch(actions.deleteNote(noteID));
  };

  const renderedNotes = notesList.map((note, index) => (
    <div className="col-md-6" key={note.id}>
      <div className="card__small">
        <div className="card__small__header">
          <h4>{note.title}</h4>
          <div>
            <button className="btn__icon">
              <span className="mdi mdi-pencil"></span>
            </button>
            <button className="btn__icon" onClick={() => deleteNote(note.id)}>
              <span className="mdi mdi-delete-outline"></span>
            </button>
          </div>
        </div>
        <div className="card__small__desc">
          {note.descriptions.map((desc) => (
            <h4>- {desc.description}</h4>
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
              {
                date: note.date,
                totaltime: note.total_time,
                title: note.title,
                description: note.descriptions.map((desc) => desc.description),
              },
            ]}
            headers={[
              { label: "Date", key: "date" },
              { label: "Total Time", key: "totaltime" },
              { label: "Title", key: "title" },
              { label: "Description", key: "description" },
            ]}
          >
            Export CSV
          </CSVLink>
        </div>
      </div>
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

        <div className="row">{renderedNotes}</div>
      </div>
    </React.Fragment>
  );
}
