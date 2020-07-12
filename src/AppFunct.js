import React, { Fragment, useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [position, setPosition] = useState({ x: null, y: null });
  const incrementCount = (action) => {
    action === "+" ? setCount(count + 1) : setCount(count - 1);
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
  const handleMouseMove = (event) => {
    setPosition({ x: event.pageX, y: event.pageY });
  };
  return (
    <Fragment>
      <div>Learn React;</div>
      <div>
        <button onClick={() => incrementCount("+")}>Increment Count</button>
        <button onClick={() => incrementCount("-")}>Decrease Count</button>
        <p>{count}</p>
        <p>Mouse Positio</p>
        <p>{JSON.stringify(position, null, 2)}</p>
      </div>
    </Fragment>
  );
};

export default App;
