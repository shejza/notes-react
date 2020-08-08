import React from "react";

export default function Row({ user, editUser, deleteUser }) {
  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className="column__actions">
        <div>
          <button className="btn__icon" onClick={() => editUser(user.id)}>
            <span className="mdi mdi-pencil"></span>
          </button>
          <button className="btn__icon" onClick={() => deleteUser(user.id)}>
            <span className="mdi mdi-delete-outline"></span>
          </button>
        </div>
      </td>
    </tr>
  );
}
