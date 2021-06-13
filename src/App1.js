import React, { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Card from "./components/Card";

const App1 = () => {
  const [users, setUser] = useState([]);
  const [userinput, setUserinput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((user) => setUser(user));
  }, []);

  const userHandler = (e) => {
    setUserinput(e.target.value);
  };
  const filteredList = users
    .filter((user) => {
      return user.name.toLowerCase().includes(userinput.toLowerCase());
    })
    .map(({ id, name, username, email }) => (
      <Card id={id} key={id} name={name} username={username} email={email} />
    ));
  return (
    <div>
      <Searchbar userinput={userinput} searchHandle={userHandler} />
      <div className="Card-wrapper"> {filteredList} </div>
    </div>
  );
};

export default App1;
