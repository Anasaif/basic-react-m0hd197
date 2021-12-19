import React, { useState } from "react";

const USeStateCounter = () => {
  const [value, setValue] = useState(0);

  const decreaseValue = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState - 1;
      });
    }, 2000);
  };

  const resetValue = () => {
    setTimeout(() => {
      setValue((startValue) => {
        return startValue * 0;
      });
    }, 1000);
  };

  const increaseValue = () => {
    setTimeout(() => {
      setValue((nextState) => {
        return nextState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h1>regular Counter</h1>
        <h1>{value}</h1>
        <button className="btn" onClick={decreaseValue}>
          Decrease
        </button>
        <button className="btn" onClick={resetValue}>
          Reset
        </button>
        <button className="btn" onClick={increaseValue}>
          Increase
        </button>
      </section>
    </>
  );
};

export default USeStateCounter;
