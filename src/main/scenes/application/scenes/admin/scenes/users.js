import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../services/actions";
import EditUserForm from "../components/edit-form-user";
import Row from "../components/row";
import AddUserForm from "../components/add-form-user";

export default function Users() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const [usersList, setUsers] = useState([]);

  let [formvisibility, setFormVisibility] = useState(false);

  useEffect(() => {
    dispatch(actions.getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!!users) {
      setUsers(users);
    }
  }, [users]);

  const editUser = (id) => {
    setFormVisibility((prevShownForm) => ({
      ...prevShownForm,
      [id]: !prevShownForm[id],
    }));
  };

  const deleteUser = (userID) => {
    dispatch(actions.deleteUser(userID));
  };
  const renderedUsers = usersList.map((user, index) =>
    formvisibility[user.id] ? (
      <EditUserForm user={user} userId={user.id} />
    ) : (
      <Row user={user} editUser={editUser} deleteUser={deleteUser} />
    )
  );

  return (
    <React.Fragment>
      <div className="users">
        <input type="checkbox" id="menuToggle" />
        <label className="btn btn--primary btn--add--user" htmlFor="menuToggle">
          Add new User +
        </label>
        <div className="collapsed-card-user">
          <AddUserForm />
        </div>
        <table className="users__table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderedUsers}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
