import React, { useState } from "react";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";
import Card from "./UI/Card";

function UserForm(props) {
  const [enteredUsername, setUsername] = useState("");
  const [enteredAge, setAge] = useState("");
  const [isError, setIsError] = useState(false);

  function usernameInputHandler(event) {
    setUsername(event.target.value);
  }

  function ageInputHandler(event) {
    setAge(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      setIsError(true);
      return;
    }
    props.addUser(enteredUsername, enteredAge);
    setUsername("");
    setAge("");
  }

  function dismissError() {
    setIsError(false);
  }

  return (
    <div>
      {isError && (
        <ErrorModal
          key="error-modal"
          title="An error occured!"
          message="Enter a valid name and age!"
          dismissError={dismissError}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={usernameInputHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            value={enteredAge}
            id="age"
            type="number"
            onChange={ageInputHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default UserForm;
