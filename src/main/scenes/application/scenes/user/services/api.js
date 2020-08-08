import { headers } from "../../../../../../helpers/headers";
import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";
import download from "js-file-download";

export const apiCalls = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
};

function getNotes() {
  const requestUrl = `${apiUrl}notes`;
  const requestOptions = {
    method: "GET",
    headers,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function createNote(formValues) {
  const formData = new FormData();

  formData.append("title", formValues.title);
  formData.append("date", formValues.date);
  formData.append("total_time", formValues.total_time);

  formValues.descriptions.map((item, index) =>
    formData.append(`descriptions[${index}]`, item)
  );

  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };

  return fetch("http://127.0.0.1:8000/notes", requestOptions).then((response) =>
    response.json()
  );
}

function updateNote(formValues, noteID) {
  const formData = new FormData();

  formData.append("title", formValues.title);
  formData.append("date", formValues.date);
  formData.append("total_time", formValues.total_time);
  console.log(formValues);
  formValues.descriptions.map((item, index) =>
    formData.append(`descriptions[${index}]`, item)
  );

  const requestUrl = `${apiUrl}notes/${noteID}`;
  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function deleteNote(id) {
  const requestUrl = `${apiUrl}notes/${id}`;

  const requestOptions = {
    method: "DELETE",
    headers,
  };
  return fetch(requestUrl, requestOptions).then(handleResponse);
}
