import React, { useState, useEffect } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";

const App1 = () => {
    const [user, setUser] = useState([]);
    const [userinput, setUserinput] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => setUser(users));
  }, []);

    const userHandler = (e) => {
      setUserinput(e.target.value);
    };
  return (
    <div>
      <Searchbar userinput={userinput} searchHandle={userHandler} />
      <div className="Card-wrapper"> {user.name} </div>
    </div>
  );
};

export default App1;
