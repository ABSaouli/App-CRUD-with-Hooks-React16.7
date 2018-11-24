import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import AddUserForm from "./model/AddUserForm";
import EditUserForm from "./model/EditUserForm";
import UserTable from "./table/UserTable";
import ExampleComponent from "./ExampleComponent";

const App = () => {
  // Data
  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" }
  ];

  const initialFormState = { id: null, name: "", username: "" };

  // Setting state
  const [displayed, setDisplayed] = useState(false);
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  return (
    <Fragment>
      {displayed ? <ExampleComponent /> : ""}

      <Link to="/app">HOME</Link>
      <Link to="/clock">Clock</Link>
      <button
        onClick={() => setDisplayed(!displayed)}
        className="button muted-button"
      >
        Display Example
      </button>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <Fragment>
                <h2>Edit user</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable
              users={users}
              editRow={editRow}
              deleteUser={deleteUser}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
