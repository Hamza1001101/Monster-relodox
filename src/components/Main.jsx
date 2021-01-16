import React, { useState } from "react";

const Main = () => {
  const [counter, setCounter] = useState(0);

  const [decreaser, setDecreaser] = useState(10);

  function decreaseHandler() {
    if (decreaser <= 0) return;
    setDecreaser(decreaser - 1);
  }

  const handleClick = () => { 
    if (counter === 10) return;
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>hello from Main-component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        accusantium numquam dignissimos sint in sed optio atque eius? Cum,
        saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        dolore perferendis accusamus qui, vitae facilis nemo accusantium modi?
        Excepturi veniam fuga culpa dolorum aperiam.
      </p>
      <h1> {counter} </h1>
      <h1> {decreaser} </h1>
      <button onClick={handleClick} style={{ cursor: "pointer" }}>
        Add +
      </button>
      <button
        style={{
          color: "black",
          cursor: "pointer",
          backgroundColor: "white",
        }}
        onClick={decreaseHandler}
      >
        Substract -
      </button>
    </div>
  );
};
export default Main;
