import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () =>{
    setCount(count + 1);
  }
  const handleDecrement = () =>{
    setCount(count - 1);
  }
  
  return (
    <div data-testid="use-state-component">
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default UseState;