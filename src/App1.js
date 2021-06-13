import React, { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";

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
    const filteredList = users.map((user) => {
      return (
        <div>
          {" "}
          {user.name} {user.username}{" "}
        </div>
      );
    });
  return (
    <div>
      <Searchbar userinput={userinput} searchHandle={userHandler} />
      <div className="Card-wrapper"> {filteredList} </div>
    </div>
  );
};

export default App1;
