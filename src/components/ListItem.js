import "./ListItem.css";

function ListItem(props) {
  return (
    <li>
      {props.name} ({props.age} years old)
    </li>
  );
}

export default ListItem;
