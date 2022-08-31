import ListItem from "./ListItem";
import "./UserList.css";

function UserList(props) {
  return (
    <ul>
      {props.users.map((user) => (
        <ListItem name={user.name} age={user.age} key={user.key} />
      ))}
    </ul>
  );
}

export default UserList;
