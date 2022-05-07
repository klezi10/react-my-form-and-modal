import { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import "./styles.css"

export default function App() {
  const [usersList, setUsersList] = useState([])

  function handleAddUser(enteredName, enteredAge) {
    setUsersList(prevList => {
      return [...prevList, {
        id: Math.random().toString(),
        name: enteredName,
        age: enteredAge
      }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={usersList} />
    </div>
  );
}
