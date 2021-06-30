import React, { useState } from "react";

function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);

  // increment counter by 1
  const handleIncrement1 = () => {
    setCount(prevCount => prevCount + 1);
  };

  //increment counter by 10
  const handleIncrement2 = () => {
    setCount(prevCount => prevCount + 10);
  };

   //increment counter by 100
   const handleIncrement3 = () => {
    setCount(prevCount => prevCount + 100);
  };

   //increment counter by 1000
   const handleIncrement4 = () => {
    setCount(prevCount => prevCount + 1000);
  };

  return (
    <div>
      <div>

        <button onClick={handleIncrement1}>+1</button>
        <button onClick={handleIncrement2}>+10</button>
        <button onClick={handleIncrement3}>+100</button>
        <button onClick={handleIncrement4}>+1000</button>
        
        

        <h5>Count is {count}</h5>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;