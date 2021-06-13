import React, { useState, useEffect } from "react";

const App1 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => setUser(users));
  }, []);

  return (
    <div>
      <h2>This is from the App1</h2>
      {user.length}
    </div>
  );
};

export default App1;
