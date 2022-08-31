import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import React, { useState } from "react";

function App() {
  const [usersArray, setUsersArray] = useState([
    {
      key: Math.random().toString(),
      name: "Joe",
      age: 22,
    },
    {
      key: Math.random().toString(),
      name: "Sarah",
      age: 37,
    },
  ]);

  function addUser(uName, uAge) {
    setUsersArray((prevUsers) => {
      return [
        ...prevUsers,
        { key: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  }

  return (
    <div>
      <UserForm addUser={addUser} />
      <UserList users={usersArray} />
    </div>
  );
}

export default App;
