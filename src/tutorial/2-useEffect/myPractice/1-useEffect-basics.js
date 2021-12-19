import React, { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("I am Done");
    if (value > 0) {
      document.title = `Counting : ${value}`;
    }
  }, [value]);
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasic;
