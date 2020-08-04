import { headers } from "../../../../../../helpers/headers";
import { apiUrl } from "../../../../../../helpers/api-url";
import { handleResponse } from "../../../../../../helpers/handle-response";

export const apiCalls = {
  createNote,
};

function createNote(formValues) {
  const formData = new FormData();

  formData.append("title", formValues.title);
  formData.append("date", formValues.date);
  formData.append("total_time", formValues.total_time);

  formValues.descriptions.map((item, index) =>
    formData.append(`descriptions[${index}]`, item)
  );

  //   const requestUrl = `${apiUrl}notes`;
  const requestOptions = {
    method: "POST",
    headers,
    body: formData,
  };

  return fetch("http://127.0.0.1:8000/notes", requestOptions).then((response) =>
    response.json()
  );
}
