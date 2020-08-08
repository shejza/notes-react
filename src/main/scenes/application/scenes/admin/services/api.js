import { headers } from "../../../../../../helpers/headers";
import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";

export const apiCalls = {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
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
  const requestUrl = `${apiUrl}notes`;
  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
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

function getUsers() {
  const requestUrl = `${apiUrl}users`;
  const requestOptions = {
    method: "GET",
    headers,
  };
  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function createUser(formValues) {
  const formData = new FormData();

  formData.append("name", formValues.name);
  formData.append("email", formValues.email);
  formData.append("password", formValues.password);
  formData.append("role_id", 2);

  const requestOptions = {
    method: "POST",
    body: formData,
  };

  return fetch(
    "http://127.0.0.1:8000/register",
    requestOptions
  ).then((response) => response.json());
}

function updateUser(formValues, userID) {
  const formData = new FormData();

  formData.append("name", formValues.name);
  formData.append("email", formValues.email);

  const requestUrl = `${apiUrl}users/${userID}`;
  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };

  return fetch(requestUrl, requestOptions).then((response) => response.json());
}

function deleteUser(id) {
  const requestUrl = `${apiUrl}users/${id}`;

  const requestOptions = {
    method: "DELETE",
    headers,
  };
  return fetch(requestUrl, requestOptions).then(handleResponse);
}
